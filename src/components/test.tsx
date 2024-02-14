import { render, screen } from '@testing-library/react'

import App from './App'

describe('<App />', () => {
  it('should render main element', () => {
    render(<App />)
    const mainElement = screen.getByRole('main')
    expect(mainElement.parentElement!.firstChild).toBe(mainElement)
  })
  it('should render TodosSidebar', () => {
    render(<App />)
    expect(screen.getByRole('list')).toBeInTheDocument()
  })
})


