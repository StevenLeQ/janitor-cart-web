import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, test } from 'vitest';
import { BrowserRouter } from 'react-router-dom';

// Components and pages to test
import SidebarFinal from './Sidebar';
import { SidebarHeader } from './Header';
import { SidebarFooter } from './Footer';

describe('Main Sidebar', () => {
  test('Renders menu items correctly', () => {
    render(
      <BrowserRouter>
        <SidebarFinal />
      </BrowserRouter>
    );

    expect(screen.getByText('Dashboard')).toBeInTheDocument();
    expect(screen.getByText('Companies')).toBeInTheDocument();
    expect(screen.getByText('Work Rights Files')).toBeInTheDocument();
    expect(screen.getByText('Videos')).toBeInTheDocument();

    // Check icons (e.g., Squares2X2Icon, BuildingOfficeIcon, etc.)
    expect(screen.getByLabelText('dashboard-icon')).toBeInTheDocument();
    expect(screen.getByLabelText('companies-icon')).toBeInTheDocument();
    expect(screen.getByLabelText('work-rights-files-icon')).toBeInTheDocument();
    expect(screen.getByLabelText('videos-icon')).toBeInTheDocument();
  });

  test('Menu items have correct active and hover behavior', () => {
    render(
      <BrowserRouter>
        <SidebarFinal />
      </BrowserRouter>
    );

    // Get all buttons from sidebar
    const dashboardMenuItem = screen.getAllByTestId('ps-menu-button-test-id');

    const user = userEvent.setup();

    // Active
    user.click(dashboardMenuItem[1]);
    expect(dashboardMenuItem[1]).toHaveStyle('background-color: #c1ccf0');
    // Hover
    user.hover(dashboardMenuItem[0]);
    expect(dashboardMenuItem[0]).toHaveStyle('background-color: #E6EAF9');
  });

  test('Renders "Log out" menu item correctly', () => {
    render(
      <BrowserRouter>
        <SidebarFinal />
      </BrowserRouter>
    );
    const logoutMenuItem = screen.getByText('Log out');
    expect(logoutMenuItem).toBeInTheDocument();
  });

  // TODO Themes is not implemented
  test.todo('Changes theme correctly when theme switch is toggled', () => {
    render(
      <BrowserRouter>
        <SidebarFinal />
      </BrowserRouter>
    );

    const themeSwitch = screen.getByTestId('theme-switch');

    // Initial theme is 'light'
    expect(screen.getByText('light')).toBeInTheDocument();
    expect(screen.queryByText('dark')).not.toBeInTheDocument();

    fireEvent.click(themeSwitch); // Toggle theme to 'dark'
    expect(screen.getByText('dark')).toBeInTheDocument();
    expect(screen.queryByText('light')).not.toBeInTheDocument();

    fireEvent.click(themeSwitch); // Toggle theme back to 'light'
    expect(screen.getByText('light')).toBeInTheDocument();
    expect(screen.queryByText('dark')).not.toBeInTheDocument();
  });
});

describe('Header', () => {
  test('Renders the SidebarHeader component', () => {
    render(<SidebarHeader collapsed={false} />);
    expect(screen.getByRole('img')).toBeInTheDocument();
  });

  test('Renders the SidebarHeader component with children when collapsed is false', () => {
    render(<SidebarHeader collapsed={false} />);
    const logoImage = screen.getByRole('img');
    const headerText = screen.getByText(/JanitorCart/i);
    expect(logoImage).toBeInTheDocument();
    expect(headerText).toBeInTheDocument();
  });

  test('Visible opacity logo text when collapsed is false', () => {
    render(<SidebarHeader collapsed={false} />);
    expect(screen.getByRole('img')).toBeInTheDocument();
    expect(screen.getByTestId('header-collapsed-test')).toHaveStyle(
      'opacity:1'
    );
  });

  test('Invisible opacity logo text when collapsed is true', () => {
    render(<SidebarHeader collapsed={true} />);
    expect(screen.getByRole('img')).toBeInTheDocument();
    expect(screen.getByTestId('header-collapsed-test')).toHaveStyle(
      'opacity:0'
    );
  });
});

describe('Footer', () => {
  test('Renders the SidebarFooter component', () => {
    render(<SidebarFooter collapsed={false} />);
    const userIcon = screen.getByRole('img', { hidden: true });
    expect(userIcon).toBeInTheDocument();
  });

  test('Renders the SidebarFooter component with user information when collapsed is false', () => {
    render(<SidebarFooter collapsed={false} />);

    expect(screen.getByRole('img', { hidden: true })).toBeInTheDocument();
    expect(screen.getByText('Admin')).toBeInTheDocument();
    expect(screen.getByText('admin@admin.com')).toBeInTheDocument();
  });

  test('Visbile opacity user information text when collapsed is false', () => {
    render(<SidebarFooter collapsed={false} />);

    expect(screen.getByRole('img', { hidden: true })).toBeInTheDocument();
    expect(screen.getByTestId('footer-collapsed-test')).toHaveStyle(
      'opacity:1'
    );
  });

  test('Invisible opacity user information text when collapsed is true', () => {
    render(<SidebarFooter collapsed={true} />);

    expect(screen.getByRole('img', { hidden: true })).toBeInTheDocument();
    expect(screen.getByTestId('footer-collapsed-test')).toHaveStyle(
      'opacity:0'
    );
  });
});
