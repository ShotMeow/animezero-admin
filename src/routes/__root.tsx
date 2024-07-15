import { createRootRouteWithContext, Outlet } from "@tanstack/react-router";
import { Toaster } from "@/components/ui/sonner.tsx";
import { UserType } from "@/features/auth/context.ts";

type RouterContext = {
  user: UserType | undefined;
};

export const Route = createRootRouteWithContext<RouterContext>()({
  component: () => (
    <div className="h-full">
      <Outlet />
      <Toaster />
    </div>
  ),
});
