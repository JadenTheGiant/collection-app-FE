import { useState, useEffect } from "react";
import type { ReactNode } from "react";
import { AuthContext } from "./AuthContext";

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [token, setTokenState] = useState<string | null>(() =>
    localStorage.getItem("token")
  );

  const setToken = (token: string | null) => {
    if (token) {
      localStorage.setItem("token", token);
    } else {
      localStorage.removeItem("token");
    }
    setTokenState(token);
  };

  const logout = () => {
    setToken(null);
  };

  useEffect(() => {
    setTokenState(localStorage.getItem("token"));
  }, []);

  return (
    <AuthContext.Provider
      value={{ token, setToken, isAuthenticated: !!token, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};
