import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Header = () => {
  const { itemCount } = useCart();

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
          <li><Link to="/login">Login</Link></li>
          <li>
            <Link to="/carrito">
              🛒 Carrito ({itemCount})
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;