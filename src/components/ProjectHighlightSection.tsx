export function ProjectHighlightSection() {
  return (
    <section className="section-padding">
      <div className="container">
        <div className="project-highlight">
          <div
            className="row align-items-center g-4 position-relative"
            style={{ zIndex: 1 }}
          >
            <div className="col-lg-7">
              <span className="eyebrow mb-3 bg-white">
                Public project idea
              </span>
              <h2 className="section-title mb-4">Ride Dispatch API</h2>
              <p className="lead mb-0 text-white-50">
                A small backend project designed to demonstrate Go, PostgreSQL,
                Redis, Docker, background workers, tests and clean service
                boundaries through a simplified ride request and driver
                assignment domain.
              </p>
            </div>

            <div className="col-lg-5">
              <div className="bg-white text-dark rounded-4 p-4">
                <h3 className="h5 fw-bold mb-3">
                  What it would demonstrate
                </h3>
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
  );
}