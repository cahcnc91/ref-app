import React from 'react'
import { render, screen } from '@testing-library/react'
import NavBar from '.'

describe('NavBar', () => {
  it('renders products link', () => {
    render(<NavBar />)

    const productsLink = screen.getByRole('button', {
      name: /products/i,
    })

    expect(productsLink).toBeInTheDocument()
  })
})