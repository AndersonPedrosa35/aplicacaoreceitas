import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { Context } from '../context/ContextForm';
import HomeAndReturn1 from '../components/HomeAndReturn1';
import Header from '../components/Header';
import Icons from '../components/Icons';
import '../styles/StarRecipes(page).css';

function StarRecipes() {
  const favorite = JSON.parse(window.localStorage.getItem('favoriteRecipes'));
  const [first, setFirst] = useState(false);
  const { search, setSearch } = useContext(Context);

  if (!first) {
    setSearch(JSON.parse(window.localStorage.getItem('favoriteRecipes')));
    setFirst(true);
  }
  function All() {
    setSearch(favorite);
  }

  function Food() {
    const searchFood = favorite.filter((item) => item.type === 'comida');
    setSearch(searchFood);
  }

  function Drink() {
    const searchDrink = favorite.filter((item) => item.type === 'bebida');
    setSearch(searchDrink);
  }

  if (favorite === null) return null;

  return (
    <div>
      <Header title="Receitas Favoritas" />
      <div className="star-btnContainer">
        <Button
          variant="info"
          type="button"
          onClick={ () => All() }
          className="star-categoryBtn"
          data-testid="filter-by-all-btn"
        >
          All
        </Button>
        <Button
          variant="info"
          type="button"
          onClick={ () => Food() }
          className="star-categoryBtn"
          data-testid="filter-by-food-btn"
        >
          Food
        </Button>
        <Button
          variant="info"
          type="button"
          onClick={ () => Drink() }
          className="star-categoryBtn"
          data-testid="filter-by-drink-btn"
        >
          Drinks
        </Button>
      </div>
      <div className="star-recipes-container">
        {favorite.length === 0 || search.length === 0
          ? <h5 className="noStar-with-header">Não há receitas favoritadas</h5>
          : search.map((recipe, index) => (
            <div
              key={ recipe.id }
              data-testid={ `${index}-recipe-card` }
              className="star-card"
            >
              <div className="star-img-container">
                <Link
                  to={ `/${recipe
                    .type === 'comida' ? 'comidas' : 'bebidas'}/${recipe.id}` }
                >
                  <img
                    className="star-img"
                    data-testid={ `${index}-horizontal-image` }
                    src={ recipe.image }
                    alt={ recipe.image }
                  />
                </Link>
              </div>
              <div className="star-cardBody">
                <p
                  className="star-category"
                  data-testid={ `${index}-horizontal-top-text` }
                >
                  {recipe.type === 'comida'
                    ? `${recipe.area} - ${recipe.category}` : recipe.alcoholicOrNot}
                </p>
                <Link
                  to={ `/${recipe
                    .type === 'comida' ? 'comidas' : 'bebidas'}/${recipe.id}` }
                >
                  <h5
                    className="star-cardTitle"
                    data-testid={ `${index}-horizontal-name` }
                  >
                    {recipe.name}
                  </h5>
                </Link>
                <Icons fromHorizontal id={ index } code={ recipe } />
              </div>
            </div>
          ))}
      </div>
      <HomeAndReturn1 />
    </div>
  );
}

export default StarRecipes;
