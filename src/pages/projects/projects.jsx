import './projects.scss'
import List from '../../components/list/list'
import projectsList from '../../data/projects'

function Projects() {
  return (
    <div className="projects">
      <List item={projectsList} />
    </div>
  )
}

export default Projects
