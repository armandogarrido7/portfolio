type HeroSectionProps = {
  strengths: string[];
};

export function HeroSection({ strengths }: HeroSectionProps) {
  return (
    <section id="top" className="hero">
      <div className="container">
        <div className="row align-items-center g-5">
          <div className="col-lg-7">
            <span className="eyebrow mb-4">
              Backend-oriented Software Engineer
            </span>

            <h1 className="hero-title mb-4">
              Building reliable systems for real business operations.
            </h1>

            <p className="hero-description mb-4">
              I’m a software engineer focused on backend systems, integrations
              and reliable production software. I currently work in travel-tech,
              building systems around bookings, availability, pricing,
              distribution and third-party integrations.
            </p>

            <p className="hero-description mb-4">
              I care about clean architecture, testability, observability and
              building software that is practical, maintainable and robust
              enough to support critical operations.
            </p>

            <div className="d-flex flex-wrap gap-3">
              <a href="#work" className="btn btn-primary-custom">
                View case studies
              </a>
              <a href="#contact" className="btn btn-outline-custom">
                Get in touch
              </a>
            </div>
          </div>

          <div className="col-lg-5">
            <div className="hero-card">
              <div className="row g-3">
                <div className="col-6">
                  <div className="signal-card">
                    <div className="metric">~3</div>
                    <div className="metric-label">
                      Years in software engineering
                    </div>
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
                        <span className="pill" key={strength}>
                          {strength}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="col-12">
                  <div className="signal-card">
                    <h2 className="h5 fw-bold mb-2">Current focus</h2>
                    <p className="mb-0 text-secondary">
                      Growing as a backend engineer through scalable systems,
                      distributed workflows, product ownership and data-oriented
                      applications.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}