import React, { useContext, useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import DrinkCard from '../components/DrinkCard';
import RecipeDetails from '../components/RecipeDetails';
import myContext from '../context/myContext';

function Recipe() {
  const { idMealsApi, doneRecipes, inProgressRecipes } = useContext(myContext);
  const [showStartBtn, setShowStartBtn] = useState(true);
  const [textBtn, setTextBtn] = useState(true);
  const { iddareceita } = useParams();
  const history = useHistory();
  // console.log(iddareceita);
  useEffect(() => {
    idMealsApi(`/${iddareceita}`);
  }, []);

  useEffect(() => {
    doneRecipes.forEach((recipe) => {
      if (recipe.id === Number(iddareceita)) {
        setShowStartBtn(false);
      }
    });
    if (Object.keys(inProgressRecipes.meals).some((id) => id === iddareceita)) {
      setTextBtn(false);
    }
  }, [doneRecipes, iddareceita, showStartBtn, textBtn, inProgressRecipes]);

  const handleClick = () => {
    history.push(`/meals/${iddareceita}/in-progress`);
  };

  return (
    <div>
      <RecipeDetails />
      <DrinkCard />
      { showStartBtn
      && (
        <button
          className="start-contiue-buttons"
          style={ { position: 'fixed', bottom: '0px' } }
          data-testid="start-recipe-btn"
          type="button"
          onClick={ handleClick }
        >
          {textBtn ? 'Start Recipe' : 'Continue Recipe'}
        </button>
      )}

    </div>
  );
}

export default Recipe;
