import React, { useState } from 'react'
import CookieClicker from './pages/CookieClicker'
import FPSDemo from './pages/FPSDemo'

export default function App() {
  const [page, setPage] = useState<'home'|'cookie'|'fps'>('home')

  return (
    <div className="app">
      <header className="topbar">
        <h1>Hugh Games</h1>
        <nav>
          <button onClick={() => setPage('home')}>Home</button>
          <button onClick={() => setPage('cookie')}>Cookie Clicker</button>
          <button onClick={() => setPage('fps')}>FPS Demo</button>
        </nav>
      </header>

      <main className="content">
        {page === 'home' && (
          <section>
            <h2>Two prototypes — Cookie Clicker and FPS</h2>
            <p>Pick a prototype from the navigation above to try it.</p>
          </section>
        )}

        {page === 'cookie' && <CookieClicker />}
        {page === 'fps' && <FPSDemo />}
      </main>

      <footer className="footer">
        <small>Built with React + Vite · Local prototype</small>
      </footer>
    </div>
  )
}
