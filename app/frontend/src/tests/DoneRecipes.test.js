import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import fetch from '../../cypress/mocks/fetch';
import App from '../App';

const doneRecipesRoute = '/done-recipes';

const filterAllBtnString = 'filter-by-all-btn';
const filterMealBtnString = 'filter-by-meal-btn';
const filterDrinkBtnString = 'filter-by-drink-btn';
const spicyArrabiata = 'Spicy Arrabiata Penne';

beforeEach(() => {
  jest.spyOn(global, 'fetch').mockImplementation(fetch);
});

afterEach(() => {
  global.fetch.mockClear();
});

describe('Testando a  Pagina DoneRecipes', () => {
  it('testando conteudo da pagina', async () => {
    render(
      <MemoryRouter initialEntries={ [doneRecipesRoute] }>
        <App />
      </MemoryRouter>,
    );
    const filterAllBtn = screen.getByTestId(filterAllBtnString);
    expect(filterAllBtn).toBeInTheDocument();
    const filterMealBtn = screen.getByTestId(filterMealBtnString);
    expect(filterMealBtn).toBeInTheDocument();
    const filterDrinkBtn = screen.getByTestId(filterDrinkBtnString);
    expect(filterDrinkBtn).toBeInTheDocument();
  });
  it('testando conteudo da pagina com as receitas', async () => {
    const doneRecipes = [{
      id: '52771',
      nationality: 'Italian',
      type: 'meal',
      category: 'Vegetarian',
      alcoholicOrNot: '',
      name: spicyArrabiata,
      image: 'https://www.themealdb.com/images/media/meals/ustsqw1468250014.jpg',
      doneDate: '2023-03-10T18:10:04.453Z',
      tags: ['Pasta', 'Curry'],
    },
    {
      id: '15997',
      nationality: '',
      type: 'drink',
      category: 'Ordinary Drink',
      alcoholicOrNot: 'Optional alcohol',
      name: 'GG',
      image: 'https://www.thecocktaildb.com/images/media/drink/vyxwut1468875960.jpg',
      doneDate: '2023-03-10T18:55:47.410Z',
      tags: [],
    }];
    localStorage.setItem('doneRecipes', JSON.stringify(doneRecipes));
    render(
      <MemoryRouter initialEntries={ ['/done-recipes'] }>
        <App />
      </MemoryRouter>,
    );

    const filterAllBtn = screen.getByTestId(filterAllBtnString);
    expect(filterAllBtn).toBeInTheDocument();
    const filterMealBtn = screen.getByTestId('filter-by-meal-btn');
    expect(filterMealBtn).toBeInTheDocument();
    const filterDrinkBtn = screen.getByTestId(filterDrinkBtnString);
    expect(filterDrinkBtn).toBeInTheDocument();
    const mealName = screen.getByText(spicyArrabiata);
    expect(mealName).toBeInTheDocument();
    const drinkName = screen.getByText('GG');
    expect(drinkName).toBeInTheDocument();
    userEvent.click(filterMealBtn);
    await waitFor(() => {
      expect(drinkName).not.toBeInTheDocument();
      expect(mealName).toBeInTheDocument();
    });
  });

  it('testando conteudo da pagina com as receitas botao filtro meal', async () => {
    const doneRecipes = [{
      id: '52771',
      nationality: 'Italian',
      type: 'meal',
      category: 'Vegetarian',
      alcoholicOrNot: '',
      name: spicyArrabiata,
      image: 'https://www.themealdb.com/images/media/meals/ustsqw1468250014.jpg',
      doneDate: '2023-03-10T18:10:04.453Z',
      tags: ['Pasta', 'Curry'],
    },
    {
      id: '15997',
      nationality: '',
      type: 'drink',
      category: 'Ordinary Drink',
      alcoholicOrNot: 'Optional alcohol',
      name: 'GG',
      image: 'https://www.thecocktaildb.com/images/media/drink/vyxwut1468875960.jpg',
      doneDate: '2023-03-10T18:55:47.410Z',
      tags: [],
    }];
    localStorage.setItem('doneRecipes', JSON.stringify(doneRecipes));
    // const history = useHistory;
    Object.defineProperty(navigator, 'clipboard', {
      value: {
        writeText: () => {},
      },
    });
    render(
      <MemoryRouter initialEntries={ [doneRecipesRoute] }>
        <App />
      </MemoryRouter>,
    );

    const filterAllBtn = screen.getByTestId(filterAllBtnString);
    expect(filterAllBtn).toBeInTheDocument();
    const filterMealBtn = screen.getByTestId(filterMealBtnString);
    expect(filterMealBtn).toBeInTheDocument();
    const filterDrinkBtn = screen.getByTestId(filterDrinkBtnString);
    expect(filterDrinkBtn).toBeInTheDocument();
    userEvent.click(filterDrinkBtn);
    await waitFor(() => {
      const drinkName = screen.getByText('GG');
      expect(drinkName).toBeInTheDocument();
    });
    userEvent.click(filterAllBtn);
    await waitFor(() => {
      const drinkName = screen.getByText('GG');
      const mealName = screen.getByText(spicyArrabiata);
      expect(mealName).toBeInTheDocument();
      expect(drinkName).toBeInTheDocument();
    });
    await waitFor(() => {
      const shareBtn = screen.getByTestId('0-horizontal-share-btn');
      expect(shareBtn).toBeInTheDocument();
      // expect(screen.queryByText(/link copied!/i)).not.toBeInTheDocument();
      userEvent.click(shareBtn);
      expect(screen.getAllByText(/link copied!/i)[0]).toBeInTheDocument();
    });
  });
});
