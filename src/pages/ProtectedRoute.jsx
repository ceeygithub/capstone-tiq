import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from '../Contexts/AuthContext';



const ProtectedRoute = () => {
   const auth = useAuth();
  const { user,isAuthenticated } = useAuth(); 
  if (!auth.user && !isAuthenticated()) return <Navigate to="/" />;

  return <Outlet />;
}

export default ProtectedRoute


