import EnterPhonePage from "./../pages/EnterPhonePage";
import ForgetPassword from "./../pages/ForgetPassword";
import LoginPage from "./../pages/LoginPage";
import RequestCode from "./../pages/RequestCode";
import SetNewPasswordPage from "./../pages/SetNewPasswordPage";
import SignUpPage from "./../pages/SignUpPage";
import SignUpComplete from "./../pages/SignUpComplete";
import VarifyCodePage from "./../pages/VarifyCodePage";
import AuthLayout from "../layout/AuthLayout";
import { Navigate } from "react-router-dom";
export const AuthRoutes = [
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      { index: true, element: <Navigate to="login" /> },
      { path: "enterthephone", element: <EnterPhonePage /> },
      { path: "forgetpassword", element: <ForgetPassword /> },
      { path: "login", element: <LoginPage /> },
      { path: "requestcode", element: <RequestCode /> },
      { path: "setnewpassword", element: <SetNewPasswordPage /> },
      { path: "signup", element: <SignUpPage /> },
      { path: "signupcomplete", element: <SignUpComplete /> },
      { path: "verifycode", element: <VarifyCodePage /> },
    ],
  },
];
