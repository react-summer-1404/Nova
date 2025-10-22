import "./App.css";
import React from "react";
import { RouterProvider } from "react-router-dom";
import router from "./router/router";
import { HeroUIProvider } from "@heroui/react";   
import {  QueryClient, QueryClientProvider} from "@tanstack/react-query"
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
