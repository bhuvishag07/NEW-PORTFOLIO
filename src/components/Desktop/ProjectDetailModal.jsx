import React, { useEffect } from 'react';
import { X, FolderGit2, ExternalLink, CheckCircle2, ArrowLeft, Layers, Cpu, Database } from 'lucide-react';
import { soundFX } from '../../utils/soundEffects';
import PixelFlower from '../Common/PixelFlower';
import ProjectPreview from '../Common/ProjectPreview';

export default function ProjectDetailModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        soundFX.playClick();
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  const study = project.caseStudy || {};

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: 'rgba(52, 51, 59, 0.6)',
        backdropFilter: 'blur(4px)',
        zIndex: 300,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '16px'
      }}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
    >
      <div
        className="retro-window project-detail-dialog"
        style={{
          width: '100%',
          maxWidth: '780px',
          maxHeight: '88vh',
          display: 'flex',
          flexDirection: 'column',
          boxShadow: 'var(--retro-shadow-lg)',
          border: 'var(--retro-border-thick)',
          borderRadius: 'var(--radius-md)',
          background: 'var(--window-bg)',
          animation: 'modal-pop 0.16s ease-out'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Titlebar */}
        <div className="window-titlebar" style={{ background: 'var(--pastel-blue)' }}>
          <div className="window-title" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <PixelFlower variant="pink" size={20} />
            <span id="modal-project-title" style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '0.86rem' }}>
              Project Details — {project.title}
            </span>
          </div>
          <button
            className="window-control-btn close-btn"
            onClick={() => {
              soundFX.playClick();
              onClose();
            }}
            title="Close dialog (Esc)"
            aria-label="Close dialog"
            style={{ background: 'var(--pastel-pink)' }}
          >
            <X size={12} />
          </button>
        </div>

        {/* Scrollable Content */}
        <div
          style={{
            flex: 1,
            overflowY: 'auto',
            padding: '24px 26px',
            display: 'flex',
            flexDirection: 'column',
            gap: '20px'
          }}
        >
          {/* Header Title & Subtitle */}
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '10px' }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                  <span
                    style={{
                      fontFamily: 'var(--font-retro)',
                      fontSize: '0.62rem',
                      background: 'var(--pastel-sage-soft)',
                      color: 'var(--pastel-sage-text)',
                      padding: '2px 8px',
                      borderRadius: 'var(--radius-xs)',
                      border: '1px solid var(--pastel-sage-border)',
                      fontWeight: 600
                    }}
                  >
                    {project.badge || 'Verified Project'}
                  </span>
                  <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                    {project.status}
                  </span>
                </div>

                <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.45rem', fontWeight: 700, color: 'var(--charcoal)', margin: 0 }}>
                  {project.title}
                </h1>
                <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: 'var(--pastel-blue-text)', marginTop: '4px', fontWeight: 600 }}>
                  {project.subtitle}
                </p>
              </div>

              {/* Quick Action Links in Header */}
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                {project.repoUrl && (
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="retro-btn retro-btn-primary retro-btn-sm"
                  >
                    <FolderGit2 size={13} />
                    <span>View Repository ↗</span>
                  </a>
                )}
                {project.secondaryRepoUrl && (
                  <a
                    href={project.secondaryRepoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="retro-btn retro-btn-ghost retro-btn-sm"
                  >
                    <span>Parking Repo ↗</span>
                  </a>
                )}
                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="retro-btn retro-btn-accent retro-btn-sm"
                  >
                    <ExternalLink size={13} />
                    <span>Live Deployment ↗</span>
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Subject Matter Visual Preview */}
          <div>
            <span style={{ fontFamily: 'var(--font-retro)', fontSize: '0.62rem', color: 'var(--text-muted)', display: 'block', marginBottom: '6px' }}>
              VISUAL SUBJECT PREVIEW
            </span>
            <ProjectPreview projectId={project.id} category={project.category} height={120} />
          </div>

          {/* Plain-English Overview */}
          <section className="retro-card" style={{ padding: '16px 18px', background: 'var(--surface-cream)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '6px' }}>
              <PixelFlower variant="pink" size={18} />
              <h2 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '0.92rem', color: 'var(--charcoal)', margin: 0 }}>
                What It Does
              </h2>
            </div>
            <p style={{ fontSize: '0.9rem', color: 'var(--charcoal)', lineHeight: '1.65', margin: 0 }}>
              {project.shortDescription}
            </p>
          </section>

          {/* Problem & Solution (if available) */}
          {(study.problem || study.solution) && (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '14px' }}>
              {study.problem && (
                <div style={{ background: 'var(--surface-white)', border: 'var(--retro-border)', padding: '14px 16px', borderRadius: 'var(--radius-sm)' }}>
                  <h3 style={{ fontFamily: 'var(--font-retro)', fontSize: '0.7rem', color: 'var(--pastel-pink-text)', margin: '0 0 6px' }}>
                    THE PURPOSE & CHALLENGE
                  </h3>
                  <p style={{ fontSize: '0.86rem', color: 'var(--text-muted)', lineHeight: '1.6', margin: 0 }}>
                    {study.problem}
                  </p>
                </div>
              )}
              {study.solution && (
                <div style={{ background: 'var(--surface-white)', border: 'var(--retro-border)', padding: '14px 16px', borderRadius: 'var(--radius-sm)' }}>
                  <h3 style={{ fontFamily: 'var(--font-retro)', fontSize: '0.7rem', color: 'var(--pastel-blue-text)', margin: '0 0 6px' }}>
                    THE IMPLEMENTED SOLUTION
                  </h3>
                  <p style={{ fontSize: '0.86rem', color: 'var(--text-muted)', lineHeight: '1.6', margin: 0 }}>
                    {study.solution}
                  </p>
                </div>
              )}
            </div>
          )}

          {/* Technologies Used */}
          <section>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '8px' }}>
              <Cpu size={15} color="var(--pastel-blue-text)" />
              <h2 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '0.92rem', color: 'var(--charcoal)', margin: 0 }}>
                Technologies Used
              </h2>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
              {project.technologies.map((tech) => (
                <span key={tech} className="tech-tag" style={{ background: '#ffffff', fontSize: '0.8rem', padding: '3px 10px' }}>
                  {tech}
                </span>
              ))}
            </div>
          </section>

          {/* Features / Capabilities */}
          {(project.highlights || study.verifiedModules) && (
            <section>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '8px' }}>
                <CheckCircle2 size={15} color="var(--pastel-sage-text)" />
                <h2 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '0.92rem', color: 'var(--charcoal)', margin: 0 }}>
                  Key Features & Verified Capabilities
                </h2>
              </div>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                  gap: '8px'
                }}
              >
                {(study.verifiedModules || project.highlights).map((item, idx) => (
                  <div
                    key={idx}
                    style={{
                      background: 'var(--surface-cream)',
                      border: '1px solid var(--surface-border-subtle)',
                      padding: '8px 12px',
                      borderRadius: 'var(--radius-xs)',
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '8px',
                      fontSize: '0.82rem',
                      lineHeight: '1.45'
                    }}
                  >
                    <span style={{ color: 'var(--pastel-sage-text)', fontWeight: 'bold' }}>✓</span>
                    <span style={{ color: 'var(--charcoal)' }}>{item}</span>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Technical Architecture Breakdown (if available) */}
          {study.architecture && (
            <section>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '8px' }}>
                <Layers size={15} color="var(--pastel-lavender-text)" />
                <h2 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '0.92rem', color: 'var(--charcoal)', margin: 0 }}>
                  Architecture & Subsystems
                </h2>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '10px' }}>
                {study.architecture.map((layer, idx) => (
                  <div
                    key={layer.title}
                    style={{
                      background: 'var(--surface-white)',
                      border: 'var(--retro-border)',
                      padding: '12px',
                      borderRadius: 'var(--radius-xs)',
                      boxShadow: 'var(--retro-shadow-sm)'
                    }}
                  >
                    <span style={{ fontFamily: 'var(--font-retro)', fontSize: '0.85rem', color: 'var(--pastel-blue-text)' }}>
                      0{idx + 1}
                    </span>
                    <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: '0.84rem', margin: '3px 0', color: 'var(--charcoal)' }}>
                      {layer.title}
                    </div>
                    <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)', margin: 0, lineHeight: '1.4' }}>
                      {layer.desc}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Dataset info if available */}
          {study.datasetInfo && (
            <section style={{ background: 'var(--pastel-sage-soft)', border: '1px solid var(--pastel-sage-border)', padding: '12px 14px', borderRadius: 'var(--radius-xs)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '4px' }}>
                <Database size={14} color="var(--pastel-sage-text)" />
                <span style={{ fontFamily: 'var(--font-retro)', fontSize: '0.64rem', color: 'var(--pastel-sage-text)' }}>
                  DATASET & STORAGE HANDLING
                </span>
              </div>
              <p style={{ fontSize: '0.84rem', color: 'var(--charcoal)', margin: 0, lineHeight: '1.5' }}>
                {study.datasetInfo}
              </p>
            </section>
          )}
        </div>

        {/* Modal Bottom Footer / Back Button */}
        <div
          style={{
            padding: '12px 20px',
            borderTop: 'var(--retro-border)',
            background: 'var(--surface-panel)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '10px'
          }}
        >
          <button
            className="retro-btn retro-btn-ghost retro-btn-sm"
            onClick={() => {
              soundFX.playClick();
              onClose();
            }}
          >
            <ArrowLeft size={13} />
            <span>Back to Project List</span>
          </button>

          <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
            {project.repoUrl ? (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="retro-btn retro-btn-primary retro-btn-sm"
              >
                <FolderGit2 size={13} />
                <span>Open GitHub Repository ↗</span>
              </a>
            ) : (
              <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                Coursework Project
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
