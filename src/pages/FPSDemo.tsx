import React, { useEffect, useRef, useState } from 'react'
import * as THREE from 'three'
import { PointerLockControls } from 'three/examples/jsm/controls/PointerLockControls'

export default function FPSDemo() {
  const mountRef = useRef<HTMLDivElement | null>(null)
  const [score, setScore] = useState(0)
  const [isLocked, setIsLocked] = useState(false)
  const [mpConnected, setMpConnected] = useState(false)

  useEffect(() => {
    const mount = mountRef.current
    if (!mount) return

    const w = mount.clientWidth
    const h = mount.clientHeight

    const scene = new THREE.Scene()
    scene.background = new THREE.Color(0x20232a)

    const camera = new THREE.PerspectiveCamera(75, w / h, 0.1, 1000)
    camera.position.set(0, 2, 8)

    const renderer = new THREE.WebGLRenderer({ antialias: true })
    renderer.setSize(w, h)
    mount.appendChild(renderer.domElement)

    // PointerLockControls for FPS movement (needs renderer.domElement)
    const controls = new PointerLockControls(camera, renderer.domElement)
    scene.add(controls.getObject())

    // Player direction helper (not visible)
    const playerVelocity = new THREE.Vector3()
    const playerDirection = new THREE.Vector3()

    // Simple level: ground plane
    const ground = new THREE.Mesh(new THREE.PlaneGeometry(80, 80), new THREE.MeshStandardMaterial({ color: 0x091016 }))
    ground.rotation.x = -Math.PI / 2
    ground.position.y = 0
    scene.add(ground)

    // Spawn some target spheres to shoot at
    const targetGeometry = new THREE.SphereGeometry(0.6, 18, 18)
    const targets: THREE.Mesh[] = []
    function spawnTarget(x: number, y: number, z: number, color = 0xff5050) {
      const m = new THREE.Mesh(targetGeometry, new THREE.MeshStandardMaterial({ color }))
      m.position.set(x, y, z)
      m.userData = { hit: false }
      scene.add(m)
      targets.push(m)
    }

    // Create a set of targets
    for (let i = 0; i < 6; i++) {
      spawnTarget((i - 2.5) * 3, 1.25, -4 - i * 4, 0xff5050)
    }

    const light = new THREE.DirectionalLight(0xffffff, 1.1)
    light.position.set(5, 8, 5)
    scene.add(light)

    const amb = new THREE.HemisphereLight(0xffffff, 0x444455, 0.5)
    scene.add(amb)

    let raf = 0
    const clock = new THREE.Clock()

    function animate() {
      raf = requestAnimationFrame(animate)
      const t = clock.getElapsedTime()
      const delta = Math.min(0.1, clock.getDelta())

      // basic target animation
      targets.forEach((tgt, idx) => {
        tgt.position.y = 1 + Math.sin(t * 1.2 + idx * 0.6) * 0.35
      })

      // Movement
      playerVelocity.x -= playerVelocity.x * 10.0 * delta
      playerVelocity.z -= playerVelocity.z * 10.0 * delta

      playerDirection.z = Number(keys['KeyW']) - Number(keys['KeyS'])
      playerDirection.x = Number(keys['KeyD']) - Number(keys['KeyA'])
      if (playerDirection.lengthSq() > 0) playerDirection.normalize()

      if ((controls as any).isLocked) {
        // simple acceleration
        if (playerDirection.lengthSq() > 0) {
          playerVelocity.x -= playerDirection.x * 400.0 * delta
          playerVelocity.z -= playerDirection.z * 400.0 * delta
        }

        // move using controls helper
        controls.moveRight(-playerVelocity.x * delta)
        controls.moveForward(-playerVelocity.z * delta)

        // keep height constant
        controls.getObject().position.y = 2
      }

      renderer.render(scene, camera)
    }

    animate()

    // Handle resize
    function onResize() {
      const w = mount.clientWidth
      const h = mount.clientHeight
      camera.aspect = w / h
      camera.updateProjectionMatrix()
      renderer.setSize(w, h)
    }

    window.addEventListener('resize', onResize)

    // Input and shooting controls
    const keys: Record<string, boolean> = {}

    function onKeyDown(e: KeyboardEvent) { keys[e.code] = true }
    function onKeyUp(e: KeyboardEvent) { keys[e.code] = false }

    const crosshairEl = mount.querySelector('.crosshair') as HTMLDivElement | null

    function playShootSound() {
      try {
        const ac = new (window.AudioContext || (window as any).webkitAudioContext)()
        const o = ac.createOscillator()
        const g = ac.createGain()
        o.type = 'square'
        o.frequency.value = 1200
        g.gain.value = 0.08
        o.connect(g)
        g.connect(ac.destination)
        o.start()
        setTimeout(() => { o.stop(); ac.close() }, 80)
      } catch {}
    }

    function animateCrosshair(isHit = false) {
      if (!crosshairEl) return
      // visual for shoot
      crosshairEl.classList.add('shoot')
      setTimeout(() => crosshairEl.classList.remove('shoot'), 120)
      if (isHit) {
        crosshairEl.classList.add('hit')
        setTimeout(() => crosshairEl.classList.remove('hit'), 180)
      }
    }

    function playHitSound() {
      try {
        const ac = new (window.AudioContext || (window as any).webkitAudioContext)()
        const o = ac.createOscillator()
        const g = ac.createGain()
        o.type = 'sine'
        o.frequency.value = 440
        g.gain.value = 0.12
        o.connect(g)
        g.connect(ac.destination)
        o.start()
        g.gain.exponentialRampToValueAtTime(0.0001, ac.currentTime + 0.12)
        setTimeout(() => { o.stop(); ac.close() }, 140)
      } catch {}
    }

    function shoot() {
      playShootSound()
      animateCrosshair(false)
      // Raycast from camera center
      const raycaster = new THREE.Raycaster()
      const cameraDirection = new THREE.Vector3()
      camera.getWorldDirection(cameraDirection)
      raycaster.set(camera.position, cameraDirection)
      const intersects = raycaster.intersectObjects(targets.filter(t => !t.userData.hit))
      if (intersects.length > 0) {
        const hit = intersects[0].object as THREE.Mesh
        hit.userData.hit = true
        // simple hit feedback: scale and fade
        const hitColor = (hit.material as THREE.MeshStandardMaterial).color
        hitColor.set(0x88ff88)
        setScore(s => s + 1)
        playHitSound()
        animateCrosshair(true)
        // remove after animation
        setTimeout(() => {
          scene.remove(hit)
        }, 500)
      }
    }

    function onClick() {
      // If pointer not locked, request lock
      if (!isLocked) {
        controls.lock()
      } else {
        shoot()
      }
    }

    renderer.domElement.addEventListener('click', onClick)
    document.addEventListener('keydown', onKeyDown)
    document.addEventListener('keyup', onKeyUp)

    // track pointer lock state
    controls.addEventListener('lock', () => setIsLocked(true))
    controls.addEventListener('unlock', () => setIsLocked(false))

    // --- Multiplayer wiring ---
    const wsRef: { ws: WebSocket | null, sendInterval?: number } = { ws: null }
    const remotePlayers = new Map()

    function addOrUpdateRemotePlayer(id: string, pos: number[], rot: number[]) {
      let mesh = remotePlayers.get(id)
      if (!mesh) {
        const m = new THREE.Mesh(new THREE.BoxGeometry(0.9, 1.8, 0.5), new THREE.MeshStandardMaterial({ color: Math.random() * 0xffffff }))
        m.position.set(pos[0], pos[1], pos[2])
        scene.add(m)
        remotePlayers.set(id, m)
        return m
      }
      mesh.position.set(pos[0], pos[1], pos[2])
      mesh.rotation.set(rot[0], rot[1], rot[2])
      return mesh
    }

    function connectWS() {
      if (wsRef.ws) return
      try {
        const ws = new WebSocket('ws://localhost:4001')
        wsRef.ws = ws
        ws.addEventListener('open', () => {
          console.log('ws open')
          setMpConnected(true)
        })
        ws.addEventListener('message', (ev) => {
          try {
            const d = JSON.parse(ev.data.toString())
            if (d.type === 'welcome') {
              // ignore
            } else if (d.type === 'state') {
              // update remote players
              addOrUpdateRemotePlayer(d.from, d.pos, d.rot)
            } else if (d.type === 'playerLeft') {
              const id = d.id
              const m = remotePlayers.get(id)
              if (m) { scene.remove(m); remotePlayers.delete(id) }
            }
          } catch {}
        })

        // send position periodically
        wsRef.sendInterval = window.setInterval(() => {
          if (!wsRef.ws || wsRef.ws.readyState !== WebSocket.OPEN) return
          const pos = controls.getObject().position
          const rot = controls.getObject().rotation
          wsRef.ws.send(JSON.stringify({ type: 'state', pos: [pos.x, pos.y, pos.z], rot: [rot.x, rot.y, rot.z], score }))
        }, 250)
      } catch (err) { console.warn('ws failed', err) }
    }

    function disconnectWS() {
      if (!wsRef.ws) return
      if (wsRef.sendInterval) window.clearInterval(wsRef.sendInterval)
      wsRef.ws.close()
      wsRef.ws = null
      setMpConnected(false)
      // remove remote players from scene
      remotePlayers.forEach((m) => scene.remove(m))
      remotePlayers.clear()
    }

    // expose connect/disconnect functions for the UI
    ;(mount as any).__connectWS = connectWS
    ;(mount as any).__disconnectWS = disconnectWS

    // Cleanup
    return () => {
      cancelAnimationFrame(raf)
      renderer.domElement.remove()
      window.removeEventListener('resize', onResize)
      renderer.domElement.removeEventListener('click', onClick)
      document.removeEventListener('keydown', onKeyDown)
      document.removeEventListener('keyup', onKeyUp)
    }
  }, [])

  return (
    <section className="fps">
      <h2>FPS Demo (single-player prototype)</h2>
      <p>This demo is a single-player FPS prototype — click the canvas to lock your pointer, left click to shoot targets.</p>
      <div className="fps-stage">
        <div ref={mountRef} className="fps-canvas" />
        <div className="hud">
          <div className="crosshair" />
          <div className="score">Score: {score}</div>
          <div style={{position:'absolute',left:12,bottom:10}}>
            <button onClick={() => {
              if (mpConnected) {
                if (mountRef.current && (mountRef.current as any).__disconnectWS) (mountRef.current as any).__disconnectWS()
              } else {
                if (mountRef.current && (mountRef.current as any).__connectWS) (mountRef.current as any).__connectWS()
              }
            }}>{mpConnected ? 'Disconnect (multiplayer)' : 'Enable multiplayer'}</button>
          </div>
          <div className="lock-instruction">{isLocked ? 'Locked — click to shoot, Esc to unlock' : 'Click the canvas to lock pointer and start moving'}</div>
        </div>
      </div>
      <p className="hint">(Tip: WASD to move after pointer is locked)</p>
    </section>
  )
}
