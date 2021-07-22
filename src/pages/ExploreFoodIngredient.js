import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import { exploreIngredientsFood } from '../services/api';
import { foodByIngredient } from '../services/searchApi';
import '../styles/ExploreDrinkAndFoodIngredient(page).css';
import { Context } from '../context/ContextForm';
import Loading from '../components/Loading';
import Footer from '../components/Footer';
import Header from '../components/Header';

function ExploreFoodIngredient() {
  const { firstFoodIngredients,
    setFirstFoodIngredients,
    setFoodPerIngredient,
    changeFood,
    setChangeFood } = useContext(Context);
  const [loading, setLoading] = useState(null);
  const numOfIngredients = 12;

  useEffect(() => {
    setLoading(true);
    const fetchFoodIngredients = async () => {
      const meals = await exploreIngredientsFood();
      setFirstFoodIngredients(meals.slice(0, numOfIngredients));
      setLoading(false);
    };
    fetchFoodIngredients();
  }, [setFirstFoodIngredients]);

  async function handleClick({ target }) {
    setChangeFood(!changeFood);
    const { meals } = await foodByIngredient(target.alt);
    setFoodPerIngredient(meals.slice(0, numOfIngredients));
  }

  if (loading) return <Loading />;
  return (
    <div>
      <Header title="Explorar Ingredientes" />
      <div className="ingredient-container">
        {firstFoodIngredients.map((ingredient, index) => (
          <Link
            to="/comidas"
            key={ index }
          >
            <Card
              bg="info"
              onClick={ handleClick }
              data-testid={ `${index}-ingredient-card` }
              className="card"
            >
              <div className="background-card">
                <Card.Img
                  data-testid={ `${index}-card-img` }
                  src={ `https://www.themealdb.com/images/ingredients/${ingredient.strIngredient}-Small.png` }
                  alt={ ingredient.strIngredient }
                />
              </div>
              <Card.Body>
                <div className="container-title">
                  <Card.Title
                    className="ingredientCard-title"
                    data-testid={ `${index}-card-name` }
                  >
                    {ingredient.strIngredient}
                  </Card.Title>
                </div>
              </Card.Body>
            </Card>
          </Link>
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default ExploreFoodIngredient;
