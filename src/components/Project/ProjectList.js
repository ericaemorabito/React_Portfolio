import './index.css'
import Project from './Project';
import { projectData } from '../../data/projectData';

function ProjectList () {
  const projectsList = projectData.map(project => {
    return (
      <Project project={project} />
    )
  })

  return (
    <div className="project-page mt-5">

      <div className="project-page-title">
        <h2>My Work</h2>
      </div>

      <div className="project-grid-section mt-5">
        {/* Return the <div> created in each Project */}
        {projectsList}
      </div>
      
    </div>
  )
}

export default ProjectList;