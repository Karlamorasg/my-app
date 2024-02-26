import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      credentials.username === "karla" &&
      credentials.password === "sergiogael"
    ) {
      navigate("/dashboard");
    } else {
      console.log("credenciales incorrectas");
    }
  };

  return (
    <div className="login">
      <div className="login__login-form">
        <h5 className="login__login-form__title">Iniciar Sesión</h5>
        <form className="login__login-form__inputs">
          <input
            className="login__login-form__inputs-username"
            name="username"
            type="text"
            placeholder="Nombre de usuario"
            onChange={handleChange}
          />
          <input
            className="login__login-form__inputs-password"
            name="password"
            type="password"
            placeholder="Contraseña"
            onChange={handleChange}
          />

          <button
            className="login__login-form__inputs__button"
            type="submit"
            onClick={handleSubmit}
          >
            Iniciar Sesión
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
