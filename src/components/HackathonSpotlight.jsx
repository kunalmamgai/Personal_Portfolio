import { motion as Motion } from 'framer-motion'
import { FiAward, FiExternalLink, FiGithub, FiZap } from 'react-icons/fi'
import TechIcon from './TechIcon'

export default function HackathonSpotlight() {
  return (
    <section id="hackathon" className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
      {/* Section Header */}
      <div className="max-w-3xl mb-14 border-b border-zinc-800/80 pb-8">
        <span className="text-xs font-mono font-medium uppercase tracking-widest text-zinc-400">
          Hackathons & Highlights
        </span>
        <h2 className="mt-2 font-display text-3xl sm:text-4xl font-bold tracking-tight text-zinc-100">
          Competitive Building & Awards
        </h2>
        <p className="mt-3 text-sm sm:text-base text-zinc-400 leading-relaxed">
          National hackathons where I designed and shipped full-stack web applications, 3D simulations, and AI reasoning systems within intense 24–48 hour timelines.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        {/* Card 1: INNOVIT Hackathon Finalist (AR-Chaelogist) */}
        <Motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.4 }}
          className="rounded-2xl border border-zinc-800/80 bg-zinc-900/40 p-7 backdrop-blur-sm flex flex-col justify-between hover:border-zinc-700 transition"
        >
          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2.5">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-zinc-800 text-zinc-200 border border-zinc-700">
                  <FiAward className="text-sm" />
                </span>
                <span className="text-xs font-mono font-medium uppercase tracking-wider text-zinc-300">
                  INNOVIT Hackathon Finalist
                </span>
              </div>
              <span className="rounded-full border border-zinc-700 bg-zinc-800/50 px-2.5 py-0.5 text-[11px] font-mono text-zinc-400">
                VIT Bhopal
              </span>
            </div>

            <h3 className="font-display text-xl sm:text-2xl font-bold text-zinc-100">
              AR-Chaelogist
            </h3>
            <p className="mt-1 text-xs font-mono text-zinc-400">
              AR/VR Cultural Heritage Platform
            </p>

            <p className="mt-3 text-sm text-zinc-300 leading-relaxed">
              Reached the national finals of the INNOVIT Hackathon. Built to give users interactive virtual tours and 3D AR artifact inspections of Indian historical landmarks.
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {['React', 'Tailwind CSS', 'FastAPI', 'Python', 'AR/VR'].map((t) => (
                <span key={t} className="flex items-center gap-1.5 rounded-lg border border-zinc-800 bg-zinc-900 px-2.5 py-1 text-xs text-zinc-300">
                  <TechIcon name={t} size="sm" showLabel={true} />
                </span>
              ))}
            </div>
          </div>

          <div className="mt-7 flex flex-wrap gap-3 pt-5 border-t border-zinc-800/60">
            <a
              href="https://heritage-and-culture-portal.vercel.app/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-zinc-100 px-4 py-2 text-xs font-semibold text-zinc-950 hover:bg-zinc-200 transition"
            >
              <span>Live Portal Demo</span>
              <FiExternalLink />
            </a>
            <a
              href="https://github.com/kunalmamgai/INNOVIT-HACKATHON"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-zinc-700 bg-zinc-800/60 px-4 py-2 text-xs font-medium text-zinc-200 hover:bg-zinc-800 transition"
            >
              <span>GitHub Repo</span>
              <FiGithub />
            </a>
          </div>
        </Motion.div>

        {/* Card 2: Razorpay AI Buildathon (Payment Risk & Recovery Agent) */}
        <Motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="rounded-2xl border border-zinc-800/80 bg-zinc-900/40 p-7 backdrop-blur-sm flex flex-col justify-between hover:border-zinc-700 transition"
        >
          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2.5">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-zinc-800 text-zinc-200 border border-zinc-700">
                  <FiZap className="text-sm" />
                </span>
                <span className="text-xs font-mono font-medium uppercase tracking-wider text-zinc-300">
                  Razorpay AI Buildathon
                </span>
              </div>
              <span className="rounded-full border border-zinc-700 bg-zinc-800/50 px-2.5 py-0.5 text-[11px] font-mono text-zinc-400">
                FinTech & AI
              </span>
            </div>

            <h3 className="font-display text-xl sm:text-2xl font-bold text-zinc-100">
              Razorpay AI Risk & Recovery Agent
            </h3>
            <p className="mt-1 text-xs font-mono text-zinc-400">
              Autonomous Transaction Fraud & Risk Reasoning
            </p>

            <p className="mt-3 text-sm text-zinc-300 leading-relaxed">
              Engineered for the Razorpay AI Buildathon. An autonomous agent that analyzes failed/flagged payments, performs plain-language risk reasoning, and enforces policy-gated mitigation.
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {['Python', 'FastAPI', 'AI Agent', 'FinTech', 'RESTful APIs'].map((t) => (
                <span key={t} className="flex items-center gap-1.5 rounded-lg border border-zinc-800 bg-zinc-900 px-2.5 py-1 text-xs text-zinc-300">
                  <TechIcon name={t} size="sm" showLabel={true} />
                </span>
              ))}
            </div>
          </div>

          <div className="mt-7 flex flex-wrap gap-3 pt-5 border-t border-zinc-800/60">
            <a
              href="https://github.com/kunalmamgai/Razorpay-Buildathon"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-zinc-100 px-4 py-2 text-xs font-semibold text-zinc-950 hover:bg-zinc-200 transition"
            >
              <span>GitHub Repo</span>
              <FiGithub />
            </a>
            <a
              href="https://github.com/kunalmamgai/HackMatrix_AI-Alchemists"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-zinc-700 bg-zinc-800/60 px-4 py-2 text-xs font-medium text-zinc-200 hover:bg-zinc-800 transition"
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
