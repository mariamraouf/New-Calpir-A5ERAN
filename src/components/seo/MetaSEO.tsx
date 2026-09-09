"use client";

import React from 'react';
import { Helmet } from 'react-helmet-async';

interface MetaSEOProps {
  title: string;
  description: string;
  path: string;
  ogType?: 'website' | 'article';
  image?: string;
}

/**
 * Every page's head tags in one place.
 *
 * These are also emitted at build time by scripts/prerender.mjs so that
 * crawlers see them in the raw HTML. The prerendered copies carry data-rh,
 * which is how react-helmet-async recognises tags it owns, so Helmet replaces
 * them on mount instead of leaving a duplicate behind.
 */
export const MetaSEO: React.FC<MetaSEOProps> = ({
  title,
  description,
  path,
  ogType = 'website',
  image = 'https://www.calpir.com/logo-with-transparent-background.png',
}) => {
  const canonicalUrl = `https://www.calpir.com${path.startsWith('/') ? path : `/${path}`}`;
  const imageUrl = image.startsWith('http') ? image : `https://www.calpir.com${image}`;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imageUrl} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
    </Helmet>
  );
};

export default MetaSEO;
