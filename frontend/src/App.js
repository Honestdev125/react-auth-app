import { BrowserRouter, Routes, Route } from "react-router-dom";

import Landing from "./pages/Landing";
import Signin from "./pages/Auth/Signin";
import Navbar from "./components/Navbar/Navbar";
import SignUp from "./pages/Auth/SignUp";

function App() {
  return (
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
  );
}

export default App;
