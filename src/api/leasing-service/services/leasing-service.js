'use strict';

/**
 * leasing-service service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::leasing-service.leasing-service');
