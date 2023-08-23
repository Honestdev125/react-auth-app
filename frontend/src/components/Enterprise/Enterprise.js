import { useSelector, useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import IndiText from "../Individual/IndiText"
import JoinWhiteBtn from "./JoinWhiteBtn"
import Section3 from "../../assets/LandingPage/Section-3/Section-3-Image.png"
import TypeBtn from "./TypeBtn"
import { join } from "../../redux/actions/authActions"

const Enterprise = () => {
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
    <div className="py-[120px] bg-purple-custom px-2 md:px-40">
      <div className="pb-[60px] block md:flex justify-between">
        <div>
          <p className="text-white text-xl md:text-2xl font-bold leading-8 pb-[25px]">
            Enterprise Solution
          </p>
          <div className="text-white pb-[25px]">
            <IndiText
              text="Create and schedule meetings ​with your team!"
            />
          </div>
          <JoinWhiteBtn
            name="Join Now!"
            click={joinNow}
          />
        </div>
        <div>
          <img src={Section3} alt="section3" className="w-[392px] h-[215px]" />
        </div>
      </div>
      <div className="block md:flex space-x-0 md:space-x-5 pb-0 md:pb-[25px]">
        <TypeBtn text="Reduce tardiness" />
        <TypeBtn text="Automate logins" />
        <TypeBtn text="Text to voice" />
      </div>
      <div className="block md:flex space-x-0 md:space-x-5">
        <TypeBtn text="Call Reminders" />
        <TypeBtn text="Rate meetings" />
        <TypeBtn text="Track metrics" />
      </div>
    </div>
  )
}

export default Enterprise
