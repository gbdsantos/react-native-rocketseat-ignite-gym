import {
  createContext,
  ReactNode,
  useEffect,
  useState
} from 'react';

import { storageUserSave, storageUserGet } from '@storage/storageUser';

import { UserDTO } from '@dtos/UserDTO';

import { api } from '@services/api';

export type AuthContextDataProps = {
  isLoadingUserStorageData: boolean;
  signIn: (email: string, password: string) => Promise<void>;
  user: UserDTO;
}

type AuthContextProviderProps = {
  children: ReactNode;
}

export const AuthContext = createContext<AuthContextDataProps>({} as AuthContextDataProps);

export function AuthContextProvider({ children }: AuthContextProviderProps) {
  const [user, setUser] = useState({} as UserDTO);
  const [isLoadingUserStorageData, setIsLoadingUserStorage] = useState(true);

  async function signIn(email: string, password: string) {
    try {
      const { data } = await api.post('/sessions', { email, password });

      if (data.user) {
        setUser(data.user);
        storageUserSave(data.user);
      }
    } catch (error) {
      throw error;
    }
  }

  async function loadUserData() {
    try {
      const userLogged = await storageUserGet();

      if (userLogged) {
        setUser(userLogged);
        setIsLoadingUserStorage(false);
      }

    } catch (error) {
      throw error;

    }
    finally {
      setIsLoadingUserStorage(false);
    }
  }

  useEffect(() => {
    loadUserData();
  }, [])

  return (
    <AuthContext.Provider value={{
      isLoadingUserStorageData,
      signIn,
      user,
    }}>
      {children}
    </AuthContext.Provider>
  )
}
