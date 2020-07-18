import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppToolbar from './AppToolbar';

describe('AppToolbar tests', () => {
  const links = [
    { text: 'Recipes', location: '/recipes' },
    { text: 'Shopping List', location: '/shopping-list' }
  ];

  beforeEach(() => {
    render(
      <Router>
        <AppToolbar />
      </Router>
    );
  });

  test.each(links)('links and proper hrefs exist', link => {
    const linkItem = screen.getByRole('link', { name: link.text });
    expect(linkItem).toHaveAttribute('href', link.location);
  });
});
