export default function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-copy">
        <span className="eyebrow">Available for hire</span>
        <h1>
          I am Gerard Ethan Francis Rivera,
          <br />
          <span>frontend developer.</span>
        </h1>
        <p>
          Sculpting digital experiences with mechanical precision and editorial polish.
          Based in London, working globally.
        </p>
        <a className="hero-cta" href="#work">
          Explore Work
        </a>
      </div>
      <div className="hero-visual">
        <div className="hero-frame" />
        <div className="hero-image" />
      </div>
    </section>
  );
}
