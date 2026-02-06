import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddEmployee() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    employeeId: "",
    name: "",
    email: "",
    designation: "",
    department: "",
    status: "",
    salary: "",
    image: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      setFormData(prev => ({ ...prev, image: reader.result }));
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const employees = JSON.parse(localStorage.getItem("employees")) || [];
    employees.push(formData);
    localStorage.setItem("employees", JSON.stringify(employees));
    navigate("/view");
  };

  return (
    <div className="container">
      <h2 className="text-center mt-3">Add Employee</h2>

      <form className="px-5 py-4 mt-3" onSubmit={handleSubmit}>


        <div className="row mb-3">
          <label className="col-sm-4 col-form-label text-end">
            Employee ID :
          </label>
          <div className="col-sm-6">
            <input
              className="form-control"
              name="employeeId"
              placeholder="Enter Employee ID"
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="row mb-3">
          <label className="col-sm-4 col-form-label text-end">
             Name :
          </label>
          <div className="col-sm-6">
            <input
              className="form-control"
              name="name"
              placeholder="Enter Name"
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="row mb-3">
          <label className="col-sm-4 col-form-label text-end">
             Email :
          </label>
          <div className="col-sm-6">
            <input
              type="email"
              className="form-control"
              name="email"
              placeholder="Enter Email"
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="row mb-3">
          <label className="col-sm-4 col-form-label text-end">
             Designation :
          </label>
          <div className="col-sm-6">
            <input
              className="form-control"
              name="designation"
              placeholder="Enter Designation"
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="row mb-3">
          <label className="col-sm-4 col-form-label text-end">
             Department :
          </label>
          <div className="col-sm-6">
            <select
              className="form-select"
              name="department"
              onChange={handleChange}
            >
              <option value="">Select Department</option>
              <option>HR</option>
              <option>IT</option>
              <option>Finance</option>
              <option>Marketing</option>
            </select>
          </div>
        </div>

        <div className="row mb-3">
          <label className="col-sm-4 col-form-label text-end">
             Status :
          </label>
          <div className="col-sm-6">
            <select
              className="form-select"
              name="status"
              onChange={handleChange}
            >
              <option value="">Select Status</option>
              <option>Active</option>
              <option>Inactive</option>
            </select>
          </div>
        </div>

        <div className="row mb-3">
          <label className="col-sm-4 col-form-label text-end">
             Salary :
          </label>
          <div className="col-sm-6">
            <input
              type="number"
              className="form-control"
              name="salary"
              placeholder="Enter Salary"
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="row mb-4">
          <label className="col-sm-4 col-form-label text-end">
             Employee Image :
          </label>
          <div className="col-sm-6">
            <input
              type="file"
              className="form-control"
              accept="image/*"
              onChange={handleImageChange}
            />
          </div>
        </div>

        <div className="text-center mt-4">
          <button className="btn btn-primary">Add Employee</button>
        </div>
      </form>
    </div>
  );
}

export default AddEmployee;
