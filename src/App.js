import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Navbar/Home';
import Skill from './Components/Navbar/Skill';
import Project from './Components/Navbar/Project';
import Experience from './Components/Navbar/Experience';
import Contact from './Components/Navbar/Contact';

function App() {
  return (<>
   <Navbar/>
   <Home/>
   <Skill/>
   <Project/>
   <Experience/>
   <Contact/>
   </>
  );
}

export default App;
