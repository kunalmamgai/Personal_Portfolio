import { useState } from 'react'
import { motion as Motion } from 'framer-motion'
import { FiCode, FiServer, FiCpu, FiTool } from 'react-icons/fi'
import { skillCategories, coreStack } from '../data/portfolio'
import TechIcon from './TechIcon'

const categoryIconMap = {
  frontend: FiCode,
  backend: FiServer,
  'cs-logic': FiCpu,
  tools: FiTool,
}

export default function SkillsMatrix() {
  const [activeTab, setActiveTab] = useState('frontend')

  const currentCategory = skillCategories.find((cat) => cat.id === activeTab) || skillCategories[0]
  const ActiveIcon = categoryIconMap[currentCategory.id] || FiCode

  return (
    <section id="skills" className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
      {/* Section Heading */}
      <div className="max-w-3xl mb-14 border-b border-zinc-800/80 pb-8">
        <span className="text-xs font-mono font-medium uppercase tracking-widest text-zinc-400">
          Technologies & Competencies
        </span>
        <h2 className="mt-2 font-display text-3xl sm:text-4xl font-bold tracking-tight text-zinc-100">
          Technical Stack & Skills
        </h2>
        <p className="mt-3 text-sm sm:text-base text-zinc-400 leading-relaxed">
          Languages, frameworks, and tools I use to build scalable web products and 3D simulations.
        </p>
      </div>

      {/* Category Tabs */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mb-8">
        {skillCategories.map((cat) => {
          const Icon = categoryIconMap[cat.id] || FiCode
          const isActive = activeTab === cat.id

          return (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`flex items-center gap-3 rounded-xl border p-3.5 text-left transition ${
                isActive
                  ? 'border-zinc-600 bg-zinc-800/70 text-zinc-100'
                  : 'border-zinc-800/80 bg-zinc-900/30 text-zinc-400 hover:border-zinc-700 hover:text-zinc-200'
              }`}
            >
              <div className={`flex h-8 w-8 items-center justify-center rounded-lg ${isActive ? 'bg-zinc-100 text-zinc-950 font-bold' : 'bg-zinc-800 text-zinc-300'}`}>
                <Icon className="text-sm" />
              </div>
              <div>
                <p className="font-display font-semibold text-xs sm:text-sm text-zinc-200">{cat.title}</p>
              </div>
            </button>
          )
        })}
      </div>

      {/* Active Category Visual Skill Cards Grid */}
      <div className="rounded-2xl border border-zinc-800/80 bg-zinc-900/40 p-6 sm:p-8 backdrop-blur-sm">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-zinc-800/60 pb-5 mb-6">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-zinc-800 text-zinc-200 border border-zinc-700">
              <ActiveIcon className="text-lg" />
            </div>
            <div>
              <h3 className="font-display text-lg sm:text-xl font-bold text-zinc-100">{currentCategory.title}</h3>
              <p className="text-xs text-zinc-400 mt-0.5">{currentCategory.description}</p>
            </div>
          </div>
          <span className="self-start sm:self-auto rounded-full border border-zinc-700 bg-zinc-800/50 px-3 py-1 text-[11px] font-mono text-zinc-300">
            {currentCategory.skills.length} Competencies
          </span>
        </div>

        {/* Skills Cards Grid with Logos */}
        <div className="grid gap-3.5 sm:grid-cols-2 lg:grid-cols-3">
          {currentCategory.skills.map((skill, index) => (
            <Motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25, delay: index * 0.03 }}
              className="group rounded-xl border border-zinc-800/70 bg-zinc-900/80 p-4 hover:border-zinc-700 transition"
            >
              <div className="flex items-center justify-between">
                <TechIcon name={skill.name} size="md" showLabel={true} />
                <span className="rounded-md bg-zinc-800/80 px-2 py-0.5 text-[10px] font-mono text-zinc-400 uppercase">
                  {skill.tag}
                </span>
              </div>
            </Motion.div>
          ))}
        </div>
      </div>

      {/* Clean Stack Marquee / Tag Row */}
      <div className="mt-8 flex flex-wrap gap-2 pt-4">
        {coreStack.map((item) => (
          <span
            key={item}
            className="flex items-center gap-2 rounded-lg border border-zinc-800/80 bg-zinc-900/50 px-3 py-1.5 text-xs text-zinc-300 hover:border-zinc-700 transition"
          >
            <TechIcon name={item} size="sm" showLabel={true} />
          </span>
        ))}
      </div>
    </section>
  )
}
