import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import QuotePage from './QuotePage'

describe('QuotePage tests', () => {
  it('should render a title on the quote page', async () => {
    render(
      <MemoryRouter>
        <QuotePage />
      </MemoryRouter>
    )

    const pageTitle = screen.getByRole('heading', {
      level: 1
    })

    expect(pageTitle).toBeInTheDocument()
  })
})