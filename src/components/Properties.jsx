import { useLang } from '../LanguageContext'
import { motion } from 'framer-motion'

function Properties() {
  const { t } = useLang()

  return (
    <section id="cases" className="section properties">
      <div className="container">
        <h2 className="section__title">{t.properties.sectionTitle}</h2>
        <p className="section__subtitle">{t.properties.sectionSubtitle}</p>

        <div className="properties__grid">
          {t.properties.items.map((item, i) => (
            <motion.div
              className="properties__card"
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="properties__card-img">
                <img src={`/images/${item.img}`} alt={item.location} loading="lazy" />
              </div>
              <div className="properties__card-body">
                <h3>{item.location}</h3>
                <p>{item.desc}</p>
                <span className="properties__rent">{item.rent}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Properties
