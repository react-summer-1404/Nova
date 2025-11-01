import "./App.css";
import React from "react";
import { RouterProvider } from "react-router-dom";
import router from "./router/router";
import {HeroUIProvider} from "@heroui/system";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <HeroUIProvider>
        <RouterProvider router={router} />
      </HeroUIProvider>
      <Toaster />
    </QueryClientProvider>
  );
};

export default App;
