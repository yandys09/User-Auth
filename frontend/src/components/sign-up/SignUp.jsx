import React, { useState } from "react";

const defaultFormFields = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUp = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const [formErrors, setFormErrors] = useState({});

  const changeBorderColorOnError = (inputName) => {
    let formInput = document.getElementById(`${inputName}`);
    formInput.classList.add("error");
  };

  const handleValidation = () => {
    let error = {};

    if (!formFields.name) {
      error.name = "Name is required!";
      changeBorderColorOnError("name");
    }

    if (!formFields.email) {
      error.email = "Email is required!";
      changeBorderColorOnError("email");
    }

    if (!formFields.password) {
      error.password = "Password is required!";
      changeBorderColorOnError("password");
    }

    if (!formFields.confirmPassword) {
      error.confirmPassword = "confirmPassword is required!";
      changeBorderColorOnError("confirmPassword");
    }

    return error;
  };

  const handleInputValueChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    setFormErrors(handleValidation());
  };
  return (
    <section className="form-container">
      <h1 className="form-heading">Create an Account</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-item" id="name">
          <label>Name</label>
          <input
            placeholder="Enter your name"
            name="name"
            type="text"
            value={formFields.name}
            onChange={handleInputValueChange}
          />
          <span className="error-text">{formErrors.name}</span>
        </div>
        <div className="form-item" id="email">
          <label>Email</label>
          <input
            placeholder="Enter your email"
            name="email"
            type="text"
            value={setFormFields.email}
            onChange={handleInputValueChange}
          />
          <span className="error-text">{formErrors.email}</span>
        </div>

        <div className="form-item" id="password">
          <label>Password</label>
          <input
            placeholder="Enter your password"
            name="password"
            type="password"
            value={setFormFields.password}
            onChange={handleInputValueChange}
          />
          <span className="error-text">{formErrors.password}</span>
        </div>
        <div className="form-item" id="confirmPassword">
          <label>ConfirmPassword</label>
          <input
            placeholder="Confirm your password"
            name="confirmPassword"
            type="password"
            value={setFormFields.confirmPassword}
            onChange={handleInputValueChange}
          />
          <span className="error-text">{formErrors.confirmPassword}</span>
        </div>
        <button className="form-button" type="submit">
          Sign Up
        </button>
      </form>
    </section>
  );
};

export default SignUp;
