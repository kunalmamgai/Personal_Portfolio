import { motion as Motion } from 'framer-motion'
import {
  FiArrowRight,
  FiCode,
  FiExternalLink,
  FiGithub,
  FiLayout,
  FiLinkedin,
  FiMail,
  FiSmartphone,
  FiZap,
} from 'react-icons/fi'
import {
  developerProfile,
  featuredSkills,
  featuredTech,
  gallery,
  navigation,
  processSteps,
  projects,
  skillHighlights,
  socialLinks,
  stack,
  stats,
} from './data/portfolio'

const fadeUp = {
  hidden: { opacity: 0, y: 36 },
  visible: { opacity: 1, y: 0 },
}

const skillIcons = [FiLayout, FiCode, FiZap]

const socialIconMap = {
  GitHub: FiGithub,
  LinkedIn: FiLinkedin,
  Email: FiMail,
}

function BrandMark() {
  return (
    <span className="relative inline-flex h-10 w-10 items-center justify-center overflow-hidden rounded-2xl border border-white/70 bg-white shadow-[0_12px_34px_rgba(15,23,42,0.35)] ring-1 ring-orange-300/60">
      <span className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-cyan-200 to-transparent" />
      <span className="absolute bottom-0 right-0 h-4 w-4 rounded-tl-xl bg-orange-300" />
      <span className="relative font-display text-base font-extrabold tracking-[0.18em] text-slate-950">
        KM
      </span>
    </span>
  )
}

function SectionHeading({ eyebrow, title, copy }) {
  return (
    <div className="max-w-2xl">
      <p className="text-xs font-semibold uppercase tracking-[0.32em] text-cyan-300">
        {eyebrow}
      </p>
      <h2 className="mt-4 font-display text-3xl text-white sm:text-4xl">
        {title}
      </h2>
      <p className="mt-4 text-base leading-7 text-slate-300">{copy}</p>
    </div>
  )
}

function ProjectVisual({ project }) {
  if (project.kind === 'portfolio-preview') {
    return (
      <div className="relative h-64 overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.26),_transparent_34%),linear-gradient(180deg,_#0f172a,_#020617)] p-4">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.08)_1px,transparent_1px)] bg-[size:32px_32px] opacity-40" />
        <div className="absolute inset-x-6 top-5 h-10 rounded-full bg-cyan-300/10 blur-2xl" />
        <div className="relative mx-auto flex h-full max-w-[22rem] flex-col overflow-hidden rounded-[1.6rem] border border-white/20 bg-slate-950/95 shadow-[0_22px_60px_rgba(2,6,23,0.7)] ring-1 ring-cyan-300/15">
          <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
            <div className="flex items-center gap-2">
              <BrandMark />
              <span className="font-display text-sm text-white">Kunal.dev</span>
            </div>
            <div className="flex gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-cyan-300/80" />
              <span className="h-2.5 w-2.5 rounded-full bg-orange-300/80" />
              <span className="h-2.5 w-2.5 rounded-full bg-white/40" />
            </div>
          </div>
          <div className="grid flex-1 gap-3 p-4">
            <div className="rounded-[1.2rem] border border-white/10 bg-white/5 p-4">
              <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-orange-300">
                Meet the developer
              </p>
              <div className="mt-3 flex items-center gap-3">
                <img
                  src={developerProfile.image}
                  alt={developerProfile.alt}
                  className="h-14 w-14 rounded-2xl object-cover object-top ring-2 ring-cyan-300/35 shadow-[0_8px_22px_rgba(34,211,238,0.22)]"
                />
                <div>
                  <p className="font-display text-lg text-white">
                    {developerProfile.name}
                  </p>
                  <p className="text-xs text-cyan-200">{developerProfile.role}</p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="rounded-[1rem] border border-cyan-300/15 bg-slate-900/95 p-3">
                <p className="text-[10px] uppercase tracking-[0.26em] text-cyan-300">
                  Stack
                </p>
                <p className="mt-2 text-xs leading-6 text-slate-300">
                  React
                  <br />
                  Tailwind CSS
                  <br />
                  Framer Motion
                </p>
              </div>
              <div className="rounded-[1rem] border border-orange-300/15 bg-slate-900/95 p-3">
                <p className="text-[10px] uppercase tracking-[0.26em] text-orange-300">
                  Focus
                </p>
                <p className="mt-2 text-xs leading-6 text-slate-300">
                  Identity
                  <br />
                  Projects
                  <br />
                  Responsive UI
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <img
      src={project.image}
      alt={project.title}
      className="h-64 w-full object-cover transition duration-700 group-hover:scale-105"
    />
  )
}

