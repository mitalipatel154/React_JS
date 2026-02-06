import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function ViewEmployee() {
  const [employees, setEmployees] = useState([]);
  const [search, setSearch] = useState("");
  const [department, setDepartment] = useState("");
  const [status, setStatus] = useState("");
  const [sort, setSort] = useState("");

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("employees")) || [];
    setEmployees(stored);
  }, []);

  const deleteEmployee = (index) => {
    const updated = [...employees];
    updated.splice(index, 1);
    localStorage.setItem("employees", JSON.stringify(updated));
    setEmployees(updated);
  };

  const filteredEmployees = employees
    .filter(emp =>
      emp.name.toLowerCase().includes(search.toLowerCase()) ||
      emp.email.toLowerCase().includes(search.toLowerCase())
    )
    .filter(emp => department ? emp.department === department : true)
    .filter(emp => status ? emp.status === status : true)
    .sort((a, b) => {
      if (sort === "name-a"){
        return a.name.localeCompare(b.name);
      }
      if (sort === "name-d"){
        return b.name.localeCompare(a.name);
      }
      if (sort === "salary-l"){
        return a.salary - b.salary;
      }
      if (sort === "salary-h"){
        return b.salary - a.salary;
      } 
      return 0;
    });

  return (
    <div className="mt-3 container">
      <h2 className="text-center">View Employees</h2>

      <div className="row my-3 g-3">
        <div className="col-md-3">
          <input
            className="form-control"
            placeholder="Search by name or email"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="col-md-3">
          <select
            className="form-select"
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
          >
            <option value="">All Departments</option>
            <option>HR</option>
            <option>IT</option>
            <option>Finance</option>
            <option>Marketing</option>
          </select>
        </div>

        <div className="col-md-3">
          <select
            className="form-select"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="">All Status</option>
            <option>Active</option>
            <option>Inactive</option>
          </select>
        </div>

        <div className="col-md-3">
          <select
            className="form-select"
            value={sort}
            onChange={(e) => setSort(e.target.value)}
          >
            <option value="">Sort By</option>
            <option value="name-a">Name (A–Z)</option>
            <option value="name-d">Name (Z–A)</option>
            <option value="salary-l">Salary (Low–High)</option>
            <option value="salary-h">Salary (High–Low)</option>
          </select>
        </div>
      </div>

      <table className="table table-bordered table-striped align-middle mt-4">
        <thead className="table-dark">
          <tr>
            <th>ID</th>
            <th>Image</th>
            <th>Name</th>
            <th>Email</th>
            <th>Designation</th>
            <th>Department</th>
            <th>Status</th>
            <th>Salary</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {filteredEmployees.map((emp, index) => (
            <tr key={index}>
              <td>{emp.employeeId}</td>
              <td>
                {emp.image ? (
                  <img
                    src={emp.image}
                    alt={emp.name}
                    width="45"
                    height="45"
                    className="rounded-circle"
                  />
                ) : (
                  "—"
                )}
              </td>
              <td>{emp.name}</td>
              <td>{emp.email}</td>
              <td>{emp.designation}</td>
              <td>{emp.department}</td>
              <td>{emp.status}</td>
              <td>{emp.salary}</td>
              <td>
                <Link to={`/edit/${index}`} className="btn btn-warning btn-sm me-2">Edit</Link>
                <button className="btn btn-danger btn-sm" onClick={() => deleteEmployee(index)}>Delete</button>
              </td>
            </tr>
          ))}

          {filteredEmployees.length === 0 && (
            <tr>
              <td colSpan="9" className="text-center">No employees found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default ViewEmployee;
