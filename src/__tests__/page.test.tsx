import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Page from '../app/page'

describe('Page', () => {
  it('renders a greeting', () => {
    render(<Page />)

    const greeting = screen.getByText(
      'Convide seus amigos e planeje sua próxima viagem!',
    )

    expect(greeting).toBeInTheDocument()
  })

  it('renders a logo image', () => {
    render(<Page />)

    const logoImage = screen.getByAltText('planner logo')

    expect(logoImage).toBeInTheDocument()
  })

  it('renders a input destination', () => {
    render(<Page />)

    const input = screen.getByPlaceholderText('Para onde você vai?')

    expect(input).toBeInTheDocument()
  })
})
