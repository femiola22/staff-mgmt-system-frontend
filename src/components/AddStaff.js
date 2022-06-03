import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import StaffService from "../services/StaffService";

const AddStaff = () => {
  const [staff, setStaff] = useState({
    id: "",
    firstName: "",
    lastName: "",
    emailId: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const value = e.target.value;
    setStaff({ ...staff, [e.target.name]: value });
  };

  const saveStaff = (e) => {
    e.preventDefault();

    if (
      staff.firstName.trim().length === 0 ||
      staff.lastName.trim().length === 0 ||
      staff.emailId.trim().length === 0
    ) {      
      console.log("empty field(s) detected");
      alert("Error! Empty field(s) detected.");
    } else {
      StaffService.saveStaff(staff)
        .then((response) => {
          console.log(response);
          navigate("/staffList");
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  const reset = (e) => {
    e.preventDefault();
    setStaff({
      id: "",
      firstName: "",
      lastName: "",
      emailId: "",
    });
  };

  return (
    <div className="flex max-w-2xl mx-auto shadow border-b">
      <div className="px-8 py-8">
        <div className="font-thin text-2xl tracking-wider">
          <h1>Add New Staff</h1>
        </div>
        <div className="items-center justify-center h-14 w-full my-4">
          <label className="block text-gray-600 text-sm font-normal">
            First Name
          </label>
          <input
            type="text"
            name="firstName"
            value={staff.firstName}
            onChange={(e) => handleChange(e)}
            className="h-10 w-96 border mt-2 px-2 py-2"
          ></input>
        </div>
        <div className="items-center justify-center h-14 w-full my-4">
          <label className="block text-gray-600 text-sm font-normal">
            Last Name
          </label>
          <input
            type="text"
            name="lastName"
            value={staff.lastName}
            onChange={(e) => handleChange(e)}
            className="h-10 w-96 border mt-2 px-2 py-2"
          ></input>
        </div>
        <div className="items-center justify-center h-14 w-full my-4">
          <label className="block text-gray-600 text-sm font-normal">
            Email
          </label>
          <input
            type="email"
            name="emailId"
            value={staff.emailId}
            onChange={(e) => handleChange(e)}
            className="h-10 w-96 border mt-2 px-2 py-2"
          ></input>
        </div>
        <div className="items-center justify-center h-14 w-full my-4 space-x-4 pt-4">
          <button
            onClick={saveStaff}
            className="rounded text-white font-semibold bg-green-400 hover:bg-green-700 px-6 py-2"
          >
            Save
          </button>
          <button
            onClick={reset}
            className="rounded text-white font-semibold bg-red-400 hover:bg-red-700 px-6 py-2"
          >
            Clear
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddStaff;
