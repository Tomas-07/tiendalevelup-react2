import { useState } from 'react'

import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/page/Home'
import { Link } from 'react-router-dom'
import Cart from './components/page/Carrito'
import Carrito from './components/page/Carrito'

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/carrito" element={<Cart />} />
            <Route path="/carrito" element={<Carrito />} />
            
          </Routes>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;