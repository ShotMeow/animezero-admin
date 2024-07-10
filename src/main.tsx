import ReactDOM from "react-dom/client";
import "./styles/index.css";

import App from "./App";
import AuthProvider from "@/features/auth/provider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <AuthProvider>
    <App />
  </AuthProvider>,
);
