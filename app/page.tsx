import Link from "next/link";

type Metric = {
  label: string;
  value: string;
  context: string;
};

type Service = {
  title: string;
  description: string;
  outcomes: string[];
};

type CaseStudy = {
  client: string;
  industry: string;
  headline: string;
  impact: Metric[];
  summary: string;
};

type Package = {
  name: string;
  price: string;
  idealFor: string;
  inclusions: string[];
  highlight: string;
};

type FAQ = {
  question: string;
  answer: string;
};

const growthMetrics: Metric[] = [
  { label: "Average ROAS", value: "4.8x", context: "Meta + Google Ads blended" },
  { label: "Lead Quality Lift", value: "+62%", context: "SQL-to-opportunity ratios" },
  { label: "Revenue Generated", value: "$12.4M", context: "Tracked over 18 months" }
];

const services: Service[] = [
  {
    title: "Paid Media Command Center",
    description:
      "Full-funnel Meta Ads and Google Ads management with relentless testing, live dashboards, and revenue-focused optimization loops.",
    outcomes: ["Audience architectures that convert", "Creative playbooks tailored to intent", "Automations that scale profitably"]
  },
  {
    title: "Search Momentum SEO",
    description:
      "Technical SEO, entity-driven content, and local optimization engineered to make your brand the default choice when intent sparks.",
    outcomes: ["Schema-rich content strategy", "Conversion-optimized pillar pages", "Authority amplification playbook"]
  },
  {
    title: "Lifecycle & CRM Automation",
    description:
      "Lead nurture sequences, retention flows, and CRM hygiene that convert first-touch interest into closed revenue.",
    outcomes: ["Lifecycle maps by buying stage", "Predictive scoring & routing", "Revenue attribution clarity"]
  },
  {
    title: "Revenue Intelligence Ops",
    description:
      "Marketing analytics pipelines, live dashboards, and attribution modeling so every dollar tracks to measurable growth.",
    outcomes: ["Executive ROI command dashboards", "First-party data enrichment", "Forecasting & scenario planning"]
  }
];

const caseStudies: CaseStudy[] = [
  {
    client: "RevLift SaaS",
    industry: "B2B SaaS",
    headline: "Scaled SQL pipeline while cutting CAC by 37%",
    impact: [
      { label: "Qualified Demos", value: "+118%", context: "QoQ growth in SQLs" },
      { label: "Cost Per SQL", value: "-37%", context: "Efficiency vs. previous agency" },
      { label: "ARR Influenced", value: "$3.1M", context: "Attributed ARR in 9 months" }
    ],
    summary:
      "Deployed account-based paid media, rebuilt the landing conversion stack, and installed revenue dashboards wired into HubSpot. Leadership gained weekly ROI visibility."
  },
  {
    client: "Nexa Clinics",
    industry: "Multi-location Healthcare",
    headline: "Doubled bookings with local-first SEO + Meta Ads",
    impact: [
      { label: "Appointment Volume", value: "2.1x", context: "YoY growth across 8 clinics" },
      { label: "Lead-to-Patient", value: "+46%", context: "Conversion rate uplift" },
      { label: "Cost per Booking", value: "-32%", context: "Reduced paid media spend waste" }
    ],
    summary:
      "Local intent SEO pillars, AI-enhanced retargeting creatives, and reputation management automation increased trust and conversions in under 120 days."
  },
  {
    client: "Forge eCommerce",
    industry: "D2C Retail",
    headline: "Unlocked 5.6x blended ROAS with creative sprints",
    impact: [
      { label: "Revenue", value: "+214%", context: "Incremental revenue vs. baseline" },
      { label: "Repeat Purchase Rate", value: "+33%", context: "Lifecycle automation lift" },
      { label: "New Customer AOV", value: "+18%", context: "Conversion optimization impact" }
    ],
    summary:
      "Structured creative testing across Meta, harmonized offers with email/SMS flows, and layered first-party data audiences for durable scaling."
  }
];

