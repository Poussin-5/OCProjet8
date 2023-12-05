import Portrait from '../../components/portrait/portrait'
import './home.scss'

function Home() {
  return (
    <div className="home-content">
      <div className="typewriter">
        <h2>
          Bonjour, <br />
          Je suis Guillaume Pautet, <br />
          Développeur Web.
        </h2>
      </div>
      <Portrait />
    </div>
  )
}

export default Home
