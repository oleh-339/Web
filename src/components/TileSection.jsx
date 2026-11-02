import '../css/TileSection.css';
import React from 'react';
import Tile from './Tile';
import { products } from '../data/products';

const TileSection = () => {
  return (
    <section className="tile-section" id="catalog">
      <h2 className="section-title">Каталог пристроїв</h2>
      <div className="tile-grid">
        {products.map((item) => (
          <Tile key={item.id} product={item} />
        ))}
      </div>
    </section>
  );
};

export default TileSection;