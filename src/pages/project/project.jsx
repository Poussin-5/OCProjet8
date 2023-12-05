import { useParams } from 'react-router-dom'
import './project.scss'
import ProjectsList from '../../data/projects'
import Error from '../error/error'
import ProjectImg from '../../components/project-img/project-img'
import ProjectTxt from '../../components/project-txt/project-txt'

function Project() {
  const { idProject } = useParams()

  const foundId = ProjectsList.find((project) => project.id === idProject)

  if (!foundId) {
    return <Error />
  }
  return (
    <div className="project">
      <ProjectImg item={foundId} />
      <ProjectTxt
        technologie={foundId.technologie}
        langages={foundId.langages}
        title={foundId.title}
        description={foundId.description}
        github={foundId.github}
      />
    </div>
  )
}

export default Project
