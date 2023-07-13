// import { useState } from "react";
import SidebarFinal from "./scenes/global/Sidebar";
import Dashboard from "./scenes/pages/dashboard";
// import SellsChloropleth from "./components/Dashboard/SellsChloropleth";
function App() {

  return (
    // Span entire screen
    <>
      <div className="md:flex">
        <div className="h-screen sticky top-0">
        <SidebarFinal />
        </div>

        <div className="bg-stone-100 w-full h-full">
        <Dashboard />
        </div>
      </div>
    </>
  );
}

export default App;