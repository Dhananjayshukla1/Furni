import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addCategoryStart } from "../../../redux/action/Category.action";
const AddCategory = () => {
  const initialState = {
    name: "",
    image: "",
    status: "",
  };
  const [formData, setformData] = useState(initialState);
  const dispatch = useDispatch();

  const { name, image, status } = formData;
  const inputHandler = (event) => {
    setformData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };
  const submit = (event) => {
    event.preventDefault();

    dispatch(addCategoryStart(formData));
  };

  return (
    <div className="card mb-5">
      <div className="card-header d-flex justify-content-between">
        <h5>Category</h5>
        <Link to="/admin/category" className="btn btn-primary text-white">
          Category
        </Link>
      </div>
      <div className="card-body">
        <form onSubmit={submit}>
          <div className="from-group mb-4">
            <label htmlFor="name">Name </label>
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Enter Name"
              name="name"
              value={name}
              onChange={inputHandler}
            />
          </div>

          <div className="from-group mb-4 ">
            <label htmlFor="image">Image </label>
            <input
              type="file"
              className="form-control"
              id="image"
              placeholder="Select Image"
              name="image"
              value={image}
              onChange={inputHandler}
            />
          </div>
          <div className="from-group mb-4 ">
            <label htmlFor="status">Status </label>
            <select
              id="status"
              className="form-control"
              name="status"
              value={status}
              onChange={inputHandler}
            >
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

export default AddCategory;
