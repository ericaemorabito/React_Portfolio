//import Navigation from "../Navigation";
import './index.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faFolderOpen } from '@fortawesome/free-solid-svg-icons';
// import { faGlobe } from '@fortawesome/free-solid-svg-icons';
// import { faMobile } from '@fortawesome/free-solid-svg-icons';

function Header() {
  return (
    <div className='header'>
      <p className='header-name'>Erica Morabito</p>
      <ul className='nav-items'>
        <li>
          <FontAwesomeIcon icon="earth-americas" />
          <span>About</span>
        </li>
        <li>
          <FontAwesomeIcon icon="folder-open" />
          <span>Projects</span>
        </li>
        <li>
          <FontAwesomeIcon icon="message" />
          <span>Contact</span>
        </li>
        <li>
          <button>Resume</button>
        </li>
      </ul>
    </div>
  )
}

export default Header;