import ThemeToggle from './components/ThemeToggle.jsx';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import About from './sections/About.jsx';
import Projects from './sections/Projects.jsx';
import TechStack from './sections/TechStack.jsx';
import Contact from './sections/Contact.jsx';
import Footer from './sections/Footer.jsx';

function App() {
  return (
    <>
      <ThemeToggle />
      <Navbar />
      <Hero />
      <Projects />
      <TechStack />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
