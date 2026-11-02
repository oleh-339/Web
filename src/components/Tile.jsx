import React from 'react';
import PrimaryButton from './PrimaryButton';
import '../css/TileSection.css';

const Tile = ({ product }) => {
  return (
    <div className="product-card">
      <div className="product-img-wrapper">
        <img src={product.image} alt={product.title} className="product-img" />
        <span className="product-badge">{product.category}</span>
      </div>
      <div className="product-info">
        <h3 className="product-title">{product.title}</h3>
        <p className="product-desc">{product.description}</p>
        <div className="product-footer">
          <div className="price-tag">
            <small>Ціна</small>
            <span>{product.price} UAH</span>
          </div>
          <PrimaryButton text="Детальніше" />
        </div>
      </div>
    </div>
  );
};

export default Tile;