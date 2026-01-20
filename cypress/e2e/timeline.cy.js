describe('Timeline Component', () => {
  beforeEach(() => {
    cy.visit('/about');
  });

  it('should display timeline section', () => {
    cy.contains('Education & Experience').should('be.visible');
    cy.get('.timeline-container').should('be.visible');
  });

  it('should display timeline line', () => {
    cy.get('.timeline-line').should('be.visible');
  });

  it('should display all timeline items', () => {
    cy.get('.timeline-item').should('have.length.at.least', 5);
  });

  it('should display Freelance entry', () => {
    cy.contains('Freelance').should('be.visible');
    cy.contains('Jan 2023 - Present').should('be.visible');
  });

  it('should display Leadspicker entry', () => {
    cy.contains('Leadspicker').should('be.visible');
    cy.contains('Apr 2025 - Feb 2026').should('be.visible');
  });

  it('should display University entry', () => {
    cy.contains('University of South Bohemia').should('be.visible');
    cy.contains('Enterprise Informatics').should('be.visible');
  });

  it('timeline items should have correct structure', () => {
    cy.get('.timeline-item').first().within(() => {
      cy.get('.timeline-dot').should('exist');
      cy.get('.timeline-box').should('exist');
      cy.get('.timeline-date').should('exist');
    });
  });

  it('should have alternating left and right items', () => {
    cy.get('.timeline-item.left').should('exist');
    cy.get('.timeline-item.right').should('exist');
  });
});
