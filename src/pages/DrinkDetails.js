import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { Badge, Button } from 'react-bootstrap';
import List from '../components/List';
import RecomendationsMeal from '../components/RecomendationsMeal';
import { requestByDetailsDrink } from '../services/api';
// import Loading from '../components/Loading';
import return2 from '../images/return2.png';
import Icons from '../components/Icons';
import '../styles/DrinkAndFoodDetails(page).css';

function DrinkDetails() {
  const { id } = useParams();
  const [drink, setDrink] = useState([]);
  const [first, setFirst] = useState(false);
  const [progress, setProgress] = useState('Iniciar Receita');
  // const [loading, setLoading] = useState(null);
  const [finished, setFinished] = useState(null);
  const done = JSON.parse(localStorage.getItem('doneRecipes'));
  const history = useHistory();

  function setDrinkOnState(drink2BeSet) {
    setDrink([...drink2BeSet]);
  }

  useEffect(() => {
    if (done) {
      done.map((recipe) => recipe.id.includes(id) && setFinished(true));
    }
  }, [done, id]);

  useEffect(() => {
    // setLoading(true);
    const request = async () => {
      await requestByDetailsDrink(id)
        .then((response) => { setDrinkOnState(response.drinks); });
      // setLoading(false);
    };
    request();
  }, [id]);

  function progressFunction() {
    const { idDrink } = drink[0];
    const { cocktails } = JSON.parse(localStorage.getItem('inProgressRecipes'));
    let flag = 0;
    Object
      .keys(cocktails).forEach((id2) => { if (id2 === idDrink) flag += 1; });
    if (flag !== 0) setProgress('Continuar Receita');
    setFirst(true);
  }

  function start() {
    const { idDrink } = drink[0];
    const inProgress = JSON.parse(localStorage.getItem('inProgressRecipes'));
    inProgress.cocktails[`${idDrink}`] = [];
    localStorage.setItem('inProgressRecipes', JSON.stringify(inProgress));
    setProgress('Continuar Receita');
  }

  if (!first && drink.length > 0) {
    progressFunction();
  }

  // if (loading) return <Loading />;
  return (
    drink && drink.length > 0 && (
      drink.map((
        { idDrink, strDrink, strInstructions,
          strDrinkThumb, strAlcoholic, strSource, ...rest },
        index,
      ) => {
        const drinks = rest;
        return (
          <div className="food-details-main-div" key={ index }>
            <div className="details-align">
              <div className="details-card">
                <button
                  type="button"
                  className="return-icon-detail"
                  onClick={ () => window.history.back() }
                >
                  <img
                    className="return-icon"
                    src={ return2 }
                    alt="return icon"
                  />
                </button>
                <img
                  src={ strDrinkThumb }
                  className="details-img"
                  alt={ strDrink }
                  data-testid="recipe-photo"
                />
                <section className="detailsTitle-container">
                  <h1
                    className="details-title"
                    data-testid="recipe-title"
                  >
                    { strDrink }
                  </h1>
                  <Icons code={ drink[0] } />
                </section>
              </div>
              <Badge
                variant="info"
                className="details-tag"
                data-testid="recipe-category"
              >
                {strAlcoholic}
              </Badge>
              <List drinks={ drinks } />
              <h2 className="section-title">Instructions</h2>
              <p
                className="details-instructions"
                data-testid="instructions"
              >
                { strInstructions }
              </p>
              <h2 className="section-title">Recomendations</h2>
            </div>
            <RecomendationsMeal />
            { finished
              ? (
                null)
              : (
                <Button
                  variant="info"
                  type="button"
                  className="details-startRecipeBtn"
                  data-testid="start-recipe-btn"
                  onClick={ () => {
                    start(); history.push(`/bebidas/${idDrink}/in-progress`);
                  } }
                >
                  {progress}
                </Button>)}
          </div>
        );
      }))
  );
}

export default DrinkDetails;
