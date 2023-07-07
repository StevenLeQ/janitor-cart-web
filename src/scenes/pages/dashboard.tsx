import Header from "../../components/Header";
import DashboardBanner from "../../components/Dashboard/DashboardBanner";

const Dashboard = () => {
  return (
    <div className="w-full bg-stone-100">
      <div className="m-5 mx-10 flex flex-col items-center gap-5">
        {/* Outside Header and H-rule */}
        <Header
          title="Dashboard"
          subtitle="General overview of aggregate company positions and overall statistics"
        />

        {/* The fancy purple gradient banner thing save me why does it have three gradient circles */}
        <DashboardBanner />
        
      </div>
    </div>
  );
};

export default Dashboard;
