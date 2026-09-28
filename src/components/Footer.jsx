import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <p>
        Designed & built by <span className="gradient-text">Your Name</span>
      </p>
      <p className="footer__sub">© {new Date().getFullYear()} — All rights reserved</p>
    </footer>
  )
}
