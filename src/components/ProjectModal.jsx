import { motion as Motion, AnimatePresence } from 'framer-motion'
import { FiX, FiExternalLink, FiGithub, FiCheckCircle, FiUser, FiAward } from 'react-icons/fi'

export default function ProjectModal({ project, isOpen, onClose }) {
  if (!isOpen || !project) return null

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md">
        <Motion.div
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 30 }}
          className="relative w-full max-w-3xl overflow-hidden rounded-3xl border border-cyan-500/30 bg-slate-900 shadow-[0_25px_90px_rgba(2,6,23,0.95)] ring-1 ring-cyan-400/20 max-h-[90vh] flex flex-col"
        >
          {/* Header Image / Visual Banner */}
          <div className="relative h-60 w-full overflow-hidden bg-slate-950">
            <img
              src={project.image}
              alt={project.title}
              className="h-full w-full object-cover saturate-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />
            
            <button
              onClick={onClose}
              className="absolute top-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-slate-950/80 text-white backdrop-blur hover:bg-slate-900 transition"
            >
              <FiX className="text-xl" />
            </button>

            <div className="absolute bottom-4 left-6 right-6">
              <span className="rounded-full bg-cyan-400/20 border border-cyan-400/40 px-3 py-1 text-xs font-semibold text-cyan-200 uppercase tracking-wider">
                {project.type}
              </span>
              <h2 className="mt-2 font-display text-2xl sm:text-3xl font-bold text-white">
                {project.title}
              </h2>
            </div>
          </div>

          {/* Modal Content Scroll Body */}
          <div className="overflow-y-auto p-6 space-y-6 text-slate-300">
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-cyan-400">Overview</h4>
              <p className="mt-2 text-sm sm:text-base leading-relaxed text-slate-200">{project.description}</p>
            </div>

            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-amber-400">Impact & Outcome</h4>
              <p className="mt-2 text-sm sm:text-base leading-relaxed text-slate-300 bg-white/5 border border-white/10 rounded-2xl p-4">{project.outcome}</p>
            </div>

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

            <div className="flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-4">
              <div>
                <span className="text-xs text-slate-500 font-medium">Role:</span>
                <p className="text-sm font-semibold text-white">{project.role}</p>
              </div>

              <div className="flex flex-wrap gap-3">
                {project.demo && (
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
