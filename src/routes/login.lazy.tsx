import { createLazyFileRoute, useNavigate } from "@tanstack/react-router";
import { type FormEvent, useEffect, useState } from "react";
import { gql, useMutation } from "@apollo/client";
import { toast } from "sonner";
import { jwtDecode } from "jwt-decode";
import { Loader2 } from "lucide-react";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { DotPattern } from "@/components/ui/dot-pattern.tsx";

import { useAuthContext, UserType } from "@/features/auth/context.ts";
import { cn } from "@/lib/utils.ts";

export const Route = createLazyFileRoute("/login")({
  component: LoginPage,
});

const SIGN_IN_MUTATION = gql(`
  mutation signInMutation($name: String!, $password: String!) {
    signIn(user: { name: $name, password: $password }) {
      token
    }
  }
`);

function LoginPage() {
  const [isPending, setIsPending] = useState<boolean>(false);
  const [signIn] = useMutation(SIGN_IN_MUTATION);
  const { user, setUser } = useAuthContext();
  const navigate = useNavigate();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    const username = formData.get("username");
    const password = formData.get("password");

    try {
      setIsPending(true);
      const response = await signIn({
        variables: { name: username, password: password },
      });

      const decodedToken: UserType = jwtDecode(response.data.signIn.token);
      setUser(decodedToken);
    } catch (error) {
      toast.error("Ошибка", {
        description: "Имя пользователя или пароль не верны.",
      });
    } finally {
      setIsPending(false);
    }
  };

  useEffect(() => {
    user?.role !== "user" && navigate({ to: "/" });
  }, [navigate, user]);

  return (
    <div className="grid h-full lg:grid-cols-2">
      <div className="container flex items-center justify-center py-6">
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
              <Input id="username" name="username" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Пароль</Label>
              <Input id="password" type="password" name="password" required />
            </div>
            <Button disabled={isPending} type="submit" className="w-full">
              {isPending ? (
                <>
                  <Loader2 className="mr-2 size-4 animate-spin" />
                  Загрузка...
                </>
              ) : (
                "Войти"
              )}
            </Button>
          </form>
        </div>
      </div>
      <div className="relative flex items-center justify-center bg-zinc-900 py-6">
        <DotPattern
          cx={1}
          cy={1}
          cr={1}
          className={cn(
            "hidden lg:block [mask-image:linear-gradient(to_top_left,white,transparent,transparent)] z-10",
          )}
        />
        <DotPattern
          cx={1}
          cy={1}
          cr={1}
          className={cn(
            "hidden lg:block [mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)] z-10",
          )}
        />
        <p className="text-6xl font-bold">
          Anime<span className="text-purple">Zero</span>
        </p>
      </div>
    </div>
  );
}
