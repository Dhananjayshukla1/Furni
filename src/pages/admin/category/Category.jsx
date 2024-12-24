import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getCategoryStart } from "../../../redux/action/Category.action";

const Category = () => {
 const categories= useSelector(state=>state.category.categories)

 
  const dispatch= useDispatch()
  useEffect(()=>{
    dispatch(getCategoryStart())
  },[categories.length])
  return (
    <div className="card mb-5">
      <div className="card-header d-flex justify-content-between">
        <h5>Category</h5>
        <Link to="/admin/category/add" className="btn btn-primary text-white">
          Add Category
        </Link>
      </div>
      <div className="card-body">
        <div className="table-responsive">
          <table className="table">
            <thead>
              <tr>
              <th>#</th>
                <th>Image</th>
                <th>Name</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
            {categories.length > 0 && categories.map((category,index)=><tr key={index}>
              <th >{index+1}</th>
              <td><img height={"40px"} src="" alt="" /></td>
              <td>{category.name}</td>
              <td>
              {category.status==="1"?"Active":"Inactive"}
              </td>
              <td>
              <Link to="/admin/category/edit" className="btn btn-warning text-white me-2">Edit</Link>
              <button className="btn btn-warning text-white">Delete</button>
              </td>
            </tr>)}
              
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Category;
