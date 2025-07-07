import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; 
const Home = () => {
  return (
    <div className="home-container">
      <section className="hero-banner">
        <div className="banner-overlay">
          <h1>Explore o mundo com a ViajeMais</h1>
          <p className="banner-text">Descubra destinos incríveis e crie memórias inesquecíveis</p>
          <Link to="/blog" className="cta-button">
            Ver Dicas de Viagem
          </Link>
        </div>
      </section>

      <section className="highlights">
        <div className="highlight-card">
          <h3>Destinos Exóticos</h3>
          <p>Explore lugares que vão além do convencional</p>
        </div>
        <div className="highlight-card">
          <h3>Economize na Viagem</h3>
          <p>Dicas para viajar mais gastando menos</p>
        </div>
        <div className="highlight-card">
          <h3>Experiências Únicas</h3>
          <p>Viva aventuras que só os locais conhecem</p>
        </div>
      </section>
    </div>
  );
};

export default Home;