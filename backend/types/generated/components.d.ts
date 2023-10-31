import type { Schema, Attribute } from '@strapi/strapi';

export interface LayoutFooter extends Schema.Component {
  collectionName: 'components_layout_footers';
  info: {
    displayName: 'Footer';
    icon: 'oneToMany';
  };
  attributes: {
    links: Attribute.Component<'links.intern', true>;
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

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'layout.footer': LayoutFooter;
      'layout.navigation': LayoutNavigation;
      'links.intern': LinksIntern;
    }
  }
}
