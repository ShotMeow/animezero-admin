import { createLazyFileRoute, useNavigate } from "@tanstack/react-router";
import type { FormEvent } from "react";
import { Label } from "../components/ui/label.tsx";
import { Input } from "../components/ui/input.tsx";
import { Button } from "../components/ui/button.tsx";
import DotPattern from "@/components/ui/dot-pattern.tsx";
import { cn } from "@/lib/utils.ts";
import { useAuthContext } from "@/features/auth/context.ts";

export const Route = createLazyFileRoute("/login")({
  component: LoginPage,
});

const ADMIN_USERNAME = import.meta.env.ADMIN_USERNAME;
const ADMIN_PASSWORD = import.meta.env.ADMIN_PASSWORD;

function LoginPage() {
  const navigate = useNavigate({ from: "/" });
  const { setIsAuth } = useAuthContext();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    const username = formData.get("username");
    const password = formData.get("password");

    if (ADMIN_USERNAME === username && password === ADMIN_PASSWORD) {
      setIsAuth(true);
      void navigate({
        to: "/panel",
      });
    }
  };

  return (
    <div className="container flex h-full items-center justify-center py-12">
      <div className="mx-auto max-w-[500px] space-y-6 rounded-md">
        <div className="grid gap-2 text-center">
          <h1 className="text-3xl font-bold">Войти</h1>
          <p className="text-zinc-400">
            Введите имя пользователя и пароль для входа в админ-панель.
          </p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="username">Имя пользователя</Label>
            <Input id="username" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Пароль</Label>
            <Input id="password" type="password" required />
          </div>
          <Button type="submit" className="w-full">
            Войти
          </Button>
        </form>
      </div>
      <DotPattern
        cx={1}
        cy={1}
        cr={1}
        className={cn(
          "[mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)] ",
        )}
      />
    </div>
  );
}
