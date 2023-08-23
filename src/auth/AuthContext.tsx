import { createContext, useContext, useState, useEffect } from 'react';

import { loginCognito } from '../auth/Login';
import { GetUserCognito } from './CurrentUser';
import { logoutCognito } from './Logout';
// import { poolData } from '../config/cognito-cfg';

type AuthContextType = {
  user: UserData | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
};

// ? CURRENTLY SESSION IS NOT SAVED
// type UserSession = {
//   accessToken: string;
//   idToken: string;
//   refreshToken: string;
//   expiresIn: number;
// };

type UserData = {
  [key: string]: string;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

interface ContainerProps {
  children: React.ReactNode;
}

export const AuthProvider: React.FC<ContainerProps> = ({ children }) => {
  const [user, setUser] = useState<UserData | null>(null);
  // const [fullName, setFullName] = useState('');

  useEffect(() => {
    async function fetchUser() {
      try {
        const result = await GetUserCognito();
        console.log(result);
        if (result.userData) {
          setUser(result.userData);
        } else {
          setUser(null);
        }
      } catch (error) {
        console.error('Error fetching user:', error);
      }
    }

    fetchUser();
  }, []);

  const login = async (email: string, password: string) => {
    try {
      const cognitoUser = await loginCognito({ email, password });
      setUser(cognitoUser as UserData);
    } catch (error) {
      console.error('Login error:', error);
      throw error;
    }
  };

  const logout = () => {
    logoutCognito;
    setUser(null);
  };

  const contextValue: AuthContextType = {
    user,
    login,
    logout
  };

  return <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>;
};
