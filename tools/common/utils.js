const path = require('path');

/**
 * Checks if process NODE_ENV in 'development' mode
 * @returns {boolean}
 */
function inDev() {
  return process.env.NODE_ENV == 'development';
}

/**
 * Root Path
 *
 * @param {string} to Path of location in root dir
 * @returns {string} Path
 */
function rootPath(to = '') {
  return path.join(process.cwd(), to);
}

// Export utilities
module.exports = {
  inDev,
  rootPath,
};
