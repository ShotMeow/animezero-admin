import { createFileRoute, redirect } from "@tanstack/react-router";
import { useEffect } from "react";
import { toast } from "sonner";

export const Route = createFileRoute("/")({
  beforeLoad: ({ context }) => {
    if (!context.user || context.user?.role === "user")
      throw redirect({
        to: "/login",
      });
  },
  component: AdminPanelPage,
});

function AdminPanelPage() {
  useEffect(() => {
    toast.success("Успех", {
      description: "Вы успешно вошли в админ-панель",
    });
  }, []);

  return <div className="px-4 py-2"></div>;
}
