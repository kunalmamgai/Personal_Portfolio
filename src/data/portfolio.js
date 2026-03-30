import profileImage from '../assets/profile.jpeg'

export const navigation = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Process', href: '#process' },
  { label: 'Contact', href: '#contact' },
]

export const stats = [
  { value: 'Full-Stack', label: 'Building across frontend and backend' },
  { value: 'React + FastAPI', label: 'Current hands-on development stack' },
  { value: 'C++ DSA', label: 'Strengthening problem-solving every day' },
]

export const featuredSkills = [
  {
    title: 'Responsive UI Engineering',
    description:
      'Building layouts that scale cleanly across desktop, tablet, and mobile without losing visual hierarchy.',
  },
  {
    title: 'Design Systems',
    description:
      'Turning repeated patterns into reusable components, spacing rules, and visual tokens that keep interfaces consistent.',
  },
  {
    title: 'Interaction Design',
    description:
      'Using motion, hover states, and purposeful transitions to make interfaces feel intuitive and alive.',
  },
]

export const stack = [
  'HTML5',
  'CSS3',
  'JavaScript',
  'React',
  'Python',
  'FastAPI',
  'REST APIs',
  'Backend Development',
  'C++',
  'DSA Practice',
  'MERN Learning',
  'Framer Motion',
  'Git & GitHub',
  'Adaptable Learning',
]

export const skillHighlights = [
  {
    title: 'Frontend Craft',
    items: ['React', 'Responsive Design', 'UI Polish', 'Clean Components'],
    accent: 'cyan',
  },
  {
    title: 'Backend Growth',
    items: ['Python', 'FastAPI', 'REST APIs', 'Full-Stack Thinking'],
    accent: 'orange',
  },
  {
    title: 'Problem Solving',
    items: ['C++', 'DSA Practice', 'Debugging', 'Fast Learning'],
    accent: 'slate',
  },
]

export const featuredTech = [
  'React',
  'HTML5',
  'CSS3',
  'JavaScript',
  'Python',
  'FastAPI',
  'C++',
]

export const projects = [
  {
    title: 'AR-Chaelogist',
    type: 'Hackathon finalist project',
    description:
      'A platform built to give users immersive AR and VR tours of Indian heritage and culture, helping them explore historical experiences digitally before planning physical visits.',
    image:
      'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=1200&q=80',
    outcome:
      'The project reached the finals of the INNOVIT hackathon and showcased a strong blend of cultural storytelling, immersive tech, and full-stack execution.',
    tags: ['React', 'Tailwind CSS', 'FastAPI', 'Python', 'Vercel', 'Render'],
    role: 'Team Lead, Frontend Developer, Backend Developer',
    github: 'https://github.com/kunalmamgai/INNOVIT-HACKATHON',
    demo: 'https://heritage-and-culture-portal.vercel.app/',
  },
  {
    title: 'Personal Portfolio Website',
    type: 'Developer portfolio project',
    description:
      'A modern personal portfolio built to present my identity, skills, projects, and frontend strengths through a polished responsive interface.',
    outcome:
      'Designed to showcase my frontend presentation, personal branding, responsiveness, and growing full-stack profile in a clean single-page experience.',
    tags: ['React', 'Tailwind CSS', 'Framer Motion', 'Responsive Design'],
    role: 'Designer and Developer',
    kind: 'portfolio-preview',
  },
  {
    title: 'Studio Canvas',
    type: 'Creative agency landing page',
    description:
      'A bold landing page with editorial typography, immersive imagery, and animated section reveals for stronger first impressions.',
    image:
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80',
    outcome: 'Created a more memorable brand presence while keeping load and interaction costs reasonable.',
    tags: ['Brand UI', 'Motion', 'Landing Pages'],
  },
]

export const processSteps = [
  {
    title: 'Design-aware development',
    description:
      'I translate design intent into code without flattening the personality of the interface.',
  },
  {
    title: 'Component-first thinking',
    description:
      'I break layouts into maintainable, reusable building blocks so features scale with less friction.',
  },
  {
    title: 'Performance-minded polish',
    description:
      'I pay attention to spacing, loading, image balance, and interaction cost to keep the experience smooth.',
  },
]

export const gallery = [
  {
    src: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80',
    alt: 'Designer working on interface layout',
  },
  {
    src: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=80',
    alt: 'Charts and dashboard analytics on screen',
  },
  {
    src: 'https://images.unsplash.com/photo-1516321165247-4aa89a48be28?auto=format&fit=crop&w=900&q=80',
    alt: 'Frontend developer workspace setup',
  },
]

export const developerProfile = {
  name: 'Kunal Mamgai',
  role: 'Full-Stack Developer',
  location: 'Haldwani, Uttarakhand',
  image: profileImage,
  alt: 'Portrait of Kunal Mamgai',
  intro:
    'I build clean, modern web experiences with a frontend-first mindset while growing into full-stack development through React, FastAPI, Python, and the MERN ecosystem.',
  bio: 'I see myself as a fast learner who enjoys improving quickly, adapting to new tools, and steadily growing into a strong full-stack engineer. My goal is to build complete web products with clean frontend experiences, solid backend logic, and the confidence to solve real-world development challenges end to end.',
}

export const socialLinks = [
  { label: 'GitHub', href: 'https://github.com/kunalmamgai' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/kunal-mamgai-777k/' },
  { label: 'Email', href: 'mailto:kunalmamgai@gmail.com' },
]
