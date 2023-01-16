import './index.css'
import profilePic from '../../assets/images/profile-pic.jpeg'


function About() {
  return (
    <div>
      <h2 className='text-center mt-5'>About me</h2>
      <div className='container-sm'>
        <div className='row mt-5'>

          <div className='col-sm d-flex justify-content-end'>
            <img id="profile-pic" className='img-fluid h-20 w-20' src={profilePic} alt='Erica Morabito'></img>
          </div>

          <div className='col-sm d-flex flex-column align-items-start text-left'>
            <p>
              I love learning. As a teacher, I help my students find joy in learning.

              I chose to transition to software engineering because I’ve always wanted to learn how to code.

              My curiosity and love of learning continues to help me improve my skills for front and back-end technologies.

              Every day, I was encouraging my students to take risks and go after what they want, so I took a leap and joined the University of Texas at Austin Full-Stack Coding Bootcamp.

              Now, I’ve had the privilege to learn from senior developers and work with groups of junior developers on multiple full-stack applications.

              My focus now is to continue building accessible and inclusive products that solve problems to improve the lives of others.
            </p>
            <ul className='tech-list d-flex flex-wrap'>
              <li className='tech'>HTML5</li>
              <li className='tech'> CSS3</li>
              <li className='tech'>JavaScript</li>
              <li className='tech'> JQuery </li>
              <li className='tech'>Node.js </li>
              <li className='tech'> React.js</li>
              <li className='tech'>Express.js</li>
              <li className='tech'>Bootstrap</li>
              <li className='tech'>MySQL</li>
              <li className='tech'> Sequelize</li>
              <li className='tech'>MongoDB</li>
              <li className='tech'>Mongoose</li>
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