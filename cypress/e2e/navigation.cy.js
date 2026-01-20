describe('Navigation Flow', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should load homepage successfully', () => {
    cy.contains('Hi There!').should('be.visible');
    cy.contains('Jakub Korous').should('be.visible');
  });

  it('should navigate to About page', () => {
    cy.contains('About').click();
    cy.url().should('include', '/about');
    cy.contains('Know Who I Am').should('be.visible');
  });

  it('should navigate to Resume page', () => {
    cy.contains('Resume').click();
    cy.url().should('include', '/resume');
    cy.contains('Download CV EN').should('be.visible');
    cy.contains('Download CV CS').should('be.visible');
  });

  it('should navigate to Contact page', () => {
    cy.contains('Contact').click();
    cy.url().should('include', '/contact');
    cy.contains('Get in Touch').should('be.visible');
  });

  it('should navigate back to home from About', () => {
    cy.contains('About').click();
    cy.url().should('include', '/about');
    cy.contains('Home').click();
    cy.url().should('eq', Cypress.config().baseUrl + '/');
  });

  it('should show active navigation state', () => {
    cy.contains('About').click();
    cy.get('a[href="/about"]').parent().should('have.class', 'active');
  });

  it('should handle browser back button', () => {
    cy.contains('About').click();
    cy.url().should('include', '/about');
    cy.go('back');
    cy.url().should('eq', Cypress.config().baseUrl + '/');
  });

  it('should handle browser forward button', () => {
    cy.contains('About').click();
    cy.go('back');
    cy.go('forward');
    cy.url().should('include', '/about');
  });

  it('should handle direct URL access', () => {
    cy.visit('/about');
    cy.contains('Know Who I Am').should('be.visible');
    cy.visit('/resume');
    cy.contains('Download CV EN').should('be.visible');
  });

  it('should handle 404 page', () => {
    cy.visit('/non-existent-page', { failOnStatusCode: false });
    cy.contains('404').should('be.visible');
    cy.contains('Page Not Found').should('be.visible');
    cy.contains('Go Back Home').click();
    cy.url().should('eq', Cypress.config().baseUrl + '/');
  });

  it('should have working navbar on all pages', () => {
    const pages = ['/', '/about', '/resume', '/contact'];
    
    pages.forEach(page => {
      cy.visit(page);
      cy.get('nav').should('be.visible');
      cy.contains('Home').should('be.visible');
      cy.contains('About').should('be.visible');
      cy.contains('Resume').should('be.visible');
      cy.contains('Contact').should('be.visible');
    });
  });

  it('should have working footer on all pages', () => {
    const pages = ['/', '/about', '/resume', '/contact'];
    
    pages.forEach(page => {
      cy.visit(page);
      cy.get('.footer').should('be.visible');
      cy.contains('Designed & built by Jakub Korous').should('be.visible');
    });
  });
});
