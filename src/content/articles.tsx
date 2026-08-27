"use client";

import React from 'react';
import { Link } from 'react-router-dom';
import {
  Zap, Database, Bot, Building2, ShieldCheck, Workflow,
  CreditCard, Mail, FileText, Users, Clock, TrendingUp,
} from 'lucide-react';

/**
 * Long-form article bodies, keyed by post slug.
 * Metadata (title, description, dates, author, image) lives in src/content/posts.json.
 *
 * House style used throughout:
 *   lead      text-2xl ... border-l-4 border-emerald-600 pl-6 py-2 bg-emerald-50
 *   h2        text-3xl font-black uppercase tracking-tight pt-6 border-t border-zinc-200
 *   h3        text-xl font-bold text-emerald-800 uppercase tracking-wider
 *   card      p-6 border border-zinc-200 bg-zinc-50 shadow-sm
 *   list      list-disc pl-8 space-y-2 text-sm text-zinc-700
 */

export interface PostContentMap {
  [slug: string]: React.ReactNode;
}

/* ------------------------------------------------------------------ */
/* Shared presentational helpers — same visual language as the site.   */
/* ------------------------------------------------------------------ */

const Lead: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <p className="text-2xl text-zinc-950 font-black uppercase tracking-tight border-l-4 border-emerald-600 pl-6 py-2 bg-emerald-50">
    {children}
  </p>
);

const H2: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h2 className="text-3xl font-black text-zinc-950 uppercase tracking-tight pt-6 border-t border-zinc-200">
    {children}
  </h2>
);

const H3: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h3 className="text-xl font-bold text-emerald-800 uppercase tracking-wider">{children}</h3>
);

const Card: React.FC<{ icon: React.ReactNode; title: string; children: React.ReactNode }> = ({
  icon,
  title,
  children,
}) => (
  <div className="p-6 border border-zinc-200 bg-zinc-50 shadow-sm">
    <div className="text-emerald-700 mb-4">{icon}</div>
    <h4 className="text-lg font-black text-zinc-950 mb-2 uppercase">{title}</h4>
    <p className="text-xs text-zinc-600 leading-relaxed">{children}</p>
  </div>
);

const Grid: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">{children}</div>
);

const Takeaway: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="border-l-4 border-zinc-950 bg-zinc-50 pl-6 pr-6 py-5 my-8">
    <p className="mono text-xs uppercase tracking-widest text-emerald-700 font-black mb-3">
      The short version
    </p>
    <div className="text-base text-zinc-800 leading-relaxed space-y-2">{children}</div>
  </div>
);

