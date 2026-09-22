import { useEffect, useRef } from 'react'
import * as THREE from 'three'

export default function Hero3DCanvas() {
  const mountRef = useRef(null)

  useEffect(() => {
    const mount = mountRef.current
    if (!mount) return

    const width = mount.clientWidth || 320
    const height = mount.clientHeight || 320

    // Scene & Camera
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100)
    camera.position.z = 18

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setSize(width, height)
    mount.appendChild(renderer.domElement)

    // Inner Glowing Core Sphere
    const coreGeo = new THREE.SphereGeometry(3.5, 32, 32)
    const coreMat = new THREE.MeshBasicMaterial({
      color: 0x06b6d4,
      wireframe: true,
      transparent: true,
      opacity: 0.85,
    })
    const coreMesh = new THREE.Mesh(coreGeo, coreMat)
    scene.add(coreMesh)

    // Outer Gyroscope Rings (3 axis rings)
    const ringMat1 = new THREE.MeshBasicMaterial({
      color: 0x22d3ee,
      transparent: true,
      opacity: 0.7,
      wireframe: true,
    })
    const ringMat2 = new THREE.MeshBasicMaterial({
      color: 0xa855f7,
      transparent: true,
      opacity: 0.6,
      wireframe: true,
    })
    const ringMat3 = new THREE.MeshBasicMaterial({
      color: 0xf59e0b,
      transparent: true,
      opacity: 0.65,
      wireframe: true,
    })

    const ring1 = new THREE.Mesh(new THREE.TorusGeometry(5.2, 0.12, 16, 100), ringMat1)
    const ring2 = new THREE.Mesh(new THREE.TorusGeometry(6.4, 0.12, 16, 100), ringMat2)
    const ring3 = new THREE.Mesh(new THREE.TorusGeometry(7.6, 0.12, 16, 100), ringMat3)

    scene.add(ring1)
    scene.add(ring2)
    scene.add(ring3)

    // Orbiting Spark Particles
    const sparkCount = 80
    const sparkGeo = new THREE.BufferGeometry()
    const sparkPos = new Float32Array(sparkCount * 3)

    for (let i = 0; i < sparkCount; i++) {
      const radius = 4.5 + Math.random() * 3.5
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(Math.random() * 2 - 1)
      sparkPos[i * 3] = radius * Math.sin(phi) * Math.cos(theta)
      sparkPos[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta)
      sparkPos[i * 3 + 2] = radius * Math.cos(phi)
    }

    sparkGeo.setAttribute('position', new THREE.BufferAttribute(sparkPos, 3))
    const sparkMat = new THREE.PointsMaterial({
      size: 0.25,
      color: 0x38bdf8,
      transparent: true,
      opacity: 0.9,
      blending: THREE.AdditiveBlending,
    })
    const sparkPoints = new THREE.Points(sparkGeo, sparkMat)
    scene.add(sparkPoints)

    // Mouse Interaction
    let isDragging = false
    let prevMousePos = { x: 0, y: 0 }
    let rotX = 0
    let rotY = 0

    const onMouseDown = (e) => {
      isDragging = true
      prevMousePos = { x: e.clientX, y: e.clientY }
    }

    const onMouseMove = (e) => {
      if (!isDragging) return
      const deltaX = e.clientX - prevMousePos.x
      const deltaY = e.clientY - prevMousePos.y
      rotY += deltaX * 0.01
      rotX += deltaY * 0.01
      prevMousePos = { x: e.clientX, y: e.clientY }
    }

    const onMouseUp = () => {
      isDragging = false
    }

    mount.addEventListener('mousedown', onMouseDown)
    window.addEventListener('mousemove', onMouseMove)
    window.addEventListener('mouseup', onMouseUp)

    // Resize Handler
    const handleResize = () => {
      if (!mount) return
      const w = mount.clientWidth || 320
      const h = mount.clientHeight || 320
      camera.aspect = w / h
      camera.updateProjectionMatrix()
      renderer.setSize(w, h)
    }

    window.addEventListener('resize', handleResize)

    // Animation Loop
    let animId
    const clock = new THREE.Clock()

    const animate = () => {
      animId = requestAnimationFrame(animate)
      const t = clock.getElapsedTime()

      coreMesh.rotation.y = t * 0.4 + rotY
      coreMesh.rotation.x = t * 0.2 + rotX

      ring1.rotation.x = t * 0.6 + rotX
      ring1.rotation.y = t * 0.3 + rotY

      ring2.rotation.y = t * 0.5 + rotY
      ring2.rotation.z = t * 0.4 + rotX

      ring3.rotation.x = t * 0.35 + rotX
      ring3.rotation.z = t * 0.7 + rotY

      sparkPoints.rotation.y = -t * 0.3 + rotY

      renderer.render(scene, camera)
    }

    animate()

    return () => {
      cancelAnimationFrame(animId)
      mount.removeEventListener('mousedown', onMouseDown)
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('mouseup', onMouseUp)
      window.removeEventListener('resize', handleResize)
      if (mount && renderer.domElement) {
        mount.removeChild(renderer.domElement)
      }
      renderer.dispose()
    }
  }, [])

  return (
    <div className="relative flex flex-col items-center justify-center select-none cursor-grab active:cursor-grabbing">
      <div
        ref={mountRef}
        className="h-64 w-64 sm:h-80 sm:w-80 overflow-hidden"
      />
      <span className="mt-1 text-[10px] font-mono uppercase tracking-[0.25em] text-cyan-400/70">
        ✦ Interactive 3D Core (Drag to rotate) ✦
      </span>
    </div>
  )
}
