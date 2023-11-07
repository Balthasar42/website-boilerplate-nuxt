const populate = {
  seo: {
    fields: ["metaTitle", "metaDescription"],
    populate: { shareImage: true },
  },
  sections: {
    populate: {
      image: {
        fields: ["name", "url", "alternativeText", "caption", "width", "height", "formats"],
      },
      features: {
        populate: true
      }
    },
  },
};

export default (config, { strapi }) => {
  return async (context, next) => {
    context.query = {
      populate,
      locale: context.query.locale,
    };

    await next();
  };
};
