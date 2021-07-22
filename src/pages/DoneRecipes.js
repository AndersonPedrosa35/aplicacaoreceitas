import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import DoneRecipe from '../components/DoneRecipe';
import Header from '../components/Header';
import HomeAndReturn1 from '../components/HomeAndReturn1';
import '../styles/DoneRecipes(page).css';

function DoneRecipes() {
  const doneRecipes = localStorage.getItem('doneRecipes');

  const [filterBy, setfilterBy] = useState('nenhum');
  const recipesToMap = (doneRecipes === null ? [] : JSON.parse(doneRecipes))
    .filter((recipe) => {
      if (filterBy === 'nenhum') return true;
      return recipe.type === filterBy;
    });
  useEffect(() => {}, [filterBy]);

  return (
    <div className="done-container-all">
      <Header title="Receitas Feitas" />
      <div className="done-btnContainer">
        <Button
          variant="info"
          type="button"
          className="done-category-btn"
          data-testid="filter-by-all-btn"
          onClick={ () => setfilterBy('nenhum') }
        >
          All
        </Button>
        <Button
          variant="info"
          type="button"
          className="done-category-btn"
          data-testid="filter-by-food-btn"
          onClick={ () => setfilterBy('comida') }
        >
          Food
        </Button>
        <Button
          variant="info"
          type="button"
          className="done-category-btn"
          data-testid="filter-by-drink-btn"
          onClick={ () => setfilterBy('bebida') }
        >
          Drinks
        </Button>
      </div>
      {recipesToMap.length === 0
      && <h5 className="no-done-text">Não há receitas feitas</h5>}
      {recipesToMap.map((recipe, index) => (
        <DoneRecipe
          key={ index }
          recipe={ recipe }
          index={ index }
        />))}
      <HomeAndReturn1 />
    </div>
  );
}

export default DoneRecipes;
