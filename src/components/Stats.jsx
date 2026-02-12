import { useEffect, useState, useRef } from 'react'
import { useLang } from '../LanguageContext'
import { motion } from 'framer-motion'

function AnimatedNumber({ target, suffix = '' }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const started = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true
          const duration = 2000
          const steps = 60
          const increment = target / steps
          let current = 0
          const timer = setInterval(() => {
            current += increment
            if (current >= target) {
              setCount(target)
              clearInterval(timer)
            } else {
              setCount(Math.floor(current))
            }
          }, duration / steps)
        }
      },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [target])

  return <span ref={ref}>{count}{suffix}</span>
}

function Stats() {
  const { t } = useLang()

  return (
    <section className="stats">
      <div className="container">
        <div className="stats__grid">
          {t.stats.items.map((item, i) => (
            <motion.div
              className="stats__item"
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="stats__number">
                <AnimatedNumber target={item.value} suffix={item.suffix} />
              </div>
              <div className="stats__label">{item.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Stats
