const projects = [
  {
    id: 1,
    title: 'Agrisaathi',
    tag: 'WEB APP',
    link: 'https://agrisaathi.vercel.app/',
    image: '/agrisaathi-project.jpg.jpeg'
  }
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="section">
      <h2 className="section-heading">Recent Projects</h2>
      
      <div className="projects-grid">
        {projects.map((p) => (
          <a key={p.id} href={p.link} target="_blank" rel="noopener noreferrer" className="project-card">
            {p.image ? (
              <img src={p.image} alt={p.title} className="project-img" />
            ) : (
              <div className="project-img-placeholder">Project Image</div>
            )}
            <div className="project-info">
              <p className="project-tag">{p.tag}</p>
              <h3 className="project-title">{p.title}</h3>
            </div>
          </a>
        ))}
      </div>
      
      <hr className="divider-dotted" />
      
      <div className="view-all-row">
        <button className="btn-outline">
          View All Projects
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </button>
      </div>
    </section>
  );
}
