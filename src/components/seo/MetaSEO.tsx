"use client";

import React from 'react';
import { Helmet } from 'react-helmet-async';

interface MetaSEOProps {
  title: string;
  description: string;
  path: string;
}

export const MetaSEO: React.FC<MetaSEOProps> = ({ title, description, path }) => {
  const canonicalUrl = `https://www.calpir.com${path.startsWith('/') ? path : `/${path}`}`;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
    </Helmet>
  );
};

export default MetaSEO;