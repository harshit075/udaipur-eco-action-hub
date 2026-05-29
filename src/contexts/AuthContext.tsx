import { createContext, useContext, useState, ReactNode } from 'react';

interface AuthUser {
  id: number;
  name: string;
  email: string;
}

interface AuthContextType {
  currentUser: AuthUser | null;
  loading: boolean;
  login: (token: string, user: AuthUser) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType>({
  currentUser: null,
  loading: false,
  login: () => {},
  logout: () => {},
});

export const useAuth = () => useContext(AuthContext);

const getStoredUser = (): AuthUser | null => {
  try {
    const token = localStorage.getItem('token');
    const user = localStorage.getItem('user');
    if (token && user) return JSON.parse(user);
  } catch {}
  return null;
};

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [currentUser, setCurrentUser] = useState<AuthUser | null>(getStoredUser);

  const login = (token: string, user: AuthUser) => {
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(user));
    setCurrentUser(user);
  };

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setCurrentUser(null);
  };

  return (
    <AuthContext.Provider value={{ currentUser, loading: false, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
