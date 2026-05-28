import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <>
      <ul className="list-group">
        <li  className="list-group-item active ">SIDE BAR</li>
        <li className="list-group-item">
          <Link to="/admin/">Dashboard</Link>
        </li>
        <li className="list-group-item">
          <Link to="/admin/category">Category</Link>
        </li>
        <li className="list-group-item">
          <Link to="/admin/order">Order</Link>
        </li>
        <li className="list-group-item">
          <Link to="/admin/product">Product</Link>
        </li>
      </ul>
    </>
  );
};

export default Sidebar;
