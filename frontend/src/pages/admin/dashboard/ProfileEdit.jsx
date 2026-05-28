import React, { useState } from "react";
import { Link } from "react-router-dom";

const ProfileEdit = () => {
  const initialState = {
    name: "",
    email:"",
    contact:"",
    image: "",
   
  };
  const [formData, setformData] = useState(initialState);

  const { name, image, contact,email } = formData;
  const inputHandler = (event) => {
    console.log(event.target.name, event.target.value);

      setformData((prev)=>({
        ...prev,
        [event.target.name]: event.target.value
      }))

  };
  const submit = (event) => {
      event.preventDefault()
      console.log(formData);
      
  };
  return (
    <div className="card mb-5">
      <div className="card-header d-flex justify-content-between">
        <h5>Edit Profile</h5>
        <Link to="/admin/" className="btn btn-primary text-white">
          Dashboard
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
          <div className="from-group mb-4">
            <label htmlFor="email">Email-id </label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter Email id "
              name="email"
              value={email}
              onChange={inputHandler}
            />
          </div>

          <div className="from-group mb-4">
            <label htmlFor="contact">Contact no </label>
            <input
              type="text"
              className="form-control"
              id="contact"
              placeholder="Enter contact no"
              name="contact"
              value={contact}
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
          <div className="row">
            <div className="col-sm-6 ">
              <button  className="btn btn-primary text-white">
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

export default ProfileEdit;
