import '../css/Hero.css';
import React from 'react';

const Hero = () => {
    return (
        <section className="hero" id="home">
            <div className="hero-container">
                {/* Ліва частина: опис, кнопки та фішки */}
                <div className="hero-text">
                    <span className="hero-badge">⚡ AI & Bio-Signal Tech</span>
                    <h1>Керуй біосигналами. <br /><span>NeuroEdge EMG.</span></h1>
                    <p>
                        Нове покоління носимих біомедичних датчиків для реєстрації м'язової активності в реальному часі. Мінімум завад, максимум корисних даних для ваших тренувань.
                    </p>

                    <div className="hero-buttons">
                        <a href="#catalog" className="hero-btn-catalog">Перейти до каталогу ›</a>
                    </div>

                    {/* Блок із 6 карточок як у Calorize */}
                    <div className="features-grid">
                        <div className="feature-card">
                            <span className="feature-icon">⚡</span>
                            <span>EMG в реальному часі</span>
                        </div>
                        <div className="feature-card">
                            <span className="feature-icon">🧠</span>
                            <span>Smart-фільтрація шумів</span>
                        </div>
                        <div className="feature-card">
                            <span className="feature-icon">📡</span>
                            <span>BLE & Wi-Fi модуль</span>
                        </div>
                        <div className="feature-card">
                            <span className="feature-icon">🔋</span>
                            <span>Акумулятор LiPo 3.7V</span>
                        </div>
                        <div className="feature-card">
                            <span className="feature-icon">💧</span>
                            <span>Кнопкові конектори (Snap)</span>
                        </div>
                        <div className="feature-card">
                            <span className="feature-icon">📊</span>
                            <span>SDK для розробників</span>
                        </div>
                    </div>
                </div>

                <div className="hero-video-wrapper">
                    <div className="phone-mockup">
                        <video className="hero-video" autoPlay loop muted playsInline>
                            <source src="/images/neuroedge-demo.mp4" type="video/mp4" />
                        </video>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;