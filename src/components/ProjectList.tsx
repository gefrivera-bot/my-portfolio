import type { Project } from '../types';

interface ProjectListProps {
  projects: Project[];
}

export default function ProjectList({ projects }: ProjectListProps) {
  return (
    <section className="section-block" id="work">
      <div className="section-header section-header-row">
        <div>
          <p className="section-label">Selected Work</p>
          <h2>Engineered with precision.</h2>
        </div>
        <span className="section-meta">Archive / 2021—2024</span>
      </div>
      <div className="project-scroll-container">
        <div className="project-grid">
          {projects.map((project) => (
            <article key={project.title} className="project-card">
              <div className="project-image-shell">
                <img src={project.image} alt={project.title} />
              </div>
              <div className="project-copy">
                <div className="project-header">
                  <h3>{project.title}</h3>
                  <span>{project.year}</span>
                </div>
                <p>{project.description}</p>
                <div className="project-actions">
                  <a className="project-button" href={project.ctaLink}>
                    View Case
                  </a>
                  <span className="project-tag">{project.role}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
