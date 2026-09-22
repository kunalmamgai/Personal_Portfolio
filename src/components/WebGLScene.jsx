import { useEffect, useRef } from 'react'
import * as THREE from 'three'

export default function WebGLScene() {
  const containerRef = useRef(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    // Scene, Camera, Renderer
    const scene = new THREE.Scene()
    scene.fog = new THREE.FogExp2(0x020617, 0.002)

    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    )
    camera.position.z = 85

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setSize(window.innerWidth, window.innerHeight)
    container.appendChild(renderer.domElement)

    // Dynamic 3D Particle Starfield
    const particleCount = 750
    const geometry = new THREE.BufferGeometry()
    const positions = new Float32Array(particleCount * 3)
    const colors = new Float32Array(particleCount * 3)

    const cyan = new THREE.Color(0x22d3ee)
    const purple = new THREE.Color(0xa855f7)
    const amber = new THREE.Color(0xf59e0b)

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 300
      positions[i * 3 + 1] = (Math.random() - 0.5) * 300
      positions[i * 3 + 2] = (Math.random() - 0.5) * 300

      const mixedColor = Math.random() > 0.6 ? cyan : Math.random() > 0.3 ? purple : amber
      colors[i * 3] = mixedColor.r
      colors[i * 3 + 1] = mixedColor.g
      colors[i * 3 + 2] = mixedColor.b
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3))

    const particleMaterial = new THREE.PointsMaterial({
      size: 1.8,
      vertexColors: true,
      transparent: true,
      opacity: 0.75,
      blending: THREE.AdditiveBlending,
    })

    const particles = new THREE.Points(geometry, particleMaterial)
    scene.add(particles)

    // Floating 3D Geometric Polyhedrons (Icosahedrons & Torus Rings)
    const polyGroup = new THREE.Group()
    scene.add(polyGroup)

    const wireMat1 = new THREE.MeshBasicMaterial({
      color: 0x22d3ee,
      wireframe: true,
      transparent: true,
      opacity: 0.25,
    })
    const wireMat2 = new THREE.MeshBasicMaterial({
      color: 0xa855f7,
      wireframe: true,
      transparent: true,
      opacity: 0.2,
    })
    const wireMat3 = new THREE.MeshBasicMaterial({
      color: 0xf59e0b,
      wireframe: true,
      transparent: true,
      opacity: 0.18,
    })

    // Main central icosahedron
    const ico1 = new THREE.Mesh(new THREE.IcosahedronGeometry(12, 1), wireMat1)
    ico1.position.set(-45, 15, -20)
    polyGroup.add(ico1)

    // Secondary Torus ring
    const torus1 = new THREE.Mesh(new THREE.TorusGeometry(16, 1.2, 16, 60), wireMat2)
    torus1.position.set(50, -25, -30)
    polyGroup.add(torus1)

    // Third Octahedron
    const oct1 = new THREE.Mesh(new THREE.OctahedronGeometry(10, 1), wireMat3)
    oct1.position.set(30, 35, -40)
    polyGroup.add(oct1)

    // Neon Cyber Grid Floor
    const gridHelper = new THREE.GridHelper(400, 40, 0x22d3ee, 0x1e293b)
    gridHelper.position.y = -60
    gridHelper.material.opacity = 0.35
    gridHelper.material.transparent = true
    scene.add(gridHelper)

    // Mouse Interaction
    let mouseX = 0
    let mouseY = 0
    let targetX = 0
    let targetY = 0

    const handleMouseMove = (event) => {
      mouseX = (event.clientX / window.innerWidth - 0.5) * 2
      mouseY = (event.clientY / window.innerHeight - 0.5) * 2
    }

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    }

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('resize', handleResize)

    // Animation Loop
    let animationId
    const clock = new THREE.Clock()

    const animate = () => {
      animationId = requestAnimationFrame(animate)
      const elapsedTime = clock.getElapsedTime()

      // Smooth camera parallax
      targetX += (mouseX * 15 - targetX) * 0.04
      targetY += (-mouseY * 15 - targetY) * 0.04

      camera.position.x = targetX
      camera.position.y = targetY
      camera.lookAt(0, 0, 0)

      // Rotate objects
      particles.rotation.y = elapsedTime * 0.03
      particles.rotation.x = elapsedTime * 0.01

      ico1.rotation.x = elapsedTime * 0.15
      ico1.rotation.y = elapsedTime * 0.2
      ico1.position.y = 15 + Math.sin(elapsedTime * 0.8) * 3

      torus1.rotation.x = elapsedTime * 0.2
      torus1.rotation.y = elapsedTime * 0.25
      torus1.position.y = -25 + Math.cos(elapsedTime * 0.7) * 4

      oct1.rotation.y = elapsedTime * 0.3
      oct1.rotation.z = elapsedTime * 0.15

      // Grid subtle drift
      gridHelper.position.z = (elapsedTime * 10) % 10 - 5

      renderer.render(scene, camera)
    }

    animate()

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('resize', handleResize)
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement)
      }
      renderer.dispose()
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className="pointer-events-none fixed inset-0 z-0 h-full w-full overflow-hidden"
    />
  )
}
