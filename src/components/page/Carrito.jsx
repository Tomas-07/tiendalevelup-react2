

import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Carrito = () => {
  const [items, setItems] = useState([]);
  const [subtotal, setSubtotal] = useState(0);
  const [descuentoDuoc, setDescuentoDuoc] = useState(0);
  const [descuentoNivel, setDescuentoNivel] = useState(0);
  const [totalFinal, setTotalFinal] = useState(0);
  const [puntosGanados, setPuntosGanados] = useState(0);
  const [nivelUsuario, setNivelUsuario] = useState({ name: 'Nivel 0', discount: 0 });
  const [totalDescuento, setTotalDescuento] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    cargarCarrito();
  }, []);

  const formatearPrecio = (precio) => {
    const n = Number(precio) || 0;
    return `$${n.toLocaleString('es-CL')}`;
  };

  const computeTotals = (carritoItems) => {
    const sub = carritoItems.reduce((sum, item) => 
      sum + (Number(item.precio) * Number(item.cantidad)), 0
    );

    const userData = JSON.parse(sessionStorage.getItem('userData') || '{}');
    const points = Number(userData.levelUpPoints || 0);
    
    const level = (typeof gamification !== 'undefined' && gamification && typeof gamification.getUserLevel === 'function')
      ? gamification.getUserLevel(points)
      : { name: 'Nivel 0', discount: 0 };

    let descDuoc = 0;
    if (userData.descuentoDuoc) {
      descDuoc = sub * (Number(userData.descuentoDuoc) / 100);
    }

    let descNivel = 0;
    if (level.discount > 0) {
      descNivel = sub * (Number(level.discount) / 100);
    }

    const totalDesc = descDuoc + descNivel;
    const total = Math.max(0, sub - totalDesc);
    const puntos = Math.floor(total / 1000);

    return { 
      subtotal: sub, 
      descuentoDuoc: descDuoc, 
      descuentoNivel: descNivel, 
      totalDescuento: totalDesc, 
      totalFinal: total, 
      puntosGanados: puntos, 
      level 
    };
  };

  const cargarCarrito = () => {
    if (typeof carrito !== 'undefined' && typeof carrito.init === 'function') {
      carrito.init();
    }

    const carritoItems = (typeof carrito !== 'undefined' && carrito.items) ? carrito.items : [];
    setItems(carritoItems);

    if (carritoItems.length > 0) {
      const totales = computeTotals(carritoItems);
      setSubtotal(totales.subtotal);
      setDescuentoDuoc(totales.descuentoDuoc);
      setDescuentoNivel(totales.descuentoNivel);
      setTotalDescuento(totales.totalDescuento);
      setTotalFinal(totales.totalFinal);
      setPuntosGanados(totales.puntosGanados);
      setNivelUsuario(totales.level);
    }
  };

  const actualizarCantidad = (codigo, cantidad) => {
    const qty = Math.max(1, Math.min(99, parseInt(cantidad, 10) || 1));
    if (typeof carrito !== 'undefined' && typeof carrito.modificarCantidad === 'function') {
      carrito.modificarCantidad(codigo, qty);
    }
    cargarCarrito();
  };

  const eliminarItem = (codigo) => {
    if (window.confirm('¿Deseas eliminar este producto del carrito?')) {
      if (typeof carrito !== 'undefined' && typeof carrito.eliminar === 'function') {
        carrito.eliminar(codigo);
      }
      cargarCarrito();
      if (typeof mostrarMensaje === 'function') {
        mostrarMensaje('Producto eliminado del carrito', 'success');
      }
    }
  };

  const handlePagarClick = () => {
    const isLoggedIn = sessionStorage.getItem('isLoggedIn') === 'true';

    if (!isLoggedIn) {
      if (typeof mostrarMensaje === 'function') {
        mostrarMensaje('Debes iniciar sesión para realizar la compra', 'error');
      }
      setTimeout(() => {
        navigate('/login');
      }, 2000);
      return;
    }

    if (!items || items.length === 0) {
      if (typeof mostrarMensaje === 'function') {
        mostrarMensaje('Tu carrito está vacío', 'error');
      }
      return;
    }

    // Acreditar puntos
    if (typeof gamification !== 'undefined' && typeof gamification.addPoints === 'function') {
      gamification.addPoints('currentUser', puntosGanados);
    }

    if (typeof mostrarMensaje === 'function') {
      mostrarMensaje(`¡Compra exitosa! Has ganado ${puntosGanados} puntos LevelUp`, 'success');
    }

    if (typeof carrito !== 'undefined' && typeof carrito.vaciar === 'function') {
      carrito.vaciar();
    }

    setTimeout(() => {
      navigate('/perfil');
    }, 3000);
  };

  return (
    <main className="wrap">
      <h2>🛒 Tu Carrito de Compras</h2>

      {/* Información de descuentos activos */}
      {totalDescuento > 0 && (
        <div style={{
          background: 'linear-gradient(135deg, #1E90FF, #39FF14)',
          padding: '1.5rem',
          borderRadius: '12px',
          marginBottom: '2rem',
          color: '#000'
        }}>
          <h3 style={{ margin: '0 0 0.5rem', fontSize: '1.2rem' }}>🎉 ¡Descuentos Activos!</h3>
          <div>
            {descuentoDuoc > 0 && (
              <p style={{ margin: '0.3rem 0', fontWeight: 600 }}>
                Descuento DUOC: {formatearPrecio(descuentoDuoc)}
              </p>
            )}
            {descuentoNivel > 0 && (
              <p style={{ margin: '0.3rem 0', fontWeight: 600 }}>
                Descuento {nivelUsuario.name}: {formatearPrecio(descuentoNivel)}
              </p>
            )}
            <p style={{ margin: '0.3rem 0', fontWeight: 600 }}>
              Total ahorrado: {formatearPrecio(totalDescuento)}
            </p>
          </div>
        </div>
      )}

      {/* Tabla del carrito */}
      <div id="carrito-container">
        {items.length === 0 ? (
          <div style={{
            display: 'block',
            textAlign: 'center',
            padding: '3rem',
            background: '#111',
            borderRadius: '12px',
            margin: '2rem 0'
          }}>
            <p style={{ fontSize: '1.2rem', color: '#D3D3D3', marginBottom: '1.5rem' }}>
              🛒 Tu carrito está vacío
            </p>
            <Link to="/#catalogo" className="btn">Explorar productos</Link>
          </div>
        ) : (
          <>
            <table className="cart" style={{ display: 'table' }}>
              <thead>
                <tr>
                  <th>Producto</th>
                  <th>Precio Unitario</th>
                  <th>Cantidad</th>
                  <th>Total línea</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
                {items.map(item => {
                  const totalLinea = Number(item.precio) * Number(item.cantidad);
                  return (
                    <tr key={item.codigo}>
                      <td>{item.nombre}</td>
                      <td>{formatearPrecio(item.precio)}</td>
                      <td>
                        <input 
                          type="number" 
                          value={item.cantidad} 
                          min="1" 
                          max="99"
                          onChange={(e) => actualizarCantidad(item.codigo, e.target.value)}
                          style={{
                            width: '70px',
                            padding: '0.5rem',
                            textAlign: 'center',
                            background: '#1a1a1a',
                            color: '#fff',
                            border: '1px solid #222',
                            borderRadius: '6px'
                          }}
                          aria-label={`Cambiar cantidad para ${item.nombre}`}
                        />
                      </td>
                      <td>{formatearPrecio(totalLinea)}</td>
                      <td>
                        <button 
                          onClick={() => eliminarItem(item.codigo)}
                          style={{
                            background: '#ff6b6b',
                            color: 'white',
                            border: 'none',
                            padding: '0.5rem 1rem',
                            borderRadius: '6px',
                            cursor: 'pointer',
                            fontWeight: 'bold'
                          }}
                          type="button"
                        >
                          Eliminar
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
              <tfoot>
                <tr>
                  <td colSpan="3" style={{ textAlign: 'right' }}>
                    <strong>Subtotal</strong>
                  </td>
                  <td><strong>{formatearPrecio(subtotal)}</strong></td>
                  <td></td>
                </tr>
                {descuentoDuoc > 0 && (
                  <tr>
                    <td colSpan="3" style={{ textAlign: 'right', color: '#39FF14' }}>
                      Descuento DUOC (20%)
                    </td>
                    <td style={{ color: '#39FF14' }}>-{formatearPrecio(descuentoDuoc)}</td>
                    <td></td>
                  </tr>
                )}
                {descuentoNivel > 0 && (
                  <tr>
                    <td colSpan="3" style={{ textAlign: 'right', color: '#1E90FF' }}>
                      Descuento por Nivel
                    </td>
                    <td style={{ color: '#1E90FF' }}>
                      -{formatearPrecio(descuentoNivel)} ({nivelUsuario.name} {nivelUsuario.discount}%)
                    </td>
                    <td></td>
                  </tr>
                )}
                <tr style={{ borderTop: '2px solid #39FF14' }}>
                  <td colSpan="3" style={{ textAlign: 'right', fontSize: '1.2rem' }}>
                    <strong>TOTAL A PAGAR</strong>
                  </td>
                  <td style={{ fontSize: '1.3rem' }}>
                    <strong>{formatearPrecio(totalFinal)}</strong>
                  </td>
                  <td></td>
                </tr>
                <tr>
                  <td colSpan="5" style={{
                    textAlign: 'right',
                    color: '#39FF14',
                    fontSize: '0.9rem'
                  }}>
                    Ganarás {puntosGanados} puntos LevelUp con esta compra
                  </td>
                </tr>
              </tfoot>
            </table>

            <div className="acciones-carrito">
              <Link to="/#catalogo" className="btn-seguir">⬅️ Seguir comprando</Link>
              <button 
                className="btn-pagar" 
                type="button"
                onClick={handlePagarClick}
              >
                Proceder al pago
              </button>
            </div>
          </>
        )}
      </div>
    </main>
  );
};

export default Carrito;