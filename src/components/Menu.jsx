import React from "react";
import { NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <div>
      <NavLink to="/">Tasks List</NavLink>
      <NavLink to="/addATask">Add A Task</NavLink>
    </div>
  );
};

export default Menu;
