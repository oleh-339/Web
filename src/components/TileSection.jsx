import React, { useState, useEffect } from 'react';
import Tile from './Tile';
import Loader from './Loader';
import { fetchProducts } from '../api/productsApi';

const TileSection = () => {
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [loading, setLoading] = useState(true);

const categories = ['All', 'Wearable EMG', 'Development Kit'];

  useEffect(() => {
    setLoading(true);

    fetchProducts(selectedCategory, searchQuery)
      .then((data) => setProducts(data))
      .catch((error) => console.error('Помилка завантаження товарів:', error))
      .finally(() => setLoading(false));
  }, [selectedCategory, searchQuery]);

  return (
    <section className="tile-section" id="catalog">
      <h2 className="section-title">Каталог пристроїв</h2>

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

      {loading ? (
        <Loader />
      ) : products.length > 0 ? (
        <div className="tile-grid">
          {products.map((item) => (
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