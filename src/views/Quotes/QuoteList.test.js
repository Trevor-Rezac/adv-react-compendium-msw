import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../../App';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { MemoryRouter } from 'react-router-dom';

const quotes = [
  {
    character: 'Homer Simpson',
    quote: 'Doh!',
    img: 'https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FHomerSimpson.png?1497567511939',
  },
  {
    character: 'Homer Simpson',
    quote: 'Mmmm donuts!',
    img: 'https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FHomerSimpson.png?1497567511939',
  },
  {
    character: 'Bart Simpson',
    quote: 'Eat my shorts',
    img: 'https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FBartSimpson.png?1497567511638',
  },
];

const server = setupServer(
  rest.get(`https://thesimpsonsquoteapi.glitch.me/quotes`, (req, res, ctx) =>
    res(ctx.json(quotes))
  )
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

it('should display a list of characters and quotes with a title', async () => {
  render(<App />);
  const pageTitle = screen.getByRole('heading', {
    level: 1,
  });
  expect(pageTitle.textContent).toEqual('Simpsons Quote Generator');
  const characterImages = await screen.findAllByAltText(
    'simpson character image'
  );

  expect(characterImages.length).toEqual(3);
});

it('should mock the user interaction of selecting the drop down item Bart Simpson', async () => {
  render(<App />);
  userEvent.selectOptions(
    screen.getByRole('combobox'),

    screen.getByRole('option', { name: 'Bart Simpson' })
  );

  expect(screen.getByRole('option', { name: 'Bart Simpson' }).selected).toBe(
    true
  );
});
