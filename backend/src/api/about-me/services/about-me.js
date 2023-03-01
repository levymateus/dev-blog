'use strict';

/**
 * about-me service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::about-me.about-me');
