import React, { useState } from 'react';
import Tile from './Tile';
import { products } from '../data/products';

const TileSection = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', ...new Set(products.map(p => p.category))];

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          product.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <section className="tile-section" id="catalog">
      <h2 className="section-title">Каталог пристроїв</h2>

      {/* Панель пошуку та фільтрів */}
      <div className="catalog-filters">
        <input 
          type="text" 
          placeholder="Пошук пристроїв..." 
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="catalog-search-input"
        />

        <select 
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="catalog-select"
        >
          {categories.map((cat, index) => (
            <option key={index} value={cat} style={{ background: 'var(--panel)' }}>
              {cat === 'All' ? 'Всі категорії' : cat}
            </option>
          ))}
        </select>
      </div>

      {filteredProducts.length > 0 ? (
        <div className="tile-grid">
          {filteredProducts.map((item) => (
            <Tile key={item.id} product={item} />
          ))}
        </div>
      ) : (
        <p style={{ textAlign: 'center', color: 'var(--muted)', fontSize: '18px', marginTop: '40px' }}>
          Нічого не знайдено за вашим запитом.
        </p>
      )}
    </section>
  );
};

export default TileSection;