import { Outlet } from "react-router-dom";
import { AppBar } from "../AppBar/AppBar";
import css from "./Layout.module.css";

export const Layout = () => {
  return (
    <>
      <AppBar />
      <Outlet />
    </>
  );
};
