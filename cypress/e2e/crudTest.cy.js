import { setActivePinia, createPinia } from "pinia"

describe('My First Test', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('visits the app root url', () => {
    cy.visit('/')
    cy.contains('h1', 'Board')
  })

  it('Creates a new todo item with tag -doing-', () => {
    cy.visit('/')
    cy.contains('button', 'Doing').click()
    cy.get('#title').type('Testing create cypress')
    cy.get('#details').type('Details for testing')
    cy.contains('button', 'Add').click()
    cy.contains('p', 'Testing create cypress')
  })

  it('Updates a todo item', () => {
    cy.visit('/')
    cy.get('#more-icon').click()
    cy.contains('p', 'Edit').click()
    cy.get('#title-e').type('Testing edit cypress')
    cy.get('#details-e').type('Details for testing')
    cy.contains('button', 'Edit').click()
    cy.contains('p', 'Testing edit cypress')
  })

  it('Deletes a todo item', () => {
    cy.visit('/')
    cy.get('#more-icon').click()
    cy.contains('p', 'Delete').click()
  })
})
