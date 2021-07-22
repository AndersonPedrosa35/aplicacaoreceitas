import React from 'react';
import drinkIcon from '../images/drinkIcon.svg';
import exploreIcon from '../images/exploreIcon.svg';
import mealIcon from '../images/mealIcon.svg';
import '../styles/Footer.css';

function Footer() {
  return (
    <div data-testid="footer" className="footer-container">
      <div className="footer">
        <div>
          <a
            href="/bebidas"
          >
            <img
              className="drink-icon"
              data-testid="drinks-bottom-btn"
              src={ drinkIcon }
              alt="drink icon"
            />
          </a>
        </div>
        <div>
          <a
            href="/explorar"
          >
            <img
              className="explore-icon"
              data-testid="explore-bottom-btn"
              src={ exploreIcon }
              alt="drink icon"
            />
          </a>
        </div>
        <div>
          <a
            href="/comidas"
          >
            <img
              className="food-icon"
              data-testid="food-bottom-btn"
              src={ mealIcon }
              alt="drink icon"
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
