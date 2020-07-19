import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import AddIngredientDialog from './AddIngredientDialog';

describe('AddIngredientDialog tests', () => {
  let view;
  let ingredients;
  let isOpen = true;
  let onSubmitMock;
  let onCloseMock;

  beforeEach(() => {
    onSubmitMock = jest.fn(newIngredients => {
      ingredients.concat(newIngredients);
    });

    onCloseMock = jest.fn(() => (isOpen = false));

    view = render(
      <AddIngredientDialog
        isOpen={isOpen}
        onSubmit={onSubmitMock}
        onClose={onCloseMock}
      />
    );
  });

  afterEach(() => {
    if (isOpen === false) {
      isOpen = true;
    }
  });

  test('Headings exist in DOM', () => {
    const headings = screen.getAllByRole('heading');
    expect(headings).toHaveLength(2);

    expect(headings[0].textContent).toMatch(/Add New Ingredient/i);
    expect(headings[1].textContent).toMatch(/Ingredients List/i);
  });

  test('Buttons exist in DOM and submit', () => {
    const addButton = screen.getByRole('button', { name: /Add/i });
    expect(addButton).toBeInTheDocument();

    const submitButton = screen.getByRole('button', { name: /Submit/i });
    expect(submitButton).toBeInTheDocument();

    const cancelButton = screen.getByRole('button', { name: /Cancel/i });
    expect(cancelButton).toBeInTheDocument();
  });
});
