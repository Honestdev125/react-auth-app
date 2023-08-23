import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

import LoginText from "./LoginText"
import LoginItem from "./LoginItem"
import LoginBtn from "./LoginBtn"
import LoginTextP from "./LoginTextP"
import { loginUser } from "../../redux/actions/authActions"

import HeroImg from '../../assets/LandingPage/Hero/Hero-Image.png'

const Login = () => {
  const [formData, setFormData] = useState({
    signEmail: '',
    signPassword: '',
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  const dispatch = useDispatch()
  const navigaete = useNavigate()
  const isAuth = useSelector((state) => state.auth.isAuthenticated)
  const errors = useSelector((state) => state.errors)

  const onSumitLogin = () => {
    if (isAuth) {
      navigaete('/joinnow')
    }
    else {
      dispatch(loginUser(formData))
    }
  }
  return (
    <div className="block md:flex py-[60px]">
      <div className="me-0 md:me-[30px] w-full md:w-1/2 ">
        <LoginText text='Welcome to your personal, professional calendar​ network profile' />
        <p className="font-normal text-base md:text-2xl leading-9 py-[25px]">
          Enterprise Solution . My Personal Calendar
        </p>
        <LoginItem
          labelName="Username"
          name='signEmail'
          placeholder="johndoe"
          type='text'
          val={formData.signEmail}
          change={handleInputChange}
        />
        {errors.signEmail &&
          <div className="bg-red-100 border border-red-400 text-red-700 px-1 py-1 rounded relative" role="alert">
            <strong className="font-bold">{errors.signEmail}</strong>
          </div>
        }
        <LoginItem
          labelName="Password"
          name='signPassword'
          placeholder="*******"
          type='password'
          val={formData.signPassword}
          change={handleInputChange}
        />
        {errors.signPassword &&
          <div className="bg-red-100 border border-red-400 text-red-700 px-1 py-1 rounded relative" role="alert">
            <strong className="font-bold">{errors.signPassword}</strong>
          </div>
        }
        <LoginBtn
          name="Login"
          click={onSumitLogin}
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
