import { Link } from 'react-router-dom'

const NavigationMenu = ({ links }) => {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <ul className="flex space-x-4">
        {links.map(link => (
          <li key={link.path}>
            <Link to={link.path} className="hover:underline">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default NavigationMenu
