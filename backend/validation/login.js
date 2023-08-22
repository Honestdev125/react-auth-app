const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateLoginInput(data) {
  let errors = {};

  data.signEmail = !isEmpty(data.signEmail) ? data.signEmail : "";
  data.signPassword = !isEmpty(data.signPassword) ? data.signPassword : "";

  if (!Validator.isEmail(data.signEmail)) {
    errors.signEmail = "Email is invalid";
  }

  if (Validator.isEmpty(data.signPassword)) {
    errors.signPassword = "Password field is required";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
