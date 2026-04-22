import Skills from "./components/Skills-compo/Skills";
import About from "./components/About-compo/About";
import Navbar from "./components/Navbar";
import Home from "./components/Home-compo/Home";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer/Footer";


function App() {
  return (
    <div className="bg-[#3bd1ff] h-auto w-full overflow-hidden">
      
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Footer />
    </div>
  )
}
export default App;
