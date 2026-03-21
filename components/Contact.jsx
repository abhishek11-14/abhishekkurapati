export default function ContactSection() {
  return (
    <section id="contact" className="section">
      <h2 className="section-heading">Let&apos;s Connect!</h2>
      
      <div className="contact-grid">
        {/* Left Col: Contact Info & Socials */}
        <div className="contact-info-col">
          <h4 className="contact-block-title">Contact</h4>
          <a href="mailto:abhishekkurapati11@gmail.com" className="contact-link-row">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
              <polyline points="22,6 12,13 2,6"/>
            </svg>
            abhishekkurapati11@gmail.com
          </a>
          
          <h4 className="contact-block-title" style={{ marginTop: '40px' }}>Social Media</h4>
          <a href="https://www.linkedin.com/in/abhishek-kurapati-13b5403b5/" target="_blank" rel="noopener noreferrer" className="contact-link-row">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
              <rect x="2" y="9" width="4" height="12"/>
              <circle cx="4" cy="4" r="2"/>
            </svg>
            LinkedIn
          </a>
          <a href="https://github.com/abhishek11-14" target="_blank" rel="noopener noreferrer" className="contact-link-row">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
            </svg>
            GitHub
          </a>
        </div>
        
        {/* Right Col: Form */}
        <div className="contact-form-col">
          <h3 className="contact-form-label">Message Me</h3>
          <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
            <div className="form-row">
              <input type="text" placeholder="Name" className="form-input" />
              <input type="email" placeholder="Email" className="form-input" />
            </div>
            <textarea placeholder="Message" className="form-textarea"></textarea>
            <button type="submit" className="btn-green" style={{ alignSelf: 'flex-start', marginTop: '8px' }}>
              Send Message
            </button>
          </form>
        </div>
      </div>
      
      <footer className="site-footer">
        &copy; {new Date().getFullYear()} K. Abhishek. Built with passion.
      </footer>
    </section>
  );
}
