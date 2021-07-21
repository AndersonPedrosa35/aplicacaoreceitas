import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import Footer from '../components/Footer';
import Header from '../components/Header';
import '../styles/Explore(page).css';
import food from '../videos/food.mp4';
import drink from '../videos/drink.mp4';

function Explore() {
  return (
    <div className="explore-container-all">
      <Header title="Explorar" />
      <div className="explore-container">
        <div className="explore-videoAndBtn">
          <video
            src={ food }
            type="video/mp4"
            className="video"
            loop
            autoPlay
          >
            <track kind="captions" />
          </video>
          <Link to="/explorar/comidas" className="explore-food-container">
            <Button
              variant="info"
              type="button"
              data-testid="explore-food"
              className="explore-btn"
            >
              Explorar Comidas
            </Button>
          </Link>
        </div>
        <div className="explore-videoAndBtn">
          <video
            src={ drink }
            type="video/mp4"
            className="video"
            loop
            autoPlay
          >
            <track kind="captions" />
          </video>
          <Link to="/explorar/bebidas" className="explore-drink-container">
            <Button
              variant="info"
              type="button"
              data-testid="explore-drinks"
              className="explore-btn"
            >
              Explorar Bebidas
            </Button>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Explore;
