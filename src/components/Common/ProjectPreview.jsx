import React from 'react';

/**
 * ProjectPreview - Authentic, subject-matter-grounded visual previews
 * for verified projects in Bhuvisha's portfolio.
 * Accurately represents the subject matter of each project without fabricating
 * fake screenshots or inventing capabilities.
 */
export default function ProjectPreview({ projectId, category: _category, height = 110 }) {
  const containerStyle = {
    height: `${height}px`,
    width: '100%',
    borderRadius: 'var(--radius-xs)',
    overflow: 'hidden',
    border: '1px solid var(--surface-border-subtle)',
    background: 'var(--surface-cream)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    userSelect: 'none'
  };

  switch (projectId) {
    case 'sentinel':
      return (
        <div style={{ ...containerStyle, background: '#1c1b22', color: '#B8CAE8' }} aria-label="Sentinel Threat Analysis Map Graphic">
          <svg width="100%" height="100%" viewBox="0 0 320 110" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Radar Grid Lines */}
            <line x1="20" y1="20" x2="300" y2="20" stroke="#34333B" strokeWidth="1" strokeDasharray="3 3" />
            <line x1="20" y1="55" x2="300" y2="55" stroke="#34333B" strokeWidth="1" strokeDasharray="3 3" />
            <line x1="20" y1="90" x2="300" y2="90" stroke="#34333B" strokeWidth="1" strokeDasharray="3 3" />
            <line x1="80" y1="10" x2="80" y2="100" stroke="#34333B" strokeWidth="1" strokeDasharray="3 3" />
            <line x1="160" y1="10" x2="160" y2="100" stroke="#34333B" strokeWidth="1" strokeDasharray="3 3" />
            <line x1="240" y1="10" x2="240" y2="100" stroke="#34333B" strokeWidth="1" strokeDasharray="3 3" />
            {/* Coordinate Nodes from GTD */}
            <circle cx="85" cy="42" r="5" fill="#E9B59D" opacity="0.85" />
            <circle cx="85" cy="42" r="9" stroke="#E9B59D" strokeWidth="1" opacity="0.4" />
            <circle cx="165" cy="68" r="6" fill="#F4BFD0" opacity="0.9" />
            <circle cx="165" cy="68" r="12" stroke="#F4BFD0" strokeWidth="1" opacity="0.35" />
            <circle cx="230" cy="35" r="4" fill="#C5DFCE" opacity="0.85" />
            <circle cx="265" cy="78" r="5" fill="#B8CAE8" opacity="0.85" />
            {/* Threat ML Trend Line */}
            <path d="M 30 75 Q 85 30, 165 65 T 290 28" fill="none" stroke="#DCCEFF" strokeWidth="2" />
            {/* Status Overlays */}
            <rect x="18" y="10" width="130" height="18" rx="3" fill="#292833" stroke="#3E3D4A" strokeWidth="1" />
            <text x="24" y="22" fill="#C5DFCE" fontFamily="var(--font-mono)" fontSize="9" fontWeight="600">GTD INTELLIGENCE MAP</text>
            <text x="220" y="22" fill="#E9B59D" fontFamily="var(--font-mono)" fontSize="8">LAT: 28.6° LON: 77.2°</text>
          </svg>
        </div>
      );

    case 'milestone-hub':
      return (
        <div style={{ ...containerStyle, background: 'var(--pastel-sage-soft)' }} aria-label="Milestone Hub Roadmap Graphic">
          <svg width="100%" height="100%" viewBox="0 0 320 110" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Timeline Corridor */}
            <rect x="25" y="48" width="270" height="8" rx="4" fill="#ACCBBB" />
            <rect x="25" y="48" width="190" height="8" rx="4" fill="#396348" />
            {/* Milestone Checkpoints */}
            <circle cx="50" cy="52" r="10" fill="#396348" />
            <text x="47" y="55" fill="#FFFFFF" fontSize="9" fontWeight="bold">✓</text>
            <circle cx="120" cy="52" r="10" fill="#396348" />
            <text x="117" y="55" fill="#FFFFFF" fontSize="9" fontWeight="bold">✓</text>
            <circle cx="190" cy="52" r="10" fill="#396348" />
            <text x="187" y="55" fill="#FFFFFF" fontSize="9" fontWeight="bold">✓</text>
            <circle cx="260" cy="52" r="10" fill="#FFFFFF" stroke="#ACCBBB" strokeWidth="2" />
            {/* Labels */}
            <text x="35" y="30" fill="#396348" fontFamily="var(--font-heading)" fontSize="9" fontWeight="600">Goal Inception</text>
            <text x="105" y="30" fill="#396348" fontFamily="var(--font-heading)" fontSize="9" fontWeight="600">Sprint Tasks</text>
            <text x="175" y="30" fill="#396348" fontFamily="var(--font-heading)" fontSize="9" fontWeight="600">Review</text>
            <text x="245" y="30" fill="#858291" fontFamily="var(--font-heading)" fontSize="9">Launch</text>
            {/* Velocity Indicator */}
            <rect x="25" y="78" width="80" height="18" rx="3" fill="#FFFFFF" stroke="#ACCBBB" strokeWidth="1" />
            <text x="32" y="90" fill="#396348" fontFamily="var(--font-mono)" fontSize="8" fontWeight="600">75% COMPLETED</text>
            <text x="195" y="90" fill="#5E5B69" fontFamily="var(--font-mono)" fontSize="8">FOCUS MODE ACTIVE</text>
          </svg>
        </div>
      );

    case 'smartride-carparking':
      return (
        <div style={{ ...containerStyle, background: 'var(--pastel-peach-soft)' }} aria-label="SmartRide Route & Car Parking Graphic">
          <svg width="100%" height="100%" viewBox="0 0 320 110" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Dijkstra Road Graph */}
            <line x1="40" y1="45" x2="95" y2="25" stroke="#34333B" strokeWidth="2" />
            <line x1="40" y1="45" x2="105" y2="75" stroke="#34333B" strokeWidth="2" />
            <line x1="95" y1="25" x2="160" y2="45" stroke="#34333B" strokeWidth="2" />
            <line x1="105" y1="75" x2="160" y2="45" stroke="#34333B" strokeWidth="2" />
            {/* Nodes */}
            <circle cx="40" cy="45" r="9" fill="#B8CAE8" stroke="#34333B" strokeWidth="1.5" />
            <text x="37" y="48" fontSize="8" fontWeight="bold">A</text>
            <circle cx="95" cy="25" r="9" fill="#C5DFCE" stroke="#34333B" strokeWidth="1.5" />
            <text x="92" y="28" fontSize="8" fontWeight="bold">B</text>
            <circle cx="105" cy="75" r="9" fill="#F4BFD0" stroke="#34333B" strokeWidth="1.5" />
            <text x="102" y="78" fontSize="8" fontWeight="bold">C</text>
            <circle cx="160" cy="45" r="11" fill="#E9B59D" stroke="#34333B" strokeWidth="1.5" />
            <text x="156" y="48" fontSize="8" fontWeight="bold">D</text>
            {/* Edge Weight label */}
            <text x="65" y="28" fill="#8E4C2C" fontSize="7" fontFamily="var(--font-mono)">cost: 3</text>
            <text x="125" y="30" fill="#8E4C2C" fontSize="7" fontFamily="var(--font-mono)">cost: 4</text>
            {/* Parking Slots Box */}
            <rect x="195" y="20" width="105" height="70" rx="4" fill="#FFFFFF" stroke="#34333B" strokeWidth="1.5" />
            <text x="205" y="34" fill="#34333B" fontFamily="var(--font-heading)" fontSize="8" fontWeight="700">PARKING LOT [C++]</text>
            <rect x="205" y="40" width="40" height="20" fill="#C5DFCE" stroke="#34333B" strokeWidth="1" />
            <text x="210" y="53" fill="#34333B" fontSize="7">P1: VACANT</text>
            <rect x="250" y="40" width="42" height="20" fill="#F4BFD0" stroke="#34333B" strokeWidth="1" />
            <text x="253" y="53" fill="#34333B" fontSize="7">P2: FULL</text>
            <text x="205" y="78" fill="#8E4C2C" fontSize="7" fontFamily="var(--font-mono)">fstream logged</text>
          </svg>
        </div>
      );

    case 'sports-club':
      return (
        <div style={{ ...containerStyle, background: 'var(--pastel-lavender-soft)' }} aria-label="Sports Club Java Swing GUI Graphic">
          <svg width="100%" height="100%" viewBox="0 0 320 110" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Desktop Window Representation */}
            <rect x="35" y="16" width="250" height="78" rx="4" fill="#FFFFFF" stroke="#34333B" strokeWidth="1.5" />
            <rect x="35" y="16" width="250" height="18" fill="#DCCEFF" stroke="#34333B" strokeWidth="1" />
            <circle cx="46" cy="25" r="3" fill="#F4BFD0" stroke="#34333B" strokeWidth="0.8" />
            <circle cx="55" cy="25" r="3" fill="#C5DFCE" stroke="#34333B" strokeWidth="0.8" />
            <text x="68" y="28" fill="#34333B" fontFamily="var(--font-heading)" fontSize="8" fontWeight="600">SportsClubManager (Java Swing GUI)</text>
            {/* Member Details in GUI */}
            <rect x="45" y="42" width="230" height="18" rx="2" fill="#FAF6EF" stroke="#E5DDD0" strokeWidth="1" />
            <text x="52" y="54" fill="#34333B" fontFamily="var(--font-mono)" fontSize="8">Member ID: #M1042 — Active [Gold Tier]</text>
            <rect x="45" y="65" width="130" height="18" rx="2" fill="#FDF5F8" stroke="#E5A9BC" strokeWidth="1" />
            <text x="52" y="77" fill="#963F5B" fontFamily="var(--font-mono)" fontSize="8">Renewal Alert: 7 Days Remaining</text>
            <rect x="185" y="65" width="90" height="18" rx="2" fill="#C5DFCE" stroke="#34333B" strokeWidth="1" />
            <text x="195" y="77" fill="#396348" fontSize="8" fontWeight="bold">RENEW NOW</text>
          </svg>
        </div>
      );

    case 'learnhub':
      return (
        <div style={{ ...containerStyle, background: 'var(--pastel-blue-soft)' }} aria-label="LearnHub Web Design Catalog Graphic">
          <svg width="100%" height="100%" viewBox="0 0 320 110" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="30" y="14" width="260" height="82" rx="4" fill="#FFFFFF" stroke="#34333B" strokeWidth="1.5" />
            <rect x="30" y="14" width="260" height="16" fill="#B8CAE8" stroke="#34333B" strokeWidth="1" />
            <text x="40" y="25" fill="#34333B" fontFamily="var(--font-heading)" fontSize="8" fontWeight="600">LearnHub — Web Practice Tracks</text>
            {/* Course track cards */}
            <rect x="40" y="38" width="52" height="48" rx="3" fill="#FDF5F8" stroke="#E5A9BC" strokeWidth="1" />
            <text x="45" y="52" fill="#963F5B" fontSize="8" fontWeight="bold">Dev</text>
            <text x="45" y="66" fill="#5E5B69" fontSize="6">HTML/CSS</text>
            <rect x="100" y="38" width="52" height="48" rx="3" fill="#F3F8F5" stroke="#ACCBBB" strokeWidth="1" />
            <text x="105" y="52" fill="#396348" fontSize="8" fontWeight="bold">Design</text>
            <text x="105" y="66" fill="#5E5B69" fontSize="6">UI / Grid</text>
            <rect x="160" y="38" width="52" height="48" rx="3" fill="#F8F6FF" stroke="#C5B2FA" strokeWidth="1" />
            <text x="165" y="52" fill="#5A4499" fontSize="8" fontWeight="bold">IT Tech</text>
            <text x="165" y="66" fill="#5E5B69" fontSize="6">Linux/Git</text>
            <rect x="220" y="38" width="58" height="48" rx="3" fill="#FDF6F2" stroke="#D89F84" strokeWidth="1" />
            <text x="225" y="52" fill="#8E4C2C" fontSize="8" fontWeight="bold">Practice</text>
            <text x="225" y="66" fill="#5E5B69" fontSize="6">Projects</text>
          </svg>
        </div>
      );

    case 'ttt-arena':
      return (
        <div style={{ ...containerStyle, background: 'var(--pastel-pink-soft)' }} aria-label="Tic-Tac-Toe Game Board Graphic">
          <svg width="100%" height="100%" viewBox="0 0 320 110" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line x1="140" y1="20" x2="140" y2="90" stroke="#34333B" strokeWidth="2.5" strokeLinecap="round" />
            <line x1="180" y1="20" x2="180" y2="90" stroke="#34333B" strokeWidth="2.5" strokeLinecap="round" />
            <line x1="105" y1="42" x2="215" y2="42" stroke="#34333B" strokeWidth="2.5" strokeLinecap="round" />
            <line x1="105" y1="68" x2="215" y2="68" stroke="#34333B" strokeWidth="2.5" strokeLinecap="round" />
            <text x="117" y="38" fill="#963F5B" fontSize="16" fontWeight="bold" fontFamily="var(--font-mono)">X</text>
            <text x="154" y="38" fill="#36537E" fontSize="16" fontWeight="bold" fontFamily="var(--font-mono)">O</text>
            <text x="192" y="38" fill="#963F5B" fontSize="16" fontWeight="bold" fontFamily="var(--font-mono)">X</text>
            <text x="117" y="62" fill="#36537E" fontSize="16" fontWeight="bold" fontFamily="var(--font-mono)">O</text>
            <text x="154" y="62" fill="#963F5B" fontSize="16" fontWeight="bold" fontFamily="var(--font-mono)">X</text>
            <text x="192" y="62" fill="#36537E" fontSize="16" fontWeight="bold" fontFamily="var(--font-mono)">O</text>
            <text x="117" y="86" fill="#963F5B" fontSize="16" fontWeight="bold" fontFamily="var(--font-mono)">X</text>
            <text x="235" y="45" fill="#34333B" fontFamily="var(--font-heading)" fontSize="9" fontWeight="700">TTT ARENA</text>
            <text x="235" y="60" fill="#963F5B" fontSize="8" fontWeight="600">Player 1 Won!</text>
            <text x="235" y="74" fill="#5E5B69" fontSize="7">Vanilla JS / DOM</text>
          </svg>
        </div>
      );

    case 'github-profile-finder':
      return (
        <div style={{ ...containerStyle, background: 'var(--pastel-blue-soft)' }} aria-label="GitHub API Profile Graphic">
          <svg width="100%" height="100%" viewBox="0 0 320 110" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="35" y="20" width="250" height="70" rx="4" fill="#FFFFFF" stroke="#34333B" strokeWidth="1.5" />
            <circle cx="65" cy="55" r="16" fill="#B8CAE8" stroke="#34333B" strokeWidth="1" />
            <text x="58" y="60" fontSize="12">👤</text>
            <text x="95" y="42" fill="#34333B" fontFamily="var(--font-heading)" fontSize="10" fontWeight="700">bhuvishag07</text>
            <text x="95" y="55" fill="#5E5B69" fontFamily="var(--font-mono)" fontSize="8">GET api.github.com/users/...</text>
            <rect x="95" y="62" width="60" height="16" rx="2" fill="#F3F8F5" stroke="#ACCBBB" strokeWidth="1" />
            <text x="100" y="73" fill="#396348" fontSize="7" fontWeight="bold">57 Repos</text>
            <rect x="160" y="62" width="60" height="16" rx="2" fill="#F8F6FF" stroke="#C5B2FA" strokeWidth="1" />
            <text x="165" y="73" fill="#5A4499" fontSize="7" fontWeight="bold">Fetch API</text>
          </svg>
        </div>
      );

    case 'utility-toolkit':
      return (
        <div style={{ ...containerStyle, background: '#24232B', color: '#C5DFCE' }} aria-label="Java Package Toolkit Graphic">
          <svg width="100%" height="100%" viewBox="0 0 320 110" fill="none" xmlns="http://www.w3.org/2000/svg">
            <text x="30" y="28" fill="#F4BFD0" fontFamily="var(--font-mono)" fontSize="9" fontWeight="bold">package utilities;</text>
            <text x="30" y="46" fill="#C5DFCE" fontFamily="var(--font-mono)" fontSize="8">├── Calculator.java (add, sub, div)</text>
            <text x="30" y="62" fill="#C5DFCE" fontFamily="var(--font-mono)" fontSize="8">├── NumberUtils.java (prime, factorial)</text>
            <text x="30" y="78" fill="#C5DFCE" fontFamily="var(--font-mono)" fontSize="8">├── StringUtils.java (palindrome, count)</text>
            <text x="30" y="94" fill="#B8CAE8" fontFamily="var(--font-mono)" fontSize="8">└── UnitConverter.java (metric, temp)</text>
            <rect x="220" y="20" width="80" height="20" rx="3" fill="#34333B" stroke="#ACCBBB" strokeWidth="1" />
            <text x="226" y="33" fill="#C5DFCE" fontFamily="var(--font-mono)" fontSize="7" fontWeight="600">JAVA OOP CLI</text>
          </svg>
        </div>
      );

    case 'teacher-student-api':
    case 'event-registration-json':
      return (
        <div style={{ ...containerStyle, background: '#24232B', color: '#DCCEFF' }} aria-label="REST API Backend Schema Graphic">
          <svg width="100%" height="100%" viewBox="0 0 320 110" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="25" y="20" width="130" height="32" rx="3" fill="#34333B" stroke="#C5B2FA" strokeWidth="1" />
            <text x="32" y="35" fill="#C5DFCE" fontFamily="var(--font-mono)" fontSize="8" fontWeight="bold">POST /api/register</text>
            <text x="32" y="46" fill="#E9B59D" fontFamily="var(--font-mono)" fontSize="7">Bcrypt Password Hash</text>
            <rect x="25" y="60" width="130" height="32" rx="3" fill="#34333B" stroke="#9EB5D8" strokeWidth="1" />
            <text x="32" y="75" fill="#B8CAE8" fontFamily="var(--font-mono)" fontSize="8" fontWeight="bold">GET /api/records</text>
            <text x="32" y="86" fill="#C5DFCE" fontFamily="var(--font-mono)" fontSize="7">MongoDB / JSON Schema</text>
            <path d="M 160 36 L 190 36 L 190 60 L 210 60" stroke="#E9B59D" strokeWidth="1.5" strokeDasharray="3 3" />
            <rect x="215" y="35" width="85" height="50" rx="4" fill="#34333B" stroke="#D89F84" strokeWidth="1" />
            <text x="225" y="52" fill="#E9B59D" fontFamily="var(--font-mono)" fontSize="8" fontWeight="bold">Persistence</text>
            <text x="225" y="66" fill="#FFFFFF" fontSize="7">Mongoose Models</text>
            <text x="225" y="78" fill="#C5DFCE" fontSize="7">200 OK Status</text>
          </svg>
        </div>
      );

    case 'dsa-search-engine':
      return (
        <div style={{ ...containerStyle, background: 'var(--pastel-peach-soft)' }} aria-label="Prefix Sum and Binary Search Graphic">
          <svg width="100%" height="100%" viewBox="0 0 320 110" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="35" y="25" width="250" height="26" rx="3" fill="#FFFFFF" stroke="#34333B" strokeWidth="1.5" />
            <text x="45" y="42" fill="#34333B" fontFamily="var(--font-mono)" fontSize="8">PrefixSum = [12, 28, 54, 89, 134, 180]</text>
            <line x1="165" y1="52" x2="165" y2="76" stroke="#8E4C2C" strokeWidth="2" strokeDasharray="2 2" />
            <text x="135" y="90" fill="#8E4C2C" fontFamily="var(--font-mono)" fontSize="8" fontWeight="bold">mid = (L + R) / 2</text>
            <text x="45" y="80" fill="#5E5B69" fontSize="8">O(1) Range CTR</text>
            <text x="225" y="80" fill="#5E5B69" fontSize="8">O(log n) Search</text>
          </svg>
        </div>
      );

    case 'attendance-calculator':
      return (
        <div style={{ ...containerStyle, background: 'var(--pastel-sage-soft)' }} aria-label="Attendance Bar Chart Graphic">
          <svg width="100%" height="100%" viewBox="0 0 320 110" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="40" y="60" width="28" height="35" fill="#396348" rx="2" />
            <rect x="80" y="45" width="28" height="50" fill="#396348" rx="2" />
            <rect x="120" y="30" width="28" height="65" fill="#396348" rx="2" />
            <rect x="160" y="70" width="28" height="25" fill="#E5A9BC" rx="2" />
            <line x1="30" y1="95" x2="200" y2="95" stroke="#34333B" strokeWidth="1.5" />
            <line x1="30" y1="50" x2="200" y2="50" stroke="#E5A9BC" strokeWidth="1" strokeDasharray="3 3" />
            <text x="210" y="42" fill="#34333B" fontFamily="var(--font-heading)" fontSize="9" fontWeight="700">Attendance.py</text>
            <text x="210" y="55" fill="#963F5B" fontSize="8">75% Min Target</text>
            <text x="210" y="68" fill="#396348" fontSize="8">CSV Exported</text>
            <text x="210" y="82" fill="#5E5B69" fontSize="7">Matplotlib Plots</text>
          </svg>
        </div>
      );

    case 'faqify':
      return (
        <div style={{ ...containerStyle, background: 'var(--pastel-blue-soft)' }} aria-label="React Accordion Graphic">
          <svg width="100%" height="100%" viewBox="0 0 320 110" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="40" y="18" width="240" height="22" rx="3" fill="#FFFFFF" stroke="#34333B" strokeWidth="1" />
            <text x="50" y="32" fill="#34333B" fontSize="8" fontWeight="600">Q: How does the accordion state work? [-]</text>
            <rect x="40" y="42" width="240" height="26" rx="2" fill="#F3F7FD" stroke="#9EB5D8" strokeWidth="1" />
            <text x="50" y="58" fill="#5E5B69" fontSize="7">A: Built using React state and smooth CSS transitions.</text>
            <rect x="40" y="72" width="240" height="22" rx="3" fill="#FFFFFF" stroke="#34333B" strokeWidth="1" />
            <text x="50" y="86" fill="#34333B" fontSize="8" fontWeight="600">Q: Light / Dark mode supported? [+]</text>
          </svg>
        </div>
      );

    default:
      // Clean fallback themed graphic based on category
      return (
        <div style={{ ...containerStyle, background: 'var(--surface-cream)' }} aria-label="Project Subject Matter Preview">
          <svg width="100%" height="100%" viewBox="0 0 320 110" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="40" y="20" width="240" height="70" rx="4" fill="#FFFFFF" stroke="#34333B" strokeWidth="1.5" />
            <rect x="40" y="20" width="240" height="18" fill="var(--pastel-blue)" stroke="#34333B" strokeWidth="1" />
            <circle cx="50" cy="29" r="3" fill="var(--pastel-pink)" />
            <circle cx="59" cy="29" r="3" fill="var(--pastel-sage)" />
            <text x="70" y="32" fill="#34333B" fontFamily="var(--font-heading)" fontSize="8" fontWeight="600">
              Verified Project Artifact
            </text>
            <rect x="52" y="48" width="140" height="12" rx="2" fill="var(--surface-inset)" />
            <rect x="52" y="66" width="90" height="10" rx="2" fill="var(--surface-inset)" />
            <rect x="210" y="48" width="58" height="28" rx="2" fill="var(--pastel-sage-soft)" stroke="var(--pastel-sage-border)" strokeWidth="1" />
            <text x="217" y="65" fill="var(--pastel-sage-text)" fontSize="8" fontWeight="bold">Active Code</text>
          </svg>
        </div>
      );
  }
}
