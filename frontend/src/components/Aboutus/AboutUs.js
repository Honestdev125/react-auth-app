import Section5 from "../../assets/LandingPage/Section-5/Section-5-Image.png"
import JoinBtn from "../Individual/JoinBtn"

const AboutUs = () => {
  return (
    <div className="block md:flex pt-[60px] pb-[120px] px-5 md:px-0">
      <div className="w-full md:w-1/2">
        <img src={Section5} alt="AboutUs" />
      </div>
      <div className="w-full md:w-1/2">
        <p className="font-bold text-4xl  leading-52 pb-[10px]">AboutUs</p>
        <div className="my-5">
          <p className="font-normal text-custom text-base">
            Lorem ipsum dolor sit amet consectetur. Sagittis vulputate ultrices magna fermentum vivamus faucibus quam. Nullam dignissim nisi non lectus lacus amet id.
          </p>
          <p className="font-normal text-custom text-base my-5">
            Lorem ipsum dolor sit amet consectetur. Sagittis vulputate ultrices magna fermentum vivamus faucibus quam. Nullam dignissim nisi non lectus lacus amet id. Lorem ipsum dolor sit amet consectetur. Sagittis vulputate ultrices magna fermentum vivamus faucibus quam. Nullam dignissim nisi non lectus lacus amet id.
          </p>
          <p className="font-normal text-custom text-base">
            Lorem ipsum dolor sit amet consectetur. Sagittis vulputate ultrices magna fermentum vivamus faucibus quam. Nullam dignissim nisi non lectus lacus amet id.
          </p>
        </div>
        <JoinBtn name="Join Now!" />
      </div>
    </div>
  )
}

export default AboutUs
