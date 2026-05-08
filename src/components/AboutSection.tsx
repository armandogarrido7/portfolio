export function AboutSection() {
  return (
    <section id="about" className="section-padding section-surface-white">
      <div className="container">
        <div className="row g-5 align-items-start">
          <div className="col-lg-5">
            <span className="eyebrow mb-3">About me</span>
            <h2 className="section-title mb-4">
              Backend, product and operations.
            </h2>
          </div>

          <div className="col-lg-7">
            <p className="section-lead">
              I have almost three years of professional experience building and
              maintaining production systems in the travel-tech industry. My
              work involves APIs, distributed workflows, queue-based processing,
              external integrations, database-backed systems and operational
              reliability.
            </p>

            <p className="section-lead mb-0">
              I enjoy working close to the product, understanding business
              constraints and designing backend solutions that are practical,
              maintainable and scalable. I’m especially interested in systems
              where reliability, data consistency, observability and clean
              design make a direct difference for users and businesses.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
