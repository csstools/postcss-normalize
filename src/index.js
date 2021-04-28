import { create } from './lib/util';
import postcssBrowserComments from 'postcss-browser-comments';
import postcssImportNormalize from './lib/postcssImportNormalize';
import postcssNormalize from './lib/postcssNormalize';

const plugin = opts => {
	opts = create(opts);

	const commentsTransformer = postcssBrowserComments(opts).Once;
	const normalizeTransformer = postcssNormalize(commentsTransformer, opts);
	const postcssImportConfig = postcssImportNormalize(commentsTransformer, opts);

	return {
		postcssPlugin: 'postcss-normalize',
		Once(root) {
			return normalizeTransformer(root)
		},
		postcssImport: postcssImportConfig
	}
}

plugin.postcss = true;

export default plugin;
