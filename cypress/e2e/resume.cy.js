describe('Resume Page', () => {
  beforeEach(() => {
    cy.visit('/resume');
  });

  it('should display download buttons', () => {
    cy.contains('Download CV EN').should('be.visible');
    cy.contains('Download CV CS').should('be.visible');
  });

  it('should display PDF preview', () => {
    cy.get('.react-pdf__Document', { timeout: 10000 }).should('exist');
  });

  it('download buttons should have correct attributes', () => {
    cy.contains('Download CV EN')
      .should('have.attr', 'target', '_blank')
      .and('have.attr', 'href')
      .and('include', '.pdf');
    
    cy.contains('Download CV CS')
      .should('have.attr', 'target', '_blank')
      .and('have.attr', 'href')
      .and('include', '.pdf');
  });
});
