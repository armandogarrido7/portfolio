import type { CaseStudy } from "@/data/portfolio";

type WorkSectionProps = {
  caseStudies: CaseStudy[];
};

export function WorkSection({ caseStudies }: WorkSectionProps) {
  return (
    <section id="work" className="section-padding">
      <div className="container">
        <div className="row justify-content-between align-items-end mb-5 g-4">
          <div className="col-lg-7">
            <span className="eyebrow mb-3">Selected work</span>
            <h2 className="section-title mb-0">
              Case studies focused on real production problems.
            </h2>
          </div>

          <div className="col-lg-4">
            <p className="section-lead mb-0">
              Anonymized examples of the kind of systems, problems and technical
              decisions I work with professionally.
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
  );
}