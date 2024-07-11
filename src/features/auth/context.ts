import { createContext, Dispatch, SetStateAction, useContext } from "react";

export interface UserType {
  userId: number;
  name: string;
  role: "user" | "admin" | "owner";
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
