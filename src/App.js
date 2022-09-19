import './App.css';
import About from './Components/About';
import Experience from './Components/Experience';
import Footer from './Components/Footer';
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import TopNav from './Components/TopNav';

function App() {
  return (
    <div className="app">
      <TopNav />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Footer />
    </div>
  );
}

export default App;
