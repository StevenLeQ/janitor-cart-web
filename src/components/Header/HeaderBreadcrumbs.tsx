import { Link } from "react-router-dom";

import { ChevronRightIcon, Squares2X2Icon } from '@heroicons/react/24/outline'

interface Bread {
  name: string;
  link: string;
  current: boolean;
}

interface HeaderBreadcrumbsProps {
  breadcrumbs?: Bread[];
}

const HeaderBreadcrumbs: React.FC<HeaderBreadcrumbsProps> = ({ breadcrumbs }) => {
  return (
    <nav className="flex" aria-label="Breadcrumb">
      <ol role="list" className="flex items-center space-x-2">
        <li>
          <div>
            <Link to="/" className="flex text-sm font-medium text-font-gray-200 hover:text-royal-blue">
              <Squares2X2Icon className="h-5 w-5 mr-1 flex-shrink-0" aria-hidden="true" />
              <span className="sr-only">Dashboard</span>
              Dashboard
            </Link>
          </div>
        </li>
        {/* Extra check for TS just in case */}
        {breadcrumbs && breadcrumbs.map((page) => (
          <li key={page.name}>
            <div className="flex items-center">
              <ChevronRightIcon className="h-4 w-4 flex-shrink-0 text-font-gray-200 stroke-[0.16em]" aria-hidden="true" />
              <Link
                to={page.link}
                className="ml-2 text-sm font-medium text-font-gray-200 hover:text-royal-blue"
                aria-current={page.current ? 'page' : undefined}
              >
                {page.name}
              </Link>
            </div>
          </li>
        ))}
      </ol>
    </nav>
  )
}

export default HeaderBreadcrumbs