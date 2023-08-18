describe('Login', () => {
  it('Gets to Login page with all its info', () => {
    cy.visit('/login');
    cy.contains('Sign In');
    cy.contains('No account?');
    cy.contains('Email Address');
    cy.contains('Password');
  });

  it('Clicking "Sign In" navigates to superadmin dashboard', () => {
    cy.visit('/login');
    cy.get('button[id="sign-in"]').click();
    cy.url().should('include', '/superadmin');
    // cy.contains('Dashboard');
    // cy.contains('Annual Sales');
    // cy.contains('Total Customers');
    // cy.contains('Total Users');
    // cy.contains('New Users');

    // cy.get('button[id="logo"]').click();
    // cy.contains('JanitorCart');
    // cy.contains('Companies');
    // cy.contains('Log out');

    // cy.get('button[id="logo"]').click();
  });
});
