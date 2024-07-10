import { createLazyFileRoute, useNavigate } from "@tanstack/react-router";
import { useAuthContext } from "@/features/auth/context.ts";
import { useEffect } from "react";

export const Route = createLazyFileRoute("/")({
  component: AdminPanelPage,
});

function AdminPanelPage() {
  const navigate = useNavigate();
  const { isAuth } = useAuthContext();

  // ToDo: move functional to tanStack router beforeLoad
  useEffect(() => {
    !isAuth &&
      navigate({
        to: "/login",
      });
  }, [isAuth, navigate]);

  return (
    <div className="p-2">
      <h3>Welcome Panel!</h3>
    </div>
  );
}
