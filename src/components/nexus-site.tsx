import { useEffect, useState } from 'react';
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Check,
  Menu,
  X,
} from 'lucide-react';
import { Button } from './ui/button';

const navigation = [
  { id: 'overview', label: 'Overview' },
  { id: 'method', label: 'Method' },
  { id: 'systems', label: 'Systems' },
  { id: 'proof', label: 'Proof' },
];

function SectionLabel({
  index,
  children,
}: {
  index: string;
  children: React.ReactNode;
}) {
  return (
    <div className="section-label">
      <span className="section-label-index">{index}</span>
      <span>{children}</span>
    </div>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  const path = window.location.pathname;
  const navigation = [
    { href: './', label: 'Home' },
    { href: 'method', label: 'Method' },
    { href: 'systems', label: 'Systems' },
    { href: 'work', label: 'Work' },
    { href: 'proof', label: 'Proof' },
  ];
  return (
    <>
      <div className="scroll-progress" aria-hidden="true" />
      <header className="site-header">
        <a className="wordmark" href="./" aria-label="NEXUS, home">
          <span className="wordmark-symbol">N<span className="wordmark-slash">/</span></span>
          <span>NEXUS<span className="wordmark-period">.</span></span>
        </a>
        <span className="header-descriptor">VERIFIABLE<br />INTERFACE SYSTEMS</span>
        <nav className={open ? 'site-nav site-nav-open' : 'site-nav'} aria-label="Main navigation">
          {navigation.map((item,i)=><a key={item.href} href={item.href} aria-current={(path==='/'&&i===0)||path===('/'+item.href)?'page':undefined} onClick={()=>setOpen(false)}>{item.label}<span className="nav-index">0{i+1}</span></a>)}
        </nav>
        <Button asChild variant="header" size="sm" className="header-contact">
          <a href="contact">Start a conversation <ArrowUpRight aria-hidden="true" /></a>
        </Button>
        <Button className="menu-toggle" variant="icon" size="icon" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} onClick={()=>setOpen(!open)}>{open ? <X /> : <Menu />}</Button>
      </header>
    </>
  );
}

export function Hero() {
  return (
    <section
      className="hero section-shell"
      id="overview"
      aria-labelledby="hero-title"
    >
      <div className="hero-meta">
        <span className="eyebrow">
          <span className="eyebrow-line" /> AN INDEPENDENT SYSTEMS STUDIO
        </span>
        <span className="hero-coordinate">N—001 / INTERFACE AS EVIDENCE</span>
      </div>
      <div className="hero-grid">
        <div className="hero-heading">
          <h1 id="hero-title">
            Systems that
            <br />
            <span>
              prove themselves<span className="copper-dot">.</span>
            </span>
          </h1>
          <div className="hero-bottom-note">
            <span className="crosshair" aria-hidden="true">
              +
            </span>
            <span>
              Design is a hypothesis.
              <br />
              The system is the proof.
            </span>
          </div>
        </div>
        <div className="hero-aside">
          <span className="hero-aside-rule" />
          <p>
            Premium interfaces engineered as measurable systems — from first
            visual direction to production evidence.
          </p>
          <div className="hero-actions">
            <Button asChild variant="nexus" size="nexus">
              <a href="systems">
                Explore the system <ArrowUpRight aria-hidden="true" />
              </a>
            </Button>
            <Button asChild variant="nexusOutline" size="nexus">
              <a href="method">
                Read the method <ArrowRight aria-hidden="true" />
              </a>
            </Button>
          </div>
        </div>
      </div>
      <div className="hero-footer">
        <span>SCROLL TO EXAMINE THE SYSTEM</span>
        <ArrowDownRight aria-hidden="true" />
        <span>DESIGNED TO BE INSPECTED, NOT JUST SEEN.</span>
      </div>
    </section>
  );
}

