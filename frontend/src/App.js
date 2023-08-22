import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import jwt_decode from 'jwt-decode'

import store from "./redux/store";
import { setCurrentUser } from "./redux/actions/authActions";
import { logoutUser } from "./redux/actions/authActions";

import Landing from "./pages/Landing";
import Signin from "./pages/Auth/Signin";
import Navbar from "./components/Navbar/Navbar";
import SignUp from "./pages/Auth/SignUp";
import setAuthToken from "./utils/setAuthToken";
import JoinNow from "./pages/JoinNow";

if (localStorage.jwtToken) {
  const token = localStorage.jwtToken
  setAuthToken(token)
  const decoded = jwt_decode(token)
  store.dispatch(setCurrentUser(decoded))
  const currentTime = Date.now() / 1000
  if (decoded.exp < currentTime) {
    store.dispatch(logoutUser())
    window.location.href = './signin'
  }
}

function App() {
  return (
    <Provider store={store}>
      <div>
        <BrowserRouter>
          <div className="mx-auto w-full md:w-1440 px-2 md:px-40">
            <Navbar />
          </div>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/signup" element={<SignUp />} />
          </Routes>
        </BrowserRouter>
      </div>
    </Provider >
  );
}

export default App;
