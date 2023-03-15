import { createContext, ReactNode, useState } from 'react';

import { UserDTO } from '@dtos/UserDTO';

import { api } from '@services/api';

export type AuthContextDataProps = {
  user: UserDTO;
  signIn: (email: string, password: string) => Promise<void>;
}

type AuthContextProviderProps = {
  children: ReactNode;
}

export const AuthContext = createContext<AuthContextDataProps>({} as AuthContextDataProps);

export function AuthContextProvider({ children }: AuthContextProviderProps) {
  const [user, setUser] = useState({} as UserDTO);

  async function signIn(email: string, password: string) {
    const { data } = await api.post('/sessions', { email, password });

    try {
      if (data.user) {
        setUser(data);
      }
    } catch (error) {
      throw error;
    }
  }

  return (
    <AuthContext.Provider value={{ user, signIn }}>
      {children}
    </AuthContext.Provider>
  )
}
