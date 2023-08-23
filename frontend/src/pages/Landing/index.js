import Login from "../../components/Login/Login";
import Individual from "../../components/Individual/Individual";
import Enterprise from "../../components/Enterprise/Enterprise";
import Features from "../../components/Features/Features";
import AboutUs from "../../components/Aboutus/AboutUs";
import Footer from "../../components/Footer/Footer";

const Landing = () => {
  
  return (
    <div>
      <div className="mx-auto w-full md:w-1440 px-2 md:px-40">
        <Login />
        <Individual />
      </div>
      <div className="mx-auto w-full md:w-1440">
        <Enterprise />
      </div>
      <div className="mx-auto w-full md:w-1440 px-2 md:px-40">
        <Features />
        <AboutUs />
      </div>
      <div className="mx-auto w-full md:w-1440">
        <Footer />
      </div>
    </div>
  )
}

export default Landing;
