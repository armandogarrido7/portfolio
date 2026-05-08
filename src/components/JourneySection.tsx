import type { JourneyStop } from "@/data/portfolio";

type JourneySectionProps = {
  journeyStops: JourneyStop[];
};

export function JourneySection({ journeyStops }: JourneySectionProps) {
  return (
    <section id="journey" className="section-padding section-surface-light">
      <div className="container">
        <div className="row justify-content-between align-items-end mb-5 g-4">
          <div className="col-lg-7">
            <span className="eyebrow mb-3">Experience journey</span>
            <h2 className="section-title mb-0">
              A route through learning, product and backend engineering.
            </h2>
          </div>

          <div className="col-lg-4">
            <p className="section-lead mb-0">
              My path combines formal web development training, early
              professional practice, production engineering in travel-tech and
              continuous learning in AI and Big Data.
            </p>
          </div>
        </div>

        <div className="journey-wrapper">
          <div className="track-line" aria-hidden="true" />

          <div className="journey-grid">
            {journeyStops.map((stop) => (
              <div className="station" key={stop.title}>
                <article className="station-card">
                  <div className="station-image-wrapper mb-3">
                    <img
                      src={stop.image}
                      alt={stop.imageAlt}
                      className="station-image"
                    />
                  </div>

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
  );
}
