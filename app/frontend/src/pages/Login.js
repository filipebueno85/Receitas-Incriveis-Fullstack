import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import vetablesLogin from '../assets/vegetables2.png';
import myContext from '../context/myContext';
import useLocalStorage from '../hooks/useLocalStorage';

function Login() {
  const [disabled, setDisabled] = useState(true);
  const [isRegistering, setIsRegistering] = useState(false);
  const [registerSuccess, setRegisterSuccess] = useState(false);
  const { email, setEmail, password, setPassword } = useContext(myContext);
  const [, setEmailStorage] = useLocalStorage('user', '');
  const history = useHistory();

  const handleValidate = () => {
    const seis = 6;

    const emailRegex = /^[a-z0-9.-_]+@[a-z0-9]+\.[a-z]+\)?$/i.test(email);
    if (emailRegex && password.length >= seis) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };

  const handleRegister = async () => {
    try {
      const response = await fetch('http://localhost:3001/users/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
      if (response.ok) {
        setEmailStorage(email);
        setRegisterSuccess(true);
      } else {
        console.log(data.message);
      }
    } catch (error) {
      console.log('Error:', error);
    }
  };

  const handleClick = async () => {
    if (isRegistering) {
      handleRegister();
    } else {
      try {
        const response = await fetch('http://localhost:3001/users/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email, password }),
        });
        const data = await response.json();
        if (response.ok) {
          setEmailStorage(email);
          history.push('/meals');
        } else {
          console.log(data.message);
        }
      } catch (error) {
        console.log('Error:', error);
      }
    }
  };

  const toggleRegisterMode = () => {
    setIsRegistering(!isRegistering);
  };

  if (registerSuccess) {
    return (
      <div className="login-container">
        <h1>Registro bem-sucedido!</h1>
        <p>Você foi registrado com sucesso. Agora você pode fazer login.</p>
        <button onClick={ () => {
          console.log(history);
          history.push('/');
          } 
        } >Login</button>
      </div>
    );
  }

  return (
    <div className="login-container">
      <form className="login-page">
        <div>
          <h1>App de Receitas</h1>
        </div>
        <input
          type="email"
          data-testid="email-input"
          placeholder="Email"
          value={ email }
          onChange={ ({ target }) => {
            setEmail(target.value);
            handleValidate();
          } }
        />
        <input
          type="password"
          placeholder="Password"
          data-testid="password-input"
          value={ password }
          onChange={ ({ target }) => {
            setPassword(target.value);
            handleValidate();
          } }
        />
        <button
          type="button"
          data-testid="login-submit-btn"
          disabled={ disabled }
          onClick={ handleClick }
        >
          {isRegistering ? 'Registrar' : 'Entrar'}
        </button>
        <img src={ vetablesLogin } alt="" />
        <p>
          {isRegistering ? 'Já tem uma conta?' : 'Não tem uma conta?'}
          <button type="button" onClick={ toggleRegisterMode }>
            {isRegistering ? 'Fazer Login' : 'Registrar'}
          </button>
        </p>
      </form>
    </div>
  );
}

export default Login;
