
import React from 'react';

const Header = () => {
  return (
    <header>
      <div className="logo">
        <h1>🎮 Level-Up Gamer</h1>
      </div>
      <nav>
        <ul>
          <li><a href="#inicio">Inicio</a></li>
          <li><a href="#catalogo">Catálogo</a></li>
          <li><a href="#comunidad">Comunidad</a></li>
          <li><a href="#eventos">Eventos</a></li>
          <li><a href="#contacto">Contacto</a></li>
          <li><a href="Login.html">Login</a></li>
          <li><a href="carrito.html">🛒 Carrito (<span id="carrito-count">0</span>)</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;