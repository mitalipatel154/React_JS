import React from "react";

function Home() {
  const employees = JSON.parse(localStorage.getItem("employees")) || [];

  return (
    <>
      <div className="container">
        <h2 className="text-center mt-3">Dashboard</h2>

        <div className="row mt-4 w-100 d-flex justify-content-center text-center">
          {employees.map((emp, index) => (
            <div className="col-md-3 mb-3" key={index}>
              <div className="card shadow p-4 h-100">
                {emp.image && (
                  <img src={emp.image} className="card-img-top" alt="Employee" />
                )}
                <div className="card-body">
                  <h5>Name : {emp.name}</h5>
                    <h6>Designation : {emp.designation}</h6>
                    <h6>Status : {emp.status}</h6>
                </div>
              </div>
            </div>
          ))}

          {employees.length === 0 && <p>No employees added yet!</p>}
        </div>
      </div>

    </>
  );
}

export default Home;
