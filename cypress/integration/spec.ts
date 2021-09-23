describe('My First Test', () => {
  it('Visits the initial project page', () => {
    cy.visit('/');
    cy.contains('Bienvenue sur Zenika Ecommerce');
    cy.contains('Voir mon panier');
  });
});
