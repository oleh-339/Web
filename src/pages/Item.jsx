import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from '../data/products';

const Item = () => {
  const { id } = useParams(); // Отримуємо ID з URL
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return <h2 style={{ textAlign: 'center', padding: '100px', color: 'var(--text)' }}>Товар не знайдено</h2>;
  }

  return (
    <div style={{ padding: '80px 40px', maxWidth: '1200px', margin: '0 auto', color: 'var(--text)' }}>
      <Link to="/catalog" style={{ color: 'var(--green)', textDecoration: 'none', marginBottom: '20px', display: 'inline-block' }}>
        ← Повернутися до каталогу
      </Link>
      
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px', marginTop: '20px' }}>
        <div style={{ background: 'var(--panel)', border: `1px solid var(--border)`, borderRadius: '14px', overflow: 'hidden' }}>
          <img src={product.image} alt={product.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
        
        <div>
          <span style={{ background: 'rgba(168, 85, 247, 0.15)', color: 'var(--purple)', padding: '6px 14px', borderRadius: '20px', fontSize: '12px' }}>
            {product.category}
          </span>
          <h1 style={{ fontFamily: 'var(--font-cyber)', fontSize: '32px', margin: '15px 0' }}>{product.title}</h1>
          <p style={{ color: 'var(--muted)', fontSize: '16px', lineHeight: '1.6', marginBottom: '30px' }}>
            {product.description}
          </p>
          <div style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '20px' }}>
            {product.price} UAH
          </div>
          <button className="buy-btn" style={{ padding: '12px 30px', fontSize: '18px' }}>Додати в кошик</button>
        </div>
      </div>
    </div>
  );
};

export default Item;