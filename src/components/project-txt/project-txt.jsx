import Collapse from '../collapse/collapse'
import './project-txt.scss'

function ProjectTxt({ title, description, langages, technologie, github }) {
  return (
    <div className="project-txt back-grey">
      <div className="project-txt-title">
        <h2>{title}</h2>
        <p>Descritpion du projet : {description}</p>
        <a href={github} target="blank">
          Github
        </a>
      </div>
      <div className="project-add">
        <Collapse
          titre={`Langages utilisés`}
          text={langages.map((langage, index) => (
            <li key={index} className="back-black">
              {langage}
            </li>
          ))}
        />
        <Collapse
          titre={`Technologies utilisées`}
          text={technologie.map((technologie, index) => (
            <li key={index} className="back-black">
              {technologie}
            </li>
          ))}
        />
      </div>
    </div>
  )
}

export default ProjectTxt
