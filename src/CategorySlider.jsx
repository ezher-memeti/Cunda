import React from 'react';
import { categories } from './data.js';
import { useTranslation } from 'react-i18next';

const CategorySlider = () => {

    const { t } = useTranslation();

    return (
        <div className="category-slider">
            {categories.map(({ id, backgroundImage, titleKey }) => (
                <div
                    key={id}
                    className="slider-card"
                    style={{ backgroundImage: `url(${backgroundImage})` }}
                >
                    <h3>{t(titleKey)}</h3>
                </div>
            ))}
        </div>
    );
};

export default CategorySlider;
