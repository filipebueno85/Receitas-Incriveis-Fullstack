import PropTypes from 'prop-types';
import React, { useMemo, useState } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';
import { fetchApiDrinks } from '../services/drinksApi';
import { fetchApiMeals } from '../services/mealsApi';
import MyContext from './myContext';

// const seis = 6;

function Provider({ children }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [searchIcon, setSearchIcon] = useState(true);
  const [searchInput, setSearchInput] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [searchName, setSearchName] = useState('');
  const [searchIngredient, setSearchIngredient] = useState('');
  const [searchFirstLetter, setSearchFirstLetter] = useState('');
  const [searchEndpoint, setSearchEndpoint] = useState('');
  const [resultSearch, setReultSearch] = useState([]);
  const [options, setOptions] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [filterMeals, setFilterMeals] = useState([]);
  const [filterDrinks, setFilterDrinks] = useState([]);
  const [category, setCategory] = useState();
  const [idRecipe, setIdRecipe] = useState('');
  const [carouselResults, setCarouselResults] = useState([]);
  const [doneRecipes, setDoneRecipes] = useLocalStorage('doneRecipes', []);
  const [inProgressRecipes,
    setInProgressRecipes] = useLocalStorage('inProgressRecipes', {
    drinks: {},
    meals: {},
  });
  const [favoriteRecipes, setFavoriteRecipes] = useLocalStorage('favoriteRecipes', []);
  const [favoriteBtn, setFavoriteBtn] = useState(false);
  const mealsApi = async (endpoint) => {
    const result = await fetchApiMeals(endpoint);
    setReultSearch(result);
    setIsLoading(false);
  };

  const carouselMealsApi = async (endpoint) => {
    const result = await fetchApiMeals(endpoint);
    const resultMap = result
      .map((item) => ({ image: item.strMealThumb, title: item.strMeal }));
    // console.log(resultMap);
    setCarouselResults(resultMap);
  };

  const drinksApi = async (endpoint) => {
    const result = await fetchApiDrinks(endpoint);
    console.log('aaaaaaaaaa', result);
    setReultSearch(result);
    setIsLoading(false);
    // return result;
  };

  const carouselDrinksApi = async (endpoint) => {
    const result = await fetchApiDrinks(endpoint);
    const resultMap = result
      .map((item) => ({ image: item.strDrinkThumb, title: item.strDrink }));
    setCarouselResults(resultMap);
  };

  const idMealsApi = async (endpoint) => {
    const resultM = await fetchApiMeals(endpoint);
    setReultSearch(resultM);
    setIsLoading(false);
  };

  const idDrinksApi = async (endpoint) => {
    const result = await fetchApiDrinks(endpoint);
    setReultSearch(result);
    setIsLoading(false);
  };

  const categoriesMealsApi = async (endpoint) => {
    const result = await fetchApiMeals(endpoint);
    setFilterMeals(result);
  };

  const categoriesDrinksApi = async (endpoint) => {
    const result = await fetchApiDrinks(endpoint);
    console.log(endpoint);
    setFilterDrinks(result);
    console.log(result);
  };

  const values = useMemo(() => ({
    favoriteBtn,
    setFavoriteBtn,
    favoriteRecipes,
    setFavoriteRecipes,
    inProgressRecipes,
    setInProgressRecipes,
    doneRecipes,
    setDoneRecipes,
    carouselResults,
    setCarouselResults,
    idRecipe,
    setIdRecipe,
    idDrinksApi,
    idMealsApi,
    category,
    setCategory,
    carouselMealsApi,
    carouselDrinksApi,
    categoriesDrinksApi,
    categoriesMealsApi,
    filterMeals,
    setFilterMeals,
    filterDrinks,
    setFilterDrinks,
    options,
    isLoading,
    setIsLoading,
    setOptions,
    searchValue,
    mealsApi,
    drinksApi,
    resultSearch,
    setReultSearch,
    searchEndpoint,
    setSearchEndpoint,
    setSearchValue,
    searchName,
    setSearchName,
    searchIngredient,
    setSearchIngredient,
    searchFirstLetter,
    setSearchFirstLetter,
    email,
    searchInput,
    setSearchInput,
    setEmail,
    password,
    setPassword,
    searchIcon,
    setSearchIcon,
  }), [
    inProgressRecipes,
    favoriteRecipes,
    favoriteBtn,
    setFavoriteBtn,
    setFavoriteRecipes,
    setInProgressRecipes,
    doneRecipes,
    setDoneRecipes,
    carouselResults,
    idRecipe,
    category,
    filterDrinks,
    filterMeals,
    isLoading,
    options,
    searchValue,
    resultSearch,
    searchEndpoint,
    searchName,
    searchIngredient,
    searchFirstLetter,
    email,
    searchInput,
    password,
    searchIcon]);

  return (
    <MyContext.Provider value={ values }>
      {children}
    </MyContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
