import { useLang } from '../LanguageContext'
import { motion } from 'framer-motion'

function ServiceAreas() {
  const { t } = useLang()

  return (
    <section className="section service-areas">
      <div className="container">
        <h2 className="section__title">{t.serviceAreas.sectionTitle}</h2>
        <p className="section__subtitle">{t.serviceAreas.sectionSubtitle}</p>
        <div className="service-areas__grid">
          {t.serviceAreas.items.map((area, i) => (
            <motion.div
              className="service-areas__card"
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <span className="service-areas__icon">{area.icon}</span>
              <h3>{area.name}</h3>
              <p>{area.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServiceAreas
