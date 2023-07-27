// import { useState } from "react";
import { Routes, Route } from 'react-router-dom';

import SidebarFinal from './components/sidebar/Sidebar';
import Dashboard from './pages/dashboard/DashboardPage';
import Companies from './pages/companies/CompaniesPage';
import CreateCompany from './pages/companies/CreateCompanyPage';
import EditCompany from './pages/companies/EditCompanyPage';
import Rights from './pages/rights/RightsPage';
import CreateRights from './pages/rights/CreateRightsPage';
import EditRights from './pages/rights/EditRightsPage';

const App = () => {
  return (
    // Span entire screen
    <>
      <div className="flex bg-stone-100">
        <div className="sticky top-0 h-screen">
          <SidebarFinal />
        </div>

        {/* Routes for admin */}
        <div className="h-full w-full">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/companies" element={<Companies />} />
            <Route path="/companies/newCompany" element={<CreateCompany />} />
            <Route path="/companies/editCompany" element={<EditCompany />} />
            <Route path="/rights" element={<Rights />} />
            <Route path="/rights/newRights" element={<CreateRights />} />
            <Route path="/rights/editRights" element={<EditRights />} />
          </Routes>
        </div>
      </div>
    </>
  );
};

export default App;
