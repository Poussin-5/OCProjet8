import portrait from '../../assets/images/portrait.png'
import './portrait.scss'

function Portrait() {
  return (
    <div className="img-portrait">
      <img src={portrait} alt="portrait du développeur" />
    </div>
  )
}

export default Portrait
