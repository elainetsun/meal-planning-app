import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppToolbar from './AppToolbar';

describe('Links are rendered', () => {
  let component;

  const links = [
    { text: 'Recipes', location: '/recipes' },
    { text: 'Shopping List', location: '/shopping-list' }
  ];

  beforeEach(() => {
    component = render(
      <Router>
        <AppToolbar />
      </Router>
    );
  });

  test.each(links)('link and proper href exist', link => {
    const linkElement = component.getByText(link.text);
    expect(linkElement).toHaveAttribute('href', link.location);
  });
});
