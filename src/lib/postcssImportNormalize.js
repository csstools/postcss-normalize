import { create } from './util'
import { parsableFilenames, resolvedFilenamesById } from './cssMap'
import parse from './parse'
import readFile from './readFile'

export default commentsTransformer => opts => {
	opts = create(opts)

	// return an postcss-import configuration
	return create({
		load (filename, importOptions) {
			return filename in parsableFilenames
				// parse the file (the file and css are conservatively cached)
				? parse(filename, commentsTransformer).then(
					root => root.toResult({ to: filename, map: true }).css
				)
			: typeof opts.load === 'function'
				// otherwise, use the override loader
				? opts.load.call(null, filename, importOptions)
			// otherwise, return the (conservatively cached) contents of the file
			: readFile(filename)
		},
		resolve (id, basedir, importOptions) {
			// get the css id by removing css extensions
			const cssId = id.replace(cssExtRegExp, '')

			return cssId in resolvedFilenamesById
				// return the known resolved path for the css id
				? resolvedFilenamesById[cssId]
			: typeof opts.resolve === 'function'
				// otherwise, use the override resolver
				? opts.resolve.call(null, id, basedir, importOptions)
			// otherwise, return the id to be resolved by postcss-import
			: id
		}
	})
}

const cssExtRegExp = /\.css\b/g
