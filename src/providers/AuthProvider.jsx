import React, { createContext, useMemo, useState } from 'react';

export const AuthContext = createContext(null);

const getInitialAuth = () => Boolean(localStorage.getItem('authorized'));

export const AuthProvider = ({ children }) => {
  const [authorized, setAuthorized] = useState(getInitialAuth());

  const value = useMemo(
    () => ({ authorized, setAuthorized }),
    [authorized, setAuthorized]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
