import React from 'react';
import home from '../images/house.svg';
import return2 from '../images/return2.png';
import '../styles/HomeAndReturn1.css';

function HomeAndReturn() {
  return (
    <div className="homeAndReturn-footer-container1">
      <div className="homeAndReturn-footer1">
        <div>
          <a
            href="/comidas"
          >
            <img className="home-icon1" src={ home } alt="drink icon" />
          </a>
        </div>
        <div>
          <button
            type="button"
            className="return-btn1"
            onClick={ () => window.history.back() }
          >
            <img className="return-icon1" src={ return2 } alt="drink icon" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default HomeAndReturn;
