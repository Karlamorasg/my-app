import React from 'react';

const Login = () => {
  return (
    <div className='login'>
        <div className='login__login-form'>
          <form>
            <input type='text' placeholder='Nombre de usuario' />
            <input type='password'  placeholder='Contraseña' />
            <button type='submit'>Iniciar Sesión</button>
          </form>
        </div>
    </div>
  );
}

export default Login;
