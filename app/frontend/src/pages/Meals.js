// import PropTypes from 'prop-types';
import React, { useCallback, useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Recipes from '../components/Recipes';
import myContext from '../context/myContext';

function Meals() {
  const {
    mealsApi,
    setOptions,
    resultSearch,
    isLoading,
    categoriesMealsApi,
    category,
  } = useContext(myContext);
  const history = useHistory();

  useEffect(() => {
    mealsApi('name?q=');
    categoriesMealsApi('categories');
    setOptions('meals');
  }, [setOptions]);

  const comidas = useCallback(() => {
    const tamanho = resultSearch?.length || 0;
    // console.log(tamanho, resultSearch);
    switch (tamanho) {
    case 1:
      if (category) {
        return resultSearch;
      }
      return history.push(`/meals/${resultSearch[0].idMeal}`);
    case 0:
      return global.alert('Sorry, we haven\'t found any recipes for these filters.');
    default:
      return resultSearch;
    }
  }, [resultSearch]);

  useEffect(() => {
    if (!isLoading) {
      comidas();
    }
  }, [resultSearch]);

  return (
    <div>
      <Header title="Meals" />
      <Recipes title="Meals" />
      <Footer />
    </div>
  );
}

export default Meals;
