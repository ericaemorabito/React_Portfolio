import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Components
import Header from './components/Header/Header';
import About from './components/About/About';
import ProjectList from './components/Project/ProjectList';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import './App.css';

// Importing the icons
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faFolderOpen, faEarthAmericas, faMessage } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faFolderOpen, faEarthAmericas, faMessage)

// The App
function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route
            path="/"
            element={<Home />}>
          </Route>
          <Route
            path="/about"
            element={<About />}>
          </Route>
          <Route
            path="/projects"
            element={<ProjectList />}>
          </Route>
          <Route
            path="/contact"
            element={<Contact />}>
          </Route>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
