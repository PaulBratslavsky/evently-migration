/**
 * event controller
 */

import { factories } from "@strapi/strapi";

export default factories.createCoreController(
  "api::event.event",
  ({ strapi }) => ({
    async slugExists(ctx) {
      const slug = ctx.params.slug;
      const query = { filters: { slug: slug } };

      const entities = await strapi.documents("api::event.event").findMany(query);
      
      const exists = entities.length > 0;  
      return { slugAlreadyExists: exists }
    },
  })
);
