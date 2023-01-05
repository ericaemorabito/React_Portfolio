//import Navigation from "../Navigation";
import './index.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFolderOpen } from '@fortawesome/free-solid-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { faMobile } from '@fortawesome/free-solid-svg-icons';

function Header() {
  return (
    <div className='header'>
      <p className='header-name'>Erica Morabito</p>
      <ul className='nav-items'>
        <li>
          <FontAwesomeIcon icon={faGlobe} />
          <span>About</span>
        </li>
        <li>
          <FontAwesomeIcon icon={faFolderOpen} />
          <span>Projects</span>
        </li>
        <li>
          <FontAwesomeIcon icon={faMobile} />
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