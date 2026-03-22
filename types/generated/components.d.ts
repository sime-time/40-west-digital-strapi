import type { Schema, Struct } from '@strapi/strapi';

export interface SharedLink extends Struct.ComponentSchema {
  collectionName: 'components_shared_links';
  info: {
    displayName: 'Link';
    icon: 'link';
  };
  attributes: {
    href: Schema.Attribute.String;
    isButton: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    isExternal: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    label: Schema.Attribute.String;
  };
}

export interface SharedLogoLink extends Struct.ComponentSchema {
  collectionName: 'components_shared_logo_links';
  info: {
    displayName: 'Logo Link';
  };
  attributes: {
    href: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images'>;
    isExternal: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
  };
}

export interface SharedPortfolioVideo extends Struct.ComponentSchema {
  collectionName: 'components_shared_portfolio_videos';
  info: {
    displayName: 'Portfolio Video';
  };
  attributes: {
    thumbnail: Schema.Attribute.Media<'images'>;
    title: Schema.Attribute.String;
    youtubeLink: Schema.Attribute.String;
  };
}

export interface SharedSocialMediaLink extends Struct.ComponentSchema {
  collectionName: 'components_shared_social_media_links';
  info: {
    displayName: 'Social Media Link';
  };
  attributes: {
    logoType: Schema.Attribute.Enumeration<
      ['instagram', 'facebook', 'youtube', 'tiktok', 'twitter']
    >;
    profileLink: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'shared.link': SharedLink;
      'shared.logo-link': SharedLogoLink;
      'shared.portfolio-video': SharedPortfolioVideo;
      'shared.social-media-link': SharedSocialMediaLink;
    }
  }
}
