import React from "react";

export default function PortfolioLandingPage() {
  const primaryColor = "#0ec3f5";

  const journeyStops = [
    {
      title: "Higher Degree in Web Application Development",
      label: "Education",
      description:
        "Built the technical foundation for software development, web applications, databases, backend programming and frontend fundamentals.",
    },
    {
      title: "Internship at Aircury",
      label: "First professional experience",
      description:
        "Applied development practices in a real professional environment, collaborating with a team and gaining practical experience beyond academic projects.",
    },
    {
      title: "Software Engineer at Palisis / TourCMS",
      label: "Travel-tech SaaS",
      description:
        "Working on production systems for bookings, availability, pricing, distribution, channel integrations and operational workflows in the tours and activities industry.",
    },
    {
      title: "Specialization Course in AI & Big Data",
      label: "Current learning path",
      description:
        "Expanding my technical perspective with machine learning, data analysis, dashboards, AI concepts and data-driven systems.",
    },
  ];

  const strengths = [
    "Backend APIs & integrations",
    "Asynchronous workflows & queues",
    "Reliability & observability",
    "Clean architecture & testing",
    "Travel-tech domain knowledge",
    "Databases, caching & performance",
  ];

  const caseStudies = [
    {
      title: "Booking & distribution integrations",
      text:
        "Experience building and maintaining backend flows around bookings, availability, pricing and third-party integrations, where consistency, reliability and operational stability are critical.",
    },
    {
      title: "Asynchronous batch operations",
      text:
        "Designed backend-oriented flows for long-running operations using queued processing, persisted status, progress feedback and resilient state handling.",
    },
    {
      title: "B2B portal configuration",
      text:
        "Worked on product-facing backend and frontend features involving configuration, branding, templates, customer-specific settings and maintainable domain modelling.",
    },
    {
      title: "Observability & API logging",
      text:
        "Improved debugging and production visibility through structured logs, correlation IDs, error tracking and more consistent operational diagnostics.",
    },
  ];

  const technologies = [
    "PHP",
    "Laravel",
    "REST APIs",
    "MySQL",
    "PostgreSQL",
    "MongoDB",
    "Redis",
    "Valkey",
    "AWS SQS",
    "CloudWatch",
    "Docker",
    "GitHub Actions",
    "Vue.js",
    "Pinia",
    "JavaScript",
    "TypeScript",
    "PHPUnit",
    "Mockery",
    "Behat",
  ];

  return (
    <main className="portfolio-page">
      <style>{`
        :root {
          --portfolio-primary: ${primaryColor};
          --portfolio-dark: #071923;
          --portfolio-soft: #f5fbfd;
          --portfolio-muted: #5b6b75;
          --portfolio-border: #d9edf4;
        }

        body {
          margin: 0;
          background: #ffffff;
        }

        .portfolio-page {
          font-family: Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          color: var(--portfolio-dark);
          background:
            radial-gradient(circle at top right, rgba(14, 195, 245, 0.14), transparent 32rem),
            linear-gradient(180deg, #ffffff 0%, #f7fbfd 100%);
        }

        .text-primary-custom {
          color: var(--portfolio-primary) !important;
        }

        .bg-primary-custom {
          background: var(--portfolio-primary) !important;
        }

        .btn-primary-custom {
          background: var(--portfolio-primary);
          border-color: var(--portfolio-primary);
          color: #04131a;
          font-weight: 700;
          border-radius: 999px;
          padding: 0.85rem 1.25rem;
          box-shadow: 0 12px 26px rgba(14, 195, 245, 0.25);
        }

        .btn-primary-custom:hover {
          background: #0ab3e2;
          border-color: #0ab3e2;
          color: #04131a;
        }

        .btn-outline-custom {
          border: 1px solid rgba(7, 25, 35, 0.16);
          color: var(--portfolio-dark);
          font-weight: 700;
          border-radius: 999px;
          padding: 0.85rem 1.25rem;
          background: rgba(255, 255, 255, 0.72);
        }

        .section-padding {
          padding: 5.5rem 0;
        }

        .hero {
          min-height: 92vh;
          display: flex;
          align-items: center;
          padding: 7rem 0 5rem;
        }

        .eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.45rem 0.85rem;
          border: 1px solid rgba(14, 195, 245, 0.35);
          background: rgba(14, 195, 245, 0.08);
          border-radius: 999px;
          font-size: 0.85rem;
          font-weight: 700;
          color: #075a70;
        }

        .hero-title {
          font-size: clamp(2.65rem, 6vw, 5.7rem);
          line-height: 0.95;
          letter-spacing: -0.06em;
          font-weight: 850;
        }

        .hero-description {
          color: var(--portfolio-muted);
          font-size: 1.16rem;
          line-height: 1.8;
          max-width: 44rem;
        }

        .hero-card {
          border: 1px solid rgba(14, 195, 245, 0.24);
          border-radius: 2rem;
          background: rgba(255, 255, 255, 0.78);
          backdrop-filter: blur(18px);
          box-shadow: 0 24px 70px rgba(7, 25, 35, 0.1);
          padding: 1.4rem;
        }

        .signal-card {
          border-radius: 1.4rem;
          border: 1px solid rgba(7, 25, 35, 0.08);
          background: #ffffff;
          padding: 1.25rem;
        }

        .metric {
          font-size: 2rem;
          line-height: 1;
          font-weight: 850;
          letter-spacing: -0.04em;
        }

        .metric-label {
          color: var(--portfolio-muted);
          font-size: 0.93rem;
          margin-top: 0.25rem;
        }

        .section-title {
          font-size: clamp(2rem, 4vw, 3.4rem);
          font-weight: 850;
          letter-spacing: -0.05em;
          line-height: 1;
        }

        .section-lead {
          color: var(--portfolio-muted);
          font-size: 1.08rem;
          line-height: 1.8;
        }

        .soft-card {
          height: 100%;
          border: 1px solid rgba(7, 25, 35, 0.08);
          border-radius: 1.6rem;
          background: rgba(255, 255, 255, 0.82);
          box-shadow: 0 14px 42px rgba(7, 25, 35, 0.06);
          padding: 1.5rem;
        }

        .icon-badge {
          width: 2.75rem;
          height: 2.75rem;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border-radius: 1rem;
          background: rgba(14, 195, 245, 0.12);
          color: #075a70;
          font-weight: 850;
        }

        .pill {
          display: inline-flex;
          align-items: center;
          padding: 0.5rem 0.8rem;
          border-radius: 999px;
          background: #ffffff;
          border: 1px solid var(--portfolio-border);
          color: #25424f;
          font-size: 0.92rem;
          font-weight: 650;
          margin: 0.25rem;
        }

        .journey-wrapper {
          position: relative;
          padding: 2rem 0;
        }

        .track-line {
          position: absolute;
          top: 50%;
          left: 5%;
          right: 5%;
          height: 8px;
          transform: translateY(-50%);
          border-radius: 999px;
          background:
            repeating-linear-gradient(
              90deg,
              rgba(7, 25, 35, 0.18) 0,
              rgba(7, 25, 35, 0.18) 18px,
              transparent 18px,
              transparent 28px
            ),
            linear-gradient(90deg, rgba(14, 195, 245, 0.18), rgba(14, 195, 245, 0.72));
          box-shadow: inset 0 0 0 1px rgba(7, 25, 35, 0.05);
        }

        .journey-grid {
          position: relative;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1rem;
        }

        .station {
          min-height: 17rem;
          display: flex;
          align-items: center;
        }

        .station-card {
          width: 100%;
          border-radius: 1.5rem;
          border: 1px solid rgba(7, 25, 35, 0.08);
          background: rgba(255, 255, 255, 0.94);
          box-shadow: 0 14px 42px rgba(7, 25, 35, 0.08);
          padding: 1.25rem;
          position: relative;
        }

        .station-card::before {
          content: "";
          position: absolute;
          top: -2.15rem;
          left: 50%;
          transform: translateX(-50%);
          width: 1.25rem;
          height: 1.25rem;
          border-radius: 999px;
          background: var(--portfolio-primary);
          border: 4px solid #ffffff;
          box-shadow: 0 0 0 4px rgba(14, 195, 245, 0.18), 0 8px 20px rgba(14, 195, 245, 0.28);
        }

        .station:nth-child(even) .station-card::before {
          top: auto;
          bottom: -2.15rem;
        }

        .station:nth-child(even) {
          align-items: flex-start;
        }

        .station:nth-child(odd) {
          align-items: flex-end;
        }

        .station-label {
          color: #075a70;
          font-weight: 800;
          font-size: 0.82rem;
          text-transform: uppercase;
          letter-spacing: 0.08em;
        }

        .project-highlight {
          border-radius: 2rem;
          background: var(--portfolio-dark);
          color: #ffffff;
          padding: 2rem;
          overflow: hidden;
          position: relative;
        }

        .project-highlight::after {
          content: "";
          position: absolute;
          width: 20rem;
          height: 20rem;
          border-radius: 999px;
          right: -6rem;
          top: -8rem;
          background: rgba(14, 195, 245, 0.22);
          filter: blur(4px);
        }

        .footer {
          border-top: 1px solid rgba(7, 25, 35, 0.08);
          padding: 2rem 0;
          color: var(--portfolio-muted);
        }

        @media (max-width: 991px) {
          .hero {
            min-height: auto;
            padding-top: 5rem;
          }

          .track-line {
            left: 1.6rem;
            right: auto;
            top: 0;
            bottom: 0;
            width: 8px;
            height: auto;
            transform: none;
            background:
              repeating-linear-gradient(
                180deg,
                rgba(7, 25, 35, 0.18) 0,
                rgba(7, 25, 35, 0.18) 18px,
                transparent 18px,
                transparent 28px
              ),
              linear-gradient(180deg, rgba(14, 195, 245, 0.18), rgba(14, 195, 245, 0.72));
          }

          .journey-grid {
            grid-template-columns: 1fr;
            padding-left: 3.25rem;
          }

          .station,
          .station:nth-child(even),
          .station:nth-child(odd) {
            min-height: auto;
            align-items: stretch;
          }

          .station-card::before,
          .station:nth-child(even) .station-card::before {
            left: -2.25rem;
            top: 1.5rem;
            bottom: auto;
            transform: none;
          }
        }
      `}</style>

      <nav className="navbar navbar-expand-lg bg-white border-bottom sticky-top">
        <div className="container py-2">
          <a className="navbar-brand fw-bold" href="#top">
            Armando Garrido<span className="text-primary-custom">.</span>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#portfolioNavbar"
            aria-controls="portfolioNavbar"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="portfolioNavbar">
            <ul className="navbar-nav ms-auto gap-lg-3">
              <li className="nav-item">
                <a className="nav-link" href="#about">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#journey">Journey</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#work">Work</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <section id="top" className="hero">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-7">
              <span className="eyebrow mb-4">Backend-oriented Software Engineer</span>
              <h1 className="hero-title mb-4">
                Building reliable systems for real business operations.
              </h1>
              <p className="hero-description mb-4">
                I’m a software engineer focused on backend systems, integrations and reliable production software. I currently work in travel-tech, building systems around bookings, availability, pricing, distribution and third-party integrations.
              </p>
              <p className="hero-description mb-4">
                I care about clean architecture, testability, observability and building software that is practical, maintainable and robust enough to support critical operations.
              </p>
              <div className="d-flex flex-wrap gap-3">
                <a href="#work" className="btn btn-primary-custom">View case studies</a>
                <a href="#contact" className="btn btn-outline-custom">Get in touch</a>
              </div>
            </div>

            <div className="col-lg-5">
              <div className="hero-card">
                <div className="row g-3">
                  <div className="col-6">
                    <div className="signal-card">
                      <div className="metric">~3</div>
                      <div className="metric-label">Years in software engineering</div>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="signal-card">
                      <div className="metric">24/7</div>
                      <div className="metric-label">Production mindset</div>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="signal-card">
                      <h2 className="h5 fw-bold mb-3">What I work on</h2>
                      <div className="d-flex flex-wrap">
                        {strengths.map((strength) => (
                          <span className="pill" key={strength}>{strength}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="signal-card">
                      <h2 className="h5 fw-bold mb-2">Current focus</h2>
                      <p className="mb-0 text-secondary">
                        Growing as a backend engineer through scalable systems, distributed workflows, product ownership and data-oriented applications.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="section-padding">
        <div className="container">
          <div className="row g-5 align-items-start">
            <div className="col-lg-5">
              <span className="eyebrow mb-3">About me</span>
              <h2 className="section-title mb-4">Backend, product and operations.</h2>
            </div>
            <div className="col-lg-7">
              <p className="section-lead">
                I have almost three years of professional experience building and maintaining production systems in the travel-tech industry. My work involves APIs, distributed workflows, queue-based processing, external integrations, database-backed systems and operational reliability.
              </p>
              <p className="section-lead mb-0">
                I enjoy working close to the product, understanding business constraints and designing backend solutions that are practical, maintainable and scalable. I’m especially interested in systems where reliability, data consistency, observability and clean design make a direct difference for users and businesses.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="journey" className="section-padding bg-white">
        <div className="container">
          <div className="row justify-content-between align-items-end mb-5 g-4">
            <div className="col-lg-7">
              <span className="eyebrow mb-3">Experience journey</span>
              <h2 className="section-title mb-0">A route through learning, product and backend engineering.</h2>
            </div>
            <div className="col-lg-4">
              <p className="section-lead mb-0">
                My path combines formal web development training, early professional practice, production engineering in travel-tech and continuous learning in AI and Big Data.
              </p>
            </div>
          </div>

          <div className="journey-wrapper">
            <div className="track-line" aria-hidden="true" />
            <div className="journey-grid">
              {journeyStops.map((stop) => (
                <div className="station" key={stop.title}>
                  <article className="station-card">
                    <div className="station-label mb-2">{stop.label}</div>
                    <h3 className="h5 fw-bold mb-3">{stop.title}</h3>
                    <p className="text-secondary mb-0">{stop.description}</p>
                  </article>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="work" className="section-padding">
        <div className="container">
          <div className="row justify-content-between align-items-end mb-5 g-4">
            <div className="col-lg-7">
              <span className="eyebrow mb-3">Selected work</span>
              <h2 className="section-title mb-0">Case studies focused on real production problems.</h2>
            </div>
            <div className="col-lg-4">
              <p className="section-lead mb-0">
                Anonymized examples of the kind of systems, problems and technical decisions I work with professionally.
              </p>
            </div>
          </div>

          <div className="row g-4">
            {caseStudies.map((study, index) => (
              <div className="col-md-6" key={study.title}>
                <article className="soft-card">
                  <div className="icon-badge mb-4">0{index + 1}</div>
                  <h3 className="h4 fw-bold mb-3">{study.title}</h3>
                  <p className="text-secondary mb-0">{study.text}</p>
                </article>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container">
          <div className="row g-4 align-items-stretch">
            <div className="col-lg-5">
              <div className="soft-card">
                <span className="eyebrow mb-3">Tech stack</span>
                <h2 className="section-title mb-4">Tools I use to build and ship.</h2>
                <p className="section-lead mb-0">
                  My strongest experience is backend and production engineering, with frontend experience that helps me collaborate across the full product flow.
                </p>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="soft-card">
                <div className="d-flex flex-wrap">
                  {technologies.map((tech) => (
                    <span className="pill" key={tech}>{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <div className="project-highlight">
            <div className="row align-items-center g-4 position-relative" style={{ zIndex: 1 }}>
              <div className="col-lg-7">
                <span className="eyebrow mb-3 bg-white">Public project idea</span>
                <h2 className="section-title mb-4">Ride Dispatch API</h2>
                <p className="lead mb-0 text-white-50">
                  A small backend project designed to demonstrate Go, PostgreSQL, Redis, Docker, background workers, tests and clean service boundaries through a simplified ride request and driver assignment domain.
                </p>
              </div>
              <div className="col-lg-5">
                <div className="bg-white text-dark rounded-4 p-4">
                  <h3 className="h5 fw-bold mb-3">What it would demonstrate</h3>
                  <ul className="mb-0 text-secondary">
                    <li>REST API design</li>
                    <li>Async processing and workers</li>
                    <li>Database-backed state transitions</li>
                    <li>Structured logging and tests</li>
                    <li>Dockerized local development</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="section-padding bg-white">
        <div className="container text-center">
          <span className="eyebrow mb-3">Contact</span>
          <h2 className="section-title mb-4">Interested in backend engineering, reliability and product impact.</h2>
          <p className="section-lead mx-auto mb-4" style={{ maxWidth: "46rem" }}>
            I’m open to backend-focused roles where I can work on scalable systems, distributed workflows, clean architecture and reliable production software.
          </p>
          <div className="d-flex flex-wrap justify-content-center gap-3">
            <a href="mailto:your.email@example.com" className="btn btn-primary-custom">Email me</a>
            <a href="https://www.linkedin.com/in/your-profile" className="btn btn-outline-custom">LinkedIn</a>
            <a href="https://github.com/your-username" className="btn btn-outline-custom">GitHub</a>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container d-flex flex-column flex-md-row justify-content-between gap-2">
          <span>© {new Date().getFullYear()} Armando Garrido</span>
          <span>Backend systems · Travel-tech · Reliability · Clean architecture</span>
        </div>
      </footer>
    </main>
  );
}
