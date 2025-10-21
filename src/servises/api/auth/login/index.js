import axios from "axios";
import instance from "../../../../core/interceptor/interceptor";

export const login = async ({ phoneOrGmail, password, rememberMe }) => {
  const response = await instance.post("/Sign/Login", {
    phoneOrGmail,
    password,
    rememberMe,
  });
  return response.data;
};

// async function LoginApi(params) {
//   const response = await axios.post(
//     "https://sepehracademy.liara.run/Sign/Login",
//     {
//       phoneOrGmail: "",
//       password: params.password,
//       rememberMe: true,
//     }
//   );
//   return response;
// }

// export default LoginApi;
