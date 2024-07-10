import { type FC, type PropsWithChildren, useState } from "react";
import { AuthContext } from "@/features/auth/context.ts";

const AuthProvider: FC<PropsWithChildren> = ({ children }) => {
  const [isAuth, setIsAuth] = useState<boolean>(false);
  return (
    <AuthContext.Provider value={{ isAuth, setIsAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
