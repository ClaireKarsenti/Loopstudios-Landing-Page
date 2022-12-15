import { render, screen } from '@testing-library/react';
import Navbar from '../Navbar';

test('should render Navbar component', () => {
  render(<Navbar />);
  const navbarHeaderElement = screen.getByTestId('header');
  expect(navbarHeaderElement).toBeInTheDocument();
});

test('should display navbar links', () => {
  render(<Navbar />);
  const link = screen.getByRole('list');
  expect(link).toHaveTextContent(/about/);
  expect(link).toHaveTextContent(/careers/);
  expect(link).toHaveTextContent(/support/);
  expect(link).toHaveTextContent(/events/);
  expect(link).toHaveTextContent(/products/);
});

describe('Logo', () => {
  test('Logo must have src="logo.svg" and alt=""', () => {
    render(<Navbar />);
    const logo = screen.getByTestId('logo');
    expect(logo).toHaveAttribute('src', 'logo.svg');
    expect(logo).toHaveAttribute('alt', '');
    expect(logo).toHaveAttribute('aria-hidden', 'true');
  });
});

describe('burger menu', () => {
  test('when the screen is a mobile device the burger menu should displayed', () => {
    render(<Navbar />);
    const burgerMenu = screen.getByTestId('burgerMenu');
    expect(burgerMenu).toHaveAttribute('src', 'icon-hamburger.svg');
    expect(burgerMenu).toHaveAttribute('alt', '');
    expect(burgerMenu).toHaveAttribute('aria-hidden', 'true');
  });
});

describe('close menu', () => {
  test('when the screen is a mobile device and when the menu is displayed a cross should displayed to close it', () => {
    render(<Navbar />);
    const burgerMenu = screen.getByTestId('crossMenu');
    expect(burgerMenu).toHaveAttribute('src', 'icon-close.svg');
    expect(burgerMenu).toHaveAttribute('alt', '');
    expect(burgerMenu).toHaveAttribute('aria-hidden', 'true');
  });
});
