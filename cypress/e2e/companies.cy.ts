describe('Companies Table', () => {
  it('Gets to Companies page fine', () => {
    cy.visit('/superadmin/companies');

    cy.contains('Companies');
    cy.contains('List of companies currently using The Janitor Cart services');
    cy.contains('New Company');
    cy.contains('Company');
  });

  it('Clicking "New Company" navigates to new company', () => {
    cy.visit('/superadmin/companies');
    cy.get('[id="new-variable"]').click();
    cy.url().should('include', '/create');
  });
});

describe('Ellipsis Menu', () => {
  it('Clicking ellipsis pops in menu', () => {
    cy.visit('/superadmin/companies');
    cy.get('button[id="ellipsis"]:first').click();
    cy.contains('Edit Company...');
    cy.contains('Deactivate Company...');
    cy.contains('Login As This Company...');
  });

  it('Clicking "Edit Company" navigates to edit company', () => {
    cy.visit('/superadmin/companies');
    cy.get('button[id="ellipsis"]:first').click();
    cy.get('[id="ellipsis-menu-0"]').click();
    cy.url().should('include', '/edit');
  });

  it('Clicking "Deactivate Company" drops down deactivate alert', () => {
    cy.visit('/superadmin/companies');
    cy.get('button[id="ellipsis"]:first').click();
    cy.get('[id="ellipsis-menu-1"]').click();
    cy.contains('Deactivating Company?');
    cy.contains(
      'Are you sure you want to switch the status of the selected company to "Inactive"?'
    );
  });

  // TODO Actually implement deactivate first
  it('Clicking "Deactivate" in the alert drop down deactivates the company', () => {
    cy.visit('/superadmin/companies');
    cy.get('button[id="ellipsis"]:first').click();
    cy.get('[id="ellipsis-menu-1"]').click();
    cy.get('[id="alert-submit"]').click();
    cy.contains('Deactivating Company?').should('not.exist');
    cy.contains(
      'Are you sure you want to switch the status of the selected company to "Inactive"?'
    ).should('not.exist');
  });

  it('Clicking "Cancel" in the alert drop down cancels the deactivation', () => {
    cy.visit('/superadmin/companies');
    cy.get('button[id="ellipsis"]:first').click();
    cy.get('[id="ellipsis-menu-1"]').click();
    cy.get('[id="alert-cancel"]').click();
    cy.contains('Deactivating Company?').should('not.exist');
    cy.contains(
      'Are you sure you want to switch the status of the selected company to "Inactive"?'
    ).should('not.exist');
  });
});

// describe('Pagination', () => {
//   it('Placeholder', () => {
//     cy.visit('/superadmin/companies');
//   });
// });
