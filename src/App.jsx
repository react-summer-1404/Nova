import "./App.css";
import React from "react";
import { RouterProvider } from "react-router-dom";
import router from "./router/router";
import {HeroUIProvider} from "@heroui/system";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
import { Toaster } from "react-hot-toast";

const queryClient = new QueryClient();

const App = () => {
  const client =new QueryClient ()
  return (
    <QueryClientProvider client={client}>
    <HeroUIProvider>
      <RouterProvider router={router} />
    </HeroUIProvider>
    </QueryClientProvider>
  );
};

export default App;
