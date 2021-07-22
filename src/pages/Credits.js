import React from 'react';
import HomeAndReturn1 from '../components/HomeAndReturn1';
import Abimael from '../images/Abimael.png';
import Anderson from '../images/Anderson.png';
import Andre from '../images/Andre.png';
import Renan from '../images/Renan.png';
import '../styles/Credits(page).css';

function Credits() {
  return (
    <div>
      <div className="credits-container">
        <div>
          <h2 className="credits-title">Desenvolvido por:</h2>
        </div>
        <div className="credits">
          <img className="credits-img" src={ Abimael } alt="Abimael" />
          <h4 className="credits-item"><strong>Abimael Albuquerque</strong></h4>
        </div>
        <div className="credits">
          <h4 className="credits-item"><strong>Anderson Pedrosa</strong></h4>
          <img className="credits-img" src={ Anderson } alt="Anderson" />
        </div>
        <div className="credits">
          <img className="credits-img" src={ Andre } alt="Andre" />
          <h4 className="credits-item"><strong>André Arnoni</strong></h4>
        </div>
        <div className="credits">
          <h4 className="credits-item"><strong>Renan Antunes</strong></h4>
          <img className="credits-img" src={ Renan } alt="Renan" />
        </div>
        <footer className="credits-footer">
          Copyrigth© 2021 - Todos os direitos reservados
        </footer>
      </div>
      <HomeAndReturn1 />
    </div>
  );
}

export default Credits;
