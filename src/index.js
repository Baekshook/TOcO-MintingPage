import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import AuthProvider from "@components/AuthProvider";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
    <ToastContainer theme="dark" />
  </React.StrictMode>
);
