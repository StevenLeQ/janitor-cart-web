import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from '../../auth/AuthContext';

// Components and pages to test
import SidebarFinal from './Sidebar';
import { Header } from './Header';
import { Footer } from './Footer';

describe('Main Sidebar', () => {
  test('Renders menu items correctly', () => {
    render(
      <AuthProvider>
        <BrowserRouter>
          <SidebarFinal />
        </BrowserRouter>
      </AuthProvider>
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

  test('Renders "Log out" menu item correctly', () => {
    render(
      <AuthProvider>
        <BrowserRouter>
          <SidebarFinal />
        </BrowserRouter>
      </AuthProvider>
    );
    const logoutMenuItem = screen.getByText('Log out');
    expect(logoutMenuItem).toBeInTheDocument();
  });
});

describe('Header', () => {
  test('Renders the Header component', () => {
    render(<Header collapsed={false} />);
    expect(screen.getByTestId('sidebar-logo')).toBeInTheDocument();
  });

  test('Renders the Header component with children when collapsed is false', () => {
    render(<Header collapsed={false} />);
    const logoImage = screen.getByTestId('sidebar-logo');
    const headerText = screen.getByText(/JanitorCart/i);
    expect(logoImage).toBeInTheDocument();
    expect(headerText).toBeInTheDocument();
  });

  test('Visible opacity logo text when collapsed is false', () => {
    render(<Header collapsed={false} />);
    expect(screen.getByTestId('sidebar-logo')).toBeInTheDocument();
    expect(screen.getByTestId('header-collapsed-test')).toHaveStyle('opacity:1');
  });

  test('Invisible opacity logo text when collapsed is true', () => {
    render(<Header collapsed={true} />);
    expect(screen.getByTestId('sidebar-logo')).toBeInTheDocument();
    expect(screen.getByTestId('header-collapsed-test')).toHaveStyle('opacity:0');
  });
});

describe('Footer', () => {
  test('Renders the Footer component', () => {
    render(
      <AuthProvider>
        <Footer collapsed={false} />
      </AuthProvider>
    );
    const userIcon = screen.getByRole('img', { hidden: true });
    expect(userIcon).toBeInTheDocument();
  });

  test('Renders the Footer component with user information when collapsed is false', () => {
    render(
      <AuthProvider>
        <Footer collapsed={false} />
      </AuthProvider>
    );

    expect(screen.getByRole('img', { hidden: true })).toBeInTheDocument();
    // expect(screen.getByText('Admin')).toBeInTheDocument();
    // expect(screen.getByText('admin@admin.com')).toBeInTheDocument();
  });

  test('Visbile opacity user information text when collapsed is false', () => {
    render(
      <AuthProvider>
        <Footer collapsed={false} />
      </AuthProvider>
    );

    expect(screen.getByRole('img', { hidden: true })).toBeInTheDocument();
    expect(screen.getByTestId('footer-collapsed-test')).toHaveStyle('opacity:1');
  });

  test('Invisible opacity user information text when collapsed is true', () => {
    render(
      <AuthProvider>
        <Footer collapsed={true} />
      </AuthProvider>
    );

    expect(screen.getByRole('img', { hidden: true })).toBeInTheDocument();
    expect(screen.getByTestId('footer-collapsed-test')).toHaveStyle('opacity:0');
  });
});
