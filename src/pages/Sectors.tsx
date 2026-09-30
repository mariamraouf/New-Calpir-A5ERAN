"use client";

import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import PageHero from '@/components/ui/PageHero';
import MetaSEO from '@/components/seo/MetaSEO';
import SectorsSection from '@/components/home/SectorsSection';
import PhotoBand from '@/components/ui/PhotoBand';
import { PLAN_PHOTOS, BUILD_PHOTO } from '@/data/planPhotos';

/**
 * Sectors, on a page of their own.
 *
 * This was a band in the middle of the home page, where it did nothing for a
 * visitor who had already decided we were relevant and quietly excluded
 * anybody whose trade was not on the list. On its own page it can do the job
 * it is actually good at: catching the search for "business setup for
 * <trade>" and landing that person on something that speaks to them.
 */
const Sectors = () => (
  <div className="min-h-screen bg-white">
    <MetaSEO
      title="Sectors We Launch | Calpir"
      description="The trades and industries we set up and run: from joinery, dental and beauty to consultancies, agencies and ecommerce. Fixed prices, seven day free trial on every monthly plan."
      path="/sectors"
    />
    <Navbar />

    <PageHero
      eyebrow="Who we build for"
      title={<>We have set this up <br />in your trade before.</>}
      body="The plumbing is the same in every business: a company, a way to be found, a way to take money and a way to keep track. What changes is the language, the buying cycle and the compliance. That part we learn once per sector and reuse."
      image={PLAN_PHOTOS['marketing-seo-monthly'].band}
      primary={{ label: 'Start a free week', href: '/pricing' }}
      secondary={{ label: 'See the build packages', href: '/packages' }}
    />

    <SectorsSection />

    <PhotoBand
      photo={BUILD_PHOTO}
      compact
      eyebrow="Not on the list?"
      title={<>It is almost certainly <br className="hidden sm:block" />the same job.</>}
      body="If your trade is not named above, tell us what the business does and we will say plainly whether we have done it before and what we would change."
      cta={{ label: 'Tell us about it', href: '/contact' }}
    />

    <Footer />
  </div>
);

export default Sectors;
