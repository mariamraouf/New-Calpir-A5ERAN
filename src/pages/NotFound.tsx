"use client";

import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Helmet>
        <title>Page not found | Calpir</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <Navbar />
      <main className="flex-grow flex items-center justify-center px-6 py-40">
        <div className="text-center">
          <h1 className="text-[4rem] md:text-[6rem] font-[800] text-emerald-700 mb-4">404</h1>
          <h2 className="text-2xl md:text-3xl font-black mb-4 uppercase tracking-tight text-zinc-950">Page not found</h2>
          <p className="text-zinc-600 text-lg max-w-[500px] mx-auto mb-10">
            The page you are looking for does not exist or has been moved.
          </p>
          <Button asChild className="bg-emerald-600 hover:bg-emerald-700 text-white px-10 py-7 rounded-none font-bold text-lg uppercase tracking-tight transition-transform hover:-translate-y-1">
            <Link to="/">Back to Home</Link>
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;