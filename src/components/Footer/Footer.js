import './index.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Footer() {

  return (
    <div className='footer'>
      <div className='footer-icons'>
        <a href="https://github.com/ericaemorabito"rel="noreferrer" target="_blank">
        <FontAwesomeIcon icon={["fab", "github"]} className='icon' />
        </a>
        <a href="https://www.linkedin.com/in/erica-morabito" rel="noreferrer" target="_blank">
          <FontAwesomeIcon icon={["fab", "linkedin"]} className='icon' />
        </a>
      </div>
    </div>
  )
}

export default Footer;