// Libraries to import
import { faker } from '@faker-js/faker';

// Components that make up the dashboard
import Header from '../../../components/Header/Header.tsx';
import DashboardBanner from './DashboardBanner.tsx';
import DashboardItem from './DashboardItem.tsx';
import RevenueLineChart from './RevenueLineChart.tsx';
import SellsChloropleth from './SellsChloropleth.tsx';

// Icons to send to DashboardItems
import {
  CurrencyDollarIcon,
  UserPlusIcon,
  BuildingOfficeIcon,
  UsersIcon
} from '@heroicons/react/24/outline';

const Dashboard = () => {
  return (
    <div className="mb-5 w-full">
      <div className="m-3 mx-1 flex flex-col items-center gap-5 sm:m-5 sm:mx-10">
        {/* Outside Header and H-rule */}
        <Header
          title="Dashboard"
          subtitle="General overview of aggregate company positions and overall statistics"
        />

        {/* The fancy purple gradient banner thing - save me - why does it have three gradient circles */}
        <DashboardBanner />
      </div>

      {/* Grid start */}
      {/* First 4 items are the 4 blocks below banner */}
      <div className="mx-2 mt-8 grid grid-cols-12 gap-x-4 gap-y-7 sm:mx-10">
        <DashboardItem
          title={faker.number.int({ min: 100, max: 10000000 })}
          salesBool={true}
          subtitle="Annual Sales"
          percent={faker.number.float({
            min: -100,
            max: 100,
            precision: 0.01
          })}
          icon={<CurrencyDollarIcon className="h-10 w-10" />}
        />
        <DashboardItem
          title={faker.number.int({ min: 10000, max: 100000 })}
          subtitle="Total Customers"
          percent={faker.number.float({
            min: -100,
            max: 100,
            precision: 0.01
          })}
          icon={<BuildingOfficeIcon className="h-10 w-10" />}
          link="/superadmin/companies"
        />
        <DashboardItem
          title={faker.number.int({ min: 100, max: 1000000 })}
          subtitle="Total Users"
          percent={faker.number.float({
            min: -100,
            max: 100,
            precision: 0.01
          })}
          icon={<UsersIcon className="h-10 w-10" />}
        />
        <DashboardItem
          title={faker.number.int({ min: 1, max: 10000 })}
          subtitle="New Users"
          percent={faker.number.float({
            min: -100,
            max: 100,
            precision: 0.01
          })}
          icon={<UserPlusIcon className="h-10 w-10" />}
        />

        {/* Second two items, revenue graph and leaflet chloropleth map */}
        <div className="col-span-12 h-[22rem] rounded-lg border bg-white px-6 pb-5 pt-3 lg:col-span-8">
          <RevenueLineChart />
        </div>

        <div className="col-span-12 h-[22rem] overflow-hidden rounded-lg lg:col-span-4">
          <SellsChloropleth />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
