import type { Technology } from "@/data/portfolio";

type TechStackSectionProps = {
  technologies: Technology[];
};

export function TechStackSection({ technologies }: TechStackSectionProps) {
  return (
    <section className="section-padding section-surface-tint">
      <div className="container">
        <div className="row g-4 align-items-stretch">
          <div className="col-lg-5">
            <div className="soft-card">
              <span className="eyebrow mb-3">Tech stack</span>
              <h2 className="section-title mb-4">
                Tools I use to build and ship.
              </h2>
              <p className="section-lead mb-0">
                My strongest experience is backend and production engineering,
                with frontend experience that helps me collaborate across the
                full product flow.
              </p>
            </div>
          </div>

          <div className="col-lg-7">
            <div className="soft-card">
              <div className="tech-grid">
                {technologies.map((tech) => {
                  const Icon = tech.icon;

                  return (
                    <div className="tech-card" key={tech.name}>
                      <span className="tech-icon">
                        <Icon />
                      </span>
                      <span className="tech-name">{tech.name}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
