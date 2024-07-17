import { createContext, Dispatch, SetStateAction, useContext } from "react";

export enum Role {
  USER = "user",
  ADMIN = "admin",
  OWNER = "owner",
}

export interface UserType {
  userId: number;
  name: string;
  avatarUrl?: string;
  role: Role;
}

interface AuthContextType {
  user: UserType | undefined;
  setUser: Dispatch<SetStateAction<UserType | undefined>>;
}

export const AuthContext = createContext<AuthContextType>({
  user: undefined,
  setUser: () => {},
});

export const useAuthContext = (): AuthContextType => {
  return useContext<AuthContextType>(AuthContext);
};
