import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faAt } from '@fortawesome/free-solid-svg-icons'
import './footer.css'

function Footer() {
  return (
    <nav className="footer-nav">
      <ul>
        <li>
          <a
            href="https://www.linkedin.com/in/guillaume-pautet-32190a165/"
            target="blank"
          >
            <FontAwesomeIcon icon={faLinkedin} size="2xl" />
          </a>
        </li>
        <li>
          <a href="https://github.com/Poussin-5" target="blank">
            <FontAwesomeIcon icon={faGithub} size="2xl" />
          </a>
        </li>
        <li>
          <a href="mailto:perso@guillaume-pautet.fr">
            <FontAwesomeIcon icon={faAt} size="2xl" />
          </a>
        </li>
      </ul>
      <p>© 2023 Guillaume Pautet, Tous droits réservés.</p>
    </nav>
  )
}

export default Footer
