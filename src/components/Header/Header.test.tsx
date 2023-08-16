import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Header from './Header';
import Breadcrumbs from './Breadcrumbs';

const breadcrumbs = [
  { name: 'Home', link: '/', current: false },
  { name: 'Category', link: '/category', current: false },
  { name: 'Current Page', link: '/current', current: true }
];

describe('Header', () => {
  test('Renders title and subtitle', () => {
    const title = 'Sample Title';
    const subtitle = 'Sample Subtitle';

    render(<Header title={title} subtitle={subtitle} />);

    // Check if the title and subtitle are rendered w/o breadcrumbs
    expect(screen.getByText(title)).toBeInTheDocument();
    expect(screen.getByText(subtitle)).toBeInTheDocument();
  });

  test('Do not render breadcrumbs if not passed', () => {
    const title = 'Sample Title';
    const subtitle = 'Sample Subtitle';

    render(
      <BrowserRouter>
        <Header title={title} subtitle={subtitle} />
      </BrowserRouter>
    );

    // Check if breadcrumbs are not rendered
    expect(screen.queryByLabelText('Home')).not.toBeInTheDocument();
    expect(screen.queryByLabelText('Category')).not.toBeInTheDocument();
    expect(screen.queryByLabelText('Current Page')).not.toBeInTheDocument();
    expect(screen.queryByLabelText('Dashboard')).not.toBeInTheDocument();
  });

  test('Render breadcrumbs if passed', () => {
    const title = 'Sample Title';
    const subtitle = 'Sample Subtitle';

    render(
      <BrowserRouter>
        <Header title={title} subtitle={subtitle} breadcrumbs={breadcrumbs} />
      </BrowserRouter>
    );

    // Check if breadcrumbs are not rendered
    expect(screen.queryByLabelText('Home')).toBeInTheDocument();
    expect(screen.queryByLabelText('Category')).toBeInTheDocument();
    expect(screen.queryByLabelText('Current Page')).toBeInTheDocument();
    expect(screen.queryByLabelText('Dashboard')).toBeInTheDocument();
  });
});

describe('Breadcrumbs', () => {
  test('Renders home link and breadcrumbs', () => {
    render(
      <BrowserRouter>
        <Breadcrumbs breadcrumbs={breadcrumbs} />
      </BrowserRouter>
    );

    // Check if the home link is rendered
    const homeLink = screen.getByRole('link', { name: 'Dashboard' });
    expect(homeLink).toHaveAttribute('href', '/superadmin');
    expect(homeLink).toHaveClass('text-font-gray-200 hover:text-royal-blue');

    // Check if each breadcrumb link is rendered
    breadcrumbs.forEach((breadcrumb) => {
      const breadcrumbLink = screen.getByRole('link', {
        name: breadcrumb.name
      });
      expect(breadcrumbLink).toHaveAttribute('href', breadcrumb.link);
      expect(breadcrumbLink).toHaveClass(
        'text-font-gray-200 hover:text-royal-blue'
      );

      if (breadcrumb.current) {
        expect(breadcrumbLink).toHaveAttribute('aria-current', 'page');
      } else {
        expect(breadcrumbLink).not.toHaveAttribute('aria-current');
      }
    });
  });
});