const packages: Package[] = [
  {
    name: "LaunchPad Growth",
    price: "$4,500/mo",
    idealFor: "VC-backed start-ups and marketing teams launching acquisition.",
    inclusions: [
      "One paid media channel + landing optimization",
      "Weekly performance standups + live dashboard",
      "Analytics & conversion tracking rebuild",
      "Growth sprint roadmap every 30 days"
    ],
    highlight: "Perfect for companies searching for first-scale traction within 90 days."
  },
  {
    name: "Momentum Retainer",
    price: "$6,800/mo",
    idealFor: "Scale-ups juggling multi-channel demand generation.",
    inclusions: [
      "Meta & Google Ads, SEO, CRO collaboration",
      "Revenue attribution modeling + cohort analysis",
      "Creative production system (UGC + motion edits)",
      "Lifecycle automation + CRM enrichment"
    ],
    highlight: "Our most popular tier for teams needing a fully integrated growth engine."
  },
  {
    name: "CRO & Intelligence Lab",
    price: "Custom",
    idealFor: "Enterprise orgs requiring deep analytics and experimentation.",
    inclusions: [
      "Experiment design studio with CRO backlog",
      "BI pipelines into Snowflake/Looker",
      "Media mix modeling & forecasting",
      "Embedded senior strategist + analyst pod"
    ],
    highlight: "A tailored growth war room designed around aggressive revenue targets."
  }
];

const faqs: FAQ[] = [
  {
    question: "What will the first 30 days look like?",
    answer:
      "We audit funnel fundamentals, rebuild analytics, and launch quick-win campaigns in parallel. By day 30 we deliver a prioritized 90-day growth roadmap with agreed KPIs."
  },
  {
    question: "How do you report on ROI?",
    answer:
      "Dashboards roll up channel spend, pipeline contribution, and closed revenue. We track incremental lift, cohort retention, and SQL quality so every recommendation ladders to profit."
  },
  {
    question: "Can you work with our internal team?",
    answer:
      "Yes. We plug into your Slack, project management, and CRM. We define clear swim lanes with marketing, sales, and revenue ops to move fast without stepping on toes."
  },
  {
    question: "Do you guarantee performance?",
    answer:
      "We operate on leading indicators proven to drive lagging ROI. While no ethical marketer guarantees revenue, we cap active partner slots to maintain aggressive focus and accountability."
  }
];

const techStack = [
  "Meta Ads Manager",
  "Google Ads",
  "GA4 & Server-Side Tagging",
  "HubSpot",
  "Salesforce",
  "Klaviyo",
  "Triple Whale",
  "Looker Studio",
  "Segment",
  "Shopify",
  "Webflow",
  "Airtable"
];

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Proof />
      <Services />
      <Framework />
      <CaseStudies />
      <GrowthPackages />
      <Process />
      <Stack />
      <Testimonials />
      <FAQs />
      <CTA />
      <Footer />
    </main>
  );
}

