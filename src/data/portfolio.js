import profileImage from '../assets/profile.jpeg'

export const navigation = [
  { label: 'Journey', href: '#journey' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Hackathon', href: '#hackathon' },
  { label: 'Process', href: '#process' },
  { label: 'Contact', href: '#contact' },
]

export const stats = [
  { value: 'Full-Stack', label: 'React + FastAPI + MERN Stack' },
  { value: 'Finalist', label: 'INNOVIT Hackathon Winner' },
  { value: 'C++ DSA', label: 'Algorithmic Problem Solver' },
  { value: '100% Polish', label: 'Responsive UI/UX Craftsmanship' },
]

export const developerProfile = {
  name: 'Kunal Mamgai',
  role: 'Full-Stack Developer & UI/UX Specialist',
  location: 'Haldwani, Uttarakhand, India',
  image: profileImage,
  alt: 'Portrait of Kunal Mamgai',
  intro:
    'I build high-performance, visually stunning web applications with a focus on polished user experiences, scalable architecture, and end-to-end full-stack development.',
  bio: 'From achieving top academic honors in Haldwani to competing as an INNOVIT Hackathon finalist with AR-Chaelogist, my journey is driven by relentless curiosity and a passion for engineering beautiful web experiences. I specialize in modern React ecosystems, FastAPI backends, C++ problem-solving, and building complete products from concept to deployment.',
}

export const socialLinks = [
  { label: 'GitHub', href: 'https://github.com/kunalmamgai', username: '@kunalmamgai' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/kunal-mamgai-777k/', username: 'kunal-mamgai-777k' },
  { label: 'Email', href: 'mailto:kunalmamgai@gmail.com', username: 'kunalmamgai@gmail.com' },
]

export const technicalJourney = [
  {
    year: '2023',
    phase: 'Academic Excellence & Initial Spark',
    title: 'CBSE Class 10th Topper',
    institution: 'D.A.V. Centenary Public School, Haldwani',
    category: 'Academic',
    badge: 'Topper Award',
    description:
      'Scored top marks in CBSE Class 10th board exams, establishing a strong foundation in analytical logic, mathematics, and problem-solving.',
    highlights: [
      'Recognized as school topper for academic consistency',
      'Developed strong mathematical and logical foundations',
      'Sparked enthusiasm for computer science and software development',
    ],
    accent: 'from-amber-500 to-orange-500',
  },
  {
    year: '2023 - 2024',
    phase: 'Core Computer Science & Logic',
    title: 'Data Structures & Algorithms in C++',
    institution: 'Self-Driven Engineering',
    category: 'Problem Solving',
    badge: 'C++ DSA Mastery',
    description:
      'Immersed in C++ programming to master foundational data structures, algorithmic paradigms, memory management, and computational complexity.',
    highlights: [
      'Solved complex algorithmic challenges in C++',
      'Mastered arrays, linked lists, trees, graphs, and dynamic programming',
      'Built efficient problem-solving habits applicable to full-stack systems',
    ],
    accent: 'from-cyan-500 to-blue-500',
  },
  {
    year: '2024',
    phase: 'Frontend Mastery & Modern UI/UX',
    title: 'Modern Web Engineering with React & Tailwind',
    institution: 'Interactive Web Labs',
    category: 'Frontend',
    badge: 'UI/UX Craftsman',
    description:
      'Transitioned into modern web development, mastering HTML5, CSS3, ES6+ JavaScript, React component design, and dynamic layout systems.',
    highlights: [
      'Engineered responsive, pixel-perfect user interfaces',
      'Mastered Tailwind CSS and Framer Motion micro-animations',
      'Adopted design systems and reusable component architecture',
    ],
    accent: 'from-emerald-500 to-teal-500',
  },
  {
    year: '2024 - 2025',
    phase: 'National Hackathon Success',
    title: 'INNOVIT Hackathon Finalist — AR-Chaelogist',
    institution: 'INNOVIT Tech Championship',
    category: 'Hackathon',
    badge: 'National Finalist',
    description:
      'Led the creation of AR-Chaelogist, an immersive AR/VR cultural heritage platform connecting users with historic Indian landmarks.',
    highlights: [
      'Reached the national finals of the INNOVIT Hackathon',
      'Architected React frontend with Python & FastAPI backend endpoints',
      'Deployed production apps seamlessly to Vercel and Render',
    ],
    accent: 'from-purple-500 to-pink-500',
  },
  {
    year: '2025 - Present',
    phase: 'Full-Stack & Cloud Integration',
    title: 'Full-Stack Expansion (FastAPI + MERN)',
    institution: 'Production System Building',
    category: 'Full-Stack',
    badge: 'Full-Stack Engineer',
    description:
      'Expanding into complete full-stack web product development, combining React frontends with FastAPI, Python backends, Node.js microservices, and MongoDB.',
    highlights: [
      'Designing RESTful APIs with FastAPI and Python',
      'Learning MERN stack backend integration and database modeling',
      'Focusing on performance optimization, clean code, and UI polish',
    ],
    accent: 'from-blue-500 to-indigo-500',
  },
]

export const skillCategories = [
  {
    id: 'frontend',
    title: 'Frontend Architecture',
    description: 'Building modern, high-performance, responsive interfaces with precise micro-interactions.',
    color: 'cyan',
    skills: [
      { name: 'React.js', level: 92, tag: 'Core Stack' },
      { name: 'JavaScript (ES6+)', level: 90, tag: 'Language' },
      { name: 'Tailwind CSS v4', level: 95, tag: 'Styling' },
      { name: 'HTML5 & CSS3', level: 96, tag: 'Foundations' },
      { name: 'Framer Motion', level: 88, tag: 'Animations' },
      { name: 'Responsive Design', level: 95, tag: 'UX' },
      { name: 'Design Systems', level: 86, tag: 'Architecture' },
    ],
  },
  {
    id: 'backend',
    title: 'Backend & APIs',
    description: 'Architecting robust server-side APIs, database structures, and backend services.',
    color: 'orange',
    skills: [
      { name: 'Python', level: 88, tag: 'Language' },
      { name: 'FastAPI', level: 85, tag: 'Framework' },
      { name: 'RESTful APIs', level: 90, tag: 'Architecture' },
      { name: 'Node.js & Express', level: 80, tag: 'MERN Stack' },
      { name: 'MongoDB', level: 78, tag: 'Database' },
      { name: 'API Integration', level: 92, tag: 'Full-Stack' },
    ],
  },
  {
    id: 'problem-solving',
    title: 'Core CS & Logic',
    description: 'Solving complex computational problems with optimized algorithmic performance.',
    color: 'emerald',
    skills: [
      { name: 'C++', level: 88, tag: 'Language' },
      { name: 'Data Structures (DSA)', level: 86, tag: 'Algorithms' },
      { name: 'OOP Concepts', level: 90, tag: 'Paradigm' },
      { name: 'System Debugging', level: 92, tag: 'Problem Solving' },
      { name: 'Algorithmic Optimization', level: 84, tag: 'Efficiency' },
    ],
  },
  {
    id: 'tools',
    title: 'Tools & Ecosystem',
    description: 'Modern development environment, version control, and cloud hosting workflows.',
    color: 'purple',
    skills: [
      { name: 'Git & GitHub', level: 92, tag: 'Version Control' },
      { name: 'Vite', level: 90, tag: 'Build Tool' },
      { name: 'Vercel & Render', level: 88, tag: 'Deployment' },
      { name: 'npm & uv', level: 86, tag: 'Package Tools' },
      { name: 'Chrome DevTools', level: 94, tag: 'Debugging' },
      { name: 'Postman', level: 88, tag: 'API Testing' },
    ],
  },
]

export const featuredSkills = [
  {
    title: 'Responsive UI Engineering',
    description:
      'Building adaptive layouts that scale effortlessly from mobile screens to ultra-wide desktop monitors with zero visual hierarchy breakdown.',
  },
  {
    title: 'Design Token Systems',
    description:
      'Translating UI wireframes into reusable component libraries with unified spacing, typography, glassmorphism, and color system tokens.',
  },
  {
    title: 'Full-Stack API Integration',
    description:
      'Connecting dynamic React frontends with high-speed Python FastAPI endpoints, asynchronous data fetching, and clean state handling.',
  },
]

export const projects = [
  {
    id: 'archaelogist',
    title: 'AR-Chaelogist',
    type: 'INNOVIT Hackathon Finalist Project',
    category: 'Hackathon',
    badge: 'Award Winner',
    description:
      'An immersive AR/VR web platform built to give users interactive virtual tours of historic Indian heritage sites and cultural landmarks before visiting in person.',
    image:
      'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=1200&q=80',
    outcome:
      'Reached the National Finals at the INNOVIT Hackathon, receiving high praise for cultural impact, smooth AR integration, and full-stack architecture.',
    features: [
      'Interactive 3D / AR model viewer for historical artifacts',
      'Virtual walkthrough tours with audio-guided storytelling',
      'FastAPI backend for site search, coordinates, and cultural metadata',
      'Deployed on Vercel (Frontend) and Render (Backend API)',
    ],
    tags: ['React', 'Tailwind CSS', 'FastAPI', 'Python', 'Vercel', 'Render', 'AR/VR'],
    role: 'Team Lead & Full-Stack Developer',
    github: 'https://github.com/kunalmamgai/INNOVIT-HACKATHON',
    demo: 'https://heritage-and-culture-portal.vercel.app/',
    highlight: true,
  },
  {
    id: 'portfolio-masterpiece',
    title: 'Interactive Portfolio Masterpiece',
    type: 'Personal Developer Showcase',
    category: 'Full-Stack',
    badge: 'Featured',
    description:
      'An award-grade personal developer portfolio featuring an interactive shell terminal, command palette (Cmd+K), particle mesh background, and visual journey timeline.',
    image:
      'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80',
    outcome:
      'Designed to represent my technical identity, learning journey, and UI/UX engineering standards in an unforgettable interactive experience.',
    features: [
      'Interactive Command Shell (`Cmd+K`) for rapid navigation',
      'Built-in retro CLI terminal with executable commands',
      'Visual timeline detailing my complete learning roadmap',
      'Ambient HTML5 particle grid background canvas',
    ],
    tags: ['React 19', 'Tailwind CSS v4', 'Framer Motion', 'Vite', 'HTML5 Canvas'],
    role: 'UI/UX Engineer & Developer',
    github: 'https://github.com/kunalmamgai',
    demo: '#',
    highlight: true,
  },
  {
    id: 'studio-canvas',
    title: 'Studio Canvas',
    type: 'Creative Agency Landing Page',
    category: 'Frontend',
    badge: 'UI Showcase',
    description:
      'A sleek, high-impact agency landing page built with editorial typography, glassmorphism visual layers, and physics-based motion reveals.',
    image:
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80',
    outcome: 'Delivered maximum visual memory for brand presentation while maintaining 60fps scroll performance.',
    features: [
      'Editorial typography & dynamic hero section layout',
      'Smooth entrance reveals powered by Framer Motion',
      'Interactive service grid with glass hover reflections',
    ],
    tags: ['React', 'Tailwind CSS', 'Motion Physics', 'Responsive Design'],
    role: 'Frontend Developer',
    github: 'https://github.com/kunalmamgai',
    demo: '#',
    highlight: false,
  },
  {
    id: 'devconnect-mern',
    title: 'DevConnect MERN Hub',
    type: 'Full-Stack Microservice Portal',
    category: 'Full-Stack',
    badge: 'Backend Learning',
    description:
      'A full-stack social portal for developers to showcase projects, share tech stacks, and collaborate through structured REST API services.',
    image:
      'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80',
    outcome: 'Demonstrates end-to-end full-stack capabilities, token authentication, and clean API structure.',
    features: [
      'JWT User Authentication & Session Management',
      'REST API endpoints for user profiles & project posts',
      'MongoDB data modeling and indexing',
    ],
    tags: ['React', 'Node.js', 'Express', 'MongoDB', 'REST API'],
    role: 'Full-Stack Developer',
    github: 'https://github.com/kunalmamgai',
    demo: '#',
    highlight: false,
  },
]

export const processSteps = [
  {
    step: '01',
    title: 'Discovery & UX Intent',
    description:
      'I analyze user flows, content hierarchy, and technical requirements before writing a single line of code.',
  },
  {
    step: '02',
    title: 'Modular System Building',
    description:
      'I build reusable React components with clear props, design tokens, and clean separation of concerns.',
  },
  {
    step: '03',
    title: 'API & State Integration',
    description:
      'I bridge frontend views with FastAPI or Node.js backends using predictable async data fetching and state logic.',
  },
  {
    step: '04',
    title: 'Performance & Micro-Polish',
    description:
      'I optimize bundle sizes, touch targets, keyboard navigation, and responsive behavior for seamless performance across devices.',
  },
]

export const gallery = [
  {
    src: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80',
    alt: 'UI Developer Workspace Setup',
  },
  {
    src: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=80',
    alt: 'Dashboard analytics and code inspector',
  },
  {
    src: 'https://images.unsplash.com/photo-1516321165247-4aa89a48be28?auto=format&fit=crop&w=900&q=80',
    alt: 'Modern full-stack coding environment',
  },
]

export const terminalCommands = {
  help: 'Available commands: whoami, journey, skills, projects, hackathon, contact, github, linkedin, clear',
  whoami: 'Kunal Mamgai — Full-Stack Developer & UI/UX Specialist based in Haldwani, Uttarakhand. CBSE 10th Topper & INNOVIT Hackathon Finalist.',
  journey: '2023: CBSE 10th Topper -> 2023-24: C++ DSA -> 2024: React & Tailwind -> 2024-25: INNOVIT Hackathon Finalist (AR-Chaelogist) -> Present: Full-Stack (FastAPI + MERN)',
  skills: 'Frontend: React, Tailwind CSS, JS (ES6+), Framer Motion | Backend: Python, FastAPI, Node.js, Express, MongoDB | CS: C++, Data Structures & Algorithms',
  projects: '1. AR-Chaelogist (INNOVIT Finalist) | 2. Personal Portfolio Masterpiece | 3. Studio Canvas | 4. DevConnect MERN Hub',
  hackathon: 'Finalist at INNOVIT Hackathon with AR-Chaelogist: An immersive AR/VR portal for Indian heritage & culture (React + FastAPI + Python + Render/Vercel).',
  contact: 'Email: kunalmamgai@gmail.com | GitHub: github.com/kunalmamgai | LinkedIn: linkedin.com/in/kunal-mamgai-777k/',
  github: 'Opening GitHub profile: https://github.com/kunalmamgai',
  linkedin: 'Opening LinkedIn profile: https://www.linkedin.com/in/kunal-mamgai-777k/',
}
