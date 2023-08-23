// import { useState } from "react";
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';

import SidebarFinal from '../components/Sidebar/Sidebar.tsx';
import Dashboard from '../pages/Superadmin';
import Companies from '../pages/Superadmin/Companies';
import CreateCompany from '../pages/Superadmin/Companies/Create';
import EditCompany from '../pages/Superadmin/Companies/Edit';
import Rights from '../pages/Superadmin/Rights';
import CreateRights from '../pages/Superadmin/Rights/Create';
import EditRights from '../pages/Superadmin/Rights/Edit';
import Videos from '../pages/Superadmin/Videos';
import CreateVideos from '../pages/Superadmin/Videos/Create';
import EditVideos from '../pages/Superadmin/Videos/Edit';
import Login from '../pages/Login';
import Register from '../pages/Login/Register';
import ConfirmEmail from '../pages/Login/Register/Confirm/index.tsx';
import ForgotPassword from '../pages/Login/ForgotPassword';
import ResetPassword from '../pages/Login/ResetPassword';

import { AuthProvider } from '../auth/AuthContext.tsx';

const App = () => {
  const location = useLocation();

  // Check if the current route's pathname includes "/superadmin"
  const isSuperadmin = location.pathname.includes('/superadmin');
  return (
    // Span entire screen
    <AuthProvider>
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
            <Route path="/login/signup" element={<Register />} />
            <Route path="/login/signup/confirm-email" element={<ConfirmEmail />} />
            <Route path="/login/forgot-password" element={<ForgotPassword />} />
            <Route path="/login/reset-password" element={<ResetPassword />} />
            <Route path="/superadmin" element={<Dashboard />} />
            <Route path="/superadmin/companies" element={<Companies />} />
            <Route path="/superadmin/companies/create" element={<CreateCompany />} />
            <Route path="/superadmin/companies/edit" element={<EditCompany />} />
            <Route path="/superadmin/rights" element={<Rights />} />
            <Route path="/superadmin/rights/create" element={<CreateRights />} />
            <Route path="/superadmin/rights/edit" element={<EditRights />} />
            <Route path="/superadmin/videos" element={<Videos />} />
            <Route path="/superadmin/videos/create" element={<CreateVideos />} />
            <Route path="/superadmin/videos/edit" element={<EditVideos />} />
            <Route path="*" element={<Navigate to="/login" />} />
          </Routes>
        </div>
      </div>
    </AuthProvider>
  );
};

export default App;
