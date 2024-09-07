import { create } from './util'
import path from 'node:path'

// get esm-compatible script metadata
import { createRequire } from 'node:module'
const require = createRequire(import.meta.url)

// get resolved filenames for normalize.css
const normalizeCSS = require.resolve('@csstools/normalize.css')
const normalizeDir = path.dirname(normalizeCSS)
const normalizeOpinionatedCSS = path.join(normalizeDir, 'opinionated.css')

// get resolved filenames for sanitize.css
const sanitizeCSS = require.resolve('sanitize.css')
const sanitizeDir = path.dirname(sanitizeCSS)
const sanitizeAssetsCSS = path.join(sanitizeDir, 'assets.css')
const sanitizeFormsCSS = path.join(sanitizeDir, 'forms.css')
const sanitizeReduceMotionCSS = path.join(sanitizeDir, 'reduce-motion.css')
const sanitizeTypographyCSS = path.join(sanitizeDir, 'typography.css')
const sanitizeSystemUiCSS = path.join(sanitizeDir, 'system-ui.css')
const sanitizeUiMonospace = path.join(sanitizeDir, 'ui-monospace.css')

// export a hashmap of css library filenames
export const parsableFilenames = create({
	[normalizeCSS]: true,
	[normalizeOpinionatedCSS]: true,
	[sanitizeCSS]: true,
	[sanitizeAssetsCSS]: true,
	[sanitizeFormsCSS]: true,
	[sanitizeReduceMotionCSS]: true,
	[sanitizeTypographyCSS]: true,
	[sanitizeSystemUiCSS]: true,
	[sanitizeUiMonospace]: true,
})

// export a hashmap of css library filenames by id
export const resolvedFilenamesById = create({
	'normalize': [normalizeCSS],
	'normalize/opinionated': [normalizeOpinionatedCSS],
	'normalize/*': [normalizeOpinionatedCSS],
	'sanitize': [sanitizeCSS],
	'sanitize/assets': [sanitizeAssetsCSS],
	'sanitize/forms': [sanitizeCSS, sanitizeFormsCSS],
	'sanitize/page': [sanitizeAssetsCSS], // deprecated; remaining for v10.0.0 compatibility
	'sanitize/reduce-motion': [sanitizeCSS, sanitizeReduceMotionCSS],
	'sanitize/system-ui': [sanitizeCSS, sanitizeSystemUiCSS],
	'sanitize/typography': [sanitizeCSS, sanitizeTypographyCSS],
	'sanitize/ui-monospace': [sanitizeCSS, sanitizeUiMonospace],
	'sanitize/*': [sanitizeCSS, sanitizeFormsCSS],
})
