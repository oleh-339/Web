import React, { useState } from 'react';
import Hero from '../components/Hero';
import About from '../components/About';

const Home = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <>
      <Hero />
      <About />
      
      <section style={{ padding: '50px 20px', textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
        {!showMore ? (
          <button 
            className="buy-btn" 
            onClick={() => setShowMore(true)}
            style={{ padding: '12px 28px', fontSize: '16px', cursor: 'pointer' }}
          >
            Важлива інформація
          </button>
        ) : (
          <div style={{ marginTop: '20px' }}>
            <h3 style={{ fontFamily: 'var(--font-sub)', color: 'var(--green)', marginBottom: '12px', fontSize: '24px' }}>
              🎁 Секретний бонус!
            </h3>
            <p style={{ color: 'var(--muted)', lineHeight: '1.7', fontSize: '15px', marginBottom: '20px' }}>
              Ви знайшли секретну кібер-знижку від розробників. Використайте промокод <strong>IOT2025</strong> у кошику, щоб отримати знижку -20% на весь комплект NeuroEdge!
            </p>
            <button 
              className="buy-btn" 
              onClick={() => setShowMore(false)}
              style={{ background: 'transparent', border: '1px solid var(--border)', color: 'var(--muted)', cursor: 'pointer' }}
            >
              Сховати
            </button>
          </div>
        )}
      </section>
    </>
  );
};

export default Home;