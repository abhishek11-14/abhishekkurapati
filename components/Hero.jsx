export default function HeroSection() {
  return (
    <section id="home" className="section">
      <h1 className="hero-heading">
        Hello Everyone!<br />
        I&apos;m Abhishek.
      </h1>
      <p className="hero-sub">
        A B.Tech Data Science student at CMRIT, passionate about learning new technologies,
        building things, and exploring how the world of code works.
      </p>
      <div className="hero-location-row">
        <span className="hero-location">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
            <circle cx="12" cy="9" r="2.5"/>
          </svg>
          Hyderabad, India
        </span>
        <a href="#about" className="btn-outline">
          More about Me
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </a>
      </div>
    </section>
  );
}
