const stack = ['React', 'TypeScript', 'Vite', 'CSS', 'Accessibility', 'Responsive'];

export default function AboutSection() {
  return (
    <section className="section-block" id="about">
      <div className="section-header">
        <p className="section-label">About / Identity</p>
        <h2>The technical monolith approach.</h2>
      </div>
      <div className="about-grid">
        <div className="about-copy">
          <p>
            I specialize in building robust, high-performance interfaces that bridge the gap between complex engineering and minimalist design.
            My philosophy is rooted in the Technical Monolith—software that feels both solid and invisible.
          </p>
          <p>
            With a focus on modern React ecosystems, I leverage architectural patterns that ensure scalability without sacrificing the creative spark that makes a product memorable.
          </p>
        </div>
        <div className="about-meta">
          <p className="section-subtitle">Core Stack</p>
          <div className="stack-list">
            {stack.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
