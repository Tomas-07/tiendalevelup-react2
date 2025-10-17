import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import Footer from '../organisms/Footer';
import Header from '../organisms/Header';


const Carrito = () => {
  const { items, total, removeFromCart, updateQuantity, clearCart } = useCart();

  const handleQuantityChange = (codigo, newQuantity) => {
    if (newQuantity < 1) return;
    updateQuantity(codigo, newQuantity);
  };

  const handleRemoveItem = (codigo) => {
    if (window.confirm('¿Estás seguro de que quieres eliminar este producto del carrito?')) {
      removeFromCart(codigo);
    }
  };

  return (
    <div className="App">
      <Header/>
      
      <main>
        <section className="carrito">
          <h2>🛒 Tu Carrito de Compras</h2>
          
          {items.length === 0 ? (
            <div style={{textAlign: 'center', padding: '3rem'}}>
              <p style={{fontSize: '1.2rem', color: '#D3D3D3', marginBottom: '1rem'}}>
                Tu carrito está vacío
              </p>
              <Link to="/" className="btn-seguir">
                ← Ir a Comprar
              </Link>
            </div>
          ) : (
            <>
              <div className="carrito-items">
                {items.map(item => (
                  <div key={item.codigo} className="carrito-item">
                    <div style={{display: 'flex', alignItems: 'center', gap: '1rem'}}>
                      <img 
                        src={item.imagen} 
                        alt={item.nombre} 
                        style={{width: '60px', height: '60px', borderRadius: '8px', objectFit: 'cover'}}
                      />
                      <div>
                        <h4 style={{color: '#1E90FF', margin: '0 0 0.3rem 0'}}>{item.nombre}</h4>
                        <p style={{color: '#D3D3D3', margin: '0', fontSize: '0.9rem'}}>
                          ${item.precio.toLocaleString('es-CL')} CLP
                        </p>
                      </div>
                    </div>
                    
                    <div style={{display: 'flex', alignItems: 'center', gap: '1rem'}}>
                      <div style={{display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
                        <button 
                          onClick={() => handleQuantityChange(item.codigo, item.quantity - 1)}
                          style={{
                            background: '#333',
                            border: 'none',
                            color: 'white',
                            width: '30px',
                            height: '30px',
                            borderRadius: '50%',
                            cursor: 'pointer'
                          }}
                        >
                          -
                        </button>
                        <span style={{minWidth: '40px', textAlign: 'center'}}>
                          {item.quantity}
                        </span>
                        <button 
                          onClick={() => handleQuantityChange(item.codigo, item.quantity + 1)}
                          style={{
                            background: '#333',
                            border: 'none',
                            color: 'white',
                            width: '30px',
                            height: '30px',
                            borderRadius: '50%',
                            cursor: 'pointer'
                          }}
                        >
                          +
                        </button>
                      </div>
                      
                      <p style={{fontWeight: 'bold', minWidth: '100px', textAlign: 'right'}}>
                        ${(item.precio * item.quantity).toLocaleString('es-CL')}
                      </p>
                      
                      <button 
                        onClick={() => handleRemoveItem(item.codigo)}
                        style={{
                          background: 'transparent',
                          border: 'none',
                          color: '#ff6b6b',
                          cursor: 'pointer',
                          fontSize: '1.2rem'
                        }}
                      >
                        ❌
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="carrito-total">
                Total: ${total.toLocaleString('es-CL')} CLP
              </div>

              <div className="acciones-carrito">
                <Link to="/" className="btn-seguir">
                  ← Seguir Comprando
                </Link>
                <button 
                  onClick={clearCart}
                  style={{
                    background: 'transparent',
                    color: '#ff6b6b',
                    border: '2px solid #ff6b6b',
                    padding: '0.8rem 1.5rem',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    fontWeight: '600'
                  }}
                >
                  Vaciar Carrito
                </button>
                <button className="btn-pagar">
                  Proceder al Pago
                </button>
              </div>
            </>
          )}
        </section>
      </main>

      <Footer/>
    </div>
  );
};

export default Carrito;