import React from 'react'
import ReactDOM from 'react-dom/client'
import {I18nextProvider} from "react-i18next";
import i18next from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import global_fr from "./locales/fr/global.json";
import global_en from "./locales/en/global.json";
import global_de from "./locales/de/global.json";
import global_jp from "./locales/ja/global.json";
import developer_fr from "./locales/fr/developer.json";
import developer_en from "./locales/en/developer.json";
import developer_de from "./locales/de/developer.json";
import developer_jp from "./locales/ja/developer.json";
import artist_fr from "./locales/fr/artist.json";
import artist_en from "./locales/en/artist.json";
import artist_de from "./locales/de/artist.json";
import artist_jp from "./locales/ja/artist.json";
import App from './App.jsx'
import './index.css'

i18next.use(LanguageDetector).init({
  supportedLngs: ["fr", "en", "de", "jp"],
  interpolation: {escapeValue: false},
  fallbackLng: "en",
  resources: {
    fr: {
      developer: developer_fr,
      artist: artist_fr,
      global: global_fr,
    },
    en: {
      developer: developer_en,
      artist: artist_en,
      global: global_en,
    },
    de: {
      developer: developer_de,
      artist: artist_de,
      global: global_de,
    },
    jp: {
      developer: developer_jp,
      artist: artist_jp,
      global: global_jp,
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
