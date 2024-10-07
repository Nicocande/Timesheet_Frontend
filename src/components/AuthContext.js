import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(null); // null represents the initial loading state
  const [loggeduser, setLoggeduser] = useState(null); // null represents the initial loading state

  useEffect(() => {
    // Simulate an asynchronous check for authentication
    const checkAuthStatus = () => {
      const token = sessionStorage.getItem('token');
      setIsAuthenticated(!!token); // Update the authentication status based on the presence of a token
      const user = sessionStorage.getItem('email');
      setLoggeduser(user); // Update the authentication status based on the presence of a token

    };

    checkAuthStatus();
  }, []);

  return (
    <AuthContext.Provider value={{ auth: [isAuthenticated, setIsAuthenticated], user: [loggeduser, setLoggeduser] }}>

      {children}

    </AuthContext.Provider>
  );
};