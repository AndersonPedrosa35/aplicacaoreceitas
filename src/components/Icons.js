import React, { useRef, useState, useContext } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { Overlay, Tooltip } from 'react-bootstrap';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.gif';
import shareIcon from '../images/shareIcon.svg';
import '../styles/Icons.css';
import { Context } from '../context/ContextForm';

function favoriteStructure(item) {
  if (item.code !== undefined) {
    const
      { idMeal,
        strArea,
        idDrink, id,
        strCategory,
        strAlcoholic, strDrink, strMeal, strMealThumb, strDrinkThumb } = item.code;

    const favoriteElement = {
      id: idMeal || idDrink || id,
      type: idMeal === undefined ? 'bebida' : 'comida',
      area: idMeal === undefined ? '' : strArea,
      category: strCategory,
      alcoholicOrNot: idMeal === undefined ? strAlcoholic : '',
      name: strDrink || strMeal,
      image: strMealThumb || strDrinkThumb,
    };
    return favoriteElement;
  }
}

function isHorizontal(pathname) {
  return pathname
    .includes('receitas-favoritas');
}

function shareData(item, pathname) {
  return isHorizontal(pathname)
    ? `${item.id}-horizontal-share-btn` : 'share-btn';
}

function imageData(item, pathname) {
  return isHorizontal(pathname)
    ? `${item.id}-horizontal-favorite-btn` : 'favorite-btn';
}

function processFavorites(changeIcon, pathname, path, item) {
  let favorites = JSON.parse(localStorage.getItem('favoriteRecipes'));
  const favoriteElement = favoriteStructure(item);
  if (changeIcon) {
    favorites = [...favorites, favoriteElement];
    localStorage.setItem('favoriteRecipes', JSON.stringify(favorites));
  }
  if (!changeIcon) {
    favorites = favorites
      .filter((fav) => fav.id !== favoriteElement.id);
    localStorage.setItem('favoriteRecipes', JSON.stringify(favorites));
  }
}

function Icons(item) {
  const path = 'receitas-favoritas';
  const [changeIcon, setChangeIcon] = useState(!item.fromHorizontal);
  const [changeCopy, setChangeCopy] = useState(false);
  const [first, setFirst] = useState(false);
  const { setSearch, historyPage, sethistoryPage } = useContext(Context);
  const target = useRef(null);
  const history = useHistory();
  const { pathname } = history.location;
  const DOISMIL = 2000;

  let originalPath = '';
  if (item.fromHorizontal) {
    if (item.code.type === 'comida') originalPath = (`/comidas/${item.code.id}`);
    else originalPath = (`/bebidas/${item.code.id}`);
  }

  function isFavorite() {
    const { idDrink, idMeal } = item.code;
    const favorites = JSON.parse(localStorage.getItem('favoriteRecipes'));
    let flag = 0;
    favorites
      .forEach((fav) => { if (fav.id === (idDrink || idMeal)) flag += 1; });
    if (flag > 0) {
      setChangeIcon(!changeIcon);
    }
  }
  if (!first) {
    isFavorite();
    sethistoryPage([...historyPage, pathname]);
    setFirst(true);
  }

  function copyClipboard() {
    const url = document.URL;
    navigator.clipboard.writeText(url.replace('/in-progress', ''));
    setChangeCopy(true);
    setTimeout(() => {
      setChangeCopy(false);
    }, [DOISMIL]);
  }

  function favorite() {
    setChangeIcon(!changeIcon);
    processFavorites(changeIcon, pathname, path, item);
    const act = JSON.parse(localStorage.getItem('favoriteRecipes'));
    setSearch(act);
  }

  function speakCopy() {
    return (
      <Overlay target={ target.current } show={ changeCopy } placement="bottom">
        {(props) => (
          <Tooltip className="icons-copyText" id="overlay" { ...props }>
            Link copiado!
          </Tooltip>
        )}
      </Overlay>
    );
  }

  return (
    <div className="icons-container">
      <div className="icons-shareAndFavorite-container">
        <button
          ref={ target }
          type="button"
          className="icons-share-btn"
          onClick={ () => {
            copyClipboard(); speakCopy();
          } }
        >
          {
            isHorizontal(pathname)
              ? (
                <Link to={ originalPath }>
                  <img
                    src={ shareIcon }
                    alt="share icon"
                    data-testid={ shareData(item, pathname) }
                  />
                </Link>
              )
              : (
                <img
                  className="icons-share-btn"
                  src={ shareIcon }
                  alt="share icon"
                  data-testid={ shareData(item, pathname) }
                />
              )
          }
        </button>
        <button
          type="button"
          className="favorite-icon"
          onClick={ () => { favorite(); setChangeIcon(!changeIcon); } }
        >
          <img
            src={ changeIcon ? whiteHeartIcon : blackHeartIcon }
            alt="favorite icons"
            className="fav"
            data-testid={ imageData(item, pathname) }
          />
        </button>
      </div>
      { (changeCopy
       || historyPage[historyPage
         .length - 2] === '/receitas-favoritas')
          && <p className="copyText">Link copiado!</p> }

    </div>
  );
}

export default Icons;
