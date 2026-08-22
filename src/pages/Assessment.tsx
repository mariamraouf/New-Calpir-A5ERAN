"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { RefreshCcw, Zap, Lock, Mail, CheckCircle2, ArrowRight, Loader2, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import SectionLabel from '@/components/ui/SectionLabel';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Progress } from '@/components/ui/progress';
import { cn } from '@/lib/utils';
import { showSuccess, showError } from '@/utils/toast';

interface QuestionOption {
  label: string;
  value: string | number;
}

interface Question {
  id: string;
  title: string;
  options: QuestionOption[];
}

const questions: Question[] = [
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
    title: "What is your current monthly burn rate or budget?",
    options: [
      { label: "Under $1,000 (Lean Bootstrapped)", value: "low" },
      { label: "$1,000 to $5,000", value: "mid" },
      { label: "$5,000 to $20,000", value: "high" },
      { label: "$20,000+ (Funded or Rapid Scaling)", value: "vc" }
    ]
  },
  {
    id: 'website',
    title: "Do you currently have a functioning website?",
    options: [
      { label: "No website or domain yet", value: "none" },
      { label: "Yes, but it's slow/outdated and doesn't convert", value: "outdated" },
      { label: "Yes, it's decent but needs modern automation & speed", value: "decent" },
      { label: "Yes, it's high-performance and converting well", value: "pro" }
    ]
  },
  {
    id: 'crm',
    title: "How do you currently track leads and client deals?",
    options: [
      { label: "Spreadsheets, direct DMs, or memory", value: "manual" },
      { label: "A CRM I set up myself (disorganized and unautomated)", value: "messy" },
      { label: "A CRM configured with automated pipelines", value: "pro" },
      { label: "We don't really capture or track leads consistently", value: "none" }
    ]
  },
  {
    id: 'hours',
    title: "How many hours per week do you waste on manual clerical work?",
    options: [
      { label: "5 or fewer hours", value: 5 },
      { label: "5 to 15 hours", value: 15 },
      { label: "15 to 25 hours", value: 25 },
      { label: "25+ hours per week", value: 40 }
    ]
  },
  {
    id: 'bottleneck',
    title: "What is your single biggest bottleneck right now?",
    options: [
      { label: "Zero online discoverability & no Google rankings", value: "visibility" },
      { label: "Low website conversion & lack of credibility", value: "conversion" },
      { label: "Slow follow-ups losing warm deals", value: "leads" },
      { label: "Drowning in repetitive manual tasks & copy-pasting", value: "manual" },
      { label: "Disjointed tools that don't talk to each other", value: "systems" },
      { label: "We need 24/7 AI agents but don't know where to start", value: "ai" }
    ]
  }
];

