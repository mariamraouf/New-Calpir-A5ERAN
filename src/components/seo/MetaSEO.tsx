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

export const MetaSEO: React.FC<MetaSEOProps> = ({ 
  title, 
  description, 
  path, 
  ogType = 'website',
  image = 'https://www.calpir.com/logo-with-transparent-background.png'
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
    </Helmet>
  );
};

export default MetaSEO;