import './index.css'
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Resume from '../../assets/Erica_Morabito_JP.pdf'

function Header() {
  return (
    <nav id="nav-bar" className="navbar navbar-expand-lg">

      <a className="navbar-brand font-weight-bold" href="/">Erica Morabito</a>

      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <a className="nav-link text-dark" href="/about">About</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-dark" href="/projects">Projects</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-dark" href="/contact">Contact</a>
          </li>
          <li className="nav-item">
            <a href={Resume} download="Erica_Morabito_Resume" rel="noreferrer" target="_blank">
              <button id="resume-btn">Resume</button>
            </a>
          </li>
        </ul>
      </div>
    </nav>


    // <div className='header'>
    //   <a href="/" className='header-name'>Erica Morabito</a>
    //   <ul className='nav-items'>
    //     <li>
    //       <FontAwesomeIcon icon="earth-americas" />
    //       <a href="/about">About</a>
    //     </li>
    //     <li>
    //       <FontAwesomeIcon icon="folder-open" />
    //       <a href="/projects">Projects</a>
    //     </li>
    //     <li>
    //       <FontAwesomeIcon icon="message" />
    //       <a href="/contact">Contact</a>
    //     </li>
    //     <li>
    //       <a href={Resume} download="EricaMorabitoResume" rel="noreferrer" target="_blank">
    //         <button>Resume</button>
    //       </a>
    //     </li>
    //   </ul>
    // </div>
  )
}

export default Header;