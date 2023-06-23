import copy from 'clipboard-copy';
import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import drinkIcon from '../assets/drinkIcon.png';
import mealIcon from '../assets/meals.png';
import shareIcon from '../assets/share.png';
import Header from '../components/Header';
import myContext from '../context/myContext';

function DoneRecipes() {
  const {
    doneRecipes,
  } = useContext(myContext);

  const [copied, setCopied] = useState(false);
  const [done, setDone] = useState(false);

  const handleClick = ({ target }) => {
    if (target.name === 'meals') {
      console.log(target.name);
      setDone(doneRecipes.filter((recipe) => recipe.type === 'meal'));
    }
    if (target.name === 'drinks') {
      setDone(doneRecipes.filter((recipe) => recipe.type === 'drink'));
    }
    if (target.name === 'all') {
      setDone(doneRecipes);
    }
  };

  const handleClickShare = ({ type, id }) => {
    copy(`http://aplicativo-de-receitas-18.vercel.app/${type}s/${id}`);
    setCopied(true);
  };

  useEffect(() => {
    // console.log(favoriteRecipes);
    setDone(doneRecipes);
  }, [doneRecipes]);

  return (
    <div>
      <Header title="Done Recipes" searchIconDisabled={ false } />
      <div className="done-container">
        <div className="done-buttons">
          <button
            className="category-button"
            type="button"
            style={ { width: '55px',
              padding: '3px',
              margin: 'auto',
              fontFamily: 'Stella Nova , sans-serif',
              fontSize: '25px',
              height: '55px' } }
            data-testid="filter-by-all-btn"
            onClick={ handleClick }
            name="all"
          >
            All
          </button>
          <button
            type="button"
            data-testid="filter-by-meal-btn"
            onClick={ handleClick }
            name="meals"
          >
            <img
              style={ { width: '55px' } }
              src={ mealIcon }
              name="meals"
              alt="drinkIcon"
            />
          </button>
          <button
            type="button"
            data-testid="filter-by-drink-btn"
            onClick={ handleClick }
            name="drinks"
          >
            <img
              name="drinks"
              style={ { width: '55px', padding: '5px' } }
              src={ drinkIcon }
              alt="drinkIcon"
            />
          </button>
        </div>
        <div>
          {done && done.map((doneRecipe, index) => (
            <div key={ index } className="done-cards">
              <Link to={ `/${doneRecipe.type}s/${doneRecipe.id}` }>
                <div className="done-un-card">
                  <img
                    width="150px"
                    className="fav-card-img"
                    src={ doneRecipe.image }
                    alt={ `Foto de um(a) ${doneRecipe.name}` }
                    data-testid={ `${index}-horizontal-image` }
                  />
                  <h4 data-testid={ `${index}-horizontal-name` }>{doneRecipe.name}</h4>
                </div>
              </Link>

              { doneRecipe.alcoholicOrNot
                ? (
                  <p data-testid={ `${index}-horizontal-top-text` }>
                    {doneRecipe.alcoholicOrNot}
                  </p>)
                : (
                  <p data-testid={ `${index}-horizontal-top-text` }>
                    {`${doneRecipe.nationality} - ${doneRecipe.category}`}
                  </p>
                )}
              <p data-testid={ `${index}-horizontal-done-date` }>
                {doneRecipe.doneDate.toString()}
              </p>
              <span
                data-testid={ `${index}-${doneRecipe.tags[0]}-horizontal-tag` }
              >
                {doneRecipe.tags[0]}
              </span>
              <span
                data-testid={ `${index}-${doneRecipe.tags[1]}-horizontal-tag` }
              >
                {doneRecipe.tags[1]}
              </span>
              <br />
              <button
                className="done-share-button"
                onClick={ () => handleClickShare(doneRecipe) }
              >
                <img
                  style={ { width: '50px' } }
                  data-testid={ `${index}-horizontal-share-btn` }
                  src={ shareIcon }
                  alt="share icon"
                />
              </button>
              { copied && <span>Link copied!</span> }
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default DoneRecipes;
