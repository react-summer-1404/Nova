export const setToken = (token) => {
  return localStorage.setItem("token", token)
}
export const getToken = () => {
    return localStorage.getItem("token");
  };
  
  export const removeToken = () => {
   return localStorage.removeItem("token");
  };


