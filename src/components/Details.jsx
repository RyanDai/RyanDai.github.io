import { useLang } from '../LanguageContext'
import { motion } from 'framer-motion'

const detailIcons = ['🏡', '📈', '🎯', '✅']

function Details() {
  const { t } = useLang()

  return (
    <section id="details" className="section details">
      <div className="container">
        <h2 className="section__title">{t.details.sectionTitle}</h2>
        <p className="section__subtitle">{t.details.sectionSubtitle}</p>

        <div className="details__grid">
          {t.details.items.map((item, i) => (
            <motion.div
              className="details__card"
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
            >
              <span className="details__card-icon">{detailIcons[i]}</span>
              <h3>{item.title}</h3>
              <ul>
                {item.points.map((p, j) => (
                  <li key={j}>{p}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Details
