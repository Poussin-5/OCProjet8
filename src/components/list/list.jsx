import Card from '../card/card'
import './list.scss'

function List({ item }) {
  return (
    <div className="list back-grey">
      <ul>
        {item.map(({ id, cover, title }) => (
          <Card key={id} id={id} cover={cover} title={title} />
        ))}
      </ul>
    </div>
  )
}

export default List
