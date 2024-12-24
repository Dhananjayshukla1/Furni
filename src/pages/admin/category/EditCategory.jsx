import React from "react";
import { Link } from "react-router-dom";

const EditCategory = () => {
  return (
    <div className="card mb-5">
      <div className="card-header d-flex justify-content-between">
        <h5>Edit Category</h5>
        <Link to="/admin/category" className="btn btn-primary text-white">
          Category
        </Link>
      </div>
      <div className="card-body">
        <form>
          <div className="from-group mb-4">
            <label htmlFor="name">Name </label>
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Enter Name"
            />
          </div>

          <div className="from-group mb-4 ">
            <label htmlFor="image">Image </label>
            <input
              type="file"
              className="form-control"
              id="image"
              placeholder="Select Image"
            />
          </div>
          <div className="from-group mb-4 ">
            <label htmlFor="status">Status </label>
            <select id="status" className="form-control">
              <option value="" hidden>
                Select Action
              </option>
              <option value="1">Active</option>
              <option value="0">Inactive</option>
            </select>
          </div>

          <div className="row">
            <div className="col-sm-6 ">
              <button type="submit" className="btn btn-primary text-white">
                submit
              </button>
              <button type="reset" className="ms-4 btn btn-primary text-white">
                Reset
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditCategory;
