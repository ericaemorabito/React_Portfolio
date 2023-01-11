function Project(props) {
  const { project } = props;

  return (
    <div className='project-card'>
      <h3 className='project-title'>{project.title}</h3>
      <img src={project.image} alt={project.title} className='project-image'></img>
      <p className='project-description'>{project.description}</p>
      <a href={project.deployed} className='project-link' target='_blank' rel="noreferrer">Deployed</a>
      <a href={project.github} className='project-link' target='_blank' rel="noreferrer">Github</a>
    </div>
  )
}

export default Project;