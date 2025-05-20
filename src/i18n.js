// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import translationAL from './locales/al/translation.json';
import translationMK from './locales/mk/translation.json';
import translationTR from './locales/tr/translation.json';

const resources = {
    al: { translation: translationAL },
    mk: { translation: translationMK },
    tr: { translation: translationTR },
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: 'tr',
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;
