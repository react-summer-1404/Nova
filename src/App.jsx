import "./App.css";
import React from "react";
import { RouterProvider } from "react-router-dom";
import router from "./router/router";
import { HeroUIProvider } from "@heroui/react";

const App = () => {
  return (
    <HeroUIProvider>
      <RouterProvider router={router}></RouterProvider>;
    </HeroUIProvider>
  );
};

export default App;
