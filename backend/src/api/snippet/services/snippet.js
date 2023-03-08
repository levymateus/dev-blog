'use strict';

/**
 * snippet service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::snippet.snippet');
