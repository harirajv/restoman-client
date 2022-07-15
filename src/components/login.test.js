import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import LoginPage from './login';

test('renders Card without crashing', () => {
  const { getByText } = render(<Router><LoginPage/></Router>);
  const headerElement = getByText('Login');
  const emailLabel = getByText('Email');
  const emailInput = screen.getByLabelText('Email');
  const passwordLabel = getByText('Password');
  expect(headerElement).toBeInTheDocument();
  expect(emailLabel).toBeInTheDocument();
  expect(passwordLabel).toBeInTheDocument();
  expect(emailInput).toBeInTheDocument();
});
