import { createContext, useContext, useState } from 'react'
import translations from './i18n'

const LanguageContext = createContext()

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState('zh')

  const t = translations[lang]

  const toggleLang = () => {
    setLang(prev => (prev === 'zh' ? 'en' : 'zh'))
  }

  return (
    <LanguageContext.Provider value={{ lang, t, toggleLang }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLang() {
  return useContext(LanguageContext)
}
