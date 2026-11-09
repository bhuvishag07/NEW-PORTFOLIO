import React, { useState } from 'react';
import { Mail, Copy, Check, ExternalLink, Send, Terminal, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../../data/aboutData';
import { soundFX } from '../../utils/soundEffects';
import PixelFlower from '../Common/PixelFlower';

const GithubIcon = ({ size = 20, color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = ({ size = 20, color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function Connect() {
  const [copiedType, setCopiedType] = useState(null);
  const [inquiryType, setInquiryType] = useState('internship');

  const copyToClipboard = (text, type) => {
    soundFX.playSuccess();
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => {
      setCopiedType(null);
    }, 2500);
  };

  const getMailtoUrl = () => {
    let subject = 'Inquiry via Bhuvisha.exe: General Collaboration';
    if (inquiryType === 'internship') subject = 'Internship Opportunity for Bhuvisha Gohil';
    if (inquiryType === 'freelance') subject = 'Freelance Web / Software Development Project';
    if (inquiryType === 'hackathon') subject = 'Hackathon / Project Collaboration Invitation';

    const body = `Hi Bhuvisha,%0D%0A%0D%0AI came across your portfolio (Bhuvisha.exe) and would like to connect regarding:%0D%0A%0D%0A[Details of project / role / opportunity]%0D%0A%0D%0ABest regards,%0D%0A[Your Name]`;
    return `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(subject)}&body=${body}`;
  };

  return (
    <div className="connect-screen" style={{ display: 'flex', flexDirection: 'column', gap: '26px' }}>
      
      {/* Header Banner */}
      <section className="retro-card" aria-labelledby="connect-heading">
        <div className="card-header-bar" style={{ background: 'var(--pastel-pink)', color: 'var(--charcoal)', borderBottom: 'var(--retro-border)' }}>
          <div className="card-title-group">
            <PixelFlower variant="pink" size={20} />
            <Mail size={15} color="var(--charcoal)" />
            <h1 id="connect-heading" style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: '0.9rem', margin: 0, color: 'var(--charcoal)' }}>
              Dispatch & Transmission Station
            </h1>
          </div>
          <span
            style={{
              fontFamily: 'var(--font-retro)',
              fontSize: '0.62rem',
              background: 'rgba(255, 255, 255, 0.7)',
              color: 'var(--charcoal)',
              padding: '2px 7px',
              borderRadius: 'var(--radius-xs)',
              border: '1px solid var(--charcoal)'
            }}
          >
            CONNECT.EXE
          </span>
        </div>

        <div className="card-body" style={{ padding: '24px 28px' }}>
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.4rem', fontWeight: 700, color: 'var(--charcoal)', marginBottom: '10px' }}>
            Let's Build Something Impactful Together
          </h2>
          <p style={{ fontSize: '0.94rem', color: 'var(--text-muted)', maxWidth: '720px', lineHeight: '1.65', margin: 0 }}>
            Whether you are a recruiter looking for a dedicated <strong>software development or AI intern</strong>, a founder or business needing a responsive <strong>freelance website or application</strong>, or a fellow builder exploring a hackathon collaboration — I'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Primary Verified Channels Deck */}
      <section
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '18px'
        }}
        aria-label="Verified contact methods"
      >
        {/* Email Card */}
        <div className="retro-card" style={{ padding: '20px', display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
            <div style={{ background: 'var(--pastel-blue-soft)', padding: '9px', borderRadius: 'var(--radius-sm)', border: '1.5px solid var(--pastel-blue)' }}>
              <Mail size={20} color="var(--pastel-blue-text)" />
            </div>
            <div>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: '0.95rem', color: 'var(--charcoal)', margin: 0 }}>
                Direct Email
              </h3>
              <span style={{ fontSize: '0.76rem', color: 'var(--text-muted)' }}>Verified Inbox</span>
            </div>
          </div>

          <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.86rem', color: 'var(--pastel-blue-text)', fontWeight: 600, wordBreak: 'break-all', marginBottom: '16px' }}>
            {PERSONAL_INFO.email}
          </p>

          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginTop: 'auto' }}>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="retro-btn retro-btn-primary retro-btn-sm"
              onClick={() => soundFX.playClick()}
            >
              <Send size={12} />
              <span>Send Email</span>
            </a>

            <button
              className="retro-btn retro-btn-ghost retro-btn-sm"
              onClick={() => copyToClipboard(PERSONAL_INFO.email, 'email')}
            >
              {copiedType === 'email' ? <Check size={12} color="var(--pastel-sage-text)" /> : <Copy size={12} />}
              <span>{copiedType === 'email' ? 'Copied!' : 'Copy Address'}</span>
            </button>
          </div>
        </div>

        {/* GitHub Card */}
        <div className="retro-card" style={{ padding: '20px', display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
            <div style={{ background: 'var(--pastel-sage-soft)', padding: '9px', borderRadius: 'var(--radius-sm)', border: '1.5px solid var(--pastel-sage)' }}>
              <GithubIcon size={20} color="var(--pastel-sage-text)" />
            </div>
            <div>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: '0.95rem', color: 'var(--charcoal)', margin: 0 }}>
                GitHub Profile
              </h3>
              <span style={{ fontSize: '0.76rem', color: 'var(--text-muted)' }}>57+ Public Repositories</span>
            </div>
          </div>

          <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.86rem', color: 'var(--charcoal)', marginBottom: '16px' }}>
            github.com/{PERSONAL_INFO.handle}
          </p>

          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginTop: 'auto' }}>
            <a
              href={PERSONAL_INFO.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="retro-btn retro-btn-mint retro-btn-sm"
              onClick={() => soundFX.playClick()}
            >
              <ExternalLink size={12} />
              <span>Visit GitHub ↗</span>
            </a>

            <button
              className="retro-btn retro-btn-ghost retro-btn-sm"
              onClick={() => copyToClipboard(PERSONAL_INFO.githubUrl, 'github')}
            >
              {copiedType === 'github' ? <Check size={12} color="var(--pastel-sage-text)" /> : <Copy size={12} />}
              <span>{copiedType === 'github' ? 'Copied!' : 'Copy Link'}</span>
            </button>
          </div>
        </div>

        {/* LinkedIn Card */}
        <div className="retro-card" style={{ padding: '20px', display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
            <div style={{ background: 'var(--pastel-lavender-soft)', padding: '9px', borderRadius: 'var(--radius-sm)', border: '1.5px solid var(--pastel-lavender)' }}>
              <LinkedinIcon size={20} color="var(--pastel-lavender-text)" />
            </div>
            <div>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: '0.95rem', color: 'var(--charcoal)', margin: 0 }}>
                LinkedIn Network
              </h3>
              <span style={{ fontSize: '0.76rem', color: 'var(--text-muted)' }}>Professional Profile</span>
            </div>
          </div>

          <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.86rem', color: 'var(--charcoal)', marginBottom: '16px' }}>
            linkedin.com/in/bhuvisha-gohil
          </p>

          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginTop: 'auto' }}>
            <a
              href={PERSONAL_INFO.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="retro-btn retro-btn-lavender retro-btn-sm"
              onClick={() => soundFX.playClick()}
            >
              <ExternalLink size={12} />
              <span>View Profile ↗</span>
            </a>

            <button
              className="retro-btn retro-btn-ghost retro-btn-sm"
              onClick={() => copyToClipboard(PERSONAL_INFO.linkedinUrl, 'linkedin')}
            >
              {copiedType === 'linkedin' ? <Check size={12} color="var(--pastel-sage-text)" /> : <Copy size={12} />}
              <span>{copiedType === 'linkedin' ? 'Copied!' : 'Copy Link'}</span>
            </button>
          </div>
        </div>
      </section>

      {/* Quick Dispatch Helper (Pre-fills Real Mailto Link) */}
      <section className="retro-card" style={{ padding: '22px 24px', background: 'var(--surface-cream)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
          <PixelFlower variant="peach" size={20} />
          <Terminal size={17} color="var(--pastel-peach-text)" />
          <h2 style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: '1rem', color: 'var(--charcoal)', margin: 0 }}>
            Quick Dispatch Transmitter
          </h2>
          <span
            style={{
              fontFamily: 'var(--font-retro)',
              fontSize: '0.62rem',
              background: 'var(--pastel-peach-soft)',
              border: '1px solid var(--pastel-peach-border)',
              color: 'var(--pastel-peach-text)',
              padding: '2px 6px',
              borderRadius: 'var(--radius-xs)'
            }}
          >
            TEMPLATE HELPER
          </span>
        </div>

        <p style={{ fontSize: '0.86rem', color: 'var(--text-muted)', marginBottom: '16px' }}>
          Choose your collaboration type to instantly format and launch an email draft in your email application:
        </p>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '18px' }}>
          {[
            { id: 'internship', label: 'Software / AI Internship' },
            { id: 'freelance', label: 'Freelance Web / App Project' },
            { id: 'hackathon', label: 'Hackathon / Project Collab' }
          ].map((type) => (
            <button
              key={type.id}
              className={`retro-btn retro-btn-sm ${inquiryType === type.id ? 'retro-btn-primary' : 'retro-btn-ghost'}`}
              onClick={() => {
                soundFX.playClick();
                setInquiryType(type.id);
              }}
              style={{ borderRadius: 'var(--radius-xs)', fontWeight: inquiryType === type.id ? 700 : 500 }}
            >
              <span>{type.label}</span>
            </button>
          ))}
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '14px', flexWrap: 'wrap' }}>
          <a
            href={getMailtoUrl()}
            className="retro-btn retro-btn-accent"
            onClick={() => soundFX.playSuccess()}
          >
            <Send size={14} />
            <span>Open Email Draft with Template</span>
          </a>

          <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
            Destination: {PERSONAL_INFO.email}
          </span>
        </div>
      </section>

      {/* Availability Status Badge */}
      <div
        style={{
          background: 'var(--pastel-sage-soft)',
          border: 'var(--retro-border)',
          borderColor: 'var(--pastel-sage-border)',
          padding: '14px 18px',
          borderRadius: 'var(--radius-sm)',
          boxShadow: 'var(--retro-shadow-sm)',
          display: 'flex',
          alignItems: 'center',
          gap: '12px'
        }}
      >
        <Sparkles size={20} color="var(--pastel-sage-text)" style={{ flexShrink: 0 }} />
        <div style={{ fontSize: '0.86rem', color: 'var(--charcoal)' }}>
          <strong>Current Availability:</strong> Actively reviewing opportunities for summer internships, technical student projects, and freelance client engagements. Response time is typically within 24 hours.
        </div>
      </div>

    </div>
  );
}