const Assessment = () => {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, any>>({});
  const [showResults, setShowResults] = useState(false);
  const [userEmail, setUserEmail] = useState('');
  const [userName, setUserName] = useState('');
  const [isSendingReport, setIsSendingReport] = useState(false);
  const [isReportUnlocked, setIsReportUnlocked] = useState(false);

  const handleAnswer = (value: any) => {
    const currentQ = questions[step];
    const newAnswers = { ...answers, [currentQ.id]: value };
    setAnswers(newAnswers);
    if (step < questions.length - 1) {
      setStep(step + 1);
    } else {
      setShowResults(true);
    }
  };

  const calculateResults = () => {
    const rawHours = Number(answers.hours) || 15;
    const wastedMoney = rawHours * 50 * 4;
    const annualWaste = wastedMoney * 12;

    const recommendations = [
      {
        title: "Domain, SSL & Rapid Google Search Indexing",
        desc: "We secure your clean domain, configure SSL encryption, and submit XML sitemaps to Google Search Console for day-one indexing."
      },
      {
        title: "Sub-1.5s High-Conversion Web Architecture",
        desc: "Upgrade to modern React/Next.js edge architecture designed for high-conversion and 100/100 Core Web Vitals."
      },
      {
        title: "Automated CRM & 60-Second Lead Routing",
        desc: "Deploy HubSpot or GoHighLevel with SMS alerts so every new prospect is contacted within 60 seconds."
      },
      {
        title: "Autonomous RAG AI Agent Fleet",
        desc: "Deploy 24/7 intelligent agents trained on your business data to qualify leads and book calendar appointments automatically."
      }
    ];

    return { wastedMoney, annualWaste, rawHours, recommendations };
  };

  const results = calculateResults();

  const handleSendReport = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSendingReport(true);

    try {
      const response = await fetch('https://formspree.io/f/moearjyk', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          recipientName: userName,
          recipientEmail: userEmail,
          stage: answers.stage,
          budgetTier: answers.burn,
          websiteState: answers.website,
          crmState: answers.crm,
          weeklyWastedHours: answers.hours,
          primaryBottleneck: answers.bottleneck,
          monthlyFinancialLoss: `$${results.wastedMoney.toLocaleString()}`,
          annualFinancialLoss: `$${results.annualWaste.toLocaleString()}`
        })
      });

      if (response.ok) {
        setIsReportUnlocked(true);
        showSuccess("Full custom architecture report unlocked and sent to your email!");
      } else {
        showError("Unable to transmit report. Please email info@calpir.com directly.");
      }
    } catch (err) {
      showError("Connection error. Please reach out to info@calpir.com or call +44 7346 875731.");
    } finally {
      setIsSendingReport(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#080808]">
      <Navbar />

      <main className="pt-40 md:pt-48 pb-24 px-6">
        <div className="container-custom max-w-[900px]">
          {!showResults ? (
            <div>
              <div className="mb-16">
                <div className="flex justify-between items-end mb-4">
                  <span className="text-emerald-400 mono font-bold uppercase tracking-widest text-xs">
                    Question {step + 1} of {questions.length}
                  </span>
                  <span className="text-zinc-300 mono font-bold text-xs">
                    {Math.round(((step + 1) / questions.length) * 100)}% Complete
                  </span>
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
                  <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tight text-white">
                    {questions[step].title}
                  </h1>
                  <div className="grid grid-cols-1 gap-4">
                    {questions[step].options.map((opt) => (
                      <button
                        key={String(opt.value)}
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
                <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tight text-white mb-6">
                  Your Systems <br /> <span className="text-emerald-400">Blueprint.</span>
                </h1>
                <p className="text-xl mono text-zinc-300">
                  We've calculated your exact operational bottlenecks and projected ROI improvements.
                </p>
              </div>

              {/* Preliminary Metrics */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="border border-white/15 p-10 bg-white/[0.03]">
                  <div className="mono text-xs uppercase tracking-widest text-zinc-400 font-bold mb-4">
                    Estimated Monthly Waste
                  </div>
                  <div className="text-6xl md:text-7xl font-black text-rose-500 mb-4">
                    ${results.wastedMoney.toLocaleString()}
                  </div>
                  <p className="mono text-sm text-zinc-300 leading-relaxed">
                    Based on {results.rawHours} hours/week of manual admin, you are losing ${(results.annualWaste).toLocaleString()} annually in preventable overhead.
                  </p>
                </div>

                <div className="border border-emerald-500/40 p-10 bg-emerald-950/30">
                  <div className="mono text-xs uppercase tracking-widest text-emerald-400 font-bold mb-4">
                    Primary Strategic Objective
                  </div>
                  <h3 className="text-2xl md:text-3xl font-black uppercase text-white mb-4">
                    System Synchronization
                  </h3>
                  <p className="mono text-sm text-zinc-300 leading-relaxed">
                    Eliminate the {String(answers.bottleneck || 'operational drag')} bottleneck by integrating your website, CRM, and AI workflows into one self-running engine.
                  </p>
                </div>
              </div>

              {/* Gate with Formspree */}
              {!isReportUnlocked ? (
                <div className="border-2 border-emerald-500 bg-[#0f0f12] p-8 md:p-12 shadow-2xl relative">
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-emerald-500 text-black px-4 py-1 mono text-xs uppercase tracking-widest font-black flex items-center gap-1.5">
                    <Lock size={13} /> Full Report Locked
                  </div>

                  <div className="text-center max-w-[600px] mx-auto space-y-4 mb-8 pt-2">
                    <h3 className="text-3xl md:text-4xl font-black uppercase text-white tracking-tight">
                      Unlock Your Complete 8-Page Infrastructure Blueprint
                    </h3>
                    <p className="text-zinc-300 text-sm leading-relaxed mono">
                      Enter your email below to instantly view your tailored module roadmap and receive the PDF copy in your inbox.
                    </p>
                  </div>

                  <form onSubmit={handleSendReport} className="max-w-[550px] mx-auto space-y-4">
                    <Input
                      required
                      placeholder="YOUR FULL NAME"
                      value={userName}
                      onChange={(e) => setUserName(e.target.value)}
                      className="bg-black text-white border-white/20 rounded-none h-13 mono text-sm focus:border-emerald-400"
                    />
                    <Input
                      required
                      type="email"
                      placeholder="YOUR WORK EMAIL ADDRESS"
                      value={userEmail}
                      onChange={(e) => setUserEmail(e.target.value)}
                      className="bg-black text-white border-white/20 rounded-none h-13 mono text-sm focus:border-emerald-400"
                    />
                    <Button
                      type="submit"
                      disabled={isSendingReport || !userEmail || !userName}
                      className="w-full bg-emerald-500 hover:bg-emerald-400 text-black py-7 rounded-none font-black text-lg uppercase tracking-tight btn-hover flex items-center justify-center gap-2"
                    >
                      {isSendingReport ? (
                        <Loader2 className="animate-spin" />
                      ) : (
                        <>
                          <Sparkles size={18} /> Unlock & Send Full Report
                        </>
                      )}
                    </Button>
                  </form>
                </div>
              ) : (
                <div className="space-y-12 animate-in fade-in duration-500">
                  <div className="p-6 bg-emerald-950/50 border border-emerald-500/40 text-center mono text-sm text-emerald-300 font-bold">
                    ✓ Full Architecture Report Dispatched to <span className="text-white">{userEmail}</span>
                  </div>

                  <div className="space-y-6">
                    <SectionLabel>Your Recommended Execution Modules</SectionLabel>
                    <div className="grid grid-cols-1 gap-4">
                      {results.recommendations.map((s, i) => (
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

                  <div className="bg-emerald-500 text-black p-12 md:p-16 text-center space-y-6">
                    <h3 className="text-3xl md:text-5xl font-black uppercase tracking-tight">
                      Ready to Deploy This <br /> Exact Infrastructure?
                    </h3>
                    <p className="text-black/80 font-bold max-w-[550px] mx-auto text-base">
                      Book a free 30 minute strategy session with Maria to review your custom blueprint together.
                    </p>
                    <Button asChild className="bg-black text-white hover:bg-zinc-900 px-12 py-8 rounded-none font-black text-xl uppercase tracking-tight transition-all">
                      <Link to="/contact">Book Free Consultation Call</Link>
                    </Button>
                  </div>
                </div>
              )}

              <div className="flex flex-col sm:flex-row gap-4 pt-8">
                <Button
                  variant="outline"
                  className="flex-1 border-white/20 text-white py-7 rounded-none font-bold text-lg uppercase tracking-wider hover:bg-white hover:text-black"
                  onClick={() => {
                    setStep(0);
                    setAnswers({});
                    setShowResults(false);
                    setIsReportUnlocked(false);
                  }}
                >
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