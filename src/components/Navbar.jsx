import { useState, useEffect } from 'react'
import { useLang } from '../LanguageContext'

function Navbar() {
  const { t, lang, toggleLang } = useLang()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navLinks = [
    { href: '#home', label: t.nav.home },
    { href: '#about', label: t.nav.about },
    { href: '#steps', label: t.nav.steps },
    { href: '#details', label: t.nav.details },
    { href: '#reviews', label: t.nav.reviews },
    { href: '#cases', label: t.nav.cases },
    { href: '#contact', label: t.nav.contact },
  ]

  const handleClick = () => setMobileOpen(false)

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__inner">
        <a href="#home" className="navbar__logo">
          <img src="/images/logo.jpg" alt="Dai BA Service" />
          <span>Dai BA Service</span>
        </a>

        <button
          className={`navbar__hamburger ${mobileOpen ? 'open' : ''}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span></span><span></span><span></span>
        </button>

        <div className={`navbar__links ${mobileOpen ? 'navbar__links--open' : ''}`}>
          {navLinks.map(link => (
            <a key={link.href} href={link.href} onClick={handleClick}>{link.label}</a>
          ))}
          <button className="lang-toggle" onClick={toggleLang}>
            {lang === 'zh' ? 'EN' : '中文'}
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
