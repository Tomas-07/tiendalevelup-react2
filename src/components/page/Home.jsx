import React from 'react';
import Header from '../organisms/Header';
import Footer from '../organisms/Footer';
import Producto from '../organisms/Producto';
import './Home.css';

const Home = () => {
  // Datos de productos
  const productos = [
    {
      id: 1,
      categoria: "juegos-mesa",
      precio: 29990,
      codigo: "JM001",
      imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVZG1G_ZdkpPVHE9O8kqSNWPRHjKC3Vz9Sag&s",
      nombre: "Catan",
      descripcion: "Un clásico juego de estrategia para 3-4 jugadores."
    },
    {
      id: 2,
      categoria: "juegos-mesa",
      precio: 24990,
      codigo: "JM002",
      imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUNb5P5Cj9UCEVmLua1VI7Z81P79V4DtMu0Q&s",
      nombre: "Carcassonne",
      descripcion: "Juego de fichas y construcción de paisajes medievales."
    },
    {
      id: 3,
      categoria: "consolas",
      precio: 549990,
      codigo: "CO001",
      imagen: "https://gsmpro.cl/cdn/shop/articles/16991bf65a7a52901d78b55fa36bddc8.jpg?v=1737343320",
      nombre: "PlayStation 5",
      descripcion: "Consola de nueva generación con gráficos impresionantes."
    },
    {
      id: 4,
      categoria: "computadores",
      precio: 1299990,
      codigo: "CG001",
      imagen: "https://dlcdnwebimgs.asus.com/files/media/6C1CAB30-D5C6-4D6E-90DC-B6A088360E12/V1/img/frame/01.jpg",
      nombre: "PC Gamer ASUS ROG Strix",
      descripcion: "Potente equipo para los gamers más exigentes."
    },
    {
      id: 5,
      categoria: "sillas",
      precio: 349990,
      codigo: "SG001",
      imagen: "https://m.media-amazon.com/images/I/51ajrSvAdiL.jpg",
      nombre: "Silla Gamer Secretlab Titan",
      descripcion: "Ergonómica, cómoda y ajustable para largas sesiones de juego."
    },
    {
      id: 6,
      categoria: "mouse",
      precio: 49990,
      codigo: "MS001",
      imagen: "https://m.media-amazon.com/images/I/61mpMH5TzkL._AC_UF894,1000_QL80_.jpg",
      nombre: "Mouse Gamer Logitech G502 HERO",
      descripcion: "Sensor de alta precisión y botones personalizables."
    },
    {
      id: 7,
      categoria: "mousepad",
      precio: 29990,
      codigo: "MP001",
      imagen: "https://assets2.razerzone.com/images/pnx.assets/f024c732d60734e43b0c95945683c3cc/razer-goliathus-extended-chroma-size.jpg",
      nombre: "Mousepad Razer Goliathus Extended Chroma",
      descripcion: "Área de juego amplia con iluminación RGB personalizable."
    }
  ];

  const eventos = [
    {
      id: 1,
      titulo: "🎮 Chile Gaming Expo 2025",
      fecha: "15-17 Noviembre 2025",
      lugar: "Centro de Eventos Movistar Arena, Santiago",
      puntos: "200 LevelUp por asistencia",
      color: "#1E90FF"
    },
    {
      id: 2,
      titulo: "🏆 Torneo League of Legends Regional",
      fecha: "5 Diciembre 2025",
      lugar: "Centro Cultural Gabriela Mistral, Santiago",
      puntos: "300 LevelUp por participación",
      color: "#39FF14"
    },
    {
      id: 3,
      titulo: "🎯 Meetup Gamers Valparaíso",
      fecha: "20 Diciembre 2025",
      lugar: "Puerto Valparaíso",
      puntos: "150 LevelUp por asistencia",
      color: "#1E90FF"
    }
  ];

  return (
    <div className="home">
      <Header/>
      
      <main>
        {/* SECCIÓN INICIO */}
        <section id="inicio">
          <h2>Bienvenido a Level-Up Gamer</h2>
          <p>Tu tienda online gamer en Chile 🚀</p>
          <p style={{color: '#39FF14', marginTop: '1rem'}}>
            ¡Gana puntos LevelUp con cada compra y desbloquea descuentos exclusivos!
          </p>
        </section>

        {/* SECCIÓN CATÁLOGO */}
        <section id="catalogo">
          <h2>Nuestros Productos</h2>
          
          {/* FILTROS AVANZADOS */}
          <div className="filtros-container">
            {/* Búsqueda */}
            <div>
              <label htmlFor="busqueda">
                🔍 Buscar productos
              </label>
              <input 
                type="text" 
                id="busqueda" 
                placeholder="Buscar por nombre..." 
              />
            </div>

            {/* Filtro por categoría */}
            <div>
              <label htmlFor="filtro-categoria">
                📦 Categoría
              </label>
              <select id="filtro-categoria">
                <option value="todas">Todas las categorías</option>
                <option value="juegos-mesa">Juegos de Mesa</option>
                <option value="accesorios">Accesorios</option>
                <option value="consolas">Consolas</option>
                <option value="computadores">Computadores Gamers</option>
                <option value="sillas">Sillas Gamers</option>
                <option value="mouse">Mouse</option>
                <option value="mousepad">Mousepad</option>
              </select>
            </div>

            {/* Filtro por precio */}
            <div>
              <label htmlFor="filtro-precio">
                💰 Rango de precio
              </label>
              <select id="filtro-precio">
                <option value="todos">Todos los precios</option>
                <option value="bajo">Menos de $50.000</option>
                <option value="medio">$50.000 - $200.000</option>
                <option value="alto">Más de $200.000</option>
              </select>
            </div>
          </div>

          {/* GRID DE PRODUCTOS */}
          <div className="productos">
            {productos.map(producto => (
              <Producto
                key={producto.id}
                {...producto}
              />
            ))}
          </div>
        </section>

        {/* SECCIÓN COMUNIDAD */}
        <section id="comunidad">
          <h2>Comunidad Gamer</h2>
          <p>Explora artículos, noticias y consejos para mejorar tu experiencia de juego.</p>
          
          <div style={{maxWidth: '800px', margin: '2rem auto', textAlign: 'left', padding: '0 2rem'}}>
            <h3 style={{color: '#39FF14', marginBottom: '1rem'}}>Últimas Noticias</h3>
            <div style={{background: '#111', padding: '1.5rem', borderRadius: '12px', marginBottom: '1rem', borderLeft: '4px solid #1E90FF'}}>
              <h4 style={{color: '#1E90FF', marginBottom: '0.5rem'}}>🎮 Próximos Lanzamientos 2025</h4>
              <p style={{color: '#D3D3D3'}}>Descubre los juegos más esperados del año y prepárate para las mejores experiencias gaming.</p>
            </div>
            
            <div style={{background: '#111', padding: '1.5rem', borderRadius: '12px', marginBottom: '1rem', borderLeft: '4px solid #39FF14'}}>
              <h4 style={{color: '#39FF14', marginBottom: '0.5rem'}}>🏆 Consejos para Mejorar tu Setup</h4>
              <p style={{color: '#D3D3D3'}}>Optimiza tu estación de juego con nuestras recomendaciones de expertos.</p>
            </div>
          </div>
        </section>

        {/* SECCIÓN EVENTOS */}
        <section id="eventos">
          <h2>Eventos Gamer en Chile</h2>
          <p style={{marginBottom: '2rem'}}>¡Participa en eventos y gana puntos LevelUp!</p>
          
          <div style={{maxWidth: '1000px', margin: '0 auto'}}>
            <div style={{background: '#111', padding: '2rem', borderRadius: '16px', border: '1px solid #222'}}>
              <h3 style={{color: '#1E90FF', marginBottom: '1.5rem'}}>📍 Próximos Eventos</h3>
              
              <div style={{display: 'grid', gap: '1rem'}}>
                {eventos.map(evento => (
                  <div 
                    key={evento.id}
                    style={{
                      background: '#1a1a1a', 
                      padding: '1.5rem', 
                      borderRadius: '12px', 
                      borderLeft: `4px solid ${evento.color}`
                    }}
                  >
                    <h4 style={{color: '#39FF14', marginBottom: '0.5rem'}}>{evento.titulo}</h4>
                    <p style={{color: '#D3D3D3', margin: '0.5rem 0'}}><strong>Fecha:</strong> {evento.fecha}</p>
                    <p style={{color: '#D3D3D3', margin: '0.5rem 0'}}><strong>Lugar:</strong> {evento.lugar}</p>
                    <p style={{color: '#D3D3D3', margin: '0.5rem 0'}}><strong>Puntos:</strong> {evento.puntos}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SECCIÓN CONTACTO */}
        <section id="contacto">
          <h2>Contacto</h2>
          <p>¿Necesitas ayuda? Estamos aquí para ti.</p>
          
          <div style={{maxWidth: '600px', margin: '2rem auto', textAlign: 'left', padding: '0 2rem'}}>
            <div style={{background: '#111', padding: '2rem', borderRadius: '12px', border: '1px solid #222'}}>
              <p style={{marginBottom: '1rem'}}>
                📧 Email: <a href="mailto:soporte@levelupgamer.cl" style={{color: '#1E90FF'}}>soporte@levelupgamer.cl</a>
              </p>
              <p style={{marginBottom: '1rem'}}>
                📱 WhatsApp: <a href="https://wa.me/56912345678" target="_blank" rel="noopener noreferrer" style={{color: '#39FF14'}}>+56 9 1234 5678</a>
              </p>
              <p style={{marginBottom: '1rem'}}>
                🕐 Horario de atención: Lunes a Viernes, 9:00 - 18:00 hrs
              </p>
              
              <a 
                href="https://wa.me/56912345678" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{
                  display: 'inline-block', 
                  background: '#25D366', 
                  color: 'white', 
                  padding: '0.8rem 1.5rem', 
                  borderRadius: '8px', 
                  textDecoration: 'none', 
                  fontWeight: 'bold', 
                  marginTop: '1rem'
                }}
              >
                💬 Chat con Soporte Técnico
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Home;