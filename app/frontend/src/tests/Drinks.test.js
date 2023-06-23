import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import fetch from '../../cypress/mocks/fetch';
import App from '../App';

// const favoriteRecipesRoute = '/favorite-recipes';

// const filterAllBtnString = 'filter-by-all-btn';
// const filterMealBtnString = 'filter-by-meal-btn';
// const filterDrinkBtnString = 'filter-by-drink-btn';
// const spicyArrabiata = 'Spicy Arrabiata Penne';

const searchTopButton = 'search-top-btn';
const inputSearch = 'search-input';
const searchBTN = 'exec-search-btn';

beforeEach(() => {
  // jest.spyOn(global, 'fetch').mockResolvedValue({
  //   json: jest.fn().mockResolvedValue(mockMeals),
  // });
  jest.spyOn(global, 'fetch').mockResolvedValue({
    json: jest.fn().mockResolvedValue(fetch),
  });
  jest.spyOn(global, 'alert').mockImplementation(() => {});
});

afterEach(() => {
  global.fetch.mockClear();
});

describe('Testando a  Pagina Drinks', () => {
  it('testando conteudo da pagina', async () => {
    render(
      <MemoryRouter initialEntries={ ['/drinks'] }>
        <App />
      </MemoryRouter>,
    );
    // await waitFor(() => {
    //   const allBtn = screen.getByTestId('All-category-filter');
    //   expect(allBtn).toBeInTheDocument();
    //   const ordinaryBtn = screen.getByTestId('Ordinary Drink-category-filter');
    //   expect(ordinaryBtn).toBeInTheDocument();
    //   const cacktailBtn = screen.getByTestId('Cocktail-category-filter');
    //   expect(cacktailBtn).toBeInTheDocument();
    //   const shakeBtn = screen.getByTestId('Shake-category-filter');
    //   expect(shakeBtn).toBeInTheDocument();
    //   const otherBtn = screen.getByTestId('Other/Unknown-category-filter');
    //   expect(otherBtn).toBeInTheDocument();
    //   const cocoaBtn = screen.getByTestId('Cocoa-category-filter');
    //   expect(cocoaBtn).toBeInTheDocument();
    // });
    await waitFor(() => {
      const iconSearch = screen.getByTestId(searchTopButton);
      userEvent.click(iconSearch);
      const searchInput = screen.getByTestId(inputSearch);
      expect(searchInput).toBeInTheDocument();
      const nameRadio = screen.getByTestId('name-search-radio');
      expect(nameRadio).toBeInTheDocument();
      userEvent.click(nameRadio);
      userEvent.type(searchInput, 'egdas');
      const buttonSearch = screen.getByTestId(searchBTN);
      userEvent.click(buttonSearch);
    });
    // expect(screen.getByRole('alert', { description: 'Sorry, we haven\'t found any recipes for these filters.' })).toHaveBeenCalledTimes(1);
    await waitFor(() => {
      expect(jest.spyOn(global, 'alert')).toHaveBeenCalledTimes(1);
      expect(jest.spyOn(global, 'alert')).toHaveBeenCalledWith('Sorry, we haven\'t found any recipes for these filters.');
    });
    // });
  });
});
