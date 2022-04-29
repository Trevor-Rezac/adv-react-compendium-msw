import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import QuoteList from './QuoteList';

describe('QuoteList tests', () => {
  it.skip('should display a list of characters and quotes', async () => {
    render(
      <MemoryRouter>
        <QuoteList />
      </MemoryRouter>
    );
  });
});
