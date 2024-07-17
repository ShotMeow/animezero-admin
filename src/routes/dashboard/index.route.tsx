import { createFileRoute, redirect } from "@tanstack/react-router";
import { useEffect } from "react";
import { toast } from "sonner";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar.tsx";
import { getAvatarFallback } from "@/utils/getAvatarFallback.ts";
import { getUserRole } from "@/utils/getUserRole.ts";
import {
  NavigationMenu,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu.tsx";
import {
  Role,
  useAuthContext,
  type UserType,
} from "@/features/auth/context.ts";

export const Route = createFileRoute("/dashboard/")({
  beforeLoad: ({ context }) => {
    if (!context.user || context.user?.role === Role.USER)
      throw redirect({
        to: "/",
      });
  },
  component: AdminPanelPage,
});

function AdminPanelPage() {
  const { user } = useAuthContext() as { user: UserType };

  useEffect(() => {
    toast.success("Успех", {
      description: "Вы успешно вошли в админ-панель",
    });
  }, []);

  return (
    <div className="px-6 py-4">
      <div className="px-6 py-4">
        <header className="flex items-center gap-12">
          <div className="flex items-center gap-4">
            <Avatar className="size-12">
              <AvatarImage src={user?.avatarUrl} />
              <AvatarFallback className="font-bold">
                {getAvatarFallback(user.name)}
              </AvatarFallback>
            </Avatar>
            <div>
              <p className="font-bold">{user.name}</p>
              <p className="text-zinc-400">{getUserRole(user.role)}</p>
            </div>
          </div>
          <nav>
            <NavigationMenu>
              <NavigationMenuLink
                href="/"
                className={navigationMenuTriggerStyle()}
              >
                Фильмы
              </NavigationMenuLink>
              <NavigationMenuLink
                href="/countries"
                className={navigationMenuTriggerStyle()}
              >
                Страны
              </NavigationMenuLink>
              <NavigationMenuLink
                href="/tags"
                className={navigationMenuTriggerStyle()}
              >
                Теги
              </NavigationMenuLink>
              <NavigationMenuLink
                href="/genres"
                className={navigationMenuTriggerStyle()}
              >
                Жанры
              </NavigationMenuLink>
              {user.role === Role.OWNER && (
                <NavigationMenuLink
                  href="/users"
                  className={navigationMenuTriggerStyle()}
                >
                  Пользователи
                </NavigationMenuLink>
              )}
            </NavigationMenu>
          </nav>
        </header>
      </div>
    </div>
  );
}
