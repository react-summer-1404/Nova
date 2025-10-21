export const setToken = (key, token) => {
  try {
    localStorage.setItem(key, token);
  } catch (e) {
    console.error("Could not save token to localStorage", e);
  }
};
export const getToken = () => {
  return localStorage.getItem("token");
};

export const removeToken = () => {
  localStorage.removeItem("token");
};
export default localStorage;
