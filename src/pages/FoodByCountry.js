import React, { useEffect, useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/FoodByCountry(page).css';
import { Card } from 'react-bootstrap';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Loading from '../components/Loading';
import { Context } from '../context/ContextForm';
import { requestAreas, requestMeal, requestMealByAreas } from '../services/api';

function FoodByCountry() {
  const { setFirstMeals, firstMeals, area, setArea } = useContext(Context);
  const [loading, setLoading] = useState(null);
  const numOfMeals = 12;

  useEffect(() => {
    setLoading(true);
    const fetchMeals = async () => {
      const meals = await requestMeal();
      const areas = await requestAreas();
      setFirstMeals(meals.slice(0, numOfMeals));
      setArea(areas);
      setLoading(false);
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

  if (loading) return <Loading />;
  return (
    <div>
      <Header title="Explorar Origem" />
      <div className="country-container">
        <select
          className="country-select"
          data-testid="explore-by-area-dropdown"
          onChange={ handleClick }
        >
          <option data-testid="All-option">All</option>
          {area.map((item, index) => (
            <option
              data-testid={ `${item.strArea}-option` }
              key={ index }
            >
              { item.strArea }
            </option>
          ))}
        </select>
      </div>
      <div className="country-card-container">
        {firstMeals.filter((_, index) => index < numOfMeals).map((meal, index) => (
          <Link
            to={ `/comidas/${meal.idMeal}` }
            key={ meal.strMeal }
          >
            <Card
              bg="info"
              data-testid={ `${index}-recipe-card` }
              className="card"
            >
              <Card.Img
                data-testid={ `${index}-card-img` }
                className="cardImg"
                src={ meal.strMealThumb }
                alt={ meal.strMeal }
              />
              <Card.Body>
                <Card.Title
                  className="countryCard-title"
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
