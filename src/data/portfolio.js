import profileImage from '../assets/profile.jpeg'

export const navigation = [
  { label: 'Work', href: '#projects' },
  { label: 'Journey', href: '#journey' },
  { label: 'Stack', href: '#skills' },
  { label: 'Hackathons', href: '#hackathon' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export const stats = [
  { value: 'Full-Stack', label: 'React, FastAPI, Node.js & C++' },
  { value: '3D Simulation', label: 'Three.js & Digital Twin Systems' },
  { value: 'Finalist', label: 'INNOVIT National Hackathon' },
  { value: 'AI Systems', label: 'Razorpay AI Buildathon Agent' },
]

export const developerProfile = {
  name: 'Kunal Mamgai',
  role: 'Full-Stack Software Developer',
  location: 'Haldwani, Uttarakhand, India',
  image: profileImage,
  alt: 'Portrait of Kunal Mamgai',
  intro:
    'Full-stack engineer crafting clean, performant web applications, 3D digital twins, and autonomous AI systems with React, FastAPI, Python, and C++.',
  bio: 'Based in Haldwani, Uttarakhand, I build software that balances solid engineering with clean, human-centered interfaces. From placing as a finalist in the national INNOVIT Hackathon with AR-Chaelogist to building SURYA’s 3D campus digital twin and an autonomous payment risk agent for Razorpay AI Buildathon, I enjoy solving difficult technical problems end to end.',
}

export const socialLinks = [
  { label: 'GitHub', href: 'https://github.com/kunalmamgai', username: 'github.com/kunalmamgai' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/kunal-mamgai-777k/', username: 'linkedin.com/in/kunal-mamgai-777k' },
  { label: 'Email', href: 'mailto:kunalmamgai@gmail.com', username: 'kunalmamgai@gmail.com' },
]

export const coreStack = [
  'React',
  'Three.js',
  'Python',
  'FastAPI',
  'C++',
  'JavaScript',
  'Tailwind CSS',
  'Node.js',
  'MongoDB',
  'Git',
  'Vercel',
  'Render',
]

export const technicalJourney = [
  {
    year: '2023',
    period: 'Foundations',
    title: 'Academic Excellence & Initial Spark',
    institution: 'D.A.V. Centenary Public School, Haldwani',
    category: 'Academic',
    badge: 'CBSE 10th Topper',
    description:
      'Scored top academic marks in CBSE Class 10th examinations, building strong mathematical foundations, logical reasoning, and passion for computer science.',
    highlights: [
      'Recognized as school topper for academic consistency',
      'Developed strong mathematical and analytical problem-solving skills',
      'Began self-directed learning in software engineering',
    ],
  },
  {
    year: '2023 - 2024',
    period: 'Computer Science',
    title: 'Data Structures & Algorithms in C++',
    institution: 'Self-Driven Engineering',
    category: 'Core CS',
    badge: 'C++ DSA',
    description:
      'Deep dive into C++ to master fundamental data structures, memory management, algorithm paradigms, and computational time/space complexity.',
    highlights: [
      'Solved comprehensive algorithmic challenges in C++',
      'Mastered trees, graphs, dynamic programming, and OOP concepts',
      'Built disciplined problem-solving habits applicable to full-stack systems',
    ],
  },
  {
    year: '2024',
    period: 'Frontend & 3D',
    title: 'Modern Web Engineering & Interactive Systems',
    institution: 'Interactive Web Labs',
    category: 'Frontend',
    badge: '3D WebGL & React',
    description:
      'Engineered interactive 3D simulations and responsive React web applications using Three.js, HTML5 Canvas, and Tailwind CSS.',
    highlights: [
      'Built GPU-accelerated interactive particle visualizers',
      'Mastered Tailwind CSS and Framer Motion micro-animations',
      'Adopted design token systems and clean component architectures',
    ],
  },
  {
    year: '2024 - 2025',
    period: 'Hackathons',
    title: 'INNOVIT Hackathon Finalist & Razorpay AI Agent',
    institution: 'VIT Bhopal University & Hackathons',
    category: 'Hackathon',
    badge: 'National Finalist',
    description:
      'Led the full-stack architecture for AR-Chaelogist (INNOVIT Finalist) and engineered an autonomous AI Payment Risk & Recovery Agent for Razorpay AI Buildathon.',
    highlights: [
      'Finalist at the national INNOVIT Hackathon with AR-Chaelogist',
      'Engineered autonomous payment risk reasoning agent with Python for Razorpay',
      'Architected SURYA: CleanTech Hybrid Renewable VPP with 3D Digital Twin',
    ],
  },
  {
    year: '2025 - Present',
    period: 'Full-Stack',
    title: 'Production Full-Stack & Applied AI Systems',
    institution: 'Engineering Practice',
    category: 'Full-Stack',
    badge: 'Full-Stack Developer',
    description:
      'Designing robust full-stack web products combining Three.js 3D frontends with high-speed FastAPI Python backends, MERN services, and cloud deployments.',
    highlights: [
      'Built live 3D campus digital twin simulator with Three.js',
      'Designed RESTful API microservices with FastAPI and Python',
      'Deployed production applications to Vercel and Render',
    ],
  },
]

export const skillCategories = [
  {
    id: 'frontend',
    title: 'Frontend & 3D Systems',
    description: 'Clean, responsive interfaces, component libraries, and Three.js 3D rendering.',
    skills: [
      { name: 'React', level: 94, tag: 'Framework' },
      { name: 'Three.js', level: 90, tag: '3D WebGL' },
      { name: 'JavaScript', level: 92, tag: 'Language' },
      { name: 'Tailwind CSS', level: 95, tag: 'Styling' },
      { name: 'HTML5 & CSS3', level: 96, tag: 'Foundations' },
      { name: 'Framer Motion', level: 88, tag: 'Motion' },
    ],
  },
  {
    id: 'backend',
    title: 'Backend & Applied AI',
    description: 'High-speed RESTful APIs, autonomous agents, and database modeling.',
    skills: [
      { name: 'Python', level: 90, tag: 'Language' },
      { name: 'FastAPI', level: 88, tag: 'Framework' },
      { name: 'AI Agent', level: 86, tag: 'Autonomous AI' },
      { name: 'Node.js', level: 82, tag: 'Runtime' },
      { name: 'MongoDB', level: 80, tag: 'Database' },
      { name: 'RESTful APIs', level: 92, tag: 'Architecture' },
    ],
  },
  {
    id: 'cs-logic',
    title: 'Core CS & Logic',
    description: 'Algorithmic efficiency, memory safety, and systems programming.',
    skills: [
      { name: 'C++', level: 88, tag: 'Language' },
      { name: 'Data Structures (DSA)', level: 86, tag: 'Algorithms' },
      { name: 'System Debugging', level: 92, tag: 'Problem Solving' },
    ],
  },
  {
    id: 'tools',
    title: 'Tools & Ecosystem',
    description: 'Modern development workflows and continuous cloud hosting.',
    skills: [
      { name: 'Git', level: 92, tag: 'Version Control' },
      { name: 'GitHub', level: 94, tag: 'Collaboration' },
      { name: 'Vite', level: 92, tag: 'Build Tool' },
      { name: 'Vercel', level: 90, tag: 'Deployment' },
      { name: 'Postman', level: 88, tag: 'API Testing' },
    ],
  },
]

export const projects = [
  {
    id: 'surya-vpp',
    title: 'SURYA: Hybrid Renewable VPP & 3D Digital Twin',
    type: 'CleanTech & 3D Digital Twin Platform',
    category: 'Full-Stack',
    badge: '3D Simulation',
    year: '2025',
    description:
      'A Virtual Power Plant (VPP) platform featuring an interactive 3D digital twin of the VIT Bhopal campus with real-time solar/wind simulations, dynamic weather modeling, and power grid dispatch telemetry.',
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
    tags: ['Three.js', 'React', 'JavaScript', 'Tailwind CSS', '3D Digital Twin'],
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
    year: '2025',
    description:
      'An autonomous AI payment risk & recovery agent built for the Razorpay AI Buildathon. It analyzes failed and flagged transactions, explains risk in plain language, and applies policy-gated decisions (allow / review / block).',
    image:
      'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=80',
    images: [
      'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&w=1200&q=80',
    ],
    outcome:
      'Created an intelligent FinTech recovery pipeline reducing false payment declines while protecting merchants against synthetic fraud.',
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
    year: '2024',
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
    id: 'hackmatrix-ewaste',
    title: 'HackMatrix: Smart AI E-Waste Recycling Hub',
    type: 'HackMatrix Hackathon by Linpack Club',
    category: 'Hackathon',
    badge: 'AI & GreenTech',
    year: '2024',
    description:
      'An intelligent platform created for the HackMatrix Hackathon to tackle electronic waste disposal by providing AI-driven e-waste classification, recycling drop-off navigation, and eco-credit rewards.',
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
]

export const processSteps = [
  {
    step: '01',
    title: 'Architecture & UX Intent',
    description:
      'Analyze requirements, data flows, and interface pacing before building components.',
  },
  {
    step: '02',
    title: 'Modular System Craft',
    description:
      'Build reusable React components and design tokens with strict performance budgets.',
  },
  {
    step: '03',
    title: 'FastAPI & Backend Integration',
    description:
      'Connect frontend views with predictable Python FastAPI endpoints and clean asynchronous state handling.',
  },
  {
    step: '04',
    title: 'Performance & Tactile Polish',
    description:
      'Optimize asset loading, keyboard ergonomics, responsive layout scaling, and human-centered details.',
  },
]

export const terminalCommands = {
  help: 'Available commands: whoami, journey, skills, projects, surya, razorpay, hackathon, contact, github, linkedin, clear',
  whoami: 'Kunal Mamgai — Full-Stack Developer based in Haldwani, Uttarakhand. Builder of SURYA (3D Digital Twin), Razorpay AI Risk Agent, and INNOVIT Finalist (AR-Chaelogist).',
  journey: '2023: CBSE 10th Topper -> 2023-24: C++ DSA -> 2024: 3D WebGL & React -> 2024-25: INNOVIT Finalist & Razorpay AI Agent -> Present: SURYA 3D Digital Twin & Full-Stack Engineering',
  skills: 'Frontend: React, Three.js, Tailwind CSS, JS, Framer Motion | Backend & AI: Python, FastAPI, AI Agents, Node.js, MongoDB | CS: C++, Data Structures & Algorithms',
  projects: '1. SURYA: Hybrid Renewable VPP 3D Digital Twin | 2. Razorpay AI Payment Risk Agent | 3. AR-Chaelogist (INNOVIT Finalist) | 4. HackMatrix E-Waste Hub',
  surya: 'SURYA: Hybrid Renewable VPP platform with live 3D Digital Twin of VIT Bhopal campus. Repo: github.com/kunalmamgai/Hybrid-Renewable-VPP',
  razorpay: 'Razorpay AI Buildathon: Autonomous payment risk & recovery agent. Repo: github.com/kunalmamgai/Razorpay-Buildathon',
  hackathon: 'INNOVIT Hackathon Finalist (AR-Chaelogist) + Razorpay AI Buildathon (Payment Risk Agent) + HackMatrix (AI E-Waste Hub).',
  contact: 'Email: kunalmamgai@gmail.com | GitHub: github.com/kunalmamgai | LinkedIn: linkedin.com/in/kunal-mamgai-777k/',
  github: 'Opening GitHub profile: https://github.com/kunalmamgai',
  linkedin: 'Opening LinkedIn profile: https://www.linkedin.com/in/kunal-mamgai-777k/',
}
