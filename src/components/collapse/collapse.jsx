import { useState } from 'react'
import './collapse.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleUp } from '@fortawesome/free-solid-svg-icons'

function Collapse({ titre, text, classTitle, classText }) {
  const [isClose, setIsClose] = useState(true)
  const angleUp = <FontAwesomeIcon icon={faAngleUp} size="2xl" />

  return (
    <div className={`collapse ${isClose ? 'close' : 'open'}`}>
      <div className="collapse-title back-black">
        <h2>{titre}</h2>
        <button
          onClick={() => {
            setIsClose(!isClose)
          }}
        >
          {angleUp}
        </button>
      </div>
      <div className="collapse-txt">
        <ul className="back-light-grey">{text}</ul>
      </div>
    </div>
  )
}

export default Collapse
