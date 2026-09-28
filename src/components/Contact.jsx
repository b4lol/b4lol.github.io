import './Contact.css'

const socials = [
  { label: 'GitHub', href: 'https://github.com/yourusername' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/yourusername' },
  { label: 'Twitter / X', href: 'https://x.com/yourusername' },
]

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="reveal">
        <p className="section-label">// contact</p>
        <h2 className="section-title">
          Let's build something <span className="gradient-text">together</span>
        </h2>
        <p className="contact__text">
          My inbox is always open — whether you have a question, a project idea, or just want to
          say hi. I'll do my best to get back to you quickly.
        </p>
        <a href="mailto:hello@example.com" className="btn btn-primary contact__cta">
          Say hello
        </a>
        <ul className="contact__socials">
          {socials.map((s) => (
            <li key={s.label}>
              <a href={s.href} target="_blank" rel="noreferrer">
                {s.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
