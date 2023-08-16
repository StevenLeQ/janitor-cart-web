import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import DashboardItem from './DashboardItem';
import DashboardBanner from './DashboardBanner';

describe('Dashboard Items', () => {
  test('Renders the title correctly', () => {
    render(
      <BrowserRouter>
        <DashboardItem title={12345} />
      </BrowserRouter>
    );

    // Ensure that the title is rendered correctly as a formatted number
    expect(screen.getByText('12,345')).toBeInTheDocument();
  });

  test('Renders the salesBool title correctly with dollar sign', () => {
    render(
      <BrowserRouter>
        <DashboardItem title={9876} salesBool={true} />
      </BrowserRouter>
    );

    // Ensure that the salesBool title is rendered with a dollar sign
    expect(screen.getByText('$9,876')).toBeInTheDocument();
  });

  test('Renders the subtitle correctly', () => {
    render(
      <BrowserRouter>
        <DashboardItem subtitle="Subtitle Text" />
      </BrowserRouter>
    );

    // Ensure that the subtitle is rendered correctly
    expect(screen.getByText('Subtitle Text')).toBeInTheDocument();
  });

  test('Renders the link correctly', () => {
    render(
      <BrowserRouter>
        <DashboardItem link="https://example.com" />
      </BrowserRouter>
    );

    // Ensure that the link icon is rendered and has the correct href attribute
    const linkIcon = screen.getByTestId('link-icon');
    expect(linkIcon).toBeInTheDocument();
    expect(linkIcon).toHaveAttribute('href', 'https://example.com');
  });

  test('Renders the percent increase correctly', () => {
    render(
      <BrowserRouter>
        <DashboardItem percent={25.0} />
      </BrowserRouter>
    );

    // Ensure that the percent increase is rendered with an up arrow icon
    expect(screen.getByText('25%')).toBeInTheDocument();
    expect(screen.getByTestId('arrow-up-icon')).toBeInTheDocument();
  });

  test('Renders the percent decrease correctly', () => {
    render(
      <BrowserRouter>
        <DashboardItem percent={-15} />
      </BrowserRouter>
    );

    // Ensure that the percent decrease is rendered with a down arrow icon
    expect(screen.getByText('-15%')).toBeInTheDocument();
    expect(screen.getByTestId('arrow-down-icon')).toBeInTheDocument();
  });
});

describe('DashboardBanner', () => {
  test('Renders welcome text correctly', () => {
    render(<DashboardBanner />);

    // Ensure that the welcome text is rendered correctly
    expect(screen.getByText('Welcome back, Admin')).toBeInTheDocument();
    expect(
      screen.getByText("Let's see how everything is going")
    ).toBeInTheDocument();
  });

  test('Renders all the circles correctly', () => {
    render(<DashboardBanner />);

    // Ensure that all the circles are rendered
    const largeCircle = screen.getByTestId('large-circle');
    const smallCircle1 = screen.getByTestId('small-circle-1');
    const smallCircle2 = screen.getByTestId('small-circle-2');

    expect(largeCircle).toBeInTheDocument();
    expect(smallCircle1).toBeInTheDocument();
    expect(smallCircle2).toBeInTheDocument();
  });
});
