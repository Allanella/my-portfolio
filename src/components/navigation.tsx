'use client'

import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { Moon, Sun } from 'lucide-react'

export function Navigation() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  return (
    <nav className="fixed top-0 z-50 w-full backdrop-blur-xl bg-background/70 border-b border-white/10 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 py-5">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-hero bg-200% bg-clip-text text-transparent animate-gradient-move">
            Baliddawa Allan
          </div>
          
          <div className="flex items-center gap-2">
            <a href="#about" className="nav-link">About</a>
            <a href="#skills" className="nav-link">Skills</a>
            <a href="#projects" className="nav-link">Projects</a>
            <a href="#education" className="nav-link">Education</a>
            <a href="#contact" className="nav-link">Contact</a>
            
            <button
              onClick={toggleTheme}
              className="theme-toggle flex items-center gap-2"
            >
              {mounted && (
                <>
                  {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
                  <span>{theme === 'dark' ? 'Light' : 'Dark'}</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}
