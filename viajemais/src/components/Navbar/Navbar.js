import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg fixed-top" style={{
      backgroundColor: 'rgba(128, 124, 120, 0.4)', // Transparência de 70%
      backdropFilter: 'blur(5px)', // Efeito de vidro fosco
      transition: 'all 0.3s ease',
      boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)'
    }}>
      <div className="container-fluid">
        {/* Logo */}
        <Link
          to="/"
          className="navbar-brand"
          style={{ 
            color: "#99BC85", 
            fontWeight: "700", 
            fontSize: "1.8rem",
            textShadow: '1px 1px 2px rgba(0,0,0,0.1)'
          }}
        >
          Viaje Mais
        </Link>

        {/* Botão para mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
          style={{ borderColor: '#99BC85' }}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Itens de navegação */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <div className="navbar-nav ms-auto">
            <Link
              to="/blog"
              className="nav-link"
              style={{ 
                color: "#99BC85", 
                fontWeight: "600", 
                margin: "0 1rem",
                textShadow: '1px 1px 2px rgba(0,0,0,0.1)'
              }}
              activeclassname="active"
            >
              Blog de Viagens
            </Link>
            <Link
              to="/galeria"
              className="nav-link"
              style={{ 
                color: "#99BC85", 
                fontWeight: "600", 
                margin: "0 1rem",
                textShadow: '1px 1px 2px rgba(0,0,0,0.1)'
              }}
              activeclassname="active"
            >
              Galeria
            </Link>
            <Link
              to="/contato"
              className="nav-link"
              style={{ 
                color: "#99BC85", 
                fontWeight: "600", 
                margin: "0 1rem",
                textShadow: '1px 1px 2px rgba(0,0,0,0.1)'
              }}
              activeclassname="active"
            >
              Contato
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;