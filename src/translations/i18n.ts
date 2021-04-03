import i18n, { i18n as i18nInterface } from 'i18next'
import { initReactI18next } from 'react-i18next'
import resources from './resources'

const configureTranslations = (locale: string): i18nInterface => {
  const i18nInstance: i18nInterface = i18n.createInstance()

  i18nInstance
    .use(initReactI18next)
    .init({
      resources,
      lng: locale,
      keySeparator: false,
      interpolation: {
        escapeValue: false
      }
    })

  return i18nInstance
}

export default configureTranslations