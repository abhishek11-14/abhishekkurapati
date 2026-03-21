'use client';

import { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import About from '../components/About';
import Contact from '../components/Contact';

export default function Home() {
  const [activeSection, setActiveSection] = useState('home');

  // Simple intersection observer to update active section based on scroll
  useEffect(() => {
    const sections = document.querySelectorAll('.section');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, { threshold: 0.3 }); // 30% visible to count as active

    sections.forEach(s => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({
        top: el.offsetTop - 52, // account for padding
        behavior: 'smooth'
      });
      setActiveSection(id);
    }
  };

  return (
    <div className="app-layout">
      <Sidebar activeSection={activeSection} onNav={scrollToSection} />
      
      <main className="main-content">
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}
