import React from 'react'
import ReactDOM from 'react-dom/client'
import {I18nextProvider} from "react-i18next";
import i18next from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import global_fr from "./locales/fr/global.json";
import global_en from "./locales/en/global.json";
import App from './App.jsx'
import './index.css'

i18next.use(LanguageDetector).init({
  supportedLngs: ["fr", "en"],
  interpolation: {escapeValue: false},
  fallbackLng: "en",
  resources: {
    fr: {
      global: global_fr,
    },
    en: {
      global: global_en,
    },
  },
});


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <App/>
    </I18nextProvider>
  </React.StrictMode>,
)
