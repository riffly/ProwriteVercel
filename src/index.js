import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
// import About from "./pages/About";
import Service from "./pages/Service";
import Package from "./pages/Package";
import Contact from "./pages/Contact";
import OurTeam from "./pages/OurTeam";
import Learn from "./pages/Learn";
import Review from "./pages/Review.jsx"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "ourteam",
        element: <OurTeam />,
      },
      {
        path: "learn",
        element: <Learn />,
      },
      {
        path: "service",
        element: <Service />,
      },
      {
        path: "review",
        element: <Review />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
