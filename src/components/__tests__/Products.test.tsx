import { render, screen } from '@testing-library/react';
import Products from '../Products';

const products: { text: string }[] = [
  { text: 'deep earth' },
  { text: 'night arcade' },
  { text: 'soccer team vr' },
  { text: 'the grid' },
  { text: 'from up above vr' },
  { text: 'pocket borealis' },
  { text: 'the curiosity' },
  { text: 'make it fisheye' },
];

describe('Products', () => {
  test.each(products)('Check if Products have 8 items.', (product) => {
    render(<Products />);
    const titleProduct = screen.getByText(product.text);
    expect(titleProduct).toBeInTheDocument();
  });
});

describe('Button', () => {
  test('should render a button with the text "see all"', () => {
    render(<Products />);
    const button = screen.getByRole('button', { name: /see all/i });
    expect(button).toBeInTheDocument();
  });
});
