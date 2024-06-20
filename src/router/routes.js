export const routes = {
  home: "/",
  about: "/about",
  flat: (id = ":id") => `/flat/${id}`,
  error: "*",
};
