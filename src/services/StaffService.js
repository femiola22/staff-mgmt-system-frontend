import axios from "axios";

const STAFF_API_BASE_URL = "http://localhost:8080/api/v1/staffs";

class StaffService {
    saveStaff(staff) {
        return axios.post(STAFF_API_BASE_URL, staff)
    }

    getStaffs() {
        return axios.get(STAFF_API_BASE_URL);
    }

    deleteStaff(id) {
        return axios.delete(STAFF_API_BASE_URL + "/" + id)
    }

    getStaffById(id) {
        return axios.get(STAFF_API_BASE_URL + "/" + id)
    }

    updateStaff(staff, id) {
        return axios.put(STAFF_API_BASE_URL + "/" + id, staff)
    }
}

export default new StaffService();