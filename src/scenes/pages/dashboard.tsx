import Header from "../../components/Header";
import DashboardBanner from "../../components/Dashboard/DashboardBanner";
import DashboardItem from "../../components/Dashboard/DashboardItem";
import { RevenueLineChart } from "../../components/Dashboard/RevenueLineChart";
import SellsChloropleth from "../../components/Dashboard/SellsChloropleth";

const Dashboard = () => {
  return (
    <div className="w-full">
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
        <DashboardItem title="$12,489" subtitle="Annual Sales" />
        <DashboardItem title="34" subtitle="New Customers" />
        <DashboardItem
          title="582"
          subtitle="Total Customers"
          link="https://example.com"
        />
        <DashboardItem title="389" subtitle="Total users" />
        
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
