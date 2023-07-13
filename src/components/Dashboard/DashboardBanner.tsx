// Fancy Purple Banner Thing in dashboard page
const DashboardBanner = () => {
  return (
    <div className="relative from-blue-500 to-purple-700 bg-gradient-to-r w-full h-56 rounded-lg overflow-hidden ">
      {/* Large transparent circle on left */}
      <div className="absolute opacity-20 rounded-full w-[32rem] h-[32rem] from-transparent to-emerald-200 bg-gradient-to-r -ml-24 -mt-32" />
      {/* Smaller transparent circle on left */}
      <div className="absolute opacity-20 rounded-full w-72 h-72 from-transparent to-emerald-200 bg-gradient-to-r -ml-12 -mt-4" />

      {/* Smaller circle on right */}
      <div className="flex flex-row-reverse">
        <div className="absolute opacity-30 rounded-full w-20 h-20 from-emerald-200 to-transparent bg-gradient-to-r mr-10 mt-28" />
      </div>

      {/* Bottom left Banner text */}
      <div className="flex items-end w-full h-full">
        <div className="z-0 flex flex-col mb-7 ml-7 gap-1">
          <p className="text-white font-bold text-4xl">Welcome back, Admin</p>
          <p className="text-white font-regular text-xl">
            Let's see how everything is going
          </p>
        </div>
      </div>
    </div>
  );
};

export default DashboardBanner;
