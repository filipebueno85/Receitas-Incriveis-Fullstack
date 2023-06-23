import { useContext, useEffect, useState } from 'react';
import drinkIcon from '../assets/drinkIcon.png';
import mealIcon from '../assets/meals.png';
import FavoriteCard from '../components/FavoriteCard';
import Header from '../components/Header';
import myContext from '../context/myContext';
// import shareIcon from '../assets/share.png';

function FavoriteRecipes() {
  const {
    favoriteRecipes,
  } = useContext(myContext);
  const [favorites, setFavorites] = useState();

  const handleClick = ({ target }) => {
    if (target.name === 'meals') {
      console.log(target.name);
      setFavorites(favoriteRecipes.filter((recipe) => recipe.type === 'meal'));
    }
    if (target.name === 'drinks') {
      setFavorites(favoriteRecipes.filter((recipe) => recipe.type === 'drink'));
    }
    if (target.name === 'all') {
      setFavorites(favoriteRecipes);
    }
  };

  useEffect(() => {
    console.log(favoriteRecipes);
    setFavorites(favoriteRecipes);
  }, [favoriteRecipes]);

  return (
    <div>
      <Header title="Favorite Recipes" searchIconDisabled={ false } />
      <div className="done-container">
        <div className="favorite-butttons">
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
            className="category-button"
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
            className="category-button"
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
          { console.log(favorites) }
          { favorites && favorites.map((recipe, index) => (
            <FavoriteCard
              key={ index }
              recipe={ recipe }
              index={ index }
            />)) }
        </div>
      </div>
    </div>
  );
}

export default FavoriteRecipes;
