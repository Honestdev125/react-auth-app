import axios from "axios";
import setAuthToken from "../../utils/setAuthToken";
import jwt_decode from "jwt-decode";
import { GET_ERRORS, SET_CURRENT_USER, BASE_URL } from "../constants/authConstants";

export const registerUser = (userData) => dispatch => {
  axios
    .post(`${BASE_URL}/api/users/register`, userData)
    .then(res => console.log(res.data))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

export const organRegisterUser = (userData) => dispatch => {
  axios
    .post(`${BASE_URL}/api/organ/register`, userData)
    .then(res => console.log(res.data))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

export const loginUser = userData => dispatch => {
  axios
    .post("/api/users/login", userData)
    .then(res => {
      const { token } = res.data;
      localStorage.setItem("jwtToken", token);
      setAuthToken(token);
      const decoded = jwt_decode(token);
      dispatch(setCurrentUser(decoded));
    })
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

export const setCurrentUser = decoded => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded
  };
};

export const logoutUser = () => dispatch => {

  localStorage.removeItem("jwtToken");

  setAuthToken(false);

  dispatch(setCurrentUser({}));
};


