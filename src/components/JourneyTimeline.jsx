import { useState } from 'react'
import { motion as Motion } from 'framer-motion'
import { FiAward, FiCheck, FiCode, FiLayers, FiZap, FiBookOpen } from 'react-icons/fi'
import { technicalJourney } from '../data/portfolio'

const categoryIcons = {
  Academic: FiAward,
  'Core CS': FiCode,
  Frontend: FiLayers,
  Hackathon: FiZap,
  'Full-Stack': FiBookOpen,
}

export default function JourneyTimeline() {
  const [selectedCategory, setSelectedCategory] = useState('All')

  const categories = ['All', 'Academic', 'Core CS', 'Frontend', 'Hackathon', 'Full-Stack']

  const filteredItems = selectedCategory === 'All'
    ? technicalJourney
    : technicalJourney.filter((item) => item.category === selectedCategory)

  return (
    <section id="journey" className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14 border-b border-zinc-800/80 pb-8">
        <div>
          <span className="text-xs font-mono font-medium uppercase tracking-widest text-zinc-400">
            Timeline & Background
          </span>
          <h2 className="mt-2 font-display text-3xl sm:text-4xl font-bold tracking-tight text-zinc-100">
            Technical Journey
          </h2>
          <p className="mt-3 max-w-2xl text-sm sm:text-base text-zinc-400 leading-relaxed">
            From academic honors in Haldwani to algorithm design in C++, national hackathons, and building production full-stack systems.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`rounded-full px-3.5 py-1.5 text-xs font-medium transition ${
                selectedCategory === cat
                  ? 'bg-zinc-100 text-zinc-950 font-semibold'
                  : 'border border-zinc-800 bg-zinc-900/50 text-zinc-400 hover:text-zinc-200 hover:border-zinc-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Timeline Stream */}
      <div className="relative border-l border-zinc-800 ml-4 sm:ml-6 pl-6 sm:pl-8 space-y-10">
        {filteredItems.map((item, index) => {
          const Icon = categoryIcons[item.category] || FiAward

          return (
            <Motion.article
              key={item.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="relative group"
            >
              {/* Timeline Connector Dot */}
              <div className="absolute -left-[33px] sm:-left-[41px] top-1.5 flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-full border border-zinc-700 bg-zinc-900 text-zinc-300">
                <Icon className="text-xs sm:text-sm" />
              </div>

              {/* Card Container */}
              <div className="rounded-2xl border border-zinc-800/80 bg-zinc-900/40 p-6 sm:p-7 backdrop-blur-sm hover:border-zinc-700 transition">
                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-zinc-800/60 pb-3.5">
                  <div>
                    <span className="text-xs font-mono text-zinc-400">
                      {item.year} · {item.period}
                    </span>
                    <h3 className="mt-1 font-display text-lg sm:text-xl font-bold text-zinc-100">
                      {item.title}
                    </h3>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="rounded-full border border-zinc-700 bg-zinc-800/60 px-3 py-0.5 text-[11px] font-mono text-zinc-300">
                      {item.badge}
                    </span>
                    <span className="text-xs text-zinc-400 hidden sm:inline">
                      {item.institution}
                    </span>
                  </div>
                </div>

                <p className="mt-3.5 text-sm text-zinc-300 leading-relaxed">
                  {item.description}
                </p>

                {/* Highlights List */}
                <div className="mt-4 grid gap-2 sm:grid-cols-2">
                  {item.highlights.map((h, hIdx) => (
                    <div
                      key={hIdx}
                      className="flex items-start gap-2 text-xs text-zinc-400"
                    >
                      <FiCheck className="mt-0.5 text-zinc-300 shrink-0" />
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
