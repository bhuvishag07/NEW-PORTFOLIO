import React, { useState, useEffect } from 'react';
import TopBar from './components/Desktop/TopBar';
import WindowFrame from './components/Desktop/WindowFrame';
import TerminalModal from './components/Desktop/TerminalModal';
import ProjectDetailModal from './components/Desktop/ProjectDetailModal';
import Home from './components/Screens/Home';
import About from './components/Screens/About';
import ProjectArchive from './components/Screens/ProjectArchive';
import Skills from './components/Screens/Skills';
import Connect from './components/Screens/Connect';
import { PERSONAL_INFO } from './data/aboutData';
import { soundFX } from './utils/soundEffects';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState('home');
  const [selectedProject, setSelectedProject] = useState(null);
  const [theme, setTheme] = useState('blue');
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);

  // Sync theme attribute with DOM root
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  // Screen navigation helper
  const navigateToScreen = (screenId) => {
    setCurrentScreen(screenId);
    // Scroll window content to top
    const scrollEl = document.getElementById('main-content-scroll');
    if (scrollEl) {
      scrollEl.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Keyboard navigation shortcuts
  useEffect(() => {
    const handleKeyDown = (e) => {
      // Global hotkey to open Terminal (Cmd+K or Ctrl+K)
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        soundFX.playClick();
        setIsTerminalOpen((prev) => !prev);
      }

      // Alt + 1-5 for screen switching
      if (e.altKey) {
        const screens = ['home', 'about', 'projects', 'skills', 'connect'];
        const num = parseInt(e.key, 10);
        if (num >= 1 && num <= 5) {
          e.preventDefault();
          soundFX.playTabSwitch();
          navigateToScreen(screens[num - 1]);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="desktop-shell" data-theme={theme}>
      {/* Single, Clear Top Navigation Bar */}
      <TopBar
        currentScreen={currentScreen}
        onNavigate={navigateToScreen}
        theme={theme}
        onThemeChange={setTheme}
        onOpenTerminal={() => setIsTerminalOpen(true)}
      />

      {/* Main Desktop Workspace with Centered Window */}
      <div className="desktop-workspace">
        {/* Primary Retro Application Window */}
        <WindowFrame
          currentScreen={currentScreen}
          onNavigate={navigateToScreen}
        >
          {currentScreen === 'home' && (
            <Home
              onNavigate={navigateToScreen}
              onOpenProject={(proj) => setSelectedProject(proj)}
            />
          )}

          {currentScreen === 'about' && (
            <About
              onNavigate={navigateToScreen}
            />
          )}

          {currentScreen === 'projects' && (
            <ProjectArchive
              onOpenProject={(proj) => setSelectedProject(proj)}
            />
          )}

          {currentScreen === 'skills' && (
            <Skills />
          )}

          {currentScreen === 'connect' && (
            <Connect />
          )}
        </WindowFrame>
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <ProjectDetailModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}

      {/* Interactive Retro Terminal Modal */}
      <TerminalModal
        isOpen={isTerminalOpen}
        onClose={() => setIsTerminalOpen(false)}
        onNavigate={navigateToScreen}
      />

      {/* Desktop Bottom Taskbar / Footer */}
      <footer className="desktop-footer" role="contentinfo">
        <div>
          <span>Bhuvisha.exe © 2026</span> •{' '}
          <span style={{ opacity: 0.85 }}>ITM Skills University (Demis Hassabis Cohort)</span>
        </div>

        <div style={{ display: 'flex', gap: '14px', alignItems: 'center' }}>
          <span style={{ opacity: 0.8 }}>
            Tip: Press <kbd style={{ background: 'rgba(255,255,255,0.2)', padding: '1px 4px', borderRadius: '2px' }}>Cmd+K</kbd> for Terminal
          </span>
          <a
            href={PERSONAL_INFO.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'var(--charcoal)', textDecoration: 'none', fontWeight: 600 }}
          >
            GitHub: {PERSONAL_INFO.handle} ↗
          </a>
        </div>
      </footer>
    </div>
  );
}
