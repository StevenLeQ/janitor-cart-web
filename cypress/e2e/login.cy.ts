describe('Login Page', () => {
  it('Gets to Login page with all its info', () => {
    cy.visit('/login');
    cy.contains('Sign In');
    cy.contains('No account?');
    cy.contains('Email Address');
    cy.contains('Password');
  });

  // TODO
  // it('Clicking "Sign In" navigates to superadmin dashboard', () => {
  //   cy.visit('/login');
  //   cy.get('button[id="sign-in"]').click();
  //   cy.url().should('include', '/superadmin');
  // });

  it('Clicking "Create One!" navigates to registration', () => {
    cy.visit('/login');
    cy.get('[id="signup"]').click();
    cy.url().should('include', '/signup');
  });

  it('Clicking "Forgot Password" navigates to password reset', () => {
    cy.visit('/login');
    cy.get('[id="forgot-password"]').click();
    cy.url().should('include', '/forgot-password');
  });
});
