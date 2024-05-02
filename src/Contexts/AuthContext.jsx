import React, { useContext, useState, useEffect } from 'react';
import { auth } from '../Firebase'; 
import {  onAuthStateChanged } from 'firebase/auth';


const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {

  const [user, setUser] = useState();

 useEffect(() => {
  const unsubscribe = onAuthStateChanged(auth, async (user) => {
    if (user) {
           setUser(user);
       
      console.log("User logged in:", user);
   
    } else {
      setUser(null);
      console.log("User logged out");
    }

  });

  return () => unsubscribe();
}, []);

  const logout = async () => {
    try {
      await auth.signOut();
    } catch (error) {
      throw error;
    }
  };

  const resetPassword = async (email) => {
    try {
      await auth.sendPasswordResetEmail(email);
    } catch (error) {
      throw error;
    }
  };

  const isAuthenticated = () => {
    return user !== null; // Returns true if auth.user is not null, false otherwise
  };

 const isAdmin = () => {
    return user && user.email === 'admin@gmail.com'
  
  };
  const isRegularUser = () => {
    return user && !isAdmin();
  };

  const value = {
    user,
    logout,
    resetPassword,
    isAdmin,
    isRegularUser,
    isAuthenticated,
  
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}
