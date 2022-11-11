'use strict';

/**
 * snippet router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::snippet.snippet');
