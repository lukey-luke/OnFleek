import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import NewComponent from './NewComponent';

describe('<NewComponent />', () => {
  test('it should mount', () => {
    render(<NewComponent />);
    
    const newComponent = screen.getByTestId('NewComponent');

    expect(newComponent).toBeInTheDocument();
  });
});