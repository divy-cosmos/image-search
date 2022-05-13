import * as ReactDOMClient from "react-dom/client";
import React from "react";
import App from "./components/App";
const container = document.querySelector("#root");
const root = ReactDOMClient.createRoot(container);
root.render(<App />);
