import React, { useEffect, useState, useRef } from 'react'

type GameState = {
  cookies: number
  totalCookies: number
  cps: number // cookies per second
  cursors: number
  grandmas: number
  mines: number
  factories: number
  prestigePoints: number
  prestigeMultiplier: number
  achievements: Record<string, boolean>
}

const STORAGE_KEY = 'hugh_games_cookie_v1'

const defaultState: GameState = {
  cookies: 0,
  totalCookies: 0,
  cps: 0,
  cursors: 0,
  grandmas: 0,
  mines: 0,
  factories: 0,
  prestigePoints: 0,
  prestigeMultiplier: 1,
  achievements: {}
}

function save(state: GameState) {
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)) } catch {}
}

function load(): GameState {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return defaultState
    return { ...defaultState, ...(JSON.parse(raw) as Partial<GameState>) }
  } catch {
    return defaultState
  }
}

export default function CookieClicker() {
  const [state, setState] = useState<GameState>(() => load())
  const [intervalMs] = useState(1000)

  // Calculate cps from owned items
  useEffect(() => {
    const base = state.cursors * 0.2 + state.grandmas * 1 + state.mines * 8 + state.factories * 50
    const cps = base * state.prestigeMultiplier
    setState(s => ({ ...s, cps }))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.cursors, state.grandmas, state.mines, state.factories, state.prestigeMultiplier])

  // Auto-add cookies each second
  useEffect(() => {
    const id = setInterval(() => {
      setState(s => {
        const next = { ...s, cookies: s.cookies + s.cps, totalCookies: s.totalCookies + s.cps }
        save(next)
        return next
      })
    }, intervalMs)
    return () => clearInterval(id)
  }, [intervalMs])

  useEffect(() => save(state), [state])

  // Small click sound using WebAudio
  function playClickSound() {
    try {
      const ac = new (window.AudioContext || (window as any).webkitAudioContext)()
      const o = ac.createOscillator()
      const g = ac.createGain()
      o.type = 'sine'
      o.frequency.value = 600
      g.gain.value = 0.08
      o.connect(g)
      g.connect(ac.destination)
      o.start()
      setTimeout(() => {
        o.stop()
        ac.close()
      }, 80)
    } catch {}
  }

  function playPurchaseSound() {
    try {
      const ac = new (window.AudioContext || (window as any).webkitAudioContext)()
      const o = ac.createOscillator()
      const g = ac.createGain()
      o.type = 'triangle'
      o.frequency.value = 420
      g.gain.value = 0.12
      o.connect(g)
      g.connect(ac.destination)
      o.start()
      g.gain.exponentialRampToValueAtTime(0.0001, ac.currentTime + 0.18)
      setTimeout(() => {
        o.stop()
        ac.close()
      }, 180)
    } catch {}
  }

  function playAchievementSound() {
    try {
      const ac = new (window.AudioContext || (window as any).webkitAudioContext)()
      const o = ac.createOscillator()
      const g = ac.createGain()
      o.type = 'sine'
      o.frequency.value = 880
      g.gain.value = 0.14
      o.connect(g)
      g.connect(ac.destination)
      o.start()
      setTimeout(() => {
        o.frequency.value = 1180
        g.gain.exponentialRampToValueAtTime(0.0001, ac.currentTime + 0.22)
      }, 120)
      setTimeout(() => {
        o.stop()
        ac.close()
      }, 320)
    } catch {}
  }

  function onClickCookie() {
    playClickSound()
    // small visual feedback
    try {
      const el = document.querySelector('.big-cookie') as HTMLElement | null
      if (el) {
        el.classList.add('pulse')
        setTimeout(() => el.classList.remove('pulse'), 120)
      }
    } catch {}
    setState(s => {
      const next = { ...s, cookies: s.cookies + 1, totalCookies: s.totalCookies + 1 }
      save(next)
      return next
    })
  }

  function addBoughtAnimation(item: string) {
    try {
      const el = document.querySelector(`[data-item="${item}"]`)
      if (!el) return
      el.classList.add('bought')
      setTimeout(() => el.classList.remove('bought'), 260)
    } catch {}
  }

  function buyCursor() {
    const cost = Math.floor(15 * Math.pow(1.15, state.cursors))
    if (state.cookies < cost) return
    setState(s => {
      const cookies = s.cookies - cost
      const cursors = s.cursors + 1
      const cps = cursors * 0.2 + s.grandmas * 1
      const next = { ...s, cookies, cursors, cps }
      save(next)
      playPurchaseSound()
      addBoughtAnimation('cursor')
      return next
    })
  }

  function buyGrandma() {
    const cost = Math.floor(100 * Math.pow(1.15, state.grandmas))
    if (state.cookies < cost) return
    setState(s => {
      const cookies = s.cookies - cost
      const grandmas = s.grandmas + 1
      const cps = s.cursors * 0.2 + grandmas * 1
      const next = { ...s, cookies, grandmas, cps }
      save(next)
      playPurchaseSound()
      addBoughtAnimation('grandma')
      return next
    })
  }

  function buyMine() {
    const cost = Math.floor(3000 * Math.pow(1.2, state.mines))
    if (state.cookies < cost) return
    setState(s => {
      const cookies = s.cookies - cost
      const mines = s.mines + 1
      const cps = s.cursors * 0.2 + s.grandmas * 1 + mines * 8 + s.factories * 50
      const next = { ...s, cookies, mines, cps }
      save(next)
      playPurchaseSound()
      addBoughtAnimation('mine')
      return next
    })
  }

  function buyFactory() {
    const cost = Math.floor(25000 * Math.pow(1.2, state.factories))
    if (state.cookies < cost) return
    setState(s => {
      const cookies = s.cookies - cost
      const factories = s.factories + 1
      const cps = s.cursors * 0.2 + s.grandmas * 1 + s.mines * 8 + factories * 50
      const next = { ...s, cookies, factories, cps }
      save(next)
      playPurchaseSound()
      addBoughtAnimation('factory')
      return next
    })
  }

  function resetGame() {
    setState(defaultState)
    try { localStorage.removeItem(STORAGE_KEY) } catch {}
  }

  // Prestige / Ascend: convert totalCookies into prestigePoints
  function canPrestige() {
    return state.totalCookies >= 100000
  }

  function prestige() {
    if (!canPrestige()) return
    // points proportional to totalCookies / 100k
    const points = Math.floor(state.totalCookies / 100000)
    if (points <= 0) return
    setState(s => {
      const prestigePoints = s.prestigePoints + points
      const prestigeMultiplier = 1 + prestigePoints * 0.05
      const next: GameState = {
        ...defaultState,
        prestigePoints,
        prestigeMultiplier,
        achievements: s.achievements
      }
      save(next)
      return next
    })
  }

  // Achievements unlock based on totalCookies
  const prevAchievementsRef = useRef<Record<string, boolean>>({})

  useEffect(() => {
    const unlocks: Record<string, boolean> = {}
    if (state.totalCookies >= 100) unlocks['100 cookies'] = true
    if (state.totalCookies >= 1000) unlocks['1k cookies'] = true
    if (state.totalCookies >= 10000) unlocks['10k cookies'] = true
    if (state.totalCookies >= 100000) unlocks['100k cookies'] = true
    // merge with existing achievements
    const merged = { ...state.achievements, ...unlocks }
    // figure out newly unlocked keys
    const prev = prevAchievementsRef.current || {}
    const newly = Object.keys(merged).filter(k => merged[k] && !prev[k])
    if (newly.length > 0) playAchievementSound()
    prevAchievementsRef.current = merged
    setState(s => ({ ...s, achievements: merged }))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.totalCookies])

  return (
    <section className="cookie">
      <h2>Cookie Clicker (MVP)</h2>
      <div className="cookie-top">
        <div className="big-cookie" onClick={onClickCookie} role="button" aria-label="Click cookie">🍪</div>
        <div className="stats">
          <div><strong>Cookies:</strong> {Math.floor(state.cookies)}</div>
          <div><strong>Total:</strong> {Math.floor(state.totalCookies)}</div>
          <div><strong>CPS:</strong> {state.cps.toFixed(2)}</div>
          <div><strong>Prestige pts:</strong> {state.prestigePoints} · <small>mult ×{state.prestigeMultiplier.toFixed(2)}</small></div>
        </div>
      </div>

      <div className="shop">
        <h3>Shop</h3>
        <div className="shop-row">
          <div>
            <strong>Cursor</strong>
            <div>Owned: {state.cursors}</div>
            <div>Cost: {Math.floor(15 * Math.pow(1.15, state.cursors))}</div>
            <div>Gives +0.2 cookies/sec</div>
            <button onClick={buyCursor}>Buy</button>
          </div>

          <div>
            <strong>Grandma</strong>
            <div>Owned: {state.grandmas}</div>
            <div>Cost: {Math.floor(100 * Math.pow(1.15, state.grandmas))}</div>
            <div>Gives +1 cookies/sec</div>
            <button onClick={buyGrandma}>Buy</button>
          </div>
          <div>
            <strong>Mine</strong>
            <div>Owned: {state.mines}</div>
            <div>Cost: {Math.floor(3000 * Math.pow(1.2, state.mines))}</div>
            <div>Gives +8 cookies/sec</div>
            <button onClick={buyMine}>Buy</button>
          </div>

          <div>
            <strong>Factory</strong>
            <div>Owned: {state.factories}</div>
            <div>Cost: {Math.floor(25000 * Math.pow(1.2, state.factories))}</div>
            <div>Gives +50 cookies/sec</div>
            <button onClick={buyFactory}>Buy</button>
          </div>
        </div>
      </div>

      <div className="cookie-footer">
        <div style={{display:'flex',gap:12,alignItems:'center'}}>
          <button onClick={resetGame}>Reset</button>
          <div style={{display:'flex',flexDirection:'column'}}>
            <div><strong>Prestige</strong> — Convert total cookies into prestige points (100k = 1pt)</div>
            <button onClick={prestige} disabled={!canPrestige()}>{canPrestige() ? 'Prestige (Ascend)' : 'Prestige (locked)'}</button>
          </div>
        </div>
        <small>Progress is saved in your browser's localStorage.</small>
      </div>

      <div style={{marginTop:16}}>
        <h3>Achievements</h3>
        <div style={{display:'flex',gap:8,flexWrap:'wrap'}}>
          {Object.entries({
            '100 cookies':'100 cookies',
            '1k cookies':'1k cookies',
            '10k cookies':'10k cookies',
            '100k cookies':'100k cookies'
          }).map(([key,label]) => (
            <div key={key} style={{padding:'6px 10px',borderRadius:8,background: state.achievements[key] ? 'rgba(97,218,251,0.12)' : 'rgba(255,255,255,0.02)'}}>
              {label} {state.achievements[key] ? '✅' : '—'}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
