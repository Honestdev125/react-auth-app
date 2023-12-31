const InputField = ({ id, type, name, labelname, value, onChange, error }) => {
  return (
    <div className="group relative">
      <input type={type} name={name} id={id} value={value} onChange={onChange} className="mb-1 peer h-14 w-full rounded-3xl bg-gray-100 px-4 text-sm outline-none" />
      <label className="absolute left-2 top-0 flex h-full transform items-center pl-2 text-base transition-all duration-300 group-focus-within:-top-7 group-focus-within:h-1/2 group-focus-within:pl-0 group-focus-within:text-base group-focus-within:text-custom peer-valid:-top-7 peer-valid:h-1/2 peer-valid:pl-0 peer-valid:text-base peer-valid:text-custom">{labelname}</label>
      {error &&
        <div className="bg-red-100 border border-red-400 text-red-700 px-1 py-1 rounded relative" role="alert">
          <strong className="font-bold">{labelname}</strong>
          <span className="block sm:inline">{error}</span>
        </div>
      }
    </div>
  )
}

export default InputField