import React from 'react';
import { Link } from 'react-router-dom';
import { categories } from './data.js';
// import { useTranslation } from 'react-i18next';

const Home = () => {
    // const { t } = useTranslation();

    return (
        <div className="home-container">
            <h1>{'Cunda Cafe'}</h1>

            <div className="categories-grid">
                {categories.map(({ id, backgroundImage, titleKey }) => (
                    <Link
                        to={`/${id}`}
                        key={id}
                        className="category-card"
                        style={{ backgroundImage: `url(${backgroundImage})` }}
                    >
                        {/* <h2>{t(titleKey)}</h2> */}
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Home;
