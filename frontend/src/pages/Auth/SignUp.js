import { useState } from "react"
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"

import { registerUser } from "../../redux/actions/authActions"
import InputField from "../../components/Auth/InputField"

const SignUp = () => {

  const [userType, setUserType] = useState(true)
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    email2: '',
    password: '',
    password2: '',
  })
  const changeUserType = (e) => {
    if (e.target.id === "indi") setUserType(true)
    else setUserType(false)
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const dispatch = useDispatch()
  const onSubmitIndi = () => {
    dispatch(registerUser(formData))
  }

  const errors = useSelector(state => state.errors)

  return (
    <div className="w-full">
      <div className="md:w-1440 mx-auto px-2 md:px-40  flex items-center justify-center">
        <div className="w-[400px] rounded-3xl my-10 pb-20">
          <form className="mb-5 flex justify-around">
            <div>
              <input className="me-1" type="radio" id="indi" name="Individual" checked={userType} onChange={(e) => changeUserType(e)} />
              <label>Individual</label>
            </div>
            <div>
              <input className="me-1" type="radio" id="orgain" name="Organization" onChange={(e) => changeUserType(e)} />
              <label>Organization</label>
            </div>
          </form>
          <div className="flex w-full flex-col rounded-t-3xl bg-white bg-opacity-20 shadow">
            {userType ?
              <div className="space-y-8 px-10 text-center">
                <InputField
                  id='firstname'
                  name='firstName'
                  type='text'
                  labelname="FirstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  error = {errors.firstName}
                />
                <InputField
                  id='lastname'
                  name='lastName'
                  type='text'
                  labelname="LastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  error = {errors.lastName}
                />
                <InputField
                  id='email'
                  name='email'
                  type='text'
                  labelname="Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  error = {errors.email}
                />
                <InputField
                  id='email2'
                  name='email2'
                  type='text'
                  labelname="Confirm Email"
                  value={formData.email2}
                  onChange={handleInputChange}
                  error = {errors.email2}
                />
                <InputField
                  id='password'
                  name='password'
                  type='password'
                  labelname="Password"
                  value={formData.password}
                  onChange={handleInputChange}
                  error = {errors.password}
                />
                <InputField
                  id='password2'
                  name='password2'
                  type='password'
                  labelname="Confirm Password"
                  value={formData.password2}
                  onChange={handleInputChange}
                  error = {errors.password2}
                />
                <button onClick={onSubmitIndi} className="h-12 w-full rounded-3xl bg-blue-500 text-custom hover:text-white transition-all duration-300 hover:bg-blue-800">Register</button>
              </div>
              :
              <div className="space-y-8 px-10 text-center">
                <InputField
                  id='organ_id'
                  type='text'
                  labelname="Organization ID"
                />
                <InputField
                  id='organ_name'
                  type='text'
                  labelname="Organization's Name"
                />
                <InputField
                  id='personal_name'
                  type='text'
                  labelname="Personal Name"
                />
                <InputField
                  id='email'
                  type='text'
                  labelname="Email"
                />
                <InputField
                  id='email2'
                  type='text'
                  labelname="Confirm Email"
                />
                <InputField
                  id='password'
                  type='password'
                  labelname="Password"
                />
                <InputField
                  id='password2'
                  type='password'
                  labelname="Confirm Password"
                />
                <button className="h-12 w-full rounded-3xl bg-blue-500 text-custom hover:text-white transition-all duration-300 hover:bg-blue-800">Register</button>
              </div>
            }
            <p className="gap-2 text-center text-custom">
              Already have an account?
              <Link to="/signin" className="font-semibold text-blue-900 hover:text-blue-800">Sign in</Link>
            </p>

            {/* <Link to="#" className="text-custom hover:text-white border-white-500 group m-auto mb-4 mt-5 inline-flex h-12 w-[320px] items-center justify-center space-x-2 rounded-3xl border px-4 py-2 transition-colors duration-300 hover:border-blue-500 hover:bg-blue-500 focus:outline-none">
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
            </Link> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignUp
