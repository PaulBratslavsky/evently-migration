import type { Attribute, Schema } from '@strapi/strapi';

export interface ElementsLink extends Schema.Component {
  collectionName: 'components_elements_links';
  info: {
    displayName: 'Link';
  };
  attributes: {
    href: Attribute.String;
    isButton: Attribute.Boolean & Attribute.DefaultTo<false>;
    isExternal: Attribute.Boolean & Attribute.DefaultTo<false>;
    text: Attribute.String;
  };
}

export interface ElementsListText extends Schema.Component {
  collectionName: 'components_elements_list_texts';
  info: {
    displayName: 'List Text';
  };
  attributes: {
    text: Attribute.String;
  };
}

export interface ElementsLogo extends Schema.Component {
  collectionName: 'components_elements_logos';
  info: {
    description: '';
    displayName: 'Logo';
  };
  attributes: {
    image: Attribute.Media<'images'>;
  };
}

export interface ElementsMetaData extends Schema.Component {
  collectionName: 'components_elements_meta_data';
  info: {
    displayName: 'Meta Data';
  };
  attributes: {
    metaDescription: Attribute.Text;
    metaImage: Attribute.Media<'images'>;
    metaTitle: Attribute.String;
  };
}

export interface ElementsSocial extends Schema.Component {
  collectionName: 'components_elements_socials';
  info: {
    displayName: 'Social';
  };
  attributes: {
    link: Attribute.String;
    type: Attribute.Enumeration<['LINKEDIN', 'GITHUB', 'TWITTER', 'YOUTUBE']>;
  };
}

export interface LayoutHero extends Schema.Component {
  collectionName: 'components_layout_heroes';
  info: {
    displayName: 'Hero';
  };
  attributes: {
    features: Attribute.Component<'elements.list-text', true>;
    heading: Attribute.String;
    images: Attribute.Media<'images', true>;
    subHeading: Attribute.String;
    text: Attribute.Text;
  };
}

export interface LayoutNavigation extends Schema.Component {
  collectionName: 'components_layout_navigations';
  info: {
    description: '';
    displayName: 'Navigation';
  };
  attributes: {
    location: Attribute.String;
    name: Attribute.String;
    navItem: Attribute.Component<'elements.link', true>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'elements.link': ElementsLink;
      'elements.list-text': ElementsListText;
      'elements.logo': ElementsLogo;
      'elements.meta-data': ElementsMetaData;
      'elements.social': ElementsSocial;
      'layout.hero': LayoutHero;
      'layout.navigation': LayoutNavigation;
    }
  }
}
