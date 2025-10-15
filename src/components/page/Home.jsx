import React, { useState } from 'react';


function App() {
  const [cartCount, setCartCount] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('todas');
  const [selectedPrice, setSelectedPrice] = useState('todos');

  // Datos de productos
  const products = [
    {
      id: '1',
      nombre: 'Catan',
      precio: 29990,
      descripcion: 'Un clásico juego de estrategia para 3-4 jugadores.',
      imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVZG1G_ZdkpPVHE9O8kqSNWPRHjKC3Vz9Sag&s',
      categoria: 'juegos-mesa',
      codigo: 'JM001'
    },
    {
      id: '2',
      nombre: 'Carcassonne',
      precio: 24990,
      descripcion: 'Juego de fichas y construcción de paisajes medievales.',
      imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUNb5P5Cj9UCEVmLua1VI7Z81P79V4DtMu0Q&s',
      categoria: 'juegos-mesa',
      codigo: 'JM002'
    },
    {
      id: '3',
      nombre: 'PlayStation 5',
      precio: 549990,
      descripcion: 'Consola de nueva generación con gráficos impresionantes.',
      imagen: 'https://gsmpro.cl/cdn/shop/articles/16991bf65a7a52901d78b55fa36bddc8.jpg?v=1737343320',
      categoria: 'consolas',
      codigo: 'CO001'
    },
    {
      id: '4',
      nombre: 'PC Gamer ASUS ROG Strix',
      precio: 1299990,
      descripcion: 'Potente equipo para los gamers más exigentes.',
      imagen: 'https://dlcdnwebimgs.asus.com/files/media/6C1CAB30-D5C6-4D6E-90DC-B6A088360E12/V1/img/frame/01.jpg',
      categoria: 'computadores',
      codigo: 'CG001'
    },
    {
      id: '5',
      nombre: 'Silla Gamer Secretlab Titan',
      precio: 349990,
      descripcion: 'Ergonómica, cómoda y ajustable para largas sesiones de juego.',
      imagen: 'https://m.media-amazon.com/images/I/51ajrSvAdiL.jpg',
      categoria: 'sillas',
      codigo: 'SG001'
    },
    {
      id: '6',
      nombre: 'Mouse Gamer Logitech G502 HERO',
      precio: 49990,
      descripcion: 'Sensor de alta precisión y botones personalizables.',
      imagen: 'https://m.media-amazon.com/images/I/61mpMH5TzkL._AC_UF894,1000_QL80_.jpg',
      categoria: 'mouse',
      codigo: 'MS001'
    },
    {
      id: '7',
      nombre: 'Mousepad Razer Goliathus Extended Chroma',
      precio: 29990,
      descripcion: 'Área de juego amplia con iluminación RGB personalizable.',
      imagen: 'https://assets2.razerzone.com/images/pnx.assets/f024c732d60734e43b0c95945683c3cc/razer-goliathus-extended-chroma-size.jpg',
      categoria: 'mousepad',
      codigo: 'MP001'
    }
  ];

  const handleAddToCart = (product) => {
    setCartCount(prev => prev + 1);
    console.log('Producto agregado al carrito:', product);
    // Aquí puedes agregar la lógica para manejar el carrito
  };

  const formatPrice = (price) => {
    return `$${price.toLocaleString('es-CL')} CLP`;
  };

  return (
    <div className="App">
      {/* HEADER */}
      <header className="header">
        <div className="logo">
          <h1>🎮 Level-Up Gamer</h1>
        </div>
        <nav>
          <ul className="nav-list">
            <li><a href="#inicio">Inicio</a></li>
            <li><a href="#catalogo">Catálogo</a></li>
            <li><a href="#comunidad">Comunidad</a></li>
            <li><a href="#eventos">Eventos</a></li>
            <li><a href="#contacto">Contacto</a></li>
            <li><a href="/login">Login</a></li>
            <li>
              <a href="/carrito" className="cart-link">
                🛒 Carrito (<span id="carrito-count">{cartCount}</span>)
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        {/* SECCIÓN INICIO */}
        <section id="inicio" className="section">
          <h2>Bienvenido a Level-Up Gamer</h2>
          <p>Tu tienda online gamer en Chile 🚀</p>
          <p style={{ color: '#39FF14', marginTop: '1rem' }}>
            ¡Gana puntos LevelUp con cada compra y desbloquea descuentos exclusivos!
          </p>
        </section>

        {/* SECCIÓN CATÁLOGO */}
        <section id="catalogo" className="section">
          <h2>Nuestros Productos</h2>
          
          {/* FILTROS AVANZADOS */}
          <div className="filtros-container">
            {/* Búsqueda */}
            <div className="filter-group">
              <label htmlFor="busqueda" className="filter-label">
                🔍 Buscar productos
              </label>
              <input 
                type="text" 
                id="busqueda" 
                placeholder="Buscar por nombre..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="filter-input"
              />
            </div>

            {/* Filtro por categoría */}
            <div className="filter-group">
              <label htmlFor="filtro-categoria" className="filter-label">
                📦 Categoría
              </label>
              <select 
                id="filtro-categoria" 
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="filter-select"
              >
                <option value="todas">Todas las categorías</option>
                <option value="juegos-mesa">Juegos de Mesa</option>
                <option value="accesorios">Accesorios</option>
                <option value="consolas">Consolas</option>
                <option value="computadores">Computadores Gamers</option>
                <option value="sillas">Sillas Gamers</option>
                <option value="mouse">Mouse</option>
                <option value="mousepad">Mousepad</option>
                <option value="poleras">Poleras Personalizadas</option>
                <option value="polerones">Polerones Gamers</option>
              </select>
            </div>

            {/* Filtro por precio */}
            <div className="filter-group">
              <label htmlFor="filtro-precio" className="filter-label">
                💰 Rango de precio
              </label>
              <select 
                id="filtro-precio" 
                value={selectedPrice}
                onChange={(e) => setSelectedPrice(e.target.value)}
                className="filter-select"
              >
                <option value="todos">Todos los precios</option>
                <option value="bajo">Menos de $50.000</option>
                <option value="medio">$50.000 - $200.000</option>
                <option value="alto">Más de $200.000</option>
              </select>
            </div>
          </div>

          {/* GRID DE PRODUCTOS */}
          <div className="productos">
            {products.map(product => (
              <article key={product.id} className="producto">
                <img src={product.imagen} alt={product.nombre} />
                <h3>{product.nombre}</h3>
                <p className="precio">{formatPrice(product.precio)}</p>
                <p className="descripcion">{product.descripcion}</p>
                
                {product.codigo === 'CO001' && (
                  <a href={`/productos/${product.codigo}`} className="btn-detalles">
                    Ver detalles
                  </a>
                )}
                
                <button 
                  className="btn-agregar"
                  onClick={() => handleAddToCart(product)}
                >
                  Agregar al carrito
                </button>
              </article>
            ))}
          </div>
        </section>

        {/* SECCIÓN COMUNIDAD */}
        <section id="comunidad" className="section">
          <h2>Comunidad Gamer</h2>
          <p>Explora artículos, noticias y consejos para mejorar tu experiencia de juego.</p>
          
          <div className="comunidad-content">
            <h3>Últimas Noticias</h3>
            <div className="news-card">
              <h4>🎮 Próximos Lanzamientos 2025</h4>
              <p>Descubre los juegos más esperados del año y prepárate para las mejores experiencias gaming.</p>
            </div>
            
            <div className="news-card green-border">
              <h4>🏆 Consejos para Mejorar tu Setup</h4>
              <p>Optimiza tu estación de juego con nuestras recomendaciones de expertos.</p>
            </div>
          </div>
        </section>

        {/* SECCIÓN EVENTOS */}
        <section id="eventos" className="section">
          <h2>Eventos Gamer en Chile</h2>
          <p className="eventos-subtitle">¡Participa en eventos y gana puntos LevelUp!</p>
          
          <div className="eventos-container">
            <div className="eventos-card">
              <h3>📍 Próximos Eventos</h3>
              
              <div className="eventos-grid">
                <div className="evento-item">
                  <h4>🎮 Chile Gaming Expo 2025</h4>
                  <p><strong>Fecha:</strong> 15-17 Noviembre 2025</p>
                  <p><strong>Lugar:</strong> Centro de Eventos Movistar Arena, Santiago</p>
                  <p><strong>Puntos:</strong> 200 LevelUp por asistencia</p>
                </div>

                <div className="evento-item green-border">
                  <h4>🏆 Torneo League of Legends Regional</h4>
                  <p><strong>Fecha:</strong> 5 Diciembre 2025</p>
                  <p><strong>Lugar:</strong> Centro Cultural Gabriela Mistral, Santiago</p>
                  <p><strong>Puntos:</strong> 300 LevelUp por participación</p>
                </div>

                <div className="evento-item">
                  <h4>🎯 Meetup Gamers Valparaíso</h4>
                  <p><strong>Fecha:</strong> 20 Diciembre 2025</p>
                  <p><strong>Lugar:</strong> Puerto Valparaíso</p>
                  <p><strong>Puntos:</strong> 150 LevelUp por asistencia</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECCIÓN CONTACTO */}
        <section id="contacto" className="section">
          <h2>Contacto</h2>
          <p>¿Necesitas ayuda? Estamos aquí para ti.</p>
          
          <div className="contacto-container">
            <div className="contacto-card">
              <p>
                📧 Email: <a href="mailto:soporte@levelupgamer.cl" className="contact-link">
                  soporte@levelupgamer.cl
                </a>
              </p>
              <p>
                📱 WhatsApp: <a href="https://wa.me/56912345678" target="_blank" rel="noopener noreferrer" className="contact-link green">
                  +56 9 1234 5678
                </a>
              </p>
              <p>
                🕐 Horario de atención: Lunes a Viernes, 9:00 - 18:00 hrs
              </p>
              
              <a href="https://wa.me/56912345678" target="_blank" rel="noopener noreferrer" className="whatsapp-btn">
                💬 Chat con Soporte Técnico
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="site-footer">
        <div className="footer-content">
          <p>&copy; 2025 Level-Up Gamer – Despachos a todo Chile</p>
          <nav className="footer-nav">
            <a href="#inicio">Inicio</a> ·
            <a href="#catalogo">Catálogo</a> ·
            <a href="#comunidad">Comunidad</a> ·
            <a href="#eventos">Eventos</a> ·
            <a href="#contacto">Contacto</a>
          </nav>
        </div>
      </footer>
    </div>
  );
}

export default App;