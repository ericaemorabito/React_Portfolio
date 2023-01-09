//import Navigation from "../Navigation";
import './index.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//! Update with completed resume
import Resume from '../../assets/Example-resume.pdf'

function Header() {
  return (
    <div className='header'>
      <p className='header-name'>Erica Morabito</p>
      <ul className='nav-items'>
        <li>
          <FontAwesomeIcon icon="earth-americas" />
          <a href="/about">About</a>
        </li>
        <li>
          <FontAwesomeIcon icon="folder-open" />
          <a href="/projects">Projects</a>
        </li>
        <li>
          <FontAwesomeIcon icon="message" />
          <a href="/contact">Contact</a>
        </li>
        <li>
          <a href={Resume} download="EricaMorabitoResume" rel="noreferrer" target="_blank">
            <button>Resume</button>
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Header;