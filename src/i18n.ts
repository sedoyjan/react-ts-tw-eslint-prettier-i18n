import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

import en from '../locales/en/translation.json';
import et from '../locales/et/translation.json';
import ru from '../locales/ru/translation.json';

const resources = {
  en: { common: { ...en } },
  et: { common: { ...et } },
  ru: { common: { ...ru } },
};

export const availableLanguages = Object.keys(resources);

i18n.use(initReactI18next).use(LanguageDetector).init({
  resources,
  defaultNS: 'common',
  fallbackLng: 'en',
});

export { i18n };
