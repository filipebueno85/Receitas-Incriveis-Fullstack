import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
// import { act } from 'react-dom/test-utils';
import { MemoryRouter } from 'react-router-dom';
import App from '../App';

describe('Testando a tela de Login', () => {
  it('Testando o que está na pagina de login', () => {
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
  });
});
