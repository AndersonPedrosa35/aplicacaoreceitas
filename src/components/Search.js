import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { Context } from '../context/ContextForm';
import '../styles/Search.css';
import searchByNameFood,
{ searchByFirstLetterFood, searchByIngredientsFood, searchByFirstLetterDrink,
  searchByIngredientsDrink, searchByNameDrink } from '../services/searchApi';

function Search() {
  const { radio,
    setRadio,
    inputSearch,
    setInputSearch,
    setFirstMeals,
    setFirstDrinks } = useContext(Context);
  const history = useHistory();

  function invokeAlert(fn, message) {
    return fn(message);
  }

  const ONE = 1;
  const DOZE = 12;

  async function atalhoFunctionFood(func, element) {
    const object = await func(element);
    const { meals } = await object;
    if (meals) {
      if (meals.length > DOZE) {
        return setFirstMeals(meals.slice(0, DOZE));
      }
      if (meals.length === ONE) {
        const mealId = meals[0].idMeal;
        return history.push(`/comidas/${mealId}`);
      }
      if (meals.length > 0) {
        return setFirstMeals(meals);
      }
    }
    return invokeAlert(alert,
      'Sinto muito, não encontramos nenhuma receita para esses filtros.');
  }

  async function atalhoFunctionDrink(func, element) {
    const object = await func(element);
    const { drinks } = await object;
    if (drinks) {
      if (drinks.length > DOZE) {
        return setFirstDrinks(drinks.slice(0, DOZE));
      }
      if (drinks.length === ONE) {
        const drinkId = drinks[0].idDrink;
        return history.push(`bebidas/${drinkId}`);
      }
      if (drinks.length > 0) {
        return setFirstDrinks(drinks);
      }
    }
    return invokeAlert(alert,
      'Sinto muito, não encontramos nenhuma receita para esses filtros.');
  }

  async function condicao(funct1, funct2, funct3, func) {
    if (radio === 'Ingrediente') {
      return func(funct1, inputSearch);
    } if (radio === 'Nome') {
      return func(funct2, inputSearch);
    } if (radio === 'Primeira letra') {
      const object = await inputSearch.length === ONE
        ? func(funct3, inputSearch)
        : invokeAlert(alert, 'Sua busca deve conter somente 1 (um) caracter');
      return object;
    }
  }

  function submit(ev) {
    ev.preventDefault();

    if (history.location.pathname === '/comidas') {
      return condicao(searchByIngredientsFood,
        searchByNameFood, searchByFirstLetterFood, atalhoFunctionFood);
    }

    if (history.location.pathname === '/bebidas') {
      return condicao(searchByIngredientsDrink, searchByNameDrink,
        searchByFirstLetterDrink, atalhoFunctionDrink);
    }
  }

  return (
    <form onSubmit={ submit } className="search-container">
      <div className="search-input-container">
        <label htmlFor="search">
          <input
            type="text"
            id="search"
            placeholder="Digite aqui o que procura..."
            className="search-input"
            autoComplete="off"
            value={ inputSearch }
            onChange={ ({ target }) => setInputSearch(target.value) }
            data-testid="search-input"
          />
        </label>
      </div>
      <div className="search-radios-container">
        <div>
          <label htmlFor="ingredients">
            Ingrediente
            <input
              name="radio"
              type="radio"
              value="Ingrediente"
              id="ingredients"
              className="ingredients"
              onChange={ ({ target }) => setRadio(target.value) }
              data-testid="ingredient-search-radio"
            />
          </label>
        </div>
        <div>
          <label htmlFor="name">
            Nome
            <input
              name="radio"
              type="radio"
              value="Nome"
              id="name"
              className="name"
              onChange={ ({ target }) => setRadio(target.value) }
              data-testid="name-search-radio"
            />
          </label>
        </div>
        <div>
          <label htmlFor="first-letter">
            Primeira letra
            <input
              name="radio"
              type="radio"
              value="Primeira letra"
              id="first-letter"
              className="first-letter"
              onChange={ ({ target }) => setRadio(target.value) }
              data-testid="first-letter-search-radio"
            />
          </label>
        </div>
      </div>
      <div className="search-btn-container">
        <Button
          variant="outline-dark"
          type="submit"
          className="search-btn"
          data-testid="exec-search-btn"
        >
          Buscar
        </Button>
      </div>
    </form>
  );
}

export default Search;
