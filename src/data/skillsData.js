/**
 * Bhuvisha.exe - Verified Skills & Competencies Inventory
 * 
 * Accurately represents Bhuvisha's technical toolset, verified through
 * GitHub projects, academic coursework (ITM Skills University), and certifications.
 * Grouped into clear categories: Programming Languages, Frontend, Backend and APIs, Databases, and Tools.
 * No arbitrary percentage bars or exaggerated claims of expert mastery.
 */

export const SKILL_CATEGORIES = [
  {
    id: 'programming',
    title: 'Programming Languages',
    badge: 'Core Syntax',
    description: 'Languages used in algorithmic problem solving, academic coursework, and application development.',
    skills: [
      {
        name: 'Python',
        iconKey: 'python',
        brandColor: '#3776AB',
        context: 'FastAPI backend (Sentinel), automation scripts, attendance tools, data analysis with Pandas'
      },
      {
        name: 'C',
        iconKey: 'c',
        brandColor: '#A8B9CC',
        context: 'Structured programming, memory models, academic computer systems foundations'
      },
      {
        name: 'C++',
        iconKey: 'cpp',
        brandColor: '#00599C',
        context: 'Data structures & algorithms, SmartRide route optimization, Car Parking slot management'
      },
      {
        name: 'Java',
        iconKey: 'java',
        brandColor: '#ED8B00',
        context: 'Object-oriented design, custom package architecture (Utility Toolkit), Java Swing desktop GUI'
      },
      {
        name: 'JavaScript',
        iconKey: 'javascript',
        brandColor: '#F7DF1E',
        context: 'Modern ES6+ syntax, asynchronous DOM interaction, REST API consumption, React ecosystem'
      }
    ]
  },
  {
    id: 'frontend',
    title: 'Frontend',
    badge: 'Client-Side',
    description: 'Modern responsive web development, semantic markup, and component-driven interfaces.',
    skills: [
      {
        name: 'React',
        iconKey: 'react',
        brandColor: '#61DAFB',
        context: 'Component architecture, state hooks, props, responsive dashboards (Sentinel, Milestone Hub)'
      },
      {
        name: 'HTML',
        iconKey: 'html',
        brandColor: '#E34F26',
        context: 'Semantic HTML5 structure, accessible markup, form handling, web standards (LearnHub)'
      },
      {
        name: 'CSS',
        iconKey: 'css',
        brandColor: '#1572B6',
        context: 'CSS3 layout techniques (Grid, Flexbox), custom variables, animations, responsive design'
      },
      {
        name: 'Vite',
        iconKey: 'vite',
        brandColor: '#646CFF',
        context: 'Fast local build tooling, Hot Module Replacement (HMR), modern frontend bundling'
      },
      {
        name: 'Tailwind CSS',
        iconKey: 'tailwind',
        brandColor: '#06B6D4',
        context: 'Utility-first responsive styling and UI layout design (Sentinel, Milestone Hub)'
      }
    ]
  },
  {
    id: 'backend',
    title: 'Backend and APIs',
    badge: 'Server-Side',
    description: 'Server-side routing, RESTful APIs, and asynchronous service architecture.',
    skills: [
      {
        name: 'Node.js',
        iconKey: 'nodejs',
        brandColor: '#5FA04E',
        context: 'JavaScript server runtime, asynchronous event loop, file handling (HackerRank certified)'
      },
      {
        name: 'Express.js',
        iconKey: 'express',
        brandColor: '#34333B',
        context: 'RESTful routing, middleware pipelines, error handling, participant registration services'
      },
      {
        name: 'FastAPI',
        iconKey: 'fastapi',
        brandColor: '#009688',
        context: 'High-performance Python asynchronous REST endpoints powering Sentinel threat intelligence'
      },
      {
        name: 'REST APIs',
        iconKey: 'api',
        brandColor: '#36537E',
        context: 'Client-server HTTP requests, CRUD endpoints, JSON payload validation, status codes'
      }
    ]
  },
  {
    id: 'databases',
    title: 'Databases',
    badge: 'Persistence',
    description: 'Data persistence, schema design, relational and document database management.',
    skills: [
      {
        name: 'SQL',
        iconKey: 'sql',
        brandColor: '#336791',
        context: 'Relational queries, joins, aggregate operations, schema design (HackerRank certified)'
      },
      {
        name: 'MongoDB',
        iconKey: 'mongodb',
        brandColor: '#47A248',
        context: 'Document collections, Mongoose schema modeling, CRUD operations for web applications'
      },
      {
        name: 'PostgreSQL',
        iconKey: 'postgresql',
        brandColor: '#4169E1',
        context: 'Relational table design, foreign keys, ACID compliance, structured queries'
      },
      {
        name: 'Firebase',
        iconKey: 'firebase',
        brandColor: '#FFCA28',
        context: 'NoSQL cloud document collections, real-time client SDK bindings'
      }
    ]
  },
  {
    id: 'tools',
    title: 'Tools',
    badge: 'Workflow',
    description: 'Version control, development environments, and collaborative design tools.',
    skills: [
      {
        name: 'Git',
        iconKey: 'git',
        brandColor: '#F05032',
        context: 'Version control workflow, commits, branching, merge conflict resolution'
      },
      {
        name: 'GitHub',
        iconKey: 'github',
        brandColor: '#181717',
        context: 'Remote repositories, 57+ public student repos maintained, issue tracking, project deployment'
      },
      {
        name: 'VS Code',
        iconKey: 'vscode',
        brandColor: '#007ACC',
        context: 'Primary code editor configured with extensions, linting, debugging, and terminal'
      },
      {
        name: 'Jupyter Notebook',
        iconKey: 'jupyter',
        brandColor: '#F37626',
        context: 'Interactive data exploration, Pandas data cleansing, and ML experimentation'
      },
      {
        name: 'Figma',
        iconKey: 'figma',
        brandColor: '#F24E1E',
        context: 'UI wireframing, layout sketching, and visual prototyping'
      }
    ]
  }
];

export const CERTIFICATIONS = [
  {
    id: 'hr-sql-intermediate',
    title: 'SQL (Intermediate)',
    issuer: 'HackerRank',
    category: 'Database & SQL',
    verified: true
  },
  {
    id: 'hr-sql-basic',
    title: 'SQL (Basic)',
    issuer: 'HackerRank',
    category: 'Database & SQL',
    verified: true
  },
  {
    id: 'hr-node-intermediate',
    title: 'Node.js (Intermediate)',
    issuer: 'HackerRank',
    category: 'Backend Development',
    verified: true
  },
  {
    id: 'hr-node-basic',
    title: 'Node.js (Basic)',
    issuer: 'HackerRank',
    category: 'Backend Development',
    verified: true
  },
  {
    id: 'simplilearn-html',
    title: 'Introduction to HTML',
    issuer: 'Simplilearn SkillUp',
    category: 'Web Development',
    verified: true
  },
  {
    id: 'deloitte-simulation',
    title: 'Technology Job Simulation',
    issuer: 'Deloitte (Virtual Job Simulation)',
    category: 'Industry Simulation',
    verified: true
  }
];
