import React from 'react'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Panel from '../Panel'

describe('Panel', () => {
  it('render panel component correctly', () => {
    render(<Panel text='hello world' />)

    expect(screen.getByTestId('panel')).toHaveTextContent('hello world')

    // screen.debug()
  })
})
