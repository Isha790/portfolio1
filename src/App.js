import Intro from "./components/Intro/intro";
import Navbar from "./components/NavBar/navbar"
import Skills from "./components/Projects/projects";
import Works from "./components/Education/education";
import Contact from "./components/Contact/contact";
import Footer from "./components/Footer/footer";
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <Skills/>
      <Works/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
