import { createI18n } from 'vue-i18n'
import en from './en.js'
import fr from './fr.js'

export const i18n = createI18n({
    locale: 'fr',
    messages: {
      en,
      fr
    }
})