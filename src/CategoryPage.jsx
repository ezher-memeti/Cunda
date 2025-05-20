import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { categories, menuItems, itemTypes } from './data.js';
import { useTranslation } from 'react-i18next';


const CategoryPage = () => {
    const { categoryId } = useParams();
    const navigate = useNavigate();
    const { t } = useTranslation();

    const category = categories.find(cat => cat.id === categoryId);
    const items = menuItems.filter(item => item.categoryId === categoryId);


    if (!category) {
        return <p>Category not found</p>;
    }

    return (
        <div className="category-page">
            {/* Category slider */}
            <div className="category-slider">
                {categories.map((cat) => (
                    <button
                        key={cat.id}
                        onClick={() => navigate(`/${cat.id}`)}
                        className={`category-tab ${cat.id === categoryId ? 'active' : ''}`}
                    >
                        {cat.titleKey}
                    </button>
                ))}
            </div>

            <h1>{t(category.titleKey)}</h1>



            <div className="menu-cards">
                {items.map(({ id, name, price }) => {
                    const types = itemTypes.filter(t => t.typeId === name);
                    return (
                        <div key={id} className="menu-card">
                            <span className="item-name">{t(name)}</span>

                            {types.length > 0 && (
                                <div className="item-types">
                                    {types.map((type, index) => (
                                        <span key={index} className="item-type">{t(type.name)}</span>
                                    ))}
                                </div>
                            )}

                            <span className="item-price">{price.toFixed(2)} den</span>
                        </div>
                    );
                })}
            </div>


        </div>
    );
};

export default CategoryPage;
