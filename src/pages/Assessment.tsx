"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { RefreshCcw, Zap } from 'lucide-react';
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
        { label: "Pre launch — I have an idea but haven't started yet", value: "pre-launch" },
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
        { label: "$1,000 to $5,000", value: "mid" },
        { label: "$5,000 to $20,000", value: "high" },
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
        { label: "5 or less hours", value: 5 },
        { label: "5 to 15 hours", value: 15 },
        { label: "15 to 25 hours", value: 25 },
        { label: "25+ hours", value: 40 }
      ]
    },
    {
      id: 'bottleneck',
      title: "What's your biggest bottleneck right now?",
      options: [
        { label: "Getting found online (no visibility)", value: "visibility" },
        { label: "Converting visitors into leads/customers", value: "conversion" },
        { label: "Managing leads and follow ups", value: "leads" },
        { label: "Too much manual/repetitive work", value: "manual" },
        { label: "No systems — doing everything ad hoc", value: "systems" },
        { label: "I know I need AI but don't know where to start", value: "ai" }
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
    const wastedMoney = (answers.hours || 0) * 50 * 4;
    
    let suggestions = [];
    if (answers.website === 'none' || answers.website === 'outdated') {
      suggestions.push({ title: "High Conversion Web Architecture", desc: "You need a digital foundation that doesn't just look good but actually converts visitors into revenue." });
    }
    if (answers.crm === 'manual' || answers.crm === 'none') {
      suggestions.push({ title: "Automated CRM Pipeline", desc: "Stop losing leads. We'll set up a system that captures every inquiry and automates the follow up process." });
    }
    if (answers.hours > 10) {
      suggestions.push({ title: "Custom Workflow Automation", desc: "We can eliminate those " + answers.hours + " hours of manual work by connecting your tools into a seamless engine." });
    }
    if (answers.bottleneck === 'ai' || answers.stage === 'established') {
      suggestions.push({ title: "Autonomous AI Agents", desc: "Deploy 24/7 agents to handle support and lead qualification while you sleep." });
    }

    return { wastedMoney, suggestions };
  };

  const results = calculateResults();

  return (
    <div className="min-h-screen bg-[#080808]">
      <Navbar />
      
      <main className="pt-40 md:pt-48 pb-24 px-6">
        <div className="container-custom max-w-[900px]">
          {!showResults ? (
            <div>
              <div className="mb-16">
                <div className="flex justify-between items-end mb-4">
                  <span className="text-emerald-400 mono font-bold uppercase tracking-widest text-xs">Question {step + 1} of {questions.length}</span>
                  <span className="text-zinc-300 mono font-bold text-xs">{Math.round(((step + 1) / questions.length) * 100)}% Complete</span>
                </div>
                <Progress value={((step + 1) / questions.length) * 100} className="h-1.5 bg-white/10" />
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={step}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-12"
                >
                  <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tight text-white">{questions[step].title}</h1>
                  <div className="grid grid-cols-1 gap-4">
                    {questions[step].options.map((opt) => (
                      <button
                        key={opt.value}
                        type="button"
                        onClick={() => handleAnswer(opt.value)}
                        className={cn(
                          "p-6 md:p-8 text-left border transition-all font-bold text-lg md:text-xl uppercase tracking-tight",
                          answers[questions[step].id] === opt.value
                            ? "border-emerald-400 bg-emerald-950/60 text-emerald-300"
                            : "border-white/15 bg-white/[0.03] text-zinc-100 hover:border-emerald-400 hover:bg-white/[0.08]"
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
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-16">
              <div className="text-center">
                <SectionLabel>Analysis Complete</SectionLabel>
                <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tight text-white mb-6">Your Growth <br /> Roadmap.</h1>
                <p className="text-xl mono text-zinc-300">We've analyzed your inputs. Here is your path to a scalable, automated business.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2<dyad-write path="src/pages/Assessment.tsx" description="Complete the Assessment component without any truncation">
"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { RefreshCcw, Zap } from 'lucide-react';
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
        { label: "Pre launch — I have an idea but haven't started yet", value: "pre-launch" },
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
        { label: "$1,000 to $5,000", value: "mid" },
        { label: "$5,000 to $20,000", value: "high" },
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
        { label: "5 or less hours", value: 5 },
        { label: "5 to 15 hours", value: 15 },
        { label: "15 to 25 hours", value: 25 },
        { label: "25+ hours", value: 40 }
      ]
    },
    {
      id: 'bottleneck',
      title: "What's your biggest bottleneck right now?",
      options: [
        { label: "Getting found online (no visibility)", value: "visibility" },
        { label: "Converting visitors into leads/customers", value: "conversion" },
        { label: "Managing leads and follow ups", value: "leads" },
        { label: "Too much manual/repetitive work", value: "manual" },
        { label: "No systems — doing everything ad hoc", value: "systems" },
        { label: "I know I need AI but don't know where to start", value: "ai" }
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
    const wastedMoney = (answers.hours || 0) * 50 * 4;
    
    let suggestions = [];
    if (answers.website === 'none' || answers.website === 'outdated') {
      suggestions.push({ title: "High Conversion Web Architecture", desc: "You need a digital foundation that doesn't just look good but actually converts visitors into revenue." });
    }
    if (answers.crm === 'manual' || answers.crm === 'none') {
      suggestions.push({ title: "Automated CRM Pipeline", desc: "Stop losing leads. We'll set up a system that captures every inquiry and automates the follow up process." });
    }
    if (answers.hours > 10) {
      suggestions.push({ title: "Custom Workflow Automation", desc: "We can eliminate those " + answers.hours + " hours of manual work by connecting your tools into a seamless engine." });
    }
    if (answers.bottleneck === 'ai' || answers.stage === 'established') {
      suggestions.push({ title: "Autonomous AI Agents", desc: "Deploy 24/7 agents to handle support and lead qualification while you sleep." });
    }

    return { wastedMoney, suggestions };
  };

  const results = calculateResults();

  return (
    <div className="min-h-screen bg-[#080808]">
      <Navbar />
      
      <main className="pt-40 md:pt-48 pb-24 px-6">
        <div className="container-custom max-w-[900px]">
          {!showResults ? (
            <div>
              <div className="mb-16">
                <div className="flex justify-between items-end mb-4">
                  <span className="text-emerald-400 mono font-bold uppercase tracking-widest text-xs">Question {step + 1} of {questions.length}</span>
                  <span className="text-zinc-300 mono font-bold text-xs">{Math.round(((step + 1) / questions.length) * 100)}% Complete</span>
                </div>
                <Progress value={((step + 1) / questions.length) * 100} className="h-1.5 bg-white/10" />
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={step}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-12"
                >
                  <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tight text-white">{questions[step].title}</h1>
                  <div className="grid grid-cols-1 gap-4">
                    {questions[step].options.map((opt) => (
                      <button
                        key={opt.value}
                        type="button"
                        onClick={() => handleAnswer(opt.value)}
                        className={cn(
                          "p-6 md:p-8 text-left border transition-all font-bold text-lg md:text-xl uppercase tracking-tight",
                          answers[questions[step].id] === opt.value
                            ? "border-emerald-400 bg-emerald-950/60 text-emerald-300"
                            : "border-white/15 bg-white/[0.03] text-zinc-100 hover:border-emerald-400 hover:bg-white/[0.08]"
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
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-16">
              <div className="text-center">
                <SectionLabel>Analysis Complete</SectionLabel>
                <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tight text-white mb-6">Your Growth <br /> Roadmap.</h1>
                <p className="text-xl mono text-zinc-300">We've analyzed your inputs. Here is your path to a scalable, automated business.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="border border-white/15 p-10 bg-white/[0.03]">
                  <div className="mono text-xs uppercase tracking-widest text-zinc-400 font-bold mb-4">Efficiency Leak</div>
                  <div className="text-6xl md:text-7xl font-black text-rose-500 mb-4">${results.wastedMoney.toLocaleString()}</div>
                  <p className="mono text-sm text-zinc-300 leading-relaxed">
                    This is the estimated monthly capital lost to repetitive manual tasks. Over a year, that totals ${(results.wastedMoney * 12).toLocaleString()} in avoidable overhead.
                  </p>
                </div>

                <div className="border border-emerald-500/40 p-10 bg-emerald-950/30">
                  <div className="mono text-xs uppercase tracking-widest text-emerald-400 font-bold mb-4">Primary Objective</div>
                  <h3 className="text-2xl md:text-3xl font-black uppercase text-white mb-4">System Integration</h3>
                  <p className="mono text-sm text-zinc-300 leading-relaxed">
                    Your key priority is solving {answers.bottleneck}. Deploying a unified workflow eliminates bottlenecks and frees up founder bandwidth.
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <SectionLabel>Strategic Suggestions</SectionLabel>
                <div className="grid grid-cols-1 gap-4">
                  {results.suggestions.map((s, i) => (
                    <div key={i} className="border border-white/15 p-8 bg-white/[0.03] flex flex-col md:flex-row gap-6 items-start">
                      <div className="w-14 h-14 bg-emerald-500 text-black flex items-center justify-center shrink-0">
                        <Zap size={28} />
                      </div>
                      <div>
                        <h4 className="text-2xl font-black uppercase text-white mb-2">{s.title}</h4>
                        <p className="mono text-sm text-zinc-300 leading-relaxed">{s.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-emerald-500 text-black p-12 md:p-16 text-center">
                <h3 className="text-3xl md:text-5xl font-black uppercase tracking-tight mb-6">Ready to Fix Your <br /> Infrastructure?</h3>
                <Button asChild className="bg-black text-white hover:bg-zinc-900 px-12 py-8 rounded-none font-black text-xl uppercase tracking-tight transition-all">
                  <Link to="/contact">Book Strategy Call with Maria</Link>
                </Button>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="outline" className="flex-1 border-white/20 text-white py-7 rounded-none font-bold text-lg uppercase tracking-wider hover:bg-white hover:text-black" onClick={() => window.location.reload()}>
                  <RefreshCcw className="mr-2" size={18} /> Retake Assessment
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