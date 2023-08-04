import { vi, expect, test } from 'vitest';
import { render, screen, fireEvent, act } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import Table from '../../components/table/Table';
import TableEllipsisButton from './TableEllipsisButton';
import DebouncedInput from './TableDebouncedInput';
import GeneratePaginationButtons from './TablePagination';

// Mock the tableProps data for testing
const testData = [
  { company: 'Company A', active: true, email: 'companya@example.com' },
  { company: 'Company B', active: false, email: 'companyb@example.com' }
  // Add more test data as needed
];

const button = {
  title: 'New File',
  link: './newRights'
};

const ellipsis = [
  { title: 'Edit Company...', link: './editCompany' },
  { title: 'Deactivate Company...', link: '#' },
  { title: 'Login As This Company...', link: '#' }
];

describe('Table', () => {
  test('Renders the table header correctly', () => {
    render(
      <BrowserRouter>
        <Table dataArray={testData} button={button} />
      </BrowserRouter>
    );
    expect(screen.getByText('COMPANY')).toBeInTheDocument();
    expect(screen.getByText('EMAIL')).toBeInTheDocument();
    expect(screen.getByText('ACTIVE')).toBeInTheDocument();
  });

  test('Renders the data rows correctly', () => {
    render(
      <BrowserRouter>
        <Table dataArray={testData} button={button} />
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
        <Table dataArray={testData} button={button} />
      </BrowserRouter>
    );
    // Assuming there are two test data rows
    expect(screen.getByText('Active')).toBeInTheDocument();
    expect(screen.getByText('Inactive')).toBeInTheDocument();
  });

  test.todo('Allows filtering using search bar', async () => {
    render(
      <BrowserRouter>
        <Table dataArray={testData} button={button} />
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
        <Table dataArray={testData} button={button} />
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

describe('Ellipsis Menu', async () => {
  test('Displays menu items when button is clicked', async () => {
    render(
      <BrowserRouter>
        <TableEllipsisButton ellipsis_data={ellipsis} />
      </BrowserRouter>
    );

    // Find the ellipsis button
    const ellipsisButton = screen.getByRole('button', {
      name: /Open options/i
    });

    // Ensure the menu items are initially not displayed
    expect(screen.queryByText('Edit Company...')).not.toBeInTheDocument();
    expect(screen.queryByText('Deactivate Company...')).not.toBeInTheDocument();
    expect(
      screen.queryByText('Login As This Company...')
    ).not.toBeInTheDocument();
    expect(screen.queryByText('THIS TEXT IS UNSET')).not.toBeInTheDocument();

    // Click the ellipsis button to open the menu
    await act(() => {
      fireEvent.click(ellipsisButton);
    });

    // Check if the menu items are displayed after the click
    expect(screen.getByText('Edit Company...')).toBeInTheDocument();
    expect(screen.getByText('Deactivate Company...')).toBeInTheDocument();
    expect(screen.getByText('Login As This Company...')).toBeInTheDocument();
  });

  test('Hides menu items when button is clicked again', () => {
    render(
      <BrowserRouter>
        <TableEllipsisButton ellipsis_data={ellipsis} />
      </BrowserRouter>
    );

    // Find the ellipsis button
    const ellipsisButton = screen.getByRole('button', {
      name: /Open options/i
    });

    // Click the ellipsis button to open the menu
    fireEvent.click(ellipsisButton);

    // Check if the menu items are displayed after the first click
    expect(screen.getByText('Edit Company...')).toBeInTheDocument();

    // Click the ellipsis button again to close the menu
    fireEvent.click(ellipsisButton);

    // Check if the menu items are no longer displayed after the second click
    expect(screen.queryByText('Edit Company...')).not.toBeInTheDocument();
  });
});

describe('Debounced Input', () => {
  beforeEach(() => {
    // tell vitest we use mocked time
    vi.useFakeTimers();
  });

  afterEach(() => {
    // restoring date after each test run
    vi.useRealTimers();
  });

  test('Triggers onChange callback after debounce', () => {
    const onChangeMock = vi.fn();
    const debounceDelay = 500;

    render(
      <DebouncedInput
        value=""
        onChange={onChangeMock}
        debounce={debounceDelay}
      />
    );

    const inputElement = screen.getByRole('textbox');

    // Simulate user typing in the input field
    fireEvent.change(inputElement, { target: { value: 'Hello' } });

    // Fast-forward time to just before the debounce delay
    act(() => {
      vi.advanceTimersByTime(debounceDelay - 1);
    });

    // Check that the onChange callback hasn't been called yet
    expect(onChangeMock).not.toHaveBeenCalled();

    // Fast-forward time to after the debounce delay
    act(() => {
      vi.advanceTimersByTime(1);
    });

    // Check that the onChange callback has been called with the correct value
    expect(onChangeMock).toHaveBeenCalledWith('Hello');

    // Simulate further typing before the debounce delay
    fireEvent.change(inputElement, { target: { value: 'Hello World' } });

    // Fast-forward time to just before the second debounce delay
    act(() => {
      vi.advanceTimersByTime(debounceDelay - 1);
    });

    // Check that the onChange callback hasn't been called yet
    expect(onChangeMock).toHaveBeenCalledTimes(1); // The previous call

    // Fast-forward time to after the second debounce delay
    act(() => {
      vi.advanceTimersByTime(1);
    });

    // Check that the onChange callback has been called again with the new value
    expect(onChangeMock).toHaveBeenCalledWith('Hello World');
  });
});

const mockTable = {
  getState: () => ({
    pagination: {
      pageIndex: 0
    }
  }),
  setPageIndex: vi.fn(),
  getPageCount: () => 25
};

describe('Table Pagination', () => {
  test('Renders buttons correctly when in middle of buttons', () => {
    const totalButtons = 5;
    render(<>{GeneratePaginationButtons(mockTable, totalButtons)}</>);

    // Check if the correct buttons are rendered correctly at start
    expect(screen.queryByText('1')).toBeInTheDocument();
    expect(screen.queryByText('3')).toBeInTheDocument();
    expect(screen.queryByText('4')).toBeInTheDocument();
    expect(screen.queryByText('5')).toBeInTheDocument();
    expect(screen.queryByText('...')).toBeInTheDocument();
    expect(screen.queryByText('25')).toBeInTheDocument();
  });

  test('Generates correct number of buttons', () => {
    const totalButtons = 5;
    const buttons = GeneratePaginationButtons(mockTable, totalButtons);
    console.log(buttons);
    // Generates the buttons - [1, 2, 3, 4, 5, ..., 25] for 7 final
    expect(buttons.length).toBe(totalButtons + 2);
  });

  test('Calls setPageIndex correctly on button click', () => {
    const totalButtons = 5;
    const buttons = GeneratePaginationButtons(mockTable, totalButtons);

    // Simulate clicking on the second button
    buttons[1].props.onClick();

    // Expect setPageIndex to be called with the correct index (1)
    expect(mockTable.setPageIndex).toHaveBeenCalledWith(1);

    // Simulate clicking on another button
    buttons[4].props.onClick();

    // Expect setPageIndex to be called with the correct index (1)
    expect(mockTable.setPageIndex).toHaveBeenCalledWith(4);
  });

  test('Generates the ellipsis button', () => {
    const totalButtons = 1;
    const buttons = GeneratePaginationButtons(mockTable, totalButtons);
    // The ellipsis span should be present in the end
    expect(buttons[totalButtons].props.children).toBe('...');
  });
});
