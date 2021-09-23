describe('My First Test', () => {
  it('Visits the initial project page', () => {
    cy.visit('/');
    cy.contains('Bienvenue sur Zenika Ecommerce');
    cy.contains('Voir mon panier');
  });

  describe('Add to basket', () => {
    it('Add to the basket and update the total', () => {
      cy.visit('/');

      cy.get('button').contains('Ajoutez au panier').click();

      cy.contains("Votre panier s'élève à €20.00");
    });
  });
});
