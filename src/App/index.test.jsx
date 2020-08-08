import React from 'react';
import { render } from '@testing-library/react';
import Index from './index';


test('renders hello world', () => {
  const { getByText } = render(<Index />);
  const text = getByText(/hello world/i);
  expect(text).toBeInTheDocument();
});
