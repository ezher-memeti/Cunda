import React from 'react';
import { categories } from './data.js';

const CategorySlider = () => {

    return (
        <div className="category-slider">
            {categories.map(({ id, backgroundImage, titleKey }) => (
                <div
                    key={id}
                    className="slider-card"
                    style={{ backgroundImage: `url(${backgroundImage})` }}
                >
                    <h3>{titleKey}</h3>
                </div>
            ))}
        </div>
    );
};

export default CategorySlider;
