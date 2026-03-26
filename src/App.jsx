import About from "./Components/About"
import Contact from "./Components/Contact"
import EducationSkills from "./Components/Education&Skills"
import Footer from "./Components/Footer"
import Header from "./Components/Header"
import Home from "./Components/Home"
import Project from "./Components/Project"

function App() {
  return (
    <>
      <Header />
      <div className="xs:px-4 md:px-8 lg:px-10 xl:px-14">
        <Home />
        <About />
        <EducationSkills />
        <Project />
        <Contact />
      </div>
      <Footer />
    </>
  )
}

export default App
