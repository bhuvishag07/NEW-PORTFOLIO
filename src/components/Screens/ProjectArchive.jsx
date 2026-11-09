import React, { useState, useMemo } from 'react';
import { Search, FolderGit2, AlertCircle, CheckCircle, Info, ExternalLink } from 'lucide-react';
import { VERIFIED_PROJECTS, PROJECT_CATEGORIES } from '../../data/projectsData';
import { soundFX } from '../../utils/soundEffects';
import PixelFlower from '../Common/PixelFlower';
import ProjectPreview from '../Common/ProjectPreview';

export default function ProjectArchive({ onOpenProject }) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Filter projects based on category and search query
  const filteredProjects = useMemo(() => {
    return VERIFIED_PROJECTS.filter((project) => {
      // Category filter
      const matchesCategory =
        selectedCategory === 'all' ||
        project.category === selectedCategory ||
        project.secondaryCategory === selectedCategory;

      // Search query filter (matches title, subtitle, description, or tech stack)
      const query = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !query ||
        project.title.toLowerCase().includes(query) ||
        project.subtitle.toLowerCase().includes(query) ||
        project.shortDescription.toLowerCase().includes(query) ||
        project.technologies.some((tech) => tech.toLowerCase().includes(query));

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const getHeaderBg = (category) => {
    switch (category) {
      case 'ai-data':
        return 'var(--pastel-blue)';
      case 'fullstack':
        return 'var(--pastel-sage)';
      case 'systems':
        return 'var(--pastel-peach)';
      case 'java':
        return 'var(--pastel-lavender)';
      default:
        return 'var(--pastel-pink)';
    }
  };

  const getCategoryFlower = (category) => {
    switch (category) {
      case 'ai-data':
        return 'blue';
      case 'fullstack':
        return 'sage';
      case 'systems':
        return 'peach';
      case 'java':
        return 'lavender';
      default:
        return 'pink';
    }
  };

  return (
    <div className="project-archive-screen" style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      
      {/* Archive Header & Filter Controls Bar */}
      <section className="retro-card" style={{ padding: '20px 22px', background: 'var(--surface-cream)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '14px', marginBottom: '16px' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <PixelFlower variant="sage" size={24} />
              <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.25rem', color: 'var(--charcoal)', margin: 0, fontWeight: 700 }}>
                Projects & Repositories
              </h1>
              <span
                style={{
                  fontFamily: 'var(--font-retro)',
                  fontSize: '0.62rem',
                  background: 'var(--pastel-sage-soft)',
                  border: '1px solid var(--pastel-sage-border)',
                  color: 'var(--pastel-sage-text)',
                  padding: '2px 8px',
                  borderRadius: 'var(--radius-xs)',
                  fontWeight: 600
                }}
              >
                {filteredProjects.length} OF {VERIFIED_PROJECTS.length} REPOS
              </span>
            </div>
            <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', marginTop: '4px', maxWidth: '680px', lineHeight: '1.5' }}>
              Explore software applications, systems code, and data tools. Click any project card to inspect its purpose, architecture, and live links.
            </p>
          </div>

          {/* Search Input Box */}
          <div style={{ position: 'relative', minWidth: '270px' }}>
            <Search
              size={15}
              style={{
                position: 'absolute',
                left: '10px',
                top: '50%',
                transform: 'translateY(-50%)',
                color: 'var(--text-muted)'
              }}
            />
            <input
              type="text"
              placeholder="Search projects or tech (e.g. FastAPI, C++, React)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                width: '100%',
                padding: '8px 10px 8px 32px',
                fontFamily: 'var(--font-body)',
                fontSize: '0.84rem',
                border: 'var(--retro-border)',
                borderRadius: 'var(--radius-xs)',
                background: '#ffffff',
                color: 'var(--charcoal)',
                boxShadow: 'inset 1px 1px 2px rgba(52, 51, 59, 0.08)'
              }}
              aria-label="Search projects by name or technology"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                style={{
                  position: 'absolute',
                  right: '8px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  background: 'transparent',
                  border: 'none',
                  cursor: 'pointer',
                  fontFamily: 'var(--font-retro)',
                  fontSize: '0.65rem',
                  color: 'var(--pastel-pink-text)'
                }}
              >
                CLEAR
              </button>
            )}
          </div>
        </div>

        {/* Category Filter Pills */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }} role="toolbar" aria-label="Project category filters">
          {PROJECT_CATEGORIES.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => {
                  soundFX.playTabSwitch();
                  setSelectedCategory(cat.id);
                }}
                className={`retro-btn retro-btn-sm ${isActive ? 'retro-btn-primary' : 'retro-btn-ghost'}`}
                style={{
                  borderRadius: 'var(--radius-xs)',
                  fontWeight: isActive ? 700 : 500
                }}
                aria-pressed={isActive}
              >
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>
      </section>

      {/* Projects Grid Display */}
      {filteredProjects.length === 0 ? (
        <div
          className="retro-card"
          style={{
            padding: '48px 24px',
            textAlign: 'center',
            background: 'var(--window-bg)'
          }}
        >
          <AlertCircle size={32} color="var(--pastel-peach-text)" style={{ margin: '0 auto 12px' }} />
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.05rem', marginBottom: '8px', fontWeight: 600 }}>
            No Matching Projects Found
          </h2>
          <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', marginBottom: '16px' }}>
            No repositories matched your search query "<strong>{searchQuery}</strong>".
          </p>
          <button
            className="retro-btn retro-btn-accent retro-btn-sm"
            onClick={() => {
              setSearchQuery('');
              setSelectedCategory('all');
            }}
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(330px, 1fr))',
            gap: '20px'
          }}
        >
          {filteredProjects.map((project) => {
            const isFeatured = project.featured;

            return (
              <article
                key={project.id}
                className="retro-card project-card-consistent"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  borderColor: isFeatured ? 'var(--charcoal)' : 'rgba(52, 51, 59, 0.4)',
                  cursor: 'pointer'
                }}
                onClick={() => {
                  soundFX.playWindowOpen();
                  if (onOpenProject) onOpenProject(project);
                }}
              >
                {/* Card Titlebar */}
                <div
                  className="card-header-bar"
                  style={{
                    background: getHeaderBg(project.category),
                    color: 'var(--charcoal)',
                    borderBottom: 'var(--retro-border)'
                  }}
                >
                  <div className="card-title-group" style={{ overflow: 'hidden' }}>
                    <PixelFlower variant={getCategoryFlower(project.category)} size={20} />
                    <span
                      style={{
                        fontFamily: 'var(--font-heading)',
                        fontWeight: 700,
                        fontSize: '0.88rem',
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis'
                      }}
                      title={project.title}
                    >
                      {project.title}
                    </span>
                  </div>

                  <span
                    className={`status-pill ${project.statusType}`}
                    style={{ flexShrink: 0 }}
                  >
                    {project.status.includes('Completed') ? (
                      <CheckCircle size={10} />
                    ) : (
                      <AlertCircle size={10} />
                    )}
                    {project.badge || 'Verified'}
                  </span>
                </div>

                {/* Card Body */}
                <div className="card-body" style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {/* Small Subject Matter Visual Preview */}
                  <ProjectPreview projectId={project.id} category={project.category} height={105} />

                  <div>
                    <p
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.78rem',
                        color: 'var(--pastel-blue-text)',
                        fontWeight: 600,
                        margin: '0 0 6px'
                      }}
                    >
                      {project.subtitle}
                    </p>

                    <p
                      style={{
                        fontFamily: 'var(--font-body)',
                        fontSize: '0.88rem',
                        color: 'var(--charcoal)',
                        lineHeight: '1.55',
                        margin: 0
                      }}
                    >
                      {project.shortDescription}
                    </p>
                  </div>

                  {/* Technologies */}
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

                  {/* Actions & Links Bar */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      flexWrap: 'wrap',
                      gap: '8px',
                      paddingTop: '10px',
                      borderTop: '1px solid var(--surface-border-subtle)'
                    }}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <button
                      className="retro-btn retro-btn-primary retro-btn-sm"
                      onClick={() => {
                        soundFX.playWindowOpen();
                        if (onOpenProject) onOpenProject(project);
                      }}
                      title={`View details for ${project.title}`}
                    >
                      <Info size={12} />
                      <span>View Details</span>
                    </button>

                    <div style={{ display: 'flex', gap: '6px' }}>
                      {project.repoUrl && (
                        <a
                          href={project.repoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="retro-btn retro-btn-ghost retro-btn-sm"
                          title="Open verified repository on GitHub"
                        >
                          <FolderGit2 size={12} />
                          <span>Repo ↗</span>
                        </a>
                      )}

                      {project.demoUrl && (
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="retro-btn retro-btn-accent retro-btn-sm"
                          title="Open live web deployment"
                        >
                          <ExternalLink size={12} />
                          <span>Live Deployment ↗</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      )}
    </div>
  );
}
