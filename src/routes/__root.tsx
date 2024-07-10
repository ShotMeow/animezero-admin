import { createRootRouteWithContext, Outlet } from "@tanstack/react-router";
import DotPattern from "@/components/ui/dot-pattern.tsx";
import { cn } from "@/lib/utils.ts";
import { Toaster } from "@/components/ui/sonner.tsx";

type RouterContext = {
  auth: boolean | undefined;
};

export const Route = createRootRouteWithContext<RouterContext>()({
  component: () => (
    <div className="container h-full">
      <Outlet />
      <DotPattern
        cx={1}
        cy={1}
        cr={1}
        className={cn(
          "[mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)] ",
        )}
      />
      <Toaster />
    </div>
  ),
});
