import React, { useState } from 'react';
import { Volume2, VolumeX, Terminal as TerminalIcon } from 'lucide-react';
import { soundFX } from '../../utils/soundEffects';
import PixelFlower from '../Common/PixelFlower';

export default function TopBar({ currentScreen, onNavigate, theme, onThemeChange, onOpenTerminal }) {
  const [isMuted, setIsMuted] = useState(soundFX.isMuted);

  const handleAudioToggle = () => {
    const muted = soundFX.toggleMute();
    setIsMuted(muted);
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'connect', label: 'Contact' },
  ];

  return (
    <header className="top-menubar" role="banner" aria-label="Primary Navigation Bar">
      <div className="top-menubar-left">
        <button
          className="brand-badge brand-badge-btn"
          onClick={() => {
            soundFX.playClick();
            onNavigate('home');
          }}
          title="Return to Home"
          aria-label="Bhuvisha.exe Home"
        >
          <PixelFlower variant="pink" size={20} />
          <span>Bhuvisha.exe</span>
        </button>

        <nav className="top-nav-bar" aria-label="Main Navigation">
          {navItems.map((item) => {
            const isActive = currentScreen === item.id;
            return (
              <button
                key={item.id}
                className={`top-nav-link ${isActive ? 'active' : ''}`}
                onClick={() => {
                  soundFX.playTabSwitch();
                  onNavigate(item.id);
                }}
                aria-current={isActive ? 'page' : undefined}
              >
                {item.label}
              </button>
            );
          })}
        </nav>
      </div>

      <div className="top-menubar-right">
        {/* Terminal quick-launch button */}
        {onOpenTerminal && (
          <button
            onClick={() => {
              soundFX.playClick();
              onOpenTerminal();
            }}
            className="top-shortcut-btn"
            title="Open Interactive Terminal (Cmd+K)"
            aria-label="Open Interactive Terminal"
            style={{ display: 'flex', alignItems: 'center', gap: '6px' }}
          >
            <TerminalIcon size={14} color="var(--charcoal)" />
            <span className="terminal-shortcut-label">Terminal</span>
          </button>
        )}

        {/* Theme Selector */}
        <div className="theme-selector-group" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <label htmlFor="theme-select" style={{ fontSize: '0.78rem', fontWeight: 600, color: 'var(--charcoal)' }}>
            Theme:
          </label>
          <select
            id="theme-select"
            value={theme}
            onChange={(e) => {
              soundFX.playClick();
              onThemeChange(e.target.value);
            }}
            className="theme-select-dropdown"
            aria-label="Select visual theme"
          >
            <option value="blue">Powder Blue</option>
            <option value="pink">Dusty Pink</option>
            <option value="mint">Sage Mint</option>
            <option value="lavender">Lavender</option>
            <option value="peach">Soft Peach</option>
          </select>
        </div>

        {/* Audio Toggle */}
        <button
          onClick={handleAudioToggle}
          className="top-shortcut-btn"
          title={isMuted ? 'Turn Sound FX On' : 'Turn Sound FX Off'}
          style={{ display: 'flex', alignItems: 'center', gap: '5px' }}
          aria-label={isMuted ? 'Enable Sound FX' : 'Mute Sound FX'}
        >
          {isMuted ? <VolumeX size={14} /> : <Volume2 size={14} style={{ color: '#2b8a3e' }} />}
          <span>{isMuted ? 'SFX: OFF' : 'SFX: ON'}</span>
        </button>
      </div>
    </header>
  );
}
