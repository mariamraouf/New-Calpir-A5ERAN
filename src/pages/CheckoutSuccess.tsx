"use client";

import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { CheckCircle2 } from 'lucide-react';

/**
 * Where Stripe returns a buyer once the payment goes through.
 *
 * Deliberately not indexed. It tells them what happens next in plain terms,
 * because the gap between paying and hearing from a human is where people
 * start to worry they have been had.
 */
const CheckoutSuccess = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Helmet>
        <title>Payment received | Calpir</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <Navbar />
      <main className="flex-grow flex items-center justify-center px-6 py-32">
        <div className="max-w-[640px] text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-emerald-50 border-2 border-emerald-200 mb-8">
            <CheckCircle2 className="text-emerald-600" size={32} />
          </div>

          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-navy mb-5">
            That is paid. Thank you.
          </h1>

          <p className="text-slate-600 text-lg leading-relaxed mb-8">
            Stripe has emailed you a receipt. We have your details and the work
            is already on our board.
          </p>

          <div className="text-left bg-slate-50 border border-slate-200 p-7 mb-10">
            <p className="font-bold text-navy mb-4 tracking-tight text-sm">
              What happens next
            </p>
            <ol className="space-y-3 text-slate-600">
              <li>
                <span className="font-bold text-navy">Within one working day.</span>{' '}
                You get an email from us with a short questionnaire and a link to
                book your kickoff call.
              </li>
              <li>
                <span className="font-bold text-navy">The kickoff call.</span>{' '}
                Thirty minutes. We agree scope, access and dates. No pitch, you
                have already bought.
              </li>
              <li>
                <span className="font-bold text-navy">Then we start.</span>{' '}
                You get a named contact and somewhere to see progress.
              </li>
            </ol>
          </div>

          <p className="text-slate-500 mb-8">
            Nothing arrived, or something looks wrong? Email{' '}
            <a href="mailto:info@calpir.com" className="text-emerald-700 font-bold underline">
              info@calpir.com
            </a>{' '}
            and a person will answer.
          </p>

          <Button
            asChild
            className="bg-emerald-600 hover:bg-emerald-700 text-white px-10 py-7 rounded-xl font-bold text-base tracking-tight transition-transform hover:-translate-y-1"
          >
            <Link to="/">Back to the site</Link>
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CheckoutSuccess;
