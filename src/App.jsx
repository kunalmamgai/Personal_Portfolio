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
  FiVolume2,
  FiVolumeX,
  FiActivity,
  FiBox,
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

import WebGLScene from './components/WebGLScene'
import Hero3DCanvas from './components/Hero3DCanvas'
import PhysicsSimulator from './components/PhysicsSimulator'
import Toast from './components/Toast'
import TerminalModal from './components/TerminalModal'
import CommandPalette from './components/CommandPalette'
import JourneyTimeline from './components/JourneyTimeline'
import SkillsMatrix from './components/SkillsMatrix'
import ProjectModal from './components/ProjectModal'
import HackathonSpotlight from './components/HackathonSpotlight'
import TechIcon from './components/TechIcon'
import { audio } from './utils/AudioEffects'

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
  const [isMuted, setIsMuted] = useState(false)

  const showToast = (msg) => {
    setToastMessage(msg)
    audio.playChime()
    setTimeout(() => setToastMessage(''), 3500)
  }

  const copyEmail = () => {
    navigator.clipboard.writeText('kunalmamgai@gmail.com')
    showToast('Email address copied to clipboard!')
  }

  const toggleAudio = () => {
    const muted = audio.toggleMute()
    setIsMuted(muted)
    if (!muted) {
      audio.playChime()
      showToast('Cyber Audio FX Enabled ⚡')
    } else {
      showToast('Audio FX Muted')
    }
  }

  const filteredProjects = projectFilter === 'All'
    ? projects
    : projects.filter((p) => p.category === projectFilter)

  return (
    <div className="relative min-h-screen bg-slate-950 text-slate-100 selection:bg-cyan-500/30 selection:text-white">
      {/* 3D WebGL Three.js Reactive Background Scene */}
      <WebGLScene />

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
        onOpenTerminal={() => {
          setIsTerminalOpen(true)
          audio.playWarp()
        }}
      />

      {/* Project Case Study Modal with Full-Width Carousel */}
      <ProjectModal
        project={selectedProject}
        isOpen={Boolean(selectedProject)}
        onClose={() => setSelectedProject(null)}
      />

      {/* Glassmorphic Navigation Bar */}
      <header className="sticky top-0 z-40 border-b border-white/10 bg-slate-950/70 backdrop-blur-2xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          {/* Brand Mark */}
          <a
            href="#home"
            onMouseEnter={() => audio.playHover()}
            className="flex items-center gap-3 text-white group"
          >
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
                onMouseEnter={() => audio.playHover()}
                onClick={() => audio.playClick()}
                className="text-xs font-semibold uppercase tracking-wider text-slate-300 hover:text-cyan-300 transition"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Quick Action Controls */}
          <div className="flex items-center gap-3">
            {/* Audio Toggle Button */}
            <button
              onClick={toggleAudio}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/5 text-slate-300 hover:border-cyan-400/40 hover:text-cyan-300 transition"
              title={isMuted ? 'Unmute Audio FX' : 'Mute Audio FX'}
            >
              {isMuted ? <FiVolumeX className="text-sm" /> : <FiVolume2 className="text-sm text-cyan-400" />}
            </button>

            <button
              onClick={() => {
                setIsPaletteOpen(true)
                audio.playClick()
              }}
              onMouseEnter={() => audio.playHover()}
              className="hidden sm:inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-slate-300 hover:border-cyan-400/30 hover:text-white transition"
              title="Command Palette (Cmd+K)"
            >
              <FiCommand className="text-cyan-400" />
              <span>Cmd+K</span>
            </button>

            <button
              onClick={() => {
                setIsTerminalOpen(true)
                audio.playWarp()
              }}
              onMouseEnter={() => audio.playHover()}
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
        {/* HERO SECTION WITH 3D WEBGL CORE & FLOATING ORBITERS */}
        <section className="relative mx-auto grid max-w-7xl gap-12 px-6 pb-20 pt-14 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:pb-28 lg:pt-20 items-center">
          <Motion.div
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.7 }}
            variants={fadeUp}
          >
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-1.5 text-xs font-semibold text-cyan-200 mb-6">
              <span className="h-2 w-2 rounded-full bg-cyan-400 animate-ping" />
              <span>Full-Stack 3D WebGL & Applied AI Systems Engineer</span>
            </div>

            <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white leading-[1.05] tracking-tight">
              Engineering <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-400 to-indigo-400">3D WebGL</span> & Autonomous AI Platforms
            </h1>

            <p className="mt-6 max-w-2xl text-base sm:text-lg leading-relaxed text-slate-300">
              {developerProfile.intro} Creator of <strong>SURYA 3D Digital Twin</strong>, <strong>Razorpay AI Risk Agent</strong>, and <strong>AR-Chaelogist</strong>.
            </p>

            {/* Tech Badges Row with Logos */}
            <div className="mt-6 flex flex-wrap gap-2.5">
              {heroOrbiterLogos.map((tech) => (
                <span
                  key={tech.name}
                  onMouseEnter={() => audio.playHover()}
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-slate-900 px-3.5 py-1.5 text-xs font-semibold text-slate-200 shadow-md hover:border-cyan-400/40 transition"
                >
                  <TechIcon name={tech.name} size="sm" showLabel={true} />
                </span>
              ))}
            </div>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#projects"
                onClick={() => audio.playClick()}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-cyan-400 px-6 py-3.5 text-sm font-bold text-slate-950 hover:bg-cyan-300 transition shadow-[0_4px_20px_rgba(34,211,238,0.4)]"
              >
                <span>Explore 3D Projects</span>
                <FiArrowRight />
              </a>
              <a
                href="#simulation"
                onClick={() => audio.playClick()}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-cyan-400/40 bg-cyan-400/10 px-6 py-3.5 text-sm font-semibold text-cyan-200 hover:bg-cyan-400/20 transition"
              >
                <FiActivity className="text-cyan-400" />
                <span>Launch Physics Lab</span>
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
                  className="rounded-2xl border border-white/10 bg-slate-900/50 p-4 backdrop-blur-md hover:border-cyan-400/30 transition"
                >
                  <p className="font-display text-lg sm:text-xl font-bold text-cyan-300">{st.value}</p>
                  <p className="mt-1 text-xs text-slate-400 leading-snug">{st.label}</p>
                </div>
              ))}
            </div>
          </Motion.div>

          {/* Profile Visual Card with 3D Gyroscope Canvas */}
          <Motion.div
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.7, delay: 0.15 }}
            variants={fadeUp}
            className="relative flex flex-col items-center"
          >
            {/* Interactive 3D Gyroscope Canvas */}
            <div className="relative mb-6 rounded-3xl border border-cyan-400/30 bg-slate-900/60 p-2 backdrop-blur-2xl shadow-[0_20px_60px_rgba(2,6,23,0.8)] ring-1 ring-cyan-400/20">
              <Hero3DCanvas />
            </div>

            {/* Profile Photo Card */}
            <div className="relative w-full max-w-md overflow-hidden rounded-[2.2rem] border border-cyan-400/30 bg-slate-900/80 p-4 backdrop-blur-2xl shadow-[0_20px_60px_rgba(2,6,23,0.8)] ring-1 ring-cyan-400/20">
              <div className="relative overflow-hidden rounded-[1.6rem]">
                <img
                  src={developerProfile.image}
                  alt={developerProfile.alt}
                  className="h-64 sm:h-72 w-full object-cover object-top saturate-110"
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

        {/* PROJECTS SHOWCASE SECTION (FEATURING REAL GITHUB REPOSITORIES) */}
        <section id="projects" className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.38em] text-cyan-400">
                GitHub Repositories & Real Systems
              </span>
              <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">
                Featured Projects Showcase
              </h2>
              <p className="mt-4 max-w-xl text-base text-slate-300">
                Live 3D Digital Twins, autonomous AI risk agents, AR/VR platforms, and physics simulators directly from my GitHub. Click any card to open full-width screenshot carousels and repository details.
              </p>
            </div>

            {/* Filter Pills */}
            <div className="flex flex-wrap gap-2">
              {['All', 'Full-Stack', 'Hackathon', 'Frontend'].map((category) => (
                <button
                  key={category}
                  onClick={() => {
                    setProjectFilter(category)
                    audio.playClick()
                  }}
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
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.map((project, idx) => (
              <Motion.article
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                onClick={() => {
                  setSelectedProject(project)
                  audio.playWarp()
                }}
                className="group cursor-pointer overflow-hidden rounded-3xl border border-white/10 bg-slate-900/60 backdrop-blur-xl hover:border-cyan-400/40 transition duration-300 shadow-[0_16px_40px_rgba(2,6,23,0.6)] flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-56 w-full overflow-hidden bg-slate-950">
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
                    <h3 className="mt-2 font-display text-xl font-bold text-white group-hover:text-cyan-300 transition">
                      {project.title}
                    </h3>
                    <p className="mt-3 text-xs sm:text-sm text-slate-300 leading-relaxed line-clamp-2">
                      {project.description}
                    </p>
                  </div>
                </div>

                {/* Tech Logos & Links Row */}
                <div className="px-6 pb-6 pt-2 border-t border-white/5 flex flex-col gap-3">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="flex items-center gap-1.5 rounded-full border border-white/10 bg-slate-950 px-2.5 py-1 text-[11px] text-slate-300"
                      >
                        <TechIcon name={tag} size="sm" showLabel={true} />
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between text-xs text-cyan-300 pt-1">
                    <span className="font-semibold group-hover:underline flex items-center gap-1">
                      View 3D Case Study <FiArrowRight />
                    </span>
                    {project.github && (
                      <span className="text-slate-400 flex items-center gap-1">
                        <FiGithub /> GitHub
                      </span>
                    )}
                  </div>
                </div>
              </Motion.article>
            ))}
          </div>
        </section>

        {/* INTERACTIVE WEBGL PHYSICS SIMULATION LAB */}
        <PhysicsSimulator />

        {/* HACKATHON FEATURE SPOTLIGHT */}
        <HackathonSpotlight />

        {/* SKILLS MATRIX SECTION */}
        <SkillsMatrix />

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
                  Engineering Philosophy
                </span>
                <h2 className="mt-3 font-display text-3xl sm:text-4xl font-extrabold text-white">
                  Bridging complex computation with stunning visual artistry.
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

        {/* WORK PROCESS SECTION */}
        <section id="process" className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="rounded-[2.5rem] border border-white/10 bg-slate-900/50 p-8 sm:p-12 backdrop-blur-xl">
            <div className="max-w-2xl mb-12">
              <span className="text-xs font-semibold uppercase tracking-[0.38em] text-cyan-400">
                Engineering Workflow
              </span>
              <h2 className="mt-3 font-display text-3xl sm:text-4xl font-extrabold text-white">
                How I Architect High-End Software Products
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
                  Ready to collaborate on high-performance 3D & full-stack systems?
                </h2>
                <p className="mt-4 max-w-2xl text-sm sm:text-base text-slate-300">
                  Whether you have an applied AI system, 3D WebGL digital twin, hackathon team, or software engineering opportunity, let&apos;s build something extraordinary!
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="mailto:kunalmamgai@gmail.com"
                  onClick={() => audio.playClick()}
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
                  onClick={() => audio.playClick()}
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
            © {new Date().getFullYear()} Kunal Mamgai. Built with React 19, Three.js, WebGL, Tailwind CSS v4, and Framer Motion.
          </footer>
        </section>
      </main>
    </div>
  )
}
