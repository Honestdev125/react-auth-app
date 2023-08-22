const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateOrganRegisterInput(data) {
  let errors = {};

  data.organId = !isEmpty(data.organId) ? data.organId : "";
  data.organNname = !isEmpty(data.organName) ? data.organName : "";
  data.personalName = !isEmpty(data.personalName) ? data.personalName : "";
  data.email = !isEmpty(data.email) ? data.email : "";
  data.email2 = !isEmpty(data.email2) ? data.email2 : "";
  data.phone = !isEmpty(data.phone) ? data.phone : "";
  data.phone2 = !isEmpty(data.phone2) ? data.phone2 : "";
  data.password = !isEmpty(data.password) ? data.password : "";
  data.password2 = !isEmpty(data.password2) ? data.password2 : "";

  if (Validator.isEmpty(data.organId)) {
    errors.organId = "Organization ID field is required";
  }

  if (Validator.isEmpty(data.organName)) {
    errors.organName = "Organization Name field is required";
  }

  if (Validator.isEmpty(data.personalName)) {
    errors.personalName = "Personal Name field is required";
  }

  if (!Validator.isLength(data.personalName, { min: 2, max: 30 })) {
    errors.personalName = "PersonalName must be between 2 and 30 characters";
  }

  if (Validator.isEmpty(data.email)) {
    errors.email = "Email field is required";
  }

  if (!Validator.isEmail(data.email)) {
    errors.email = "Email is invalid";
  }

  if (Validator.isEmpty(data.email2)) {
    errors.email2 = "Email field is required";
  }

  if (!Validator.equals(data.email, data.email2)) {
    errors.email2 = "emails must match";
  }

  if (Validator.isEmpty(data.phone)) {
    errors.phone = "phone field is required";
  }

  if (Validator.isEmpty(data.phone2)) {
    errors.phone2 = "Confirm phone field is required";
  }

  if (!Validator.equals(data.phone, data.phone2)) {
    errors.phone2 = "phon numbers must match";
  }

  if (Validator.isEmpty(data.password)) {
    errors.password = "Password field is required";
  }

  if (Validator.isEmpty(data.password2)) {
    errors.password2 = "Confirm Password field is required";
  }

  if (!Validator.isLength(data.password, { min: 6, max: 30 })) {
    errors.password = "Password must be at least 6 characters";
  }

  if (!Validator.equals(data.password, data.password2)) {
    errors.password2 = "Passwords must match";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
