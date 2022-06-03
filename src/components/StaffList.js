import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import StaffService from "../services/StaffService";
import Staff from "./Staff";

const StaffList = () => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  const [staffs, setStaffs] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await StaffService.getStaffs();
        setStaffs(response.data);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  const deleteStaff = (e, id) => {
    e.preventDefault();
    StaffService.deleteStaff(id).then((res) => {
      if (staffs) {
        setStaffs((prevElement) => {
          return prevElement.filter((staff) => staff.id !== id);
        });
      }
    });
  };

  return (
    <div className="container mx-auto my-8">
      <div className="h-12">
        <button
          onClick={() => navigate("/addStaff")}
          className="rounded bg-slate-600 text-white px-6 py-2 font-semibold"
        >
          Add Staff
        </button>
      </div>
      <div className="flex shadow border-b">
        <table className="min-w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6">
                First Name
              </th>
              <th className="text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6">
                Last Name
              </th>
              <th className="text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6">
                Email ID
              </th>
              <th className="text-right font-medium text-gray-500 uppercase tracking-wider py-3 px-6">
                Actions
              </th>
            </tr>
          </thead>
          {!loading && (
            <tbody>
              {staffs.map((staff) => (
                <Staff
                  staff={staff}
                  deleteStaff={deleteStaff}
                  key={staff.id}
                ></Staff>
              ))}
            </tbody>
          )}
        </table>
      </div>
    </div>
  );
};

export default StaffList;
