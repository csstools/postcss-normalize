import { create } from './util'
import readFile from './readFile'
import postcss from 'postcss'

const cache = create(null)

export default (filename, transformer) => readFile(filename).then(
	// cache the parsed css root
	css => (cache[css] = cache[css] || postcss.parse(css, { from: filename }))
).then(
	// clone the cached root
	root => root.clone()
).then(
	// transform the cloned root
	clone => Promise.resolve(
		transformer(clone)
	).then(
		// resolve the cloned root
		() => clone
	)
)
