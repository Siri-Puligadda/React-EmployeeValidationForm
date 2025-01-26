import { useState } from "react";

function EmployeeValidationForm() {
  const [empName, setEmpName] = useState("");
  const [empEmail, setEmpEmail] = useState("");
  const [empID, setEmpID] = useState("");
  const [joinDate, setJoinDate] = useState("");

  const nameError = empName.length < 4 || !/^[A-Za-z\s]+$/.test(empName);
  const emailError = !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(empEmail);
  const idError = isNaN(empID) || empID.length !== 6;
  const joinDateError =
    joinDate !== "" ? new Date() < new Date(joinDate) : true;
  const submitEnabled = nameError || emailError || idError || joinDateError;

  return (
    <div
      className="layout-column align-items-center mt-20 "
      style={{ margin: " 0% 30%", width: "70%" }}
    >
      <div
        className="layout-column align-items-start mb-10 w-50"
        data-testid="input-name"
      >
        <input
          className="w-100"
          type="text"
          name="name"
          value={empName}
          placeholder="Name"
          data-testid="input-name-test"
          onChange={(e) => setEmpName(e.target.value)}
        />
        {nameError && (
          <p className="error mt-2" style={{ color: "red" }}>
            Name must be at least 4 characters long and only contain letters and
            spaces
          </p>
        )}
      </div>
      <div
        className="layout-column align-items-start mb-10 w-50"
        data-testid="input-email"
      >
        <input
          className="w-100"
          type="text"
          name="email"
          value={empEmail}
          placeholder="Email"
          onChange={(val) => setEmpEmail(val.target.value)}
        />
        {emailError && (
          <p className="error mt-2" style={{ color: "red" }}>
            Email must be a valid email address
          </p>
        )}
      </div>
      <div
        className="layout-column align-items-start mb-10 w-50"
        data-testid="input-employee-id"
      >
        <input
          className="w-100"
          type="text"
          name="employeeId"
          value={empID}
          placeholder="Employee ID"
          onChange={(val) => setEmpID(val.target.value)}
        />
        {idError && (
          <p className="error mt-2" style={{ color: "red" }}>
            Employee ID must be exactly 6 digits
          </p>
        )}
      </div>
      <div
        className="layout-column align-items-start mb-10 w-50"
        data-testid="input-joining-date"
      >
        <input
          className="w-100"
          type="date"
          name="joiningDate"
          value={joinDate}
          placeholder="Joining Date"
          onChange={(val) => setJoinDate(val.target.value)}
        />
        {joinDateError && (
          <p className="error mt-2" style={{ color: "red" }}>
            Joining Date cannot be in the future
          </p>
        )}
      </div>
      <button
        disabled={submitEnabled}
        data-testid="submit-btn"
        className="btn btn-success"
        type="submit"
      >
        Submit
      </button>
    </div>
  );
}

export default EmployeeValidationForm;
