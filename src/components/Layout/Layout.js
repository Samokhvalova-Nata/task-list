import { AppBar } from "components/AppBar/AppBar";
import css from "./Layout.module.css";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";

export const Layout = () => {
  return (
    <div className={css.container}>
      <AppBar />
      <Suspense fallback={null}>
        <Outlet/>
      </Suspense>
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
};
