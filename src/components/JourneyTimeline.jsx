import { useState } from 'react'
import { motion as Motion } from 'framer-motion'
import { FiAward, FiCheckCircle, FiCode, FiLayers, FiZap, FiBookOpen } from 'react-icons/fi'
import { technicalJourney } from '../data/portfolio'

const categoryIcons = {
  Academic: FiAward,
  'Problem Solving': FiCode,
  Frontend: FiLayers,
  Hackathon: FiZap,
  'Full-Stack': FiBookOpen,
}

export default function JourneyTimeline() {
  const [selectedCategory, setSelectedCategory] = useState('All')

  const categories = ['All', 'Academic', 'Problem Solving', 'Frontend', 'Hackathon', 'Full-Stack']

  const filteredItems = selectedCategory === 'All'
    ? technicalJourney
    : technicalJourney.filter((item) => item.category === selectedCategory)

  return (
    <section id="journey" className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
        <div>
          <span className="text-xs font-semibold uppercase tracking-[0.38em] text-cyan-400">
            Evolution & Learning Roadmap
          </span>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">
            My Technical Journey
          </h2>
          <p className="mt-4 max-w-2xl text-base text-slate-300 leading-relaxed">
            From top academic honors in Haldwani to algorithm design in C++, hackathon victories, and modern full-stack web engineering.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`rounded-full px-4 py-2 text-xs font-medium transition ${
                selectedCategory === cat
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-[0_4px_20px_rgba(34,211,238,0.3)]'
                  : 'border border-white/10 bg-white/5 text-slate-400 hover:text-white hover:bg-white/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Timeline Stream */}
      <div className="relative border-l border-cyan-500/20 ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-12">
        {filteredItems.map((item, index) => {
          const Icon = categoryIcons[item.category] || FiAward

          return (
            <Motion.article
              key={item.title}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              {/* Timeline Connector Dot */}
              <div className="absolute -left-[35px] sm:-left-[51px] top-1 flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-full border border-cyan-400/40 bg-slate-950 shadow-[0_0_15px_rgba(34,211,238,0.5)] group-hover:scale-110 transition">
                <Icon className="text-cyan-400 text-sm sm:text-base" />
              </div>

              {/* Card Container */}
              <div className="rounded-3xl border border-white/10 bg-slate-900/60 p-6 sm:p-8 backdrop-blur-xl shadow-[0_16px_40px_rgba(2,6,23,0.5)] hover:border-cyan-400/30 transition duration-300">
                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-4">
                  <div>
                    <span className="text-xs font-mono font-bold text-cyan-300 tracking-wider">
                      {item.year}
                    </span>
                    <h3 className="mt-1 font-display text-xl sm:text-2xl font-bold text-white">
                      {item.title}
                    </h3>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-[11px] font-semibold text-cyan-200 uppercase tracking-widest">
                      {item.badge}
                    </span>
                    <span className="text-xs text-slate-400 font-medium">
                      {item.institution}
                    </span>
                  </div>
                </div>

                <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed">
                  {item.description}
                </p>

                {/* Highlights List */}
                <div className="mt-5 grid gap-2.5 sm:grid-cols-2">
                  {item.highlights.map((h, hIdx) => (
                    <div
                      key={hIdx}
                      className="flex items-start gap-2.5 rounded-xl border border-white/5 bg-white/5 p-3 text-xs sm:text-sm text-slate-200"
                    >
                      <FiCheckCircle className="mt-0.5 text-cyan-400 shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Motion.article>
          )
        })}
      </div>
    </section>
  )
}
