import React, { useEffect, useState } from 'react';
import { Carousel, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { requestDrink } from '../services/api';
import '../styles/Recomendations.css';

function RecomendationsDrink() {
  const [recomendationsDrink, setRecomendationsDrink] = useState([]);
  const numOfRecomendationsDrink = 6;
  const four = 4;
  const six = 6;

  useEffect(() => {
    const fetchRecomendationDrink = async () => {
      const response = await requestDrink();
      return setRecomendationsDrink(response.slice(0, numOfRecomendationsDrink));
    };
    fetchRecomendationDrink();
  }, []);

  return (
    <div>
      <Carousel fade interval={ null } controls indicators={ false }>
        <Carousel.Item>
          <div className="recomendations-card-container">
            {recomendationsDrink.slice(0, 2).map((drink, index) => (
              <Link
                to={ `/bebidas/${drink.idDrink}` }
                key={ drink.strDrink }
              >
                <Card
                  bg="info"
                  data-testid={ `${index}-recomendation-card` }
                >
                  <img
                    data-testid={ `${index}-card-img` }
                    src={ drink.strDrinkThumb }
                    alt={ drink.strDrink }
                  />
                  <span className="recomendation-title">{drink.strAlcoholic}</span>
                  <Card.Body>
                    <Card.Title
                      className="recomendation-title"
                      data-testid={ `${index}-recomendation-title` }
                    >
                      {drink.strDrink}
                    </Card.Title>
                  </Card.Body>
                </Card>
              </Link>
            ))}
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="recomendations-card-container">
            {recomendationsDrink.slice(2, four).map((drink, index) => (
              <Link to={ `/bebidas/${drink.idDrink}` } key={ drink.strDrink }>
                <Card
                  bg="info"
                  data-testid={ `${index + 2}-recomendation-card` }
                >
                  <img
                    data-testid={ `${index + 2}-card-img` }
                    src={ drink.strDrinkThumb }
                    alt={ drink.strDrink }
                  />
                  <span className="recomendation-title">{drink.strAlcoholic}</span>
                  <Card.Body>
                    <Card.Title
                      data-testid={ `${index + 2}-recomendation-title` }
                      className="recomendation-title"
                    >
                      {drink.strDrink}
                    </Card.Title>
                  </Card.Body>
                </Card>
              </Link>
            ))}
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="recomendations-card-container">
            {recomendationsDrink.slice(four, six).map((drink, index) => (
              <Link to={ `/bebidas/${drink.idDrink}` } key={ drink.strDrink }>
                <Card
                  bg="info"
                  data-testid={ `${index + four}-recomendation-card` }
                >
                  <img
                    data-testid={ `${index + four}-card-img` }
                    src={ drink.strDrinkThumb }
                    alt={ drink.strDrink }
                  />
                  <span className="recomendation-title">{drink.strAlcoholic}</span>
                  <Card.Body>
                    <Card.Title
                      className="recomendation-title"
                      data-testid={ `${index + four}-recomendation-title` }
                    >
                      {drink.strDrink}
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

export default React.memo(RecomendationsDrink);
