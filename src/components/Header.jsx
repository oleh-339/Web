import '../css/Header.css';
import React from 'react';

const Header = () => {
  return (
    <header className="header">
      <a href="#home" className="logo-link">
        <div className="logo-wrapper">
          <img 
            src="/images/logo.png" 
            alt="NeuroEdge Logo" 
            className="logo-img" 
            onError={(e) => { e.target.style.display = 'none'; }} 
          />
          
        </div>
      </a>

      <nav className="nav">
        <a href="#home">Головна</a>
        <a href="#catalog">Каталог</a>
        <a href="#about">Про нас</a>
      </nav>

      <div className="header-actions">
        <button className="cart-btn">🛒 Кошик (0)</button>
      </div>
    </header>
  );
};

export default Header;