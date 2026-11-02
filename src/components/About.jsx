import '../css/About.css';
import React from 'react';

const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="about-container">
        <div className="about-header">
          <span className="hero-badge">🧬 Про NeuroEdge System</span>
          <h2 className="section-title">Інновації в аналізі біосигналів</h2>
        </div>
        
        <div className="about-grid">
          {/* Блок 1: Хто ми */}
          <div className="about-card">
            <div className="about-icon">👥</div>
            <h3>Команда NeuroEdge</h3>
            <p>
              Ми — <strong>Олег Мищишин та Юрій Стах</strong>, розробники кафедри Системної інженерії та Інтернету речей НУ «Львівська політехніка». Ми створили NeuroEdge, щоб замінити тренування «навмання» точним аналізом м'язової активності.
            </p>
          </div>

          {/* Блок 2: Переваги */}
          <div className="about-card">
            <div className="about-icon">⚡</div>
            <h3>Фіксація реальної відмови</h3>
            <p>
              NeuroEdge реєструє електричний потенціал м'язів через гіпоалергенні Snap Mounts електроди. Пристрій фіксує нейром'язову відмову в реальному часі, гарантуючи гіпертрофію без виснаження ЦНС.
            </p>
          </div>

          {/* Блок 3: Технології */}
          <div className="about-card">
            <div className="about-icon">⚙️</div>
            <h3>Технологічний стек</h3>
            <p>
              Серце капсули — мікроконтролер <strong>XIAO ESP32C3</strong> (BLE/Wi-Fi) та аналоговий чип <strong>AD8232</strong>. Алгоритми фільтрації прибирають завади, а 3.7V LiPo акумулятор забезпечує тривалу автономність.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;