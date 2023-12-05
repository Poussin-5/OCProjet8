import './project-img.scss'

function ProjectImg({ item }) {
  return (
    <div className="project-imgs">
      <ul>
        {item.pictures.map(({ src, id }) => (
          <div key={id} className="project-img">
            <img src={src} alt="vue du projet" />
          </div>
        ))}
      </ul>
    </div>
  )
}

export default ProjectImg
