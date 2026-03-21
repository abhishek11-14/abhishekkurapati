'use client';

import { useEffect } from 'react';

export default function Navbar() {
  useEffect(() => {
    const navbar = document.querySelector('.navbar');
    const handleScroll = () => {
      if (window.scrollY > 50) {
        navbar.style.background = 'rgba(15, 23, 42, 0.9)';
        navbar.style.boxShadow = '0 4px 30px rgba(0, 0, 0, 0.5)';
      } else {
        navbar.style.background = 'rgba(15, 23, 42, 0.7)';
        navbar.style.boxShadow = 'none';
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="navbar">
      <div className="logo">KA.</div>
      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}
