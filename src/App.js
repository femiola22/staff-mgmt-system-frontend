import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import AddStaff from "./components/AddStaff";
import StaffList from "./components/StaffList";
import Navbar from "./components/Navbar";
import UpdateStaff from "./components/UpdateStaff";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route index element={<StaffList />} />
          <Route path="/" element={<StaffList />}></Route>
          <Route path="/staffList" element={<StaffList />} />
          <Route path="/addStaff" element={<AddStaff />} />
          <Route path="/editStaff/:id" element={<UpdateStaff />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
