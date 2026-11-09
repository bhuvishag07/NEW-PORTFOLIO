import React from 'react';
import { User, Terminal, Compass, Award, CheckCircle2 } from 'lucide-react';
import { HIGHLIGHTED_EXPERIENCES, WORKSPACE_SPECS, LEARNING_PHILOSOPHY } from '../../data/aboutData';
import { CERTIFICATIONS } from '../../data/skillsData';
import { soundFX } from '../../utils/soundEffects';
import PixelFlower from '../Common/PixelFlower';

export default function About({ onNavigate }) {
  return (
    <div className="about-screen" style={{ display: 'flex', flexDirection: 'column', gap: '26px' }}>
      
      {/* Bio Header Card */}
      <section className="retro-card" aria-labelledby="about-heading">
        <div className="card-header-bar" style={{ background: 'var(--pastel-pink)' }}>
          <div className="card-title-group">
            <PixelFlower variant="pink" size={20} />
            <User size={15} color="var(--charcoal)" />
            <h1 id="about-heading" style={{ fontSize: '0.86rem', margin: 0, fontFamily: 'var(--font-retro)' }}>
              ABOUT_ME.TXT — BHUVISHA GOHIL
            </h1>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ fontFamily: 'var(--font-retro)', fontSize: '0.62rem', color: 'var(--charcoal)' }}>STATUS: 2ND YEAR CSE</span>
            <PixelFlower variant="lavender" size={20} />
          </div>
        </div>

        <div className="card-body" style={{ padding: '24px' }}>
          <div>
            <h2
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '1.25rem',
                fontWeight: 700,
                color: 'var(--charcoal)',
                marginBottom: '14px',
                lineHeight: '1.4'
              }}
            >
              Second-Year B.Tech Student, Problem Solver & Pragmatic Builder
            </h2>

            <p style={{ fontSize: '0.96rem', color: 'var(--charcoal)', lineHeight: '1.7', marginBottom: '14px' }}>
              I am a second-year <strong>B.Tech Computer Science and Engineering</strong> student at <strong>ITM Skills University</strong> (part of the <em>Demis Hassabis Cohort</em>, Academic Year 2025–29). My focus centers on <strong>software development, full-stack web applications, AI systems, and data-driven problem solving</strong>.
            </p>

            <p style={{ fontSize: '0.96rem', color: 'var(--text-muted)', lineHeight: '1.7', marginBottom: '14px' }}>
              Rather than treating code as abstract textbook exercises, I learn by building tangible systems. Over the course of my degree and internships, I've engineered everything from low-level C++ console routing algorithms (SmartRide) and object-oriented Java utilities to full-stack React dashboards paired with Python/FastAPI and Scikit-learn machine learning backends (Sentinel).
            </p>

            <p style={{ fontSize: '0.96rem', color: 'var(--text-muted)', lineHeight: '1.7' }}>
              I present myself as a software developer and builder who delivers working code. My goal is to secure challenging software development and AI-focused internships, as well as collaborate with freelance clients seeking reliable, responsive web and application development.
            </p>
          </div>
        </div>
      </section>

      {/* System Specs & Environment */}
      <section aria-labelledby="specs-heading">
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
          <PixelFlower variant="blue" size={22} />
          <Terminal size={15} color="var(--pastel-blue-text)" />
          <h2 id="specs-heading" style={{ fontFamily: 'var(--font-heading)', fontSize: '1rem', color: 'var(--charcoal)', margin: 0 }}>
            Bhuvisha.exe — System Specs & Environment
          </h2>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '10px'
          }}
        >
          {WORKSPACE_SPECS.map((spec) => (
            <div
              key={spec.label}
              style={{
                background: 'var(--surface-cream)',
                border: 'var(--retro-border)',
                boxShadow: '1px 1px 0px var(--charcoal)',
                padding: '10px 14px',
                borderRadius: 'var(--radius-xs)',
                display: 'flex',
                flexDirection: 'column',
                gap: '3px'
              }}
            >
              <span style={{ fontFamily: 'var(--font-retro)', fontSize: '0.62rem', color: 'var(--pastel-blue-text)' }}>
                {spec.label}
              </span>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.82rem', color: 'var(--charcoal)', fontWeight: 600 }}>
                {spec.value}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* How I Learn and Build Through Projects */}
      <section aria-labelledby="philosophy-heading">
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
          <PixelFlower variant="sage" size={22} />
          <Compass size={15} color="var(--pastel-sage-text)" />
          <h2 id="philosophy-heading" style={{ fontFamily: 'var(--font-heading)', fontSize: '1rem', color: 'var(--charcoal)', margin: 0 }}>
            How I Build & Learn
          </h2>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '14px'
          }}
        >
          {LEARNING_PHILOSOPHY.map((item, idx) => {
            const flowerColors = ['pink', 'lavender', 'sage'];
            return (
              <div
                key={item.step}
                className="retro-card"
                style={{ padding: '16px' }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.88rem',
                      fontWeight: 700,
                      color: 'var(--pastel-blue-text)',
                      background: 'var(--pastel-blue-soft)',
                      padding: '2px 8px',
                      borderRadius: 'var(--radius-xs)',
                      border: '1px solid var(--pastel-blue-border)'
                    }}
                  >
                    PHASE_{item.step}
                  </span>
                  <PixelFlower variant={flowerColors[idx % flowerColors.length]} size={18} />
                </div>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '0.92rem', marginBottom: '6px', color: 'var(--charcoal)' }}>
                  {item.title}
                </h3>
                <p style={{ fontSize: '0.86rem', color: 'var(--text-muted)', lineHeight: '1.55' }}>
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Real Academic & Hackathon Milestones */}
      <section aria-labelledby="experience-heading">
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
          <PixelFlower variant="lavender" size={22} />
          <Award size={15} color="var(--pastel-lavender-text)" />
          <h2 id="experience-heading" style={{ fontFamily: 'var(--font-heading)', fontSize: '1rem', color: 'var(--charcoal)', margin: 0 }}>
            Verified Experiences & Technical Activities
          </h2>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {HIGHLIGHTED_EXPERIENCES.map((exp) => (
            <div
              key={exp.organization}
              className="retro-card"
              style={{ padding: '16px' }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '6px', marginBottom: '6px' }}>
                <div>
                  <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '0.92rem', color: 'var(--charcoal)' }}>
                    {exp.role} — <span style={{ color: 'var(--pastel-blue-text)' }}>{exp.organization}</span>
                  </h3>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                    {exp.period}
                  </span>
                </div>
              </div>

              <p style={{ fontSize: '0.88rem', color: 'var(--charcoal)', lineHeight: '1.55', marginBottom: '10px' }}>
                {exp.summary}
              </p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px' }}>
                {exp.tags.map((tag) => (
                  <span key={tag} className="tech-tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Certifications Quick View */}
      <section aria-labelledby="certs-heading">
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
          <PixelFlower variant="sage" size={22} />
          <CheckCircle2 size={15} color="var(--pastel-sage-text)" />
          <h2 id="certs-heading" style={{ fontFamily: 'var(--font-heading)', fontSize: '1rem', color: 'var(--charcoal)', margin: 0 }}>
            Verified Certifications (HackerRank & Foundations)
          </h2>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '10px'
          }}
        >
          {CERTIFICATIONS.map((cert) => (
            <div
              key={cert.id}
              style={{
                background: 'var(--surface-cream)',
                border: 'var(--retro-border)',
                padding: '10px 12px',
                borderRadius: 'var(--radius-xs)',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                boxShadow: '1px 1px 0px var(--charcoal)'
              }}
            >
              <CheckCircle2 size={16} color="var(--pastel-sage-text)" style={{ flexShrink: 0 }} />
              <div>
                <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: '0.82rem', color: 'var(--charcoal)' }}>
                  {cert.title}
                </div>
                <div style={{ fontSize: '0.74rem', color: 'var(--text-muted)' }}>
                  {cert.issuer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom Action */}
      <div style={{ display: 'flex', justifyContent: 'center', paddingTop: '8px' }}>
        <button
          className="retro-btn retro-btn-primary"
          onClick={() => {
            soundFX.playWindowOpen();
            onNavigate('projects');
          }}
        >
          <PixelFlower variant="pink" size={11} />
          <span>See Projects In Action</span>
        </button>
      </div>

    </div>
  );
}
