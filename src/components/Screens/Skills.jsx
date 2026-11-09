import React, { useState } from 'react';
import {
  Cpu,
  Terminal,
  Layout,
  Server,
  Database,
  Wrench,
  CheckCircle2,
  ShieldCheck,
  Award
} from 'lucide-react';
import {
  SiPython,
  SiC,
  SiCplusplus,
  SiJavascript,
  SiReact,
  SiHtml5,
  SiCss,
  SiVite,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiFastapi,
  SiMongodb,
  SiPostgresql,
  SiFirebase,
  SiGit,
  SiGithub,
  SiJupyter,
  SiFigma
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa6';
import { TbSql } from 'react-icons/tb';
import { VscVscode } from 'react-icons/vsc';

import { SKILL_CATEGORIES, CERTIFICATIONS } from '../../data/skillsData';
import { soundFX } from '../../utils/soundEffects';
import PixelFlower from '../Common/PixelFlower';

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('all');

  const renderTechLogo = (iconKey, size = 26) => {
    switch (iconKey) {
      case 'python':
        return <SiPython size={size} color="#3776AB" />;
      case 'c':
        return <SiC size={size} color="#659AD2" />;
      case 'cpp':
        return <SiCplusplus size={size} color="#00599C" />;
      case 'java':
        return <FaJava size={size} color="#ED8B00" />;
      case 'javascript':
        return <SiJavascript size={size} color="#F7DF1E" style={{ background: '#000', borderRadius: '3px' }} />;
      case 'react':
        return <SiReact size={size} color="#61DAFB" />;
      case 'html':
        return <SiHtml5 size={size} color="#E34F26" />;
      case 'css':
        return <SiCss size={size} color="#1572B6" />;
      case 'vite':
        return <SiVite size={size} color="#646CFF" />;
      case 'tailwind':
        return <SiTailwindcss size={size} color="#06B6D4" />;
      case 'nodejs':
        return <SiNodedotjs size={size} color="#5FA04E" />;
      case 'express':
        return <SiExpress size={size} color="#34333B" />;
      case 'fastapi':
        return <SiFastapi size={size} color="#009688" />;
      case 'api':
        return <Server size={size} color="var(--pastel-blue-text)" />;
      case 'sql':
        return <TbSql size={size} color="#336791" strokeWidth={2.2} />;
      case 'mongodb':
        return <SiMongodb size={size} color="#47A248" />;
      case 'postgresql':
        return <SiPostgresql size={size} color="#4169E1" />;
      case 'firebase':
        return <SiFirebase size={size} color="#FFCA28" />;
      case 'git':
        return <SiGit size={size} color="#F05032" />;
      case 'github':
        return <SiGithub size={size} color="#181717" />;
      case 'vscode':
        return <VscVscode size={size} color="#007ACC" />;
      case 'jupyter':
        return <SiJupyter size={size} color="#F37626" />;
      case 'figma':
        return <SiFigma size={size} color="#F24E1E" />;
      default:
        return <Cpu size={size} color="var(--charcoal)" />;
    }
  };

  const getCategoryIcon = (id) => {
    switch (id) {
      case 'programming':
        return <Terminal size={17} color="var(--pastel-blue-text)" />;
      case 'frontend':
        return <Layout size={17} color="var(--pastel-sage-text)" />;
      case 'backend':
        return <Server size={17} color="var(--pastel-lavender-text)" />;
      case 'databases':
        return <Database size={17} color="var(--pastel-peach-text)" />;
      case 'tools':
        return <Wrench size={17} color="var(--pastel-pink-text)" />;
      default:
        return <Cpu size={17} color="var(--charcoal)" />;
    }
  };

  const getCategoryHeaderBg = (id) => {
    switch (id) {
      case 'programming':
        return 'var(--pastel-blue)';
      case 'frontend':
        return 'var(--pastel-sage)';
      case 'backend':
        return 'var(--pastel-lavender)';
      case 'databases':
        return 'var(--pastel-peach)';
      case 'tools':
        return 'var(--pastel-pink)';
      default:
        return 'var(--pastel-blue)';
    }
  };

  const getCategoryFlower = (id) => {
    switch (id) {
      case 'programming':
        return 'blue';
      case 'frontend':
        return 'sage';
      case 'backend':
        return 'lavender';
      case 'databases':
        return 'peach';
      case 'tools':
        return 'pink';
      default:
        return 'pink';
    }
  };

  const filteredCategories =
    activeCategory === 'all'
      ? SKILL_CATEGORIES
      : SKILL_CATEGORIES.filter((c) => c.id === activeCategory);

  return (
    <div className="skills-screen" style={{ display: 'flex', flexDirection: 'column', gap: '26px' }}>
      
      {/* Header Info Panel */}
      <section className="retro-card" style={{ padding: '20px 22px', background: 'var(--surface-cream)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '14px', marginBottom: '16px' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <PixelFlower variant="peach" size={24} />
              <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.25rem', margin: 0, color: 'var(--charcoal)', fontWeight: 700 }}>
                Skills & Technologies
              </h1>
              <span
                style={{
                  fontFamily: 'var(--font-retro)',
                  fontSize: '0.62rem',
                  background: 'var(--pastel-peach-soft)',
                  border: '1px solid var(--pastel-peach-border)',
                  color: 'var(--pastel-peach-text)',
                  padding: '2px 8px',
                  borderRadius: 'var(--radius-xs)',
                  fontWeight: 600
                }}
              >
                VERIFIED INVENTORY
              </span>
            </div>
            <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', marginTop: '6px', maxWidth: '720px', lineHeight: '1.5' }}>
              Languages, frameworks, databases, and developer tools applied across authentic projects, university coursework, and verified GitHub repositories.
            </p>
          </div>

          <div
            style={{
              fontFamily: 'var(--font-retro)',
              fontSize: '0.68rem',
              background: '#ffffff',
              border: 'var(--retro-border)',
              padding: '6px 12px',
              borderRadius: 'var(--radius-xs)',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              boxShadow: 'var(--retro-shadow-sm)'
            }}
          >
            <ShieldCheck size={15} color="var(--pastel-sage-text)" />
            <span style={{ color: 'var(--charcoal)' }}>Source: Authentic Code</span>
          </div>
        </div>

        {/* Filter Toolbar */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }} role="toolbar" aria-label="Skills category filter">
          <button
            className={`retro-btn retro-btn-sm ${activeCategory === 'all' ? 'retro-btn-primary' : 'retro-btn-ghost'}`}
            onClick={() => {
              soundFX.playTabSwitch();
              setActiveCategory('all');
            }}
            style={{ borderRadius: 'var(--radius-xs)', fontWeight: activeCategory === 'all' ? 700 : 500 }}
          >
            <span>All Categories</span>
          </button>

          {SKILL_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              className={`retro-btn retro-btn-sm ${activeCategory === cat.id ? 'retro-btn-primary' : 'retro-btn-ghost'}`}
              onClick={() => {
                soundFX.playTabSwitch();
                setActiveCategory(cat.id);
              }}
              style={{ borderRadius: 'var(--radius-xs)', fontWeight: activeCategory === cat.id ? 700 : 500 }}
            >
              <span>{cat.title}</span>
            </button>
          ))}
        </div>
      </section>

      {/* Categories Grid */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '22px' }}>
        {filteredCategories.map((category) => (
          <section key={category.id} className="retro-card" aria-labelledby={`cat-${category.id}`}>
            
            {/* Category Header */}
            <div
              className="card-header-bar"
              style={{
                background: getCategoryHeaderBg(category.id),
                color: 'var(--charcoal)',
                borderBottom: 'var(--retro-border)'
              }}
            >
              <div className="card-title-group">
                <PixelFlower variant={getCategoryFlower(category.id)} size={20} />
                {getCategoryIcon(category.id)}
                <h2 id={`cat-${category.id}`} style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '0.95rem', margin: 0, color: 'var(--charcoal)' }}>
                  {category.title}
                </h2>
              </div>
              <span
                style={{
                  fontFamily: 'var(--font-retro)',
                  fontSize: '0.62rem',
                  background: 'rgba(255, 255, 255, 0.8)',
                  color: 'var(--charcoal)',
                  padding: '2px 8px',
                  borderRadius: 'var(--radius-xs)',
                  border: '1px solid var(--charcoal)'
                }}
              >
                {category.badge}
              </span>
            </div>

            {/* Category Description & Skills Grid */}
            <div className="card-body">
              <p style={{ fontSize: '0.86rem', color: 'var(--text-muted)', marginBottom: '16px', lineHeight: '1.5' }}>
                {category.description}
              </p>

              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
                  gap: '14px'
                }}
              >
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="skill-card-item"
                    style={{
                      background: 'var(--surface-cream)',
                      border: 'var(--retro-border)',
                      borderRadius: 'var(--radius-xs)',
                      padding: '14px 16px',
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '14px',
                      boxShadow: 'var(--retro-shadow-sm)',
                      transition: 'transform 0.14s ease, box-shadow 0.14s ease'
                    }}
                  >
                    {/* Authentic Tech Logo Box */}
                    <div
                      style={{
                        width: '42px',
                        height: '42px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        background: '#ffffff',
                        border: '1.5px solid var(--surface-border-subtle)',
                        borderRadius: 'var(--radius-xs)',
                        flexShrink: 0,
                        boxShadow: '1px 1px 0px rgba(52, 51, 59, 0.1)'
                      }}
                    >
                      {renderTechLogo(skill.iconKey, 24)}
                    </div>

                    <div style={{ flex: 1 }}>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '6px', marginBottom: '4px' }}>
                        <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '0.92rem', color: 'var(--charcoal)' }}>
                          {skill.name}
                        </span>
                      </div>

                      <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', lineHeight: '1.45', margin: 0 }}>
                        {skill.context}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* Official Certifications & Credential Deck */}
      <section className="retro-card" aria-labelledby="certs-deck-title">
        <div className="card-header-bar" style={{ background: 'var(--pastel-lavender)', color: 'var(--charcoal)', borderBottom: 'var(--retro-border)' }}>
          <div className="card-title-group">
            <PixelFlower variant="lavender" size={20} />
            <Award size={16} color="var(--charcoal)" />
            <h2 id="certs-deck-title" style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '0.95rem', margin: 0, color: 'var(--charcoal)' }}>
              Technical Certifications & Skill Assessments
            </h2>
          </div>
          <span
            style={{
              fontFamily: 'var(--font-retro)',
              fontSize: '0.62rem',
              background: 'rgba(255, 255, 255, 0.8)',
              color: 'var(--charcoal)',
              padding: '2px 8px',
              borderRadius: 'var(--radius-xs)',
              border: '1px solid var(--charcoal)'
            }}
          >
            HACKERRANK & VERIFIED
          </span>
        </div>

        <div className="card-body">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '12px'
            }}
          >
            {CERTIFICATIONS.map((cert) => (
              <div
                key={cert.id}
                style={{
                  background: 'var(--surface-cream)',
                  border: '1px solid var(--surface-border-subtle)',
                  padding: '12px 14px',
                  borderRadius: 'var(--radius-xs)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px'
                }}
              >
                <CheckCircle2 size={18} color="var(--pastel-sage-text)" style={{ flexShrink: 0 }} />
                <div>
                  <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: '0.85rem', color: 'var(--charcoal)' }}>
                    {cert.title}
                  </div>
                  <div style={{ fontSize: '0.76rem', color: 'var(--text-muted)', marginTop: '2px' }}>
                    {cert.issuer} • {cert.category}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
