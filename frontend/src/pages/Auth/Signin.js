import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"

import { loginUser } from "../../redux/actions/authActions"
const SignIn = () => {
  const success = useSelector(state => state.auth.success)
  const errors = useSelector(state => state.errors)
  const isAuth = useSelector(state => state.auth.isAuthenticated)
  const navigate = useNavigate()

  useEffect(() => {
    if (isAuth) navigate('/')
  })

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

  const onSumitLogin = () => {
    dispatch(loginUser(formData))
  }

  return (
    <div className="w-full">
      <div className="md:w-1440 mx-auto px-2 md:px-40  flex items-center justify-center">
        <div className="w-[400px] rounded-3xl my-20 pb-20">
          <div className="flex w-full flex-col rounded-t-3xl bg-white bg-opacity-20 shadow">
            <div className="mt-10 space-y-8 px-10 py-10 text-center">
              {success === true &&
                <div className="flex items-center bg-blue-500 text-white text-sm font-bold px-4 py-3" role="alert">
                  <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M12.432 0c1.34 0 2.01.912 2.01 1.957 0 1.305-1.164 2.512-2.679 2.512-1.269 0-2.009-.75-1.974-1.99C9.789 1.436 10.67 0 12.432 0zM8.309 20c-1.058 0-1.833-.652-1.093-3.524l1.214-5.092c.211-.814.246-1.141 0-1.141-.317 0-1.689.562-2.502 1.117l-.528-.88c2.572-2.186 5.531-3.467 6.801-3.467 1.057 0 1.233 1.273.705 3.23l-1.391 5.352c-.246.945-.141 1.271.106 1.271.317 0 1.357-.392 2.379-1.207l.6.814C12.098 19.02 9.365 20 8.309 20z" /></svg>
                  <p>Regestered Successfully!</p>
                </div>}
              {errors.join &&
                <div className="flex items-center bg-red-500 text-white text-sm font-bold px-4 py-3" role="alert">
                  <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M12.432 0c1.34 0 2.01.912 2.01 1.957 0 1.305-1.164 2.512-2.679 2.512-1.269 0-2.009-.75-1.974-1.99C9.789 1.436 10.67 0 12.432 0zM8.309 20c-1.058 0-1.833-.652-1.093-3.524l1.214-5.092c.211-.814.246-1.141 0-1.141-.317 0-1.689.562-2.502 1.117l-.528-.88c2.572-2.186 5.531-3.467 6.801-3.467 1.057 0 1.233 1.273.705 3.23l-1.391 5.352c-.246.945-.141 1.271.106 1.271.317 0 1.357-.392 2.379-1.207l.6.814C12.098 19.02 9.365 20 8.309 20z" /></svg>
                  <p>{errors.join}</p>
                </div>}
              <div className="group relative">
                <input type="text" onChange={handleInputChange} value={formData.signEmail} id="email" name="signEmail" className="peer h-14 w-full rounded-3xl bg-gray-100 px-4 text-sm outline-none" />
                <label className="absolute left-2 top-0 flex h-full transform items-center pl-2 text-base transition-all duration-300 group-focus-within:-top-7 group-focus-within:h-1/2 group-focus-within:pl-0 group-focus-within:text-base group-focus-within:text-custom peer-valid:-top-7 peer-valid:h-1/2 peer-valid:pl-0 peer-valid:text-base peer-valid:text-custom">Username</label>
                {errors.signEmail &&
                  <div className="bg-red-100 border border-red-400 text-red-700 px-1 py-1 rounded relative" role="alert">
                    <strong className="font-bold">{errors.signEmail}</strong>
                  </div>
                }
              </div>
              <div className="group relative">
                <input type="text" onChange={handleInputChange} value={formData.signPassword} id="password" name="signPassword" className="peer h-14 w-full rounded-3xl bg-gray-100 px-4 text-sm outline-none" />
                <label className="absolute left-2 top-0 flex h-full transform items-center pl-2 text-base transition-all duration-300 group-focus-within:-top-7 group-focus-within:h-1/2 group-focus-within:pl-0 group-focus-within:text-base group-focus-within:text-custom peer-valid:-top-7 peer-valid:h-1/2 peer-valid:pl-0 peer-valid:text-base peer-valid:text-custom">Password</label>
                {errors.signPassword &&
                  <div className="bg-red-100 border border-red-400 text-red-700 px-1 py-1 rounded relative" role="alert">
                    <strong className="font-bold">{errors.signPassword}</strong>
                  </div>
                }
              </div>
              <button onClick={onSumitLogin} className="h-12 w-full rounded-3xl bg-blue-500 text-custom hover:text-white transition-all duration-300 hover:bg-blue-800">Login</button>
              <Link to="#" className="inline-flex !w-auto justify-center font-medium text-custom underline">Forgot password?</Link>
            </div>

            <p className="gap-2 text-center text-custom">
              Don't have an account?
              <Link to="/signup" className="font-semibold text-blue-900 hover:text-blue-800">Sign up</Link>
            </p>

            <Link to="#" className="text-custom hover:text-white border-white-500 group m-auto mb-4 mt-5 inline-flex h-12 w-[320px] items-center justify-center space-x-2 rounded-3xl border px-4 py-2 transition-colors duration-300 hover:border-blue-500 hover:bg-blue-500 focus:outline-none">
              <span>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/706px-Google_%22G%22_Logo.svg.png" alt="google" className=" w-6 h-6" />
              </span>
              <span className="text-sm font-medium">Google</span>
            </Link>

            <Link to="#" className="text-custom hover:text-white border-white-500 group m-auto my-0 inline-flex h-12 w-[320px] items-center justify-center space-x-2 rounded-3xl border px-4 py-2 transition-colors duration-300 hover:border-black hover:bg-blue-500 focus:outline-none">
              <span>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/2048px-2021_Facebook_icon.svg.png" alt="facebook" className=" w-6 h-6" />
              </span>
              <span className="text-sm font-medium ">FaceBook</span>
            </Link>
          </div>
        </div>
      </div >
    </div >
  )
}

export default SignIn