function Hero() {
  return (
    <section style={{ paddingTop: "120px", paddingBottom: "72px" }}>
      <div className="container hero">
        <div className="hero__content">
          <span className="tagline">Agentic Growth Lab</span>
          <h1>
            Performance marketing that moves the only metric that matters: profitable revenue.
          </h1>
          <p>
            We plan, launch, and scale Meta Ads, Google Ads, SEO, and lifecycle programs built to
            win high-intent demand and convert it into repeatable revenue. Every decision ladders to
            ROI.
          </p>
          <div className="hero__actions">
            <Link className="button button--primary" href="https://cal.com/agentic-growth/30">
              Book a Growth Consultation
            </Link>
            <Link className="button button--ghost" href="#case-studies">
              View Client Wins
            </Link>
          </div>
        </div>
        <div className="hero__metrics">
          {growthMetrics.map((metric) => (
            <div key={metric.label} className="metric-card">
              <strong>{metric.value}</strong>
              <span>{metric.label}</span>
              <p>{metric.context}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Proof() {
  return (
    <section>
      <div className="container proof">
        <div className="proof__statement">
          <h2>We turn acquisition channels into accountable profit centers.</h2>
          <p>
            Every engagement begins with a Growth Intelligence audit that surfaces wasted spend,
            stalled conversions, and overlooked demand pockets. Then we deploy battle-tested
            playbooks to unlock scale without sacrificing efficiency.
          </p>
        </div>
        <div className="proof__grid">
          <article>
            <h3>01. Funnel Diagnostics</h3>
            <p>
              Identify leaks across ad funnels, journeys, and handoffs. Fix the revenue plumbing
              before scaling spend.
            </p>
          </article>
          <article>
            <h3>02. Accelerated Testing</h3>
            <p>
              Launch creative, offer, and audience sprints every 14 days. Double down on winning
              combinations, kill the rest.
            </p>
          </article>
          <article>
            <h3>03. Integrated Reporting</h3>
            <p>
              Live dashboards feed executive-level scorecards so marketing, sales, and finance rally
              around the same KPIs.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="section--tint">
      <div className="container">
        <header className="section-header">
          <span className="eyebrow">Services</span>
          <h2>Full-stack digital marketing built to compound ROI.</h2>
          <p>
            Our team acts as your plug-in growth unit across paid media, SEO, lifecycle, and revenue
            analytics, ensuring strategy and execution move in lockstep.
          </p>
        </header>
        <div className="cards-grid">
          {services.map((service) => (
            <article key={service.title} className="card">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <ul>
                {service.outcomes.map((outcome) => (
                  <li key={outcome}>{outcome}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Framework() {
  return (
    <section>
      <div className="container framework">
        <header className="section-header">
          <span className="eyebrow">Growth Operating System</span>
          <h2>Our 4D framework converts insight into predictable revenue lift.</h2>
        </header>
        <div className="framework__grid">
          <article>
            <h3>Discover</h3>
            <p>
              Deep-dive market, competitor, and channel analysis. We benchmark existing performance,
              surface quick wins, and map opportunity gaps.
            </p>
          </article>
          <article>
            <h3>Design</h3>
            <p>
              Architect media mixes, funnel journeys, and test roadmaps. We define success metrics,
              assign owners, and secure stakeholder alignment fast.
            </p>
          </article>
          <article>
            <h3>Deploy</h3>
            <p>
              Launch paid campaigns, SEO plays, and lifecycle flows using agile sprints. We automate
              QA for tracking, messaging, and offer integrity.
            </p>
          </article>
          <article>
            <h3>Double Down</h3>
            <p>
              Analyze attribution, cohort retention, and profitability. We reinvest in proven
              winners, scale spend confidently, and cut any channel drag.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}

function CaseStudies() {
  return (
    <section id="case-studies" className="section--tint">
      <div className="container">
        <header className="section-header">
          <span className="eyebrow">Case Studies</span>
          <h2>Proof that every dollar is accountable.</h2>
        </header>
        <div className="case-grid">
          {caseStudies.map((study) => (
            <article key={study.client} className="case-card">
              <div className="case-card__header">
                <span>{study.industry}</span>
                <h3>{study.client}</h3>
              </div>
              <p className="case-card__headline">{study.headline}</p>
              <div className="case-card__metrics">
                {study.impact.map((metric) => (
                  <div key={metric.label}>
                    <strong>{metric.value}</strong>
                    <span>{metric.label}</span>
                    <p>{metric.context}</p>
                  </div>
                ))}
              </div>
              <p>{study.summary}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function GrowthPackages() {
  return (
    <section>
      <div className="container">
        <header className="section-header">
          <span className="eyebrow">Engagement Models</span>
          <h2>Flexible retainers designed for accountable growth.</h2>
        </header>
        <div className="cards-grid">
          {packages.map((pkg) => (
            <article key={pkg.name} className="card card--pricing">
              <div className="card__badge">{pkg.price}</div>
              <h3>{pkg.name}</h3>
              <p>{pkg.idealFor}</p>
              <ul>
                {pkg.inclusions.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p className="card__highlight">{pkg.highlight}</p>
              <Link className="button button--primary button--full" href="https://cal.com/agentic-growth/30">
                Schedule Discovery Call
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Process() {
  const steps = [
    {
      title: "Week 0 - 1: Intelligence Sprint",
      detail:
        "Audit tracking, funnels, messaging, and paid accounts. Align on KPIs, ICPs, and growth opportunities."
    },
    {
      title: "Week 2 - 4: Quick-Win Launch",
      detail:
        "Roll out high-impact campaign fixes, landing page optimizations, and lifecycle flows. Establish daily performance loops."
    },
    {
      title: "Month 2: Scale & Systemize",
      detail:
        "Expand channel coverage, implement creative testing cadences, and automate reporting to stakeholders."
    },
    {
      title: "Month 3+: Compounding Growth",
      detail:
        "Run experimentation roadmap, forecast spend vs. revenue scenarios, and double down on channels with durable ROI."
    }
  ];

  return (
    <section className="section--dark">
      <div className="container">
        <header className="section-header section-header--center">
          <span className="eyebrow">Engagement Flow</span>
          <h2>What partnering with Agentic Growth Lab feels like.</h2>
        </header>
        <div className="timeline">
          {steps.map((step, index) => (
            <div key={step.title} className="timeline__step">
              <div className="timeline__number">0{index + 1}</div>
              <div className="timeline__body">
                <h3>{step.title}</h3>
                <p>{step.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Stack() {
  return (
    <section>
      <div className="container stack">
        <header className="section-header section-header--center">
          <span className="eyebrow">Preferred Stack</span>
          <h2>Tools we operate daily to drive clarity and ROI.</h2>
        </header>
        <div className="stack__grid">
          {techStack.map((tool) => (
            <span key={tool}>{tool}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const quotes = [
    {
      quote:
        "Agentic rewired our paid media and lifecycle programs in six weeks. Pipeline visibility went from guesswork to precise forecasting.",
      name: "Avery Chen",
      title: "VP Growth, RevLift SaaS"
    },
    {
      quote:
        "Creative testing rigor plus their analytics dashboards helped us scale spend while improving CAC. We see the exact levers driving ROI.",
      name: "Jordan Alvarez",
      title: "CMO, Forge eCommerce"
    },
    {
      quote:
        "They operate like an in-house growth team. Stakeholders trust the numbers, and leadership finally has the insights to plan revenue accurately.",
      name: "Simone Miller",
      title: "Director of Marketing, Nexa Clinics"
    }
  ];

  return (
    <section className="section--tint">
      <div className="container testimonials">
        <header className="section-header">
          <span className="eyebrow">Testimonials</span>
          <h2>Trusted by marketing and revenue leaders.</h2>
        </header>
        <div className="cards-grid">
          {quotes.map((item) => (
            <article key={item.name} className="card card--quote">
              <p>“{item.quote}”</p>
              <div>
                <strong>{item.name}</strong>
                <span>{item.title}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQs() {
  return (
    <section>
      <div className="container">
        <header className="section-header">
          <span className="eyebrow">FAQs</span>
          <h2>Ask the hard questions. We have pragmatic answers.</h2>
        </header>
        <div className="faq">
          {faqs.map((faq) => (
            <details key={faq.question}>
              <summary>{faq.question}</summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="section--dark">
      <div className="container cta">
        <div>
          <h2>Ready to command your growth story?</h2>
          <p>
            Share your current targets and constraints. We’ll come prepared with ideas, data, and a
            clear plan to win profitable demand in the next 90 days.
          </p>
        </div>
        <form className="cta__form" action="https://cal.com/agentic-growth/30" method="get">
          <label htmlFor="industry">Industry focus</label>
          <input id="industry" name="industry" placeholder="e.g. B2B SaaS, eCommerce, Healthcare" />
          <label htmlFor="target">Next growth target</label>
          <input id="target" name="target" placeholder="e.g. 5x ROAS, +200 SQLs, $500k MRR" />
          <button type="submit" className="button button--primary button--full">
            Lock in strategy session
          </button>
        </form>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer>
      <div className="container footer">
        <div>
          <strong>Agentic Growth Lab</strong>
          <p>On-demand digital marketing operators focused on ROI, not vanity metrics.</p>
        </div>
        <div className="footer__links">
          <Link href="#services">Services</Link>
          <Link href="#case-studies">Case Studies</Link>
          <Link href="mailto:hello@agenticgrowthlab.com">hello@agenticgrowthlab.com</Link>
          <Link href="https://cal.com/agentic-growth/30">Book a call</Link>
        </div>
        <span className="footer__legal">© {new Date().getFullYear()} Agentic Growth Lab. All rights reserved.</span>
      </div>
    </footer>
  );
}
