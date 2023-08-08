// import { useState } from "react";
import { Routes, Route } from 'react-router-dom';

import SidebarFinal from './components/sidebar/Sidebar';
import Dashboard from './pages/dashboard/DashboardPage';
import Companies from './pages/companies';
import CreateCompany from './pages/companies/create/NewCompany.tsx';
import EditCompany from './pages/companies/edit/EditCompany.tsx';
import Rights from './pages/rights/index.tsx';
import CreateRights from './pages/rights/create/NewRights.tsx';
import EditRights from './pages/rights/edit/EditRights.tsx';
import Videos from './pages/videos/index.tsx';
import CreateVideos from './pages/videos/create/NewVideos.tsx';
import EditVideos from './pages/videos/edit/EditVideos.tsx';

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
            <Route path="/videos" element={<Videos />} />
            <Route path="/videos/newVideos" element={<CreateVideos />} />
            <Route path="/videos/editVideos" element={<EditVideos />} />
          </Routes>
        </div>
      </div>
    </>
  );
};

export default App;
