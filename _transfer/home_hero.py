import io, sys
ROOT = sys.argv[1]
p = ROOT + '/pages/Index.tsx'
s = io.open(p, encoding='utf-8').read()

OLD_START = '      {/* Hero Section */}'
OLD_END = '      {/* Full Setup Pillars Section */}'
i = s.index(OLD_START)
j = s.index(OLD_END)

NEW = '''      {/* Hero Section */}
      {/* A photograph behind a green wash, the same treatment every other page
          wears, so the site reads as one thing. The four promises are tiles
          rather than a bullet list, because a row of ticks beside plain text is
          what a template looks like. The assessment stays white on top of it
          all, which is where the eye should land. */}
      <section className="relative overflow-hidden bg-deep">
        <img
          src={OWNER_PHOTO.band}
          alt=""
          aria-hidden
          width={1500}
          height={752}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-deep-900/96 via-deep-800/92 to-deep-700/80" />
        <div className="absolute inset-0 bg-[radial-gradient(120%_90%_at_8%_0%,rgba(16,185,129,0.3),transparent_62%)]" />

        <div className="relative container-custom pt-12 pb-14 sm:pt-16 sm:pb-20 px-4 sm:px-6 lg:px-8">
          <motion.div {...reveal} className="grid lg:grid-cols-[1.05fr,1fr] gap-10 lg:gap-14 items-center">

            <div>
              <div className="inline-flex items-center gap-2 bg-white/15 ring-1 ring-white/25 backdrop-blur px-3.5 py-1.5 mb-5 text-[13px] text-white font-semibold rounded-full">
                <Sparkles size={13} className="text-emerald-300 shrink-0" /> Set it up, then get it found
              </div>

              <h1 className="text-white text-[2.1rem] leading-[1.05] sm:text-5xl lg:text-[3.6rem] lg:leading-[1.02] mb-5">
                Set up in 7 days. <br />
                <span className="text-emerald-300">Found every month after.</span>
              </h1>

              <p className="text-emerald-50/85 text-[17px] sm:text-[18.5px] leading-relaxed mb-8 max-w-[560px]">
                Entity, brand, website, CRM, payments and AI systems, built as one
                connected setup. Then marketing, SEO, your CRM and operations run
                monthly, so the business you launched keeps getting found.
              </p>

              {/* The four promises, as tiles. Each one is a claim we can be held
                  to, so each one gets its own box rather than a tick in a list. */}
              <div className="grid grid-cols-2 gap-3 mb-8 max-w-[560px]">
                {[
                  { icon: Rocket, big: '7 days', small: 'Whole business set up' },
                  { icon: TrendingUp, big: 'Monthly', small: 'Marketing and SEO run for you' },
                  { icon: Tag, big: 'Published', small: 'Every price, before you ask' },
                  { icon: KeyRound, big: '100%', small: 'Code and accounts in your name' },
                ].map((t) => {
                  const TileIcon = t.icon;
                  return (
                    <div
                      key={t.big}
                      className="rounded-xl bg-white/10 ring-1 ring-white/15 backdrop-blur px-4 py-3.5"
                    >
                      <TileIcon size={17} className="text-emerald-300 mb-2.5" />
                      <div className="text-white font-extrabold text-[1.15rem] leading-none tracking-tight">
                        {t.big}
                      </div>
                      <div className="text-emerald-50/70 text-[12.5px] font-medium mt-1.5 leading-snug">
                        {t.small}
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <Button
                  asChild
                  className="bg-white hover:bg-emerald-50 text-deep px-7 py-6 rounded-xl font-bold text-[15px] shadow-lg shadow-black/10"
                >
                  <Link to="/pricing">
                    Get your free trial now <ArrowRight size={17} className="ml-1.5" />
                  </Link>
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => openBooking()}
                  className="border-white/35 bg-white/5 text-white hover:bg-white/15 hover:text-white px-7 py-6 rounded-xl font-semibold text-[15px]"
                >
                  Book a call instead
                </Button>
              </div>

              <p className="text-emerald-50/60 text-[13px] mt-4">
                Seven days free on every monthly plan. Nothing is charged until day eight.
              </p>
            </div>

            <HeroAssessment />
          </motion.div>
        </div>
      </section>

'''

s = s[:i] + NEW + s[j:]

# icons used by the tiles
s = s.replace(
    "import { ArrowRight, Globe, BarChart3, Settings, Bot, Zap, Layers, Sparkles, CheckCircle2, CreditCard, ShieldCheck } from 'lucide-react';",
    "import { ArrowRight, Globe, BarChart3, Settings, Bot, Zap, Layers, Sparkles, CheckCircle2, CreditCard, ShieldCheck, Rocket, TrendingUp, Tag, KeyRound } from 'lucide-react';",
    1,
)

io.open(p, 'w', encoding='utf-8').write(s)
print('home hero rebuilt')
