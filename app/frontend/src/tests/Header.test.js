import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import App from '../App';

describe('Testando o componente Header', () => {
  it('Testando o icone do perfil', () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>,
    );
    const inputEmail = screen.getByTestId('email-input');
    expect(inputEmail).toBeInTheDocument();
    userEvent.type(inputEmail, 'grupo18@trybe.com');
    const inputPassword = screen.getByTestId('password-input');
    expect(inputPassword).toBeInTheDocument();
    userEvent.type(inputPassword, '1234567');

    const buttonEnter = screen.getByTestId('login-submit-btn');
    expect(buttonEnter).toBeInTheDocument();

    userEvent.click(buttonEnter);
    const profileLink = screen.getByTestId('profile-top-btn');
    expect(profileLink).toBeInTheDocument();
    userEvent.click(profileLink);
  });

  it('Testando o icone do pesquisa', () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>,
    );
    const inputEmail = screen.getByTestId('email-input');
    expect(inputEmail).toBeInTheDocument();
    userEvent.type(inputEmail, 'grupo18@trybe.com');
    const inputPassword = screen.getByTestId('password-input');
    expect(inputPassword).toBeInTheDocument();
    userEvent.type(inputPassword, '1234567');

    const buttonEnter = screen.getByTestId('login-submit-btn');
    expect(buttonEnter).toBeInTheDocument();

    userEvent.click(buttonEnter);

    const iconSearch = screen.getByTestId('search-top-btn');
    expect(iconSearch).toBeInTheDocument();
    userEvent.click(iconSearch);
    const searchInput = screen.getByTestId('search-input');
    expect(searchInput).toBeInTheDocument();
    userEvent.click(iconSearch);
  });
});
