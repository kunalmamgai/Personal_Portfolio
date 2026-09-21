import { useState } from 'react'
import { motion as Motion } from 'framer-motion'
import {
  FiArrowRight,
  FiCode,
  FiExternalLink,
  FiGithub,
  FiLinkedin,
  FiMail,
  FiTerminal,
  FiCommand,
  FiCopy,
  FiMapPin,
  FiMaximize2,
} from 'react-icons/fi'
import {
  developerProfile,
  featuredSkills,
  navigation,
  processSteps,
  projects,
  socialLinks,
  stats,
  heroOrbiterLogos,
} from './data/portfolio'

import BackgroundCanvas from './components/BackgroundCanvas'
import Toast from './components/Toast'
import TerminalModal from './components/TerminalModal'
import CommandPalette from './components/CommandPalette'
import JourneyTimeline from './components/JourneyTimeline'
import SkillsMatrix from './components/SkillsMatrix'
import ProjectModal from './components/ProjectModal'
import HackathonSpotlight from './components/HackathonSpotlight'
import TechIcon from './components/TechIcon'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
}

export default function App() {
  const [isTerminalOpen, setIsTerminalOpen] = useState(false)
  const [isPaletteOpen, setIsPaletteOpen] = useState(false)
  const [selectedProject, setSelectedProject] = useState(null)
  const [projectFilter, setProjectFilter] = useState('All')
  const [toastMessage, setToastMessage] = useState('')

  const showToast = (msg) => {
    setToastMessage(msg)
    setTimeout(() => setToastMessage(''), 3500)
  }

  const copyEmail = () => {
    navigator.clipboard.writeText('kunalmamgai@gmail.com')
    showToast('Email address copied to clipboard!')
  }

  const filteredProjects = projectFilter === 'All'
    ? projects
    : projects.filter((p) => p.category === projectFilter)

  return (
    <div className="relative min-h-screen bg-slate-950 text-slate-100 selection:bg-cyan-500/30 selection:text-white">
      {/* Interactive Background Grid */}
      <BackgroundCanvas />

      {/* Toast Notification System */}
      <Toast message={toastMessage} onClose={() => setToastMessage('')} />

      {/* Terminal Modal Drawer */}
      <TerminalModal
        isOpen={isTerminalOpen}
        onClose={() => setIsTerminalOpen(false)}
      />

      {/* Command Palette */}
      <CommandPalette
        isOpen={isPaletteOpen}
        onClose={() => setIsPaletteOpen(false)}
        onOpenTerminal={() => setIsTerminalOpen(true)}
      />

      {/* Project Case Study Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={Boolean(selectedProject)}
        onClose={() => setSelectedProject(null)}
      />

      {/* Glassmorphic Navigation Bar */}
      <header className="sticky top-0 z-40 border-b border-white/10 bg-slate-950/70 backdrop-blur-2xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          {/* Brand Mark */}
          <a href="#home" className="flex items-center gap-3 text-white group">
            <span className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-2xl border border-cyan-400/40 bg-slate-900 shadow-[0_4px_20px_rgba(34,211,238,0.25)] group-hover:scale-105 transition">
              <span className="font-display font-black text-sm text-cyan-300">KM</span>
            </span>
            <span className="font-display text-lg font-bold tracking-wide">Kunal.dev</span>
          </a>

          {/* Desktop Links */}
          <nav className="hidden items-center gap-7 lg:flex">
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-xs font-semibold uppercase tracking-wider text-slate-300 hover:text-cyan-300 transition"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Quick Action Controls */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsPaletteOpen(true)}
              className="hidden sm:inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-slate-300 hover:border-cyan-400/30 hover:text-white transition"
              title="Command Palette (Cmd+K)"
            >
              <FiCommand className="text-cyan-400" />
              <span>Cmd+K</span>
            </button>

            <button
              onClick={() => setIsTerminalOpen(true)}
              className="inline-flex items-center gap-2 rounded-full border border-cyan-400/40 bg-cyan-400/10 px-4 py-2 text-xs font-bold text-cyan-200 hover:border-cyan-300 hover:bg-cyan-300/20 transition shadow-[0_0_15px_rgba(34,211,238,0.2)]"
            >
              <FiTerminal />
              <span>Terminal CLI</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main id="home" className="relative z-10">
        {/* HERO SECTION WITH FLOATING TECH ORBITERS */}
        <section className="relative mx-auto grid max-w-7xl gap-12 px-6 pb-20 pt-16 lg:grid-cols-[1.15fr_0.85fr] lg:px-8 lg:pb-28 lg:pt-24 items-center">
          <Motion.div
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.7 }}
            variants={fadeUp}
          >
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-1.5 text-xs font-semibold text-cyan-200 mb-6">
              <span className="h-2 w-2 rounded-full bg-cyan-400 animate-ping" />
              <span>INNOVIT Hackathon Finalist & Full-Stack Developer</span>
            </div>

            <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white leading-[1.05] tracking-tight">
              Crafting <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-400 to-indigo-400">Full-Stack</span> Web Masterpieces
            </h1>

            <p className="mt-6 max-w-2xl text-base sm:text-lg leading-relaxed text-slate-300">
              {developerProfile.intro} Building with modern React, FastAPI, Python, C++ DSA, and Tailwind CSS.
            </p>

            {/* Tech Badges Row */}
            <div className="mt-6 flex flex-wrap gap-2.5">
              {heroOrbiterLogos.map((tech) => (
                <span
                  key={tech.name}
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-slate-900 px-3.5 py-1.5 text-xs font-semibold text-slate-200 shadow-md"
                >
                  <TechIcon name={tech.name} size="sm" showLabel={true} />
                </span>
              ))}
            </div>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-cyan-400 px-6 py-3.5 text-sm font-bold text-slate-950 hover:bg-cyan-300 transition shadow-[0_4px_20px_rgba(34,211,238,0.4)]"
              >
                <span>Explore Visual Projects</span>
                <FiArrowRight />
              </a>
              <button
                onClick={copyEmail}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white hover:bg-white/10 transition"
              >
                <span>Copy Email</span>
                <FiCopy />
              </button>
            </div>

            {/* Live Stats Row */}
            <div className="mt-12 grid gap-4 grid-cols-2 sm:grid-cols-4">
              {stats.map((st) => (
                <div
                  key={st.label}
                  className="rounded-2xl border border-white/10 bg-slate-900/50 p-4 backdrop-blur-md"
                >
                  <p className="font-display text-lg sm:text-xl font-bold text-cyan-300">{st.value}</p>
                  <p className="mt-1 text-xs text-slate-400 leading-snug">{st.label}</p>
                </div>
              ))}
            </div>
          </Motion.div>

          {/* Profile Visual Card with Floating Logo Orbiters */}
          <Motion.div
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.7, delay: 0.15 }}
            variants={fadeUp}
            className="relative"
          >
            {/* Floating Orbiting Tech Badges */}
            <Motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-6 -left-6 z-20 hidden sm:flex items-center gap-2 rounded-2xl border border-cyan-400/40 bg-slate-950/90 px-4 py-2.5 shadow-[0_10px_30px_rgba(34,211,238,0.3)] backdrop-blur-md"
            >
              <TechIcon name="React" size="md" showLabel={true} />
            </Motion.div>

            <Motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
              className="absolute top-1/3 -right-6 z-20 hidden sm:flex items-center gap-2 rounded-2xl border border-amber-400/40 bg-slate-950/90 px-4 py-2.5 shadow-[0_10px_30px_rgba(245,158,11,0.3)] backdrop-blur-md"
            >
              <TechIcon name="Python" size="md" showLabel={true} />
            </Motion.div>

            <Motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              className="absolute -bottom-6 left-1/4 z-20 hidden sm:flex items-center gap-2 rounded-2xl border border-blue-400/40 bg-slate-950/90 px-4 py-2.5 shadow-[0_10px_30px_rgba(59,130,246,0.3)] backdrop-blur-md"
            >
              <TechIcon name="C++" size="md" showLabel={true} />
            </Motion.div>

            {/* Profile Photo Card */}
            <div className="relative overflow-hidden rounded-[2.2rem] border border-cyan-400/30 bg-slate-900/80 p-4 backdrop-blur-2xl shadow-[0_20px_60px_rgba(2,6,23,0.8)] ring-1 ring-cyan-400/20">
              <div className="relative overflow-hidden rounded-[1.6rem]">
                <img
                  src={developerProfile.image}
                  alt={developerProfile.alt}
                  className="h-[26rem] w-full object-cover object-top saturate-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
                
                <div className="absolute bottom-4 left-4 right-4 rounded-2xl border border-white/15 bg-slate-950/80 p-4 backdrop-blur-md">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-display text-lg font-bold text-white">{developerProfile.name}</h3>
                      <p className="text-xs text-cyan-300">{developerProfile.role}</p>
                    </div>
                    <div className="flex items-center gap-1.5 text-xs text-slate-400">
                      <FiMapPin className="text-cyan-400" />
                      <span>Haldwani</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Motion.div>
        </section>

        {/* TECHNICAL JOURNEY SECTION */}
        <JourneyTimeline />

        {/* ABOUT & PHILOSOPHY SECTION */}
        <section id="about" className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <Motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            variants={fadeUp}
            className="rounded-[2.5rem] border border-white/10 bg-slate-900/50 p-8 sm:p-12 backdrop-blur-xl"
          >
            <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] items-center">
              <div>
                <span className="text-xs font-semibold uppercase tracking-[0.38em] text-cyan-400">
                  Engineering Mindset
                </span>
                <h2 className="mt-3 font-display text-3xl sm:text-4xl font-extrabold text-white">
                  Crafting code that scales and interfaces that inspire.
                </h2>
                <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed">
                  {developerProfile.bio}
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-3">
                {featuredSkills.map((sk) => (
                  <div
                    key={sk.title}
                    className="rounded-2xl border border-white/10 bg-slate-950/80 p-5"
                  >
                    <h3 className="font-display font-bold text-base text-white">{sk.title}</h3>
                    <p className="mt-2 text-xs text-slate-400 leading-relaxed">{sk.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </Motion.div>
        </section>

        {/* SKILLS MATRIX SECTION */}
        <SkillsMatrix />

        {/* PROJECTS SHOWCASE SECTION */}
        <section id="projects" className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.38em] text-cyan-400">
                Full-Width Visual Work
              </span>
              <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">
                Projects Showcase
              </h2>
              <p className="mt-4 max-w-xl text-base text-slate-300">
                Click any project card to view full-size multi-screenshot carousels and architecture details.
              </p>
            </div>

            {/* Filter Pills */}
            <div className="flex flex-wrap gap-2">
              {['All', 'Hackathon', 'Full-Stack', 'Frontend'].map((category) => (
                <button
                  key={category}
                  onClick={() => setProjectFilter(category)}
                  className={`rounded-full px-4 py-2 text-xs font-medium transition ${
                    projectFilter === category
                      ? 'bg-cyan-400 text-slate-950 font-bold shadow-[0_4px_15px_rgba(34,211,238,0.4)]'
                      : 'border border-white/10 bg-white/5 text-slate-400 hover:text-white'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Projects Grid with Full-Width Visual Screenshots */}
          <div className="grid gap-8 md:grid-cols-2">
            {filteredProjects.map((project, idx) => (
              <Motion.article
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                onClick={() => setSelectedProject(project)}
                className="group cursor-pointer overflow-hidden rounded-3xl border border-white/10 bg-slate-900/60 backdrop-blur-xl hover:border-cyan-400/40 transition duration-300 shadow-[0_16px_40px_rgba(2,6,23,0.6)] flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-slate-950">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="h-full w-full object-cover group-hover:scale-105 transition duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
                    
                    <span className="absolute top-4 left-4 rounded-full bg-slate-950/80 border border-white/20 px-3 py-1 text-[10px] font-bold text-cyan-300 uppercase tracking-wider backdrop-blur">
                      {project.badge}
                    </span>

                    <button
                      className="absolute bottom-4 right-4 flex h-9 w-9 items-center justify-center rounded-full bg-slate-950/80 border border-white/20 text-white backdrop-blur group-hover:bg-cyan-400 group-hover:text-slate-950 transition"
                      title="View Full Case Study & Gallery"
                    >
                      <FiMaximize2 className="text-sm" />
                    </button>
                  </div>

                  <div className="p-6">
                    <span className="text-xs font-mono text-cyan-400">{project.type}</span>
                    <h3 className="mt-2 font-display text-2xl font-bold text-white group-hover:text-cyan-300 transition">
                      {project.title}
                    </h3>
                    <p className="mt-3 text-sm text-slate-300 leading-relaxed line-clamp-2">
                      {project.description}
                    </p>
                  </div>
                </div>

                {/* Tech Logos Row */}
                <div className="px-6 pb-6 pt-2 border-t border-white/5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="flex items-center gap-1.5 rounded-full border border-white/10 bg-slate-950 px-3 py-1 text-xs text-slate-300"
                    >
                      <TechIcon name={tag} size="sm" showLabel={true} />
                    </span>
                  ))}
                </div>
              </Motion.article>
            ))}
          </div>
        </section>

        {/* HACKATHON FEATURE SPOTLIGHT */}
        <HackathonSpotlight />

        {/* WORK PROCESS SECTION */}
        <section id="process" className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="rounded-[2.5rem] border border-white/10 bg-slate-900/50 p-8 sm:p-12 backdrop-blur-xl">
            <div className="max-w-2xl mb-12">
              <span className="text-xs font-semibold uppercase tracking-[0.38em] text-cyan-400">
                Engineering Workflow
              </span>
              <h2 className="mt-3 font-display text-3xl sm:text-4xl font-extrabold text-white">
                How I Build Software Products
              </h2>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {processSteps.map((step) => (
                <div
                  key={step.step}
                  className="rounded-2xl border border-white/10 bg-slate-950/80 p-6 flex flex-col justify-between"
                >
                  <div>
                    <span className="font-mono text-2xl font-bold text-cyan-400">{step.step}</span>
                    <h3 className="mt-4 font-display text-lg font-bold text-white">{step.title}</h3>
                    <p className="mt-3 text-xs text-slate-400 leading-relaxed">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT SECTION & FOOTER */}
        <section id="contact" className="mx-auto max-w-7xl px-6 pb-24 pt-12 lg:px-8">
          <Motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="rounded-[2.5rem] border border-cyan-400/30 bg-gradient-to-br from-cyan-950/40 via-slate-900 to-slate-950 p-8 sm:p-12 shadow-[0_20px_70px_rgba(2,6,23,0.8)]"
          >
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] items-center">
              <div>
                <span className="text-xs font-semibold uppercase tracking-[0.38em] text-cyan-400">
                  Let&apos;s Build Together
                </span>
                <h2 className="mt-3 font-display text-3xl sm:text-5xl font-extrabold text-white leading-tight">
                  Interested in building extraordinary web projects?
                </h2>
                <p className="mt-4 max-w-2xl text-sm sm:text-base text-slate-300">
                  Whether you have a full-stack web project, hackathon collaboration, or engineering role, I am excited to connect!
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="mailto:kunalmamgai@gmail.com"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-cyan-400 px-6 py-3.5 text-sm font-bold text-slate-950 hover:bg-cyan-300 transition shadow-[0_4px_20px_rgba(34,211,238,0.4)]"
                >
                  <FiMail />
                  <span>kunalmamgai@gmail.com</span>
                </a>
                <button
                  onClick={copyEmail}
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white hover:bg-white/10 transition"
                >
                  <FiCopy />
                  <span>Copy</span>
                </button>
              </div>
            </div>

            {/* Social Buttons */}
            <div className="mt-12 flex flex-wrap gap-4 border-t border-white/10 pt-8">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-xs text-slate-200 hover:border-cyan-400/40 hover:text-white transition"
                >
                  {link.label === 'GitHub' && <FiGithub className="text-cyan-400 text-sm" />}
                  {link.label === 'LinkedIn' && <FiLinkedin className="text-cyan-400 text-sm" />}
                  {link.label === 'Email' && <FiMail className="text-cyan-400 text-sm" />}
                  <span>{link.label}: {link.username}</span>
                </a>
              ))}
            </div>
          </Motion.div>

          <footer className="mt-12 text-center text-xs text-slate-500 font-mono">
            © {new Date().getFullYear()} Kunal Mamgai. Built with React 19, Tailwind CSS v4, and Framer Motion.
          </footer>
        </section>
      </main>
    </div>
  )
}
