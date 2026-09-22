import { motion as Motion } from 'framer-motion'
import { FiAward, FiExternalLink, FiGithub, FiCheckCircle, FiBox, FiCpu, FiServer, FiShield, FiZap } from 'react-icons/fi'
import TechIcon from './TechIcon'
import { audio } from '../utils/AudioEffects'

export default function HackathonSpotlight() {
  return (
    <section id="hackathon" className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
      {/* Section Header */}
      <div className="max-w-3xl mb-14">
        <span className="text-xs font-semibold uppercase tracking-[0.38em] text-cyan-400">
          Competitive Building & Hackathons
        </span>
        <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">
          Hackathon Honors & Flagship Projects
        </h2>
        <p className="mt-4 text-base text-slate-300 leading-relaxed">
          High-intensity 24–48hr national hackathons where I designed, built, and shipped production-ready solutions spanning 3D WebGL, AR/VR, and autonomous AI agents.
        </p>
      </div>

      <div className="grid gap-10 lg:grid-cols-2">
        {/* Card 1: INNOVIT Hackathon Finalist (AR-Chaelogist) */}
        <Motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-[2.5rem] border border-cyan-400/30 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 p-8 shadow-[0_25px_90px_rgba(2,6,23,0.8)] ring-1 ring-cyan-400/20 flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-amber-400/20 text-amber-300 ring-1 ring-amber-400/40">
                  <FiAward className="text-xl" />
                </span>
                <span className="text-xs font-mono font-bold uppercase tracking-[0.3em] text-amber-300">
                  INNOVIT Hackathon Finalist
                </span>
              </div>
              <span className="rounded-full bg-cyan-400/10 border border-cyan-400/30 px-3 py-1 text-[11px] font-mono text-cyan-300">
                VIT Bhopal
              </span>
            </div>

            <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-white leading-tight">
              AR-Chaelogist
            </h3>
            <p className="mt-1 text-sm font-semibold text-cyan-300">
              Immersive AR/VR Cultural Heritage Platform
            </p>

            <p className="mt-4 text-sm text-slate-300 leading-relaxed">
              Reached the grand finals of the INNOVIT Hackathon. Built to give users interactive virtual walkthroughs and 3D AR artifact inspections of Indian historical landmarks before visiting in person.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {['React', 'Tailwind CSS', 'FastAPI', 'Python', 'AR/VR'].map((t) => (
                <span key={t} className="flex items-center gap-1.5 rounded-full border border-white/10 bg-slate-950 px-3 py-1 text-xs text-slate-300">
                  <TechIcon name={t} size="sm" showLabel={true} />
                </span>
              ))}
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-3 pt-6 border-t border-white/10">
            <a
              href="https://heritage-and-culture-portal.vercel.app/"
              target="_blank"
              rel="noreferrer"
              onClick={() => audio.playClick()}
              className="inline-flex items-center gap-2 rounded-full bg-cyan-400 px-5 py-2.5 text-xs font-bold text-slate-950 hover:bg-cyan-300 transition shadow-[0_4px_15px_rgba(34,211,238,0.4)]"
            >
              <span>Live Portal Demo</span>
              <FiExternalLink />
            </a>
            <a
              href="https://github.com/kunalmamgai/INNOVIT-HACKATHON"
              target="_blank"
              rel="noreferrer"
              onClick={() => audio.playClick()}
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-5 py-2.5 text-xs font-semibold text-white hover:bg-white/10 transition"
            >
              <span>INNOVIT GitHub</span>
              <FiGithub />
            </a>
          </div>
        </Motion.div>

        {/* Card 2: Razorpay AI Buildathon (Payment Risk & Recovery Agent) */}
        <Motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="relative overflow-hidden rounded-[2.5rem] border border-amber-400/30 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 p-8 shadow-[0_25px_90px_rgba(2,6,23,0.8)] ring-1 ring-amber-400/20 flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-cyan-400/20 text-cyan-300 ring-1 ring-cyan-400/40">
                  <FiZap className="text-xl" />
                </span>
                <span className="text-xs font-mono font-bold uppercase tracking-[0.3em] text-cyan-300">
                  Razorpay AI Buildathon
                </span>
              </div>
              <span className="rounded-full bg-amber-400/10 border border-amber-400/30 px-3 py-1 text-[11px] font-mono text-amber-300">
                AI Agent & FinTech
              </span>
            </div>

            <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-white leading-tight">
              Razorpay AI Risk & Recovery Agent
            </h3>
            <p className="mt-1 text-sm font-semibold text-amber-300">
              Autonomous Transaction Fraud & Risk Reasoning Agent
            </p>

            <p className="mt-4 text-sm text-slate-300 leading-relaxed">
              Engineered for the Razorpay AI Buildathon. An autonomous agent that analyzes failed/flagged payments, performs plain-language risk reasoning, and enforces policy-gated mitigation (allow/review/block).
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {['Python', 'FastAPI', 'AI Agent', 'FinTech', 'RESTful APIs'].map((t) => (
                <span key={t} className="flex items-center gap-1.5 rounded-full border border-white/10 bg-slate-950 px-3 py-1 text-xs text-slate-300">
                  <TechIcon name={t} size="sm" showLabel={true} />
                </span>
              ))}
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-3 pt-6 border-t border-white/10">
            <a
              href="https://github.com/kunalmamgai/Razorpay-Buildathon"
              target="_blank"
              rel="noreferrer"
              onClick={() => audio.playClick()}
              className="inline-flex items-center gap-2 rounded-full bg-amber-400 px-5 py-2.5 text-xs font-bold text-slate-950 hover:bg-amber-300 transition shadow-[0_4px_15px_rgba(245,158,11,0.4)]"
            >
              <span>Razorpay Agent GitHub</span>
              <FiGithub />
            </a>
            <a
              href="https://github.com/kunalmamgai/HackMatrix_AI-Alchemists"
              target="_blank"
              rel="noreferrer"
              onClick={() => audio.playClick()}
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-5 py-2.5 text-xs font-semibold text-white hover:bg-white/10 transition"
            >
              <span>HackMatrix E-Waste Hub</span>
              <FiExternalLink />
            </a>
          </div>
        </Motion.div>
      </div>
    </section>
  )
}
