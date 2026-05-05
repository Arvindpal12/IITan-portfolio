import Skills from "./components/Skills-compo/Skills";
import About from "./components/About-compo/About";
import Navbar from "./components/Navbar";
import Home from "./components/Home-compo/Home";
import Projects from "./components/Projects/Projects";
import Achievements from "./components/Achievements/Achievements";
import Footer from "./components/Footer/Footer";


function App() {
  return (
    <div className="bg-[#F7F7F7]  h-auto w-full overflow-hidden">
      
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Achievements />
      <Projects />

      <Footer />
    </div>
  )
}
export default App;
