import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/Root.tsx";
import ErrorPage from "./pages/ErrorPage.tsx";
import ThemeContextProvider from "./context/ThemeContext.tsx";
import SignIn from "./components/SignIn.tsx";
import SignUp from "./components/SignUp.tsx";
import App from "./pages/App.tsx";
import Dashboard from "./routes/Dashboard.tsx";
import Todo from "./pages/dashboard/Todo.tsx";
import DashboardIndex from "./pages/dashboard/DashboardIndex.tsx";
import Settings from "./pages/dashboard/Settings.tsx";
import Calendar from "./components/dashboard/Calendar.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <App /> },
      { path: "/login", element: <SignIn /> },
      { path: "/register", element: <SignUp /> },
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      { index: true, element: <DashboardIndex /> },
      { path: "/dashboard/todo", element: <Todo /> },
      { path: "/dashboard/calendar" },
      { path: "/dashboard/trash" },
      { path: "/dashboard/settings", element: <Settings /> },
      { path: "/dashboard/calendar", element: <Calendar /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeContextProvider>
      <RouterProvider router={router} />
    </ThemeContextProvider>
  </React.StrictMode>
);
