import React from "react";
import { NavLink } from "react-router-dom";
import { HiPlusCircle } from "react-icons/hi";
import { CgNotes } from "react-icons/cg";

const Menu = () => {
  return (
    <div className="md:w-full border flex justify-between p-1">
      <NavLink
        className={({ isActive }) => (isActive ? "active" : "default")}
        to="/"
      >
        <span className="mr-2">Tasks List</span>{" "}
        <span>
          <CgNotes></CgNotes>
        </span>
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "active" : "default")}
        to="/addATask"
      >
        <span className="mr-2">Add New Task</span>{" "}
        <span>
          <HiPlusCircle></HiPlusCircle>
        </span>
      </NavLink>
    </div>
  );
};

export default Menu;
