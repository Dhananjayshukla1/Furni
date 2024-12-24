import React from "react";
import { Outlet } from "react-router-dom";
import Navigation from "../../layouts/Navigation";
import Sidebar from "../../layouts/Sidebar"
const Auth = () => {
  return (
    <>   <Navigation/>
      <div  className="container mt-4 mb-5 ">
        <div className="row pt-4">
          <div className="col-sm-3 ">
           <Sidebar/>
          </div>
          <div className="col-sm-9 ">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default Auth;
