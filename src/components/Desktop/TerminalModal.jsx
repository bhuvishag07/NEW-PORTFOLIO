import React, { useState, useRef, useEffect } from 'react';
import { Terminal, X } from 'lucide-react';
import { VERIFIED_PROJECTS } from '../../data/projectsData';
import { PERSONAL_INFO } from '../../data/aboutData';
import { soundFX } from '../../utils/soundEffects';
import PixelFlower from '../Common/PixelFlower';

export default function TerminalModal({ isOpen, onClose }) {
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState([
    { type: 'sys', text: 'BhuvishaOS v2.0.4-pastel (x86_64-apple-darwin)' },
    { type: 'sys', text: 'Type "help" to see available commands or "projects" to view repositories.' }
  ]);
  const inputRef = useRef(null);
  const bottomRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  if (!isOpen) return null;

  const handleCommand = (e) => {
    if (e.key === 'Enter') {
      const cmd = inputVal.trim().toLowerCase();
      const newHistory = [...history, { type: 'cmd', text: `> ${inputVal}` }];

      soundFX.playClick();

      switch (cmd) {
        case 'help':
          newHistory.push({
            type: 'out',
            text: 'Available commands:\n  whoami      - Display user profile summary\n  projects    - List all verified GitHub repositories\n  sentinel    - Summary of flagship AI Threat Analysis project\n  skills      - Technical skills overview\n  contact     - Display verified contact channels\n  clear       - Clear terminal history\n  exit        - Close terminal window'
          });
          break;
        case 'whoami':
          newHistory.push({
            type: 'out',
            text: `${PERSONAL_INFO.name} (${PERSONAL_INFO.handle})\nSecond-Year B.Tech CSE @ ITM Skills University\nCohort: Demis Hassabis\nFocus: Web Development, AI, and Data-Driven Applications`
          });
          break;
        case 'projects':
          newHistory.push({
            type: 'out',
            text: VERIFIED_PROJECTS.map((p, i) => `${i + 1}. [${p.title}] - ${p.technologies.slice(0, 3).join(', ')} (${p.status})`).join('\n')
          });
          break;
        case 'sentinel':
          newHistory.push({
            type: 'out',
            text: 'SENTINEL: AI-Powered Intelligence & Threat Analysis Dashboard\nStack: React, FastAPI, Python, Pandas, Scikit-learn, GTD Dataset\nRepo: https://github.com/bhuvishag07/SENTINEL-'
          });
          break;
        case 'skills':
          newHistory.push({
            type: 'out',
            text: 'Languages: Python, C++, C, Java, JavaScript, SQL\nFrontend: React, Vite, HTML5, CSS3, Vanilla CSS\nBackend: FastAPI, Node.js, Express, REST APIs\nDatabases: MongoDB, PostgreSQL, Firebase\nTools: Git, GitHub, VS Code, Figma, Jupyter'
          });
          break;
        case 'contact':
          newHistory.push({
            type: 'out',
            text: `Email: ${PERSONAL_INFO.email}\nGitHub: ${PERSONAL_INFO.githubUrl}\nLinkedIn: ${PERSONAL_INFO.linkedinUrl}`
          });
          break;
        case 'sudo':
          newHistory.push({
            type: 'out',
            text: 'User is not in the sudoers file. This incident will be reported to Demis Hassabis.'
          });
          break;
        case 'clear':
          setHistory([]);
          setInputVal('');
          return;
        case 'exit':
          onClose();
          return;
        case '':
          break;
        default:
          newHistory.push({
            type: 'err',
            text: `Command not found: "${cmd}". Type "help" for a list of valid commands.`
          });
          break;
      }

      setHistory(newHistory);
      setInputVal('');
    }
  };

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: 'rgba(52, 51, 59, 0.55)',
        backdropFilter: 'blur(3px)',
        zIndex: 200,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px'
      }}
      onClick={onClose}
    >
      <div
        className="retro-window"
        style={{
          width: '100%',
          maxWidth: '660px',
          height: '440px',
          boxShadow: 'var(--retro-shadow-lg)',
          border: 'var(--retro-border-thick)',
          borderRadius: 'var(--radius-md)'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="window-titlebar" style={{ background: 'var(--charcoal)', color: '#ffffff' }}>
          <div className="window-title" style={{ color: '#ffffff', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <PixelFlower variant="sage" size={11} />
            <Terminal size={14} color="var(--pastel-sage)" />
            <span style={{ fontFamily: 'var(--font-retro)', fontSize: '0.74rem', letterSpacing: '0.5px' }}>
              TERMINAL.SH — BHUVISHA CLI
            </span>
          </div>
          <button
            className="window-control-btn close-btn"
            onClick={onClose}
            aria-label="Close terminal"
            style={{ background: 'var(--pastel-pink)', borderColor: 'var(--charcoal)' }}
          >
            <X size={12} color="var(--charcoal)" />
          </button>
        </div>

        <div
          style={{
            flex: 1,
            background: '#24232B',
            color: 'var(--pastel-sage)',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.82rem',
            padding: '18px',
            overflowY: 'auto',
            display: 'flex',
            flexDirection: 'column',
            gap: '8px',
            lineHeight: '1.5'
          }}
          onClick={() => inputRef.current?.focus()}
        >
          {history.map((h, i) => (
            <div
              key={i}
              style={{
                color:
                  h.type === 'err'
                    ? 'var(--pastel-pink)'
                    : h.type === 'cmd'
                    ? 'var(--pastel-peach)'
                    : h.type === 'sys'
                    ? 'var(--pastel-blue)'
                    : 'var(--pastel-sage)',
                whiteSpace: 'pre-wrap'
              }}
            >
              {h.text}
            </div>
          ))}

          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <span style={{ color: 'var(--pastel-peach)', fontWeight: 600 }}>bhuvisha@mac:~$&nbsp;</span>
            <input
              ref={inputRef}
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              onKeyDown={handleCommand}
              style={{
                flex: 1,
                background: 'transparent',
                border: 'none',
                outline: 'none',
                color: '#ffffff',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.82rem'
              }}
              aria-label="Terminal command input"
            />
          </div>
          <div ref={bottomRef} />
        </div>
      </div>
    </div>
  );
}
