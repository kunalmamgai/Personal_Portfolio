import { motion as Motion, AnimatePresence } from 'framer-motion'
import { FiX, FiExternalLink, FiGithub, FiCheckCircle } from 'react-icons/fi'
import ProjectCarousel from './ProjectCarousel'
import TechIcon from './TechIcon'

export default function ProjectModal({ project, isOpen, onClose }) {
  if (!isOpen || !project) return null

  const projectImages = project.images && project.images.length > 0 ? project.images : [project.image]

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-xl">
        <Motion.div
          initial={{ opacity: 0, scale: 0.92, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.92, y: 30 }}
          className="relative w-full max-w-4xl overflow-hidden rounded-3xl border border-cyan-500/30 bg-slate-900 shadow-[0_25px_90px_rgba(2,6,23,0.95)] ring-1 ring-cyan-400/20 max-h-[92vh] flex flex-col"
        >
          {/* Top Control Bar */}
          <div className="flex items-center justify-between border-b border-white/10 bg-slate-950 px-6 py-4">
            <div className="flex items-center gap-3">
              <span className="rounded-full bg-cyan-400/10 border border-cyan-400/30 px-3 py-1 text-xs font-semibold text-cyan-200 uppercase tracking-wider">
                {project.type}
              </span>
              <h2 className="font-display text-xl font-bold text-white">
                {project.title}
              </h2>
            </div>
            <button
              onClick={onClose}
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white/5 text-slate-400 hover:bg-white/10 hover:text-white transition"
            >
              <FiX className="text-xl" />
            </button>
          </div>

          {/* Modal Content Scroll Body */}
          <div className="overflow-y-auto p-6 space-y-6 text-slate-300">
            {/* Full-width Screenshot Carousel */}
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-cyan-400 mb-3">Project Screenshots & Live UI</p>
              <ProjectCarousel images={projectImages} title={project.title} />
            </div>

            {/* Description & Overview */}
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-cyan-400">Overview</h4>
              <p className="mt-2 text-sm sm:text-base leading-relaxed text-slate-200">{project.description}</p>
            </div>

            {/* Impact & Outcome */}
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-amber-400">Impact & Outcome</h4>
              <p className="mt-2 text-sm sm:text-base leading-relaxed text-slate-300 bg-white/5 border border-white/10 rounded-2xl p-4">{project.outcome}</p>
            </div>

            {/* Tech Stack Logos Bar */}
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-cyan-400 mb-3">Technologies Used</h4>
              <div className="flex flex-wrap gap-3">
                {project.tags.map((tag) => (
                  <div
                    key={tag}
                    className="flex items-center gap-2 rounded-xl border border-white/10 bg-slate-950 px-3.5 py-2 text-xs text-slate-200"
                  >
                    <TechIcon name={tag} size="sm" showLabel={true} />
                  </div>
                ))}
              </div>
            </div>

            {/* Features */}
            {project.features && project.features.length > 0 && (
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-cyan-400 mb-3">Key Features & Architecture</h4>
                <div className="grid gap-2.5 sm:grid-cols-2">
                  {project.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 rounded-xl border border-white/5 bg-slate-950/60 p-3 text-xs sm:text-sm text-slate-200">
                      <FiCheckCircle className="mt-0.5 text-cyan-400 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Action Bar */}
            <div className="flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-4">
              <div>
                <span className="text-xs text-slate-500 font-medium">Role:</span>
                <p className="text-sm font-semibold text-white">{project.role}</p>
              </div>

              <div className="flex flex-wrap gap-3">
                {project.demo && project.demo !== '#' && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-cyan-400 px-5 py-2.5 text-xs font-bold text-slate-950 hover:bg-cyan-300 transition shadow-[0_4px_15px_rgba(34,211,238,0.4)]"
                  >
                    <span>Live Demo</span>
                    <FiExternalLink />
                  </a>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-5 py-2.5 text-xs font-semibold text-white hover:bg-white/10 transition"
                  >
                    <span>GitHub Repo</span>
                    <FiGithub />
                  </a>
                )}
              </div>
            </div>
          </div>
        </Motion.div>
      </div>
    </AnimatePresence>
  )
}
