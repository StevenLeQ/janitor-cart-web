describe('Login Page', () => {
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
  });

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

describe('Dashboard', () => {
  it('Gets to dashboard with all its info', () => {
    cy.visit('/superadmin');
    cy.contains('Dashboard');
    cy.contains('Annual Sales');
    cy.contains('Total Customers');
    cy.contains('Total Users');
    cy.contains('New Users');
  });
});

describe('Sidebar', () => {
  it('Sidebar logo click expands sidebar', () => {
    cy.visit('/superadmin');

    cy.get('button[id="logo"]').click();
    cy.contains('JanitorCart');
    cy.contains('Companies');
    cy.contains('Work Rights Files');
    cy.contains('Videos');
    cy.contains('Log out');
  });

  it('Clicking "Dashboard" navigates to dashboard', () => {
    cy.visit('/superadmin/companies');
    cy.get('[id="superadmin"]').click();
    cy.url().should('not.include', '/companies');
  });
});
