import { useState, useEffect } from 'react'
import { motion as Motion, AnimatePresence } from 'framer-motion'
import { FiSearch, FiArrowRight, FiCommand, FiCode, FiUser, FiZap, FiFolder, FiMail, FiGithub, FiLinkedin, FiAward } from 'react-icons/fi'

export default function CommandPalette({ isOpen, onClose, onOpenTerminal }) {
  const [query, setQuery] = useState('')

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault()
        if (isOpen) onClose()
        else onOpenTerminal ? onClose() : null
      }
      if (e.key === 'Escape' && isOpen) {
        onClose()
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, onClose, onOpenTerminal])

  const actions = [
    { id: 'journey', label: 'View Technical Journey', icon: FiAward, href: '#journey', category: 'Navigation' },
    { id: 'skills', label: 'Explore Skill Matrix', icon: FiZap, href: '#skills', category: 'Navigation' },
    { id: 'projects', label: 'Browse Projects Showcase', icon: FiFolder, href: '#projects', category: 'Navigation' },
    { id: 'hackathon', label: 'INNOVIT Hackathon Spotlight', icon: FiCode, href: '#hackathon', category: 'Highlights' },
    { id: 'contact', label: 'Get in Touch', icon: FiMail, href: '#contact', category: 'Navigation' },
    { id: 'terminal', label: 'Open CLI Terminal Drawer', icon: FiCommand, action: onOpenTerminal, category: 'Tools' },
    { id: 'github', label: 'Open GitHub (@kunalmamgai)', icon: FiGithub, href: 'https://github.com/kunalmamgai', external: true, category: 'Social' },
    { id: 'linkedin', label: 'Open LinkedIn Profile', icon: FiLinkedin, href: 'https://www.linkedin.com/in/kunal-mamgai-777k/', external: true, category: 'Social' },
  ]

  const filtered = actions.filter((action) =>
    action.label.toLowerCase().includes(query.toLowerCase()) ||
    action.category.toLowerCase().includes(query.toLowerCase())
  )

  if (!isOpen) return null

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-slate-950/80 backdrop-blur-md">
        <Motion.div
          initial={{ opacity: 0, scale: 0.95, y: -20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: -20 }}
          className="relative w-full max-w-xl overflow-hidden rounded-2xl border border-cyan-500/30 bg-slate-900 shadow-[0_25px_80px_rgba(2,6,23,0.9)] ring-1 ring-cyan-300/20"
        >
          {/* Search Input */}
          <div className="flex items-center gap-3 border-b border-white/10 px-4 py-3.5">
            <FiSearch className="text-xl text-cyan-400" />
            <input
              type="text"
              autoFocus
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Type a command or search section (e.g. Journey, Hackathon, Skills)..."
              className="flex-1 bg-transparent text-sm text-white placeholder:text-slate-500 outline-none font-medium"
            />
            <button onClick={onClose} className="rounded-lg border border-white/10 bg-white/5 px-2 py-1 text-xs text-slate-400 hover:text-white">
              ESC
            </button>
          </div>

          {/* Results List */}
          <div className="max-h-80 overflow-y-auto p-2">
            {filtered.length === 0 ? (
              <div className="p-6 text-center text-sm text-slate-500">
                No matching actions found for &quot;{query}&quot;
              </div>
            ) : (
              filtered.map((item) => {
                const Icon = item.icon
                return (
                  <a
                    key={item.id}
                    href={item.href || '#'}
                    onClick={(e) => {
                      if (item.action) {
                        e.preventDefault()
                        item.action()
                      }
                      if (item.external) {
                        window.open(item.href, '_blank')
                      }
                      onClose()
                    }}
                    className="flex items-center justify-between rounded-xl px-3.5 py-3 text-sm text-slate-200 transition hover:bg-cyan-500/15 hover:text-white group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/5 text-cyan-400 group-hover:bg-cyan-400 group-hover:text-slate-950 transition">
                        <Icon />
                      </div>
                      <div>
                        <p className="font-medium">{item.label}</p>
                        <span className="text-[10px] text-slate-500 group-hover:text-cyan-200/70 uppercase tracking-wider">{item.category}</span>
                      </div>
                    </div>
                    <FiArrowRight className="text-slate-600 opacity-0 group-hover:opacity-100 group-hover:text-cyan-400 transition" />
                  </a>
                )
              })
            )}
          </div>
        </Motion.div>
      </div>
    </AnimatePresence>
  )
}
