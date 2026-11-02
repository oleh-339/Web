import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Header.css'; 

const Header = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="header">
      <Link to="/" onClick={scrollToTop} className="logo-link">
        <div className="logo-wrapper">
          <img 
            src="/images/logo.png" 
            alt="NeuroEdge Logo" 
            className="logo-img" 
            onError={(e) => { e.target.style.display = 'none'; }} 
          />
        </div>
      </Link>

      <nav className="nav">
        <Link to="/" onClick={scrollToTop}>Головна</Link>
        <Link to="/catalog" onClick={scrollToTop}>Каталог</Link>
        <a href="/#about">Про нас</a> {/* Залишаємо якір, якщо About на головній */}
      </nav>

      <div className="header-actions">
        <button className="cart-btn">🛒 Кошик (0)</button>
      </div>
    </header>
  );
};

export default Header;