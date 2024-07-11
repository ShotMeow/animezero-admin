import { type FC, type PropsWithChildren, useEffect, useState } from "react";
import { AuthContext, type UserType } from "@/features/auth/context.ts";
import { toast } from "sonner";

const AuthProvider: FC<PropsWithChildren> = ({ children }) => {
  const [user, setUser] = useState<UserType | undefined>(undefined);

  useEffect(() => {
    if (user?.role === "user") {
      toast.error("Ошибка", {
        description: "Не достаточно прав для входа в админ-панель.",
      });
    }
  }, [user]);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
