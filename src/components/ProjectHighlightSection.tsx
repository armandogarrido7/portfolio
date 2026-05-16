export function ProjectHighlightSection() {
  return (
    <section className="section-padding">
      <div className="container">
        <div className="project-highlight">
          <div
            className="row align-items-center g-4 position-relative"
            style={{ zIndex: 1 }}
          >
            <div className="col-lg-8">
              <span className="eyebrow mb-3 bg-white">
                Public project
              </span>

              <h2 className="section-title mb-4 text-white">
                Building something worth sharing
              </h2>

              <p className="lead mb-0 text-white-50">
                I am currently preparing a public backend project to showcase
                clean architecture, API design, asynchronous workflows,
                testing, observability and production-oriented engineering
                practices.
              </p>
            </div>

            <div className="col-lg-4">
              <div className="bg-white text-dark rounded-4 p-4">
                <h3 className="h5 fw-bold mb-3">
                  Coming soon
                </h3>

                <p className="mb-0 text-secondary">
                  This section will include a technical project with source
                  code, documentation, local setup instructions and an overview
                  of the main architectural decisions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}