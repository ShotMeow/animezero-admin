import { createContext, Dispatch, SetStateAction, useContext } from "react";

interface AuthContextType {
  isAuth: boolean;
  setIsAuth: Dispatch<SetStateAction<boolean>>;
}

export const AuthContext = createContext<AuthContextType>({
  isAuth: false,
  setIsAuth: () => {},
});

export const useAuthContext = (): AuthContextType => {
  return useContext<AuthContextType>(AuthContext);
};
