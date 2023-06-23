import PropTypes from 'prop-types';
import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import myContext from '../context/myContext';

const doze = 12;
// const cinco = 5;

function Recipes({ title }) {
  const {
    mealsApi,
    drinksApi,
    category,
    setCategory,
    resultSearch,
    isLoading,
    filterMeals,
    filterDrinks,
  } = useContext(myContext);

  useEffect(() => {
    if (category && title === 'Meals') {
      mealsApi(`category?q=${category}`);
    } else if (category && title === 'Drinks') {
      drinksApi(`category?q=${category}`);
    } else if (title === 'Meals') {
      mealsApi('name?q=');
    } else if (title === 'Drinks') {
      drinksApi('name?q=');
    }
  }, [title, category]);

  const handleCategoryChange = (event) => {
    setCategory(event.target.value === category ? '' : event.target.value);
  };

  return (
    <div className="recipes-container">
      <div className="filters-container">
        <div className="category-container">
        <h3>Category</h3>
        <select
          className="category-select"
          value={category}
          onChange={handleCategoryChange}
          data-testid="category-filter"
        >
          <option value="">All</option>
          {title === 'Meals' &&
            filterMeals &&
            filterMeals.map((meal) => (
              <option
                key={meal.strCategory}
                value={meal.strCategory}
                data-testid={`${meal.strCategory}-category-filter`}
              >
                {meal.strCategory}
              </option>
            ))}
          {title === 'Drinks' &&
            filterDrinks &&
            filterDrinks.map((drink) => (
              <option
                key={drink.strCategory}
                value={drink.strCategory}
                data-testid={`${drink.strCategory}-category-filter`}
              >
                {drink.strCategory}
              </option>
            ))}
        </select>
        </div>
      </div>
      <div className="result-total">
        {title === 'Meals' ? (
          !isLoading &&
          resultSearch?.length > 0 &&
          resultSearch.slice(0, doze).map((result, index) => (
            <div
              className="recipes-container"
              data-testid={`${index}-recipe-card`}
              key={index}
            >
              <Link to={`/meals/${result.idMeal}`}>
                <div className="result-card">
                  <p data-testid={`${index}-card-name`}>{result.strMeal}</p>
                  <img
                    style={{ width: '110px' }}
                    data-testid={`${index}-card-img`}
                    src={result.strMealThumb}
                    alt={result.strMeal}
                  />
                  <p>Try!</p>
                </div>
              </Link>
            </div>
          ))
        ) : (
          !isLoading &&
          resultSearch?.length > 0 &&
          resultSearch.slice(0, doze).map((result, index) => (
            <div
              className="recipes-container"
              data-testid={`${index}-recipe-card`}
              key={index}
            >
              <Link to={`/drinks/${result.idDrink}`}>
                <div className="result-card">
                  <p data-testid={`${index}-card-name`}>{result.strDrink}</p>
                  <img
                    style={{ width: '110px' }}
                    data-testid={`${index}-card-img`}
                    src={result.strDrinkThumb}
                    alt={result.strDrink}
                  />
                  <p>Try!</p>
                </div>
              </Link>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

Recipes.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Recipes;