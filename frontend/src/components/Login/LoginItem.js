const LoginItem = ({labelName, name, placeholder, type, val, change }) => {
  return (
    <div className="pb-[10px]">
      <div className="mb-[10px]">
        <label className="font-normal text-lg leading-7 text-custom">{ labelName }</label>
      </div>
      <div>
        <input name={name} value={val} onChange={change} className="py-[17px] px-6 w-full outline-1 outline rounded-[10px]" type={type} placeholder={placeholder} />
      </div>
    </div>
  )
}

export default LoginItem
