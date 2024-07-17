export const getAvatarFallback = (name: string) => {
  return name.replace(/[a-z]/g, "").split("").slice(0, 2).join("");
};
