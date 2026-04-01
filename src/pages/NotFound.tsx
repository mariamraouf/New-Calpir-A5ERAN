"use client";

import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />
      <main className="flex-grow flex items-center justify-center px-6 py-40">
        <div className="text-center">
          <h1 className="text-[4rem] md:text-[6rem] font-[800] text-[#6c5ce7] mb-4">404</h1>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Page not found</h2>
          <p className="text-[#555] text-lg max-w-[500px] mx-auto mb-10">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <Button asChild className="bg-[#6c5ce7] hover:bg-[#5b4cdb] text-white px-10 py-7 rounded-[10px] font-bold text-lg transition-transform hover:-translate-y-1">
            <Link to="/">Back to Home</Link>
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;