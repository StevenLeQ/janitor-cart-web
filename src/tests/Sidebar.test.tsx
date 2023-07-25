import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, test } from 'vitest';
import { BrowserRouter } from 'react-router-dom';

// Components and pages to test
import SidebarFinal from '../scenes/global/Sidebar';
import { SidebarHeader } from '../components/Sidebar/SidebarHeader';
import { SidebarFooter } from '../components/Sidebar/SidebarFooter';

describe('Main Sidebar', () => {
  test('Renders menu items correctly', () => {
    render(
      <BrowserRouter>
        <SidebarFinal />
      </BrowserRouter>
    );
    const dashboardMenuItem = screen.getByText('Dashboard');
    const companiesMenuItem = screen.getByText('Companies');
    const workRightsFilesMenuItem = screen.getByText('Work Rights Files');
    const videosMenuItem = screen.getByText('Videos');

    expect(dashboardMenuItem).toBeInTheDocument();
    expect(companiesMenuItem).toBeInTheDocument();
    expect(workRightsFilesMenuItem).toBeInTheDocument();
    expect(videosMenuItem).toBeInTheDocument();

    // Check icons (e.g., Squares2X2Icon, BuildingOfficeIcon, etc.)
    expect(screen.getByLabelText('dashboard-icon')).toBeInTheDocument();
    expect(screen.getByLabelText('companies-icon')).toBeInTheDocument();
    expect(screen.getByLabelText('work-rights-files-icon')).toBeInTheDocument();
    expect(screen.getByLabelText('videos-icon')).toBeInTheDocument();
  });

  test.todo('Menu items have correct styles and hover behavior', () => {
    render(
      <BrowserRouter>
        <SidebarFinal />
      </BrowserRouter>
    );

    // Get all buttons from sidebar
    const dashboardMenuItem = screen.getAllByTestId('ps-menu-button-test-id');

    // TODO Hover and expect BG to change color (ALWAYS TRUE)
    const user = userEvent.setup();
    user.hover(dashboardMenuItem[1]);
    expect(dashboardMenuItem[0]).toHaveStyle('background-color: #E6EAF9');
    expect(dashboardMenuItem[0]).toHaveStyle('color: #44596e');
  });

  test('renders "Log out" menu item correctly', () => {
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
    const logoImage = screen.getByRole('img');
    expect(logoImage).toBeInTheDocument();
  });

  test('Renders the SidebarHeader component with children when collapsed is false', () => {
    render(<SidebarHeader collapsed={false} />);
    const logoImage = screen.getByRole('img');
    const headerText = screen.getByText(/JanitorCart/i);
    expect(logoImage).toBeInTheDocument();
    expect(headerText).toBeInTheDocument();
  });

  test('Does not render the child content when collapsed is true', () => {
    render(<SidebarHeader collapsed={true} />);
    const logoImage = screen.getByRole('img');
    const headerText = screen.queryByText(/JanitorCart/i);
    expect(logoImage).toBeInTheDocument();
    expect(headerText).toBeNull();
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

    const userIcon = screen.getByRole('img', { hidden: true });
    const adminName = screen.getByText('Admin');
    const adminEmail = screen.getByText('admin@admin.com');

    expect(userIcon).toBeInTheDocument();
    expect(adminName).toBeInTheDocument();
    expect(adminEmail).toBeInTheDocument();
  });

  test('Does not render the user information when collapsed is true', () => {
    render(<SidebarFooter collapsed={true} />);

    const userIcon = screen.getByRole('img', { hidden: true });
    const adminName = screen.queryByText('Admin');
    const adminEmail = screen.queryByText('admin@admin.com');

    expect(userIcon).toBeInTheDocument();
    expect(adminName).toBeNull();
    expect(adminEmail).toBeNull();
  });
});
