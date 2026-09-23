import { motion as Motion, AnimatePresence } from 'framer-motion'
import { FiX, FiExternalLink, FiGithub, FiCheck } from 'react-icons/fi'
import ProjectCarousel from './ProjectCarousel'
import TechIcon from './TechIcon'

export default function ProjectModal({ project, isOpen, onClose }) {
  if (!isOpen || !project) return null

  const projectImages = project.images && project.images.length > 0 ? project.images : [project.image]

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
        <Motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.25 }}
          className="relative w-full max-w-4xl overflow-hidden rounded-2xl border border-zinc-800 bg-[#101114] shadow-2xl max-h-[92vh] flex flex-col"
        >
          {/* Top Control Bar */}
          <div className="flex items-center justify-between border-b border-zinc-800/80 px-6 py-4 bg-[#0d0e11]">
            <div className="flex items-center gap-3">
              <span className="rounded-full bg-zinc-800 border border-zinc-700 px-2.5 py-0.5 text-[11px] font-mono text-zinc-300">
                {project.badge}
              </span>
              <h2 className="font-display text-lg sm:text-xl font-bold text-zinc-100">
                {project.title}
              </h2>
            </div>
            <button
              onClick={onClose}
              className="flex h-8 w-8 items-center justify-center rounded-lg border border-zinc-800 bg-zinc-900 text-zinc-400 hover:text-white hover:border-zinc-700 transition"
            >
              <FiX className="text-base" />
            </button>
          </div>

          {/* Modal Content Scroll Body */}
          <div className="overflow-y-auto p-6 space-y-6 text-zinc-300">
            {/* Full-width Screenshot Carousel */}
            <div>
              <ProjectCarousel images={projectImages} title={project.title} />
            </div>

            {/* Description & Overview */}
            <div>
              <h4 className="text-xs font-mono font-medium uppercase tracking-wider text-zinc-400">Overview</h4>
              <p className="mt-1.5 text-sm sm:text-base leading-relaxed text-zinc-200">{project.description}</p>
            </div>

            {/* Impact & Outcome */}
            <div>
              <h4 className="text-xs font-mono font-medium uppercase tracking-wider text-zinc-400">Outcome & Results</h4>
              <p className="mt-1.5 text-sm leading-relaxed text-zinc-300 bg-zinc-900/60 border border-zinc-800/80 rounded-xl p-4">{project.outcome}</p>
            </div>

            {/* Tech Stack Logos Bar */}
            <div>
              <h4 className="text-xs font-mono font-medium uppercase tracking-wider text-zinc-400 mb-2.5">Tech Stack</h4>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <div
                    key={tag}
                    className="flex items-center gap-2 rounded-lg border border-zinc-800 bg-zinc-900 px-3 py-1.5 text-xs text-zinc-300"
                  >
                    <TechIcon name={tag} size="sm" showLabel={true} />
                  </div>
                ))}
              </div>
            </div>

            {/* Features */}
            {project.features && project.features.length > 0 && (
              <div>
                <h4 className="text-xs font-mono font-medium uppercase tracking-wider text-zinc-400 mb-2.5">Key Architecture & Features</h4>
                <div className="grid gap-2 sm:grid-cols-2">
                  {project.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2 rounded-lg border border-zinc-800/80 bg-zinc-900/40 p-3 text-xs sm:text-sm text-zinc-300">
                      <FiCheck className="mt-0.5 text-zinc-400 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Action Bar */}
            <div className="flex flex-wrap items-center justify-between gap-4 border-t border-zinc-800 pt-4">
              <div>
                <span className="text-xs text-zinc-400 font-mono">Role:</span>
                <p className="text-sm font-semibold text-zinc-200">{project.role}</p>
              </div>

              <div className="flex flex-wrap gap-3">
                {project.demo && project.demo !== '#' && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg bg-zinc-100 px-4 py-2 text-xs font-semibold text-zinc-950 hover:bg-zinc-200 transition"
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
                    className="inline-flex items-center gap-2 rounded-lg border border-zinc-700 bg-zinc-800/60 px-4 py-2 text-xs font-medium text-zinc-200 hover:bg-zinc-800 transition"
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
