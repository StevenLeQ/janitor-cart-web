// import { useState } from "react";
import { Routes, Route } from 'react-router-dom';

import SidebarFinal from './components/sidebar/Sidebar';
import Dashboard from './components/dashboard/DashboardPage';
import Companies from './components/companies/CompaniesPage';
import CreateCompany from './components/companies/CreateCompanyPage';
import EditCompany from './components/companies/EditCompanyPage';

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
            <Route path="/newCompany" element={<CreateCompany />} />
            <Route path="/editCompany" element={<EditCompany />} />
          </Routes>
        </div>
      </div>
    </>
  );
};

export default App;
