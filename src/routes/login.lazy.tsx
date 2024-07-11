import { createLazyFileRoute, useNavigate } from "@tanstack/react-router";
import { FormEvent, useEffect } from "react";

import { Label } from "../components/ui/label";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import { useAuthContext, UserType } from "@/features/auth/context.ts";
import BlurryBlob from "@/components/ui/blurry-blob.tsx";
import { gql, useMutation } from "@apollo/client";
import { toast } from "sonner";
import { jwtDecode } from "jwt-decode";

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
  const [signIn] = useMutation(SIGN_IN_MUTATION);
  const { user, setUser } = useAuthContext();
  const navigate = useNavigate();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    const username = formData.get("username");
    const password = formData.get("password");

    try {
      const response = await signIn({
        variables: { name: username, password: password },
      });

      const decodedToken: UserType = jwtDecode(response.data.signIn.token);
      setUser(decodedToken);
    } catch (error) {
      toast.error("Ошибка", {
        description: "Имя пользователя или пароль не верны.",
      });
    }
  };

  useEffect(() => {
    user?.role !== "user" && navigate({ to: "/" });
  }, [navigate, user]);

  return (
    <div className="flex h-full items-center justify-center py-12">
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
          <Button type="submit" className="w-full">
            Войти
          </Button>
        </form>
      </div>
      <BlurryBlob
        className="rounded-xl opacity-45"
        firstBlobColor="bg-purple"
        secondBlobColor="bg-purple/20"
      />
    </div>
  );
}
