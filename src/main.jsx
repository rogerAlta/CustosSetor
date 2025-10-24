import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css"; // Importa os estilos globais
import App from "./App.jsx"; // Importa o componente principal

// Renderiza o aplicativo dentro da div #root no index.html
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
