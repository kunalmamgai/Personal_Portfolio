import { useState, useRef, useEffect } from 'react'
import { motion as Motion, AnimatePresence } from 'framer-motion'
import { FiTerminal, FiX, FiCornerDownLeft, FiMaximize2, FiMinus } from 'react-icons/fi'
import { terminalCommands } from '../data/portfolio'

export default function TerminalModal({ isOpen, onClose }) {
  const [input, setInput] = useState('')
  const [history, setHistory] = useState([
    {
      type: 'system',
      text: 'Kunal.dev Interactive Terminal v2.5 [Type "help" for commands]',
    },
  ])
  const inputRef = useRef(null)
  const bottomRef = useRef(null)

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 150)
    }
  }, [isOpen])

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [history])

  const handleCommand = (e) => {
    if (e.key !== 'Enter') return
    const cmd = input.trim().toLowerCase()
    setInput('')

    if (!cmd) return

    const newHistory = [...history, { type: 'user', text: `$ ${cmd}` }]

    if (cmd === 'clear') {
      setHistory([
        {
          type: 'system',
          text: 'Terminal screen cleared. Type "help" for available commands.',
        },
      ])
      return
    }

    if (cmd === 'github') {
      window.open('https://github.com/kunalmamgai', '_blank')
    } else if (cmd === 'linkedin') {
      window.open('https://www.linkedin.com/in/kunal-mamgai-777k/', '_blank')
    }

    const response = terminalCommands[cmd] || `Command not found: "${cmd}". Type "help" for available commands.`
    newHistory.push({ type: 'output', text: response })
    setHistory(newHistory)
  }

  if (!isOpen) return null

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
        <Motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-3xl overflow-hidden rounded-2xl border border-cyan-500/30 bg-slate-950 shadow-[0_25px_80px_rgba(2,6,23,0.9)] ring-1 ring-cyan-400/20"
        >
          {/* Header Bar */}
          <div className="flex items-center justify-between border-b border-white/10 bg-slate-900/90 px-4 py-3">
            <div className="flex items-center gap-3">
              <div className="flex gap-2">
                <span className="h-3 w-3 rounded-full bg-red-500/80 cursor-pointer" onClick={onClose} />
                <span className="h-3 w-3 rounded-full bg-yellow-500/80" />
                <span className="h-3 w-3 rounded-full bg-green-500/80" />
              </div>
              <div className="flex items-center gap-2 text-xs font-mono text-cyan-300">
                <FiTerminal />
                <span>kunal@developer-shell:~</span>
              </div>
            </div>
            <div className="flex items-center gap-2 text-slate-400">
              <button onClick={onClose} className="hover:text-white transition">
                <FiX />
              </button>
            </div>
          </div>

          {/* Terminal Body */}
          <div className="h-96 overflow-y-auto p-4 font-mono text-xs sm:text-sm text-slate-200 leading-relaxed bg-slate-950/90 selection:bg-cyan-500/30">
            <div className="mb-4 text-cyan-400 font-bold">
              <pre className="text-[10px] sm:text-xs leading-none">
{`
 ___  __  _  _ _  __   __     ____  ____ _  _ 
/ __)/  \\( \\/ ) )(  (  /  \\   (  _ \\(  __/ \\/ )
( (__ (  O )  / \\/ / /\\ (  O )   ) _ ( ) _) \\  / 
\\___)\\_/__/\\/  \\__/ \\/__\\_/   (____/(____)  \\/  
`}
              </pre>
            </div>

            {history.map((item, idx) => (
              <div key={idx} className="mb-2">
                {item.type === 'user' ? (
                  <span className="text-cyan-300 font-semibold">{item.text}</span>
                ) : item.type === 'system' ? (
                  <span className="text-amber-400">{item.text}</span>
                ) : (
                  <span className="text-slate-300 whitespace-pre-wrap">{item.text}</span>
                )}
              </div>
            ))}

            <div className="flex items-center gap-2 mt-3 pt-2 border-t border-white/5">
              <span className="text-emerald-400 font-semibold">kunal.dev$</span>
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleCommand}
                placeholder="type 'help' or any command..."
                className="flex-1 bg-transparent text-white outline-none font-mono placeholder:text-slate-600"
              />
              <span className="text-xs text-slate-500 hidden sm:inline-flex items-center gap-1">
                Press <kbd className="rounded border border-white/20 bg-white/5 px-1 py-0.5 text-[10px]">Enter</kbd>
              </span>
            </div>
            <div ref={bottomRef} />
          </div>
        </Motion.div>
      </div>
    </AnimatePresence>
  )
}
