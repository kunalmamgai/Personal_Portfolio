import { useState } from 'react'
import { motion as Motion } from 'framer-motion'
import { FiCode, FiServer, FiCpu, FiTool, FiCheck } from 'react-icons/fi'
import { skillCategories, stack } from '../data/portfolio'

const categoryIconMap = {
  frontend: FiCode,
  backend: FiServer,
  'problem-solving': FiCpu,
  tools: FiTool,
}

export default function SkillsMatrix() {
  const [activeTab, setActiveTab] = useState('frontend')

  const currentCategory = skillCategories.find((cat) => cat.id === activeTab) || skillCategories[0]
  const ActiveIcon = categoryIconMap[currentCategory.id] || FiCode

  return (
    <section id="skills" className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
      {/* Section Heading */}
      <div className="max-w-3xl mb-14">
        <span className="text-xs font-semibold uppercase tracking-[0.38em] text-cyan-400">
          Technical Toolkit & Competencies
        </span>
        <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">
          Skills & Architecture Matrix
        </h2>
        <p className="mt-4 text-base text-slate-300 leading-relaxed">
          Categorized breakdown of technical capabilities across frontend engineering, Python & FastAPI backends, and computational problem solving.
        </p>
      </div>

      {/* Category Tabs */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-10">
        {skillCategories.map((cat) => {
          const Icon = categoryIconMap[cat.id] || FiCode
          const isActive = activeTab === cat.id

          return (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`flex items-center gap-3 rounded-2xl border p-4 text-left transition duration-300 ${
                isActive
                  ? 'border-cyan-400/50 bg-gradient-to-br from-cyan-500/20 via-slate-900 to-slate-950 text-white shadow-[0_10px_30px_rgba(34,211,238,0.2)]'
                  : 'border-white/10 bg-slate-900/50 text-slate-400 hover:border-white/20 hover:text-slate-200'
              }`}
            >
              <div className={`flex h-10 w-10 items-center justify-center rounded-xl ${isActive ? 'bg-cyan-400 text-slate-950 font-bold' : 'bg-white/5 text-cyan-400'}`}>
                <Icon className="text-lg" />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">Category</p>
                <p className="font-display font-bold text-sm sm:text-base text-white">{cat.title}</p>
              </div>
            </button>
          )
        })}
      </div>

      {/* Active Category Display */}
      <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-6 sm:p-8 backdrop-blur-xl shadow-[0_20px_50px_rgba(2,6,23,0.6)]">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-6 mb-8">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-300 ring-1 ring-cyan-400/30">
              <ActiveIcon className="text-2xl" />
            </div>
            <div>
              <h3 className="font-display text-2xl font-bold text-white">{currentCategory.title}</h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-1">{currentCategory.description}</p>
            </div>
          </div>
          <span className="self-start sm:self-auto rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-1.5 text-xs font-mono text-cyan-200">
            {currentCategory.skills.length} Key Competencies
          </span>
        </div>

        {/* Skills Progress Bars & Badges */}
        <div className="grid gap-6 md:grid-cols-2">
          {currentCategory.skills.map((skill, index) => (
            <Motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: index * 0.05 }}
              className="rounded-2xl border border-white/5 bg-slate-950/80 p-4 hover:border-cyan-400/20 transition"
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <span className="font-display font-semibold text-sm text-white">{skill.name}</span>
                  <span className="rounded-md bg-white/5 px-2 py-0.5 text-[10px] font-mono text-cyan-300 uppercase">
                    {skill.tag}
                  </span>
                </div>
                <span className="text-xs font-mono font-bold text-slate-400">{skill.level}%</span>
              </div>
              <div className="h-2 w-full overflow-hidden rounded-full bg-slate-800">
                <Motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.level}%` }}
                  transition={{ duration: 0.8, ease: 'easeOut' }}
                  className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 shadow-[0_0_12px_rgba(34,211,238,0.6)]"
                />
              </div>
            </Motion.div>
          ))}
        </div>
      </div>

      {/* Infinite Scrolling Ribbon */}
      <div className="mt-12 overflow-hidden rounded-2xl border border-white/10 bg-slate-950/80 py-4 shadow-inner">
        <Motion.div
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
          className="flex w-max gap-4"
        >
          {[...stack, ...stack, ...stack].map((item, idx) => (
            <span
              key={`${item}-${idx}`}
              className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold text-slate-200"
            >
              <FiCheck className="text-cyan-400 text-xs" />
              {item}
            </span>
          ))}
        </Motion.div>
      </div>
    </section>
  )
}
