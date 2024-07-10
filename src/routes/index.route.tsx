import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  beforeLoad: ({ context }) => {
    if (!context.auth)
      throw redirect({
        to: "/login",
      });
  },
  component: AdminPanelPage,
});

function AdminPanelPage() {
  return (
    <div className="pt-10">
      <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight">
        Админ-панель
      </h2>
    </div>
  );
}
