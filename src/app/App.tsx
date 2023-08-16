// import { useState } from "react";
import { Routes, Route, useLocation } from 'react-router-dom';

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
import Login from '../pages/Login/index.tsx';
import SignUp from '../pages/Login/SignUp/index.tsx';
import ForgotPassword from '../pages/Login/ForgotPassword/index.tsx';
import NewPassword from '../pages/Login/NewPassword/index.tsx';

const App = () => {
  const location = useLocation();

  // Check if the current route's pathname includes "/superadmin"
  const isSuperadmin = location.pathname.includes('/superadmin');
  return (
    // Span entire screen
    <>
      <div className="flex bg-stone-100">
        {isSuperadmin && (
          <div className="sticky top-0 h-screen">
            <SidebarFinal />
          </div>
        )}
        {/* Routes for Superadmin */}
        <div className="h-full w-full">
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/login/signup" element={<SignUp />} />
            <Route path="/login/forgot" element={<ForgotPassword />} />
            <Route path="/login/reset" element={<NewPassword />} />
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