export function InstrumentPanel() {
  return (
    <div
      className="instrument section-shell reveal"
      aria-label="Interface verification instrument"
    >
      <div className="instrument-top">
        <div className="instrument-title">
          <span className="status-pulse" /> <span>INSTRUMENT / 01</span>
          <span className="instrument-title-light">LIVE SYSTEM MODEL</span>
        </div>
        <div className="instrument-serial">
          NXS—VIS / REV. 01 <span>↗</span>
        </div>
      </div>
      <div className="instrument-body">
        <div className="instrument-map">
          <div className="map-heading">
            <span>01 / TRANSLATION</span>
            <span>INPUT → OUTPUT</span>
          </div>
          <div
            className="diagram"
            aria-label="Intent becomes design and run becomes proof"
          >
            <svg
              className="diagram-lines"
              viewBox="0 0 600 245"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <path
                className="diagram-line"
                d="M110 62 H253 Q280 62 280 88 V157 Q280 183 307 183 H485"
              />
              <path
                className="diagram-line-secondary"
                d="M110 183 H217 Q240 183 240 158 V87 Q240 62 267 62 H485"
              />
              <path
                className="diagram-trace"
                d="M110 62 H253 Q280 62 280 88 V157 Q280 183 307 183 H485"
              />
            </svg>
            <div className="diagram-node diagram-node-a">
              <span className="node-index">01 / INPUT</span>
              <strong>INTENT</strong>
              <span className="node-sub">What must be true</span>
            </div>
            <div className="diagram-node diagram-node-b">
              <span className="node-index">02 / FORM</span>
              <strong>DESIGN</strong>
              <span className="node-sub">What takes shape</span>
            </div>
            <div className="diagram-node diagram-node-c">
              <span className="node-index">03 / EXECUTION</span>
              <strong>RUN</strong>
              <span className="node-sub">What actually happens</span>
            </div>
            <div className="diagram-node diagram-node-d">
              <span className="node-index">04 / EVIDENCE</span>
              <strong>PROOF</strong>
              <span className="node-sub">What can be verified</span>
            </div>
            <span className="diagram-center">≠</span>
          </div>
          <div className="map-footer">
            <span>THE LOOP CLOSES WHEN AN OUTCOME CAN BE VERIFIED.</span>
            <span>↳ CONTINUOUSLY</span>
          </div>
        </div>
        <div className="instrument-log">
          <div className="log-header">
            <span>02 / EVIDENCE STREAM</span>
            <span className="log-live">
              <span className="tiny-pulse" /> NOMINAL
            </span>
          </div>
          <div className="log-main">
            <p className="log-caption">SYSTEM CHECK / CURRENT STATE</p>
            <div className="log-row">
              <span>decision</span>
              <span className="log-equals">=</span>
              <strong>
                PASS <Check aria-hidden="true" />
              </strong>
            </div>
            <div className="log-row">
              <span>observability</span>
              <span className="log-equals">=</span>
              <strong>
                ON <Check aria-hidden="true" />
              </strong>
            </div>
            <div className="log-row">
              <span>rollback</span>
              <span className="log-equals">=</span>
              <strong>
                READY <Check aria-hidden="true" />
              </strong>
            </div>
            <div className="log-row hash">
              <span>evidence.hash</span>
              <span className="log-equals">=</span>
              <strong>7d3…c19</strong>
            </div>
          </div>
          <div className="log-footer">
            <span>NO BLACK BOXES.</span>
            <span>EVERY DECISION LEAVES A TRACE.</span>
          </div>
        </div>
      </div>
      <div className="instrument-bottom">
        <span>SPECIFICATION / BEHAVIOR / EVIDENCE</span>
        <span>STATE KEY: READY · NO SIGNAL · REVIEW REQUIRED</span>
      </div>
    </div>
  );
}

const stages = [
  {
    number: '01',
    title: 'Direction',
    tag: 'ESTABLISH THE INTENT',
    text: 'Find the precise visual and product thesis before a single pattern becomes permanent.',
    artifact: 'OUTPUT / DECISION RECORD',
  },
  {
    number: '02',
    title: 'System',
    tag: 'MAKE IT COHERENT',
    text: 'Turn that thesis into reusable rules, components, and interfaces that hold under pressure.',
    artifact: 'OUTPUT / INTERFACE CONTRACT',
  },
  {
    number: '03',
    title: 'Proof',
    tag: 'TEST THE CLAIM',
    text: 'Observe real behavior, trace the edges, and make confidence something you can inspect.',
    artifact: 'OUTPUT / EVIDENCE TRAIL',
  },
  {
    number: '04',
    title: 'Frontier',
    tag: 'KEEP IT OPEN',
    text: 'Leave the system ready to adapt, extend, and recover without losing its point of view.',
    artifact: 'OUTPUT / NEXT HORIZON',
  },
];

export function MethodSection() {
  return (
    <section
      id="method"
      className="method section-shell"
      aria-labelledby="method-title"
    >
      <div className="section-intro reveal">
        <SectionLabel index="01">THE METHOD</SectionLabel>
        <div className="section-intro-main">
          <h2 id="method-title">
            One surface.
            <br />
            <span>Four proofs.</span>
          </h2>
          <p>
            Most interfaces stop at what you can see. We build for what can be
            understood, tested, and trusted.
          </p>
        </div>
      </div>
      <div className="method-list">
        {stages.map(stage => (
          <article className="method-row reveal" key={stage.number}>
            <span className="method-num">/{stage.number}</span>
            <div className="method-name">
              <h3>{stage.title}</h3>
              <span>{stage.tag}</span>
            </div>
            <p>{stage.text}</p>
            <span className="method-output">{stage.artifact}</span>
            <ArrowUpRight className="method-arrow" aria-hidden="true" />
          </article>
        ))}
      </div>
    </section>
  );
}

