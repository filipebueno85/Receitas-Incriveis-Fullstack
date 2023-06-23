import React, { useContext } from 'react';
import myContext from '../context/myContext';

function SearchBar() {
  const {
    searchValue,
    setSearchValue,
    searchEndpoint,
    setSearchEndpoint,
    mealsApi,
    drinksApi,
    options,
    // searchName,
    // setSearchName,
    // searchIngredient,
    // setSearchIngredient,
    // searchFirstLetter,
    // setSearchFirstLetter,
  } = useContext(myContext);

  // const mealsApi = async (endpoint) => {
  //   const result = await fetchApiMeals(endpoint);
  //   console.log(result);
  //   return result;
  //   // setResultSearch()
  // };

  const handleClick = () => {
    if (searchEndpoint === 'ingredient') {
      if (options === 'meals') {
        return mealsApi(`ingredient?q=${searchValue}`);
      }
      return drinksApi(`ingredient?q=${searchValue}`);
    }
    if (searchEndpoint === 'name') {
      if (options === 'meals') {
        return mealsApi(`name?q=${searchValue}`);
      }
      return drinksApi(`name?q=${searchValue}`);
    }
    if (searchEndpoint === 'first-letter') {
      if (searchValue.length !== 1) {
        return global.alert('Your search must have only 1 (one) character');
      }
      if (options === 'meals') {
        return mealsApi(`name?q=${searchValue}`);
        // return mealsApi(`search.php?f=${searchValue}`);
      }
      return drinksApi(`name?q=${searchValue}`);
    }
  };

  return (
    <div className="search-container">
      <input
        type="text"
        data-testid="search-input"
        onChange={ ({ target }) => setSearchValue(target.value) }
      />
      <div className="search-options">
        <label htmlFor="search-ingredient">
          Ingredient
          <input
            data-testid="ingredient-search-radio"
            type="radio"
            name="searchBar"
            onChange={ () => setSearchEndpoint('ingredient') }
            id="search-ingredient"
          />
        </label>
        <label htmlFor="search-name">
          Name
          <input
            data-testid="name-search-radio"
            type="radio"
            name="searchBar"
            onChange={ () => setSearchEndpoint('name') }
            id="search-name"
          />
        </label>
        <label htmlFor="search-first-letter">
          First Letter
          <input
            data-testid="first-letter-search-radio"
            type="radio"
            name="searchBar"
            onChange={ () => setSearchEndpoint('first-letter') }
            id="search-first-letter"
          />
        </label>
      </div>
      <button
        type="button"
        data-testid="exec-search-btn"
        onClick={ handleClick }
      >
        Search
      </button>
    </div>
  );
}

export default SearchBar;
