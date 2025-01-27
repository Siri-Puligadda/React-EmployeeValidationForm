# React + TypeScript + Vite

- npm i
- npm run dev

## Project Description
create a React app that helps employees validate and update their existing information through a survey form. The application requirements are detailed below, and the finished application must pass all of the unit tests.

### Requirements
1. The EmployeeValidationForm component collects employee details through four input fields: Name, Email, Employee ID, and Joining Date.
2. Each input field should have validation logic to ensure that the data entered meets the specified requirements.
3. A Submit button should be present at the bottom of the form but remain disabled until all fields are valid.
4. If a field does not meet the criteria, an error message should be displayed below that field.
5. When the form is valid and submitted, all input fields should be cleared, and the form should be reset to its initial state.

### Validation Criteria

- Name Field: Must be at least 4 characters long and can only contain alphabetical characters (A-Z, a-z) and spaces.
- Email Field: Must be in a valid email format (e.g., user@example.com).
- Employee ID Field: Must be exactly 6 numeric digits.
- Joining Date Field: Cannot be set to a date in the future.

### Error Messages

- Name: "Name must be at least 4 characters long and only contain letters and spaces."
- Email: "Email must be a valid email address."
- Employee ID: "Employee ID must be exactly 6 digits."
- Joining Date: "Joining Date cannot be in the future."

### Form Submission Requirements

- Form State Reset: Upon successful form submission, all fields should be cleared, and the form should revert to its initial state.
- Submit Button: Should only be enabled when all input fields are valid.
