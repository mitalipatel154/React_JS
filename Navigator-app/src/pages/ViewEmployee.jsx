import { Link } from "react-router-dom";

function ViewEmployee() {
  const employees = JSON.parse(localStorage.getItem("employees")) || [];

  const deleteEmployee = (index) => {
    employees.splice(index, 1);
    localStorage.setItem("employees", JSON.stringify(employees));
    window.location.reload();
  };

  return (
    <>
      <h2 className="text-center mt-3">View Employees</h2>

      <table className="table table-bordered table-striped mt-3 align-middle">
        <thead className="table-dark">
          <tr>
            <th>ID</th>
            <th>Image</th>
            <th>Employee</th>
            <th>Email</th>
            <th>Designation</th>
            <th>Department</th>
            <th>Status</th>
            <th>Salary</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {employees.map((emp, index) => (
            <tr key={index}>
              <td>{emp.employeeId}</td>

              <td>
                {emp.image ? (
                  <img
                    src={emp.image}
                    alt={emp.name}
                    width="50"
                    height="50"
                    className="rounded-circle object-fit-cover"
                  />
                ) : (
                  <span className="text-muted">No Image</span>
                )}
              </td>
              <td>{emp.name}</td>
              <td>{emp.email}</td>
              <td>{emp.designation}</td>
              <td>{emp.department}</td>
              <td>{emp.status}</td>
              <td>{emp.salary}</td>

              <td>
                <Link
                  to={`/edit/${index}`}
                  className="btn btn-warning btn-sm me-2"
                >
                  Edit
                </Link>

                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => deleteEmployee(index)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}

          {employees.length === 0 && (
            <tr>
              <td colSpan="8" className="text-center">
                No employees found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  );
}

export default ViewEmployee;
