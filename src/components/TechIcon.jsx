import {
  SiReact,
  SiPython,
  SiCplusplus,
  SiTailwindcss,
  SiFastapi,
  SiJavascript,
  SiHtml5,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiGit,
  SiGithub,
  SiVercel,
  SiPostman,
  SiVite,
  SiFramer,
} from 'react-icons/si'
import { FaCss3Alt } from 'react-icons/fa'
import { FiServer, FiLayout, FiBox, FiCode, FiCpu } from 'react-icons/fi'

const iconMap = {
  react: { icon: SiReact, color: '#61DAFB', name: 'React' },
  'react.js': { icon: SiReact, color: '#61DAFB', name: 'React.js' },
  python: { icon: SiPython, color: '#3776AB', name: 'Python' },
  'c++': { icon: SiCplusplus, color: '#00599C', name: 'C++' },
  cpp: { icon: SiCplusplus, color: '#00599C', name: 'C++' },
  'tailwind css': { icon: SiTailwindcss, color: '#06B6D4', name: 'Tailwind CSS' },
  tailwind: { icon: SiTailwindcss, color: '#06B6D4', name: 'Tailwind CSS' },
  'tailwind css v4': { icon: SiTailwindcss, color: '#06B6D4', name: 'Tailwind CSS v4' },
  fastapi: { icon: SiFastapi, color: '#009688', name: 'FastAPI' },
  javascript: { icon: SiJavascript, color: '#F7DF1E', name: 'JavaScript' },
  'javascript (es6+)': { icon: SiJavascript, color: '#F7DF1E', name: 'JavaScript' },
  html5: { icon: SiHtml5, color: '#E34F26', name: 'HTML5' },
  'html5 & css3': { icon: SiHtml5, color: '#E34F26', name: 'HTML5 & CSS3' },
  css3: { icon: FaCss3Alt, color: '#1572B6', name: 'CSS3' },
  'node.js': { icon: SiNodedotjs, color: '#339933', name: 'Node.js' },
  'node.js & express': { icon: SiNodedotjs, color: '#339933', name: 'Node.js' },
  express: { icon: SiExpress, color: '#E2E8F0', name: 'Express' },
  mongodb: { icon: SiMongodb, color: '#47A248', name: 'MongoDB' },
  git: { icon: SiGit, color: '#F05032', name: 'Git' },
  'git & github': { icon: SiGit, color: '#F05032', name: 'Git' },
  github: { icon: SiGithub, color: '#FFFFFF', name: 'GitHub' },
  vercel: { icon: SiVercel, color: '#FFFFFF', name: 'Vercel' },
  postman: { icon: SiPostman, color: '#FF6C37', name: 'Postman' },
  vite: { icon: SiVite, color: '#646CFF', name: 'Vite' },
  'framer motion': { icon: SiFramer, color: '#0055FF', name: 'Framer Motion' },
  'restful apis': { icon: FiServer, color: '#38BDF8', name: 'RESTful APIs' },
  'responsive design': { icon: FiLayout, color: '#A855F7', name: 'Responsive Design' },
  'ar/vr': { icon: FiBox, color: '#EC4899', name: 'AR/VR Tech' },
  'data structures (dsa)': { icon: FiCpu, color: '#10B981', name: 'C++ DSA' },
  dsa: { icon: FiCpu, color: '#10B981', name: 'DSA' },
}

export default function TechIcon({ name, size = 'md', showLabel = true, className = '' }) {
  const key = name ? name.toLowerCase().trim() : ''
  const item = iconMap[key] || { icon: FiCode, color: '#38BDF8', name: name || 'Code' }
  const IconComponent = item.icon

  const sizeClasses = {
    sm: 'h-4 w-4 text-xs',
    md: 'h-5 w-5 text-sm',
    lg: 'h-7 w-7 text-base',
    xl: 'h-10 w-10 text-xl',
  }

  return (
    <div className={`inline-flex items-center gap-2 ${className}`}>
      <span
        className="flex items-center justify-center shrink-0 transition duration-300 transform group-hover:scale-110"
        style={{ color: item.color }}
      >
        <IconComponent className={sizeClasses[size] || sizeClasses.md} />
      </span>
      {showLabel && (
        <span className="font-semibold text-slate-200">
          {item.name}
        </span>
      )}
    </div>
  )
}

export { iconMap }
