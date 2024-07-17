import { Role } from "@/features/auth/context.ts";

export const getUserRole = (role: Role) => {
  switch (role) {
    case Role.USER:
      return "Пользователь";
    case Role.ADMIN:
      return "Администратор";
    case Role.OWNER:
      return "Владелец";
  }
};
