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
import ErrorPage from "./error-page";
import { RecoilRoot } from "recoil";
import { SnackbarProvider } from "notistack";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element=<Root errorElement={<ErrorPage />} />>
      <Route errorElement={<ErrorPage />}>
        <Route index element=<Home /> />
        <Route path="/bookings" element=<MyBookings /> />
        <Route path="/search" element=<Search /> />
      </Route>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RecoilRoot>
      <SnackbarProvider>
        <RouterProvider router={router} />
      </SnackbarProvider>
    </RecoilRoot>
  </React.StrictMode>
);
