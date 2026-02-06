import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function EditEmployee() {
  const { id } = useParams();
  const navigate = useNavigate();
  const employees = JSON.parse(localStorage.getItem("employees")) || [];

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

  useEffect(() => {
    if (employees[id]) {
      setFormData(employees[id]);
    }
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleUpdate = (e) => {
    e.preventDefault();

    employees[id] = {
      ...employees[id],
      email: formData.email,
      designation: formData.designation,
      department: formData.department,
      status: formData.status,
      salary: formData.salary
    };

    localStorage.setItem("employees", JSON.stringify(employees));
    navigate("/view");
  };

  return (
    <div className="container mt-4">
          <h2 className="text-center mt-3">Edit Employee</h2>

          <form onSubmit={handleUpdate}>

            <div className="row mb-3">
              <label className="col-sm-4 col-form-label text-end">
                Employee ID
              </label>
              <div className="col-sm-6">
                <input
                  className="form-control"
                  value={formData.employeeId}
                  readOnly
                />
              </div>
            </div>

            <div className="row mb-3">
              <label className="col-sm-4 col-form-label text-end">
                Name
              </label>
              <div className="col-sm-6">
                <input
                  className="form-control"
                  value={formData.name}
                  readOnly
                />
              </div>
            </div>

            <div className="row mb-3">
              <label className="col-sm-4 col-form-label text-end">
                Email
              </label>
              <div className="col-sm-6">
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="row mb-3">
              <label className="col-sm-4 col-form-label text-end">
                Designation
              </label>
              <div className="col-sm-6">
                <input
                  className="form-control"
                  name="designation"
                  value={formData.designation}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="row mb-3">
              <label className="col-sm-4 col-form-label text-end">
                Department
              </label>
              <div className="col-sm-6">
                <select
                  className="form-select"
                  name="department"
                  value={formData.department}
                  onChange={handleChange}
                >
                  <option>HR</option>
                  <option>IT</option>
                  <option>Finance</option>
                  <option>Marketing</option>
                </select>
              </div>
            </div>

            <div className="row mb-3">
              <label className="col-sm-4 col-form-label text-end">
                Status
              </label>
              <div className="col-sm-6">
                <select
                  className="form-select"
                  name="status"
                  value={formData.status}
                  onChange={handleChange}
                >
                  <option>Active</option>
                  <option>Inactive</option>
                </select>
              </div>
            </div>

            <div className="row mb-4">
              <label className="col-sm-4 col-form-label text-end">
                Salary
              </label>
              <div className="col-sm-6">
                <input
                  type="number"
                  className="form-control"
                  name="salary"
                  value={formData.salary}
                  onChange={handleChange}
                />
              </div>
            </div>

            {formData.image && (
              <div className="row mb-4">
                <label className="col-sm-4 col-form-label text-end">
                  Employee Image
                </label>
                <div className="col-sm-6">
                  <img
                    src={formData.image}
                    alt="Employee"
                    width="120"
                    className="rounded border"
                  />
                </div>
              </div>
            )}

            <div className="row">
              <div className="col-sm-10 text-center">
                <button className="btn btn-primary me-3">
                  Update
                </button>
                <button
                  type="button"
                  className="btn btn-outline-secondary"
                  onClick={() => navigate("/view")}
                >
                  Cancel
                </button>
              </div>
            </div>

          </form>
    </div>
  );
}

export default EditEmployee;
