import ReactDOM from "react-dom/client";

import App from "./App";
import "./styles/index.css";
import AuthProvider from "@/features/auth/provider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <AuthProvider>
    <App />
  </AuthProvider>,
);
