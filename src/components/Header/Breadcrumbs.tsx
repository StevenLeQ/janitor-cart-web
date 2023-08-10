import { Link } from 'react-router-dom';

import { ChevronRightIcon, Squares2X2Icon } from '@heroicons/react/24/outline';

interface Bread {
  name: string;
  link: string;
  current: boolean;
}

interface BreadcrumbsProps {
  breadcrumbs?: Bread[];
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ breadcrumbs }) => {
  return (
    <nav className="flex" aria-label="Breadcrumb">
      <ol role="list" className="flex items-center space-x-2">
        <li>
          <div>
            <Link
              to="/superadmin"
              aria-label="Dashboard"
              className="flex text-sm font-medium text-font-gray-200 hover:text-royal-blue"
            >
              <Squares2X2Icon
                className="mr-1 h-5 w-5 flex-shrink-0"
                aria-hidden="true"
              />
              <span className="sr-only">Dashboard</span>
              Dashboard
            </Link>
          </div>
        </li>
        {/* Extra check for TS just in case */}
        {breadcrumbs &&
          breadcrumbs.map((page) => (
            <li key={page.name}>
              <div className="flex items-center">
                <ChevronRightIcon
                  className="h-4 w-4 flex-shrink-0 stroke-[0.16em] text-font-gray-200"
                  aria-hidden="true"
                />
                <Link
                  to={page.link}
                  className="ml-2 text-sm font-medium text-font-gray-200 hover:text-royal-blue"
                  aria-current={page.current ? 'page' : undefined}
                  aria-label={page.name}
                >
                  {page.name}
                </Link>
              </div>
            </li>
          ))}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
