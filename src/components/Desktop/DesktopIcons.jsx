import React from 'react';
import { Home, User, FolderGit2, BookOpen, Cpu, Mail, ExternalLink, Terminal } from 'lucide-react';
import { soundFX } from '../../utils/soundEffects';
import PixelFlower from '../Common/PixelFlower';

export default function DesktopIcons({ currentScreen, onNavigate, onOpenTerminal }) {
  const icons = [
    {
      id: 'home',
      name: 'Home.exe',
      icon: <Home size={20} color="var(--pastel-blue-text)" />,
      badge: 'Main',
      flower: 'blue'
    },
    {
      id: 'about',
      name: 'About.exe',
      icon: <User size={20} color="var(--pastel-pink-text)" />,
      badge: 'Bio',
      flower: 'pink'
    },
    {
      id: 'projects',
      name: 'Projects.exe',
      icon: <FolderGit2 size={20} color="var(--pastel-sage-text)" />,
      badge: '57 Repos',
      flower: 'sage'
    },
    {
      id: 'case-studies',
      name: 'CaseStudies.exe',
      icon: <BookOpen size={20} color="var(--pastel-lavender-text)" />,
      badge: 'Deep Dive',
      flower: 'lavender'
    },
    {
      id: 'skills',
      name: 'Skills.exe',
      icon: <Cpu size={20} color="var(--pastel-peach-text)" />,
      badge: 'Tech',
      flower: 'peach'
    },
    {
      id: 'connect',
      name: 'Connect.exe',
      icon: <Mail size={20} color="var(--pastel-pink-text)" />,
      badge: 'Contact',
      flower: 'pink'
    }
  ];

  return (
    <aside className="desktop-dock" aria-label="Desktop applications list">
      {icons.map((item) => {
        const isActive = currentScreen === item.id;
        return (
          <button
            key={item.id}
            className={`desktop-icon-btn ${isActive ? 'active' : ''}`}
            onClick={() => {
              soundFX.playWindowOpen();
              onNavigate(item.id);
            }}
            title={`Open ${item.name}`}
            aria-label={`Open ${item.name}`}
          >
            <div className="icon-box">
              {item.icon}
            </div>
            <span className="icon-label">{item.name}</span>
          </button>
        );
      })}

      <div style={{ height: '1px', width: '50px', background: 'rgba(52, 51, 59, 0.15)', margin: '4px 0' }} />

      {/* Mini Terminal Launcher */}
      <button
        className="desktop-icon-btn"
        onClick={() => {
          soundFX.playClick();
          if (onOpenTerminal) onOpenTerminal();
        }}
        title="Open Interactive Retro Terminal"
        aria-label="Open Interactive Retro Terminal"
      >
        <div className="icon-box" style={{ background: 'var(--surface-inset)' }}>
          <Terminal size={19} color="var(--charcoal)" />
        </div>
        <span className="icon-label">Terminal.sh</span>
      </button>

      {/* Direct GitHub Profile Link */}
      <a
        href="https://github.com/bhuvishag07"
        target="_blank"
        rel="noopener noreferrer"
        className="desktop-icon-btn"
        title="Open Bhuvisha's GitHub Profile in new tab"
        style={{ textDecoration: 'none' }}
      >
        <div className="icon-box" style={{ background: 'var(--surface-cream)' }}>
          <ExternalLink size={19} color="var(--pastel-blue-text)" />
        </div>
        <span className="icon-label">GitHub.url</span>
      </a>

      {/* Tiny decorative pastel flower accent */}
      <div style={{ marginTop: '4px', opacity: 0.85 }}>
        <PixelFlower variant="pink" size={13} />
      </div>
    </aside>
  );
}
