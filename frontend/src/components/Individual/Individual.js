import { useSelector, useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"

import { join } from "../../redux/actions/authActions"
import Section2 from "../../assets/LandingPage/Section-2/Section-2-Image.png"
import IndiText from "./IndiText"
import LoginTextP from "../Login/LoginTextP"
import JoinBtn from "./JoinBtn"
const Individual = () => {
  const isAuth = useSelector((state) => state.auth.isAuthenticated)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const joinNow = () => {
    if (isAuth) {
      navigate('/joinnow')
    }
    else {
      const errors = { join: 'Please login'}
      navigate('/signin')
      dispatch(join(errors))
    }
  }
  return (
    <div className="block md:flex pt-[60px] pb-[80px]">
      <div className="me-0 md:me-[30px] w-full md:w-1/2 ">
        <img src={Section2} alt="Section2" />
      </div>
      <div className="ms-0 md:ms-[30px] w-full md:w-1/2 my-10">
        <p className="text-purple-custom text-xl md:text-2xl font-bold leading-8 pb-[25px]">
          Individual
        </p>
        <div className="pb-[25px] text-custom">
          <IndiText
            text="Create and Publish your own​personal or professional​online public ​calendar!"
          />
        </div>
        <div className="pb-[25px]">
          <LoginTextP
            text="No more email back and forth to coordinate schedule. Easy to set up. Easy to publish. Easy to search . Easy to review Easy to schedule and connect.​"
          />
        </div>
        <div>
          <JoinBtn
            name="Join Now!"
            click={joinNow}
          />
        </div>
      </div>
    </div>
  )
}

export default Individual
