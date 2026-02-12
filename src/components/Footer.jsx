import { useLang } from '../LanguageContext'

function Footer() {
  const { t } = useLang()

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p>{t.footer.copyright}</p>
        <a href="#home" className="footer__top" aria-label="Back to top">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 15l-6-6-6 6"/></svg>
        </a>
      </div>
    </footer>
  )
}

export default Footer
