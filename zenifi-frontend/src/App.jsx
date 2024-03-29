import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/layout/Layout";
import Homepage from "./pages/Homepage";
import { useMemo } from "react";

function App() {
  const routes = useMemo(
    () => [
      { path: "/", component: <Homepage /> },
      {
        path: "/tasks",
        component: <div>Tasks</div>,
      },
      {
        path: "/customers",
        component: <div>Customers</div>,
      },
      {
        path: "/chats",
        component: <div>Chats</div>,
      },
      {
        path: "/disputes",
        component: <div>Disputes</div>,
      },
      {
        path: "/settings",
        component: <div>Settings</div>,
      },
    ],
    []
  );

  return (
    <>
      <Routes>
        {routes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={<Layout>{route.component}</Layout>}
          />
        ))}
        <Route path="*" element={<Homepage />} />
      </Routes>
    </>
  );
}

export default App;
