import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

export function ContactSection() {
  const showOpenToWork = false;

  return (
    <section id="contact" className="section-padding section-surface-white">
      <div className="container text-center">
        <span className="eyebrow mb-3">Contact</span>

        <h2 className="section-title mb-4">
          Interested in backend engineering, reliability and product impact.
        </h2>

        {showOpenToWork && (
          <p
            className="section-lead mx-auto mb-4"
            style={{ maxWidth: "46rem" }}
          >
            I’m open to backend-focused roles where I can work on scalable
            systems, distributed workflows, clean architecture and reliable
            production software.
          </p>
        )}

        <div className="d-flex flex-wrap justify-content-center gap-3">
          <a
            href="mailto:arman-as@hotmail.com@hotmail.com"
            className="btn btn-primary-custom"
          >
            Email me <MdEmail />
          </a>

          <a
            href="https://www.linkedin.com/in/armando-garrido-rodr%C3%ADguez-8695511a9/"
            className="btn btn-outline-custom"
          >
            LinkedIn <FaLinkedin />
          </a>

          <a
            href="https://github.com/armandogarrido7"
            className="btn btn-outline-custom"
          >
            GitHub <FaGithub />
          </a>
        </div>
      </div>
    </section>
  );
}
