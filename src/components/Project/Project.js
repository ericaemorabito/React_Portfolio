function Project(props) {
  const { project } = props;

  return (
    <div className='project-card'>
      <h3 className='project-title'>{project.title}</h3>
      <img src={project.image} alt='screenshot'></img>
      <p className='project-description'>{project.description}</p>
      <a href={project.deployed} className='deployed-link' target='_blank' rel="noreferrer">Deployed</a>
      <a href={project.github} className='github-link' target='_blank' rel="noreferrer">Github</a>
    </div>
  )
}


export default Project;