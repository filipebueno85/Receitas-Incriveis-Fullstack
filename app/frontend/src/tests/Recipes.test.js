import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { MemoryRouter, useHistory } from 'react-router-dom';
import App from '../App';
import drinkCategories from './mockDrinkCat';
import mockDrinks from './mockDrinks';
import mockMeals from './mockMeals';
import mealCategories from './mockMealsCat';

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

describe('Testando a  Pagina Recipes', () => {
  it('Testando botão All', () => {
    render(
      <MemoryRouter initialEntries={ ['/meals'] }>
        <App />
      </MemoryRouter>,
    );

    const allRecipesBtn = screen.getByTestId('All-category-filter');
    expect(allRecipesBtn).toBeInTheDocument();
    userEvent.click(allRecipesBtn);
  });

  it('Testando botões por categoria Beef', async () => {
    jest.spyOn(global, 'fetch').mockResolvedValue({
      json: jest.fn().mockResolvedValue(mealCategories),
    });
    render(
      <MemoryRouter initialEntries={ ['/meals'] }>
        <App />
      </MemoryRouter>,
    );
    const beefBtn = await screen.findByRole('button', { name: 'Beef' });
    waitFor(() => {
      expect(beefBtn).toBeInTheDocument();
      userEvent.click(beefBtn);
      expect(screen.getByText(/beef and mustard pie/i)).toBeInTheDocument();
    });
  });

  it('Testando botões por categoria para resetar o filtro ', async () => {
    jest.spyOn(global, 'fetch').mockResolvedValue({
      json: jest.fn().mockResolvedValue(mealCategories),
    });
    render(
      <MemoryRouter initialEntries={ ['/meals'] }>
        <App />
      </MemoryRouter>,
    );
    const beefBtn = await screen.findByRole('button', { name: 'Beef' });
    waitFor(() => {
      expect(beefBtn).toBeInTheDocument();
      userEvent.dblClick(beefBtn);
      expect(screen.getByText(/corba/i)).toBeInTheDocument();
    });
  });

  it('Testando botões por categoria BreakFest', async () => {
    jest.spyOn(global, 'fetch').mockResolvedValue({
      json: jest.fn().mockResolvedValue(mealCategories),
    });
    render(
      <MemoryRouter initialEntries={ ['/meals'] }>
        <App />
      </MemoryRouter>,
    );
    const breakfestBtn = await screen.findByRole('button', { name: 'Breakfast' });
    waitFor(() => {
      expect(breakfestBtn).toBeInTheDocument();
      userEvent.click(breakfestBtn);
      expect(screen.getByText(/breakfast potatoes/i)).toBeInTheDocument();
    });
  });

  it('Testando botões por categoria Chicken', async () => {
    const history = useHistory;
    jest.spyOn(global, 'fetch').mockResolvedValue({
      json: jest.fn().mockResolvedValue(mealCategories),
    });
    render(
      <MemoryRouter initialEntries={ ['/meals'] }>
        <App />
      </MemoryRouter>,
    );

    const chickenBtn = await screen.findByRole('button', { name: 'Chicken' });
    waitFor(() => {
      expect(chickenBtn).toBeInTheDocument();
      userEvent.click(chickenBtn);
      expect(screen.getByText(/ayam percik/i)).toBeInTheDocument();
      expect(history.location.pathname).toBe('/meals/53050');
    });
  });

  it('Testando botões por categoria Dessert', async () => {
    jest.spyOn(global, 'fetch').mockResolvedValue({
      json: jest.fn().mockResolvedValue(mealCategories),
    });
    render(
      <MemoryRouter initialEntries={ ['/meals'] }>
        <App />
      </MemoryRouter>,
    );

    const dessertBtn = await screen.findByRole('button', { name: 'Dessert' });
    waitFor(() => {
      expect(dessertBtn).toBeInTheDocument();
      userEvent.click(dessertBtn);
      expect(screen.getByText(/apam balik/i)).toBeInTheDocument();
    });
  });

  it('Testando botões por categoria Goat', async () => {
    jest.spyOn(global, 'fetch').mockResolvedValue({
      json: jest.fn().mockResolvedValue(mealCategories),
    });
    render(
      <MemoryRouter initialEntries={ ['/meals'] }>
        <App />
      </MemoryRouter>,
    );

    const goatBtn = await screen.findByRole('button', { name: 'Goat' });
    waitFor(() => {
      expect(goatBtn).toBeInTheDocument();
      userEvent.click(goatBtn);
      expect(screen.getByText(/mbuzi choma \(roasted goat\)/i)).toBeInTheDocument();
    });
  });

  it('Testando botões por categoria Ordinary Drink', async () => {
    jest.spyOn(global, 'fetch').mockResolvedValue({
      json: jest.fn().mockResolvedValue(drinkCategories),
    });

    render(
      <MemoryRouter initialEntries={ ['/drinks'] }>
        <App />
      </MemoryRouter>,
    );

    const ordinaryDrinkBtn = await screen.findByRole('button', { name: 'Ordinary Drink' });
    waitFor(() => {
      expect(ordinaryDrinkBtn).toBeInTheDocument();
      userEvent.click(ordinaryDrinkBtn);
      expect(screen.getByText(/3-mile long island iced tea/i)).toBeInTheDocument();
    });
  });

  it('Testando botões por categoria Cocktail', async () => {
    const history = useHistory;
    jest.spyOn(global, 'fetch').mockResolvedValue({
      json: jest.fn().mockResolvedValue(drinkCategories),
    });
    render(
      <MemoryRouter initialEntries={ ['/drinks'] }>
        <App />
      </MemoryRouter>,
    );

    const cocktailDrinkBtn = await screen.findByRole('button', { name: 'Cocktail' });
    waitFor(() => {
      expect(cocktailDrinkBtn).toBeInTheDocument();
      userEvent.click(cocktailDrinkBtn);
      expect(screen.getByText(/155 belmont/i)).toBeInTheDocument();
      expect(history.location.pathname).toBe('/drinks/15346');
    });
  });
  it('Testando botões de categoria para resetar o filtro', async () => {
    jest.spyOn(global, 'fetch').mockResolvedValue({
      json: jest.fn().mockResolvedValue(drinkCategories),
    });
    render(
      <MemoryRouter initialEntries={ ['/drinks'] }>
        <App />
      </MemoryRouter>,
    );

    const cocktailDrinkBtn = await screen.findByRole('button', { name: 'Cocktail' });
    waitFor(() => {
      expect(cocktailDrinkBtn).toBeInTheDocument();
      userEvent.dblClick(cocktailDrinkBtn);
      expect(screen.getByText(/gg/i)).toBeInTheDocument();
    });
  });
});
