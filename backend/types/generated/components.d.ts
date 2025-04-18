import type { Schema, Struct } from '@strapi/strapi';

export interface ElementsLink extends Struct.ComponentSchema {
  collectionName: 'components_elements_links';
  info: {
    displayName: 'Link';
  };
  attributes: {
    href: Schema.Attribute.String;
    isButton: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    isExternal: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    text: Schema.Attribute.String;
  };
}

export interface ElementsListText extends Struct.ComponentSchema {
  collectionName: 'components_elements_list_texts';
  info: {
    displayName: 'List Text';
  };
  attributes: {
    text: Schema.Attribute.String;
  };
}

export interface ElementsLogo extends Struct.ComponentSchema {
  collectionName: 'components_elements_logos';
  info: {
    description: '';
    displayName: 'Logo';
  };
  attributes: {
    image: Schema.Attribute.Media<'images'>;
  };
}

export interface ElementsMetaData extends Struct.ComponentSchema {
  collectionName: 'components_elements_meta_data';
  info: {
    displayName: 'Meta Data';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text;
    metaImage: Schema.Attribute.Media<'images'>;
    metaTitle: Schema.Attribute.String;
  };
}

export interface ElementsSocial extends Struct.ComponentSchema {
  collectionName: 'components_elements_socials';
  info: {
    displayName: 'Social';
  };
  attributes: {
    link: Schema.Attribute.String;
    type: Schema.Attribute.Enumeration<
      ['LINKEDIN', 'GITHUB', 'TWITTER', 'YOUTUBE']
    >;
  };
}

export interface LayoutHero extends Struct.ComponentSchema {
  collectionName: 'components_layout_heroes';
  info: {
    displayName: 'Hero';
  };
  attributes: {
    features: Schema.Attribute.Component<'elements.list-text', true>;
    heading: Schema.Attribute.String;
    images: Schema.Attribute.Media<'images', true>;
    subHeading: Schema.Attribute.String;
    text: Schema.Attribute.Text;
  };
}

export interface LayoutNavigation extends Struct.ComponentSchema {
  collectionName: 'components_layout_navigations';
  info: {
    description: '';
    displayName: 'Navigation';
  };
  attributes: {
    location: Schema.Attribute.String;
    name: Schema.Attribute.String;
    navItem: Schema.Attribute.Component<'elements.link', true>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
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
