const { rootPath } = require('../common/utils');

/**
 * Create Webpack Aliases
 * @param {Array} aliases List of aliases with directory path
 * @returns  List of webpack aliases
 */
function createWebpackAliases(aliases) {
  const result = {};
  for (const name in aliases) result[name] = rootPath(aliases[name]);
  return result;
}

/**
 * Export webpack aliases
 *
 * @IMPORTANT : Make sure to assign aliases entries in project's
 * [tsconfig.json] and [.eslintrc] file to have intellesense support and
 * prevent eslint errors in code editors.
 *
 * @NOTE : Format of other aliases entries might differ from this file, so make sure to
 * use the format which is already assigned for default aliases in other files.
 */
module.exports = createWebpackAliases({
  '@components': 'src/components',
  '@common': 'src/common',
  '@assets': 'assets',
  '@src': 'src',
  '@styles': 'src/styles',
  '@tools': 'tools',
});
