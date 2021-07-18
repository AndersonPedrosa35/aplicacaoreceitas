import React, { useEffect, useState } from 'react';
import { Carousel, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { requestMeal } from '../services/api';
import '../styles/Recomendations.css';

function RecomendationsMeal() {
  const [recomendationsMeal, setRecomendationsMeal] = useState([]);
  const numOfRecomendationsMeal = 6;
  const four = 4;
  const six = 6;

  useEffect(() => {
    const fetchRecomendationMeal = async () => {
      const response = await requestMeal();
      return setRecomendationsMeal(response.slice(0, numOfRecomendationsMeal));
    };
    fetchRecomendationMeal();
  }, []);

  return (
    <div>
      <Carousel fade interval={ null } controls indicators={ false }>
        <Carousel.Item>
          <div className="recomendations-card-container">
            {recomendationsMeal.slice(0, 2).map((meal, index) => (
              <Link to={ `/comidas/${meal.idMeal}` } key={ meal.strMeal }>
                <Card
                  bg="info"
                  data-testid={ `${index}-recomendation-card` }
                >
                  <img
                    data-testid={ `${index}-card-img` }
                    src={ meal.strMealThumb }
                    alt={ meal.strMeal }
                  />
                  <Card.Body>
                    <h5
                      className="recomendation-title"
                      style={ { textDecoration: 'none' } }
                      data-testid={ `${index}-recomendation-title` }
                    >
                      {meal.strMeal}
                    </h5>
                  </Card.Body>
                </Card>
              </Link>
            ))}
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="recomendations-card-container">
            {recomendationsMeal.slice(2, four).map((meal, index) => (
              <Link to={ `/comidas/${meal.idMeal}` } key={ meal.strMeal }>
                <Card
                  bg="info"
                  data-testid={ `${index + 2}-recomendation-card` }
                >
                  <img
                    data-testid={ `${index + 2}-card-img` }
                    src={ meal.strMealThumb }
                    alt={ meal.strMeal }
                  />
                  <Card.Body>
                    <Card.Title
                      data-testid={ `${index + 2}-recomendation-title` }
                      className="recomendation-title"
                    >
                      {meal.strMeal}
                    </Card.Title>
                  </Card.Body>
                </Card>
              </Link>
            ))}
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="recomendations-card-container">
            {recomendationsMeal.slice(four, six).map((meal, index) => (
              <Link to={ `/comidas/${meal.idMeal}` } key={ meal.strMeal }>
                <Card
                  bg="info"
                  data-testid={ `${index + four}-recomendation-card` }
                >
                  <img
                    data-testid={ `${index + four}-card-img` }
                    src={ meal.strMealThumb }
                    alt={ meal.strMeal }
                  />
                  <Card.Body>
                    <Card.Title
                      data-testid={ `${index + four}-recomendation-title` }
                      className="recomendation-title"
                    >
                      {meal.strMeal}
                    </Card.Title>
                  </Card.Body>
                </Card>
              </Link>
            ))}
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default React.memo(RecomendationsMeal);
