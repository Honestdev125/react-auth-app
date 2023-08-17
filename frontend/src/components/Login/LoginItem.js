const LoginItem = ({ name, placeholder, type }) => {
  return (
    <div className="pb-[10px]">
      <div className="mb-[10px]">
        <label className="font-normal text-lg leading-7 text-custom">{name}</label>
      </div>
      <div>
        <input className="py-[17px] px-6 w-full outline-1 outline rounded-[10px]" type={type} placeholder={placeholder} />
      </div>
    </div>
  )
}

export default LoginItem
