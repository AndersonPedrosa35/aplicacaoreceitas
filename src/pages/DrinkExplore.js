import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { requestRandomDrink } from '../services/api';
import Footer from '../components/Footer';
import Header from '../components/Header';
import '../styles/DrinkAndFoodExplore(page).css';

function DrinkExplore() {
  const [item, setItem] = useState([]);

  useEffect(() => {
    const request = async () => {
      const result = await requestRandomDrink();
      setItem(result);
    };
    request();
  }, []);

  if (item === undefined || item === null) return null;
  return (
    <div>
      <Header title="Explorar Bebidas" />
      <div className="drinkAndFood-exploreButtons-container">
        <div>
          <Link to="/explorar/bebidas/ingredientes">
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
          {item.map((subItem, index) => (
            <Link key={ index } to={ `/bebidas/${subItem.idDrink}` }>
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

export default DrinkExplore;
