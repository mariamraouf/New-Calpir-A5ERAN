"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, ArrowRight, RefreshCcw, Share2, AlertTriangle, TrendingDown, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import SectionLabel from '@/components/ui/SectionLabel';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { cn } from '@/lib/utils';

const Assessment = () => {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<any>({});
  const [showResults, setShowResults] = useState(false);

  const questions = [
    {
      id: 'stage',
      title: "What stage is your business at?",
      options: [
        { label: "Pre-launch — I have an idea but haven't started yet", value: "pre-launch" },
        { label: "Just launched — Under 6 months, getting first customers", value: "just-launched" },
        { label: "Growing — 6 months to 2 years, need to scale systems", value: "growing" },
        { label: "Established — 2+ years, looking to optimize and add AI", value: "established" }
      ]
    },
    {
      id: 'burn',
      title: "What is your current monthly burn rate?",
      options: [
        { label: "Under $1,000 (Bootstrapped)", value: "low" },
        { label: "$1,000 - $5,000", value: "mid" },
        { label: "$5,000 - $20,000", value: "high" },
        { label: "$20,000+ (VC Backed / High Growth)", value: "vc" }
      ]
    },
    {
      id: 'website',
      title: "Do you have a website?",
      options: [
        { label: "No website yet", value: "none" },
        { label: "Yes, but it's basic/outdated and doesn't convert", value: "outdated" },
        { label: "Yes, it's decent but needs improvement", value: "decent" },
        { label: "Yes, it's professional and optimized", value: "pro" }
      ]
    },
    {
      id: 'crm',
      title: "How do you currently manage leads and customers?",
      options: [
        { label: "Spreadsheets, notes, or my head", value: "manual" },
        { label: "A CRM I set up myself (but it's a mess)", value: "messy" },
        { label: "A CRM that's properly configured", value: "pro" },
        { label: "I don't really track leads", value: "none" }
      ]
    },
    {
      id: 'hours',
      title: "How many hours per week do you spend on repetitive manual tasks?",
      options: [
        { label: "5 or less", value: 5 },
        { label: "5-15 hours", value: 15 },
        { label: "15-25 hours", value: 25 },
        { label: "25+ hours", value: 40 }
      ]
    },
    {
      id: 'fatigue',
      title: "How many tools are you paying for but not using effectively?",
      options: [
        { label: "0-2 tools", value: "low" },
        { label: "3-5 tools", value: "mid" },
        { label: "6+ tools (Tool Fatigue)", value: "high" }
      ]
    },
    {
      id: 'bottleneck',
      title: "What's your biggest bottleneck right now?",
      options: [
        { label: "Getting found online (no visibility)", value: "visibility" },
        { label: "Converting visitors into leads/customers", value: "conversion" },
        { label: "Managing leads and follow-ups", value: "leads" },
        { label: "Too much manual/repetitive work", value: "manual" },
        { label: "No systems — doing everything ad hoc", value: "systems" },
        { label: "I know I need AI but don't know where to start", value: "ai" }
      ]
    },
    {
      id: 'budget',
      title: "What's your budget range for getting your business properly set up?",
      options: [
        { label: "Under $1,000", value: "low" },
        { label: "$1,000 - $2,500", value: "starter" },
        { label: "$2,500 - $5,000", value: "growth" },
        { label: "$5,000 - $10,000", value: "ultimate" },
        { label: "$10,000+", value: "enterprise" }
      ]
    }
  ];

  const handleAnswer = (value: any) => {
    const currentQ = questions[step];
    setAnswers({ ...answers, [currentQ.id]: value });
    if (step < questions.length - 1) {
      setStep(step + 1);
    } else {
      setShowResults(true);
    }
  };

  const calculateResults = () => {
    let score = 0;
    if (answers.stage === 'pre-launch') score += 1;
    else if (answers.stage === 'just-launched') score += 3;
    else if (answers.stage === 'growing') score += 6;
    else score += 8;

    const wastedMoney = (answers.hours || 0) * 50 * 4;
    
    let pkg = "Starter";
    if (answers.budget === 'growth' || answers.stage === 'growing') pkg = "Growth";
    if (answers.budget === 'ultimate' || answers.budget === 'enterprise' || answers.stage === 'established') pkg = "Ultimate";

    return { score, wastedMoney, pkg };
  };

  const results = calculateResults();

  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      
      <main className="pt-48 pb-24 px-6">
        <div className="container-custom max-w-[900px]">
          {!showResults ? (
            <div>
              <div className="mb-16">
                <div className="flex justify-between items-end mb-4">
                  <span className="text-[#064e3b] mono font-bold uppercase tracking-widest text-xs">Question {step + 1} of {questions.length}</span>
                  <span className="text-white/40 mono font-bold text-xs">{Math.round(((step + 1) / questions.length) * 100)}% Complete</span>
                </div>
                <Progress value={((step + 1) / questions.length) * 100} className="h-1 bg-white/10" />
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={step}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-12"
                >
                  <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">{questions[step].title}</h1>
                  <div className="grid grid-cols-1 gap-4">
                    {questions[step].options.map((opt) => (
                      <button
                        key={opt.value}
                        onClick={() => handleAnswer(opt.value)}
                        className={cn(
                          "p-8 text-left border transition-all font-bold text-xl uppercase tracking-tighter",
                          answers[questions[step].id] === opt.value
                            ? "border-[#064e3b] bg-[#064e3b]/10 text-[#064e3b]"
                            : "border-white/10 bg-white/5 hover:border-[#064e3b]/50 hover:bg-white/10"
                        )}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          ) : (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-20">
              <div className="text-center">
                <SectionLabel>Assessment Complete</SectionLabel>
                <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tighter mb-6">Your Growth <br /> Roadmap.</h1>
                <p className="text-xl mono text-white/40">Based on your answers, here is your personalized business analysis.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="border border-white/10 p-12 bg-white/5">
                  <div className="mono text-[0.6rem] uppercase tracking-widest text-white/40 mb-6">Business Stage Score</div>
                  <div className="flex items-end gap-2 mb-6">
                    <span className="text-8xl font-black text-[#064e3b]">{results.score}</span>
                    <span className="text-3xl font-black text-white/20 mb-4">/ 10</span>
                  </div>
                  <p className="mono text-sm text-white/60 leading-relaxed">
                    {results.score <= 3 ? "Starting from scratch. You need a solid foundation." : 
                     results.score <= 6 ? "Foundation needs work. You're ready to professionalize." : 
                     "Good foundation. You're ready to scale with AI."}
                  </p>
                </div>

                <div className="border border-white/10 p-12 bg-white/5">
                  <div className="mono text-[0.6rem] uppercase tracking-widest text-white/40 mb-6">Estimated Monthly Waste</div>
                  <div className="text-7xl font-black text-red-900 mb-6">${results.wastedMoney.toLocaleString()}</div>
                  <p className="mono text-sm text-white/60 leading-relaxed">
                    This is the estimated cost of manual tasks that could be automated. {results.wastedMoney > 2000 ? "That's essentially a part-time employee's worth of wasted time." : ""}
                  </p>
                </div>
              </div>

              <div className="bg-[#064e3b] p-16 text-center">
                <h3 className="text-4xl md:text-6xl mb-8">Recommended Package: <br /> <span className="text-white">{results.pkg}</span></h3>
                <Button asChild className="bg-white text-black hover:bg-black hover:text-white px-16 py-10 rounded-none font-black text-2xl uppercase tracking-tighter transition-all">
                  <Link to="/contact">Book Free Consultation</Link>
                </Button>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="outline" className="flex-1 border-white/10 py-8 rounded-none font-black text-xl uppercase tracking-tighter" onClick={() => window.location.reload()}>
                  <RefreshCcw className="mr-2" /> Retake Assessment
                </Button>
                <Button variant="outline" className="flex-1 border-white/10 py-8 rounded-none font-black text-xl uppercase tracking-tighter">
                  <Share2 className="mr-2" /> Share Results
                </Button>
              </div>
            </motion.div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Assessment;