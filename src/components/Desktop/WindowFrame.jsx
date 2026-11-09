import React, { useState } from 'react';
import { Minus, Square, X, ShieldCheck } from 'lucide-react';
import { soundFX } from '../../utils/soundEffects';
import PixelFlower from '../Common/PixelFlower';

export default function WindowFrame({ currentScreen, onNavigate, children }) {
  const [isMaximized, setIsMaximized] = useState(false);

  const screenInfo = {
    home: { title: 'Home', flower: 'blue' },
    about: { title: 'About', flower: 'pink' },
    projects: { title: 'Projects', flower: 'sage' },
    skills: { title: 'Skills', flower: 'peach' },
    connect: { title: 'Contact', flower: 'pink' },
  };

  const active = screenInfo[currentScreen] || screenInfo.home;

  const handleMinimize = () => {
    soundFX.playClick();
  };

  const handleMaximize = () => {
    soundFX.playClick();
    setIsMaximized(!isMaximized);
  };

  const handleClose = () => {
    soundFX.playClick();
    onNavigate('home');
  };

  return (
    <main
      className={`retro-window ${isMaximized ? 'window-maximized' : ''}`}
      role="region"
      aria-label="Active Portfolio Window"
      style={isMaximized ? { position: 'fixed', inset: '44px 12px 12px 12px', zIndex: 100 } : {}}
    >
      {/* Window Title Bar */}
      <div className="window-titlebar">
        <div className="window-title">
          <PixelFlower variant={active.flower} size={22} />
          <span>Bhuvisha.exe — [{active.title}]</span>
        </div>
        <div className="window-controls">
          <button
            className="window-control-btn"
            onClick={handleMinimize}
            title="Minimize"
            aria-label="Minimize Window"
          >
            <Minus size={12} />
          </button>
          <button
            className="window-control-btn"
            onClick={handleMaximize}
            title={isMaximized ? 'Restore Window Size' : 'Maximize Window'}
            aria-label="Maximize or Restore Window"
          >
            <Square size={10} />
          </button>
          <button
            className="window-control-btn close-btn"
            onClick={handleClose}
            title="Return to Home"
            aria-label="Close current view and return to home"
          >
            <X size={12} />
          </button>
        </div>
      </div>

      {/* Main Window Content */}
      <div className="window-content" id="main-content-scroll">
        {children}
      </div>

      {/* Retro Status Bar */}
      <footer className="window-statusbar">
        <div className="statusbar-left">
          <div className="statusbar-chip">
            <PixelFlower variant="sage" size={18} />
            <span style={{ color: 'var(--pastel-sage-text)', fontWeight: 600 }}>SYSTEM: READY</span>
          </div>
          <div className="statusbar-chip">
            <span style={{ color: 'var(--text-muted)' }}>OS: Bhuvisha.exe</span>
          </div>
        </div>

        <div className="statusbar-right">
          <div className="statusbar-chip" title="Data is verified against authentic GitHub source code">
            <ShieldCheck size={14} color="var(--pastel-sage-text)" />
            <span>GitHub Verified</span>
          </div>
          <div className="statusbar-chip">
            <PixelFlower variant="lavender" size={18} />
            <span>ITM Skills University</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
