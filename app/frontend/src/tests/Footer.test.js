import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import App from '../App';

describe('Testando o componente Footer', () => {
  it('Testando o icone do footer no /meals', () => {
    const { history } = render(
      <MemoryRouter initialEntries={ ['/meals'] }>
        <App />
      </MemoryRouter>,
    );
    const drinkIcon = screen.getByTestId('drinks-bottom-btn');
    waitFor(() => {
      expect(drinkIcon).toBeInTheDocument();
    });
    userEvent.click(drinkIcon);
    waitFor(() => {
      expect(history.location.pathname).toBe('/drinks');
    });
  });

  it('Testando o icone do footer no /drinks', async () => {
    const { history } = render(
      <MemoryRouter initialEntries={ ['/drinks'] }>
        <App />
      </MemoryRouter>,
    );

    const mealsLink = screen.getByTestId('meals-bottom-btn');
    waitFor(() => {
      expect(mealsLink).toBeInTheDocument();
    });
    userEvent.click(mealsLink);
    waitFor(() => {
      expect(history.location.pathname).toBe('/meals');
    });
  });

  it('Testando o icone do footer no /profile', () => {
    const history = render(
      <MemoryRouter initialEntries={ ['/profile'] }>
        <App />
      </MemoryRouter>,
    );
    const mealsLink = screen.getByTestId('meals-bottom-btn');
    waitFor(() => {
      expect(mealsLink).toBeInTheDocument();
    });
    userEvent.click(mealsLink);
    waitFor(() => {
      expect(history.location.pathname).toBe('/meals');
    });

    const drinkIcon = screen.getByTestId('drinks-bottom-btn');
    waitFor(() => {
      expect(drinkIcon).toBeInTheDocument();
    });
    userEvent.click(drinkIcon);
    waitFor(() => {
      expect(history.location.pathname).toBe('/drinks');
    });
  });
});
