import io, re, sys

ROOT = sys.argv[1]

def rd(p):
    return io.open(ROOT + '/' + p, encoding='utf-8').read()

def wr(p, s):
    io.open(ROOT + '/' + p, 'w', encoding='utf-8').write(s)

def add_imports(s, extra):
    """Put the PageHero import after the Footer import, which every page has."""
    if 'PageHero' in s:
        return s
    anchor = "import Footer from '@/components/layout/Footer';"
    assert anchor in s, 'no Footer import'
    return s.replace(anchor, anchor + "\n" + extra, 1)

IMP = "import PageHero from '@/components/ui/PageHero';\nimport { PLAN_PHOTOS, TEAM_PHOTO, BUILD_PHOTO, OWNER_PHOTO } from '@/data/planPhotos';"

JOBS = []

# ---------------------------------------------------------------- Pricing
JOBS.append(('pages/Pricing.tsx', '''      <section className="pt-36 md:pt-44 pb-16 px-6 border-b border-slate-200">
        <div className="container-custom text-center max-w-[820px] mx-auto">
          <p className="text-emerald-700 font-semibold mb-5 tracking-wide">
            Monthly plans
          </p>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-navy mb-6 leading-[1.05]">
            Pick what you want run, <br className="hidden md:block" />
            and what it costs.
          </h1>
          <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
            Six departments, each on its own monthly plan. Buy one, buy two, or
            take the lot together and pay less than the sum. Cancel any month.
          </p>
        </div>
      </section>''', '''      <PageHero
        eyebrow="Monthly plans"
        title={<>Pick what you want run, <br className="hidden md:block" />and what it costs.</>}
        body="Six departments, each on its own monthly plan. Buy one, buy two, or take the lot together and pay less than the sum. Every one starts with a free week."
        image={PLAN_PHOTOS['sales-crm-monthly'].band}
        primary={{ label: 'Start a free week', href: '#plans' }}
        secondary={{ label: 'One time builds instead', href: '/packages' }}
        stats={[
          { value: '7 days', label: 'Free before you pay' },
          { value: '6', label: 'Departments to choose from' },
          { value: '$249', label: 'The smallest plan' },
          { value: 'Any month', label: 'Cancel, no tie in' },
        ]}
      />'''))

# ---------------------------------------------------------------- Packages
JOBS.append(('pages/Packages.tsx', '''      <section className="pt-40 md:pt-48 pb-24 px-6 border-b border-slate-200 bg-gradient-to-b from-emerald-50/40 to-white">
        <div className="container-custom text-center">
          <p className="text-emerald-700 font-semibold mb-5 tracking-wide">Packages</p>
          <h1 className="text-4xl md:text-6xl leading-[1.05] mb-6 font-extrabold tracking-tight text-navy">
            One payment. <br />
            <span className="text-emerald-700">A business that runs.</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 max-w-[760px] mx-auto leading-relaxed">
            Three fixed scope builds that take you from nothing to open, in 7 to
            28 days. Click any feature to see exactly what gets built. A monthly
            plan afterwards is optional.
          </p>
        </div>
      </section>''', '''      <PageHero
        eyebrow="One time packages"
        title={<>One payment. <br />A business that runs.</>}
        body="Three fixed scope builds that take you from nothing to open in 7 to 28 days. Open any line to see exactly what gets built. A monthly plan afterwards is optional."
        image={BUILD_PHOTO.band}
        primary={{ label: 'See the three builds', href: '#builds' }}
        secondary={{ label: 'Or a monthly plan', href: '/pricing' }}
        stats={[
          { value: '7 days', label: 'Fastest build, live' },
          { value: '$1,499', label: 'Starter, paid once' },
          { value: '100%', label: 'Registered in your name' },
          { value: 'Nothing', label: 'Recurring, ever' },
        ]}
      />'''))

# ---------------------------------------------------------------- Services
JOBS.append(('pages/Services.tsx', '''      <section className="pt-40 md:pt-48 pb-20 px-6 border-b border-slate-200 bg-gradient-to-b from-emerald-50/40 to-white">
        <div className="container-custom">
          <motion.div {...reveal}>
            <SectionLabel>The Capabilities</SectionLabel>
            <h1 className="text-5xl md:text-8xl leading-[0.9] mb-8 font-bold tracking-tight text-navy">
              Our <br /> <span className="text-emerald-700">Services.</span>
            </h1>
            <p className="text-lg md:text-2xl text-slate-600 max-w-[800px] leading-relaxed">
              {allServicesCatalog.length} services across {CATEGORIES.length} categories. Take the
              whole stack as a package, or any single piece on its own.
            </p>
          </motion.div>
        </div>
      </section>''', '''      <PageHero
        eyebrow="Everything we do"
        title={<>Seven departments. <br />Sixty five services.</>}
        body={`${allServicesCatalog.length} services across ${CATEGORIES.length} departments. Take a whole department on a monthly plan, take the lot as a build, or buy any single piece on its own.`}
        image={PLAN_PHOTOS['ops-systems-monthly'].band}
        primary={{ label: 'Buy one at a time', href: '/solo-services' }}
        secondary={{ label: 'Or hand over a department', href: '/pricing' }}
      />'''))

# ---------------------------------------------------------------- Solo services
JOBS.append(('pages/SoloServices.tsx', '''      <section className="pt-24 sm:pt-28 pb-12 px-4 sm:px-6 border-b border-slate-200 bg-gradient-to-b from-emerald-50/40 to-white">
        <div className="container-custom">
          <SectionLabel>Pick What You Need</SectionLabel>
          <h1 className="text-4xl sm:text-6xl md:text-7xl leading-[0.95] mb-5 font-bold tracking-tight text-navy">
            Solo <span className="text-emerald-700">Services.</span>
          </h1>
          <p className="text-base sm:text-xl text-slate-600 max-w-[800px] leading-relaxed">
            All {allServicesCatalog.length} services, each with a price, each bookable on its own
            without a full package.
          </p>
        </div>
      </section>''', '''      <PageHero
        compact
        eyebrow="Pick what you need"
        title={<>One service. <br />One published price.</>}
        body={`All ${allServicesCatalog.length} services, each with a price on the card, each bookable on its own without a package and without a call.`}
        image={PLAN_PHOTOS['compliance-filings-monthly'].band}
        primary={{ label: 'Browse the catalogue', href: '#catalogue' }}
        secondary={{ label: 'Or a monthly plan', href: '/pricing' }}
      />'''))

# ---------------------------------------------------------------- About
JOBS.append(('pages/About.tsx', '''      <section className="pt-40 md:pt-48 pb-24 px-6 border-b border-slate-200 bg-gradient-to-b from-emerald-50/40 to-white">
        <div className="container-custom">
          <motion.div {...reveal}>
            <SectionLabel>The Mission</SectionLabel>
            <h1 className="text-5xl md:text-8xl leading-[0.9] mb-12 font-bold tracking-tight text-navy">
              Built by <br /> <span className="text-emerald-700">Founders</span> <br /> for Founders.
            </h1>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-end">
              <p className="text-xl md:text-3xl text-slate-600 leading-snug">
                We have been in your shoes. That is why we built the system we wished existed when we were starting out.
              </p>
              <div className="max-w-[420px] w-full ml-auto">
                <SystemStatus />
              </div>
            </div>
          </motion.div>
        </div>
      </section>''', '''      <PageHero
        eyebrow="About Calpir"
        title={<>Built by founders, <br />for founders.</>}
        body="We have been in your shoes. Calpir is the system we wished existed when we were starting out: one team that sets the whole business up and then keeps running the parts you did not start a company to do."
        image={TEAM_PHOTO.band}
        primary={{ label: 'See what we run', href: '/pricing' }}
        secondary={{ label: 'Read the case studies', href: '/case-studies' }}
      />'''))

# ---------------------------------------------------------------- Case studies
JOBS.append(('pages/CaseStudies.tsx', '''      <section className="pt-40 md:pt-48 pb-24 px-6 border-b border-slate-200 bg-gradient-to-b from-emerald-50/40 to-white">
        <div className="container-custom">
          <motion.div {...reveal}>
            <SectionLabel>Proof of Concept</SectionLabel>
            <h1 className="text-5xl md:text-8xl leading-[0.9] mb-8 font-bold tracking-tight text-navy">
              Case <br /> <span className="text-emerald-700">Studies.</span>
            </h1>
          </motion.div>
        </div>
      </section>''', '''      <PageHero
        eyebrow="The work"
        title={<>What it looks like <br />when it is finished.</>}
        body="How the setup, the systems and the monthly work come together for a real business, and what changed as a result."
        image={OWNER_PHOTO.band}
        primary={{ label: 'Start a free week', href: '/pricing' }}
        secondary={{ label: 'See the packages', href: '/packages' }}
      />'''))

# ---------------------------------------------------------------- Blog
JOBS.append(('pages/Blog.tsx', '''      <section className="pt-40 md:pt-48 pb-24 px-6 bg-gradient-to-b from-emerald-50/40 to-white">
        <div className="container-custom">
          <SectionLabel>The Intelligence Hub</SectionLabel>
          <h1 className="text-5xl md:text-8xl leading-[0.9] mb-8 font-bold tracking-tight text-navy">Insights.</h1>
          <p className="text-lg md:text-2xl text-slate-600 max-w-[800px] mb-16 leading-relaxed">
            In depth playbooks, technical blueprints, and operational guides published by the engineering and launch team at Calpir.
          </p>
          ''', '''      <PageHero
        eyebrow="Written by the people who build it"
        title={<>Playbooks, prices <br />and plain answers.</>}
        body="In depth guides on setting a company up, what the software actually costs, and how the automation is built. Written by the team that does the work, researched against primary sources."
        image={PLAN_PHOTOS['brand-content-monthly'].band}
      />

      <section className="section-padding">
        <div className="container-custom">
          '''))

# ---------------------------------------------------------------- Contact
JOBS.append(('pages/Contact.tsx', '''      <section className="pt-36 md:pt-44 pb-16 px-4 md:px-6 border-b border-slate-200 bg-gradient-to-b from-emerald-50/40 to-white">
        <div className="container-custom">
          <SectionLabel>Direct Transmission</SectionLabel>
          <h1 className="text-4xl sm:text-6xl md:text-8xl leading-[0.9] mb-6 font-bold tracking-tight text-navy">
            Get in <br /> <span className="text-emerald-700">Touch.</span>
          </h1>
          <p className="text-lg md:text-2xl text-slate-600 max-w-3xl leading-relaxed">
            We genuinely love setting up businesses and seeing you succeed. Tell us what you want to build or book a live strategy session with Maria below.
          </p>
        </div>
      </section>''', '''      <PageHero
        compact
        eyebrow="Talk to us"
        title={<>Tell us what you <br />want built.</>}
        body="Say what the business is and what is in your way. You get a straight answer, a named thing and a number, whether or not you end up buying anything."
        image={PLAN_PHOTOS['hr-admin-monthly'].band}
      />'''))

for path, old, new in JOBS:
    s = rd(path)
    if old not in s:
        print('MISS', path)
        continue
    s = s.replace(old, new, 1)
    s = add_imports(s, IMP)
    wr(path, s)
    print('hero swapped:', path)
