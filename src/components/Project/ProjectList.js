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
    <div className="project-page">
      <div className="project-page-title">
        <h2>My Work</h2>
        <p>Some of the things I've built...</p>
      </div>
      <div className="project-grid-section">
        {/* Return the <div> created in each Project */}
        {projectsList}
      </div>
    </div>
  )
}

export default ProjectList;