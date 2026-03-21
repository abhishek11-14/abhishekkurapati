'use client';

import { useState, useEffect } from 'react';

const navItems = [
  { id: 'home', label: 'Home', icon: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 9.5L12 3l9 6.5V20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.5z"/>
      <path d="M9 21V12h6v9"/>
    </svg>
  )},
  { id: 'about', label: 'About', icon: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="8" r="4"/>
      <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/>
    </svg>
  )},
  { id: 'projects', label: 'Projects', icon: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="7" height="7" rx="1"/>
      <rect x="14" y="3" width="7" height="7" rx="1"/>
      <rect x="3" y="14" width="7" height="7" rx="1"/>
      <rect x="14" y="14" width="7" height="7" rx="1"/>
    </svg>
  )},
  { id: 'contact', label: 'Contact', icon: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="16" rx="2"/>
      <path d="M2 7l10 7 10-7"/>
    </svg>
  )},
];

export default function Sidebar({ activeSection, onNav }) {
  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="sidebar">
        <div className="sidebar-profile">
          <img
            src="/profile.jpg"
            alt="K. Abhishek"
            className="sidebar-avatar"
            onError={(e) => {
              e.currentTarget.onerror = null;
              e.currentTarget.src = 'https://via.placeholder.com/72x72/111111/404040?text=KA';
            }}
          />
          <div className="available-badge">
            <span className="pulse-dot" />
            Available
          </div>
        </div>

        <div className="sidebar-divider" />

        <nav className="sidebar-nav">
          {navItems.map((item) => (
            <button
              key={item.id}
              className={`nav-item${activeSection === item.id ? ' active' : ''}`}
              onClick={() => onNav(item.id)}
            >
              {item.icon}
              {item.label}
            </button>
          ))}
        </nav>
      </aside>

      {/* Mobile Bottom Nav */}
      <nav className="mobile-nav">
        {navItems.map((item) => (
          <button
            key={item.id}
            className={`mobile-nav-item${activeSection === item.id ? ' active' : ''}`}
            onClick={() => onNav(item.id)}
          >
            {item.icon}
            {item.label}
          </button>
        ))}
      </nav>
    </>
  );
}
