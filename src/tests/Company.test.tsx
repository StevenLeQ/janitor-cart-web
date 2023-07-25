import { vi, expect, test } from 'vitest';

import { render, screen, fireEvent, act } from '@testing-library/react';

import GeneratePaginationButtons from '../components/Companies/CompaniesPagination';
import DebouncedInput from '../components/Companies/DebouncedInput';
import CDetailButton from '../components/Companies/CDetailButton';

describe('Eliipsis Menu', () => {
  test('Displays menu items when button is clicked', () => {
    render(<CDetailButton />);

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
    fireEvent.click(ellipsisButton);

    // Check if the menu items are displayed after the click
    expect(screen.getByText('Edit Company...')).toBeInTheDocument();
    expect(screen.getByText('Deactivate Company...')).toBeInTheDocument();
    expect(screen.getByText('Login As This Company...')).toBeInTheDocument();
    expect(screen.getByText('THIS TEXT IS UNSET')).toBeInTheDocument();
  });

  test('Hides menu items when button is clicked again', () => {
    render(<CDetailButton />);

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

describe('Table Pagination', () => {
  test('Renders 5 pagination buttons starting at 0', () => {
    const tableMock = {
      getState: () => ({ pagination: { pageIndex: 2 } }),
      getPageCount: () => 10,
      setPageIndex: vi.fn()
    };

    const totalButtons = 5;

    render(<div>{GeneratePaginationButtons(tableMock, totalButtons)}</div>);

    // Check if the correct buttons are rendered based on the current page index and total number of pages
    expect(screen.queryByText('1')).toBeInTheDocument();
    expect(screen.queryByText('...')).toBeInTheDocument();
    expect(screen.queryByText('3')).toBeInTheDocument();
    expect(screen.queryByText('4')).toBeInTheDocument();
    expect(screen.queryByText('5')).toBeInTheDocument();
  });
});
