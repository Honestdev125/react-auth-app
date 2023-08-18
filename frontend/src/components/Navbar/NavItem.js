import { Link } from "react-router-dom"

const NavItem = ({ name, href }) => {
  return (
    <Link
      key={name}
      to={href}
      className='text-custom hover:bg-gray-700 hover:text-white rounded-md px-2 md:px-3 py-3 text-sm font-medium'
    >
      {name}
    </Link>
  )
}

export default NavItem
