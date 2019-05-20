/**
 * Require and add jQuery to windows Object.
 */
window.$ = window.jQuery = require('jquery');

/**
 * Stuff in the whole Boostrap Bundle (bootstrap.js)
 * and Popper.js
 */
window.Popper = require('popper.js').default;
require('bootstrap');

/**
 * Import customized bootstrap scss for Extraction.
 */
require('../scss/bootstrap.scss');

require('../scss/main.scss');