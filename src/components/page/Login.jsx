import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });

  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState({ text: '', type: '' });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value
    }));
    
    // Limpiar errores cuando el usuario empiece a escribir
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

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

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsLoading(true);
    setMessage({ text: '', type: '' });

    try {
      // Simular una llamada a la API
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Aquí iría la lógica real de autenticación
      console.log('Datos de login:', formData);
      
      setMessage({ 
        text: '¡Inicio de sesión exitoso! Redirigiendo...', 
        type: 'success' 
      });
      
      // Aquí iría la redirección después del login exitoso
      // navigate('/dashboard');
      
    } catch (error) {
      setMessage({ 
        text: 'Error al iniciar sesión. Verifica tus credenciales.', 
        type: 'error' 
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="login-page">
      {/* Fondo animado */}
      <div className="animated-bg"></div>

      {/* Contenedor principal del login */}
      <div className="login-container">
        
        {/* Logo y título */}
        <div className="login-logo">
          <i className="fas fa-gamepad logo-icon"></i>
          <h1 className="login-title">LEVEL-UP GAMER</h1>
          <p className="login-subtitle">Accede a tu cuenta gamer</p>
        </div>

        {/* Mensajes de estado */}
        {message.text && (
          <div id="message" className={`message ${message.type}`}>
            {message.text}
          </div>
        )}

        {/* Formulario de login */}
        <form className="login-form" onSubmit={handleSubmit}>
          
          {/* Campo email */}
          <div className="form-group">
            <label className="form-label" htmlFor="email">Email</label>
            <div className="input-container">
              <input 
                type="email" 
                id="email" 
                name="email"
                className={`form-input ${errors.email ? 'error' : ''}`}
                placeholder="tu@email.com" 
                value={formData.email}
                onChange={handleChange}
                required
                autoComplete="email"
                disabled={isLoading}
              />
              <i className="fas fa-envelope input-icon"></i>
            </div>
            {errors.email && <span className="error-message">{errors.email}</span>}
          </div>

          {/* Campo contraseña */}
          <div className="form-group">
            <label className="form-label" htmlFor="password">Contraseña</label>
            <div className="input-container">
              <input 
                type="password" 
                id="password" 
                name="password"
                className={`form-input ${errors.password ? 'error' : ''}`}
                placeholder="Tu contraseña" 
                value={formData.password}
                onChange={handleChange}
                required
                autoComplete="current-password"
                disabled={isLoading}
              />
              <i className="fas fa-lock input-icon"></i>
            </div>
            {errors.password && <span className="error-message">{errors.password}</span>}
          </div>

          {/* Recordarme y olvidé contraseña */}
          <div className="remember-container">
            <div className="checkbox-group">
              <div className="custom-checkbox">
                <input 
                  type="checkbox" 
                  id="rememberMe" 
                  name="rememberMe"
                  checked={formData.rememberMe}
                  onChange={handleChange}
                  disabled={isLoading}
                />
                <span className="checkmark"></span>
              </div>
              <label className="checkbox-label" htmlFor="rememberMe">Recordarme</label>
            </div>
            <a href="#" className="forgot-password">¿Olvidaste tu contraseña?</a>
          </div>

          {/* Botón de login */}
          <button 
            type="submit" 
            className="login-button" 
            id="loginBtn"
            disabled={isLoading}
          >
            {isLoading ? (
              <div className="loading"></div>
            ) : (
              <>
                <i className="fas fa-sign-in-alt"></i>
                <span>Iniciar Sesión</span>
              </>
            )}
          </button>
        </form>

        {/* Enlace a registro */}
        <div className="register-link">
          <p className="muted">
            ¿Aún no tienes cuenta?
            <Link to="/registro" style={{marginLeft: '5px'}}>
              <strong>¡Únete a Level-Up Gamer!</strong>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;