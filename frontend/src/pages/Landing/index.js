import Navbar from "../../components/Navbar/Navbar";
import Login from "../../components/Login/Login";
import Individual from "../../components/Individual/Individual";

const Landing = () => {
  return (
      <div className="mx-auto px-2 md:px-40 w-full md:w-1440">
        <Navbar />
        <Login />
        <Individual />
      </div>
    )
}

export default Landing;
