import { useState, useEffect, useRef } from 'react'
import { useLang } from '../LanguageContext'
import { motion } from 'framer-motion'

const reviews = [
  {
    name: 'Hang',
    rating: 5,
    text: 'I highly recommend Ryan for anyone looking to buy a home. He is professional, proactive, and incredibly easy to work with. He saved us so much time and effort, and we ended up with a house we need. 5-star service all the way!',
  },
  {
    name: 'Jiayu',
    rating: 5,
    text: 'Ryan是非常专业的买家中介，非常推荐他提供的买家代理服务。他专业度极高，对澳洲房地产市场有着深入的研究和精准的判断。无论是区域分析、房价趋势，还是房产潜力评估，他都能提供详尽的数据和独到的见解。在整个购房过程中，他始终站在买家的立场，帮我从各个角度争取到最大的利益与最合理的价格，让我在竞争激烈的市场中依然能安心决策、信心十足。非常感谢他的专业与用心，让我成功买到了满意的房子。',
  },
  {
    name: 'Min',
    rating: 5,
    text: '必须给 Ryan 的服务点赞！他不仅专业，而且真的非常细心。很多我没想到的细节问题，他都提前帮我考虑到了。沟通响应非常及时，从不拖泥带水，让我们在激烈的竞争中也能保持冷静和信心。成功买到满意的投资房，Ryan 功不可没。推荐给追求高效率和好服务的朋友！',
  },
]

const GOOGLE_REVIEW_URL = 'https://www.google.com/search?q=DAI+BA+Service&rlz=1C1SQJL_enAU775AU775#lrd=0x6b91557b4dfe498b:0xedbd0a1a8fad65c9,1'

function Stars({ count }) {
  return (
    <div className="google-reviews__stars">
      {Array.from({ length: count }, (_, i) => (
        <svg key={i} width="18" height="18" viewBox="0 0 24 24" fill="#FBBC04">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  )
}

function GoogleReviews() {
  const { t } = useLang()
  const scrollRef = useRef(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const allCards = [...reviews, ...reviews, ...reviews]

  const checkScroll = () => {
    const el = scrollRef.current
    if (!el) return
    setCanScrollLeft(el.scrollLeft > 0)
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 2)
  }

  useEffect(() => {
    const el = scrollRef.current
    if (!el) return
    el.addEventListener('scroll', checkScroll)
    checkScroll()
    return () => el.removeEventListener('scroll', checkScroll)
  }, [])

  useEffect(() => {
    const el = scrollRef.current
    if (!el) return
    const cardWidth = 380 + 20
    el.scrollLeft = cardWidth * reviews.length
  }, [])

  const scroll = (dir) => {
    const el = scrollRef.current
    if (!el) return
    const cardWidth = 380 + 20
    el.scrollBy({ left: dir * cardWidth, behavior: 'smooth' })
  }

  return (
    <section id="google-reviews" className="section google-reviews">
      <div className="container">
        <div className="google-reviews__header">
          <div className="google-reviews__google-logo">
            <svg viewBox="0 0 24 24" width="28" height="28">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            <span>Google Reviews</span>
          </div>
          <div className="google-reviews__rating-summary">
            <span className="google-reviews__score">5.0</span>
            <Stars count={5} />
            <span className="google-reviews__count">(10 {t.googleReviews.reviewsLabel})</span>
          </div>
        </div>
        <h2 className="section__title">{t.googleReviews.sectionTitle}</h2>
        <p className="section__subtitle">{t.googleReviews.sectionSubtitle}</p>

        <div className="google-reviews__carousel-wrap">
          {canScrollLeft && (
            <button className="google-reviews__arrow google-reviews__arrow--left" onClick={() => scroll(-1)} aria-label="Scroll left">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 18l-6-6 6-6"/></svg>
            </button>
          )}
          <div className="google-reviews__carousel" ref={scrollRef}>
            {allCards.map((r, i) => (
              <motion.div
                key={i}
                className="google-reviews__card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: (i % reviews.length) * 0.1 }}
              >
                <div className="google-reviews__card-top">
                  <div className="google-reviews__avatar">{r.name[0]}</div>
                  <div>
                    <div className="google-reviews__name">{r.name}</div>
                    <Stars count={r.rating} />
                  </div>
                  <svg className="google-reviews__g-icon" viewBox="0 0 24 24" width="20" height="20">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                  </svg>
                </div>
                <p className="google-reviews__text">{r.text}</p>
              </motion.div>
            ))}
          </div>
          {canScrollRight && (
            <button className="google-reviews__arrow google-reviews__arrow--right" onClick={() => scroll(1)} aria-label="Scroll right">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6"/></svg>
            </button>
          )}
        </div>

        <div className="google-reviews__cta">
          <a href={GOOGLE_REVIEW_URL} target="_blank" rel="noopener noreferrer" className="btn btn--google">
            <svg viewBox="0 0 24 24" width="20" height="20">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            {t.googleReviews.seeMore}
          </a>
        </div>
      </div>
    </section>
  )
}

export default GoogleReviews
