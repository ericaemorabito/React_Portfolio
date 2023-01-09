import './index.css'
import profilePic from '../../assets/images/profile-pic'

function About() {
  return (
    <div>
      <h2>About me</h2>
      <div className='about-me-text'>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec placerat, nibh vel tempor tincidunt, elit magna gravida odio,
          ut tincidunt erat risus nec mauris. Nam in malesuada sapien. Donec sodales elementum molestie. In quis iaculis libero.
          Nam sit amet blandit urna, in vestibulum ante. Praesent consequat nibh ut magna fermentum, sed mollis diam luctus.
          Proin ultrices turpis vel eros sodales vestibulum. Suspendisse id felis at sem porttitor bibendum a ac velit.
          Donec rhoncus tincidunt tempor. Etiam ut imperdiet nibh.
        </p>
        <h3>Technologies</h3>
        <ul>
          <li>HTML5 | CSS3</li>
          <li>JavaScript | JQuery</li>
          <li>Node.js | React.js</li>
          <li>Express.js</li>
          <li>Bootstrap</li>
          <li>MySQL | Sequelize</li>
          <li>MongoDB</li>
          <li>Mongoose</li>
        </ul>
      </div>
      <div>
        <div>
          <img src={profilePic} alt='Erica Morabito'></img>
        </div>
      </div>
    </div>
  )
}

export default About;