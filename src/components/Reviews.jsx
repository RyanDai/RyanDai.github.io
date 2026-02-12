import { useLang } from '../LanguageContext'
import { motion } from 'framer-motion'

const reviewImages = [
  'r1-2.jpg', 'r1-1.jpg', 'r1.jpg', 'r2.jpg', 'r3.jpg',
  'r4.jpg', 'r5.jpg', 'r6.jpg', 'r7.jpg', 'r-8.jpg',
]

function Reviews() {
  const { t } = useLang()

  return (
    <section id="reviews" className="section reviews">
      <div className="container">
        <h2 className="section__title">{t.reviews.sectionTitle}</h2>
        <p className="section__subtitle">{t.reviews.sectionSubtitle}</p>

        <motion.div
          className="reviews__grid"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {reviewImages.map((img, i) => (
            <motion.div
              className="reviews__item"
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
            >
              <img src={`/images/${img}`} alt={`Review ${i + 1}`} loading="lazy" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Reviews
