import React from "react";
import Menu from "../components/Menu";
import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <div className="bg-emerald-50  h-screen flex justify-center items-center px-5 md:px-0">
      <div className="bg-white w-full  md:w-1/2 border">
        <Menu></Menu>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Main;
