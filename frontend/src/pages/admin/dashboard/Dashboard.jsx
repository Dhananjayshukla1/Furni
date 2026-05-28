import React from "react";
import { Link } from "react-router-dom";


const Dashboard = () => {
  return (
    <>
  
      <div className="card mb-5">
        <div className="card-header d-flex justify-content-between">
          <h5>Dashboard</h5>
          <Link to="/admin/edit-profile" className="btn btn-primary text-white">edit</Link>
        </div>
        <div className="card-body">
          <p className="border-bottom">Name</p>
          <p className="border-bottom">E-mail</p>
          <p className="border-bottom">Contact no.</p>
          <p className="border-bottom">Image</p>
          <p className="border-bottom">Role</p>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
