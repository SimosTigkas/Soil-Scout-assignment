describe('Metric Toggle Test', () => {
  it('switches between Soil Moisture and Temperature', () => {
    cy.visit('http://localhost:5174');
    cy.contains('Soil Moisture');
    cy.contains('Temperature').click();
    cy.contains('Temperature');
  });
});
