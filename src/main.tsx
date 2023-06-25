import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import customTheme from "./theme";
import { CurrentUserProvider } from "./providers/UserContext.tsx";
import { INITIAL_STATE } from "./models/localStorage.model.ts";

const storedData = localStorage.getItem("simpleBudget");
const initialData = storedData ? JSON.parse(storedData) : INITIAL_STATE;

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider theme={customTheme}>
      <CurrentUserProvider initialData={initialData}>
        <App />
      </CurrentUserProvider>
    </ChakraProvider>
  </React.StrictMode>
);
