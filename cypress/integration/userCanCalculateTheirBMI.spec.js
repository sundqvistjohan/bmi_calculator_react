/// <reference types="Cypress" />

describe('BMI Calculator', () => {
  it('Calculates BMI in metric', () => {
    cy.visit('/');
    cy.get('input#weight').type(90);
    cy.get('input#height').type(190);
    cy.get('select#select-method').select('metric')
    cy.get('button#calculate').click();
    cy.get('p#bmi-message').should('contain', 'You are Normal-weight with a BMI of 24.93')
  })
})