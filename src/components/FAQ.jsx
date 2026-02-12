import { useState } from 'react'
import { useLang } from '../LanguageContext'
import { motion, AnimatePresence } from 'framer-motion'

function FAQItem({ question, answer }) {
  const [open, setOpen] = useState(false)

  return (
    <div className={`faq__item ${open ? 'faq__item--open' : ''}`} onClick={() => setOpen(!open)}>
      <div className="faq__question">
        <span>{question}</span>
        <svg
          className={`faq__chevron ${open ? 'faq__chevron--open' : ''}`}
          width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            className="faq__answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <p>{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

function FAQ() {
  const { t } = useLang()

  return (
    <section id="faq" className="section faq">
      <div className="container">
        <h2 className="section__title">{t.faq.sectionTitle}</h2>
        <p className="section__subtitle">{t.faq.sectionSubtitle}</p>
        <div className="faq__list">
          {t.faq.items.map((item, i) => (
            <FAQItem key={i} question={item.q} answer={item.a} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ
