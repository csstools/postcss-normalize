import { create } from './util'
import Module from 'module'
import path from 'path'
import { URL } from 'url'

// get esm-compatible script metadata
const currentURL = import.meta.url
const currentFilename = new URL(currentURL).pathname
const currentDirname = path.dirname(currentFilename)

// get resolved filenames for css libraries
const normalizeCSS = resolve('@csstools/normalize.css')
const normalizeOpinionatedCSS = resolve('@csstools/normalize.css/opinionated.css')
const sanitizeCSS = resolve('sanitize.css')
const sanitizeFormsCSS = resolve('sanitize.css/forms.css')
const sanitizeTypographyCSS = resolve('sanitize.css/typography.css')

// export a hashmap of css library filenames
export const parsableFilenames = create({
	[normalizeCSS]: true,
	[normalizeOpinionatedCSS]: true,
	[sanitizeCSS]: true,
	[sanitizeFormsCSS]: true,
	[sanitizeTypographyCSS]: true
})

// export a hashmap of css library filenames by id
export const resolvedFilenamesById = create({
	'normalize': [normalizeCSS],
	'normalize/opinionated': [normalizeOpinionatedCSS],
	'normalize/*': [normalizeOpinionatedCSS],
	'sanitize': [sanitizeCSS],
	'sanitize/forms': [sanitizeCSS, sanitizeFormsCSS],
	'sanitize/page': [sanitizeCSS],
	'sanitize/typography': [sanitizeCSS, sanitizeTypographyCSS],
	'sanitize/*': [sanitizeCSS, sanitizeFormsCSS, sanitizeTypographyCSS]
})

// get the resolved filename of a package/module
function resolve (id) {
	return resolve[id] = resolve[id] || Module._resolveFilename(id, {
		id: currentFilename,
		filename: currentFilename,
		paths: Module._nodeModulePaths(currentDirname)
	})
}