const Table: React.FC<{ head: string[]; rows: string[][] }> = ({ head, rows }) => (
  <div className="overflow-x-auto my-8 border border-zinc-200 shadow-sm">
    <table className="w-full mono text-sm text-left">
      <thead className="bg-zinc-950 text-white">
        <tr>
          {head.map((h) => (
            <th key={h} className="px-4 py-3 font-black uppercase tracking-wider text-xs whitespace-nowrap">
              {h}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, i) => (
          <tr key={i} className={i % 2 ? 'bg-zinc-50' : 'bg-white'}>
            {row.map((cell, j) => (
              <td
                key={j}
                className={
                  j === 0
                    ? 'px-4 py-3 border-t border-zinc-200 font-bold text-zinc-950 align-top'
                    : 'px-4 py-3 border-t border-zinc-200 text-zinc-700 align-top'
                }
              >
                {cell}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const Body: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="space-y-12 mono text-lg leading-relaxed text-zinc-800">{children}</div>
);

const B: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <strong className="text-zinc-950">{children}</strong>
);

const Internal: React.FC<{ to: string; children: React.ReactNode }> = ({ to, children }) => (
  <Link to={to} className="text-emerald-700 underline underline-offset-4 hover:text-emerald-900">
    {children}
  </Link>
);

/* ------------------------------------------------------------------ */
/* Articles                                                            */
/* ------------------------------------------------------------------ */

export const articlesContent: PostContentMap = {
  /* ================================================================ */
  'how-to-setup-new-business-2026': (
    <Body>
      <Lead>
        The definitive 2026 playbook for taking an idea from raw concept to an integrated, revenue
        generating business — in the order that actually works.
      </Lead>

      <p>
        Launching a business in 2026 looks nothing like it did three years ago. The old sequence —
        hire a designer, wait for a website, find a developer, bolt on a CRM eighteen months later —
        has been replaced by something faster and, if you get the order right, considerably cheaper.
        What decides whether a launch stalls is almost never the idea. It is{' '}
        <B>the order of execution</B>, and how many of your systems talk to each other on day one.
      </p>

      <p>
        This guide is the sequence we use on every Calpir build. It is written for founders who want
        a business that runs, not a business that looks good in a pitch deck. Every phase below has a
        dependency on the one before it, which is why the order matters more than the individual
        choices inside each phase.
      </p>

      <Takeaway>
        <p>
          Register the entity first, because banking and payments depend on it. Get money
          infrastructure working before you build anything pretty. Build the site and the CRM as one
          system, not two. Add AI last, on top of processes that already work — automating a broken
          process just breaks it faster.
        </p>
      </Takeaway>

      <H2>Phase 1: Legal Entity and Corporate Foundation</H2>

      <p>
        Before you buy a domain or open a design tool, you need a legal structure. It protects your
        personal assets, it is a prerequisite for a business bank account, and almost every serious
        payment processor will ask for company details before they let you take money.
      </p>

      <H3>Choosing your jurisdiction</H3>

      <p>
        Most founders we work with land in one of three places. The right answer depends far more on
        where your clients and your bank are than on tax theory you read on a forum.
      </p>

      <ul className="list-disc pl-8 space-y-2 text-sm text-zinc-700">
        <li>
          <B>UK Limited Company.</B> The default if you are serving UK or European clients.
          Incorporation through Companies House is same day in most cases and costs under fifty
          pounds. Ongoing admin is a confirmation statement and annual accounts. You will need a
          registered office address, at least one director, and details of anyone with significant
          control.
        </li>
        <li>
          <B>US LLC (Wyoming or Delaware).</B> Sensible for international founders who need US
          banking, want to invoice in dollars, or whose customers expect a US entity. Wyoming is
          cheaper to maintain; Delaware is what investors recognise. Both require a registered agent.
        </li>
        <li>
          <B>Sole trader or equivalent.</B> Fine for testing an idea with low liability. It becomes a
          problem the moment you sign a contract with a client who has a procurement process, because
          many will not contract with an individual.
        </li>
      </ul>

      <H3>What to have ready before you file</H3>

      <p>
        Filing itself takes minutes. The delays come from not having the surrounding pieces. Decide
        your company name and check it is not already registered and not trademarked. Have a
        registered office address. Know your SIC code. Decide your share structure now, even if it is
        one hundred shares held by you, because changing it later while adding a co-founder is
        avoidable paperwork.
      </p>

      <H2>Phase 2: Money Infrastructure</H2>

      <p>
        This is the phase founders skip, and it is the one that most often blocks a launch. You can
        have a beautiful website and no way to take payment.
      </p>

      <Grid>
        <Card icon={<Building2 size={28} />} title="Business Banking">
          Open the account as soon as incorporation clears. Digital banks approve in days rather than
          weeks. Expect to provide proof of address, proof of identity and a description of your
          trading activity.
        </Card>
        <Card icon={<CreditCard size={28} />} title="Payment Processing">
          Stripe or equivalent, connected to that account. Verification can take several days, so
          start it before you need it, not the week you launch.
        </Card>
      </Grid>

      <p>
        A practical detail that costs people weeks: payment processors verify against your registered
        company details. If your bank account name, your Companies House record and your website
        trading name disagree, verification stalls. Keep all three identical from the start.
      </p>

      <H2>Phase 3: The Digital Storefront</H2>

      <p>
        Your site has one job at launch, and it is not to win design awards. It is to explain what you
        do, prove you are real, and capture an enquiry. Everything else is refinement you can do once
        you have traffic to learn from.
      </p>

      <p>
        Modern expectations are non negotiable on speed. Aim for a page that becomes usable in under
        1.5 seconds on a mid range phone on mobile data — not on your laptop on office wifi. Static or
        edge rendered sites on a modern host clear that bar comfortably. Heavy page builders with a
        dozen third party scripts do not.
      </p>

      <p>
        Get the technical foundations right at launch rather than retrofitting them, because
        retrofitting means asking Google to re-crawl and re-evaluate a site it has already judged. At
        minimum: a unique title and description on every page, one canonical URL per page, an XML
        sitemap submitted to Search Console, and analytics installed before your first visitor
        arrives. If any of that sounds like a foreign language, it is covered in{' '}
        <Internal to="/services/website-development">our website build service</Internal>.
      </p>

      <H2>Phase 4: The Unified Revenue Engine</H2>

      <p>
        A CRM is not a contact list. It is the record of every conversation, the thing that tells you
        which marketing actually produced revenue, and the engine that follows up when you forget to.
        Install it at launch, while you have ten contacts, rather than at month nine when you have
        four hundred spread across a phone, an inbox and a notebook.
      </p>

      <Grid>
        <Card icon={<Database size={28} />} title="CRM and Lead Capture">
          Every form on the site writes into the CRM with its source recorded. Pipeline stages match
          how you actually sell, not the software default.
        </Card>
        <Card icon={<Zap size={28} />} title="Instant Follow Up">
          An automated acknowledgement within sixty seconds of an enquiry, and an internal alert to
          your phone. Response speed is the single strongest predictor of whether a lead converts.
        </Card>
      </Grid>

      <p>
        The choice of tool matters less than most comparison articles suggest. What matters is whether
        it is configured around your sales process and connected to everything else. A well configured
        cheap CRM beats a badly configured expensive one every time. We go into this in more depth in{' '}
        <Internal to="/services/crm-sales">CRM and sales system setup</Internal>.
      </p>

      <H2>Phase 5: The AI Layer</H2>

      <p>
        AI belongs at the end of this list deliberately. An agent trained on your documentation can
        qualify leads, answer the same fifteen questions you answer every week, and book meetings
        around the clock. But it can only do that if the documentation exists and the booking system
        works. Automation applied to a process that does not work simply produces failure at higher
        volume.
      </p>

      <p>
        Start with the narrowest useful job rather than a general assistant. The first agent worth
        deploying is usually one that handles pre-sales questions on your site, because the questions
        are repetitive, the answers are stable, and the cost of a wrong answer is low. See{' '}
        <Internal to="/services/ai-agents">AI agents</Internal> for how we scope this.
      </p>

      <H2>Phase 6: Operations and Handover</H2>

      <p>
        Write down how the business runs while it is small enough that you can hold all of it in your
        head. Standard operating procedures written at month two take an afternoon. The same documents
        written at month twenty, after three people have each invented their own way of doing the same
        task, take a week and involve an argument.
      </p>

      <p>
        You do not need a wiki. You need a short document per recurring process: what triggers it, the
        steps, who owns it, and what done looks like. Onboarding a client. Sending an invoice. Handling
        a refund. Publishing a blog post.
      </p>

      <H2>A Realistic Timeline</H2>

      <p>
        Here is what the sequence looks like compressed into the fastest sensible schedule. Anything
        quicker usually means something was skipped and will resurface.
      </p>

      <Table
        head={['Days', 'Phase', 'Blocked by']}
        rows={[
          ['1 to 3', 'Incorporation, registered address, company email', 'Nothing — start here'],
          ['3 to 10', 'Business bank account, payment processor verification', 'Incorporation'],
          ['5 to 14', 'Brand basics, domain, website build', 'Nothing, can run in parallel'],
          ['10 to 18', 'CRM configuration, forms wired, pipeline stages', 'Website structure'],
          ['14 to 24', 'Automations, invoicing, internal alerts', 'CRM and payments'],
          ['20 to 28', 'AI agent, SOPs, analytics review', 'Everything above'],
        ]}
      />

      <H2>What Founders Get Wrong</H2>

      <p>
        Three patterns account for most of the delay we see. First, spending three weeks on a logo
        while the bank account application sits unfinished — brand refinement is infinitely
        postponable, verification is not. Second, treating the website and the CRM as separate
        projects bought from separate people, which guarantees they will not talk to each other.
        Third, buying tools before defining the process, which produces a stack of subscriptions that
        each solve a fraction of a problem nobody has written down.
      </p>

      <p>
        The founders who launch fastest are not the ones who work hardest in week one. They are the
        ones who did phase one and two before they let themselves enjoy phase three.
      </p>
    </Body>
  ),

  /* ================================================================ */
  'what-to-start-with-launch-guide': (
    <Body>
      <Lead>
        The first 30 days decide whether a business gets traction or dies in decision paralysis. Here
        is the exact order of execution, week by week.
      </Lead>

      <p>
        Almost nobody fails in their first month because they picked the wrong CRM. They fail because
        they tried to do everything at once, ran out of momentum somewhere around the brand
        guidelines, and never got to the part where money changes hands.
      </p>

      <p>
        The cure is a strict order with a single deliverable each week. Below is the schedule we run
        with clients, along with the decisions worth making quickly and the ones worth deferring
        entirely.
      </p>

      <Takeaway>
        <p>
          Week one is legal and identity. Week two is the site and being findable. Week three is
          getting paid. Week four is support, documentation and your first channel. Anything that does
          not fit in that sequence is a month two problem.
        </p>
      </Takeaway>

      <H2>Week 1: Registration, Domain and Identity</H2>

      <p>
        The goal this week is to exist officially and to own your name in the places that matter. That
        is it.
      </p>

      <H3>What to finish</H3>

      <ul className="list-disc pl-8 space-y-2 text-sm text-zinc-700">
        <li>File your incorporation and note your company number.</li>
        <li>Buy the domain. Take the matching handles on the one or two social platforms you will actually use.</li>
        <li>Set up business email on your own domain. A business running on a personal address loses deals it never hears about.</li>
        <li>Pick a five colour palette and one typeface pairing. Write them down. Stop.</li>
      </ul>

      <H3>What to defer</H3>

      <p>
        Logo refinement, brand guidelines documents, tone of voice workshops, and anything involving
        the word rebrand. These feel like progress and produce none. A clean wordmark in a decent
        typeface is enough for a year. Every founder who spent week one on a logo tells us the same
        thing later, which is that they changed it anyway once they understood their customers.
      </p>

      <H2>Week 2: Storefront and Being Findable</H2>

      <p>
        Launch a site that explains what you do and captures an enquiry. Five pages is plenty: home,
        what you do, proof, about, contact.
      </p>

      <p>
        Then make it findable, which is a separate job that most launches forget. Being live is not
        the same as being indexed. Claim your Google Business Profile, verify your site in Search
        Console, submit an XML sitemap, and install analytics on day one so you have a baseline. We
        have seen sites sit un-indexed for months because nobody ever told Google they existed.
      </p>

      <Grid>
        <Card icon={<Mail size={28} />} title="Own Your Contact Path">
          One clear enquiry route, on every page, that writes into a system rather than an inbox.
        </Card>
        <Card icon={<TrendingUp size={28} />} title="Measure From Day One">
          Analytics installed before your first visitor. Retroactive data does not exist.
        </Card>
      </Grid>

      <H2>Week 3: Pipelines and Getting Paid</H2>

      <p>
        This is the week the business becomes real, because it becomes capable of taking money.
      </p>

      <p>
        Connect your payment processor. Build your deal stages in the CRM to match how you actually
        sell — for most service businesses that is enquiry, qualified, proposal sent, won or lost, and
        nothing more elaborate until you have data. Set up automated alerts so a new enquiry reaches
        your phone within a minute, not whenever you next open your laptop.
      </p>

      <p>
        Write your proposal template and your invoice template now, while you have time. Doing it
        under pressure with a real prospect waiting is how bad terms get agreed.
      </p>

      <H2>Week 4: Support, Documentation and One Channel</H2>

      <p>
        Deploy a support path that works when you are asleep — at minimum an autoresponder with
        genuine answers, ideally an agent trained on your own material. Document the three processes
        you have already repeated: how you respond to an enquiry, how you onboard, how you invoice.
      </p>

      <p>
        Then pick <B>one</B> channel and commit to it for ninety days. One channel done consistently
        beats four done occasionally, and the discipline of a schedule matters more than the platform.
        If you are unsure which, pick the one where your buyers already are and where you can stand to
        produce something twice a week without hating it.
      </p>

      <H2>The Month Two Checklist</H2>

      <p>
        Everything you deferred goes here, and this is the list to revisit on day thirty-one: brand
        refinement, a second traffic channel, deeper automations, case studies from your first
        clients, and a proper look at what analytics is telling you. If you want a structured view of
        what to tackle next, our{' '}
        <Internal to="/assessment">free business assessment</Internal> maps which parts of a setup are
        ready to automate and which are not.
      </p>

      <p>
        Thirty days is enough to have a registered, findable business that can take payment and answer
        a customer. It is not enough to have a perfect one, and trying for perfect is precisely what
        stops most people from having either.
      </p>
    </Body>
  ),

  /* ================================================================ */
  'best-crm-tools-comparison': (
    <Body>
      <Lead>
        HubSpot, GoHighLevel, Salesforce and Zoho, compared for the businesses that actually have to
        live with the decision: service companies under fifty people.
      </Lead>

      <p>
        Most CRM comparisons are written by people who earn a commission when you sign up. This one is
        written by a team that has to configure the thing afterwards and then support the client using
        it, which produces very different opinions.
      </p>

      <p>
        The honest headline is that for a business under fifty people, all four of these will work.
        The differences that matter are not features — they are pricing structure, how much
        configuration is needed before the tool is useful, and how painful it is to leave.
      </p>

      <Takeaway>
        <p>
          Choose HubSpot if your sales are conversation-led B2B and you value a clean interface.
          Choose GoHighLevel if SMS, booking and a shared inbox are core, and per-seat pricing would
          hurt. Choose Zoho if you are cost-sensitive and willing to configure. Choose Salesforce only
          if something specific forces you to.
        </p>
      </Takeaway>

      <H2>How to Actually Decide</H2>

      <p>
        Before comparing products, answer three questions about your own business. The answers narrow
        the field faster than any feature table.
      </p>

      <ul className="list-disc pl-8 space-y-2 text-sm text-zinc-700">
        <li>
          <B>How do deals actually arrive and progress?</B> Inbound form fills that need nurturing
          over weeks behave differently from phone enquiries that close in two days.
        </li>
        <li>
          <B>How many people need access, and will that number grow?</B> Per-seat pricing is invisible
          at three people and painful at fifteen.
        </li>
        <li>
          <B>What has to connect to it?</B> Your website forms, your calendar, your invoicing, your
          phone. A CRM that does not connect to those is a spreadsheet with a subscription.
        </li>
      </ul>

      <H2>HubSpot: The Clean B2B Standard</H2>

      <p>
        HubSpot is the easiest of the four to adopt. The interface is genuinely good, email integration
        works without fighting it, and a small team can be productive in an afternoon. The free tier is
        unusually generous and real businesses run on it for a long time.
      </p>

      <p>
        The catch is the pricing curve. The features you eventually want — sequences, meaningful
        automation, custom reporting — sit in tiers that step up sharply, and by then your data and
        your team habits are inside the product. Go in knowing that, and it is an excellent choice for
        consultative B2B selling.
      </p>

      <H2>GoHighLevel: Built for Volume and Local Service</H2>

      <p>
        If your business runs on two-way SMS, booking calendars and a unified inbox, GoHighLevel is
        built for exactly that shape of work, and it does not charge per user. For a growing team, the
        pricing structure alone can be decisive.
      </p>

      <p>
        The trade-off is polish and configuration burden. It does a great deal out of the box, which
        also means there is a great deal to set up, and the interface assumes you know what you want.
        It rewards a proper implementation and punishes a casual one.
      </p>

      <H2>Zoho CRM: The Value Option</H2>

      <p>
        Zoho is substantially cheaper than the alternatives and more capable than its reputation
        suggests, particularly if you are already using other Zoho products. Customisation is deep.
      </p>

      <p>
        The cost is time. Zoho typically needs more configuration before it feels good to use, and the
        interface is denser than HubSpot. If your team is patient and your budget is tight, that is a
        reasonable trade. If nobody will own the setup, it becomes shelfware.
      </p>

      <H2>Salesforce: Powerful, and Usually Overkill</H2>

      <p>
        Salesforce can model almost any business process, which is precisely why it is the wrong
        default for a small service company. The cost is not the licence — it is that meaningful
        configuration usually requires a specialist, and the flexibility invites complexity nobody
        asked for.
      </p>

      <p>
        Pick it when something specific demands it: a compliance requirement, an enterprise customer
        who mandates integration, or an existing team that already knows it well.
      </p>

      <H2>Side by Side</H2>

      <Table
        head={['', 'Best for', 'Pricing shape', 'Setup effort']}
        rows={[
          ['HubSpot', 'Consultative B2B, small teams', 'Free tier, steep tier jumps', 'Low'],
          ['GoHighLevel', 'SMS, bookings, local service, agencies', 'Flat, not per seat', 'High'],
          ['Zoho', 'Budget-conscious, willing to configure', 'Low per seat', 'Medium to high'],
          ['Salesforce', 'Complex or mandated requirements', 'High, plus implementation', 'Very high'],
        ]}
      />

      <H2>The Part That Matters More Than the Choice</H2>

      <p>
        In practice, we see far more businesses harmed by a badly configured CRM than by choosing the
        wrong one. A pipeline that does not match how you sell, forms that do not write into it,
        nobody owning data hygiene — those problems are identical across all four products, and they
        are the reason most CRMs end up abandoned.
      </p>

      <p>
        Whichever you choose, budget more attention for the configuration than the comparison. If you
        would rather not, that is what{' '}
        <Internal to="/services/crm-sales">our CRM setup service</Internal> exists to do.
      </p>
    </Body>
  ),

  /* ================================================================ */
  'ai-agents-replacing-saas': (
    <Body>
      <Lead>
        Software you configure is being replaced by software you instruct. What that actually changes
        for a small business — and what it does not.
      </Lead>

      <p>
        For twenty years the shape of business software was fixed. You bought a tool, you learned its
        interface, and you adapted your process to fit what the vendor built. Every tool added another
        login, another place data lived, and another integration to maintain.
      </p>

      <p>
        Agents invert that. Instead of a person operating a tool, an agent operates the tools on your
        behalf, given an objective and access. The interesting part is not the chat window. It is that
        the unit you are buying shifts from <B>features</B> to <B>outcomes</B>.
      </p>

      <Takeaway>
        <p>
          Agents are not replacing your CRM or your accounting software. They are replacing the human
          labour of moving information between them, and the seats you were buying so that people
          could do that. Judge them on work completed, not on capability demos.
        </p>
      </Takeaway>

      <H2>What Is Actually Changing</H2>

      <H3>From seats to outcomes</H3>

      <p>
        Traditional SaaS charges per person who logs in. That pricing assumes humans do the work
        inside the tool. When an agent does the categorising, the follow-up and the data entry, the
        number of humans needing a seat falls — while the volume of work handled rises. Vendors have
        noticed, which is why usage-based and outcome-based pricing is spreading.
      </p>

      <H3>From integrations to instructions</H3>

      <p>
        The old way to connect two systems was to build a rule: when this happens, do that. It works
        until reality produces a case the rule did not anticipate, at which point it fails silently. An
        agent given the same job can handle the unanticipated case, ask when genuinely unsure, and
        explain what it did.
      </p>

      <H3>From dashboards to answers</H3>

      <p>
        Most dashboards are unread. The question was never what does the data look like — it was
        should I be worried, and about what. That is a question you can now ask directly of a system
        that has access to the underlying numbers.
      </p>

      <H2>Where Agents Genuinely Beat Software Today</H2>

      <Grid>
        <Card icon={<Bot size={28} />} title="Repetitive Judgement">
          Categorising enquiries, routing tickets, flagging which leads deserve a call. Tasks with a
          right answer that a rule cannot quite express.
        </Card>
        <Card icon={<Workflow size={28} />} title="Cross-Tool Errands">
          Taking an enquiry from a form, enriching it, writing it into the CRM, notifying the right
          person and drafting the reply — work that spans four tools and belongs to none.
        </Card>
        <Card icon={<Clock size={28} />} title="Out-of-Hours Coverage">
          Answering the fifteen questions that make up most pre-sales contact, at two in the morning,
          without a night shift.
        </Card>
        <Card icon={<FileText size={28} />} title="Drafting From Context">
          First-draft proposals, follow-ups and summaries built from what is already in your systems,
          for a human to approve.
        </Card>
      </Grid>

      <H2>Where They Do Not — Yet</H2>

      <p>
        It is worth being blunt, because the gap between demo and deployment is where most budgets
        disappear.
      </p>

      <ul className="list-disc pl-8 space-y-2 text-sm text-zinc-700">
        <li>
          <B>Anything irreversible without review.</B> Sending payment, deleting records, committing to
          contract terms. Keep a human approval step on actions you cannot undo.
        </li>
        <li>
          <B>Work that needs institutional memory you never wrote down.</B> An agent knows what it can
          read. The context living only in a founder's head is invisible to it.
        </li>
        <li>
          <B>Situations where being wrong is expensive.</B> Regulated advice, safety, anything where a
          confident wrong answer costs more than no answer.
        </li>
        <li>
          <B>Processes nobody has defined.</B> This is the big one. Automating an undefined process
          just produces inconsistency faster.
        </li>
      </ul>

      <H2>What This Means for Your Stack</H2>

      <p>
        The practical implication is not that you should cancel your subscriptions. It is that the
        criteria for buying software change. Two questions matter more than they used to.
      </p>

      <p>
        First, <B>does it have a decent API?</B> A tool an agent cannot reach is a tool that will
        become an island, and islands are where work goes to be re-typed by hand. Second,{' '}
        <B>how much of what you pay for is seats for people doing mechanical work?</B> That is the
        line item most likely to shrink.
      </p>

      <p>
        We keep a working view of which tools play well in this model in our{' '}
        <Internal to="/software-stack">software stack breakdown</Internal>.
      </p>

      <H2>How to Start Without Wasting Six Months</H2>

      <p>
        Pick one process that is repetitive, well understood, and low risk if it goes wrong. Write down
        how it currently works, including the exceptions. Deploy an agent against that one process with
        a human review step. Measure how many cases it handles without escalation.
      </p>

      <p>
        If it clears eighty percent unaided, expand its remit. If it does not, the usual cause is that
        the process was less defined than you thought — which is useful information regardless. That
        diagnostic loop is most of what{' '}
        <Internal to="/services/ai-consulting">our AI consulting</Internal> actually consists of.
      </p>

      <p>
        The businesses getting value from agents in 2026 are not the ones that bought the most
        impressive model. They are the ones that had written down how they work before they tried to
        automate it.
      </p>
    </Body>
  ),

  /* ================================================================ */
  'essential-tech-stack-automations': (
    <Body>
      <Lead>
        The automations worth building first, in the order that produces returns — and the ones that
        look impressive and quietly waste your time.
      </Lead>

      <p>
        Most small businesses do not have an automation problem. They have a sequencing problem. They
        build the clever automation that saves twenty minutes a month before the boring one that saves
        five hours a week, because the clever one is more fun to build.
      </p>

      <p>
        This is the order we deploy in, and the reasoning behind it. The rule throughout: automate the
        thing you do most often that requires no judgement, and do it before anything else.
      </p>

      <Takeaway>
        <p>
          Lead response first, because speed directly converts to revenue. Then invoicing and chasing,
          because it is money you have already earned. Then onboarding, because it is the process most
          likely to embarrass you. Reporting last, because it feels productive and rarely changes a
          decision.
        </p>
      </Takeaway>

      <H2>Tier 1: Lead Response</H2>

      <p>
        If you build one automation, build this one. An enquiry arrives, the sender gets a genuine
        acknowledgement within a minute, the record lands in your CRM with its source attached, and
        the right person gets a notification on their phone.
      </p>

      <p>
        The reason it is first is unglamorous: response time is the strongest single predictor of
        whether an enquiry becomes a customer. A reply within five minutes is a different business
        outcome from a reply the next morning, and the enquirer has usually contacted three of your
        competitors as well.
      </p>

      <H3>What good looks like</H3>

      <ul className="list-disc pl-8 space-y-2 text-sm text-zinc-700">
        <li>Acknowledgement that answers the obvious next question, not just confirms receipt.</li>
        <li>Source captured automatically — which page, which campaign, which referrer.</li>
        <li>Internal alert that includes enough context to reply without opening three tabs.</li>
        <li>A fallback if nobody responds within a set window.</li>
      </ul>

      <H2>Tier 2: Invoicing and Payment Chasing</H2>

      <p>
        This is money you have already earned sitting in someone else's account because a human forgot
        to send a polite reminder. Automating it has an immediate, measurable effect on cash flow, and
        it removes the awkwardness that causes founders to delay chasing in the first place.
      </p>

      <Grid>
        <Card icon={<CreditCard size={28} />} title="Invoice on Trigger">
          Invoice generated and sent when a deal moves to won or a milestone completes — not when
          somebody remembers on a Friday.
        </Card>
        <Card icon={<Clock size={28} />} title="Escalating Reminders">
          A gentle nudge before the due date, a firmer one after, and an internal flag before it
          becomes a conversation.
        </Card>
      </Grid>

      <H2>Tier 3: Client Onboarding</H2>

      <p>
        Onboarding is where a business either confirms the buying decision or creates the first doubt.
        It is also almost always the same sequence of steps, which makes it ideal to systematise.
      </p>

      <p>
        A good onboarding automation fires on the deal closing and handles the welcome message, the
        information request, the kickoff booking link, the document access and the internal task
        creation. The client experiences competence. You stop rebuilding the same checklist from
        memory. This is covered in more depth in our{' '}
        <Internal to="/services/operations-hr">operations and HR systems work</Internal>.
      </p>

      <H2>Tier 4: Internal Handoffs</H2>

      <p>
        Every point where work passes between two people is a place it can stall invisibly. Automating
        the handoff — the notification, the task, the status change — does not speed up the work, but
        it removes the dead time between pieces of work, which is usually the larger number.
      </p>

      <H2>Tier 5: Reporting</H2>

      <p>
        Deliberately last. Automated reporting feels like the most sophisticated thing on this list and
        changes the fewest decisions. Before building a dashboard, write down what you would do
        differently depending on what it says. If you cannot answer, you do not need the dashboard yet.
      </p>

      <H2>What Not to Automate</H2>

      <ul className="list-disc pl-8 space-y-2 text-sm text-zinc-700">
        <li>
          <B>Anything you do rarely.</B> The maintenance cost outlives the time saved.
        </li>
        <li>
          <B>Anything genuinely relationship-bearing.</B> Automated personal outreach reads as
          automated, and costs more trust than it saves time.
        </li>
        <li>
          <B>A process that is about to change.</B> Automating an unstable process means rebuilding it
          twice.
        </li>
        <li>
          <B>Something you have never done manually.</B> You will automate your assumptions rather than
          reality.
        </li>
      </ul>

      <H2>How to Judge Whether It Worked</H2>

      <p>
        Pick the measurement before you build. For lead response it is median time to first reply. For
        invoicing it is average days to payment. For onboarding it is days from signature to kickoff.
        If you cannot state the number you expect to move, you are building for the pleasure of
        building.
      </p>

      <p>
        Done in this order, the first three tiers typically account for the large majority of the hours
        recovered — and they are the least technically interesting ones on the list. That is not a
        coincidence. See{' '}
        <Internal to="/services/ai-automation">how we scope automation work</Internal> if you want the
        sequence applied to your own setup.
      </p>
    </Body>
  ),

  /* ================================================================ */
  'setup-uk-limited-company': (
    <Body>
      <Lead>
        Companies House, corporation tax, banking and the operational setup nobody tells you about —
        the complete founder guide to a UK limited company.
      </Lead>

      <p>
        Incorporating a UK limited company is genuinely easy. It is same-day, it costs less than a
        weekly shop, and the government website walks you through it. What is not easy is everything in
        the fortnight afterwards, which is where founders lose weeks and where almost no guide goes.
      </p>

      <p>
        This covers both: the filing itself, and the operational setup that turns a company number into
        a business that can take money and serve a client.
      </p>

      <Takeaway>
        <p>
          Incorporation takes a day. Getting to trading takes two to three weeks, and the bottleneck is
          almost always bank and payment verification. Start those the hour your company number lands,
          and keep your name identical across every system.
        </p>
      </Takeaway>

      <H2>Before You File: Five Decisions</H2>

      <H3>1. The name</H3>
      <p>
        Check it is available at Companies House, then check the trademark register, then check the
        domain and the social handles. Plenty of founders incorporate a name they cannot use
        commercially. Certain words are restricted and need permission — anything implying a
        connection to government, or regulated terms like bank or institute.
      </p>

      <H3>2. Registered office address</H3>
      <p>
        This is public. Using your home address means your home address is searchable forever, which is
        why registered office services exist and cost very little. Note that since the Economic Crime
        and Corporate Transparency Act reforms, you need an appropriate address that can receive
        deliveries — a PO box alone will not do.
      </p>

      <H3>3. Directors and people with significant control</H3>
      <p>
        At least one director who is a real person over sixteen. Anyone holding more than a quarter of
        shares or voting rights must be recorded as a person with significant control. Get this right
        at filing; correcting it later is a separate process.
      </p>

      <H3>4. Share structure</H3>
      <p>
        For a single founder, one hundred ordinary shares of one pound is a sensible default that
        leaves room to bring someone in without restructuring. If you already know a co-founder is
        coming, agree the split and a vesting arrangement before you file, not after.
      </p>

      <H3>5. SIC code</H3>
      <p>
        Your business activity classification. Choose the closest match; it is not binding on what you
        can do, but banks look at it when assessing your application, and an odd one invites questions.
      </p>

      <H2>Filing</H2>

      <p>
        Done directly through Companies House it is the cheapest route and usually approved within
        twenty-four hours. Formation agents charge more and bundle things you may not need. Either way
        you receive a company number and a certificate of incorporation, which is the document
        everything else asks for.
      </p>

      <H2>The First Week After: What Actually Blocks You</H2>

      <p>
        This is the part that determines whether you are trading in two weeks or six.
      </p>

      <Grid>
        <Card icon={<Building2 size={28} />} title="Business Bank Account">
          Apply the day your number arrives. Digital banks are typically days; high street banks can be
          weeks. Have your certificate, ID, proof of address and a clear description of your trading
          activity ready.
        </Card>
        <Card icon={<CreditCard size={28} />} title="Payment Processing">
          Verification checks your details against Companies House. Start early — this is the step that
          most often delays a launch.
        </Card>
        <Card icon={<ShieldCheck size={28} />} title="Corporation Tax Registration">
          Register within three months of starting to trade. Your accounting reference date is set
          automatically at incorporation; you can change it, but decide deliberately.
        </Card>
        <Card icon={<Mail size={28} />} title="Domain and Business Email">
          Email on your own domain, plus the DNS records that stop it landing in spam. Skipping the
          latter is extremely common and quietly costs you replies.
        </Card>
      </Grid>

      <H3>The detail that costs people weeks</H3>
      <p>
        Your company name at Companies House, on your bank account, and on your website must match
        exactly. Trading as a shortened version while your bank holds the full legal name is the single
        most common cause of stalled payment verification we see.
      </p>

      <H2>Ongoing Obligations</H2>

      <ul className="list-disc pl-8 space-y-2 text-sm text-zinc-700">
        <li>
          <B>Confirmation statement</B> — annually, confirming your details are current. Cheap, quick,
          and penalised if missed.
        </li>
        <li>
          <B>Annual accounts</B> — filed with Companies House, in a reduced form for small companies.
        </li>
        <li>
          <B>Corporation tax return</B> — filed with HMRC, with tax due before the return deadline,
          which catches people out.
        </li>
        <li>
          <B>VAT</B> — registration becomes compulsory above the threshold, and is sometimes worth doing
          voluntarily below it if your clients are VAT registered.
        </li>
        <li>
          <B>PAYE</B> — needed as soon as you pay yourself or anyone else a salary.
        </li>
      </ul>

      <p className="text-sm text-zinc-600 border border-zinc-200 bg-zinc-50 p-5">
        This is general information about process, not legal, tax or accounting advice. Thresholds and
        rules change. Confirm current requirements with Companies House and HMRC, and speak to an
        accountant about your own circumstances before making decisions.
      </p>

      <H2>Getting to Trading, Not Just Registered</H2>

      <p>
        A company number is not a business. What makes it one is the surrounding infrastructure — the
        account that takes payment, the site that explains what you do, the system that captures an
        enquiry and the process that turns it into an invoice.
      </p>

      <p>
        That is precisely the gap Calpir exists to close, and what our{' '}
        <Internal to="/packages">launch packages</Internal> cover. If you would rather do it yourself,
        the sequence is laid out in our{' '}
        <Internal to="/blog/what-to-start-with-launch-guide">first thirty days guide</Internal>.
      </p>
    </Body>
  ),

  /* ================================================================ */
  'setup-us-llc-foreign-founder': (
    <Body>
      <Lead>
        Forming a US LLC from outside the United States: what the process really involves, what
        actually blocks non-resident founders, and when it is the wrong idea.
      </Lead>

      <p>
        A US LLC is attractive to founders outside the States for concrete reasons — access to US
        banking, invoicing in dollars, payment processors that American customers trust, and a legal
        form that US clients recognise on a contract.
      </p>

      <p>
        It is also routinely oversold. Forming the entity is the easy part; banking and compliance are
        where non-resident founders get stuck. Here is the honest version.
      </p>

      <Takeaway>
        <p>
          Formation takes days and is straightforward. Banking is the real hurdle without a US
          presence. Filing obligations exist even with no US income and no profit, and the penalties for
          missing them are severe. Form one because a specific business reason demands it, not because
          it sounds sophisticated.
        </p>
      </Takeaway>

      <H2>Choosing a State</H2>

      <p>
        If you have no physical US presence, you are choosing on cost and administration rather than
        anything meaningful.
      </p>

      <ul className="list-disc pl-8 space-y-2 text-sm text-zinc-700">
        <li>
          <B>Wyoming.</B> Popular with non-residents. Low formation and annual costs, light reporting,
          strong privacy. The usual default when nothing else forces the decision.
        </li>
        <li>
          <B>Delaware.</B> The name investors recognise, with well-developed corporate law. Higher
          ongoing cost through franchise tax. Worth it if you expect US venture funding; otherwise you
          are paying for prestige.
        </li>
        <li>
          <B>The state you actually operate in.</B> If you have staff, an office or genuine physical
          presence somewhere, register there. Forming in Wyoming while operating in California means
          registering in California anyway, as a foreign entity, and paying twice.
        </li>
      </ul>

      <H2>The Formation Sequence</H2>

      <p>
        Each step depends on the one before, and the waits are front-loaded at the end.
      </p>

      <Table
        head={['Step', 'What it is', 'Typical wait']}
        rows={[
          ['Registered agent', 'A required in-state address to receive legal notices', 'Same day'],
          ['Articles of organisation', 'The formation filing with the state', '1 to 5 days'],
          ['Operating agreement', 'Internal ownership and governance document', 'Same day'],
          ['EIN', 'Federal tax ID, needed for banking and payments', 'Days to weeks without an SSN'],
          ['Bank account', 'The genuine bottleneck for non-residents', 'Days to months'],
        ]}
      />

      <H3>The EIN without a social security number</H3>
      <p>
        With an SSN or ITIN this is instant online. Without one, you cannot use the online application
        and must file by fax or post, which takes materially longer. Budget for this rather than
        discovering it the week you planned to launch.
      </p>

      <H2>Banking: The Real Obstacle</H2>

      <p>
        This is where most non-resident founders stall. Traditional US banks generally expect a
        physical visit and a US address. The realistic routes are fintech providers that explicitly
        serve international founders, or opening in person on a trip — and requirements shift, so check
        current policy rather than trusting a blog post, including this one.
      </p>

      <p>
        A payment processor is not a bank account. Being able to accept a card is not the same as being
        able to hold and move funds, and conflating the two produces an unpleasant surprise at the
        first payout.
      </p>

      <H2>Compliance You Cannot Skip</H2>

      <p>
        This is the section that costs people real money, because the obligations exist regardless of
        whether the company earned anything.
      </p>

      <ul className="list-disc pl-8 space-y-2 text-sm text-zinc-700">
        <li>
          <B>Annual state filing.</B> A report and fee to keep the entity in good standing. Miss it and
          the company is dissolved administratively.
        </li>
        <li>
          <B>Federal filings.</B> A foreign-owned single-member LLC has federal reporting obligations
          even with zero income, and the penalties for non-filing are large. Do not assume no revenue
          means nothing to file.
        </li>
        <li>
          <B>Beneficial ownership reporting.</B> Rules in this area have changed repeatedly. Verify
          what currently applies to your structure.
        </li>
        <li>
          <B>Your home country.</B> Owning a foreign entity usually creates obligations where you
          actually live. This is the part most guides ignore entirely.
        </li>
      </ul>

      <p className="text-sm text-zinc-600 border border-zinc-200 bg-zinc-50 p-5">
        This is general process information, not legal or tax advice. Cross-border structures have real
        consequences and the rules change frequently. Speak to a qualified US tax professional and an
        adviser in your country of residence before forming an entity.
      </p>

      <H2>When a US LLC Is the Wrong Answer</H2>

      <p>
        If your customers are all in Europe, if you have no US banking need, and if nobody is asking you
        for a US entity, you are buying compliance obligations for a benefit you will not use. A{' '}
        <Internal to="/blog/setup-uk-limited-company">UK limited company</Internal> is cheaper, simpler
        and faster to bank.
      </p>

      <p>
        Form the US entity when a specific commercial reason demands it — a customer who requires it, a
        payments requirement, or funding you are actually raising. Not because it appeared in a thread
        about tax.
      </p>
    </Body>
  ),

  /* ================================================================ */
  'deploy-ai-agents-support': (
    <Body>
      <Lead>
        How to put an AI agent in front of customer support and sales without producing the kind of bot
        everyone has learned to hate.
      </Lead>

      <p>
        Deploying an agent is easy. Deploying one that customers do not immediately try to escape is a
        different exercise, and the difference is almost entirely in the preparation rather than the
        model.
      </p>

      <p>
        This is the process we follow, in order, along with the decisions that determine whether the
        result helps or quietly costs you enquiries.
      </p>

      <Takeaway>
        <p>
          Start with your real enquiry log, not your imagination. Give the agent one narrow job. Make
          the escape hatch to a human obvious and instant. Measure containment and satisfaction
          together, because containment alone rewards a bot that traps people.
        </p>
      </Takeaway>

      <H2>Step 1: Read Your Last Two Hundred Enquiries</H2>

      <p>
        Before touching any tooling, go through your last few months of enquiries and sort them. Almost
        every business finds the same shape: a small number of question types account for the large
        majority of volume, and they are duller than expected. Pricing. Availability. Do you work with
        my kind of business. How does it work. How long does it take.
      </p>

      <p>
        That list is your scope. It is also the honest answer to whether you need an agent at all — if
        eighty percent of your enquiries are five questions, publishing better answers on your site
        might solve more of the problem than any deployment.
      </p>

      <H2>Step 2: Write the Answers Down First</H2>

      <p>
        An agent can only be as good as what it can read. The work is assembling a source of truth:
        actual pricing or pricing logic, what you do and explicitly do not do, timelines, the process
        step by step, and the objections you get with your real responses.
      </p>

      <p>
        This is unglamorous and it is where the value is. Teams that skip it get an agent that
        improvises, and an improvising agent quoting a price is a genuine commercial risk.
      </p>

      <H2>Step 3: Define the Boundary</H2>

      <p>
        Decide explicitly what the agent must never do. Typical boundaries: never quote a custom price,
        never commit to a delivery date, never give regulated advice, never claim a capability that is
        not on the list. Then decide what happens at the boundary — the handoff.
      </p>

      <Grid>
        <Card icon={<Bot size={28} />} title="In Scope">
          Answering known questions, qualifying, booking meetings, capturing details, pointing to the
          right page.
        </Card>
        <Card icon={<Users size={28} />} title="Escalate Immediately">
          Anything about a live complaint, a custom quote, a contract term, or a visibly frustrated
          customer.
        </Card>
      </Grid>

      <H2>Step 4: Design the Escape Hatch</H2>

      <p>
        The single biggest driver of whether people tolerate an agent is how quickly they can stop
        talking to it. Make the route to a human visible from the first message, not buried after three
        failed attempts. Counter-intuitively, an obvious escape hatch reduces how often people use it,
        because the frustration that drives the demand never builds.
      </p>

      <p>
        When escalation happens, pass the full conversation across. Making a customer repeat themselves
        to a human undoes any goodwill the automation earned.
      </p>

      <H2>Step 5: Connect It to Your Systems</H2>

      <p>
        An agent that answers questions but leaves no trace is a missed opportunity. Every conversation
        should create or update a CRM record, capture the source, and log which questions were asked.
        That last one is quietly the most valuable output — it is a continuous, unfiltered record of
        what your market does not understand about your offer.
      </p>

      <H2>Step 6: Measure the Right Things</H2>

      <Table
        head={['Metric', 'What it tells you', 'Watch out for']}
        rows={[
          ['Containment rate', 'Share resolved without a human', 'High rate with low satisfaction means people gave up'],
          ['Escalation quality', 'Whether handoffs arrive with context', 'Customers repeating themselves'],
          ['Response satisfaction', 'Whether answers actually helped', 'Ask, do not assume'],
          ['Enquiry-to-booking rate', 'Commercial effect', 'Compare against your pre-agent baseline'],
        ]}
      />

      <p>
        Containment on its own is a dangerous metric. An agent that nobody can escape has excellent
        containment and is losing you customers. Always read it next to satisfaction.
      </p>

      <H2>Step 7: Review Weekly, Then Monthly</H2>

      <p>
        For the first month, read the transcripts. Not a summary — the actual conversations. You will
        find questions you did not anticipate, answers that are technically correct and unhelpful, and
        at least one place where the agent was confidently wrong. Fix the source material rather than
        patching the prompt.
      </p>

      <p>
        After that, monthly is enough, focused on new question types and anything that escalated.
      </p>

      <H2>A Realistic Expectation</H2>

      <p>
        A well-scoped support agent handles most routine pre-sales contact, responds instantly at any
        hour, and gives you a running list of what confuses your buyers. It does not replace your sales
        conversation, and it should not try.
      </p>

      <p>
        If you want this scoped against your own enquiry history rather than a generic template, that is
        what <Internal to="/services/ai-agents">our AI agent work</Internal> covers, and the{' '}
        <Internal to="/assessment">free assessment</Internal> is a reasonable place to start.
      </p>
    </Body>
  ),
};

export default articlesContent;

