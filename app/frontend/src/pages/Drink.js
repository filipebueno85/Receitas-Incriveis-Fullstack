import React, { useContext, useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import RecipeCard from '../components/RecipeCard';
import RecipeDetails from '../components/RecipeDetails';
import myContext from '../context/myContext';

function Drink() {
  const {
    idDrinksApi,
    doneRecipes,
    inProgressRecipes,
    // setInProgressRecipes,
  } = useContext(myContext);
  const [showStartBtn, setShowStartBtn] = useState(true);
  const [textBtn, setTextBtn] = useState(true);
  const { iddareceita } = useParams();
  const history = useHistory();
  useEffect(() => {
    // idDrinksApi(`lookup.php?i=${iddareceita}`);
    idDrinksApi(`/${iddareceita}`);
  }, []);

  useEffect(() => {
    doneRecipes.forEach((recipe) => {
      if (recipe.id === Number(iddareceita)) {
        setShowStartBtn(false);
      }
    });
    console.log(iddareceita);
    if (Object.keys(inProgressRecipes.drinks).some((id) => id === iddareceita)) {
      setTextBtn(false);
    }
  }, [doneRecipes, iddareceita, showStartBtn, textBtn, inProgressRecipes]);

  const handleClick = () => {
    history.push(`/drinks/${iddareceita}/in-progress`);
  };

  return (
    <div>
      <RecipeDetails />
      <RecipeCard />
      { showStartBtn
      && (
        <div>
          <button
            className="start-contiue-buttons"
            style={ { position: 'fixed', bottom: '0px' } }
            data-testid="start-recipe-btn"
            type="button"
            onClick={ handleClick }
          >
            {textBtn ? 'Start Recipe' : 'Continue Recipe'}
          </button>
        </div>
      )}
    </div>
  );
}

export default Drink;
