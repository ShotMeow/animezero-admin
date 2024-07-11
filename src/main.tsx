import ReactDOM from "react-dom/client";
import "./styles/index.css";

import App from "./App";
import AuthProvider from "@/features/auth/provider.tsx";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

const API_URL = import.meta.env.VITE_API_URL;
const client = new ApolloClient({
  uri: API_URL,
  cache: new InMemoryCache(),
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ApolloProvider client={client}>
    <AuthProvider>
      <App />
    </AuthProvider>
  </ApolloProvider>,
);
