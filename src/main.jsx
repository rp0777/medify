import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Root from "./routes/Root/Root";
import Home from "./routes/Home/Home";
import MyBookings from "./routes/MyBookings/MyBookings";
import Search from "./routes/Search/Search";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element=<Root />>
      <Route path="/Home" element=<Home />></Route>
      <Route path="/bookings" element=<MyBookings />></Route>
      <Route path="/search" element=<Search />></Route>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
