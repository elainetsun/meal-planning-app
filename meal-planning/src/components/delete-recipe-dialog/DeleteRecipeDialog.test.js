import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import DeleteRecipeDialog from './DeleteRecipeDialog';

describe('DeleteRecipeDialog tests', () => {
  let view;
  let isOpen = true;
  let onDeleteMock;
  let onCloseMock;

  beforeEach(() => {
    onDeleteMock = jest.fn(() => (isOpen = false));
    onCloseMock = jest.fn(() => (isOpen = false));

    view = render(
      <DeleteRecipeDialog
        isOpen={isOpen}
        recipeName="Pasta"
        onDelete={onDeleteMock}
        onClose={onCloseMock}
      />
    );
  });

  afterEach(() => {
    if (isOpen === false) {
      isOpen = true;
    }
  });

  test('Dialog title displays with Recipe name', () => {
    const title = screen.getByRole('heading', 'Delete the recipe for Pasta?');
    expect(title).toBeInTheDocument();
  });

  test('Dialog warning message displays', () => {
    const description = screen.getByText(
      'The recipe will be permanently deleted.'
    );
    expect(description).toBeInTheDocument();
  });

  test('onDelete hides dialog', () => {
    const deleteButton = screen.getByRole('button', { name: 'Yes' });

    userEvent.click(deleteButton);
    expect(onDeleteMock.mock.calls.length).toBe(1);
    expect(isOpen).toBe(false);

    view.rerender(
      <DeleteRecipeDialog
        isOpen={isOpen}
        recipeName="Pasta"
        onDelete={onDeleteMock}
        onClose={onCloseMock}
      />
    );

    expect(deleteButton).not.toBeVisible();
  });

  test('onClose hides dialog', () => {
    const closeButton = screen.getByRole('button', { name: 'No' });

    userEvent.click(closeButton);
    expect(onCloseMock.mock.calls.length).toBe(1);
    expect(isOpen).toBe(false);

    view.rerender(
      <DeleteRecipeDialog
        isOpen={isOpen}
        recipeName="Pasta"
        onDelete={onDeleteMock}
        onClose={onCloseMock}
      />
    );

    expect(closeButton).not.toBeVisible();
  });

  test('Hitting escape or clicking off dialog fires onClose', () => {
    const dialog = screen.getByRole('presentation', { hidden: true });
    const backdrop = document.querySelector('.MuiBackdrop-root');

    fireEvent.keyDown(dialog, { key: 'Escape', code: 'Escape' });
    expect(onCloseMock.mock.calls.length).toBe(1);

    userEvent.click(backdrop);
    expect(onCloseMock.mock.calls.length).toBe(2);
  });
});
