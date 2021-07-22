import React from 'react';
import '../styles/Loading.css';
import cook from '../images/cook.png';

function Loading() {
  return (
    <div className="loading-container">
      <img className="loading-img" src={ cook } alt="loading" />
      <h4>Carregando...</h4>
    </div>
  );
}

export default Loading;
