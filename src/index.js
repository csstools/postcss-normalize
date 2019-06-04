import { assign, create } from './lib/util';
import postcss from 'postcss';
import postcssBrowserComments from 'postcss-browser-comments';
import postcssImportNormalize from './lib/postcssImportNormalize';
import postcssNormalize from './lib/postcssNormalize';

export default postcss.plugin('postcss-normalize', opts => {
	opts = create(opts);

	const commentsTransformer = postcssBrowserComments(opts);
	const normalizeTransformer = postcssNormalize(commentsTransformer, opts);
	const postcssImportConfig = postcssImportNormalize(commentsTransformer, opts);

	return assign(normalizeTransformer, { postcssImport: postcssImportConfig });
});
