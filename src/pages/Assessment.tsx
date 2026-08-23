"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { RefreshCcw, Zap, Lock, Sparkles, Loader2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import SectionLabel from '@/components/ui/SectionLabel';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Progress } from '@/components/ui/progress';
import { HumanCaptcha } from '@/components/ui/HumanCaptcha';
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
    title: "What stage is your business at right now?",
    options: [
      { label: "Pre launch: I have a clear idea and want to launch properly", value: "pre-launch" },
      { label: "Just launched: Under 6 months, getting initial customers", value: "just-launched" },
      { label: "Growing: 6 months to 2 years, ready to automate and scale", value: "growing" },
      { label: "Established: 2+ years, modernising infrastructure with AI", value: "established" }
    ]
  },
  {
    id: 'burn',
    title: "What is your current monthly budget or operating capital?",
    options: [
      { label: "Under $1,000 (Lean Bootstrapped)", value: "low" },
      { label: "$1,000 to $5,000", value: "mid" },
      { label: "$5,000 to $20,000", value: "high" },
      { label: "$20,000+ (Rapid Growth or Funded)", value: "vc" }
    ]
  },
  {
    id: 'website',
    title: "How is your current website situation?",
    options: [
      { label: "No website or registered domain yet", value: "none" },
      { label: "I have a slow outdated site that barely converts", value: "outdated" },
      { label: "Decent site, but needs modern speed and automations", value: "decent" },
      { label: "Fast custom site, looking to connect AI and CRM", value: "pro" }
    ]
  },
  {
    id: 'crm',
    title: "How are you tracking leads and client conversations?",
    options: [
      { label: "Notes, spreadsheets, DMs, or memory", value: "manual" },
      { label: "A CRM I set up myself that is messy and unautomated", value: "messy" },
      { label: "Properly configured CRM with automated pipelines", value: "pro" },
      { label: "We do not consistently capture or track leads yet", value: "none" }
    ]
  },
  {
    id: 'hours',
    title: "How many hours each week do you spend on repetitive admin work?",
    options: [
      { label: "5 hours or fewer", value: 5 },
      { label: "5 to 15 hours", value: 15 },
      { label: "15 to 25 hours", value: 25 },
      { label: "25+ hours every week", value: 40 }
    ]
  },
  {
    id: 'bottleneck',
    title: "What is your number one priority or bottleneck?",
    options: [
      { label: "Getting online fast with Google ranking and instant trust", value: "visibility" },
      { label: "Turning more website visitors into paying clients", value: "conversion" },
      { label: "Faster lead response times so deals stop going cold", value: "leads" },
      { label: "Automating repetitive copy-pasting and manual admin", value: "manual" },
      { label: "Unifying 6 disconnected apps into one sync engine", value: "systems" },
      { label: "Deploying 24/7 autonomous AI support agents", value: "ai" }
    ]
  }
];

