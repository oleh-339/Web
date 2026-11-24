import { Link, useNavigate } from 'react-router-dom';
import '../css/Header.css'; 

const Header = () => {
  const navigate = useNavigate();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToAbout = (e) => {
    e.preventDefault();
    navigate('/');
    setTimeout(() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' }), 50);
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
        <Link to="/#about" onClick={scrollToAbout}>Про нас</Link>
      </nav>

      <div className="header-actions">
        <button className="cart-btn">🛒 Кошик (0)</button>
      </div>
    </header>
  );
};

export default Header;