import axios from "axios";

async function LoginApi(params) {
  const response = await axios.post(
    "https://sepehracademy.liara.run/Sign/Login",
    {
      phoneOrGmail: "",
      password: params.password,
      rememberMe: true,
    }
  );
  return response;
}

export default LoginApi;
