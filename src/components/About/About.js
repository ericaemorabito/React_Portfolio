import './index.css'
import profilePic from '../../assets/images/profile-pic.jpeg'


function About() {
  return (
    <div>
      <h2 className='text-center'>About me</h2>
      <div className='container-sm'>
        <div className='row'>
          <div className='col w-80 d-flex justify-content-center'>
            {/* Profile Picture */}
            <img id="profile-pic" className='img-fluid h-20 w-20' src={profilePic} alt='Erica Morabito'></img>
            <p className='text-center'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec placerat, nibh vel tempor tincidunt, elit magna gravida odio,
              ut tincidunt erat risus nec mauris. Nam in malesuada sapien. Donec sodales elementum molestie. In quis iaculis libero.
              Nam sit amet blandit urna, in vestibulum ante. Praesent consequat nibh ut magna fermentum, sed mollis diam luctus.
              Proin ultrices turpis vel eros sodales vestibulum. Suspendisse id felis at sem porttitor bibendum a ac velit.
              Donec rhoncus tincidunt tempor. Etiam ut imperdiet nibh.
            </p>
            <ul className='about-me-tech-list'>
              <li className='tech-list'>HTML5</li>
              <li className='tech-list'> CSS3</li>
              <li className='tech-list'>JavaScript</li>
              <li className='tech-list'> JQuery </li>
              <li className='tech-list'>Node.js </li>
              <li className='tech-list'> React.js</li>
              <li className='tech-list'>Express.js</li>
              <li className='tech-list'>Bootstrap</li>
              <li className='tech-list'>MySQL</li>
              <li className='tech-list'> Sequelize</li>
              <li className='tech-list'>MongoDB</li>
              <li className='tech-list'>Mongoose</li>
            </ul>
          </div>
        </div>
      </div>
    </div>



    // <div className='about-me'>
    //   <div className='about-me-image-icons'>
    //     <div id="profile-pic-area">
    //       <img id="profile-pic" src={profilePic} alt='Erica Morabito'></img>
    //     </div>
    //   </div>

    //   <div className='about-me-text'>
    //     <h2 id="about-me-title">About me</h2>
    //     <p>
    //       Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec placerat, nibh vel tempor tincidunt, elit magna gravida odio,
    //       ut tincidunt erat risus nec mauris. Nam in malesuada sapien. Donec sodales elementum molestie. In quis iaculis libero.
    //       Nam sit amet blandit urna, in vestibulum ante. Praesent consequat nibh ut magna fermentum, sed mollis diam luctus.
    //       Proin ultrices turpis vel eros sodales vestibulum. Suspendisse id felis at sem porttitor bibendum a ac velit.
    //       Donec rhoncus tincidunt tempor. Etiam ut imperdiet nibh.
    //     </p>
    //     <ul className='about-me-tech-list'>
    //       <li className='tech-list'>HTML5</li>
    //       <li className='tech-list'> CSS3</li>
    //       <li className='tech-list'>JavaScript</li>
    //       <li className='tech-list'> JQuery </li>
    //       <li className='tech-list'>Node.js </li>
    //       <li className='tech-list'> React.js</li>
    //       <li className='tech-list'>Express.js</li>
    //       <li className='tech-list'>Bootstrap</li>
    //       <li className='tech-list'>MySQL</li>
    //       <li className='tech-list'> Sequelize</li>
    //       <li className='tech-list'>MongoDB</li>
    //       <li className='tech-list'>Mongoose</li>
    //     </ul>
    //   </div>

    // </div>
  )
}

export default About;