"use strict";
/**
 * Compares two strings ignoring case.
 * @public
 * @param {String} a - First string to compare.
 * @param {String} b - Second string to compare.
 * @returns {Boolean} Result indicating string equality.
 */
module.exports = function(a, b) {
  return a.toLowerCase() === b.toLowerCase();
};
