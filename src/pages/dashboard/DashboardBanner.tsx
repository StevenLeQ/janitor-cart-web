// Fancy Purple Banner Thing in dashboard page
const DashboardBanner = () => {
  return (
    <div className="relative h-56 w-full overflow-hidden rounded-lg bg-gradient-to-r from-blue-500 to-purple-700 ">
      {/* Large transparent circle on left */}
      <div
        className="absolute -ml-24 -mt-32 h-[32rem] w-[32rem] rounded-full bg-gradient-to-r from-transparent to-emerald-200 opacity-20"
        data-testid="large-circle"
      />

      {/* Smaller transparent circle on left */}
      <div
        className="absolute -ml-12 -mt-4 h-72 w-72 rounded-full bg-gradient-to-r from-transparent to-emerald-200 opacity-20"
        data-testid="small-circle-1"
      />

      {/* Smaller circle on right */}
      <div className="flex flex-row-reverse">
        <div
          className="absolute mr-10 mt-28 h-20 w-20 rounded-full bg-gradient-to-r from-emerald-200 to-transparent opacity-30"
          data-testid="small-circle-2"
        />
      </div>

      {/* Bottom left Banner text */}
      <div className="flex h-full w-full items-end">
        <div className="z-0 mb-7 ml-7 flex flex-col gap-1">
          <p className="text-4xl font-extrabold text-white">
            Welcome back, Admin
          </p>
          <p className="text-xl font-medium text-white">
            Let's see how everything is going
          </p>
        </div>
      </div>
    </div>
  );
};

export default DashboardBanner;
