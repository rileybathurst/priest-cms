'use strict';

/**
 * craftsmanship service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::craftsmanship.craftsmanship');
