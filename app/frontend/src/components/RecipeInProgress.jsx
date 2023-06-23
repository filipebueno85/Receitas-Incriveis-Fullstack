import copy from 'clipboard-copy';
import React, { useContext, useEffect, useState } from 'react';
import { useHistory, useLocation, useParams } from 'react-router-dom';
import blackHeart from '../assets/favoriteIcon.png';
import shareIcon from '../assets/share.png';
import whiteHeart from '../assets/unfavoriteIcon.png';
import myContext from '../context/myContext';

function RecipeInProgress() {
  const [allIngredientsAndMeasure, setAllIngredientsAndMeasure] = useState([]);
  const { pathname } = useLocation();
  const [copied, setCopied] = useState(false);
  const { iddareceita } = useParams();
  const history = useHistory();
  const {
    doneRecipes,
    setDoneRecipes,
    idMealsApi,
    idDrinksApi,
    inProgressRecipes,
    setInProgressRecipes,
    resultSearch,
    setFavoriteRecipes,
    favoriteRecipes,
    favoriteBtn,
    setFavoriteBtn,
  } = useContext(myContext);

  const localStorgeCheckBox = (allIngredientsAndMeasure2) => {
    if (resultSearch.idDrink) {
      const checkedAllDrink = allIngredientsAndMeasure2
        .map((ingredient) => {
          if (inProgressRecipes.drinks[iddareceita]
            && inProgressRecipes.drinks[iddareceita]
              .includes(ingredient.ingredient)) {
            ingredient.usedIngredient = true;
            return ingredient;
          }
          ingredient.usedIngredient = false;
          return ingredient;
        });
      setAllIngredientsAndMeasure(checkedAllDrink);
    }
    if (resultSearch.idMeal) {
      const checkedAllMeal = allIngredientsAndMeasure2.map((ingredient) => {
        if (inProgressRecipes.meals[iddareceita]
          && inProgressRecipes.meals[iddareceita]
            .includes(ingredient.ingredient)) {
          ingredient.usedIngredient = true;
          return ingredient;
        }
        ingredient.usedIngredient = false;
        return ingredient;
      });
      setAllIngredientsAndMeasure(checkedAllMeal);
    }
  };

  const arrayIngredientMensure = () => {
    const arrayAllIngMeas = [];
    const objresultIngredient = Object.entries(resultSearch)
      .filter((result) => result[0]
        .includes('strIngredient') && result[1] !== null && result[1] !== '')
      .map((result) => result[1]);
    const objresultMensure = Object.entries(resultSearch)
      .filter((result) => result[0]
        .includes('strMeasure') && result[1] !== null && result[1] !== '')
      .map((result) => result[1]);

    for (let i = 0; i < objresultIngredient.length; i += 1) {
      const ingredient = objresultIngredient[i];
      const measure = objresultMensure[i];
      arrayAllIngMeas.push({ ingredient, measure, usedIngredient: false });
    }
    setAllIngredientsAndMeasure(arrayAllIngMeas);
    localStorgeCheckBox(arrayAllIngMeas);
  };
  const handleClickFavorite = () => {
    const favorite = {
      id: resultSearch.idDrink || resultSearch.idMeal,
      type: resultSearch.idDrink ? 'drink' : 'meal',
      nationality: resultSearch.strArea || '',
      category: resultSearch.strCategory || '',
      alcoholicOrNot: resultSearch.strAlcoholic || '',
      name: resultSearch.strDrink || resultSearch.strMeal,
      image: resultSearch.strDrinkThumb || resultSearch.strMealThumb,
    };
    if (favoriteBtn) {
      if (favoriteRecipes.length !== 0) {
        const teste = favoriteRecipes.filter((favoriteRecipe) => (
          Number(favoriteRecipe.id) !== Number(resultSearch.idDrink)
          && Number(favoriteRecipe.id) !== Number(resultSearch.idMeal)));
        setFavoriteRecipes(teste);
      }
    } else {
      setFavoriteRecipes([...favoriteRecipes, favorite]);
    }
  };

  const handleClickShare = () => {
    copy(`http://aplicativo-de-receitas-18.vercel.app${pathname.split('/in-progress').join('')}`);
    setCopied(true);
  };

  const handleChange = (index) => {
    const checkedIngredient = [...allIngredientsAndMeasure];
    checkedIngredient[index].usedIngredient = !checkedIngredient[index].usedIngredient;
    setAllIngredientsAndMeasure(checkedIngredient);
    if (resultSearch.idDrink) {
      setInProgressRecipes({
        drinks: {
          ...inProgressRecipes.drinks,
          [iddareceita]: allIngredientsAndMeasure
            .filter((ingredient) => ingredient.usedIngredient === true)
            .map((ingredient) => ingredient.ingredient),
        },
        meals: { ...inProgressRecipes.meals },
      });
    }
    if (resultSearch.idMeal) {
      setInProgressRecipes({
        meals: {
          ...inProgressRecipes.meals,
          [iddareceita]: allIngredientsAndMeasure
            .filter((ingredient) => ingredient.usedIngredient === true)
            .map((ingredient) => ingredient.ingredient),
        },
        drinks: { ...inProgressRecipes.drinks },
      });
    }
  };

  const handleClickDoneRecipes = () => {
    const newDoneRecipes = {
      id: resultSearch.idDrink || resultSearch.idMeal,
      nationality: resultSearch.strArea || '',
      type: resultSearch.idDrink ? 'drink' : 'meal',
      category: resultSearch.strCategory || '',
      alcoholicOrNot: resultSearch.strAlcoholic || '',
      name: resultSearch.strDrink || resultSearch.strMeal,
      image: resultSearch.strDrinkThumb || resultSearch.strMealThumb,
      doneDate: new Date(),
      tags: resultSearch.strTags ? resultSearch.strTags.split(',') : [],
    };
    console.log(newDoneRecipes);
    setDoneRecipes([...doneRecipes, newDoneRecipes]);
    history.push('/done-recipes');
  };

  useEffect(() => {
    if (pathname.includes('meals')) {
      idMealsApi(`${iddareceita}`);
    } else {
      idDrinksApi(`${iddareceita}`);
    }
  }, []);

  useEffect(() => {
    const favoriteValue = favoriteRecipes.some((recipe) => Number(recipe
      .id) === Number(resultSearch.idDrink) || Number(recipe
      .id) === Number(resultSearch.idMeal));
    setFavoriteBtn(favoriteValue);
    arrayIngredientMensure();
  }, [favoriteRecipes, resultSearch]);

  return (
    <div className="details-container">
      <div className="header-recipe">
        <h1
          data-testid="recipe-title"
        >
          {resultSearch.strDrink || resultSearch.strMeal }
        </h1>
        <img
          style={ { width: '300px' } }
          data-testid="recipe-photo"
          src={ resultSearch.strDrinkThumb || resultSearch.strMealThumb }
          alt={ resultSearch.strDrink || resultSearch.strMeal }
        />
      </div>
      <div className="details-buttons">
        <button
          className="share-button"
          data-testid="share-btn"
          onClick={ handleClickShare }
        >
          <img src={ shareIcon } alt="share icon" />
        </button>
        { copied && <span>Link copied!</span> }
        <input
          type="image"
          style={ { width: '50px' } }
          src={ favoriteBtn ? blackHeart : whiteHeart }
          alt={ favoriteBtn ? 'favorited-heart'
            : 'unfavorited-heart' }
          data-testid="favorite-btn"
          onClick={ handleClickFavorite }
        />
      </div>
      <h1 className="detail-category" data-testid="recipe-category">
        {resultSearch.strAlcoholic || resultSearch.strCategory }
      </h1>
      <div className="ingreients-container">
        <h1 className="detail-category">Ingredients</h1>
        {allIngredientsAndMeasure
          .map(({ ingredient, measure, usedIngredient }, index) => (
            <div key={ index }>
              <label
                htmlFor={ `${index}-ingredient` }
                data-testid={ `${index}-ingredient-step` }
                style={
                  { textDecoration:
                  usedIngredient ? 'line-through solid rgb(0, 0, 0)' : 'none' }
                }
              >
                <input
                  type="checkbox"
                  name={ `${index}-ingredient` }
                  id={ `${index}-ingredient` }
                  value
                  onChange={ () => handleChange(index) }
                  checked={ usedIngredient }
                />
                {`${ingredient} - ${measure || ''}`}
              </label>
            </div>
          ))}
      </div>
      <div>
        <h1 className="detail-category">Instructions</h1>
        <p
          className="text-details"
          data-testid="instructions"
        >
          {resultSearch.strInstructions}
        </p>
      </div>
      <button
        className="finish-button"
        data-testid="finish-recipe-btn"
        onClick={ handleClickDoneRecipes }
        disabled={ !allIngredientsAndMeasure
          .every((ingredient) => ingredient.usedIngredient === true) }
      >
        Finish Recipe
      </button>
    </div>
  );
}
export default RecipeInProgress;
