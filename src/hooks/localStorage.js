export const setToken = (token) => {
  return localStorage.setItem("token", token);
};
export const getToken = () => {
  return localStorage.getItem("token");
};

export const removeToken = () => {
  return localStorage.removeItem("token");
};
export const setRole = (roles) => {
  return localStorage.setItem("role", JSON.stringify(roles));
};
export const getRole = () => {
  const roles = localStorage.getItem("role");
  return roles ? JSON.parse(roles) : [];
};