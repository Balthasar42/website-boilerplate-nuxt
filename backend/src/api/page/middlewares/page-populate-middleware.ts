const populate = {
  seo: {
    // populate: "*",
    fields: ["metaTitle", "metaDescription"],
    populate: { shareImage: true },
  },
  sections: {
    // populate: "*",
    populate: {
      image: {
        fields: ["name", "url", "alternativeText", "caption", "width", "height", "formats"],
      },
    },
  },
};

// const populate = ["seo", "sections"]

export default (config, { strapi }) => {
  return async (context, next) => {
    context.query = {
      populate,
      filters: { slug: context.query.filters.slug },
      locale: context.query.locale,
    };

    await next();
  };
};
