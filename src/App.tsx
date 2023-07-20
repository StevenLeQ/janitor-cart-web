// import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import SidebarFinal from "./scenes/global/Sidebar";
import Dashboard from "./scenes/pages/Dashboard";
import Companies from "./scenes/pages/Companies/Companies";
import CreateCompany from "./scenes/pages/Companies/Sub/CreateCompany";
import EditCompany from "./scenes/pages/Companies/Sub/EditCompany";
function App() {

  return (
    // Span entire screen
    <>
      <div className="md:flex bg-stone-100">
        <div className="h-screen sticky top-0 invisible lg:visible">
        <SidebarFinal />
        </div>

        <div className="w-full h-full">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/companies" element={<Companies />} />
            <Route path="/newCompany" element={<CreateCompany />} />
            <Route path="/editCompany" element={<EditCompany />} />
        </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
