import './card-img.scss'

function CardImg({ cover }) {
  return (
    <div className={'card-img'}>
      <img src={cover} alt="vue du projet" />
    </div>
  )
}

export default CardImg
