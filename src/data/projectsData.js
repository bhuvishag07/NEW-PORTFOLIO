/**
 * Bhuvisha.exe - Verified Projects Inventory
 * 
 * Sourced directly from GitHub: https://github.com/bhuvishag07
 * All repository links, technologies, and features are verified against public source code.
 */

export const PROJECT_CATEGORIES = [
  { id: 'all', label: 'All Files (*.*)', icon: 'Folder' },
  { id: 'ai-data', label: 'AI & Data (*.ai)', icon: 'Brain' },
  { id: 'fullstack', label: 'Full-Stack Apps (*.app)', icon: 'Layers' },
  { id: 'web', label: 'Web Dev (*.html)', icon: 'Globe' },
  { id: 'systems', label: 'Systems & C++ (*.cpp)', icon: 'Cpu' },
  { id: 'java', label: 'Java Applications (*.java)', icon: 'Coffee' },
];

export const VERIFIED_PROJECTS = [
  {
    id: 'sentinel',
    title: 'SENTINEL',
    subtitle: 'AI-Powered Intelligence & Threat Analysis Dashboard',
    category: 'ai-data',
    secondaryCategory: 'fullstack',
    featured: true,
    hasCaseStudy: true,
    status: 'Completed Internship Project',
    statusType: 'success',
    repoUrl: 'https://github.com/bhuvishag07/SENTINEL-',
    demoUrl: null,
    shortDescription: 'AI-powered intelligence and threat analysis platform transforming Global Terrorism Database (GTD) records and dynamic CSV datasets into actionable threat forecasts, risk maps, and ML predictions.',
    technologies: ['React.js', 'FastAPI', 'Python', 'Pandas', 'NumPy', 'Scikit-learn', 'Tailwind CSS', 'Vite'],
    badge: 'Flagship AI Project',
    highlights: [
      'Interactive Global Threat Map plotting incident coordinates and casualty density',
      'Country Intelligence module analyzing historical regional security trends',
      'Scikit-learn Machine Learning engine (Random Forest, Logistic Regression, Gradient Boosting) for attack prediction',
      'Dynamic CSV upload & profiling pipeline supporting custom security datasets',
      'Temporal forecasting and automated intelligence summary report generation'
    ],
    caseStudy: {
      problem: 'National security analysts, defense researchers, and data scientists deal with sprawling, high-dimensional threat records that are difficult to synthesize rapidly. Traditional static reports lack interactive geographic drilldowns, real-time dataset profiling, and predictive machine learning models.',
      solution: 'Developed SENTINEL during an internship associated with ISRO (BSERC Space Internship). SENTINEL combines an intuitive modern React dashboard with a high-throughput Python/FastAPI backend, allowing users to inspect historical incident patterns from the Global Terrorism Database (GTD) or upload dynamic CSV datasets for on-the-fly profiling, anomaly detection, and classification.',
      architecture: [
        { title: 'Frontend UI', desc: 'React with Vite, Tailwind CSS, and custom Context API state providers for responsive navigation, modular panels, and interactive data visualization.' },
        { title: 'REST API Service', desc: 'FastAPI routing layer with specialized endpoints for /overview, /incidents, /countries, /forecasting, /prediction, /intelligence, and /dataset sessions.' },
        { title: 'Data Processing & ML', desc: 'Pandas & NumPy data cleansing pipeline feeding Scikit-learn multi-class models (Random Forest Classifier, Logistic Regression, Gradient Boosting) with pickled encoders.' },
        { title: 'Dynamic CSV Engine', desc: 'Custom dataset ingestion module performing column detection, anomaly spotting, data quality grading, and session isolation.' }
      ],
      datasetInfo: 'Primary dataset: Global Terrorism Database (GTD), covering dates, coordinates, countries, weapon types, target categories, perpetrator groups, and casualty counts. Accompanied by dynamic CSV upload capability for arbitrary tabular threat logs.',
      verifiedModules: [
        'Command Center Dashboard',
        'Global Threat Map (Latitude/Longitude geospatial clusters)',
        'Country Intelligence Profile Viewer',
        'Attack Prediction Engine (Trained ML classifiers)',
        'Threat Level Analysis & Temporal Forecasting',
        'Automated Intelligence Report Synthesizer',
        'Data Explorer with multi-column filtering and pagination',
        'Data Security Center with dynamic dataset switching & profiling'
      ],
      repoVerified: true
    }
  },
  {
    id: 'milestone-hub',
    title: 'Milestone Hub',
    subtitle: 'AI-Powered Productivity & Goal Management System (Final React Project)',
    category: 'fullstack',
    secondaryCategory: 'web',
    featured: true,
    hasCaseStudy: true,
    status: 'Completed Academic Project',
    statusType: 'success',
    repoUrl: 'https://github.com/bhuvishag07/FINAL-REACT-PROJECT-',
    demoUrl: 'https://final-react-project-tau.vercel.app/',
    demoButtonLabel: 'Live Deployment',
    shortDescription: 'Modern productivity and goal management platform developed as a Final React project to help users organize, plan, track, and visualize goals, milestones, tasks, analytics, timelines, and progress in one centralized dashboard.',
    technologies: ['React 19', 'Vite', 'Tailwind CSS', 'Zustand', 'Recharts', 'Framer Motion', 'date-fns', 'Lucide React'],
    badge: 'Live Deployment Available',
    highlights: [
      'Centralized productivity dashboard with real-time state synchronization via Zustand',
      'Interactive goal breakdown and milestone progress tracking',
      'Timeline Universe visualizer for long-term project roadmaps',
      'Comprehensive analytical reports with Recharts data visualizations',
      'Integrated Focus Mode with Pomodoro timer and distraction-free session tools'
    ],
    caseStudy: {
      problem: 'Personal goal-setting often fails when planning tools are fragmented into separate apps for to-do lists, milestone tracking, calendar scheduling, and time management.',
      solution: 'Engineered Milestone Hub (final React project at ITM Skills University, Demis Hassabis Cohort). The platform integrates structured milestones, dynamic task queues, chronological timelines, interactive Recharts analytics, and focus sessions within an aesthetic, responsive interface.',
      architecture: [
        { title: 'State Layer', desc: 'Zustand store managing goal hierarchies, milestone completion percentages, and local storage state persistence.' },
        { title: 'Data Visualization', desc: 'Recharts integration rendering interactive goal completion velocity, focus session durations, and timeline distributions.' },
        { title: 'Component System', desc: 'Modular React 19 component library styled with Tailwind CSS, utilizing Framer Motion for smooth layout shifts.' }
      ],
      datasetInfo: 'User-driven productivity telemetry, task graphs, milestone status trees, and focus session timestamps.',
      verifiedModules: [
        'Overview Dashboard & Quick Metrics',
        'Milestone Planner & Task Hierarchy',
        'Timeline Universe (Visual milestone roadmap)',
        'Interactive Analytics & Productivity Reports',
        'Focus Mode with customizable timer sessions',
        'Calendar & Due Date Schedule View'
      ],
      repoVerified: true
    }
  },
  {
    id: 'smartride-carparking',
    title: 'SmartRide & Car Parking System',
    subtitle: 'C++ Systems Architecture & DSA Route Optimization',
    category: 'systems',
    secondaryCategory: 'all',
    featured: true,
    hasCaseStudy: true,
    status: 'Completed Systems & DSA Projects',
    statusType: 'success',
    repoUrl: 'https://github.com/bhuvishag07/DSA-FINAL-PROJECT-',
    secondaryRepoUrl: 'https://github.com/bhuvishag07/CAR-PARKING-MANAGEMENT-SYSTEM-C-',
    demoUrl: null,
    shortDescription: 'Comprehensive C++ algorithmic systems suite featuring SmartRide (ride-sharing route optimization, graph Dijkstra algorithms, and vehicle assignment) combined with automated Car Parking slot management.',
    technologies: ['C++', 'Data Structures & Algorithms', 'Graph Theory', 'Dijkstra Algorithm', 'Priority Queues', 'File Handling', 'OOP'],
    badge: 'Core DSA & C++',
    highlights: [
      'SmartRide: Graph-based city representation with Dijkstra shortest path route optimization',
      'SmartRide: Priority Queue & CarpoolMatcher algorithms for grouping riders with compatible trips',
      'Car Parking System: Automatic slot allocation across vehicle categories with occupancy tracking',
      'Automated parking fee calculation based on entry/exit timestamps',
      'Persistent record logging and transaction auditing using C++ file streams (fstream)'
    ],
    caseStudy: {
      problem: 'Urban mobility and parking facilities face twin computational challenges: ride-sharing services require efficient vehicle assignment and route optimization to prevent excessive travel delays, while parking lots require automated, conflict-free slot allocation and transparent fee accounting.',
      solution: 'Developed two interconnected C++ systems demonstrating algorithmic problem solving. SmartRide implements graph traversal and custom priority queues for optimal rider carpooling. The Car Parking Management System provides an OOP console architecture managing slot availability, timestamps, and fee calculations with robust file persistence.',
      architecture: [
        { title: 'Graph & Routing (CityGraph.cpp, RoutePlanner.cpp)', desc: 'Weighted adjacency list representing transit nodes and road segments; Dijkstra algorithm computes minimum travel cost.' },
        { title: 'Carpool Matching (CarpoolMatcher.cpp, RequestQueue.cpp)', desc: 'Custom queue and priority matching algorithms grouping passengers heading along shared route corridors.' },
        { title: 'Parking Manager (ParkingSlot class, file.cpp)', desc: 'Encapsulated slot manager tracking vehicle numbers, entry/exit time_t timestamps, and hourly fee computation with persistent disk logs.' }
      ],
      datasetInfo: 'Simulated road networks, ride request queues, vehicle registries, and persistent parking log records.',
      verifiedModules: [
        'SmartRide Route Planner & Distance Matrix',
        'Carpool Matching & Request Queue Engine',
        'Trip History Logger & Price Calculator',
        'Parking Slot Allocation & Vehicle Checkout',
        'File-based Audit Log (parking_records.txt)'
      ],
      repoVerified: true
    }
  },
  {
    id: 'sports-club',
    title: 'Sports Club Management System',
    subtitle: 'Java Swing Desktop GUI & Member Administration',
    category: 'java',
    secondaryCategory: 'all',
    featured: true,
    hasCaseStudy: true,
    status: 'Coursework Desktop App [Remote Repo Unverified]',
    statusType: 'warning',
    repoUrl: null,
    demoUrl: null,
    shortDescription: 'Java Swing desktop graphical user interface application built for sports clubs and gyms to manage member registrations, subscription plans, expiry alert notifications, and local record persistence.',
    technologies: ['Java', 'Java Swing (GUI)', 'AWT', 'Object-Oriented Programming', 'File I/O Persistence'],
    badge: 'Desktop GUI (Swing)',
    highlights: [
      'Intuitive graphical user interface developed with Java Swing and AWT layout managers',
      'Member registration, search, renewal, and membership tier management',
      'Automated membership expiry alerts notifying administrators of upcoming renewals',
      'Object-oriented design implementing inheritance, encapsulation, and event-driven architecture',
      'Local file-based data persistence storing member records reliably'
    ],
    caseStudy: {
      problem: 'Sports clubs, gyms, and fitness studios often struggle with manual paper logs or complex web software for tracking membership subscriptions, plan renewals, and member status.',
      solution: 'Engineered a standalone Java Swing desktop application providing club managers with an all-in-one GUI. The software tracks member details, flags expiring accounts automatically, and stores records without requiring complex external database server setups.',
      architecture: [
        { title: 'Presentation Layer', desc: 'Java Swing JFrame, JPanel, JTable, and custom dialogs wired to ActionListener and DocumentListener event handlers.' },
        { title: 'Business Logic', desc: 'Object-oriented domain models (Member, MembershipPlan, ClubManager) handling validation, validity calculations, and tier privileges.' },
        { title: 'Persistence Layer', desc: 'File stream serialization and structured text persistence saving member records across application restarts.' }
      ],
      datasetInfo: 'Sports club membership registries, subscription expiration dates, and activity records.',
      verifiedModules: [
        'Member Registration & Profile Form',
        'Subscription Expiry Alert Banner',
        'Search & Filter Member Table',
        'Membership Renewal & Plan Switcher',
        'Data File Save & Load Engine'
      ],
      repoVerified: false
    }
  },
  {
    id: 'learnhub',
    title: 'LearnHub',
    subtitle: 'Beginner Web Learning & Front-End Practice Platform',
    category: 'web',
    secondaryCategory: 'all',
    featured: true,
    hasCaseStudy: true,
    status: 'Completed HTML/CSS Final Project',
    statusType: 'success',
    repoUrl: 'https://github.com/bhuvishag07/mini-project-html-and-css-',
    demoUrl: null,
    shortDescription: 'Comprehensive, multi-page educational practice platform designed to help beginners explore HTML, CSS, and front-end layouts across structured learning tracks including Development, Design, IT, and Marketing.',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Web Design', 'CSS Grid', 'Flexbox'],
    badge: 'Web Foundations',
    highlights: [
      'Multi-page structured architecture covering distinct tech categories (Development, Design, IT, Marketing)',
      'Rich course catalog UI featuring instructor badges, ratings, and course curriculums',
      'Clean CSS Grid and Flexbox layouts optimized for multiple viewport sizes',
      'Semantic HTML5 structure ensuring high readability and clean navigation hierarchy',
      'Foundational front-end project demonstrating responsive design principles'
    ],
    caseStudy: {
      problem: 'Beginners entering web development often need clean, well-structured examples of multi-page responsive websites that demonstrate real-world front-end layout techniques without overwhelming backend code.',
      solution: 'Built LearnHub as an HTML/CSS final mini-project. The site provides an organized learning catalog with dedicated category pages (Development, Design, IT & Software, Marketing, Personal Development), an interactive hero banner, authentic course cards, and responsive navigation.',
      architecture: [
        { title: 'Structure', desc: 'Modular semantic HTML5 pages linking course sections with clean semantic tags (<header>, <nav>, <section>, <article>, <footer>).' },
        { title: 'Layout System', desc: 'Custom CSS3 box model implementations leveraging modern CSS Grid and Flexbox for responsive card arrays.' },
        { title: 'Design Elements', desc: 'Curated card banners, category badges, rating stars, and interactive hover transitions.' }
      ],
      datasetInfo: 'Curated course curricula across front-end web development, Python, UI/UX design, cloud basics, and data tools.',
      verifiedModules: [
        'Home Showcase & Category Explorer',
        'Development Courses Track (FullStack, Python, C#, Angular)',
        'Design Track (UI/UX, 3D Modeling, Storytelling)',
        'IT & Software Track (Linux, Docker, AWS, SQL)',
        'Authentication & Registration UI Screens'
      ],
      repoVerified: true
    }
  },
  {
    id: 'wellness-at-work',
    title: 'WellnessAtWork',
    subtitle: 'Corporate Employee Wellness Management Platform',
    category: 'fullstack',
    secondaryCategory: 'web',
    featured: false,
    hasCaseStudy: true,
    status: 'Completed Full-Stack Project',
    statusType: 'success',
    repoUrl: 'https://github.com/bhuvishag07/WellnessAtWork',
    demoUrl: 'https://wellness-at-work-eight.vercel.app',
    demoButtonLabel: 'Live Deployment',
    demoPageUrl: 'https://wellness-at-work-eight.vercel.app/demo',
    shortDescription: 'Full-stack employee wellness platform designed to promote healthier workplace habits through wellness challenges, activity tracking, meditation, mental health resources, wellness sessions, rewards, leaderboards, and administrative monitoring.',
    technologies: ['React', 'Vite', 'Tailwind CSS', 'Node.js', 'Express.js', 'MongoDB', 'Mongoose', 'Socket.IO', 'JWT', 'Firebase'],
    badge: 'Live Deployment Available',
    highlights: [
      'Corporate wellness challenges promoting physical activity and healthy habits',
      'Daily activity and hydration logging with personal progress milestones',
      'Gamified points engine with team leaderboards and redemption rewards',
      'Curated mental health, meditation, and ergonomic wellness resources',
      'Administrative wellness monitoring and reporting tools',
      'Real-time updates for wellness activity and platform interactions'
    ],
    caseStudy: {
      problem: 'Sedentary work culture, digital screen fatigue, and corporate burnout reduce employee engagement and well-being. Companies need lightweight, engaging tools to encourage daily activity and team wellness.',
      solution: 'Built WellnessAtWork as a full-stack employee wellness platform that brings together challenges, activity logging, wellness resources, session bookings, reward points, leaderboards, and administrative tools in one application.',
      architecture: [
        { title: 'Frontend', desc: 'React application built with Vite and Tailwind CSS for the employee and administrative wellness interfaces.' },
        { title: 'Backend & Database', desc: 'Node.js and Express REST APIs connected to MongoDB through Mongoose models for application data and workflows.' },
        { title: 'Authentication & Real-Time Updates', desc: 'JWT and Firebase-based authentication components with Socket.IO for real-time application updates.' }
      ],
      datasetInfo: 'Activity milestones, step targets, team challenges, and mental wellness articles.',
      verifiedModules: [
        'Employee Wellness Dashboard',
        'Wellness Challenges & Activity Logging',
        'Points, Leaderboards & Rewards Store',
        'Mental Health Resources & Meditation',
        'Wellness Sessions & Bookings',
        'Administrative Monitoring & Reports'
      ],
      repoVerified: true
    }
  },
  {
    id: 'campuscore',
    title: 'CampusCore',
    subtitle: 'Integrated College Department Management System',
    category: 'fullstack',
    secondaryCategory: 'web',
    featured: true,
    hasCaseStudy: true,
    status: 'Completed Academic Project',
    statusType: 'success',
    repoUrl: 'https://github.com/bhuvishag07/CampusCore',
    demoUrl: 'https://campus-core-six.vercel.app/',
    demoButtonLabel: 'Live Deployment',
    shortDescription: 'React-based college department management system that centralizes departmental and academic operations, including department management, faculty administration, workload allocation, meetings, courses, syllabi, and academic resources.',
    technologies: ['React', 'JavaScript', 'Vite'],
    badge: 'Live Deployment Available',
    highlights: [
      'Department creation and organization with a structured department hierarchy',
      'Faculty management and faculty workload allocation',
      'Department meeting management and scheduling',
      'Course and academic information management',
      'Faculty syllabus and study-material organization',
      'Centralized departmental administration and academic resources'
    ],
    caseStudy: {
      problem: 'Departmental information and academic activities can become fragmented across separate processes, making it harder to organize faculty, workload, meetings, courses, and learning resources.',
      solution: 'Developed CampusCore as an integrated React application for organizing college department operations and bringing key academic and administrative workflows into one interface.',
      architecture: [
        { title: 'Frontend Application', desc: 'React application built with Vite and JavaScript.' },
        { title: 'Department & Faculty Workflows', desc: 'Interface modules for department organization, faculty records, and workload allocation.' },
        { title: 'Academic Coordination', desc: 'Workflows for department meetings, courses, syllabi, and academic resources.' }
      ],
      datasetInfo: 'Department, faculty, workload, meeting, course, syllabus, and academic resource records managed by the application.',
      verifiedModules: [
        'Department Management & Hierarchy',
        'Faculty Management',
        'Faculty Workload Management',
        'Department Meetings',
        'Courses & Academic Information',
        'Syllabus & Study Materials',
        'Academic Resource Management'
      ],
      repoVerified: true
    }
  },
  {
    id: 'utility-toolkit',
    title: 'Java Utility Toolkit',
    subtitle: 'Custom Package Architecture & Static Utilities',
    category: 'java',
    secondaryCategory: 'systems',
    featured: false,
    hasCaseStudy: false,
    status: 'Completed Java Mini Project',
    statusType: 'success',
    repoUrl: 'https://github.com/bhuvishag07/utility-toolkit',
    demoUrl: null,
    shortDescription: 'Menu-driven Java console application demonstrating custom package structure (package utilities), static methods, and modular utilities including Calculator, Number Utility, String Utility, and Converters.',
    technologies: ['Java', 'Custom Packages', 'Static Methods', 'OOP', 'Console UI'],
    badge: 'Java Packages',
    highlights: [
      'Structured custom package architecture organizing utility classes inside package utilities',
      'Calculator with addition, subtraction, multiplication, and zero-division error handling',
      'Number Utility performing prime checks, square calculations, factorials, and even/odd evaluation',
      'String Utility providing palindrome detection, uppercase conversion, character counting, and reverse logic',
      'Unit & Temperature Converters handling metric-to-imperial and Celsius-to-Fahrenheit conversions'
    ],
    repoVerified: true
  },
  {
    id: 'ttt-arena',
    title: 'TTT Arena (Tic-Tac-Toe Final Project)',
    subtitle: 'Interactive Web Gaming Platform with Custom Themes',
    category: 'web',
    secondaryCategory: 'all',
    featured: false,
    hasCaseStudy: false,
    status: 'Completed Web Final Project',
    statusType: 'success',
    repoUrl: 'https://github.com/bhuvishag07/TIC-TAC-TOE-FINAL-PROJECT',
    demoUrl: 'https://bhuvishag07.github.io/TIC-TAC-TOE-FINAL-PROJECT/',
    demoButtonLabel: 'Live Deployment',
    shortDescription: 'Enhanced browser-based Tic-Tac-Toe platform built with Vanilla JavaScript, featuring two-player mode, automatic win/draw detection, restart functionality, theme customization, and rank badge progression.',
    technologies: ['HTML5', 'CSS3', 'JavaScript (Vanilla)', 'DOM Manipulation', 'Local Storage'],
    badge: 'Interactive Game',
    highlights: [
      'Two-player local turn-based mode with automatic 3x3 win condition matrix verification',
      'Tie / Draw state detection with instant visual modal notification',
      'Theme customization switcher updating board aesthetics via CSS variables',
      'Badge rankings and community forum UI built into the platform layout',
      'Pure JavaScript architecture with zero external runtime libraries'
    ],
    repoVerified: true
  },
  {
    id: 'github-profile-finder',
    title: 'GitHub Profile Finder',
    subtitle: 'Asynchronous REST API Integration & Dynamic DOM Rendering',
    category: 'web',
    secondaryCategory: 'all',
    featured: false,
    hasCaseStudy: false,
    status: 'Completed JavaScript Project',
    statusType: 'success',
    repoUrl: 'https://github.com/bhuvishag07/javascript-project',
    demoUrl: null,
    shortDescription: 'JavaScript web application utilizing the GitHub REST API to search and dynamically render developer profile cards, avatars, bios, follower statistics, and public repository links.',
    technologies: ['JavaScript', 'GitHub REST API', 'HTML5', 'CSS3', 'Fetch API', 'Promises'],
    badge: 'REST API App',
    highlights: [
      'Asynchronous data fetching via browser fetch() API and Promise handling',
      'Dynamic profile card generation with avatars, biographies, and follower metrics',
      'Top 5 public repository extraction with clickable direct GitHub links',
      'Graceful error handling for invalid usernames, rate limits, and network errors',
      'Clean, responsive search interface with instant DOM updates'
    ],
    repoVerified: true
  },
  {
    id: 'faqify',
    title: 'FAQify',
    subtitle: 'Modern React Accordion Web Application',
    category: 'web',
    secondaryCategory: 'all',
    featured: false,
    hasCaseStudy: false,
    status: 'Completed React Project',
    statusType: 'success',
    repoUrl: 'https://github.com/bhuvishag07/FAQify',
    demoUrl: null,
    shortDescription: 'Modern Frequently Asked Questions web app built using React.js and Vite featuring interactive single/multi-expand accordion logic, light/dark mode toggling, and clean reusable components.',
    technologies: ['React.js', 'Vite', 'CSS3', 'JavaScript'],
    badge: 'React Componentry',
    highlights: [
      'Accordion-based collapsible question & answer system with smooth CSS transitions',
      'Light / Dark theme toggle for optimal viewing comfort',
      'Reusable component hierarchy (Accordion, AccordionItem, Hero, Navbar, InfoCard)',
      'Fast client-side build with Vite and responsive CSS styling'
    ],
    repoVerified: true
  },
  {
    id: 'dsa-search-engine',
    title: 'Search Engine CTR Optimizer',
    subtitle: 'Algorithmic Relevance Tuning via Prefix Sum & Binary Search',
    category: 'systems',
    secondaryCategory: 'all',
    featured: false,
    hasCaseStudy: false,
    status: 'Completed DSA Mini Project',
    statusType: 'success',
    repoUrl: 'https://github.com/bhuvishag07/DSA-mini-project',
    demoUrl: null,
    shortDescription: 'C++ algorithmic case study solving real-world search engine result ranking by computing optimal relevance thresholds using Prefix Sum arrays and Binary Search to maximize Click-Through Rate (CTR).',
    technologies: ['C++', 'Data Structures & Algorithms', 'Prefix Sum', 'Binary Search', 'Algorithm Optimization'],
    badge: 'Algorithms (DSA)',
    highlights: [
      'Relevance score analysis simulating search engine ranking results',
      'Prefix Sum preprocessing enabling O(1) range sum queries of user click likelihood',
      'Binary Search implementation finding optimal display cutoff points in O(log n) time',
      'Documented engineering case study analyzing CTR trade-offs against user fatigue'
    ],
    repoVerified: true
  },
  {
    id: 'attendance-calculator',
    title: 'Attendance Percentage & Analytics Calculator',
    subtitle: 'Python Utility with CSV File Handling & Chart Plotting',
    category: 'systems',
    secondaryCategory: 'ai-data',
    featured: false,
    hasCaseStudy: false,
    status: 'Completed Python Project',
    statusType: 'success',
    repoUrl: 'https://github.com/bhuvishag07/python-project-',
    demoUrl: null,
    shortDescription: 'Python utility calculating student attendance percentages with CSV file import/export, criteria threshold warnings, and matplotlib visual attendance chart generation.',
    technologies: ['Python', 'CSV Handling', 'Matplotlib', 'Data Analysis'],
    badge: 'Python & Data',
    highlights: [
      'Processes raw attendance.csv data files for semester attendance auditing',
      'Flags students falling below mandatory attendance thresholds',
      'Generates summary.csv reports and visual attendance_chart.png bar plots',
      'Modular code structure across student.py, attendance.py, and chart.py'
    ],
    repoVerified: true
  },
];