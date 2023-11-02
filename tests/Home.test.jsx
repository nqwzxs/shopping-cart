import { render, screen } from '@testing-library/react'
import Home from '../src/components/Home'

describe('Home component', () => {
  it('renders ducks gif', () => {
    render(<Home />)
    expect(screen.getByRole('img'))
  })
})
