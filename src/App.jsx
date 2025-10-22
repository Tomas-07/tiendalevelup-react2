import { useState } from 'react'

import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { Link } from 'react-router-dom'
import Carrito from './components/page/Carrito';


function App() {
  return (
    <BrowserRouter>
      <Router>
        <div className="App">
          <Routes>
            <Route path='/' element={<Home/>} />
            
            <Route path="/carrito" element={<Carrito/>} />
            
          </Routes>
        </div>
      </Router>
    </BrowserRouter>
    
    
  );
}

export default App;