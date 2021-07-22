import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';
import { Context } from '../context/ContextForm';
import '../styles/Header.css';

function Header({ title }) {
  const { onSearch, setOnSearch } = useContext(Context);

  const showExplore = (title.includes('Explorar') && !title.includes('Origem'));
  const showRecipes = (title.includes('Receitas') || title.includes('Perfil'));

  function showSearch() {
    setOnSearch(!onSearch);
  }
  return (
    <div className="header-container">
      <Link to="/perfil">
        <img
          className="profile"
          src={ profileIcon }
          data-testid="profile-top-btn"
          alt="Profile Avatar"
        />
      </Link>
      <h3 data-testid="page-title" className="header-title">{title}</h3>
      { !showExplore && !showRecipes
        ? (
          <img
            className="search"
            role="presentation"
            onClick={ showSearch }
            src={ searchIcon }
            data-testid="search-top-btn"
            alt="Search Icon"
          />
        ) : '' }
    </div>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
