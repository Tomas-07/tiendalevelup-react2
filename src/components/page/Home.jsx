import React, { useState, useMemo } from 'react';
import Header from '../components/organisms/Header/Header';
import Footer from '../components/organisms/Footer/Footer';
import ProductCard from '../components/molecules/ProductCard/ProductCard';
import ProductFilter from '../components/molecules/ProductFilter/ProductFilter';
import { products, categories, priceRanges, formatPrice, filterProducts } from '../data/products';
import '../App.css';

const Home = () => {
  const [cartCount, setCartCount] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('todas');
  const [selectedPrice, setSelectedPrice] = useState('todos');

  // Filtrar productos usando useMemo para optimización
  const filteredProducts = useMemo(() => {
    const filters = { searchTerm, category: selectedCategory, priceRange: selectedPrice };
    return filterProducts(products, filters);
  }, [searchTerm, selectedCategory, selectedPrice]);

  const handleAddToCart = (product) => {
    setCartCount(prev => prev + 1);
    console.log('Producto agregado al carrito:', product);
    // Aquí podrías agregar lógica para manejar el carrito
  };

  const handleNavClick = (section) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="App">
      <Header 
        cartCount={cartCount} 
        onNavClick={handleNavClick}
      />
      
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
          
          {/* Componente de Filtros */}
          <ProductFilter
            searchTerm={searchTerm}
            selectedCategory={selectedCategory}
            selectedPrice={selectedPrice}
            onSearchChange={setSearchTerm}
            onCategoryChange={setSelectedCategory}
            onPriceChange={setSelectedPrice}
            categories={categories}
            priceRanges={priceRanges}
          />

          {/* Contador de productos */}
          <div style={{ 
            textAlign: 'center', 
            marginBottom: '1rem',
            color: 'var(--light-gray)'
          }}>
            {filteredProducts.length} producto{filteredProducts.length !== 1 ? 's' : ''} encontrado{filteredProducts.length !== 1 ? 's' : ''}
          </div>

          {/* GRID DE PRODUCTOS */}
          <div className="productos">
            {filteredProducts.length > 0 ? (
              filteredProducts.map(product => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onAddToCart={handleAddToCart}
                  formatPrice={formatPrice}
                />
              ))
            ) : (
              <div style={{ 
                gridColumn: '1 / -1', 
                textAlign: 'center', 
                padding: '3rem',
                color: 'var(--muted-gray)'
              }}>
                <h3>No se encontraron productos</h3>
                <p>Intenta con otros filtros de búsqueda</p>
              </div>
            )}
          </div>
        </section>

        {/* Las demás secciones se mantienen igual */}
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

      <Footer />
    </div>
  );
};

export default Home;