const Assessment = () => {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, any>>({});
  const [showResults, setShowResults] = useState(false);
  const [userEmail, setUserEmail] = useState('');
  const [userName, setUserName] = useState('');
  const [userPhone, setUserPhone] = useState('');
  const [isHuman, setIsHuman] = useState(false);
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
        title: "Domain Setup, SSL Certificate and Instant Google Search Indexing",
        desc: "We secure your custom domain, activate 256-bit SSL encryption, and submit XML sitemaps to Google Search Console for day one indexing."
      },
      {
        title: "Sub-1.5s High-Conversion Web Architecture",
        desc: "Upgrade to modern React and Next.js edge architecture designed for high conversion, mobile responsiveness, and 100/100 Core Web Vitals."
      },
      {
        title: "Automated CRM and 60-Second Lead Routing",
        desc: "Deploy HubSpot or GoHighLevel with instant SMS alerts so every new inquiry is contacted within 60 seconds."
      },
      {
        title: "Autonomous RAG AI Agent Fleet",
        desc: "Deploy 24/7 intelligent agents trained on your business data to qualify leads, answer FAQs, and book calendar appointments automatically."
      }
    ];

    return { wastedMoney, annualWaste, rawHours, recommendations };
  };

  const results = calculateResults();

  const handleSendReport = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isHuman) {
      showError("Please check the human verification box before unlocking.");
      return;
    }

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
          email: userEmail,
          phone: userPhone,
          stage: answers.stage,
          budgetTier: answers.burn,
          websiteState: answers.website,
          crmState: answers.crm,
          weeklyWastedHours: answers.hours,
          primaryBottleneck: answers.bottleneck,
          monthlyFinancialLoss: `$${results.wastedMoney.toLocaleString()}`,
          annualFinancialLoss: `$${results.annualWaste.toLocaleString()}`,
          message: `Assessment completed by ${userName}. Stage: ${answers.stage}. Bottleneck: ${answers.bottleneck}. Potential annual savings: $${results.annualWaste.toLocaleString()}`
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
    <div className="min-h-screen bg-white">
      <Navbar />

      <main className="pt-36 md:pt-44 pb-24 px-4 md:px-6">
        <div className="container-custom max-w-4xl">
          {!showResults ? (
            <div>
              <div className="mb-12">
                <div className="flex justify-between items-end mb-4">
                  <span className="text-emerald-800 mono font-bold uppercase tracking-widest text-xs">
                    Question {step + 1} of {questions.length}
                  </span>
                  <span className="text-zinc-600 mono font-bold text-xs">
                    {Math.round(((step + 1) / questions.length) * 100)}% Complete
                  </span>
                </div>
                <Progress value={((step + 1) / questions.length) * 100} className="h-2 bg-zinc-200" />
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={step}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-8"
                >
                  <h1 className="text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-zinc-950 leading-tight">
                    {questions[step].title}
                  </h1>
                  <div className="grid grid-cols-1 gap-3.5">
                    {questions[step].options.map((opt) => (
                      <button
                        key={String(opt.value)}
                        type="button"
                        onClick={() => handleAnswer(opt.value)}
                        className={cn(
                          "p-6 md:p-7 text-left border transition-all font-bold text-base md:text-lg uppercase tracking-tight",
                          answers[questions[step].id] === opt.value
                            ? "border-emerald-600 bg-emerald-50 text-emerald-950 shadow-sm"
                            : "border-zinc-200 bg-zinc-50 text-zinc-900 hover:border-emerald-600 hover:bg-white"
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
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-12">
              <div className="text-center">
                <SectionLabel>Analysis Complete</SectionLabel>
                <h1 className="text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight text-zinc-950 mb-4">
                  Your Systems <br /> <span className="text-emerald-700">Blueprint</span>
                </h1>
                <p className="text-lg md:text-xl text-zinc-600 max-w-2xl mx-auto">
                  We have mapped out your exact operational bottlenecks and projected ROI improvements.
                </p>
              </div>

              {/* Preliminary Metrics */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="border border-rose-200 p-8 bg-rose-50/60 shadow-sm">
                  <div className="mono text-xs uppercase tracking-widest text-rose-700 font-bold mb-3">
                    Estimated Monthly Financial Drag (Action Required)
                  </div>
                  <div className="text-5xl md:text-6xl font-black text-rose-600 mb-3">
                    ${results.wastedMoney.toLocaleString()}
                  </div>
                  <p className="mono text-xs md:text-sm text-zinc-700 leading-relaxed">
                    Based on {results.rawHours} hours per week of manual admin, you are losing <strong className="text-rose-700">${(results.annualWaste).toLocaleString()}</strong> every year in preventable overhead.
                  </p>
                </div>

                <div className="border border-emerald-200 p-8 bg-emerald-50/70 shadow-sm">
                  <div className="mono text-xs uppercase tracking-widest text-emerald-800 font-bold mb-3">
                    Primary Strategic Objective
                  </div>
                  <h3 className="text-2xl md:text-3xl font-black uppercase text-zinc-950 mb-3">
                    System Synchronization
                  </h3>
                  <p className="mono text-xs md:text-sm text-zinc-700 leading-relaxed">
                    Eliminate your operational bottleneck by connecting your website, CRM, and AI workflows into one smooth self-running engine.
                  </p>
                </div>
              </div>

              {/* Gate with Formspree */}
              {!isReportUnlocked ? (
                <div className="border-2 border-emerald-600 bg-white p-6 md:p-10 shadow-xl relative">
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-emerald-600 text-white px-4 py-1 mono text-xs uppercase tracking-widest font-black flex items-center gap-1.5 shadow-sm">
                    <Lock size={13} /> Full Report Ready To Dispatch
                  </div>

                  <div className="text-center max-w-xl mx-auto space-y-3 mb-8 pt-2">
                    <h3 className="text-2xl sm:text-3xl font-black uppercase text-zinc-950 tracking-tight">
                      Unlock Your Complete 8-Page Infrastructure Blueprint
                    </h3>
                    <p className="text-zinc-600 text-xs md:text-sm leading-relaxed mono">
                      Enter your details below to instantly view your tailored module roadmap and receive the PDF copy in your inbox.
                    </p>
                  </div>

                  <form onSubmit={handleSendReport} className="max-w-md mx-auto space-y-4">
                    <div>
                      <label className="mono text-[11px] uppercase text-zinc-700 font-bold block mb-1.5">
                        Your Full Name *
                      </label>
                      <Input
                        required
                        placeholder="Alex Smith"
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
                        className="bg-white text-zinc-950 border-zinc-300 rounded-none h-12 mono text-sm focus:border-emerald-600"
                      />
                    </div>

                    <div>
                      <label className="mono text-[11px] uppercase text-zinc-700 font-bold block mb-1.5">
                        Email Address *
                      </label>
                      <Input
                        required
                        type="email"
                        name="email"
                        placeholder="alex@example.com"
                        value={userEmail}
                        onChange={(e) => setUserEmail(e.target.value)}
                        className="bg-white text-zinc-950 border-zinc-300 rounded-none h-12 mono text-sm focus:border-emerald-600"
                      />
                    </div>

                    <div>
                      <label className="mono text-[11px] uppercase text-zinc-700 font-bold block mb-1.5">
                        Phone / WhatsApp (Optional)
                      </label>
                      <Input
                        type="tel"
                        placeholder="+1 555 0199 or +44 7..."
                        value={userPhone}
                        onChange={(e) => setUserPhone(e.target.value)}
                        className="bg-white text-zinc-950 border-zinc-300 rounded-none h-12 mono text-sm focus:border-emerald-600"
                      />
                    </div>

                    {/* Human Verification */}
                    <div className="pt-1">
                      <HumanCaptcha isVerified={isHuman} onVerified={setIsHuman} />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSendingReport || !userEmail || !userName}
                      className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-7 rounded-none font-black text-base md:text-lg uppercase tracking-tight btn-hover flex items-center justify-center gap-2"
                    >
                      {isSendingReport ? (
                        <Loader2 className="animate-spin" />
                      ) : (
                        <>
                          <Sparkles size={18} /> Unlock and Send Full Report
                        </>
                      )}
                    </Button>
                  </form>
                </div>
              ) : (
                <div className="space-y-10 animate-in fade-in duration-500">
                  <div className="p-5 bg-emerald-50 border border-emerald-300 text-center mono text-xs md:text-sm text-emerald-900 font-bold">
                    ✓ Full Architecture Report Dispatched to <span className="text-zinc-950 font-black">{userEmail}</span>
                  </div>

                  <div className="space-y-4">
                    <SectionLabel>Your Recommended Execution Modules</SectionLabel>
                    <div className="grid grid-cols-1 gap-4">
                      {results.recommendations.map((s, i) => (
                        <div key={i} className="border border-zinc-200 p-6 md:p-8 bg-zinc-50 flex flex-col md:flex-row gap-5 items-start">
                          <div className="w-12 h-12 bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-sm">
                            <Zap size={24} />
                          </div>
                          <div>
                            <h4 className="text-xl md:text-2xl font-black uppercase text-zinc-950 mb-1.5">{s.title}</h4>
                            <p className="mono text-xs md:text-sm text-zinc-600 leading-relaxed">{s.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-emerald-600 text-white p-8 md:p-12 text-center space-y-4 shadow-lg">
                    <h3 className="text-2xl sm:text-4xl font-black uppercase tracking-tight">
                      Ready to Deploy This Infrastructure?
                    </h3>
                    <p className="text-emerald-100 font-bold max-w-lg mx-auto text-sm md:text-base">
                      Book a free 30 minute strategy session with Maria to review your custom blueprint together.
                    </p>
                    <div className="pt-2">
                      <Button asChild className="bg-zinc-950 text-white hover:bg-zinc-800 px-10 py-6 rounded-none font-black text-base uppercase tracking-tight transition-all">
                        <Link to="/contact">Book Free Strategy Session with Maria</Link>
                      </Button>
                    </div>
                  </div>
                </div>
              )}

              <div className="flex justify-center pt-4">
                <Button
                  variant="outline"
                  className="border-zinc-300 text-zinc-900 py-6 px-8 rounded-none font-bold text-xs uppercase tracking-wider hover:bg-zinc-100"
                  onClick={() => {
                    setStep(0);
                    setAnswers({});
                    setShowResults(false);
                    setIsReportUnlocked(false);
                    setIsHuman(false);
                  }}
                >
                  <RefreshCcw className="mr-2" size={16} /> Retake Assessment
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