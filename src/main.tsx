import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { ChakraBaseProvider } from "@chakra-ui/react";
import theme from "./themes/theme.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ChakraBaseProvider theme={theme}>
    <App />
  </ChakraBaseProvider>
);
