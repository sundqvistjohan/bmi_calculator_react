/// <reference types="Cypress" />

describe('BMI Calculator', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('Calculates BMI in metric', () => {
    cy.get('input#weight').type(90);
    cy.get('input#height').type(190);
    cy.get('select#select-method').select('metric')
    cy.get('button#calculate').click();
    cy.get('p#bmi-message').should('contain', 'You are Normal-weight with a BMI of 24.93')
  })

  it('Calculates BMI in imperial', () => {
    cy.get('input#weight').type(198);
    cy.get('input#height').type(74);
    cy.get('select#select-method').select('imperial')
    cy.get('button#calculate').click();
    cy.get('p#bmi-message').should('contain', 'You are Overweight with a BMI of 25.42')
  })
})