function ProjectLink({ href, label, icon, primary = false }) {
  const isReady = Boolean(href)
  const LinkIcon = icon

  return (
    <a
      href={href || '#'}
      target={isReady ? '_blank' : undefined}
      rel={isReady ? 'noreferrer' : undefined}
      aria-disabled={!isReady}
        className={
          primary
          ? `inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold !text-black transition ${
              isReady
                ? 'hover:bg-slate-200'
                : 'cursor-not-allowed bg-white/90 !text-black'
            }`
          : `inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold transition ${
              isReady
                ? 'border-white/15 text-white hover:bg-white/5'
                : 'cursor-not-allowed border-white/10 text-white/45'
            }`
      }
      onClick={(event) => {
        if (!isReady) {
          event.preventDefault()
        }
      }}
    >
      {label}
      <LinkIcon />
    </a>
  )
}

function SkillOrbitCard({ skill, index }) {
  const accentStyles = {
    cyan: {
      border: 'border-cyan-300/25',
      glow: 'bg-cyan-300/20',
      text: 'text-cyan-200',
      dot: 'bg-cyan-300',
    },
    orange: {
      border: 'border-orange-300/25',
      glow: 'bg-orange-300/20',
      text: 'text-orange-200',
      dot: 'bg-orange-300',
    },
    slate: {
      border: 'border-white/15',
      glow: 'bg-white/10',
      text: 'text-slate-200',
      dot: 'bg-white',
    },
  }

  const accent = accentStyles[skill.accent]

  return (
    <Motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.55, delay: index * 0.1 }}
      className={`relative overflow-hidden rounded-[1.75rem] border bg-slate-950/85 p-5 ${accent.border}`}
    >
      <div className={`absolute -right-8 -top-8 h-24 w-24 rounded-full blur-3xl ${accent.glow}`} />
      <p className={`text-sm font-semibold uppercase tracking-[0.28em] ${accent.text}`}>
        {skill.title}
      </p>
      <div className="mt-5 space-y-3">
        {skill.items.map((item, itemIndex) => (
          <Motion.div
            key={item}
            initial={{ opacity: 0, x: -18 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.15 + itemIndex * 0.08 + index * 0.08 }}
            className="flex items-center gap-3 rounded-2xl border border-white/8 bg-white/4 px-3 py-3"
          >
            <span className={`h-2.5 w-2.5 rounded-full ${accent.dot}`} />
            <span className="text-sm text-slate-200">{item}</span>
          </Motion.div>
        ))}
      </div>
    </Motion.article>
  )
}

