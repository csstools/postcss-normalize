import { create } from './util'
import path from 'path'
import fs from 'fs'

const cache = create()

export default async function readFile (filename) {
	filename = path.resolve(filename)

	cache[filename] = cache[filename] || create()

	return new Promise(
		(resolve, reject) => fs.stat(
			filename,
			(statsError, { mtime }) => statsError
				? reject(statsError)
			: mtime === cache[filename].mtime
				? resolve(cache[filename].data)
			: fs.readFile(
				filename,
				'utf8',
				(readFileError, data) => readFileError
					? reject(readFileError)
				: resolve(
					(cache[filename] = { data, mtime }).data
				)
			)
		)
	)
}
