import { Link, useLocation } from 'react-router-dom'
import logo from '../../assets/images/logo_GP.png'
import './header.scss'

function Header() {
  const { pathname } = useLocation()

  return (
    <nav className="header-nav">
      <h1>
        <Link to="/">
          <img src={logo} alt="logo du site Guillaume Pautet" />
        </Link>
      </h1>
      <ul>
        <li>
          <Link
            to="/a-propos"
            className={`${pathname === '/a-propos' ? 'underline' : null}`}
          >
            À propos de moi
          </Link>
        </li>
        <li>
          <Link
            to="/mes-competences"
            className={`${
              pathname === '/mes-competences' ? 'underline' : null
            }`}
          >
            Mes compétences
          </Link>
        </li>
        <li>
          <Link
            to="/mes-projets"
            className={`${pathname === '/mes-projets' ? 'underline' : null}`}
          >
            Mes projets
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            className={`${pathname === '/contact' ? 'underline' : null}`}
          >
            Contact
          </Link>
        </li>
        <li>
          <a href="/doc/CV-Guillaume-Pautet.pdf" target="_blank">
            CV
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default Header
