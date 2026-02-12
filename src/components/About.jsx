import { useLang } from '../LanguageContext'
import { motion } from 'framer-motion'

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.15 },
  }),
}

const icons = ['📊', '🤝', '🏆', '💡']

function About() {
  const { t } = useLang()

  return (
    <section id="about" className="section about">
      <div className="container">
        <h2 className="section__title">{t.about.sectionTitle}</h2>

        <div className="about__grid">
          <div className="about__image-col">
            <img src="/images/dai.jpg" alt="Dai BA Service" className="about__portrait" />
          </div>
          <div className="about__points">
            {t.about.points.map((point, i) => (
              <motion.div
                className="about__card"
                key={i}
                custom={i}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-50px' }}
              >
                <span className="about__card-icon">{icons[i]}</span>
                <div>
                  <h3>{point.title}</h3>
                  {point.subtitle && <h4>{point.subtitle}</h4>}
                  <p>{point.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="about__story">
          <div className="about__story-img-col">
            <img src="/images/house.jpg" alt="Property" className="about__story-img" />
          </div>
          <motion.div
            className="about__story-text"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2>{t.about.storyTitle}</h2>
            {t.about.story.map((line, i) => (
              <p key={i}>{line}</p>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
