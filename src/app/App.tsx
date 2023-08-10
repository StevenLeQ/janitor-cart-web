// import { useState } from "react";
import { Routes, Route, Navigate } from 'react-router-dom';

import SidebarFinal from '../components/Sidebar/Sidebar.tsx';
import Dashboard from '../pages/Superadmin/Dashboard/DashboardPage.tsx';
import Companies from '../pages/Superadmin/Companies';
import CreateCompany from '../pages/Superadmin/Companies/Create/NewCompany.tsx';
import EditCompany from '../pages/Superadmin/Companies/Edit/EditCompany.tsx';
import Rights from '../pages/Superadmin/Rights';
import CreateRights from '../pages/Superadmin/Rights/Create/NewRights.tsx';
import EditRights from '../pages/Superadmin/Rights/Edit/EditRights.tsx';
import Videos from '../pages/Superadmin/Videos';
import CreateVideos from '../pages/Superadmin/Videos/Create/NewVideos.tsx';
import EditVideos from '../pages/Superadmin/Videos/Edit/EditVideos.tsx';

const App = () => {
  return (
    // Span entire screen
    <>
      <div className="flex bg-stone-100">
        <div className="sticky top-0 h-screen">
          <SidebarFinal />
        </div>

        {/* Routes for Superadmin */}
        <div className="h-full w-full">
          <Routes>
            <Route path="/superadmin" element={<Dashboard />} />
            <Route path="/superadmin/companies" element={<Companies />} />
            <Route
              path="/superadmin/companies/create"
              element={<CreateCompany />}
            />
            <Route
              path="/superadmin/companies/edit"
              element={<EditCompany />}
            />
            <Route path="/superadmin/rights" element={<Rights />} />
            <Route
              path="/superadmin/rights/create"
              element={<CreateRights />}
            />
            <Route path="/superadmin/rights/edit" element={<EditRights />} />
            <Route path="/superadmin/videos" element={<Videos />} />
            <Route
              path="/superadmin/videos/create"
              element={<CreateVideos />}
            />
            <Route path="/superadmin/videos/edit" element={<EditVideos />} />
            {/* <Route path="*" element={<Navigate to="/superadmin" />} /> */}
          </Routes>
        </div>
      </div>
    </>
  );
};

export default App;
