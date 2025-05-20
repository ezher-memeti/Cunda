// src/LanguageSelector.jsx
import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSelector = () => {
    const { i18n } = useTranslation();

    const handleChange = (e) => {
        i18n.changeLanguage(e.target.value);
    };

    return (
        <select className="language-dropdown" onChange={handleChange} value={i18n.language}>
            <option value="al">🇦🇱</option>
            <option value="mk">🇲🇰</option>
            <option value="tr">🇹🇷</option>
            <option value="en">🇬🇧</option>
        </select>
    );
};

export default LanguageSelector;
