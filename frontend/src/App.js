import Layout from "./components/Layout/Layout";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Gitstats from "./pages/Gitstats/Gitstats";
import Projects from "./pages/Projects/Projects";
import Skills from "./pages/Skills/Skills";

function App() {
  return (
    <>
      <Layout />
      <div className="container">
      <About />
      <Skills />
      <Projects />
      <Gitstats />
      <Contact />
      </div>
    </>
  );
}

export default App;
