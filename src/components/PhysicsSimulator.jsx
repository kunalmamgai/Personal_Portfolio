import { useState, useEffect, useRef } from 'react'
import { motion as Motion } from 'framer-motion'
import { FiPlay, FiRefreshCw, FiZap, FiActivity, FiLayers, FiRadio } from 'react-icons/fi'
import { audio } from '../utils/AudioEffects'

export default function PhysicsSimulator() {
  const canvasRef = useRef(null)
  const [mode, setMode] = useState('vortex') // 'vortex', 'gravity', 'wave', 'chaos'
  const [particleCount, setParticleCount] = useState(250)
  const [colorTheme, setColorTheme] = useState('cyber') // 'cyber', 'neon', 'solar'

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animId
    let w = (canvas.width = canvas.parentElement.clientWidth || 800)
    let h = (canvas.height = 420)

    const handleResize = () => {
      if (!canvas.parentElement) return
      w = canvas.width = canvas.parentElement.clientWidth
      h = canvas.height = 420
    }

    window.addEventListener('resize', handleResize)

    // Particles Data
    const particles = []
    const palette = {
      cyber: ['#22d3ee', '#06b6d4', '#3b82f6', '#a855f7'],
      neon: ['#10b981', '#06b6d4', '#ec4899', '#f59e0b'],
      solar: ['#f59e0b', '#ef4444', '#f97316', '#fbbf24'],
    }

    const currentPalette = palette[colorTheme] || palette.cyber

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 2,
        vy: (Math.random() - 0.5) * 2,
        radius: Math.random() * 2.5 + 1.2,
        color: currentPalette[Math.floor(Math.random() * currentPalette.length)],
        angle: Math.random() * Math.PI * 2,
        speed: Math.random() * 0.04 + 0.01,
        dist: Math.random() * 140 + 20,
      })
    }

    let mouse = { x: w / 2, y: h / 2, isDown: false }

    const onMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect()
      mouse.x = e.clientX - rect.left
      mouse.y = e.clientY - rect.top
    }

    const onMouseDown = () => {
      mouse.isDown = true
      audio.playWarp()
    }

    const onMouseUp = () => {
      mouse.isDown = false
    }

    canvas.addEventListener('mousemove', onMouseMove)
    canvas.addEventListener('mousedown', onMouseDown)
    window.addEventListener('mouseup', onMouseUp)

    let t = 0

    const render = () => {
      ctx.fillStyle = 'rgba(2, 6, 23, 0.22)'
      ctx.fillRect(0, 0, w, h)

      t += 0.02

      // Draw attractor core
      ctx.beginPath()
      ctx.arc(mouse.x, mouse.y, mouse.isDown ? 14 : 7, 0, Math.PI * 2)
      ctx.fillStyle = mouse.isDown ? '#f43f5e' : '#22d3ee'
      ctx.shadowBlur = 20
      ctx.shadowColor = mouse.isDown ? '#f43f5e' : '#22d3ee'
      ctx.fill()
      ctx.shadowBlur = 0

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i]

        if (mode === 'vortex') {
          p.angle += p.speed * (mouse.isDown ? 2.5 : 1)
          const targetX = mouse.x + Math.cos(p.angle) * p.dist
          const targetY = mouse.y + Math.sin(p.angle) * p.dist
          p.x += (targetX - p.x) * 0.05
          p.y += (targetY - p.y) * 0.05
        } else if (mode === 'gravity') {
          const dx = mouse.x - p.x
          const dy = mouse.y - p.y
          const d = Math.sqrt(dx * dx + dy * dy) + 1
          const force = (mouse.isDown ? -800 : 350) / (d * d)
          p.vx += (dx / d) * force
          p.vy += (dy / d) * force
          p.vx *= 0.96
          p.vy *= 0.96
          p.x += p.vx
          p.y += p.vy
        } else if (mode === 'wave') {
          p.x += 1.5
          if (p.x > w) p.x = 0
          p.y = mouse.y + Math.sin(p.x * 0.02 + t) * 60 + Math.cos(p.angle + t) * 20
        } else if (mode === 'chaos') {
          p.x += p.vx * 1.5
          p.y += p.vy * 1.5
          if (p.x < 0 || p.x > w) p.vx *= -1
          if (p.y < 0 || p.y > h) p.vy *= -1
        }

        // Draw particle
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2)
        ctx.fillStyle = p.color
        ctx.fill()

        // Connect nearby particles
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j]
          const dist = Math.hypot(p.x - p2.x, p.y - p2.y)
          if (dist < 48) {
            ctx.beginPath()
            ctx.moveTo(p.x, p.y)
            ctx.lineTo(p2.x, p2.y)
            ctx.strokeStyle = `rgba(34, 211, 238, ${0.35 * (1 - dist / 48)})`
            ctx.lineWidth = 0.6
            ctx.stroke()
          }
        }
      }

      animId = requestAnimationFrame(render)
    }

    render()

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', handleResize)
      canvas.removeEventListener('mousemove', onMouseMove)
      canvas.removeEventListener('mousedown', onMouseDown)
      window.removeEventListener('mouseup', onMouseUp)
    }
  }, [mode, particleCount, colorTheme])

  return (
    <section id="simulation" className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
      <div className="relative overflow-hidden rounded-[2.5rem] border border-cyan-400/30 bg-slate-900/80 p-6 sm:p-10 backdrop-blur-2xl shadow-[0_25px_90px_rgba(2,6,23,0.9)] ring-1 ring-cyan-400/20">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-cyan-400/10 text-cyan-300">
                <FiActivity className="text-base" />
              </span>
              <span className="text-xs font-mono font-bold uppercase tracking-[0.3em] text-cyan-300">
                Interactive WebGL Physics Lab & Simulation
              </span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white">
              Particle Physics & Force Field Simulator
            </h2>
            <p className="mt-2 text-sm text-slate-300">
              Interactive physics simulation built directly in canvas. Click & drag mouse inside the canvas to manipulate the gravitational singularity!
            </p>
          </div>

          {/* Controls Bar */}
          <div className="flex flex-wrap items-center gap-2">
            {[
              { id: 'vortex', label: 'Vortex Field', icon: FiRadio },
              { id: 'gravity', label: 'Gravity Core', icon: FiZap },
              { id: 'wave', label: 'Harmonic Wave', icon: FiActivity },
              { id: 'chaos', label: 'Chaos Bloom', icon: FiLayers },
            ].map((m) => {
              const Icon = m.icon
              const active = mode === m.id
              return (
                <button
                  key={m.id}
                  onClick={() => {
                    setMode(m.id)
                    audio.playClick()
                  }}
                  className={`flex items-center gap-2 rounded-xl px-3.5 py-2 text-xs font-semibold transition ${
                    active
                      ? 'bg-cyan-400 text-slate-950 shadow-[0_0_15px_rgba(34,211,238,0.4)]'
                      : 'border border-white/10 bg-slate-950 text-slate-400 hover:text-white'
                  }`}
                >
                  <Icon />
                  <span>{m.label}</span>
                </button>
              )
            })}
          </div>
        </div>

        {/* Live Canvas Area */}
        <div className="relative w-full overflow-hidden rounded-2xl border border-cyan-400/20 bg-slate-950 shadow-inner cursor-crosshair">
          <canvas ref={canvasRef} className="block w-full h-[380px] sm:h-[420px]" />
          
          <div className="absolute top-4 left-4 flex items-center gap-2 rounded-full bg-slate-950/80 border border-white/15 px-3 py-1 text-[11px] font-mono text-cyan-300 backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
            <span>WebGL Real-Time Physics: {mode.toUpperCase()}</span>
          </div>

          <div className="absolute bottom-4 right-4 hidden sm:flex items-center gap-3 rounded-xl bg-slate-950/80 border border-white/10 p-2 text-xs font-mono text-slate-400 backdrop-blur">
            <span>Particles: {particleCount}</span>
            <button
              onClick={() => {
                setColorTheme((prev) => (prev === 'cyber' ? 'neon' : prev === 'neon' ? 'solar' : 'cyber'))
                audio.playChime()
              }}
              className="rounded-lg bg-white/10 px-2.5 py-1 text-cyan-300 hover:bg-white/20 transition"
            >
              Palette: {colorTheme.toUpperCase()}
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
