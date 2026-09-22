// Futuristic Cyber Audio Synthesizer using Web Audio API (Zero external assets)
class CyberAudioEngine {
  constructor() {
    this.ctx = null
    this.isMuted = false
    this.initOnFirstInteraction = this.initOnFirstInteraction.bind(this)
    if (typeof window !== 'undefined') {
      window.addEventListener('click', this.initOnFirstInteraction, { once: true })
      window.addEventListener('keydown', this.initOnFirstInteraction, { once: true })
    }
  }

  initOnFirstInteraction() {
    if (!this.ctx && typeof window !== 'undefined') {
      const AudioContext = window.AudioContext || window.webkitAudioContext
      if (AudioContext) {
        this.ctx = new AudioContext()
      }
    }
  }

  ensureContext() {
    if (!this.ctx && typeof window !== 'undefined') {
      const AudioContext = window.AudioContext || window.webkitAudioContext
      if (AudioContext) {
        this.ctx = new AudioContext()
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume()
    }
  }

  toggleMute() {
    this.isMuted = !this.isMuted
    return this.isMuted
  }

  playHover() {
    if (this.isMuted) return
    try {
      this.ensureContext()
      if (!this.ctx) return

      const osc = this.ctx.createOscillator()
      const gain = this.ctx.createGain()

      osc.type = 'sine'
      osc.frequency.setValueAtTime(800, this.ctx.currentTime)
      osc.frequency.exponentialRampToValueAtTime(1400, this.ctx.currentTime + 0.04)

      gain.gain.setValueAtTime(0.015, this.ctx.currentTime)
      gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + 0.04)

      osc.connect(gain)
      gain.connect(this.ctx.destination)

      osc.start()
      osc.stop(this.ctx.currentTime + 0.04)
    } catch (e) {
      // Audio autoplay policy fallback
    }
  }

  playClick() {
    if (this.isMuted) return
    try {
      this.ensureContext()
      if (!this.ctx) return

      const osc = this.ctx.createOscillator()
      const gain = this.ctx.createGain()

      osc.type = 'triangle'
      osc.frequency.setValueAtTime(1200, this.ctx.currentTime)
      osc.frequency.exponentialRampToValueAtTime(300, this.ctx.currentTime + 0.08)

      gain.gain.setValueAtTime(0.04, this.ctx.currentTime)
      gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + 0.08)

      osc.connect(gain)
      gain.connect(this.ctx.destination)

      osc.start()
      osc.stop(this.ctx.currentTime + 0.08)
    } catch (e) {
      // Audio autoplay policy fallback
    }
  }

  playChime() {
    if (this.isMuted) return
    try {
      this.ensureContext()
      if (!this.ctx) return

      const freqs = [523.25, 659.25, 783.99, 1046.50] // C5, E5, G5, C6 chord
      freqs.forEach((freq, idx) => {
        const osc = this.ctx.createOscillator()
        const gain = this.ctx.createGain()

        osc.type = 'sine'
        osc.frequency.setValueAtTime(freq, this.ctx.currentTime + idx * 0.03)

        gain.gain.setValueAtTime(0.03, this.ctx.currentTime + idx * 0.03)
        gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + idx * 0.03 + 0.35)

        osc.connect(gain)
        gain.connect(this.ctx.destination)

        osc.start(this.ctx.currentTime + idx * 0.03)
        osc.stop(this.ctx.currentTime + idx * 0.03 + 0.35)
      })
    } catch (e) {
      // Audio autoplay policy fallback
    }
  }

  playWarp() {
    if (this.isMuted) return
    try {
      this.ensureContext()
      if (!this.ctx) return

      const osc = this.ctx.createOscillator()
      const gain = this.ctx.createGain()

      osc.type = 'sawtooth'
      osc.frequency.setValueAtTime(200, this.ctx.currentTime)
      osc.frequency.exponentialRampToValueAtTime(2400, this.ctx.currentTime + 0.2)

      gain.gain.setValueAtTime(0.025, this.ctx.currentTime)
      gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + 0.2)

      osc.connect(gain)
      gain.connect(this.ctx.destination)

      osc.start()
      osc.stop(this.ctx.currentTime + 0.2)
    } catch (e) {
      // Audio autoplay policy fallback
    }
  }
}

export const audio = new CyberAudioEngine()
