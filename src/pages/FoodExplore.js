import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { requestRandomMeal } from '../services/api';
import Footer from '../components/Footer';
import Header from '../components/Header';
import '../styles/DrinkAndFoodExplore(page).css';

function FoodExplore() {
  const [item, setItem] = useState([]);

  useEffect(() => {
    const request = async () => {
      const result = await requestRandomMeal();
      setItem(result);
    };
    request();
  }, []);

  if (item === undefined || item === null) return null;
  return (
    <div>
      <Header title="Explorar Comidas" />
      <div className="drinkAndFood-exploreButtons-container">
        <div>
          <Link to="/explorar/comidas/ingredientes">
            <Button
              variant="info"
              className="drinkAndFood-exploreButtons"
              type="button"
              data-testid="explore-by-ingredient"
            >
              Por Ingredientes
            </Button>
          </Link>
        </div>
        <div>
          <Link to="/explorar/comidas/area">
            <Button
              variant="info"
              className="drinkAndFood-exploreButtons"
              type="button"
              data-testid="explore-by-area"
            >
              Por Local de Origem
            </Button>
          </Link>
        </div>
        <div>
          {item.map((subItem, index) => (
            <Link key={ index } to={ `/comidas/${subItem.idMeal}` }>
              <Button
                variant="info"
                type="button"
                className="drinkAndFood-exploreButtons"
                data-testid="explore-surprise"
              >
                Me Surpreenda!
              </Button>
            </Link>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default FoodExplore;
