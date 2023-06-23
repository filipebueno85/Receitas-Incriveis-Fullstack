import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { act } from 'react-dom/test-utils';
import { MemoryRouter } from 'react-router-dom';
import fetch from '../../cypress/mocks/fetch';
import App from '../App';
import renderWithRouter from '../services/renderWithRouter';

const mealsRoute = '/meals/52771/in-progress';
const drinksRoute = '/drinks/15997/in-progress';
// const finishRecipe = 'start-recipe-btn';
const ingrdient1 = '1-ingredient-step';
const ordinaryDrink = 'Ordinary Drink';
const optional = 'Optional alcohol';
const imageDrink = 'https://www.thecocktaildb.com/images/media/drink/vyxwut1468875960.jpg';
const recipeTitle = 'recipe-title';
const favortieBtn = 'favorite-btn';
const penneRigate = 'penne rigate';
const spicyArrabiata = 'Spicy Arrabiata Penne';
const spicyImage = 'https://www.themealdb.com/images/media/meals/ustsqw1468250014.jpg';
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
        category: ordinaryDrink,
        alcoholicOrNot: optional,
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
  });
  it('testando botao favorito', async () => {
    // const history = useHistory;
    localStorage.setItem('favoriteRecipes', JSON.stringify([{
      id: '52771',
      type: 'meal',
      nationality: 'Italian',
      category: 'Vegetarian',
      alcoholicOrNot: '',
      name: spicyArrabiata,
      image: spicyImage,
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
      name: spicyArrabiata,
      nationality: 'Italian',
      type: 'meal',
    });
  });
  it('teste local storage favorito', async () => {
    localStorage.setItem('favoriteRecipes', JSON.stringify([{
      id: '52771',
      type: 'meal',
      nationality: 'Italian',
      category: 'Vegetarian',
      alcoholicOrNot: '',
      name: spicyArrabiata,
      image: spicyImage,
    }]));
    render(
      <MemoryRouter initialEntries={ ['/meals/52771'] }>
        <App />
      </MemoryRouter>,
    );
    await waitFor(() => {
      expect(JSON.parse(localStorage.getItem('favoriteRecipes'))).toEqual([
        {
          alcoholicOrNot: '',
          category: 'Vegetarian',
          id: '52771',
          image: spicyImage,
          name: spicyArrabiata,
          nationality: 'Italian',
          type: 'meal',
        }]);
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

  it('testando os ingredientes marcados no localStorage', async () => {
    // const history = useHistory;
    localStorage.setItem('inProgressRecipes', JSON.stringify({
      meals: {},
      drinks: { 15997: [] },
    }));
    renderWithRouter(
      <MemoryRouter initialEntries={ [drinksRoute] }>
        <App />
      </MemoryRouter>,
    );
    await waitFor(() => {
      const labelIngredients = screen.getByTestId(ingrdient1);
      expect(labelIngredients).toBeInTheDocument();
    });

    // await waitFor(() => {
    const checkbox = screen.getByRole('checkbox', { name: /galliano - 2 1\/2 shots/i });
    expect(checkbox).toBeInTheDocument();
    userEvent.click(checkbox);
    await waitFor(() => {
      const localStorageInProgress = JSON.parse(localStorage.getItem('inProgressRecipes'));
      expect(localStorageInProgress).toStrictEqual({
        drinks: { 15997: ['Galliano'] },
        meals: {},
      });
    });
  });
  it('testando ingredientes checkbox drinks se ainda continua na pagina', async () => {
    localStorage.setItem('inProgressRecipes', JSON.stringify({
      meals: { },
      drinks: { 15997: ['Galliano'] },
    }));
    render(
      <MemoryRouter initialEntries={ [drinksRoute] }>
        <App />
      </MemoryRouter>,
    );
    await waitFor(() => {
      const labelIngredients = screen.getByTestId(ingrdient1);
      expect(labelIngredients).toBeInTheDocument();
      expect(labelIngredients).not.toBeChecked();
    });

    const checkbox = screen.queryByRole('checkbox', { name: /galliano - 2 1\/2 shots/i });

    expect(checkbox).toBeChecked();
  });
  it('testando ingredientes checkbox meals', async () => {
    localStorage.setItem('inProgressRecipes', JSON.stringify({
      meals: { 52771: [] },
      drinks: {},
    }));
    const { history } = renderWithRouter(
      <MemoryRouter initialEntries={ [mealsRoute] }>
        <App />
      </MemoryRouter>,
    );
    await waitFor(() => {
      const labelIngredients = screen.getByTestId(ingrdient1);
      expect(labelIngredients).toBeInTheDocument();
      expect(labelIngredients).not.toBeChecked();
    });

    // await waitFor(() => {
    const labelIngredients = screen.getByTestId(ingrdient1);
    const checkbox = screen.queryByRole('checkbox', { name: /penne rigate - 1 pound/i });
    await waitFor(() => {
      expect(checkbox).not.toBeChecked();
      expect(labelIngredients).toHaveStyle('text-decoration: none;');
      // expect(labelIngredients).toHaveStyle('text-decoration: line-through solid rgb(0, 0, 0);');
    });
    userEvent.click(checkbox);
    // checkbox.checked = true;
    expect(checkbox).toBeChecked();
    // });
    await waitFor(() => {
      const localStorageInProgress = JSON.parse(localStorage.getItem('inProgressRecipes'));
      expect(localStorageInProgress).toStrictEqual({
        drinks: {},
        meals: { 52771: [penneRigate] },
      });
    });

    await waitFor(() => {
      act(() => {
        history.push(drinksRoute);
      });
    });

    expect(checkbox).toBeChecked();

    await waitFor(() => {
      const localStorageInProgress = JSON.parse(localStorage.getItem('inProgressRecipes'));
      expect(localStorageInProgress).toStrictEqual({
        drinks: {},
        meals: { 52771: [penneRigate] },
      });
    });
  });

  it('testando ingredientes checkbox meals se ainda continua na pagina', async () => {
    localStorage.setItem('inProgressRecipes', JSON.stringify({
      meals: { 52771: [penneRigate] },
      drinks: {},
    }));
    render(
      <MemoryRouter initialEntries={ [mealsRoute] }>
        <App />
      </MemoryRouter>,
    );
    await waitFor(() => {
      const labelIngredients = screen.getByTestId(ingrdient1);
      expect(labelIngredients).toBeInTheDocument();
      expect(labelIngredients).not.toBeChecked();
    });

    const checkbox = screen.queryByRole('checkbox', { name: /penne rigate - 1 pound/i });

    expect(checkbox).toBeChecked();
  });
  it('testando inputs de ingrdientes', async () => {
    localStorage.setItem('doneRecipes', JSON.stringify([{
      id: '15997',
      nationality: '',
      type: 'drink',
      category: ordinaryDrink,
      alcoholicOrNot: optional,
      name: 'GG',
      image: imageDrink,
      doneDate: '2023-03-10T11:46:20.401Z',
      tags: [],
    }]));
    const { history } = renderWithRouter(
      <MemoryRouter initialEntries={ [drinksRoute] }>
        <App />
      </MemoryRouter>,
    );
    await waitFor(() => {
      const labelIngredients = screen.getByTestId(ingrdient1);
      expect(labelIngredients).toBeInTheDocument();
    });
    const checkbox = screen.getByRole('checkbox', { name: /galliano - 2 1\/2 shots/i });
    expect(checkbox).toBeInTheDocument();
    userEvent.click(checkbox);
    const checkbox2 = screen.getByRole('checkbox', { name: /Ginger ale/i });
    expect(checkbox2).toBeInTheDocument();
    userEvent.click(checkbox2);
    const checkbox3 = screen.getByRole('checkbox', { name: /ice/i });
    expect(checkbox3).toBeInTheDocument();
    userEvent.click(checkbox3);
    const finishRecipeBtn = screen.queryByTestId('finish-recipe-btn');
    expect(finishRecipeBtn).toBeInTheDocument();
    await waitFor(() => {
      userEvent.click(finishRecipeBtn);
      act(() => {
        history.push('/done-recipes');
      });
      const localStorageDone = JSON.parse(localStorage.getItem('doneRecipes'));
      expect(localStorageDone[0]).toStrictEqual({
        id: '15997',
        nationality: '',
        type: 'drink',
        category: 'Ordinary Drink',
        alcoholicOrNot: 'Optional alcohol',
        name: 'GG',
        image: imageDrink,
        doneDate: '2023-03-10T11:46:20.401Z',
        tags: [],
      });
    });
  });
  it('testando botao Done recipes', async () => {
    const { history } = renderWithRouter(
      <MemoryRouter initialEntries={ [drinksRoute] }>
        <App />
      </MemoryRouter>,
    );
    const finishBtn = screen.getByTestId('finish-recipe-btn');
    expect(finishBtn).toBeInTheDocument();
    await waitFor(() => {
      userEvent.click(finishBtn);
      act(() => {
        history.push('/done-recipes');
      });
    });
  });
});
