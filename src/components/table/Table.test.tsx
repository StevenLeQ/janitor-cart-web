import { vi, expect, test } from 'vitest';
import { render, screen, fireEvent, act } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import Table from './Table';
import EllipsisButton from './EllipsisButton';
import DebouncedInput from './DebouncedInput';
import GeneratePaginationButtons from './Pagination';

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

describe('Ellipsis Menu', async () => {
  test('Displays menu items when button is clicked', async () => {
    render(
      <BrowserRouter>
        <EllipsisButton ellipsis_data={ellipsis} />
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
        <EllipsisButton ellipsis_data={ellipsis} />
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
