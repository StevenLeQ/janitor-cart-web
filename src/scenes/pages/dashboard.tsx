// Libraries to import
import { faker } from "@faker-js/faker";

// Components that make up the dashboard
import Header from "../../components/Header/Header.tsx";
import DashboardBanner from "../../components/Dashboard/DashboardBanner.tsx";
import DashboardItem from "../../components/Dashboard/DashboardItem.tsx";
import RevenueLineChart from "../../components/Dashboard/RevenueLineChart.tsx";
import SellsChloropleth from "../../components/Dashboard/SellsChloropleth.tsx";

// Icons to send to DashboardItems
import {
  CurrencyDollarIcon,
  UserPlusIcon,
  BuildingOfficeIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";

const Dashboard = () => {
  return (
    <div className="w-full mb-5">
      <div className="m-5 mx-10 flex flex-col items-center gap-5">
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
      <div className="mt-8 mx-10 grid gap-x-4 gap-y-7 grid-cols-12">
        <DashboardItem
          title={faker.number.int({ min: 100, max: 10000000 })}
          salesBool={true}
          subtitle="Annual Sales"
          percent={faker.number.float({ min: -100, max: 100, precision: 0.01 })}
          icon={<CurrencyDollarIcon className="w-10 h-10" />}
        />
        <DashboardItem
          title={faker.number.int({ min: 1, max: 10000})}
          subtitle="New Customers"
          percent={faker.number.float({ min: -100, max: 100, precision: 0.01 })}
          icon={<UserPlusIcon className="w-10 h-10" />}
        />
        <DashboardItem
          title={faker.number.int({ min: 10000, max: 100000})}
          subtitle="Total Customers"
          percent={faker.number.float({ min: -100, max: 100, precision: 0.01 })}
          icon={<BuildingOfficeIcon className="w-10 h-10" />}
          link="https://example.com"
        />
        <DashboardItem
          title={faker.number.int({ min: 100, max: 1000000})}
          subtitle="Total users"
          percent={faker.number.float({ min: -100, max: 100, precision: 0.01 })}
          icon={<UsersIcon className="w-10 h-10" />}
        />

        {/* Second two items, revenue graph and leaflet chloropleth map */}
        <div className="relative col-span-8 h-[22rem] bg-white rounded-lg border px-6 pt-3 pb-5">
          <RevenueLineChart />
        </div>

        <div className="relative col-span-4 h-full rounded-lg overflow-hidden">
          <SellsChloropleth />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
