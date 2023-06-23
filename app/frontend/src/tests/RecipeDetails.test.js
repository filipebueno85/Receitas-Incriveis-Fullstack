import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { MemoryRouter, useHistory } from 'react-router-dom';
import App from '../App';
// import mockDrinks from './mockDrinks';
// import mockMeals from './mockMeals';
import fetch from '../../cypress/mocks/fetch';

const mealsRoute = '/meals/52771';
const drinksRoute = '/drinks/15997';
const startRecipe = 'start-recipe-btn';
const recipeTitle = 'recipe-title';
const favortieBtn = 'favorite-btn';
beforeEach(() => {
  jest.spyOn(global, 'fetch').mockImplementation(fetch);
});

afterEach(() => {
  global.fetch.mockClear();
});

describe('Testando a  Pagina RecipesDetails', () => {
  it('testando botao favorito2', async () => {
    // const history = useHistory;
    Object.defineProperty(navigator, 'clipboard', {
      value: {
        writeText: () => {},
      },
    });
    const setLocalStorage = (id, data) => {
      window.localStorage.setItem(id, JSON.stringify(data));
    };
    setLocalStorage('favoriteRecipes', [
      {
        id: '15997',
        type: 'drink',
        nationality: '',
        category: 'Ordinary Drink',
        alcoholicOrNot: 'Optional alcohol',
        name: 'GG',
        image: 'https://www.thecocktaildb.com/images/media/drink/vyxwut1468875960.jpg',
      }]);
    render(
      <MemoryRouter initialEntries={ [drinksRoute] }>
        <App />
      </MemoryRouter>,
    );
    const favoriteBtn = screen.getByTestId(favortieBtn);
    expect(favoriteBtn).toBeInTheDocument();
    await waitFor(() => {
      expect(favoriteBtn).toHaveAttribute('alt', 'favorited-heart');
    });
    userEvent.click(favoriteBtn);
    // const favoriteBtn2 = screen.getByTestId(favortieBtn);
    expect(favoriteBtn).toHaveAttribute('alt', 'unfavorited-heart');
    const shareBtn = screen.getByTestId('share-btn');
    expect(shareBtn).toBeInTheDocument();
    // expect(shareBtn).toHaveAttribute('alt', 'share icon');
    expect(screen.queryByText(/link copied!/i)).not.toBeInTheDocument();
    userEvent.click(shareBtn);
    expect(screen.getByText(/link copied!/i)).toBeInTheDocument();
    const startBtn = screen.getByTestId(startRecipe);
    expect(startBtn).toBeInTheDocument();
    userEvent.click(startBtn);
    // const startBtn = screen.getByTestId('start-recipe-btn');
    // expect(startBtn).toBeInTheDocument();
    // userEvent.click(startBtn);
  });
  it('Testando o conteudo da Pagina Drink', async () => {
    render(
      <MemoryRouter initialEntries={ [drinksRoute] }>
        <App />
      </MemoryRouter>,
    );
    waitFor(() => {
      const imageRecipe = screen.getByTestId('recipe-photo');
      expect(imageRecipe).toBeInTheDocument();
      const titleRecipe = screen.getByTestId('recipe-title');
      expect(titleRecipe).toBeInTheDocument();
      const categoryRecipe = screen.getByTestId('recipe-category');
      expect(categoryRecipe).toBeInTheDocument();
      const ingredient0Recipe = screen.getByTestId('0-ingredient-name-and-measure');
      expect(ingredient0Recipe).toBeInTheDocument();
      const ingredient1Recipe = screen.getByTestId('1-ingredient-name-and-measure');
      expect(ingredient1Recipe).toBeInTheDocument();
      const ingredient2Recipe = screen.getByTestId('2-ingredient-name-and-measure');
      expect(ingredient2Recipe).toBeInTheDocument();
      const ingredient3Recipe = screen.getByTestId('3-ingredient-name-and-measure');
      expect(ingredient3Recipe).toBeInTheDocument();
      const ingredient4Recipe = screen.getByTestId('4-ingredient-name-and-measure');
      expect(ingredient4Recipe).toBeInTheDocument();
      const ingredient5Recipe = screen.getByTestId('5-ingredient-name-and-measure');
      expect(ingredient5Recipe).toBeInTheDocument();
      const ingredient6Recipe = screen.getByTestId('6-ingredient-name-and-measure');
      expect(ingredient6Recipe).toBeInTheDocument();
      const ingredient7Recipe = screen.getByTestId('7-ingredient-name-and-measure');
      expect(ingredient7Recipe).toBeInTheDocument();
      const videoRecipe = screen.getByTestId('video');
      expect(videoRecipe).toBeInTheDocument();
      const instructionRecipe = screen.getByTestId('instructions');
      expect(instructionRecipe).toBeInTheDocument();
    });
    await waitFor(() => {
      const recommendationCard0 = screen.getByTestId('0-recommendation-card');
      expect(recommendationCard0).toBeInTheDocument();
    });
    const recommendation0 = screen.getByTestId('0-recommendation-title');
    const recommendationCard1 = screen.getByTestId('1-recommendation-card');
    const recommendation1 = screen.getByTestId('1-recommendation-title');
    const recommendationCard2 = screen.getByTestId('2-recommendation-card');
    const recommendation2 = screen.getByTestId('2-recommendation-title');
    expect(recommendation0).toBeInTheDocument();
    expect(recommendationCard1).toBeInTheDocument();
    expect(recommendation1).toBeInTheDocument();
    expect(recommendationCard2).toBeInTheDocument();
    expect(recommendation2).toBeInTheDocument();
  });
  it('Testando o conteudo da Pagina Drink', async () => {
    render(
      <MemoryRouter initialEntries={ [mealsRoute] }>
        <App />
      </MemoryRouter>,
    );
    waitFor(() => {
      const imageRecipe = screen.getByTestId('recipe-photo');
      expect(imageRecipe).toBeInTheDocument();
      const titleRecipe = screen.getByTestId(recipeTitle);
      expect(titleRecipe).toBeInTheDocument();
      const categoryRecipe = screen.getByTestId('recipe-category');
      expect(categoryRecipe).toBeInTheDocument();
      const ingredient0Recipe = screen.getByTestId('0-ingredient-name-and-measure');
      expect(ingredient0Recipe).toBeInTheDocument();
      const ingredient1Recipe = screen.getByTestId('1-ingredient-name-and-measure');
      expect(ingredient1Recipe).toBeInTheDocument();
      const ingredient2Recipe = screen.getByTestId('2-ingredient-name-and-measure');
      expect(ingredient2Recipe).toBeInTheDocument();
      const ingredient3Recipe = screen.getByTestId('3-ingredient-name-and-measure');
      expect(ingredient3Recipe).toBeInTheDocument();
      const ingredient4Recipe = screen.getByTestId('4-ingredient-name-and-measure');
      expect(ingredient4Recipe).toBeInTheDocument();
      const ingredient5Recipe = screen.getByTestId('5-ingredient-name-and-measure');
      expect(ingredient5Recipe).toBeInTheDocument();
      const ingredient6Recipe = screen.getByTestId('6-ingredient-name-and-measure');
      expect(ingredient6Recipe).toBeInTheDocument();
      const ingredient7Recipe = screen.getByTestId('7-ingredient-name-and-measure');
      expect(ingredient7Recipe).toBeInTheDocument();
      const videoRecipe = screen.getByTestId('video');
      expect(videoRecipe).toBeInTheDocument();
      const instructionRecipe = screen.getByTestId('instructions');
      expect(instructionRecipe).toBeInTheDocument();
    });
    await waitFor(() => {
      const recommendationCard0 = screen.getByTestId('0-recommendation-card');
      expect(recommendationCard0).toBeInTheDocument();
    });
    const recommendation0 = screen.getByTestId('0-recommendation-title');
    const recommendationCard1 = screen.getByTestId('1-recommendation-card');
    const recommendation1 = screen.getByTestId('1-recommendation-title');
    const recommendationCard2 = screen.getByTestId('2-recommendation-card');
    const recommendation2 = screen.getByTestId('2-recommendation-title');
    expect(recommendation0).toBeInTheDocument();
    expect(recommendationCard1).toBeInTheDocument();
    expect(recommendation1).toBeInTheDocument();
    expect(recommendationCard2).toBeInTheDocument();
    expect(recommendation2).toBeInTheDocument();
  });
  it('testando botao favorito', async () => {
    // const history = useHistory;
    localStorage.setItem('favoriteRecipes', JSON.stringify([{
      id: '52771',
      type: 'meal',
      nationality: 'Italian',
      category: 'Vegetarian',
      alcoholicOrNot: '',
      name: 'Spicy Arrabiata Penne',
      image: 'https://www.themealdb.com/images/media/meals/ustsqw1468250014.jpg',
    }]));
    render(
      <MemoryRouter initialEntries={ ['/meals/52771'] }>
        <App />
      </MemoryRouter>,
    );
    await waitFor(() => {
      const titleRecipe = screen.getByTestId(recipeTitle);
      expect(titleRecipe).toBeInTheDocument();
      const favoriteBtn = screen.getByTestId(favortieBtn);
      expect(favoriteBtn).toBeInTheDocument();
      userEvent.click(favoriteBtn);
    });
    // expect(window.localStorage.setItem).toHaveBeenCalledWith('clicked', 'yes');
    const localStorageFav = JSON.parse(localStorage.getItem('favoriteRecipes'));
    console.log(localStorageFav);
    expect(localStorageFav[0]).toStrictEqual({
      alcoholicOrNot: '',
      category: 'Vegetarian',
      id: '52771',
      image: 'https://www.themealdb.com/images/media/meals/ustsqw1468250014.jpg',
      name: 'Spicy Arrabiata Penne',
      nationality: 'Italian',
      type: 'meal',
      // alcoholicOrNot: '',
      // category: '',
      // // id: '',
      // // image: '',
      // // name: '',
      // nationality: '',
      // type: 'meal',
    });
    // const startBtn = screen.getByTestId('start-recipe-btn');
    // expect(startBtn).toBeInTheDocument();
    // userEvent.click(startBtn);
  });
  it('testando botao Done recipes', async () => {
    const history = useHistory;
    render(
      <MemoryRouter initialEntries={ [mealsRoute] }>
        <App />
      </MemoryRouter>,
    );
    waitFor(() => {
      const startBtn = screen.getByTestId('start-recipe-btn');
      expect(startBtn).toBeInTheDocument();
      userEvent.click(startBtn);
      expect(history.location.pathname).toBe('/meals/52771/in-progress');
    });
  });
  it('testando botao Done recipes', async () => {
    const history = useHistory;
    render(
      <MemoryRouter initialEntries={ [drinksRoute] }>
        <App />
      </MemoryRouter>,
    );
    waitFor(() => {
      const startBtn = screen.getByTestId(startRecipe);
      expect(startBtn).toBeInTheDocument();
      userEvent.click(startBtn);
      expect(history.location.pathname).toBe('/drinks/15997/in-progress');
    });
  });
  it('testando botao de compartilhar link', async () => {
    render(
      <MemoryRouter initialEntries={ [drinksRoute] }>
        <App />
      </MemoryRouter>,
    );
    const copyExecMock = jest.fn().mockImplementation((a) => a);
    window.document.execCommand = copyExecMock;
    await waitFor(async () => {
      const shareBtn = screen.getByTestId('share-btn');
      expect(shareBtn).toBeInTheDocument();
      userEvent.click(shareBtn);
      expect(screen.getByText(/link copied!/i)).toBeInTheDocument();
    });
  });
});
