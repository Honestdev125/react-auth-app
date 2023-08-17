import LoginTextP from "../Login/LoginTextP"
import FeatureBlog from "./FeatureBlog"

import Icon1 from "../../assets/LandingPage/Section-4/Section-4-Icon-1.svg"
import Icon2 from "../../assets/LandingPage/Section-4/Section-4-Icon-2.svg"
import Icon3 from "../../assets/LandingPage/Section-4/Section-4-Icon-3.svg"

const Features = () => {
  return (
    <div className="pt-[120px] pb-[60px]">
      <div className="text-center mb-10">
        <p className="font-bold text-4xl  leading-52 pb-[10px]">Features</p>
        <LoginTextP
          text="Lorem ipsum dolor sit amet consectetur."
        />
        <LoginTextP
          text="Sagittis vulputate ultrices magna."
        />
      </div>
      <div className="block md:flex space-x-0 md:space-x-10 mx-3 md:mx-0">
        <FeatureBlog 
          img = {Icon1}
          title = "Smart Scheduling"
          content="Lorem ipsum dolor sit amet consectetur. Sagittis vulputate ultrices magna fermentum vivamus faucibus quam. Nullam dignissim nisi non lectus lacus amet id."
        />
        <FeatureBlog 
          img = {Icon2}
          title = "Profile Customization"
          content="Lorem ipsum dolor sit amet consectetur. Sagittis vulputate ultrices magna fermentum vivamus faucibus quam. Nullam dignissim nisi non lectus lacus amet id."
        />
        <FeatureBlog 
          img = {Icon3}
          title = "Collaboration"
          content="Lorem ipsum dolor sit amet consectetur. Sagittis vulputate ultrices magna fermentum vivamus faucibus quam. Nullam dignissim nisi non lectus lacus amet id."
        />
      </div>
    </div>
  )
}

export default Features
