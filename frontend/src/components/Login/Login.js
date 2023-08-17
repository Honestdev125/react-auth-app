import LoginText from "./LoginText"
import LoginItem from "./LoginItem"
import LoginBtn from "./LoginBtn"
import LoginTextP from "./LoginTextP"

import HeroImg from '../../assets/LandingPage/Hero/Hero-Image.png'

const Login = () => {
  return (
    <div className="block md:flex py-[60px]">
      <div className="me-0 md:me-[30px] w-full md:w-1/2 ">
        <LoginText text='Welcome to your personal, professional calendar​ network profile' />
        <p className="font-normal text-base md:text-2xl leading-9 py-[25px]">
          Enterprise Solution . My Personal Calendar
        </p>
        <LoginItem
          name="Username"
          placeholder="johndoe"
          type='text'
        />
        <LoginItem
          name="Password"
          placeholder="*******"
          type='password'
        />
        <LoginBtn
          name="Login"
        />
        <LoginTextP
          text="Forgot password?"
          />
      </div>
      <div className="ms-0 md:ms-[30px] w-full md:w-1/2 my-10">
        <img src={HeroImg} alt="HeroImg" />
      </div>
    </div>
  )
}

export default Login
