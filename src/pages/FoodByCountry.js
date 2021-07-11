import React, { useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import '../styles/global.css';
import { Card } from 'react-bootstrap';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Context } from '../context/ContextForm';
import { requestAreas, requestMeal, requestMealByAreas } from '../services/api';

function FoodByCountry() {
  const { setFirstMeals, firstMeals, area, setArea } = useContext(Context);
  const numOfMeals = 12;

  useEffect(() => {
    const fetchMeals = async () => {
      const meals = await requestMeal();
      const areas = await requestAreas();
      setFirstMeals(meals.slice(0, numOfMeals));
      setArea(areas);
    };
    fetchMeals();
  }, [setFirstMeals, setArea]);

  async function handleClick({ target }) {
    if (target.options[target.selectedIndex].text !== 'All') {
      const { value } = target;
      const mealsOfTheArea = await requestMealByAreas(value);
      setFirstMeals(mealsOfTheArea);
    }
    if (target.options[target.selectedIndex].text === 'All') {
      const meals = await requestMeal();
      setFirstMeals(meals.slice(0, numOfMeals));
    }
  }

  return (
    <div>
      <Header title="Explorar Origem" />
      <div className="select-container">
        <select
          className="selectByCountry"
          data-testid="explore-by-area-dropdown"
          onChange={ handleClick }
        >
          <option data-testid="All-option">All</option>
          {area.map((item, index) => (
            <option
              className="countryOption"
              data-testid={ `${item.strArea}-option` }
              key={ index }
            >
              { item.strArea }
            </option>
          ))}
        </select>
      </div>
      <div className="card-container">
        {firstMeals.filter((meal, index) => index < numOfMeals).map((meal, index) => (
          <Link
            to={ `/comidas/${meal.idMeal}` }
            key={ meal.strMeal }
          >
            <Card
              data-testid={ `${index}-recipe-card` }
              className="card"
            >
              <Card.Img
                data-testid={ `${index}-card-img` }
                src={ meal.strMealThumb }
                alt={ meal.strMeal }
              />
              <Card.Body>
                <Card.Title
                  className="cardTitle"
                  data-testid={ `${index}-card-name` }
                >
                  {meal.strMeal}
                </Card.Title>
              </Card.Body>
            </Card>
          </Link>
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default FoodByCountry;
