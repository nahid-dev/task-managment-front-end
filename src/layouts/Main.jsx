import React from "react";
import Menu from "../components/Menu";
import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <>
      <Menu></Menu>
      <Outlet></Outlet>
    </>
  );
};

export default Main;