function ControlVisual() {
  return (
    <div className="surface-visual control-visual" aria-hidden="true">
      <div className="visual-top">
        <span>CONTROL / OVERVIEW</span>
        <span>● LIVE</span>
      </div>
      <div className="control-layout">
        <div className="control-side">
          <i />
          <i />
          <i />
          <i />
        </div>
        <div className="control-main">
          <div className="control-chart-title">
            <span>SYSTEM HEALTH</span>
            <span>99.98%</span>
          </div>
          <div className="control-bars">
            <b />
            <b />
            <b />
            <b />
            <b />
            <b />
            <b />
            <b />
            <b />
            <b />
            <b />
            <b />
            <b />
            <b />
            <b />
            <b />
            <b />
            <b />
            <b />
            <b />
            <b />
            <b />
            <b />
            <b />
          </div>
          <div className="control-readout">
            <span>
              NODE 01 <em>STABLE</em>
            </span>
            <span>
              NODE 02 <em>STABLE</em>
            </span>
            <span>
              NODE 03 <em>STABLE</em>
            </span>
          </div>
        </div>
      </div>
      <div className="visual-bottom">
        <span>ALL SYSTEMS NOMINAL</span>
        <span>↗</span>
      </div>
    </div>
  );
}
function GraphVisual() {
  return (
    <div className="surface-visual graph-visual" aria-hidden="true">
      <div className="visual-top">
        <span>DEPENDENCY / MAP</span>
        <span>12 NODES</span>
      </div>
      <svg viewBox="0 0 420 210" className="graph-svg">
        <path
          d="M65 100 L155 60 L245 108 L343 50 M155 60 L152 155 L245 108 L318 165 M65 100 L152 155 M245 108 L343 50 M245 108 L318 165"
          className="graph-edges"
        />
        <circle cx="65" cy="100" r="8" />
        <circle cx="155" cy="60" r="12" />
        <circle cx="152" cy="155" r="7" />
        <circle cx="245" cy="108" r="17" className="graph-core" />
        <circle cx="343" cy="50" r="7" />
        <circle cx="318" cy="165" r="9" />
        <circle cx="245" cy="108" r="4" className="graph-center" />
      </svg>
      <div className="graph-tag">
        <span>SELECTED / N-04</span>
        <strong>Interface contract</strong>
      </div>
      <div className="visual-bottom">
        <span>RELATIONSHIPS, NOT GUESSWORK</span>
        <span>↗</span>
      </div>
    </div>
  );
}
function LocalVisual() {
  return (
    <div className="surface-visual local-visual" aria-hidden="true">
      <div className="visual-top">
        <span>LOCAL / ENVIRONMENT</span>
        <span>↔ SYNCED</span>
      </div>
      <div className="local-terminal">
        <div>
          <span className="terminal-prompt">→</span> nexus inspect --local
        </div>
        <div className="terminal-muted">reading interface manifest...</div>
        <div>
          <span className="terminal-ok">✓</span> 24 components indexed
        </div>
        <div>
          <span className="terminal-ok">✓</span> contracts validated
        </div>
        <div>
          <span className="terminal-ok">✓</span> rollback point saved
        </div>
        <div className="terminal-cursor">
          <span className="terminal-prompt">→</span> <i />
        </div>
      </div>
      <div className="visual-bottom">
        <span>OWN THE LAST MILE</span>
        <span>↗</span>
      </div>
    </div>
  );
}

const systems = [
  {
    number: '01',
    title: 'Control Plane',
    subtitle: 'SEE THE WHOLE SYSTEM',
    text: 'A command surface for state, health, and decisions. The important signals are visible before they become problems.',
    Visual: ControlVisual,
  },
  {
    number: '02',
    title: 'Graph Explorer',
    subtitle: 'FOLLOW THE CONNECTIONS',
    text: 'A navigable map of the relationships behind an interface. Trace what changed, what depends on it, and why.',
    Visual: GraphVisual,
  },
  {
    number: '03',
    title: 'Local Layer',
    subtitle: 'KEEP CONTROL CLOSE',
    text: 'A working layer at the edge of the product. Inspect, verify, and recover without surrendering the details.',
    Visual: LocalVisual,
  },
];

export function SystemCard({ system }: { system: (typeof systems)[number] }) {
  const { number, title, subtitle, text, Visual } = system;
  return (
    <article className="system-card reveal">
      <div className="system-card-heading">
        <span>FIELD / {number}</span>
        <ArrowUpRight aria-hidden="true" />
      </div>
      <Visual />
      <div className="system-card-copy">
        <span>{subtitle}</span>
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    </article>
  );
}

