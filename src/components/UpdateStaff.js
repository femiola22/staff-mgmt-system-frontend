import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import StaffService from "../services/StaffService";

const UpdateStaff = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [staff, setStaff] = useState({
    id: id,
    firstName: "",
    lastName: "",
    emailId: "",
  });

  const handleChange = (e) => {
    const value = e.target.value;
    setStaff({ ...staff, [e.target.name]: value });
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await StaffService.getStaffById(id);
        setStaff(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const updateStaff = (e) => {
    e.preventDefault();
    StaffService.updateStaff(staff, id)
      .then((response) => {
        navigate("/staffList");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="flex max-w-2xl mx-auto shadow border-b">
      <div className="px-8 py-8">
        <div className="font-thin text-2xl tracking-wider">
          <h1>Update Staff</h1>
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
            onClick={updateStaff}
            className="rounded text-white font-semibold bg-green-400 hover:bg-green-700 px-6 py-2"
          >
            Update
          </button>
          <button
            onClick={() => navigate("/staffList")}
            className="rounded text-white font-semibold bg-red-400 hover:bg-red-700 px-6 py-2"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpdateStaff;
