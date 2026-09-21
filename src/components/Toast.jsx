import { motion as Motion, AnimatePresence } from 'framer-motion'
import { FiCheckCircle, FiInfo } from 'react-icons/fi'

export default function Toast({ message, type = 'success', onClose }) {
  if (!message) return null

  return (
    <AnimatePresence>
      <Motion.div
        initial={{ opacity: 0, y: 50, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: 0.9 }}
        className="fixed bottom-6 right-6 z-50 flex items-center gap-3 rounded-2xl border border-cyan-400/30 bg-slate-900/95 px-5 py-3.5 shadow-[0_16px_40px_rgba(2,6,23,0.8)] backdrop-blur-xl"
      >
        {type === 'success' ? (
          <FiCheckCircle className="text-xl text-cyan-400" />
        ) : (
          <FiInfo className="text-xl text-orange-400" />
        )}
        <span className="text-sm font-medium text-slate-100">{message}</span>
        {onClose && (
          <button
            onClick={onClose}
            className="ml-2 rounded-lg p-1 text-xs text-slate-400 hover:bg-white/10 hover:text-white"
          >
            ✕
          </button>
        )}
      </Motion.div>
    </AnimatePresence>
  )
}
