import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo_GP.png'
import './header.css'

function Header() {
  return (
    <nav className="header-nav">
      <h1>
        <Link to="/">
          <img src={logo} alt="logo du site Guillaume Pautet" />
        </Link>
      </h1>
      <ul>
        <li>
          <Link to="/a-propos">À propos</Link>
        </li>
        <li>
          <Link to="/mes-comptences">Mes compétences</Link>
        </li>
        <li>
          <Link to="/mes-projets">Mes projets</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Header
