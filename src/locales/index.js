import { createI18n } from 'vue-i18n'
import en from './en.json'
import fr from './fr.json'

/* istanbul ignore next */
export const i18n = createI18n({
  locale: localStorage.getItem('lang'),
  messages: {
    en,
    fr
  }
})
