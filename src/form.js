import React from "react";

const Form = ({ email, password, firstname, lastname, errors, handleChange }) => {

  const renderInput = (label, name, value, type, error) => (
    <label htmlFor={name}>
      <p>{label}:</p>
      <input
        type={type}
        name={name}
        id={name}
        value={value}
        onChange={handleChange}
      />
      {error &&
        <p>
          <span>Warning:</span> {error}
        </p>
      }
    </label>
  );

  return (
    <>
      {renderInput("Email", "email", email, "email", errors.email)}
      {renderInput("Password", "password", password, "password", errors.password)}
      {renderInput("First Name", "firstname", firstname, "text", errors.firstname)}
      {renderInput("Last Name", "lastname", lastname, "text", errors.lastname)}
    </>
  );
}

export default Form;