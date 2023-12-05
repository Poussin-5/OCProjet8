import { Link } from 'react-router-dom'
import './a-propos.scss'

function Apropos() {
  return (
    <div className="a-propos">
      <div>
        <h2>Qui suis-je ?</h2>
      </div>
      <p>
        À 31 ans, je deviens officiellement <strong>développeur Web </strong>
        grâce à une reconversion professionnelle.
        <br />
        Anciennement manager d’une salle de sport, je vous propose mes{' '}
        <Link to="/mes-competences">compétences</Link> acquises tant en
        développement web qu’en management.
        <br />
        Vous trouverez mes <Link to="/mes-projets">projets</Link> réalisés lors
        de la formation ainsi que mon{' '}
        <a href="/doc/CV-Guillaume-Pautet.pdf" target="_blank">
          CV
        </a>{' '}
        et un formulaire pour me <Link to="/contact">contacter</Link> pour
        toutes autres informations.
      </p>
    </div>
  )
}

export default Apropos