export function SystemsSection() {
  return (
    <section
      id="systems"
      className="systems section-shell"
      aria-labelledby="systems-title"
    >
      <div className="section-intro reveal">
        <SectionLabel index="02">SYSTEMS IN PRACTICE</SectionLabel>
        <div className="section-intro-main">
          <h2 id="systems-title">
            Built to be
            <br />
            <span>looked inside.</span>
          </h2>
          <p>
            Three working surfaces. Each designed to turn complexity into
            something legible and actionable.
          </p>
        </div>
      </div>
      <div className="systems-grid">
        {systems.map(system => (
          <SystemCard key={system.number} system={system} />
        ))}
      </div>
      <div className="systems-bottom">
        <span>NOT MOCKUPS. MODES OF THINKING.</span>
        <span>EXPLORE / INSPECT / UNDERSTAND</span>
      </div>
    </section>
  );
}

const metrics = [
  {
    value: '106/106',
    label: 'Regression',
    detail: 'EXPECTED BEHAVIOR VERIFIED',
  },
  {
    value: '9/9',
    label: 'Bridge Mutations',
    detail: 'BOUNDARY CHANGES ACCOUNTED FOR',
  },
  { value: '1/1', label: 'No-op Control', detail: 'UNCHANGED STATE CONFIRMED' },
  { value: '0', label: 'Unresolved Gates', detail: 'NO OPEN BLOCKERS' },
];

export function ProofMetrics() {
  return (
    <section
      id="proof"
      className="proof section-shell"
      aria-labelledby="proof-title"
    >
      <div className="proof-top reveal">
        <SectionLabel index="03">THE PROOF</SectionLabel>
        <span className="proof-note">
          ILLUSTRATIVE / PROJECT-SYSTEM METRICS
          <br />
          NOT PERFORMANCE CLAIMS ABOUT THIS WEBSITE
        </span>
      </div>
      <div className="proof-intro reveal">
        <h2 id="proof-title">
          Trust is not
          <br />
          <span>a visual effect.</span>
        </h2>
        <p>
          A system earns confidence when its claims can be checked. This is what
          evidence looks like when it belongs in the interface.
        </p>
      </div>
      <div className="metrics-grid">
        {metrics.map((metric, index) => (
          <div className="metric reveal" key={metric.label}>
            <span className="metric-index">0{index + 1} / SIGNAL</span>
            <strong>{metric.value}</strong>
            <div className="metric-caption">
              <h3>{metric.label}</h3>
              <span className="metric-check">
                <Check aria-hidden="true" />
              </span>
            </div>
            <span className="metric-detail">{metric.detail}</span>
          </div>
        ))}
      </div>
      <div className="proof-bottom">
        <span>
          <span className="tiny-pulse" /> EVIDENCE, NOT ASSERTION
        </span>
        <span>REFERENCE MODEL / NXS—001</span>
      </div>
    </section>
  );
}

export function CTA() {
  return (
    <section id="closing" className="closing section-shell" aria-labelledby="closing-title">
      <div className="closing-top reveal">
        <SectionLabel index="04">NEXT MOVE</SectionLabel>
        <span>THE WORK BEGINS WITH A QUESTION.</span>
      </div>
      <div className="closing-body reveal">
        <h2 id="closing-title">
          Make the interface
          <br />
          <span>the first proof.</span>
        </h2>
        <Button asChild variant="nexus" size="nexus">
          <a href="contact">Start a conversation <ArrowUpRight aria-hidden="true" /></a>
        </Button>
      </div>
      <div className="closing-meta">
        <span>FOR THOSE WHO BUILD WHAT MATTERS.</span>
        <span>EST. FOR THE NEXT SYSTEM.</span>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="site-footer section-shell">
      <a className="footer-mark" href="./" aria-label="NEXUS, home">NEXUS<span>.</span></a>
      <div className="footer-info">
        <span>VERIFIABLE<br />INTERFACE SYSTEMS</span>
        <span>DESIGN × ENGINEERING × EVIDENCE</span>
      </div>
      <div className="footer-end">
        <nav className="site-footer-nav" aria-label="Footer navigation">
          <a href="method">METHOD</a><a href="systems">SYSTEMS</a><a href="work">WORK</a><a href="proof">PROOF</a><a href="about">ABOUT</a><a href="contact">CONTACT</a>
        </nav>
        <span>© {new Date().getFullYear()} NEXUS</span>
      </div>
    </footer>
  );
}

export function NexusSite() {
  useEffect(() => {
    const elements = document.querySelectorAll('.reveal');
    if (!('IntersectionObserver' in window)) {
      elements.forEach(element => element.classList.add('is-visible'));
      return;
    }
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -20px 0px' }
    );
    elements.forEach(element => observer.observe(element));
    return () => observer.disconnect();
  }, []);
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Header />
      <main id="main">
        <Hero />
        <InstrumentPanel />
        <MethodSection />
        <SystemsSection />
        <ProofMetrics />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
