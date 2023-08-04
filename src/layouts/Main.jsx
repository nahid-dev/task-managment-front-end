import React from "react";
import Menu from "../components/Menu";
import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <div className="bg-emerald-400 text-white h-screen flex justify-center items-center">
      <div className="border">
        <Menu></Menu>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Main;
