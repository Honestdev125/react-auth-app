const LoginBtn = ({ name, click }) => {
  return (
    <button onClick={click} className="py-[13px] px-5] w-full text-xl font-bold leading-6 rounded-[15px] my-[25px] text-white bg-purple-custom">{name}</button>
  )
}

export default LoginBtn
