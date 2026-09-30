import io, sys
ROOT = sys.argv[1]
p = ROOT + '/pages/Index.tsx'
s = io.open(p, encoding='utf-8').read()

# ---------------------------------------------------------------- 1. merge
# "Every Department Ready To Generate Cash" and "Or let us run it" were the
# same idea twice: six department cards. The plan cards in GrowthAndPlans have
# photographs, prices and a free week attached, so they win. This section goes.
i = s.index('      {/* Services Grid */}')
j = s.index('      {/* Ecosystem Visual */}')
s = s[:i] + s[j:]
print('merged: removed the duplicate department grid')

# ---------------------------------------------------------------- 2. sectors
s = s.replace('''      {/* Sectors We Launch */}
      <SectorsSection />

''', '')
s = s.replace("import SectorsSection from '@/components/home/SectorsSection';\n", '')
print('sectors removed from the home page')

# ---------------------------------------------------------------- 3. ecosystem
# The ecosystem diagram is a whole screen to say "things are connected", which
# the showcase band now says with pictures of the actual things.
i = s.index('      {/* Ecosystem Visual */}')
j = s.index('      <PhotoBand')
s = s[:i] + s[j:]
s = s.replace("import ConnectedEcosystem from '@/components/visuals/ConnectedEcosystem';\n", '')
print('ecosystem diagram removed')

# ---------------------------------------------------------------- 4. final CTA
OLD_CTA_START = '      {/* Contact CTA */}'
OLD_CTA_END = '      <Footer />'
i = s.index(OLD_CTA_START)
j = s.index(OLD_CTA_END)
NEW_CTA = '''      {/* The last thing on the page. It was a heading and a button on a pale
          green wash, which is what every site ends with. This one puts the two
          real choices side by side and prices both, because the reason
          somebody scrolled this far is that they are deciding. */}
      <section id="contact" className="relative overflow-hidden bg-deep">
        <img
          src={TEAM_PHOTO.band}
          alt=""
          aria-hidden
          width={1500}
          height={752}
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-deep-900/96 via-deep-800/92 to-deep-700/85" />
        <div className="absolute inset-0 bg-[radial-gradient(110%_80%_at_85%_10%,rgba(16,185,129,0.28),transparent_60%)]" />

        <div className="relative container-custom py-16 sm:py-20 px-4">
          <div className="max-w-[640px] mb-10">
            <span className="inline-flex items-center gap-2 bg-white/15 ring-1 ring-white/25 backdrop-blur text-white text-[12px] font-bold px-3.5 py-1.5 rounded-full mb-5">
              Two ways in
            </span>
            <h2 className="text-white text-3xl sm:text-5xl font-extrabold tracking-tight leading-[1.05] mb-4">
              Build it once, <br />
              <span className="text-emerald-300">or hand it over monthly.</span>
            </h2>
            <p className="text-emerald-50/85 text-[17px] leading-relaxed">
              Both prices are on this site. Neither needs a call first, and the
              monthly one does not charge you for a week.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            <div className="rounded-2xl bg-white p-7 sm:p-8 shadow-xl">
              <p className="text-[12px] font-bold tracking-wide uppercase text-emerald-700 mb-3">
                Start free
              </p>
              <h3 className="text-navy text-2xl font-extrabold mb-2">A monthly department</h3>
              <p className="text-slate-600 text-[15.5px] leading-relaxed mb-5">
                Pick the department that is in your way. We start this week and
                nothing is charged until day eight. Cancel any month.
              </p>
              <div className="flex items-baseline gap-2 mb-6">
                <span className="price-figure text-3xl font-extrabold text-navy">$249</span>
                <span className="text-slate-500 font-semibold">a month, at the smallest</span>
              </div>
              <Button asChild className="w-full bg-emerald-600 hover:bg-emerald-500 text-white py-6 rounded-xl font-bold text-[15px]">
                <Link to="/pricing">
                  Get your free trial now <ArrowRight size={17} className="ml-1.5" />
                </Link>
              </Button>
            </div>

            <div className="rounded-2xl bg-white/10 ring-1 ring-white/20 backdrop-blur p-7 sm:p-8">
              <p className="text-[12px] font-bold tracking-wide uppercase text-emerald-300 mb-3">
                Or build first
              </p>
              <h3 className="text-white text-2xl font-extrabold mb-2">A one time package</h3>
              <p className="text-emerald-50/80 text-[15.5px] leading-relaxed mb-5">
                Company, brand, site, email, payments and CRM, built as one thing
                and handed over in your name. Paid once.
              </p>
              <div className="flex items-baseline gap-2 mb-6">
                <span className="price-figure text-3xl font-extrabold text-white">$1,499</span>
                <span className="text-emerald-50/60 font-semibold">once, at the smallest</span>
              </div>
              <Button asChild variant="outline" className="w-full border-white/40 bg-transparent text-white hover:bg-white/15 hover:text-white py-6 rounded-xl font-semibold text-[15px]">
                <Link to="/packages">See the three builds</Link>
              </Button>
            </div>
          </div>

          <p className="text-emerald-50/60 text-[13.5px] mt-7">
            Would rather talk it through first?{' '}
            <button type="button" onClick={() => openBooking()} className="text-white font-semibold underline underline-offset-4">
              Book a free call
            </button>
            {' '}and we will tell you if you do not need us.
          </p>
        </div>
      </section>

'''
s = s[:i] + NEW_CTA + s[j:]
print('final CTA rebuilt')

# ---------------------------------------------------------------- 5. tidy
s = s.replace("import EmailCaptureCTA from '@/components/home/EmailCaptureCTA';\n", '')

io.open(p, 'w', encoding='utf-8').write(s)
print('done')
