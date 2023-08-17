import { Link } from "react-router-dom"

const NavItem = ({ name, href }) => {
  return (
    <Link
      key={name}
      href={href}
      className='text-black hover:bg-gray-700 rounded-md px-2 md:px-3 py-3 text-sm font-medium'
    >
      {name}
    </Link>
  )
}

export default NavItem