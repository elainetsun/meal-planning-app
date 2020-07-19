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
});
