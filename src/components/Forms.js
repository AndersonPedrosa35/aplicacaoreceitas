import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { Context } from '../context/ContextForm';
import cook from '../images/cook.png';
import '../styles/Form.css';

function Forms() {
  const history = useHistory();
  const { email, setEmail, pass, setPass } = useContext(Context);
  const nameLength = 6;

  function submit(ev) {
    ev.preventDefault();

    if (localStorage.getItem('favoriteRecipes') === null) {
      const Favorite = [];
      localStorage.setItem('favoriteRecipes', JSON.stringify(Favorite));
    }
    if (localStorage.getItem('inProgressRecipes') === null) {
      const inProgressRecipes = {
        meals: {
        },
        cocktails: {
        },
      };
      localStorage.setItem('inProgressRecipes', JSON.stringify(inProgressRecipes));
    }
    if (localStorage.getItem('doneRecipes') === null) {
      const done = [];
      localStorage.setItem('doneRecipes', JSON.stringify(done));
    }

    localStorage.setItem('mealsToken', '1');
    localStorage.setItem('cocktailsToken', '1');
    localStorage.setItem('user', JSON.stringify({ email }));

    history.push('/comidas');
  }

  return (
    <form className="login" onSubmit={ submit }>
      <div className="login-inputAndBtn-container">
        <img src={ cook } alt="cook hat" className="logo" />
        <label htmlFor="email">
          <h5>Email</h5>
          <input
            value={ email }
            className="login-input"
            autoComplete="off"
            placeholder="Digite seu email"
            onChange={ ({ target }) => setEmail(target.value) }
            type="email"
            id="email"
            data-testid="email-input"
          />
        </label>
        <label htmlFor="password">
          <h5>Senha</h5>
          <input
            value={ pass }
            className="login-input"
            placeholder="Digite sua senha"
            onChange={ ({ target }) => setPass(target.value) }
            type="password"
            id="password"
            data-testid="password-input"
          />
        </label>
        <Button
          className="login-btn"
          type="submit"
          variant="info"
          data-testid="login-submit-btn"
          disabled={
            !(/^[^\s@]+@[^\s@]+\.[^\s@]+$/).test(email)
          || pass.length <= nameLength
          }
        >
          Entrar
        </Button>
      </div>
    </form>
  );
}

export default Forms;
