import React, { createContext, useMemo, useState } from 'react';
import Cookies from 'js-cookie';

export const AuthContext = createContext(null);

const hasToken = () => Boolean(Cookies.get('jwt'));

export const AuthProvider = ({ children }) => {
  const [authorized, setAuthorized] = useState(hasToken());

  const value = useMemo(
    () => ({ authorized, setAuthorized }),
    [authorized, setAuthorized]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
