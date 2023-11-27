// import React from "react";
// import ReactDOM from "react-dom/client";
// import "./index.css";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import LandingPage from "./pages/index.jsx";
// import OptionPage from "./pages/option.jsx";
// import FormPage from "./pages/form.jsx";
// import Chat from "./pages/chat.jsx";



// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <LandingPage></LandingPage>,
//   },
//   {
//     path: "/option",
//     element: <OptionPage></OptionPage>,
//   },
//   {
//     path: "/form",
//     element: <FormPage></FormPage>,
//   },
//   {
//     path: "/cek",
//     element: <Chat></Chat>,
//   },
// ]);

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <RouterProvider router={router} />
//   </React.StrictMode>
// );
import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
