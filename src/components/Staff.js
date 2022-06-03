import React from "react";
import { useNavigate } from "react-router-dom";

const Staff = ({ staff, deleteStaff }) => {
  const navigate = useNavigate();
  const editStaff = (e, id) => {
    e.preventDefault();
    navigate(`/editStaff/${id}`);
  };
  return (
    <tr key={staff.id}>
      <td className="text-left px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-500">{staff.firstName}</div>
      </td>
      <td className="text-left px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-500">{staff.lastName}</div>
      </td>
      <td className="text-left px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-500">{staff.emailId}</div>
      </td>
      <td className="text-right px-6 py-4 whitespace-nowrap font-medium text-sm">
        <button
          onClick={(e, id) => editStaff(e, staff.id)}
          className="text-indigo-600 hover:text-indigo-800 px-4 font-semibold"
        >
          Edit
        </button>
        <button
          onClick={(e, id) => deleteStaff(e, staff.id)}
          className="text-indigo-600 hover:text-indigo-800 font-semibold"
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default Staff;
