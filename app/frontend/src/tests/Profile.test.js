import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { MemoryRouter, useHistory } from 'react-router-dom';
import App from '../App';
import mockDrinks from './mockDrinks';
import mockMeals from './mockMeals';

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

describe('Testando a  Pagina Profile', () => {
  it('Testando a tela do Perfil', () => {
    render(
      <MemoryRouter initialEntries={ ['/profile'] }>
        <App />
      </MemoryRouter>,
    );

    const titleProfile = screen.getByTestId('page-title');
    expect(titleProfile).toBeInTheDocument();

    const profileBtnIcon = screen.getByTestId('profile-top-btn');
    expect(profileBtnIcon).toBeInTheDocument();
    userEvent.click(profileBtnIcon);

    const emailUser = screen.getByTestId('profile-email');
    expect(emailUser).toBeInTheDocument();

    const doneRecipesBtn = screen.getByTestId('profile-done-btn');
    expect(doneRecipesBtn).toBeInTheDocument();

    const favRecipesBtn = screen.getByTestId('profile-favorite-btn');
    expect(favRecipesBtn).toBeInTheDocument();

    const logoutBtn = screen.getByTestId('profile-logout-btn');
    expect(logoutBtn).toBeInTheDocument();
  });
  it('Testando a tela do Perfil botão Done recipes ', () => {
    const history = useHistory;

    render(
      <MemoryRouter initialEntries={ ['/profile'] }>
        <App />
      </MemoryRouter>,
    );

    const doneRecipesBtn = screen.getByTestId('profile-done-btn');
    expect(doneRecipesBtn).toBeInTheDocument();
    userEvent.click(doneRecipesBtn);
    waitFor(() => {
      expect(history.location.pathname).toBe('/done-recipes');
    });
  });

  it('Testando a tela do Perfil botão favorites recipes ', () => {
    render(
      <MemoryRouter initialEntries={ ['/profile'] }>
        <App />
      </MemoryRouter>,
    );

    const favRecipesBtn = screen.getByTestId('profile-favorite-btn');
    expect(favRecipesBtn).toBeInTheDocument();
    userEvent.click(favRecipesBtn);
  });

  it('Testando a tela do Perfil botão logout ', () => {
    const history = useHistory;

    render(
      <MemoryRouter initialEntries={ ['/profile'] }>
        <App />
      </MemoryRouter>,
    );

    const logoutBtn = screen.getByTestId('profile-logout-btn');
    expect(logoutBtn).toBeInTheDocument();
    userEvent.click(logoutBtn);
    waitFor(() => {
      expect(history.location.pathname).toBe('/favorite-recipes');
    });
  });
});
