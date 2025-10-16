import React from "react";
// Datos de productos
export const products = [
  {
    id: '1',
    nombre: 'Catan',
    precio: 29990,
    descripcion: 'Un clásico juego de estrategia para 3-4 jugadores.',
    imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVZG1G_ZdkpPVHE9O8kqSNWPRHjKC3Vz9Sag&s',
    categoria: 'juegos-mesa',
    codigo: 'JM001',
    stock: 15,
    destacado: true
  },
  {
    id: '2',
    nombre: 'Carcassonne',
    precio: 24990,
    descripcion: 'Juego de fichas y construcción de paisajes medievales.',
    imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUNb5P5Cj9UCEVmLua1VI7Z81P79V4DtMu0Q&s',
    categoria: 'juegos-mesa',
    codigo: 'JM002',
    stock: 10,
    destacado: true
  },
  {
    id: '3',
    nombre: 'PlayStation 5',
    precio: 549990,
    descripcion: 'Consola de nueva generación con gráficos impresionantes.',
    imagen: 'https://gsmpro.cl/cdn/shop/articles/16991bf65a7a52901d78b55fa36bddc8.jpg?v=1737343320',
    categoria: 'consolas',
    codigo: 'CO001',
    stock: 5,
    destacado: true
  },
  {
    id: '4',
    nombre: 'PC Gamer ASUS ROG Strix',
    precio: 1299990,
    descripcion: 'Potente equipo para los gamers más exigentes.',
    imagen: 'https://dlcdnwebimgs.asus.com/files/media/6C1CAB30-D5C6-4D6E-90DC-B6A088360E12/V1/img/frame/01.jpg',
    categoria: 'computadores',
    codigo: 'CG001',
    stock: 3,
    destacado: false
  },
  {
    id: '5',
    nombre: 'Silla Gamer Secretlab Titan',
    precio: 349990,
    descripcion: 'Ergonómica, cómoda y ajustable para largas sesiones de juego.',
    imagen: 'https://m.media-amazon.com/images/I/51ajrSvAdiL.jpg',
    categoria: 'sillas',
    codigo: 'SG001',
    stock: 8,
    destacado: true
  },
  {
    id: '6',
    nombre: 'Mouse Gamer Logitech G502 HERO',
    precio: 49990,
    descripcion: 'Sensor de alta precisión y botones personalizables.',
    imagen: 'https://m.media-amazon.com/images/I/61mpMH5TzkL._AC_UF894,1000_QL80_.jpg',
    categoria: 'mouse',
    codigo: 'MS001',
    stock: 20,
    destacado: false
  },
  {
    id: '7',
    nombre: 'Mousepad Razer Goliathus Extended Chroma',
    precio: 29990,
    descripcion: 'Área de juego amplia con iluminación RGB personalizable.',
    imagen: 'https://assets2.razerzone.com/images/pnx.assets/f024c732d60734e43b0c95945683c3cc/razer-goliathus-extended-chroma-size.jpg',
    categoria: 'mousepad',
    codigo: 'MP001',
    stock: 25,
    destacado: false
  }
];

// Categorías disponibles
export const categories = [
  { value: 'todas', label: 'Todas las categorías' },
  { value: 'juegos-mesa', label: 'Juegos de Mesa' },
  { value: 'accesorios', label: 'Accesorios' },
  { value: 'consolas', label: 'Consolas' },
  { value: 'computadores', label: 'Computadores Gamers' },
  { value: 'sillas', label: 'Sillas Gamers' },
  { value: 'mouse', label: 'Mouse' },
  { value: 'mousepad', label: 'Mousepad' },
  { value: 'poleras', label: 'Poleras Personalizadas' },
  { value: 'polerones', label: 'Polerones Gamers' }
];

// Rangos de precio
export const priceRanges = [
  { value: 'todos', label: 'Todos los precios' },
  { value: 'bajo', label: 'Menos de $50.000' },
  { value: 'medio', label: '$50.000 - $200.000' },
  { value: 'alto', label: 'Más de $200.000' }
];

// Función para formatear precios
export const formatPrice = (price) => {
  return `$${price.toLocaleString('es-CL')} CLP`;
};

// Función para filtrar productos
export const filterProducts = (products, filters) => {
  const { searchTerm, category, priceRange } = filters;
  
  return products.filter(product => {
    // Filtro por búsqueda
    const matchesSearch = !searchTerm || 
      product.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.descripcion.toLowerCase().includes(searchTerm.toLowerCase());
    
    // Filtro por categoría
    const matchesCategory = category === 'todas' || product.categoria === category;
    
    // Filtro por precio
    let matchesPrice = true;
    if (priceRange === 'bajo') matchesPrice = product.precio < 50000;
    if (priceRange === 'medio') matchesPrice = product.precio >= 50000 && product.precio <= 200000;
    if (priceRange === 'alto') matchesPrice = product.precio > 200000;
    
    return matchesSearch && matchesCategory && matchesPrice;
  });
};