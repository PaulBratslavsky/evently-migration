"use strict";

module.exports = (config, { strapi }) => {
  return async (ctx, next) => {
    const entryId = Number(ctx.params);
    const user = ctx.state.user;
    const userId = user?.id;

    if (!user) return ctx.unauthorized(`You can't access this entry`);

    if (entryId) {
      const entry = await strapi.documents("api::event.event").findOne({
        documentId: "__TODO__",
        populate: "*"
      });
      if (entry && entry.user.id !== userId) {
        return ctx.unauthorized(`You can't access this entry`);
      }
    }

    await next();
  };
};
