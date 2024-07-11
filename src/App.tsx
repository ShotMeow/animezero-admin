import { createRouter, RouterProvider } from "@tanstack/react-router";
import { routeTree } from "@/routeTree.gen";
import { useAuthContext } from "@/features/auth/context.ts";

const router = createRouter({
  routeTree,
  context: {
    user: undefined,
  },
});

const App = () => {
  const { user } = useAuthContext();
  return <RouterProvider router={router} context={{ user }} />;
};

export default App;
