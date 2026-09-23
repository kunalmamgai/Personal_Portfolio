import { useState } from 'react'
import { motion as Motion } from 'framer-motion'
import {
  FiArrowRight,
  FiGithub,
  FiLinkedin,
  FiMail,
  FiTerminal,
  FiCommand,
  FiCopy,
  FiMapPin,
  FiArrowUpRight,
} from 'react-icons/fi'
import {
  developerProfile,
  featuredSkills,
  navigation,
  processSteps,
  projects,
  socialLinks,
  stats,
  coreStack,
} from './data/portfolio'

import Toast from './components/Toast'
import TerminalModal from './components/TerminalModal'
import CommandPalette from './components/CommandPalette'
import JourneyTimeline from './components/JourneyTimeline'
import SkillsMatrix from './components/SkillsMatrix'
import ProjectModal from './components/ProjectModal'
import HackathonSpotlight from './components/HackathonSpotlight'
import TechIcon from './components/TechIcon'

const fadeUp = {
  hidden: { opacity: 0, y: 15 },
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
    showToast('Email address copied to clipboard')
  }

  const filteredProjects = projectFilter === 'All'
    ? projects
    : projects.filter((p) => p.category === projectFilter)

  return (
    <div className="relative min-h-screen bg-[#0c0d10] text-zinc-100 selection:bg-zinc-800 selection:text-white">
      {/* Toast Notification */}
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

      {/* Minimalist Navigation Header */}
      <header className="sticky top-0 z-40 border-b border-zinc-800/80 bg-[#0c0d10]/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          {/* Brand Mark */}
          <a
            href="#home"
            className="flex items-center gap-2.5 text-zinc-100 group"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-zinc-800 border border-zinc-700 font-mono text-xs font-bold text-zinc-200">
              KM
            </span>
            <span className="font-display font-semibold text-sm tracking-tight">Kunal Mamgai</span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden items-center gap-8 md:flex">
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-xs font-medium uppercase tracking-wider text-zinc-400 hover:text-zinc-100 transition"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Quick Action Controls */}
          <div className="flex items-center gap-2.5">
            <button
              onClick={() => setIsPaletteOpen(true)}
              className="hidden sm:inline-flex items-center gap-2 rounded-lg border border-zinc-800 bg-zinc-900/60 px-3 py-1.5 text-xs text-zinc-400 hover:border-zinc-700 hover:text-zinc-200 transition"
              title="Command Palette (Cmd+K)"
            >
              <FiCommand className="text-zinc-400" />
              <span className="font-mono text-[11px]">⌘K</span>
            </button>

            <button
              onClick={() => setIsTerminalOpen(true)}
              className="inline-flex items-center gap-2 rounded-lg border border-zinc-700 bg-zinc-800/80 px-3.5 py-1.5 text-xs font-medium text-zinc-200 hover:bg-zinc-700 transition"
            >
              <FiTerminal className="text-xs" />
              <span>Terminal</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main id="home">
        {/* HERO SECTION — Clean, Editorial, Human */}
        <section className="mx-auto max-w-7xl px-6 pt-16 pb-20 lg:px-8 lg:pt-24 lg:pb-28">
          <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] items-center">
            <Motion.div
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.5 }}
              variants={fadeUp}
            >
              {/* Status Badge */}
              <div className="inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/70 px-3.5 py-1 text-xs text-zinc-300 mb-6">
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                <span className="font-mono text-[11px]">Available for Full-Stack & Engineering Roles</span>
              </div>

              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-zinc-100 leading-[1.1]">
                Full-stack developer building clean web products, 3D simulations & AI systems.
              </h1>

              <p className="mt-5 max-w-2xl text-base sm:text-lg text-zinc-400 leading-relaxed">
                {developerProfile.intro}
              </p>

              {/* Core Stack Badges */}
              <div className="mt-6 flex flex-wrap gap-2">
                {coreStack.slice(0, 7).map((tech) => (
                  <span
                    key={tech}
                    className="inline-flex items-center gap-1.5 rounded-lg border border-zinc-800/90 bg-zinc-900/60 px-3 py-1 text-xs text-zinc-300"
                  >
                    <TechIcon name={tech} size="sm" showLabel={true} />
                  </span>
                ))}
              </div>

              {/* Action CTAs */}
              <div className="mt-8 flex flex-wrap gap-3.5">
                <a
                  href="#projects"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-zinc-100 px-5 py-2.5 text-xs font-semibold text-zinc-950 hover:bg-zinc-200 transition"
                >
                  <span>Explore Work</span>
                  <FiArrowRight />
                </a>
                <button
                  onClick={copyEmail}
                  className="inline-flex items-center justify-center gap-2 rounded-lg border border-zinc-800 bg-zinc-900/60 px-5 py-2.5 text-xs font-medium text-zinc-300 hover:border-zinc-700 hover:text-white transition"
                >
                  <FiCopy className="text-zinc-400" />
                  <span>kunalmamgai@gmail.com</span>
                </button>
              </div>

              {/* Stats Row */}
              <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-3 pt-8 border-t border-zinc-800/60">
                {stats.map((st) => (
                  <div key={st.label}>
                    <p className="font-display text-base sm:text-lg font-bold text-zinc-200">{st.value}</p>
                    <p className="mt-0.5 text-xs text-zinc-400 leading-snug">{st.label}</p>
                  </div>
                ))}
              </div>
            </Motion.div>

            {/* Profile Photo Card */}
            <Motion.div
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.5, delay: 0.1 }}
              variants={fadeUp}
              className="relative mx-auto w-full max-w-sm lg:max-w-none"
            >
              <div className="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/60 p-2.5 shadow-2xl">
                <div className="relative overflow-hidden rounded-xl bg-zinc-950">
                  <img
                    src={developerProfile.image}
                    alt={developerProfile.alt}
                    className="h-80 sm:h-96 w-full object-cover object-top filter grayscale contrast-105 hover:grayscale-0 transition duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  
                  <div className="absolute bottom-3.5 left-3.5 right-3.5 flex items-center justify-between rounded-lg bg-zinc-900/90 border border-zinc-800/80 px-3.5 py-2.5 backdrop-blur-sm">
                    <div>
                      <p className="font-display font-semibold text-xs text-zinc-200">{developerProfile.name}</p>
                      <p className="text-[11px] text-zinc-400">{developerProfile.role}</p>
                    </div>
                    <div className="flex items-center gap-1 text-[11px] text-zinc-400 font-mono">
                      <FiMapPin className="text-xs text-zinc-400" />
                      <span>Haldwani, IN</span>
                    </div>
                  </div>
                </div>
              </div>
            </Motion.div>
          </div>
        </section>

        {/* WORK / PROJECTS SHOWCASE SECTION (Clean Editorial Grid) */}
        <section id="projects" className="mx-auto max-w-7xl px-6 py-24 lg:px-8 border-t border-zinc-800/80">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="text-xs font-mono font-medium uppercase tracking-widest text-zinc-400">
                Selected Projects
              </span>
              <h2 className="mt-2 font-display text-3xl sm:text-4xl font-bold tracking-tight text-zinc-100">
                Featured Work
              </h2>
              <p className="mt-2 max-w-xl text-sm sm:text-base text-zinc-400">
                Clean full-stack systems, 3D digital twins, and autonomous AI agents. Click any project to inspect the full case study and screenshot gallery.
              </p>
            </div>

            {/* Filter Pills */}
            <div className="flex flex-wrap gap-2">
              {['All', 'Full-Stack', 'Hackathon'].map((category) => (
                <button
                  key={category}
                  onClick={() => setProjectFilter(category)}
                  className={`rounded-full px-3.5 py-1.5 text-xs font-medium transition ${
                    projectFilter === category
                      ? 'bg-zinc-100 text-zinc-950 font-semibold'
                      : 'border border-zinc-800 bg-zinc-900/50 text-zinc-400 hover:text-zinc-200 hover:border-zinc-700'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Minimalist Projects Grid */}
          <div className="grid gap-8 md:grid-cols-2">
            {filteredProjects.map((project, idx) => (
              <Motion.article
                key={project.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.35, delay: idx * 0.05 }}
                onClick={() => setSelectedProject(project)}
                className="group cursor-pointer overflow-hidden rounded-2xl border border-zinc-800/80 bg-zinc-900/30 hover:border-zinc-700 hover:bg-zinc-900/60 transition flex flex-col justify-between"
              >
                <div>
                  {/* Clean uncropped media banner */}
                  <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-zinc-950">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="h-full w-full object-cover filter contrast-[1.02] group-hover:scale-105 transition duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent" />
                    
                    <div className="absolute top-3.5 left-3.5 flex items-center gap-2">
                      <span className="rounded-md bg-zinc-900/90 border border-zinc-700/80 px-2.5 py-0.5 text-[11px] font-mono text-zinc-300 backdrop-blur-sm">
                        {project.badge}
                      </span>
                    </div>

                    <div className="absolute top-3.5 right-3.5">
                      <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-zinc-900/80 border border-zinc-700/80 text-zinc-300 opacity-0 group-hover:opacity-100 transition">
                        <FiArrowUpRight className="text-sm" />
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center justify-between text-xs text-zinc-400 font-mono mb-2">
                      <span>{project.type}</span>
                      <span>{project.year}</span>
                    </div>
                    <h3 className="font-display text-xl font-bold text-zinc-100 group-hover:text-white transition">
                      {project.title}
                    </h3>
                    <p className="mt-2.5 text-sm text-zinc-400 leading-relaxed line-clamp-2">
                      {project.description}
                    </p>
                  </div>
                </div>

                {/* Tags & Action Row */}
                <div className="px-6 pb-6 pt-2 flex flex-wrap items-center justify-between gap-3 border-t border-zinc-800/60">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md border border-zinc-800 bg-zinc-900/80 px-2.5 py-0.5 text-[11px] text-zinc-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <span className="text-xs font-medium text-zinc-300 flex items-center gap-1 group-hover:text-white">
                    Case Study <FiArrowRight className="text-xs" />
                  </span>
                </div>
              </Motion.article>
            ))}
          </div>
        </section>

        {/* TECHNICAL JOURNEY TIMELINE */}
        <JourneyTimeline />

        {/* HACKATHON FEATURE SPOTLIGHT */}
        <HackathonSpotlight />

        {/* SKILLS MATRIX SECTION */}
        <SkillsMatrix />

        {/* ABOUT & PHILOSOPHY SECTION */}
        <section id="about" className="mx-auto max-w-7xl px-6 py-24 lg:px-8 border-t border-zinc-800/80">
          <div className="rounded-2xl border border-zinc-800/80 bg-zinc-900/30 p-8 sm:p-12">
            <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] items-center">
              <div>
                <span className="text-xs font-mono font-medium uppercase tracking-widest text-zinc-400">
                  Engineering Principles
                </span>
                <h2 className="mt-2 font-display text-2xl sm:text-3xl font-bold tracking-tight text-zinc-100">
                  Crafting software that balances technical rigor with human utility.
                </h2>
                <p className="mt-4 text-zinc-400 text-sm sm:text-base leading-relaxed">
                  {developerProfile.bio}
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-3">
                {featuredSkills.map((sk) => (
                  <div
                    key={sk.title}
                    className="rounded-xl border border-zinc-800/80 bg-zinc-900/60 p-5"
                  >
                    <h3 className="font-display font-semibold text-sm text-zinc-200">{sk.title}</h3>
                    <p className="mt-2 text-xs text-zinc-400 leading-relaxed">{sk.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* WORK PROCESS SECTION */}
        <section id="process" className="mx-auto max-w-7xl px-6 py-24 lg:px-8 border-t border-zinc-800/80">
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-mono font-medium uppercase tracking-widest text-zinc-400">
              Workflow
            </span>
            <h2 className="mt-2 font-display text-3xl sm:text-4xl font-bold tracking-tight text-zinc-100">
              How I Build Software
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step) => (
              <div
                key={step.step}
                className="rounded-xl border border-zinc-800/80 bg-zinc-900/40 p-6 flex flex-col justify-between"
              >
                <div>
                  <span className="font-mono text-sm font-bold text-zinc-400">{step.step}</span>
                  <h3 className="mt-3 font-display text-base font-bold text-zinc-200">{step.title}</h3>
                  <p className="mt-2 text-xs text-zinc-400 leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CONTACT SECTION & FOOTER */}
        <section id="contact" className="mx-auto max-w-7xl px-6 pb-24 pt-12 lg:px-8 border-t border-zinc-800/80">
          <div className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-8 sm:p-12">
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] items-center">
              <div>
                <span className="text-xs font-mono font-medium uppercase tracking-widest text-zinc-400">
                  Get in Touch
                </span>
                <h2 className="mt-2 font-display text-3xl sm:text-4xl font-bold tracking-tight text-zinc-100">
                  Let&apos;s build something exceptional.
                </h2>
                <p className="mt-3 max-w-2xl text-sm sm:text-base text-zinc-400">
                  I am currently open to full-stack engineering roles, high-impact web products, and technical collaborations.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="mailto:kunalmamgai@gmail.com"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-zinc-100 px-5 py-2.5 text-xs font-semibold text-zinc-950 hover:bg-zinc-200 transition"
                >
                  <FiMail />
                  <span>kunalmamgai@gmail.com</span>
                </a>
                <button
                  onClick={copyEmail}
                  className="inline-flex items-center justify-center gap-2 rounded-lg border border-zinc-700 bg-zinc-800/60 px-5 py-2.5 text-xs font-medium text-zinc-200 hover:bg-zinc-800 transition"
                >
                  <FiCopy />
                  <span>Copy Email</span>
                </button>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-10 flex flex-wrap gap-3 border-t border-zinc-800/80 pt-6">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 rounded-lg border border-zinc-800 bg-zinc-900/60 px-3.5 py-2 text-xs text-zinc-300 hover:border-zinc-700 hover:text-white transition font-mono"
                >
                  {link.label === 'GitHub' && <FiGithub className="text-zinc-400" />}
                  {link.label === 'LinkedIn' && <FiLinkedin className="text-zinc-400" />}
                  {link.label === 'Email' && <FiMail className="text-zinc-400" />}
                  <span>{link.label}</span>
                </a>
              ))}
            </div>
          </div>

          <footer className="mt-12 text-center text-xs text-zinc-400 font-mono">
            © {new Date().getFullYear()} Kunal Mamgai · Built with React 19, Tailwind CSS v4 & Three.js.
          </footer>
        </section>
      </main>
    </div>
  )
}
