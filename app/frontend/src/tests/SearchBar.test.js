import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import App from '../App';
import mockDrinks from './mockDrinks';
import mockMeals from './mockMeals';

// const emailInput = 'email-input';
// const loginBtn = 'login-submit-btn';
// const emailContent = 'grupo18@trybe.com';
// const passwordInput = 'password-input';
const searchTopButton = 'search-top-btn';
const inputSearch = 'search-input';
const firstLetter = 'first-letter-search-radio';
const searchBTN = 'exec-search-btn';

beforeEach(() => {
  jest.spyOn(global, 'fetch').mockResolvedValue({
    json: jest.fn().mockResolvedValue(mockMeals),
  });
  jest.spyOn(global, 'fetch').mockResolvedValue({
    json: jest.fn().mockResolvedValue(mockDrinks),
  });
});

afterEach(() => {
  global.fetch.mockClear();
});

describe('Testando o componente SearchBar', () => {
  it('Testando o search ingredients meals', () => {
    render(
      <MemoryRouter initialEntries={ ['/meals'] }>
        <App />
      </MemoryRouter>,
    );
    const iconSearch = screen.getByTestId(searchTopButton);
    userEvent.click(iconSearch);
    const searchInput = screen.getByTestId('search-input');
    expect(searchInput).toBeInTheDocument();
    const ingredientRadio = screen.getByTestId('ingredient-search-radio');
    expect(ingredientRadio).toBeInTheDocument();
    userEvent.click(ingredientRadio);
    userEvent.type(searchInput, 'chicken');
    const buttonSearch = screen.getByTestId(searchBTN);
    userEvent.click(buttonSearch);
    waitFor(() => expect(fetch.global).toHaveBeCalledWith('https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken'));
    userEvent.click(iconSearch);
    expect(searchInput).not.toBeInTheDocument();
  });

  it('Testando o search name meals', () => {
    render(
      <MemoryRouter initialEntries={ ['/meals'] }>
        <App />
      </MemoryRouter>,
    );

    const iconSearch = screen.getByTestId(searchTopButton);
    userEvent.click(iconSearch);
    const searchInput = screen.getByTestId(inputSearch);
    expect(searchInput).toBeInTheDocument();
    const nameRadio = screen.getByTestId('name-search-radio');
    expect(nameRadio).toBeInTheDocument();
    userEvent.click(nameRadio);
    userEvent.type(searchInput, 'Corba');
    const buttonSearch = screen.getByTestId(searchBTN);
    userEvent.click(buttonSearch);
    waitFor(() => expect(fetch.global).toHaveBeCalledWith('https://www.themealdb.com/api/json/v1/1/search.php?s=Corba'));
    userEvent.click(iconSearch);
    expect(searchInput).not.toBeInTheDocument();
  });

  it('Testando o search first letter meals', () => {
    render(
      <MemoryRouter initialEntries={ ['/meals'] }>
        <App />
      </MemoryRouter>,
    );

    const iconSearch = screen.getByTestId(searchTopButton);
    userEvent.click(iconSearch);
    const searchInput = screen.getByTestId(inputSearch);
    expect(searchInput).toBeInTheDocument();
    const firstLetterRadio = screen.getByTestId(firstLetter);
    expect(firstLetterRadio).toBeInTheDocument();
    userEvent.click(firstLetterRadio);
    userEvent.type(searchInput, 'A');
    const buttonSearch = screen.getByTestId(searchBTN);
    userEvent.click(buttonSearch);
    waitFor(() => expect(fetch.global).toHaveBeCalledWith('https://www.themealdb.com/api/json/v1/1/search.php?f=A'));
    userEvent.click(iconSearch);
    expect(searchInput).not.toBeInTheDocument();
  });

  it('Testando o search first letter drinks', () => {
    render(
      <MemoryRouter initialEntries={ ['/drinks'] }>
        <App />
      </MemoryRouter>,
    );

    const iconSearch = screen.getByTestId(searchTopButton);
    userEvent.click(iconSearch);
    const searchInput = screen.getByTestId(inputSearch);
    expect(searchInput).toBeInTheDocument();
    const firstLetterRadio = screen.getByTestId(firstLetter);
    expect(firstLetterRadio).toBeInTheDocument();
    userEvent.click(firstLetterRadio);
    userEvent.type(searchInput, 'A');
    const buttonSearch = screen.getByTestId(searchBTN);
    userEvent.click(buttonSearch);
    waitFor(() => expect(fetch.global).toHaveBeCalledWith('https://www.thecocktaildb.com/api/json/v1/1/search.php?f=A'));
    userEvent.click(iconSearch);
    expect(searchInput).not.toBeInTheDocument();
    // expect(history.location.pathname).toBe('/drinks');
  });

  it('Testando o search ingredients drinks', () => {
    render(
      <MemoryRouter initialEntries={ ['/drinks'] }>
        <App />
      </MemoryRouter>,
    );

    const iconSearch = screen.getByTestId(searchTopButton);
    userEvent.click(iconSearch);
    const searchInput = screen.getByTestId(inputSearch);
    expect(searchInput).toBeInTheDocument();
    const ingredientRadio = screen.getByTestId('ingredient-search-radio');
    expect(ingredientRadio).toBeInTheDocument();
    userEvent.click(ingredientRadio);
    userEvent.type(searchInput, 'lime');
    const buttonSearch = screen.getByTestId(searchBTN);
    userEvent.click(buttonSearch);
    waitFor(() => expect(fetch.global).toHaveBeCalledWith('https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=lime'));
    userEvent.click(iconSearch);
    expect(searchInput).not.toBeInTheDocument();
    // expect(history.location.pathname).toBe('/drinks');
  });

  it('Testando o search name drinks', () => {
    render(
      <MemoryRouter initialEntries={ ['/drinks'] }>
        <App />
      </MemoryRouter>,
    );

    const iconSearch = screen.getByTestId(searchTopButton);
    userEvent.click(iconSearch);
    const searchInput = screen.getByTestId(inputSearch);
    expect(searchInput).toBeInTheDocument();
    const nameRadio = screen.getByTestId('name-search-radio');
    expect(nameRadio).toBeInTheDocument();
    userEvent.click(nameRadio);
    userEvent.type(searchInput, 'caipirinha');
    const buttonSearch = screen.getByTestId(searchBTN);
    userEvent.click(buttonSearch);
    waitFor(() => expect(fetch.global).toHaveBeCalledWith('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=caipirinha'));
    userEvent.click(iconSearch);
    expect(searchInput).not.toBeInTheDocument();
    // expect(history.location.pathname).toBe('/drinks');
  });

  it('Testando o alert drinks', () => {
    render(
      <MemoryRouter initialEntries={ ['/drinks'] }>
        <App />
      </MemoryRouter>,
    );

    const iconSearch = screen.getByTestId(searchTopButton);
    userEvent.click(iconSearch);
    const searchInput = screen.getByTestId(inputSearch);
    expect(searchInput).toBeInTheDocument();
    const firstLetterRadio = screen.getByTestId(firstLetter);
    expect(firstLetterRadio).toBeInTheDocument();
    userEvent.click(firstLetterRadio);
    userEvent.type(searchInput, 'a6');
    const buttonSearch = screen.getByTestId(searchBTN);
    userEvent.click(buttonSearch);
    waitFor(() => expect(global.alert).toHaveBeenCalledTimes(1));
    userEvent.click(iconSearch);
    expect(searchInput).not.toBeInTheDocument();
    // expect(history.location.pathname).toBe('/drinks');
  });

  it('Testando o alert meals', () => {
    render(
      <MemoryRouter initialEntries={ ['/meals'] }>
        <App />
      </MemoryRouter>,
    );

    const iconSearch = screen.getByTestId(searchTopButton);
    userEvent.click(iconSearch);
    const searchInput = screen.getByTestId(inputSearch);
    expect(searchInput).toBeInTheDocument();
    const firstLetterRadio = screen.getByTestId(firstLetter);
    expect(firstLetterRadio).toBeInTheDocument();
    userEvent.click(firstLetterRadio);
    userEvent.type(searchInput, 'a6');
    const buttonSearch = screen.getByTestId(searchBTN);
    userEvent.click(buttonSearch);
    waitFor(() => expect(global.alert).toHaveBeenCalledTimes(1));
    userEvent.click(iconSearch);
    expect(searchInput).not.toBeInTheDocument();
    // expect(history.location.pathname).toBe('/drinks');
  });
});
