'use strict';

/**
 * rag service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::rag.rag');
