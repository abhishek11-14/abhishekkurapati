export default function AboutSection() {
  return (
    <section id="about" className="section">
      <h2 className="section-heading">Get to Know Me</h2>

      <p className="about-bio">
        Hello, I&apos;m Abhishek, and I&apos;m more than just a student; I&apos;m a digital explorer. I have
        always been captivated by the art of programming and web design, and my journey in this field has been
        nothing short of exhilarating. My goal is to craft digital experiences that not only look modern but also
        function seamlessly.
      </p>

      <div className="about-location-row">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
          <circle cx="12" cy="9" r="2.5"/>
        </svg>
        Hyderabad, India
      </div>

      <h3 className="edu-label">Education</h3>
      
      <div className="edu-list">
        <div className="edu-item">
          <div className="edu-icon">🏫</div>
          <div className="edu-details">
            <h4 className="edu-name">High School Education</h4>
            <p className="edu-school">Narayana</p>
          </div>
        </div>

        <div className="edu-item">
          <div className="edu-icon">📜</div>
          <div className="edu-details">
            <h4 className="edu-name">Intermediate (10+2)</h4>
            <p className="edu-school">Narayana Jr. College</p>
          </div>
        </div>
        
        <div className="edu-item">
          <div className="edu-icon">🎓</div>
          <div className="edu-details">
            <h4 className="edu-name">B.Tech in Data Science</h4>
            <p className="edu-school">CMR Institute of Technology (CMRIT), 2025 - Present</p>
          </div>
        </div>
      </div>

      <h3 className="edu-label" style={{ marginTop: '40px' }}>Experience</h3>
      
      <div className="edu-list">
        <div className="edu-item">
          <div className="edu-icon">💼</div>
          <div className="edu-details">
            <h4 className="edu-name">Internship</h4>
            <p className="edu-school">EvolveX</p>
          </div>
        </div>
        
        <div className="edu-item">
          <div className="edu-icon">🚀</div>
          <div className="edu-details" style={{ width: '100%' }}>
            <h4 className="edu-name">Hackathon Participant</h4>
            <p className="edu-school">Hackforge Hackathon</p>
            <div style={{ marginTop: '16px', borderRadius: '12px', overflow: 'hidden', border: '1px solid var(--border)' }}>
              <img src="/hackforge-cert.jpg.jpeg" alt="Hackforge Certificate" style={{ width: '100%', height: 'auto', display: 'block' }} />
            </div>
          </div>
        </div>
      </div>

      <h3 className="edu-label" style={{ marginTop: '40px' }}>Working On (Present)</h3>
      
      <div className="edu-list">
        <div className="edu-item">
          <div className="edu-icon">💻</div>
          <div className="edu-details">
            <h4 className="edu-name">DSA & Coding</h4>
            <p className="edu-school">Python, C, HTML</p>
          </div>
        </div>
        
        <div className="edu-item">
          <div className="edu-icon">🤖</div>
          <div className="edu-details">
            <h4 className="edu-name">AI Tools</h4>
            <p className="edu-school">Exploring and utilizing new AI technologies</p>
          </div>
        </div>
      </div>

      <h3 className="edu-label" style={{ marginTop: '40px' }}>Strengths</h3>
      
      <div className="edu-list">
        <div className="edu-item">
          <div className="edu-icon">🧘‍♂️</div>
          <div className="edu-details">
            <h4 className="edu-name">Stress Tolerance</h4>
            <p className="edu-school">Ability to stay calm under pressure</p>
          </div>
        </div>
        
        <div className="edu-item">
          <div className="edu-icon">🔄</div>
          <div className="edu-details">
            <h4 className="edu-name">Adaptive</h4>
            <p className="edu-school">Quick to learn and adjust to new environments</p>
          </div>
        </div>

        <div className="edu-item">
          <div className="edu-icon">🤝</div>
          <div className="edu-details">
            <h4 className="edu-name">Teamwork</h4>
            <p className="edu-school">Collaborative and effective in group settings</p>
          </div>
        </div>
      </div>

      <h3 className="edu-label" style={{ marginTop: '40px' }}>Hobbies</h3>
      
      <div className="edu-list">
        <div className="edu-item">
          <div className="edu-icon">🎮</div>
          <div className="edu-details">
            <h4 className="edu-name">Gaming</h4>
          </div>
        </div>
        
        <div className="edu-item">
          <div className="edu-icon">🏐</div>
          <div className="edu-details">
            <h4 className="edu-name">Volleyball</h4>
          </div>
        </div>
      </div>
    </section>
  );
}
