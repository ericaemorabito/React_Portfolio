import './index.css'

function Home() {
  return (
    <div id="home-page" className="container w-100 mt-5">
      <div className="row w-100">
        <div className="col-sm h-100">
          <p id="home-hello">Hello, I am </p>
          <h2 id="home-name">Erica Morabito</h2>
          <h3 id="home-job">Full Stack Web Developer</h3>
          <p id="home-description">
            I'm a recent University of Texas at Austin Full-Stack Coding Bootcamp graduate.
            I have experience designing, debugging, and refactoring web applications and databases in agile teams and individually.
            I love travel, art, and learning new languages.</p>
        </div>
      </div>
    </div>
  )
}

export default Home;