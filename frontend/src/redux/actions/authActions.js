import axios from "axios";
import setAuthToken from "../../utils/setAuthToken";
import jwt_decode from "jwt-decode";
import { GET_ERRORS, SET_CURRENT_USER, BASE_URL, REGESTER_USER } from "../constants/authConstants";

export const registerUser = (userData, navigate) => dispatch => {

  axios
    .post(`${BASE_URL}/api/users/register`, userData)
    .then(res => {
      navigate('/signin')
      dispatch({
        type: REGESTER_USER,
        payload: true,
      })
    })
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

export const organRegisterUser = (userData, navigate) => dispatch => {
  axios
    .post(`${BASE_URL}/api/organ/register`, userData)
    .then(res => {
      navigate('/signin')
      dispatch({
        type: REGESTER_USER,
        payload: true,
      })
    })
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

export const join = (joinnow) => dispatch => {
  dispatch({
    type: GET_ERRORS,
    payload: joinnow
  })
}

