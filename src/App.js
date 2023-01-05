import Header from './components/Header/Header';
import About from './components/About/About';
import Project from './components/Project/Project';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import './App.css';

// Importing the icons
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faFolderOpen, faEarthAmericas, faMessage } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faFolderOpen, faEarthAmericas, faMessage)


// The App
function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
