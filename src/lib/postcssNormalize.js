import { resolvedFilenamesById } from './cssMap'
import parse from './parse'

const postcssPlugin = (commentsTransformer, opts) => root => {
	const promises = []
	const insertedFilenames = {}

	// use @import insertion point
	root.walkAtRules(
		importRegExp,
		atrule => {
			// get name as a fallback value for the library (e.g. @import-normalize is like @import "normalize.css")
			const name = atrule.name.match(importRegExp)[1]

			// get url from "library", 'library', url("library"), url('library'), or the fallback value
			const url = (atrule.params.match(paramsRegExp) || []).slice(1).find(part => part) || name

			if (url) {
				// get the css id by removing css extensions
				const cssId = url.replace(cssExtRegExp, '')

				if (cssId in resolvedFilenamesById) {
					// promise the library import is replaced with its contents
					promises.push(
						Promise.all(
							resolvedFilenamesById[cssId].filter(
								// ignore filenames that have already been inserted
								filename => insertedFilenames[filename] = opts.allowDuplicates || !(filename in insertedFilenames)
							).map(
								// parse the file (the file and css are conservatively cached)
								filename => parse(filename, commentsTransformer)
							)
						).then(roots => {
							if (roots.length) {
								// combine all the library nodes returned by the parsed files
								const nodes = roots.reduce(
									(all, root) => all.concat(root.nodes),
									[]
								)

								// replace the import with all the library nodes
								atrule.replaceWith(...nodes)
							}
						})
					)
				}
			}
		}
	)

	return Promise.all([].concat(
		// promise the library imports are replaced with their contents
		promises,
		// promise certain libraries are prepended
		Promise.all(
			[].concat(
				opts.forceImport || []
			).reduce(
				// filter the id to be a known id or boolean true
				(all, id) => {
					if (id === true) {
						all.push(...resolvedFilenamesById.normalize)
					} else if (typeof id === 'string') {
						const cssId = id.replace(cssExtRegExp, '')

						if (cssId in resolvedFilenamesById) {
							all.push(...resolvedFilenamesById[cssId])
						}
					}

					return all
				},
				[]
			).filter(
				// ignore filenames that have already been inserted
				filename => insertedFilenames[filename] = opts.allowDuplicates || !(filename in insertedFilenames)
			).map(
				// parse the file (the file and css are conservatively cached)
				filename => parse(filename, commentsTransformer)
			)
		).then(roots => {
			if (roots.length) {
				// combine all the library nodes returned by the parsed files
				const nodes = roots.reduce(
					(all, root) => all.concat(root.nodes),
					[]
				)

				// prepend the stylesheet with all the library nodes
				root.prepend(...nodes)
			}
		})
	))
}

const cssExtRegExp = /\.css\b/g
const importRegExp = /^import(?:-(normalize|sanitize))?$/
const paramsRegExp = /^\s*(?:url\((?:"(.+)"|'(.+)')\)|"(.+)"|'(.+)')[\W\w]*$/

export default postcssPlugin