function App() {
  return (
    <div className="relative overflow-x-hidden bg-slate-950 text-slate-100">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[38rem] bg-[radial-gradient(circle_at_top,_rgba(34,211,238,0.22),_transparent_38%),radial-gradient(circle_at_20%_20%,_rgba(249,115,22,0.18),_transparent_30%),linear-gradient(180deg,_rgba(15,23,42,0.96),_rgba(2,6,23,1))]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.08)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:radial-gradient(circle_at_center,black,transparent_78%)]" />

      <header className="sticky top-0 z-40 border-b border-white/10 bg-slate-950/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <a href="#home" className="flex items-center gap-3 text-white">
            <BrandMark />
            <span className="font-display text-xl tracking-wide">Kunal.dev</span>
          </a>
          <nav className="hidden items-center gap-8 md:flex">
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-slate-300 transition hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-cyan-400/40 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-100 transition hover:border-cyan-300 hover:bg-cyan-300/20"
          >
            Let&apos;s talk
            <FiArrowRight />
          </a>
        </div>
      </header>

      <main id="home">
        <section className="relative mx-auto grid max-w-7xl gap-16 px-6 pb-20 pt-16 lg:grid-cols-[1.15fr_0.85fr] lg:px-8 lg:pb-28 lg:pt-24">
          <Motion.div
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.7 }}
            variants={fadeUp}
            className="relative z-10"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.38em] text-orange-300">
              Full-Stack Developer
            </p>
            <h1 className="mt-6 max-w-4xl font-display text-5xl leading-[0.95] text-white sm:text-6xl lg:text-7xl">
              I build modern web experiences that feel clear, responsive, and reliable.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              React, Tailwind CSS, FastAPI, and Python are at the center of my
              current journey. I enjoy crafting polished interfaces, learning fast,
              and steadily growing into a stronger full-stack developer.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold !text-black transition hover:bg-slate-200 hover:!text-black"
              >
                View projects
                <FiExternalLink />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/35 hover:bg-white/5"
              >
                Contact me
                <FiMail />
              </a>
            </div>

            <div className="mt-14 grid gap-4 sm:grid-cols-3">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-3xl border border-white/10 bg-white/5 p-5 shadow-[0_16px_60px_rgba(15,23,42,0.35)] backdrop-blur"
                >
                  <p className="font-display text-3xl text-white">{stat.value}</p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">{stat.label}</p>
                </div>
              ))}
            </div>
          </Motion.div>

          <Motion.div
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.7, delay: 0.15 }}
            variants={fadeUp}
            className="relative"
          >
            <div className="absolute -left-10 top-10 h-24 w-24 rounded-full bg-cyan-300/20 blur-3xl" />
            <div className="absolute -bottom-8 right-6 h-32 w-32 rounded-full bg-orange-400/20 blur-3xl" />
            <div className="relative rounded-[2rem] border border-white/10 bg-white/6 p-4 shadow-[0_24px_90px_rgba(8,15,36,0.45)] backdrop-blur-xl">
              <div className="grid gap-4 sm:grid-cols-[1.15fr_0.85fr]">
                <div className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-slate-900/70">
                  <img
                    src={gallery[2].src}
                    alt={gallery[2].alt}
                    className="h-full min-h-80 w-full object-cover"
                  />
                </div>
                <div className="grid gap-4">
                  {gallery.slice(0, 2).map((item) => (
                    <div
                      key={item.alt}
                      className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-slate-900/70"
                    >
                      <img
                        src={item.src}
                        alt={item.alt}
                        className="h-40 w-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-4 rounded-[1.5rem] border border-white/10 bg-slate-950/80 p-5">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-sm uppercase tracking-[0.28em] text-cyan-200">
                      Current focus
                    </p>
                    <p className="mt-2 text-lg font-medium text-white">
                      Building polished frontend experiences while expanding into
                      backend systems and full-stack problem solving.
                    </p>
                  </div>
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-300/10 text-cyan-200">
                    <FiSmartphone className="text-2xl" />
                  </div>
                </div>
              </div>
            </div>
          </Motion.div>
        </section>

        <section
          id="developer"
          className="mx-auto max-w-7xl px-6 py-20 lg:px-8"
        >
          <Motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            variants={fadeUp}
            className="grid gap-8 rounded-[2.2rem] border border-white/10 bg-white/5 p-6 sm:p-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-center"
          >
            <div className="relative mx-auto w-full max-w-sm">
              <div className="absolute -left-4 top-6 h-24 w-24 rounded-full bg-cyan-300/20 blur-3xl" />
              <div className="absolute -bottom-4 right-4 h-24 w-24 rounded-full bg-orange-300/20 blur-3xl" />
              <div className="relative overflow-hidden rounded-[2rem] border border-white/25 bg-slate-900 p-3 shadow-[0_22px_80px_rgba(8,15,36,0.45)] ring-1 ring-cyan-300/20">
                <img
                  src={developerProfile.image}
                  alt={developerProfile.alt}
                  className="h-[28rem] w-full rounded-[1.5rem] object-cover object-top saturate-110 contrast-110"
                />
              </div>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-orange-300">
                Meet the developer
              </p>
              <h2 className="mt-4 font-display text-4xl text-white sm:text-5xl">
                {developerProfile.name}
              </h2>
              <p className="mt-3 text-lg font-medium text-cyan-200">
                {developerProfile.role}
              </p>
              <p className="mt-2 text-sm uppercase tracking-[0.26em] text-slate-400">
                {developerProfile.location}
              </p>
              <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300">
                {developerProfile.intro}
              </p>
              <p className="mt-4 max-w-2xl text-base leading-8 text-slate-400">
                {developerProfile.bio}
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-[1.5rem] border border-white/10 bg-slate-950/70 p-5">
                  <p className="text-sm uppercase tracking-[0.28em] text-cyan-300">
                    Identity
                  </p>
                  <p className="mt-3 text-sm leading-7 text-slate-300">
                    This section helps visitors immediately connect the work to the
                    person building it.
                  </p>
                </div>
                <div className="rounded-[1.5rem] border border-white/10 bg-slate-950/70 p-5">
                  <p className="text-sm uppercase tracking-[0.28em] text-orange-300">
                    Strength
                  </p>
                  <p className="mt-3 text-sm leading-7 text-slate-300">
                    Strong frontend execution with attention to layout, interaction,
                    responsiveness, and visual clarity.
                  </p>
                </div>
              </div>
            </div>
          </Motion.div>
        </section>

        <section
          id="about"
          className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-[0.9fr_1.1fr] lg:px-8"
        >
          <Motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            variants={fadeUp}
          >
            <SectionHeading
              eyebrow="About"
              title="Frontend work that balances clean code with strong visual taste."
              copy="I care about how a product feels in use, from visual clarity on the frontend to practical structure behind the scenes. My goal is to keep learning fast, write cleaner code, and build experiences that are both usable and polished."
            />
          </Motion.div>

          <Motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            variants={fadeUp}
            className="grid gap-5 sm:grid-cols-3"
          >
            {featuredSkills.map((skill, index) => {
              const Icon = skillIcons[index]

              return (
                <article
                  key={skill.title}
                  className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-cyan-200">
                    <Icon className="text-xl" />
                  </div>
                  <h3 className="mt-6 font-display text-2xl text-white">
                    {skill.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-slate-300">
                    {skill.description}
                  </p>
                </article>
              )
            })}
          </Motion.div>
        </section>

        <section id="skills" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <Motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6 }}
            variants={fadeUp}
            className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr]"
          >
            <SectionHeading
              eyebrow="Skills"
              title="A frontend toolkit built for interfaces that look sharp and scale well."
              copy="My current stack combines modern frontend fundamentals with growing backend capability. I work most comfortably with HTML, CSS, JavaScript, React, Python, and FastAPI, while continuing to expand through MERN learning and DSA practice in C++."
            />

            <div className="space-y-6">
              <div className="grid gap-4 md:grid-cols-3">
                {skillHighlights.map((skill, index) => (
                  <SkillOrbitCard key={skill.title} skill={skill} index={index} />
                ))}
              </div>

              <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/8 via-white/5 to-white/3 p-5 sm:p-6">
                <div className="mb-4 flex items-center justify-between gap-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.32em] text-cyan-300">
                      Skill Ribbon
                    </p>
                    <p className="mt-2 text-sm text-slate-300">
                      Tools and technologies I work with and keep sharpening.
                    </p>
                  </div>
                  <div className="hidden rounded-full border border-white/10 bg-slate-950/80 px-4 py-2 text-xs uppercase tracking-[0.26em] text-slate-400 sm:block">
                    Always learning
                  </div>
                </div>

                <div className="mb-5 flex flex-wrap gap-3">
                  {featuredTech.map((tech, index) => (
                    <Motion.span
                      key={tech}
                      initial={{ opacity: 0, y: 14 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.35, delay: index * 0.06 }}
                      whileHover={{ y: -3 }}
                      className={`rounded-full border px-4 py-2 text-sm font-semibold shadow-[0_10px_28px_rgba(2,6,23,0.24)] ${
                        index % 3 === 0
                          ? 'border-cyan-300/25 bg-cyan-300/12 text-cyan-100'
                          : index % 3 === 1
                            ? 'border-orange-300/25 bg-orange-300/12 text-orange-100'
                            : 'border-white/12 bg-slate-900/95 text-slate-100'
                      }`}
                    >
                      {tech}
                    </Motion.span>
                  ))}
                </div>

                <div className="relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-slate-950/70 px-3 py-4">
                  <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-slate-950 via-slate-950/85 to-transparent" />
                  <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-slate-950 via-slate-950/85 to-transparent" />
                  <Motion.div
                    animate={{ x: ['0%', '-50%'] }}
                    transition={{ duration: 24, repeat: Infinity, ease: 'linear' }}
                    className="flex w-max gap-3"
                  >
                    {[...stack, ...stack].map((item, index) => (
                      <span
                        key={`${item}-${index}`}
                        className={`rounded-full border px-4 py-2.5 text-sm font-medium shadow-[0_10px_28px_rgba(2,6,23,0.24)] ${
                          index % 3 === 0
                            ? 'border-cyan-300/20 bg-cyan-300/10 text-cyan-100'
                            : index % 3 === 1
                              ? 'border-orange-300/20 bg-orange-300/10 text-orange-100'
                              : 'border-white/10 bg-slate-900/95 text-slate-100'
                        }`}
                      >
                        {item}
                      </span>
                    ))}
                  </Motion.div>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-[1.5rem] border border-white/10 bg-slate-950/80 p-5">
                  <p className="text-sm uppercase tracking-[0.28em] text-orange-300">
                    What I prioritize
                  </p>
                  <p className="mt-3 text-base leading-7 text-slate-300">
                    Responsive UI, readable code, quick adaptability, and steady
                    improvement across both frontend and backend work.
                  </p>
                </div>
                <div className="rounded-[1.5rem] border border-white/10 bg-slate-950/80 p-5">
                  <p className="text-sm uppercase tracking-[0.28em] text-cyan-300">
                    Typical deliverables
                  </p>
                  <p className="mt-3 text-base leading-7 text-slate-300">
                    Portfolio sites, responsive interfaces, React applications,
                    backend APIs with FastAPI, and full-stack learning projects.
                  </p>
                </div>
              </div>
            </div>
          </Motion.div>
        </section>

        <section id="projects" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <Motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            variants={fadeUp}
          >
            <SectionHeading
              eyebrow="Projects"
              title="Selected interface concepts that highlight frontend range."
              copy="These cards are framed like client-ready case studies so visitors can quickly understand how I approach product pages, data-heavy interfaces, and brand-led web experiences."
            />
          </Motion.div>

          <div className="mt-12 grid gap-8 lg:grid-cols-3">
            {projects.map((project, index) => (
              <Motion.article
                key={project.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                variants={fadeUp}
                className="group overflow-hidden rounded-[2rem] border border-white/10 bg-white/5"
              >
                <div className="overflow-hidden">
                  <ProjectVisual project={project} />
                </div>
                <div className="p-6">
                  <p className="text-sm uppercase tracking-[0.28em] text-cyan-300">
                    {project.type}
                  </p>
                  <h3 className="mt-3 font-display text-3xl text-white">
                    {project.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-slate-300">
                    {project.description}
                  </p>
                  <p className="mt-4 text-sm leading-7 text-slate-400">
                    {project.outcome}
                  </p>
                  {project.role ? (
                    <p className="mt-4 text-sm leading-7 text-slate-300">
                      <span className="font-semibold text-white">Role:</span>{' '}
                      {project.role}
                    </p>
                  ) : null}
                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/10 px-3 py-1 text-xs text-slate-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="mt-6 flex flex-wrap gap-3">
                    <ProjectLink
                      href={project.demo}
                      label="Live Demo"
                      icon={FiExternalLink}
                      primary
                    />
                    <ProjectLink
                      href={project.github}
                      label="GitHub"
                      icon={FiGithub}
                    />
                  </div>
                </div>
              </Motion.article>
            ))}
          </div>
        </section>

        <section id="process" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <Motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6 }}
            variants={fadeUp}
            className="rounded-[2.25rem] border border-white/10 bg-white/5 p-8 sm:p-10"
          >
            <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
              <SectionHeading
                eyebrow="Process"
                title="How I approach frontend development from concept to polished launch."
                copy="My workflow is simple: understand the visual goal, build reusable foundations, and refine the experience until the page feels intentional on every screen size."
              />

              <div className="grid gap-4">
                {processSteps.map((step, index) => (
                  <div
                    key={step.title}
                    className="rounded-[1.5rem] border border-white/10 bg-slate-950/70 p-5"
                  >
                    <div className="flex items-center gap-4">
                      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-300/15 font-semibold text-orange-200">
                        0{index + 1}
                      </span>
                      <h3 className="font-display text-2xl text-white">{step.title}</h3>
                    </div>
                    <p className="mt-4 text-sm leading-7 text-slate-300">
                      {step.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Motion.div>
        </section>

        <section id="contact" className="mx-auto max-w-7xl px-6 pb-24 pt-20 lg:px-8">
          <Motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6 }}
            variants={fadeUp}
            className="rounded-[2.4rem] border border-cyan-300/20 bg-[linear-gradient(135deg,rgba(34,211,238,0.16),rgba(249,115,22,0.14),rgba(15,23,42,0.92))] p-8 shadow-[0_24px_80px_rgba(15,23,42,0.4)] sm:p-10"
          >
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.32em] text-cyan-100">
                  Contact
                </p>
                <h2 className="mt-4 max-w-3xl font-display text-4xl text-white sm:text-5xl">
                  Looking for a frontend developer who cares about both detail and
                  delivery?
                </h2>
                <p className="mt-5 max-w-2xl text-base leading-8 text-slate-100/85">
                  I am open to building responsive websites, React interfaces, and
                  growing full-stack projects with clean frontend execution and
                  practical backend support.
                </p>
              </div>

              <a
                href="mailto:kunalmamgai@gmail.com"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-900"
              >
                Start a conversation
                <FiArrowRight />
              </a>
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              {socialLinks.map((link) => {
                const Icon = socialIconMap[link.label]

                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.href.startsWith('http') ? '_blank' : undefined}
                    rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
                    className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm text-white transition hover:bg-white/15"
                  >
                    <Icon />
                    {link.label}
                  </a>
                )
              })}
            </div>
          </Motion.div>
        </section>
      </main>
    </div>
  )
}

export default App
