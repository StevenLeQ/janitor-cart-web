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

  it('Sidebar logo starts off unexpanded', () => {
    cy.visit('/superadmin');

    cy.contains('JanitorCart').should('not.exist');
    cy.contains('Companies').should('not.exist');
    cy.contains('Work Rights Files').should('not.exist');
    cy.contains('Videos').should('not.exist');
    cy.contains('Log out').should('not.exist');
  });

  it('Clicking "Dashboard" navigates to dashboard', () => {
    cy.visit('/superadmin/companies');
    cy.get('[id="superadmin"]').click();
    cy.url().should('not.include', '/companies');
  });

  it('Clicking "Companies" navigates to companies', () => {
    cy.visit('/superadmin');
    cy.get('[id="companies"]').click();
    cy.url().should('include', '/companies');
  });

  it('Clicking "Work Rights Files" navigates to rights', () => {
    cy.visit('/superadmin');
    cy.get('[id="rights"]').click();
    cy.url().should('include', '/rights');
  });

  it('Clicking "Videos" navigates to videos', () => {
    cy.visit('/superadmin');
    cy.get('[id="videos"]').click();
    cy.url().should('include', '/videos');
  });

  it('Clicking "Log Out" navigates to login', () => {
    cy.visit('/superadmin');
    cy.get('[id="logout"]').click();
    cy.url().should('include', '/login');
  });
});
