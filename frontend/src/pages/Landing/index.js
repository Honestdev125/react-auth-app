import Navbar from "../../components/Navbar/Navbar";
import Login from "../../components/Login/Login";
import Individual from "../../components/Individual/Individual";
import Enterprise from "../../components/Enterprise/Enterprise";
import Features from "../../components/Features/Features";

const Landing = () => {
  return (
    <div>
      <div className="mx-auto w-full md:w-1440 px-2 md:px-40">
        <Navbar />
        <Login />
        <Individual />
      </div>
      <div className="mx-auto w-full md:w-1440">
        <Enterprise />
      </div>
      <div className="mx-auto w-full md:w-1440 px-2 md:px-40">
        <Features />
      </div>
    </div>
  )
}

export default Landing;
