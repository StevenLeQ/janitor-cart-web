// import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import SidebarFinal from "./scenes/global/Sidebar";
import Dashboard from "./scenes/pages/dashboard";
import Companies from "./scenes/pages/companies";
// import SellsChloropleth from "./components/Dashboard/SellsChloropleth";
function App() {

  return (
    // Span entire screen
    <>
      <div className="md:flex bg-stone-100">
        <div className="h-screen sticky top-0">
        <SidebarFinal />
        </div>

        <div className="w-full h-full">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/companies" element={<Companies />} />
        </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
