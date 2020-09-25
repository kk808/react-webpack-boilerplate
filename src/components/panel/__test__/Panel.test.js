import React from 'react'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Panel from '../Panel'

describe('Panel', () => {
  it('render panel component correctly', () => {
    const { getByTestId, container } = render(<Panel text='hello world' />)

    expect(getByTestId('panel')).toHaveTextContent('hello world')

    //screen.debug()
    screen.debug(container)
  })
})
