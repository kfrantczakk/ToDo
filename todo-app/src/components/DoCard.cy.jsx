import React from 'react'
import { DoCard } from './DoCard'

describe('<DoCard />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<DoCard />)
  })
})