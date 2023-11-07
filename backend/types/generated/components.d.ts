import type { Schema, Attribute } from '@strapi/strapi';

export interface ElementsFeature extends Schema.Component {
  collectionName: 'components_elements_features';
  info: {
    displayName: 'Feature';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.String;
    image: Attribute.Media;
  };
}

export interface LayoutFooter extends Schema.Component {
  collectionName: 'components_layout_footers';
  info: {
    displayName: 'Footer';
    icon: 'oneToMany';
    description: '';
  };
  attributes: {
    menuLinks: Attribute.Component<'links.intern', true>;
    legalLinks: Attribute.Component<'links.intern', true>;
  };
}

export interface LayoutNavigation extends Schema.Component {
  collectionName: 'components_layout_navigations';
  info: {
    displayName: 'Navigation';
    icon: 'oneToMany';
  };
  attributes: {
    links: Attribute.Component<'links.intern', true>;
  };
}

export interface LinksIntern extends Schema.Component {
  collectionName: 'components_links_interns';
  info: {
    displayName: 'Intern';
    icon: 'link';
  };
  attributes: {
    title: Attribute.String;
    page: Attribute.Relation<'links.intern', 'oneToOne', 'api::page.page'>;
  };
}

export interface SectionsContent extends Schema.Component {
  collectionName: 'components_sections_contents';
  info: {
    displayName: 'content';
    icon: 'cube';
  };
  attributes: {
    title: Attribute.String;
    content: Attribute.RichText;
  };
}

export interface SectionsFeatures extends Schema.Component {
  collectionName: 'components_sections_features';
  info: {
    displayName: 'Features';
    icon: 'apps';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    features: Attribute.Component<'elements.feature', true>;
  };
}

export interface SectionsHero extends Schema.Component {
  collectionName: 'components_sections_heroes';
  info: {
    displayName: 'Hero';
    icon: 'crown';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    description: Attribute.Text;
    image: Attribute.Media & Attribute.Required;
  };
}

export interface SharedSeo extends Schema.Component {
  collectionName: 'components_shared_seos';
  info: {
    displayName: 'seo';
    icon: 'search';
    description: '';
  };
  attributes: {
    metaTitle: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    metaDescription: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 160;
      }>;
    metaImage: Attribute.Media;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'elements.feature': ElementsFeature;
      'layout.footer': LayoutFooter;
      'layout.navigation': LayoutNavigation;
      'links.intern': LinksIntern;
      'sections.content': SectionsContent;
      'sections.features': SectionsFeatures;
      'sections.hero': SectionsHero;
      'shared.seo': SharedSeo;
    }
  }
}
