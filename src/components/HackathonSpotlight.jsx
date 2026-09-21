import { motion as Motion } from 'framer-motion'
import { FiAward, FiExternalLink, FiGithub, FiCheckCircle, FiBox, FiCpu, FiServer } from 'react-icons/fi'

export default function HackathonSpotlight() {
  return (
    <section id="hackathon" className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
      <Motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        className="relative overflow-hidden rounded-[2.5rem] border border-cyan-400/30 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 p-8 sm:p-12 shadow-[0_25px_90px_rgba(2,6,23,0.8)] ring-1 ring-cyan-400/20"
      >
        {/* Glowing Background Orbs */}
        <div className="pointer-events-none absolute -right-20 -top-20 h-80 w-80 rounded-full bg-cyan-500/20 blur-[100px]" />
        <div className="pointer-events-none absolute -left-20 -bottom-20 h-80 w-80 rounded-full bg-purple-500/20 blur-[100px]" />

        <div className="relative z-10 grid gap-10 lg:grid-cols-[1.2fr_0.8fr] items-center">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-amber-400/20 text-amber-300 ring-1 ring-amber-400/40">
                <FiAward className="text-xl" />
              </span>
              <span className="text-xs font-mono font-bold uppercase tracking-[0.3em] text-amber-300">
                Hackathon Spotlight — INNOVIT Finalist
              </span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
              AR-Chaelogist
            </h2>
            <p className="mt-3 text-lg font-medium text-cyan-200">
              Immersive AR/VR Cultural Heritage Platform
            </p>

            <p className="mt-4 text-base text-slate-300 leading-relaxed">
              Designed and developed to give users interactive virtual tours of historic Indian monuments and cultural heritage sites before planning physical visits. Built during the national INNOVIT Hackathon, where our team reached the grand finals.
            </p>

            {/* Architecture Highlights */}
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-slate-950/60 p-4">
                <div className="flex items-center gap-2 text-cyan-300 font-semibold text-sm">
                  <FiBox />
                  <span>Frontend & AR Models</span>
                </div>
                <p className="mt-2 text-xs text-slate-400 leading-normal">
                  React frontend with dynamic 3D AR artifact viewer and interactive heritage map coordinates.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-slate-950/60 p-4">
                <div className="flex items-center gap-2 text-purple-300 font-semibold text-sm">
                  <FiServer />
                  <span>FastAPI & Python API</span>
                </div>
                <p className="mt-2 text-xs text-slate-400 leading-normal">
                  High-speed Python FastAPI endpoints serving site metadata, coordinates, and cultural history.
                </p>
              </div>
            </div>

            {/* Action CTAs */}
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="https://heritage-and-culture-portal.vercel.app/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-cyan-400 px-6 py-3 text-sm font-bold text-slate-950 hover:bg-cyan-300 transition shadow-[0_4px_20px_rgba(34,211,238,0.4)]"
              >
                <span>Live Portal Demo</span>
                <FiExternalLink />
              </a>
              <a
                href="https://github.com/kunalmamgai/INNOVIT-HACKATHON"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 transition"
              >
                <span>INNOVIT GitHub Repo</span>
                <FiGithub />
              </a>
            </div>
          </div>

          {/* Interactive Preview Card Visual */}
          <div className="relative overflow-hidden rounded-3xl border border-cyan-400/30 bg-slate-950 p-4 shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=1200&q=80"
              alt="AR-Chaelogist Heritage Portal"
              className="h-72 w-full rounded-2xl object-cover"
            />
            <div className="mt-4 flex items-center justify-between px-2">
              <span className="text-xs font-mono text-cyan-300">Role: Team Lead & Developer</span>
              <span className="rounded-full bg-amber-400/20 text-amber-300 px-3 py-1 text-[10px] font-bold uppercase tracking-wider">
                Hackathon Winner
              </span>
            </div>
          </div>
        </div>
      </Motion.div>
    </section>
  )
}
