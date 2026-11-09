import React from 'react';
import { ArrowRight, Terminal, FolderGit2, Cpu, Mail, ExternalLink, ShieldCheck, Info } from 'lucide-react';
import { VERIFIED_PROJECTS } from '../../data/projectsData';
import { soundFX } from '../../utils/soundEffects';
import PixelFlower from '../Common/PixelFlower';
import ProjectPreview from '../Common/ProjectPreview';

export default function Home({ onNavigate, onOpenProject }) {
  const featured = VERIFIED_PROJECTS.filter((p) => p.featured).slice(0, 3);

  return (
    <div className="home-screen" style={{ display: 'flex', flexDirection: 'column', gap: '26px' }}>
      
      {/* Hero Welcome Card */}
      <section
        className="retro-card"
        style={{
          background: 'linear-gradient(135deg, var(--surface-white) 0%, var(--pastel-peach-soft) 100%)',
          borderColor: 'var(--charcoal)',
          position: 'relative'
        }}
        aria-labelledby="hero-title"
      >
        <div className="card-header-bar" style={{ background: 'var(--pastel-blue)' }}>
          <div className="card-title-group">
            <PixelFlower variant="pink" size={20} />
            <Terminal size={15} color="var(--charcoal)" />
            <span style={{ fontFamily: 'var(--font-retro)', fontSize: '0.72rem' }}>WELCOME://bhuvisha_intro.exe</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ fontFamily: 'var(--font-retro)', fontSize: '0.62rem', color: 'var(--charcoal)' }}>ITM SKILLS UNIVERSITY</span>
            <PixelFlower variant="sage" size={20} />
          </div>
        </div>

        <div className="card-body" style={{ padding: '28px 24px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: '24px', alignItems: 'center' }}>
            <div>
              {/* Cohort Pill with Visible Pixel Flower */}
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  background: 'var(--pastel-pink-soft)',
                  border: '1.5px solid var(--pastel-pink-border)',
                  padding: '4px 12px',
                  borderRadius: 'var(--radius-pill)',
                  fontSize: '0.78rem',
                  fontWeight: 600,
                  color: 'var(--pastel-pink-text)',
                  marginBottom: '14px'
                }}
              >
                <PixelFlower variant="pink" size={18} />
                <span>Second-Year B.Tech CSE • Demis Hassabis Cohort</span>
              </div>

              {/* Heading with Intentional Decorative Flowers */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
                <h1
                  id="hero-title"
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: 'clamp(1.4rem, 3.4vw, 2.05rem)',
                    fontWeight: 700,
                    lineHeight: '1.3',
                    color: 'var(--charcoal)',
                    margin: 0
                  }}
                >
                  Hi, I'm Bhuvisha.
                </h1>
                <PixelFlower variant="peach" size={24} />
              </div>

              {/* Natural, Personal Introduction */}
              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '1.02rem',
                  color: 'var(--charcoal)',
                  maxWidth: '680px',
                  marginBottom: '22px',
                  lineHeight: '1.65'
                }}
              >
                I am a Computer Science student who builds software projects and explores web development, AI, and data-driven applications. I enjoy turning practical ideas into working code and learning through every challenge.
              </p>

              {/* Action Buttons */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', alignItems: 'center' }}>
                <button
                  className="retro-btn retro-btn-primary"
                  onClick={() => {
                    soundFX.playWindowOpen();
                    onNavigate('projects');
                  }}
                >
                  <FolderGit2 size={15} />
                  <span>Explore Projects ({VERIFIED_PROJECTS.length})</span>
                </button>

                <button
                  className="retro-btn retro-btn-accent"
                  onClick={() => {
                    soundFX.playTabSwitch();
                    onNavigate('skills');
                  }}
                >
                  <Cpu size={15} />
                  <span>View Skills & Tech Stack</span>
                </button>

                <button
                  className="retro-btn retro-btn-ghost"
                  onClick={() => {
                    soundFX.playTabSwitch();
                    onNavigate('connect');
                  }}
                >
                  <Mail size={15} />
                  <span>Get in Touch</span>
                </button>
              </div>
            </div>

            {/* Retro Computer Graphic / Avatar Widget */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '8px',
                padding: '16px',
                background: 'var(--surface-cream)',
                border: 'var(--retro-border)',
                boxShadow: 'var(--retro-shadow-sm)',
                borderRadius: 'var(--radius-sm)'
              }}
              className="retro-avatar-box"
            >
              <div
                style={{
                  width: '90px',
                  height: '80px',
                  background: 'var(--charcoal)',
                  border: '1.5px solid var(--charcoal)',
                  borderRadius: 'var(--radius-xs)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexDirection: 'column',
                  gap: '4px',
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                <div style={{ color: 'var(--pastel-sage)', fontFamily: 'var(--font-mono)', fontSize: '0.74rem' }}>
                  &gt; bg_07
                </div>
                <div style={{ color: 'var(--pastel-pink)', fontFamily: 'var(--font-retro)', fontSize: '0.58rem' }}>
                  STUDENT
                </div>
                {/* CRT Scanline effect */}
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(rgba(255, 255, 255, 0) 50%, rgba(0, 0, 0, 0.22) 50%)',
                    backgroundSize: '100% 4px',
                    pointerEvents: 'none'
                  }}
                />
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <PixelFlower variant="pink" size={18} />
                <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: '0.82rem', color: 'var(--charcoal)' }}>
                  Bhuvisha Gohil
                </span>
              </div>

              <span
                style={{
                  fontFamily: 'var(--font-body)',
                  fontWeight: 600,
                  fontSize: '0.72rem',
                  background: 'var(--pastel-sage-soft)',
                  color: 'var(--pastel-sage-text)',
                  padding: '2px 9px',
                  borderRadius: 'var(--radius-pill)',
                  border: '1px solid var(--pastel-sage-border)'
                }}
              >
                Open to Internships
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Highlights / Notes Bar */}
      <section
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '14px'
        }}
        aria-label="Student highlights and focus areas"
      >
        <div className="sticky-note" style={{ background: 'var(--pastel-sage-soft)' }}>
          <div className="sticky-pin" style={{ background: 'var(--pastel-sage)' }} />
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
            <PixelFlower variant="sage" size={20} />
            <span style={{ fontFamily: 'var(--font-retro)', fontSize: '0.66rem', color: 'var(--pastel-sage-text)' }}>
              CURRENT FOCUS: INTERNSHIPS
            </span>
          </div>
          <p style={{ fontSize: '0.88rem', color: 'var(--charcoal)', lineHeight: '1.55' }}>
            Seeking <strong>Software Development & AI</strong> internships to apply practical full-stack engineering, C++ algorithms, and machine learning pipelines.
          </p>
        </div>

        <div className="sticky-note" style={{ background: 'var(--pastel-blue-soft)' }}>
          <div className="sticky-pin" style={{ background: 'var(--pastel-blue)' }} />
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
            <PixelFlower variant="blue" size={20} />
            <span style={{ fontFamily: 'var(--font-retro)', fontSize: '0.66rem', color: 'var(--pastel-blue-text)' }}>
              PUBLIC REPOSITORIES
            </span>
          </div>
          <p style={{ fontSize: '0.88rem', color: 'var(--charcoal)', lineHeight: '1.55' }}>
            Over <strong>57 repositories</strong> maintained on GitHub spanning C++ systems, Python data analytics, React web applications, and backend REST APIs.
          </p>
        </div>

        <div className="sticky-note" style={{ background: 'var(--pastel-peach-soft)' }}>
          <div className="sticky-pin" style={{ background: 'var(--pastel-peach)' }} />
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
            <PixelFlower variant="peach" size={20} />
            <span style={{ fontFamily: 'var(--font-retro)', fontSize: '0.66rem', color: 'var(--pastel-peach-text)' }}>
              LEARNING BY BUILDING
            </span>
          </div>
          <p style={{ fontSize: '0.88rem', color: 'var(--charcoal)', lineHeight: '1.55' }}>
            I learn through construction: turning classroom data structures, algorithms, and mathematical concepts into tested, working applications.
          </p>
        </div>
      </section>

      {/* Selected Featured Projects Preview */}
      <section aria-labelledby="featured-projects-title">
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '16px'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <PixelFlower variant="pink" size={24} />
            <h2 id="featured-projects-title" style={{ fontFamily: 'var(--font-heading)', fontSize: '1.15rem', color: 'var(--charcoal)', margin: 0, fontWeight: 700 }}>
              Featured Projects
            </h2>
          </div>
          <button
            className="retro-btn retro-btn-ghost retro-btn-sm"
            onClick={() => {
              soundFX.playTabSwitch();
              onNavigate('projects');
            }}
          >
            <span>View All Projects ({VERIFIED_PROJECTS.length})</span>
            <ArrowRight size={13} />
          </button>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '18px'
          }}
        >
          {featured.map((project) => {
            const headerBg =
              project.id === 'sentinel'
                ? 'var(--pastel-lavender)'
                : project.id === 'milestone-hub'
                ? 'var(--pastel-sage)'
                : 'var(--pastel-peach)';
            
            const flowerVariant =
              project.id === 'sentinel'
                ? 'lavender'
                : project.id === 'milestone-hub'
                ? 'sage'
                : 'peach';

            return (
              <article key={project.id} className="retro-card project-card-consistent">
                <div
                  className="card-header-bar"
                  style={{
                    background: headerBg,
                    color: 'var(--charcoal)'
                  }}
                >
                  <div className="card-title-group">
                    <PixelFlower variant={flowerVariant} size={20} />
                    <FolderGit2 size={15} color="var(--charcoal)" />
                    <span style={{ fontSize: '0.86rem', fontWeight: 700 }}>{project.title}</span>
                  </div>
                  <span
                    style={{
                      fontFamily: 'var(--font-retro)',
                      fontSize: '0.6rem',
                      background: 'rgba(255,255,255,0.8)',
                      padding: '2px 7px',
                      borderRadius: 'var(--radius-xs)',
                      border: '1px solid rgba(52, 51, 59, 0.25)',
                      color: 'var(--charcoal)'
                    }}
                  >
                    {project.badge}
                  </span>
                </div>

                <div className="card-body" style={{ display: 'flex', flexDirection: 'column', flex: 1, gap: '12px' }}>
                  {/* Small subject-matter visual preview */}
                  <ProjectPreview projectId={project.id} category={project.category} height={100} />

                  <div>
                    <p style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--pastel-blue-text)', margin: '0 0 6px' }}>
                      {project.subtitle}
                    </p>
                    <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', margin: 0, lineHeight: '1.55' }}>
                      {project.shortDescription}
                    </p>
                  </div>

                  {/* Tech Tags */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px', marginTop: 'auto' }}>
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span key={tech} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="tech-tag" style={{ color: 'var(--pastel-blue-text)' }}>
                        +{project.technologies.length - 4}
                      </span>
                    )}
                  </div>

                  {/* Actions */}
                  <div style={{ display: 'flex', gap: '8px', alignItems: 'center', paddingTop: '10px', borderTop: '1px solid var(--surface-border-subtle)', flexWrap: 'wrap' }}>
                    <button
                      className="retro-btn retro-btn-primary retro-btn-sm"
                      onClick={() => {
                        soundFX.playWindowOpen();
                        if (onOpenProject) {
                          onOpenProject(project);
                        } else {
                          onNavigate('projects');
                        }
                      }}
                      title={`View details for ${project.title}`}
                    >
                      <Info size={13} />
                      <span>View Details</span>
                    </button>

                    {project.repoUrl && (
                      <a
                        href={project.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="retro-btn retro-btn-ghost retro-btn-sm"
                        title="Open verified GitHub repository"
                      >
                        <span>GitHub</span>
                        <ExternalLink size={12} />
                      </a>
                    )}

                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="retro-btn retro-btn-accent retro-btn-sm"
                        title="View live deployment"
                      >
                        <span>Live Deployment</span>
                        <ExternalLink size={12} />
                      </a>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* Ground Truth Transparency Banner */}
      <section
        style={{
          background: 'var(--surface-cream)',
          border: 'var(--retro-border)',
          padding: '14px 18px',
          borderRadius: 'var(--radius-sm)',
          display: 'flex',
          alignItems: 'center',
          gap: '14px',
          fontSize: '0.86rem'
        }}
      >
        <PixelFlower variant="sage" size={24} />
        <ShieldCheck size={22} color="var(--pastel-sage-text)" style={{ flexShrink: 0 }} />
        <div>
          <span style={{ fontFamily: 'var(--font-retro)', fontSize: '0.68rem', color: 'var(--charcoal)', display: 'block' }}>
            AUTHENTIC REPOSITORY GROUND TRUTH
          </span>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.84rem', marginTop: '2px', lineHeight: '1.5', margin: 0 }}>
            Every project, skill, and technology featured in this portfolio is grounded in verified source code from Bhuvisha's public GitHub repositories and academic coursework.
          </p>
        </div>
      </section>
    </div>
  );
}
