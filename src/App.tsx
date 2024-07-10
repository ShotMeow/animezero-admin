import { createRouter, RouterProvider } from "@tanstack/react-router";
import { routeTree } from "@/routeTree.gen";
import { useAuthContext } from "@/features/auth/context.ts";

const router = createRouter({
  routeTree,
  context: {
    auth: undefined,
  },
});

const App = () => {
  const { isAuth } = useAuthContext();
  return <RouterProvider router={router} context={{ auth: isAuth }} />;
};

export default App;
