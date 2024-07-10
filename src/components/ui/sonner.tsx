import { useTheme } from "next-themes";
import { Toaster as Sonner } from "sonner";
import type { ComponentProps } from "react";

type ToasterProps = ComponentProps<typeof Sonner>;

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme();

  return <Sonner theme={theme as ToasterProps["theme"]} {...props} />;
};

export { Toaster };
