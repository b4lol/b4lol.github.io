import { useEffect, useState } from 'react'
import './Hero.css'

const roles = ['Software Developer', 'Open Source Contributor', 'Rust Enthusiast', 'Full Stack Developer']

function useTypewriter(words, typingSpeed = 80, deletingSpeed = 40, pause = 1600) {
  const [text, setText] = useState('')
  const [wordIndex, setWordIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const word = words[wordIndex % words.length]
    let timeout

    if (!deleting && text === word) {
      timeout = setTimeout(() => setDeleting(true), pause)
    } else if (deleting && text === '') {
      setDeleting(false)
      setWordIndex((i) => (i + 1) % words.length)
    } else {
      timeout = setTimeout(
        () => setText(word.slice(0, text.length + (deleting ? -1 : 1))),
        deleting ? deletingSpeed : typingSpeed
      )
    }

    return () => clearTimeout(timeout)
  }, [text, deleting, wordIndex, words, typingSpeed, deletingSpeed, pause])

  return text
}

export default function Hero() {
  const typed = useTypewriter(roles)

  return (
    <section id="top" className="hero">
      <p className="hero__greeting">Hi, my name is</p>
      <h1 className="hero__name">
        <span className="gradient-text">Hüseyin "b4lol"</span>
      </h1>
      <h2 className="hero__role">
        I'm a <span className="hero__typed">{typed}</span>
        <span className="hero__caret" />
      </h2>
      <p className="hero__description">
        Full-stack developer with a focus on Rust — building privacy-first communication tools,
        Linux package managers and system software that respects the user.
      </p>
      <div className="hero__actions">
        <a href="#projects" className="btn btn-primary">
          View my work
        </a>
        <a href="#contact" className="btn btn-ghost">
          Get in touch
        </a>
      </div>
      <a href="#about" className="hero__scroll-hint" aria-label="Scroll down">
        <span />
      </a>
    </section>
  )
}
