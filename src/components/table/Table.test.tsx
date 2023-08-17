import { expect, test } from 'vitest';
import { render, screen, fireEvent, act } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import Table from './Table';

// Mock the tableProps data for testing
const testData = [
  { company: 'Company A', active: true, email: 'companya@example.com' },
  { company: 'Company B', active: false, email: 'companyb@example.com' }
];

const button = {
  title: 'New File',
  link: './newRights'
};

const ellipsis = [
  { title: 'Edit Company...', link: './editCompany' },
  { title: 'Deactivate Company...', link: '/createCompany' },
  { title: 'Login As This Company...', link: '.' }
];

describe('Table', () => {
  test('Renders the table header correctly', () => {
    render(
      <BrowserRouter>
        <Table data_array={testData} button={button} ellipsis_data={ellipsis} />
      </BrowserRouter>
    );
    expect(screen.getByText('COMPANY')).toBeInTheDocument();
    expect(screen.getByText('EMAIL')).toBeInTheDocument();
    expect(screen.getByText('ACTIVE')).toBeInTheDocument();
  });

  test('Renders the data rows correctly', () => {
    render(
      <BrowserRouter>
        <Table data_array={testData} button={button} ellipsis_data={ellipsis} />
      </BrowserRouter>
    );
    // Assuming there are two data rows based on the provided testData
    expect(screen.getAllByRole('row')).toHaveLength(3); // Including the header row

    // Assuming there are two test data rows
    expect(screen.getByText('Company A')).toBeInTheDocument();
    expect(screen.getByText('Company B')).toBeInTheDocument();
  });

  test('Renders "Active" status correctly', () => {
    render(
      <BrowserRouter>
        <Table data_array={testData} button={button} ellipsis_data={ellipsis} />
      </BrowserRouter>
    );
    // Assuming there are two test data rows
    expect(screen.getByText('Active')).toBeInTheDocument();
    expect(screen.getByText('Inactive')).toBeInTheDocument();
  });

  test.todo('Allows filtering using search bar', async () => {
    render(
      <BrowserRouter>
        <Table data_array={testData} button={button} ellipsis_data={ellipsis} />
      </BrowserRouter>
    );
    const searchInput = screen.getByPlaceholderText('Search all columns...');

    await act(() => {
      fireEvent.change(searchInput, {
        target: { value: 'companya@example.com' }
      });
    });

    // Ensure that only Company A is visible after filtering
    expect(screen.getByText('companya@example.com')).toBeInTheDocument();
    expect(screen.getByText('companyb@example.com')).not.toBeInTheDocument();
  });

  // TODO Does not work fix when can
  test.todo('Displays correct "Active" status after filtering', async () => {
    render(
      <BrowserRouter>
        <Table data_array={testData} button={button} ellipsis_data={ellipsis} />
      </BrowserRouter>
    );

    // Initially, Company A is active and Company B is inactive
    expect(screen.getByText('Active')).toBeInTheDocument();
    expect(screen.getByText('Inactive')).toBeInTheDocument();

    // Filter to show only active companies
    const searchInput = screen.getByPlaceholderText('Search all columns...');

    await act(() => {
      fireEvent.change(searchInput, { target: { value: 'Active' } });
    });

    // Now, only Company A should be visible and its status should be "Active"
    expect(screen.getByText('Company A')).toBeInTheDocument();
    expect(screen.getByText('Active')).toBeInTheDocument();

    // Ensure that Company B is no longer visible
    expect(screen.getByText('Company B')).not.toBeInTheDocument();
    expect(screen.queryByDisplayValue('Inactive')).not.toBeInTheDocument();
  });
});
