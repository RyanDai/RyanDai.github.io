import { useLang } from '../LanguageContext'
import { motion } from 'framer-motion'

const stepIcons = ['💬', '📋', '🔍', '🤝', '📄', '🏠']

function Steps() {
  const { t } = useLang()

  return (
    <section id="steps" className="section steps">
      <div className="container">
        <h2 className="section__title">{t.steps.sectionTitle}</h2>
        <p className="section__subtitle">{t.steps.sectionSubtitle}</p>

        <div className="steps__timeline">
          {t.steps.items.map((step, i) => (
            <motion.div
              className={`steps__item ${i % 2 === 0 ? 'steps__item--left' : 'steps__item--right'}`}
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <div className="steps__card">
                <span className="steps__icon">{stepIcons[i]}</span>
                <span className="steps__phase">{step.phase}</span>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            </motion.div>
          ))}
          <div className="steps__line"></div>
        </div>
      </div>
    </section>
  )
}

export default Steps
