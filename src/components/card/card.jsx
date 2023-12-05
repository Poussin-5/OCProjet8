import { Link } from 'react-router-dom'
import CardImg from '../card-img/card-img'
import './card.scss'
import CardTxt from '../card-txt/card-txt'

function Card({ id, cover, title }) {
  return (
    <Link to={`/projet/${id}`} className={'card'}>
      <div className="opacity"></div>
      <CardImg cover={cover} />
      <CardTxt title={title} />
    </Link>
  )
}

export default Card
