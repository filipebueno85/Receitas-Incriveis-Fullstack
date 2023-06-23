import React, { useCallback, useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Recipes from '../components/Recipes';
import myContext from '../context/myContext';

function Drinks() {
  const {
    drinksApi,
    setOptions,
    category,
    resultSearch,
    isLoading,
    categoriesDrinksApi,
  } = useContext(myContext);
  const history = useHistory();

  useEffect(() => {
    drinksApi('name?q=');
    // drinksApi('search.php?s=');
    setOptions('drinks');
    categoriesDrinksApi('categories');
    // console.log(resultSearch);
  }, [setOptions]);

  const bebida = useCallback(() => {
    const tamanho = resultSearch?.length || 0;
    console.log(tamanho);
    switch (tamanho) {
    case 1:
      if (category) {
        return resultSearch;
      }
      return history.push(`/drinks/${resultSearch[0].idDrink}`);
    case 0:
      return global.alert('Sorry, we haven\'t found any recipes for these filters.');
    default:
      return resultSearch;
    }
  }, [resultSearch]);

  useEffect(() => {
    if (!isLoading) {
      bebida();
    }
  }, [resultSearch]);

  return (
    <div>
      <Header title="Drinks" />
      <Recipes title="Drinks" />
      <Footer />
    </div>
  );
}

export default Drinks;
