import profileImage from '../assets/profile.jpeg'

export const navigation = [
  { label: 'Journey', href: '#journey' },
  { label: 'Projects', href: '#projects' },
  { label: 'Simulation', href: '#simulation' },
  { label: 'Skills', href: '#skills' },
  { label: 'Hackathons', href: '#hackathon' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export const stats = [
  { value: '3D & WebGL', label: 'Three.js & Digital Twin Simulation' },
  { value: 'AI Agents', label: 'Razorpay AI Buildathon & Python' },
  { value: 'Finalist', label: 'INNOVIT National Hackathon' },
  { value: 'C++ DSA', label: 'Algorithmic Problem Solver' },
]

export const developerProfile = {
  name: 'Kunal Mamgai',
  role: 'Full-Stack & WebGL Developer | Applied AI Systems',
  location: 'Haldwani, Uttarakhand, India',
  image: profileImage,
  alt: 'Portrait of Kunal Mamgai',
  intro:
    'I architect immersive 3D digital twins, autonomous AI agent platforms, and high-performance full-stack web applications with Three.js, React, FastAPI, Python, and C++.',
  bio: 'From achieving top academic honors in Haldwani to competing in national hackathons (INNOVIT Finalist with AR-Chaelogist, Razorpay AI Buildathon with Payment Risk Agent), I specialize in bridging high-fidelity 3D WebGL interfaces with intelligent backend services.',
}

export const socialLinks = [
  { label: 'GitHub', href: 'https://github.com/kunalmamgai', username: '@kunalmamgai' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/kunal-mamgai-777k/', username: 'kunal-mamgai-777k' },
  { label: 'Email', href: 'mailto:kunalmamgai@gmail.com', username: 'kunalmamgai@gmail.com' },
]

export const heroOrbiterLogos = [
  { name: 'Three.js', color: '#FFFFFF' },
  { name: 'React', color: '#61DAFB' },
  { name: 'Python', color: '#3776AB' },
  { name: 'FastAPI', color: '#009688' },
  { name: 'C++', color: '#00599C' },
  { name: 'Tailwind CSS', color: '#06B6D4' },
]

export const stack = [
  'Three.js',
  'WebGL',
  'React',
  'Python',
  'FastAPI',
  'C++',
  'AI Agent',
  'Tailwind CSS',
  'JavaScript',
  'Node.js',
  'MongoDB',
  'Git',
  'GitHub',
  'Vercel',
  'Render',
  'Postman',
  'Vite',
  'Framer Motion',
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
      'Scored top marks in CBSE Class 10th board examinations, developing strong mathematical discipline, computational thinking, and analytical foundations.',
    highlights: [
      'Recognized as school topper for academic consistency',
      'Developed strong mathematical and logical foundations',
      'Sparked enthusiasm for computer science, WebGL, and algorithms',
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
    phase: 'Frontend Mastery & 3D WebGL',
    title: 'Modern Web & Interactive Simulation Systems',
    institution: 'PhysicsHub & Open Source Labs',
    category: 'Frontend',
    badge: 'WebGL Engineer',
    description:
      'Engineered interactive physics visualizers (PhysicsHub) and modern React interfaces with Three.js, Canvas API, and Tailwind CSS.',
    highlights: [
      'Built PhysicsHub formula & particle simulation visualizer',
      'Mastered Tailwind CSS and Framer Motion micro-animations',
      'Engineered responsive, 3D WebGL canvas rendering pipelines',
    ],
    accent: 'from-emerald-500 to-teal-500',
  },
  {
    year: '2024 - 2025',
    phase: 'National Hackathons & AI Engineering',
    title: 'INNOVIT Finalist & Razorpay AI Buildathon',
    institution: 'VIT Bhopal University & Hackathons',
    category: 'Hackathon',
    badge: 'Hackathon Champion',
    description:
      'Led the creation of AR-Chaelogist (INNOVIT Finalist) and engineered the autonomous Payment Risk & Recovery AI Agent for the Razorpay AI Buildathon.',
    highlights: [
      'Reached the national finals of INNOVIT with AR-Chaelogist',
      'Built autonomous payment risk reasoning agent with Python for Razorpay',
      'Architected SURYA: Hybrid Renewable VPP 3D Digital Twin',
    ],
    accent: 'from-purple-500 to-pink-500',
  },
  {
    year: '2025 - Present',
    phase: 'Full-Stack 3D Digital Twins & Applied AI',
    title: 'Full-Stack WebGL & AI Agent Platforms',
    institution: 'Advanced Systems Building',
    category: 'Full-Stack',
    badge: 'Full-Stack 3D Engineer',
    description:
      'Developing production-grade 3D digital twins, virtual power plants (SURYA), autonomous AI agents, and scalable FastAPI backend services.',
    highlights: [
      'Engineered live 3D campus digital twin simulation with Three.js',
      'Designing robust RESTful microservices with FastAPI and Python',
      'Deploying full-stack cloud applications to Vercel and Render',
    ],
    accent: 'from-blue-500 to-indigo-500',
  },
]

export const skillCategories = [
  {
    id: '3d-frontend',
    title: '3D & Frontend Architecture',
    description: 'High-fidelity WebGL 3D graphics, Three.js scenes, React component systems, and fluid animations.',
    color: 'cyan',
    skills: [
      { name: 'Three.js', level: 90, tag: '3D WebGL' },
      { name: 'React', level: 94, tag: 'Core Stack' },
      { name: 'WebGL', level: 86, tag: 'Graphics' },
      { name: 'Tailwind CSS', level: 95, tag: 'Styling' },
      { name: 'JavaScript', level: 92, tag: 'Language' },
      { name: 'Framer Motion', level: 90, tag: 'Animations' },
      { name: 'Physics Simulation', level: 88, tag: 'Canvas API' },
    ],
  },
  {
    id: 'backend-ai',
    title: 'Backend & Applied AI',
    description: 'Autonomous AI agents, Python FastAPI microservices, and database modeling.',
    color: 'orange',
    skills: [
      { name: 'Python', level: 90, tag: 'Language' },
      { name: 'FastAPI', level: 88, tag: 'Framework' },
      { name: 'AI Agent', level: 86, tag: 'Autonomous AI' },
      { name: 'Node.js', level: 82, tag: 'MERN Stack' },
      { name: 'MongoDB', level: 80, tag: 'Database' },
      { name: 'RESTful APIs', level: 92, tag: 'Architecture' },
    ],
  },
  {
    id: 'problem-solving',
    title: 'Core CS & Logic',
    description: 'Algorithmic optimization, memory safety, and high-performance computing in C++.',
    color: 'emerald',
    skills: [
      { name: 'C++', level: 88, tag: 'Language' },
      { name: 'Data Structures (DSA)', level: 86, tag: 'Algorithms' },
      { name: 'System Debugging', level: 92, tag: 'Problem Solving' },
    ],
  },
  {
    id: 'tools',
    title: 'Tools & DevOps',
    description: 'Modern development workflows, version control, and continuous cloud deployment.',
    color: 'purple',
    skills: [
      { name: 'Git', level: 92, tag: 'Version Control' },
      { name: 'GitHub', level: 94, tag: 'Collaboration' },
      { name: 'Vite', level: 92, tag: 'Build Tool' },
      { name: 'Vercel', level: 90, tag: 'Deployment' },
      { name: 'Postman', level: 88, tag: 'API Testing' },
    ],
  },
]

export const featuredSkills = [
  {
    title: '3D WebGL & Digital Twins',
    description:
      'Crafting interactive 3D digital twins, procedural particle canvases, and Three.js environments with smooth 60fps GPU performance.',
  },
  {
    title: 'Autonomous AI Agent Systems',
    description:
      'Engineering policy-gated AI agents that analyze complex financial transactions, explain risk in plain language, and automate mitigation.',
  },
  {
    title: 'Full-Stack API Integration',
    description:
      'Connecting dynamic React/3D frontends with high-speed Python FastAPI endpoints, asynchronous data pipelines, and clean state handling.',
  },
]

export const projects = [
  {
    id: 'surya-vpp',
    title: 'SURYA: Hybrid Renewable VPP & 3D Digital Twin',
    type: '3D Digital Twin & CleanTech Platform',
    category: 'Full-Stack',
    badge: '3D Simulation',
    description:
      'SURYA is a Hybrid Renewable Virtual Power Plant (VPP) platform featuring a live 3D digital twin of the VIT Bhopal campus with real-time solar/wind simulations, weather modeling, and power grid dispatch.',
    image:
      'https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=1200&q=80',
    images: [
      'https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1497440001374-f26997328c1b?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1200&q=80',
    ],
    outcome:
      'Built a full interactive campus simulator with live 3D buildings, dynamic weather toggles, battery charge states, and clean power distribution telemetry.',
    features: [
      'Interactive 3D digital twin campus simulator built with Three.js & WebGL',
      'Real-time power dispatch telemetry between solar arrays & battery storage',
      'Dynamic weather system (sunny, overcast, rain) altering energy yield',
      'Full-stack architecture with React dashboard and analytical telemetry',
    ],
    tags: ['Three.js', 'WebGL', '3D Digital Twin', 'React', 'JavaScript', 'Tailwind CSS'],
    role: 'Lead 3D & Full-Stack Developer',
    github: 'https://github.com/kunalmamgai/Hybrid-Renewable-VPP',
    demo: '#',
    highlight: true,
  },
  {
    id: 'razorpay-agent',
    title: 'Razorpay AI Payment Risk & Recovery Agent',
    type: 'Razorpay AI Buildathon Project',
    category: 'Hackathon',
    badge: 'AI Buildathon',
    description:
      'An autonomous AI-powered payment risk & recovery agent built for the Razorpay AI Buildathon. It analyzes failed and flagged transactions, explains risk in plain language, and applies policy-gated decisions (allow / review / block).',
    image:
      'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=80',
    images: [
      'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&w=1200&q=80',
    ],
    outcome:
      'Created an intelligent FinTech recovery pipeline reducing false payment declines while protecting merchants against synthetic identity fraud.',
    features: [
      'AI reasoning agent analyzing transaction anomalies & velocity checks',
      'Plain-language risk breakdown with actionable merchant recommendations',
      'Policy-gated decision engine (Allow, Review, Retry, Block)',
      'Built with Python, FastAPI backend, and Razorpay payment webhook simulator',
    ],
    tags: ['Python', 'AI Agent', 'FastAPI', 'FinTech', 'RESTful APIs'],
    role: 'AI System Architect & Backend Developer',
    github: 'https://github.com/kunalmamgai/Razorpay-Buildathon',
    demo: '#',
    highlight: true,
  },
  {
    id: 'archaelogist',
    title: 'AR-Chaelogist: AR/VR Heritage & Culture Portal',
    type: 'INNOVIT Hackathon Finalist Project',
    category: 'Hackathon',
    badge: 'National Finalist',
    description:
      'An immersive AR/VR web platform built to give users interactive virtual tours of historic Indian heritage sites and cultural landmarks before visiting in person.',
    image:
      'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=1200&q=80',
    images: [
      'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80',
    ],
    outcome:
      'Reached the National Finals at the INNOVIT Hackathon, receiving high praise for cultural storytelling, smooth AR integration, and full-stack architecture.',
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
    id: 'physicshub',
    title: 'PhysicsHub: Interactive WebGL Physics Visualizer',
    type: 'Interactive Physics Simulation Platform',
    category: 'Frontend',
    badge: 'Simulation',
    description:
      'A free open-source interactive physics visualization platform helping students and developers explore kinematics, wave mechanics, gravitational fields, and particle dynamics through real-time canvas simulations.',
    image:
      'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=1200&q=80',
    images: [
      'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1507413245164-6160d8298b31?auto=format&fit=crop&w=1200&q=80',
    ],
    outcome:
      'Provides intuitive, interactive visualization of mathematical and physical formulas using GPU-accelerated HTML5 Canvas and WebGL.',
    features: [
      'Real-time numerical integrator for gravitational attractors & velocity fields',
      'Customizable physics parameter sliders (mass, friction, elasticity, wave speed)',
      'Clean interactive canvas UI with dark theme glassmorphism',
    ],
    tags: ['JavaScript', 'WebGL', 'Physics Simulation', 'Canvas API'],
    role: 'Creator & Lead Developer',
    github: 'https://github.com/kunalmamgai/physicshub.github.io',
    demo: 'https://kunalmamgai.github.io/physicshub.github.io',
    highlight: false,
  },
  {
    id: 'hackmatrix-ewaste',
    title: 'HackMatrix: Smart AI E-Waste Recycling Hub',
    type: 'HackMatrix Hackathon by Linpack Club',
    category: 'Hackathon',
    badge: 'AI & GreenTech',
    description:
      'An intelligent platform created for the HackMatrix Hackathon to tackle the electronic waste crisis by providing AI-driven e-waste classification, recycling drop-off navigation, and eco-credit rewards.',
    image:
      'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&w=1200&q=80',
    images: [
      'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80',
    ],
    outcome:
      'Designed and presented a working prototype connecting electronics owners with verified recycling centers through automated category detection.',
    features: [
      'AI-assisted e-waste component classifier and toxicity rating',
      'Geolocation lookup for closest verified e-waste disposal bins',
      'Eco-rewards ledger incentivizing sustainable recycling',
    ],
    tags: ['JavaScript', 'React', 'AI/ML', 'RESTful APIs', 'Tailwind CSS'],
    role: 'Frontend & Full-Stack Developer',
    github: 'https://github.com/kunalmamgai/HackMatrix_AI-Alchemists',
    demo: '#',
    highlight: false,
  },
  {
    id: 'vityarthi-ai',
    title: 'Vityarthi AI/ML Engine',
    type: 'Machine Learning Academic Platform',
    category: 'Full-Stack',
    badge: 'Machine Learning',
    description:
      'An applied AI/ML system built for student campus workflows, automated academic performance prediction, and personalized study trajectory recommendations.',
    image:
      'https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=1200&q=80',
    images: [
      'https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80',
    ],
    outcome:
      'Implemented predictive machine learning models with Python pipelines and clean RESTful API integration.',
    features: [
      'Predictive analytics regression & classification models',
      'FastAPI microservice endpoints serving inferences in sub-50ms',
      'Interactive student analytics dashboard',
    ],
    tags: ['Python', 'AI/ML', 'FastAPI', 'PyTorch', 'RESTful APIs'],
    role: 'ML Developer',
    github: 'https://github.com/kunalmamgai/Vityarthi-AI_ML-PROJECT',
    demo: '#',
    highlight: false,
  },
]

export const processSteps = [
  {
    step: '01',
    title: 'Mathematical & System Design',
    description:
      'I structure computational physics formulas, 3D geometry coordinates, and AI agent policy boundaries before writing code.',
  },
  {
    step: '02',
    title: 'Modular 3D & Component Building',
    description:
      'I build reusable Three.js scenes, React components, and shaders with strict performance and frame budget constraints.',
  },
  {
    step: '03',
    title: 'FastAPI & AI Agent Integration',
    description:
      'I connect frontends with high-speed Python FastAPI backends, AI reasoning pipelines, and real-time telemetry.',
  },
  {
    step: '04',
    title: 'GPU Polish & 60fps Optimization',
    description:
      'I optimize draw calls, buffer geometries, responsive breakpoints, and tactile audio micro-interactions for an unforgettable experience.',
  },
]

export const terminalCommands = {
  help: 'Available commands: whoami, journey, skills, projects, surya, razorpay, hackathon, simulation, contact, github, linkedin, clear',
  whoami: 'Kunal Mamgai — Full-Stack & WebGL Developer. Builder of 3D digital twins (SURYA), autonomous AI agents (Razorpay AI Buildathon), and INNOVIT Finalist (AR-Chaelogist).',
  journey: '2023: CBSE 10th Topper -> 2023-24: C++ DSA -> 2024: 3D WebGL & PhysicsHub -> 2024-25: INNOVIT Finalist (AR-Chaelogist) & Razorpay AI Agent -> Present: SURYA 3D Digital Twin & Full-Stack',
  skills: '3D/Graphics: Three.js, WebGL, Canvas API | Frontend: React, Tailwind CSS, JS, Framer Motion | Backend & AI: Python, FastAPI, AI Agents, Node.js, MongoDB | CS: C++, DSA',
  projects: '1. SURYA: Hybrid Renewable VPP 3D Digital Twin | 2. Razorpay AI Payment Risk Agent | 3. AR-Chaelogist (INNOVIT Finalist) | 4. PhysicsHub Visualizer | 5. HackMatrix E-Waste | 6. Vityarthi AI/ML',
  surya: 'SURYA: Hybrid Renewable VPP platform with live 3D Digital Twin of VIT Bhopal campus (Three.js + WebGL + React + CleanTech). Repo: github.com/kunalmamgai/Hybrid-Renewable-VPP',
  razorpay: 'Razorpay AI Buildathon: Autonomous payment risk & recovery agent analyzing transaction anomalies with policy-gated decisions. Repo: github.com/kunalmamgai/Razorpay-Buildathon',
  hackathon: 'INNOVIT Hackathon Finalist (AR-Chaelogist) + Razorpay AI Buildathon (Payment Risk Agent) + HackMatrix (AI E-Waste Hub).',
  simulation: 'Launching interactive particle physics simulator! Scroll to #simulation section to interact with force fields.',
  contact: 'Email: kunalmamgai@gmail.com | GitHub: github.com/kunalmamgai | LinkedIn: linkedin.com/in/kunal-mamgai-777k/',
  github: 'Opening GitHub profile: https://github.com/kunalmamgai',
  linkedin: 'Opening LinkedIn profile: https://www.linkedin.com/in/kunal-mamgai-777k/',
}
