import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { mostrarMensaje } from '../Atoms/Validaciones'; 

const Header = () => {
  const [carritoCount, setCarritoCount] = useState(0);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const location = useLocation();
  const navigate = useNavigate(); 

  useEffect(() => {
    const actualizarCarrito = () => {
      if (typeof carrito !== 'undefined' && carrito.items) {
        const total = carrito.items.reduce((sum, item) => sum + item.cantidad, 0);
        setCarritoCount(total);
      }
    };

    const verificarSesion = () => {
      const logged = sessionStorage.getItem('isLoggedIn') === 'true';
      setIsLoggedIn(logged);
    };

    actualizarCarrito();
    verificarSesion();

    const interval = setInterval(() => {
      actualizarCarrito();
      verificarSesion();
    }, 1000);

    return () => clearInterval(interval);
  }, [location]);

 
  const handleCarritoClick = (e) => {
    if (!isLoggedIn) {
      e.preventDefault(); 
      mostrarMensaje('Debes iniciar sesión para ver el carrito', 'error');
      setTimeout(() => {
        navigate('/login');
      }, 1500);
    }
  };

  return (
    <header>
      <div className="logo">
        <h1>🎮 Level-Up Gamer</h1>
      </div>
      <nav>
        <ul>
          <li><Link to="/#inicio">Inicio</Link></li>
          <li><Link to="/#catalogo">Catálogo</Link></li>
          <li><Link to="/#comunidad">Comunidad</Link></li>
          <li><Link to="/#eventos">Eventos</Link></li>
          <li><Link to="/#contacto">Contacto</Link></li>
          {isLoggedIn ? (
            <li><Link to="/perfil">Mi Perfil</Link></li>
          ) : (
            <li><Link to="/login">Login</Link></li>
          )}
          <li>
            
            <Link to="/carrito" onClick={handleCarritoClick}>
              🛒 Carrito (<span id="carrito-count">{carritoCount}</span>)
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;