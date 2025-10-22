import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './Registro.css';
import Header from '../organisms/Header';
import Footer from '../organisms/Footer';

const Registro = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    password: '',
    mayorEdad: false,
    codigoReferido: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.nombre.trim()) {
      newErrors.nombre = 'El nombre completo es requerido';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'El correo electrónico es requerido';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'El formato del correo no es válido';
    }

    if (!formData.password) {
      newErrors.password = 'La contraseña es requerida';
    } else if (formData.password.length < 6) {
      newErrors.password = 'La contraseña debe tener al menos 6 caracteres';
    }

    if (!formData.mayorEdad) {
      newErrors.mayorEdad = 'Debes ser mayor de 18 años para registrarte';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      // Aquí iría la lógica para enviar los datos al servidor
      console.log('Datos del formulario:', formData);
      alert('¡Registro exitoso! Bienvenido a Level-Up Gamer');
      // Redirección o limpieza del formulario
      setFormData({
        nombre: '',
        email: '',
        password: '',
        mayorEdad: false,
        codigoReferido: ''
      });
    }
  };

  return (
    <div className="registro">
      <Header />
      
      <main className="wrap">
        <section className="auth-box">
          <h2>Crear nueva cuenta</h2>

          <form className="form" onSubmit={handleSubmit} noValidate>
            <div className="form-group">
              <label htmlFor="reg-nombre">Nombre completo</label>
              <input 
                id="reg-nombre"
                name="nombre"
                type="text" 
                placeholder="Tu nombre y apellido" 
                value={formData.nombre}
                onChange={handleChange}
                className={errors.nombre ? 'error' : ''}
                required 
              />
              {errors.nombre && <span className="error-message">{errors.nombre}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="reg-email">Correo electrónico</label>
              <input 
                id="reg-email"
                name="email"
                type="email" 
                placeholder="tucorreo@ejemplo.com" 
                value={formData.email}
                onChange={handleChange}
                className={errors.email ? 'error' : ''}
                required 
              />
              {errors.email && <span className="error-message">{errors.email}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="reg-pass">Contraseña</label>
              <input 
                id="reg-pass"
                name="password"
                type="password" 
                placeholder="Mínimo 6 caracteres" 
                value={formData.password}
                onChange={handleChange}
                className={errors.password ? 'error' : ''}
                required 
              />
              {errors.password && <span className="error-message">{errors.password}</span>}
            </div>

            <div className="checkline">
              <input 
                id="reg-18"
                name="mayorEdad"
                type="checkbox" 
                checked={formData.mayorEdad}
                onChange={handleChange}
                className={errors.mayorEdad ? 'error' : ''}
              />
              <label htmlFor="reg-18">Declaro ser mayor de 18 años</label>
              {errors.mayorEdad && <span className="error-message" style={{display: 'block', marginTop: '5px'}}>{errors.mayorEdad}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="reg-ref">Código de referido (opcional)</label>
              <input 
                id="reg-ref"
                name="codigoReferido"
                type="text" 
                placeholder="Ej: AB12CD" 
                value={formData.codigoReferido}
                onChange={handleChange}
              />
            </div>

            <button className="btn" type="submit">Crear cuenta</button>
          </form>

          <p className="muted" style={{marginTop: '1rem'}}>
            ¿Ya tienes una cuenta?
            <Link to="/login" style={{marginLeft: '5px'}}>
              <strong>Log in</strong>
            </Link>
          </p>
        </section>
      </main>

      <Footer/>
    </div>
  );
};

export default Registro;