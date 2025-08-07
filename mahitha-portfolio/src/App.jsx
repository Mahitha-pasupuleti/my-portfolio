import { useState, useEffect } from 'react';
import ThemeToggle from './components/ThemeToggle.jsx';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import About from './sections/About.jsx';
import Projects from './sections/Projects.jsx';
import TechStack from './sections/TechStack.jsx';
import Contact from './sections/Contact.jsx';
import Footer from './sections/Footer.jsx';
import NakerBackground from './components/NakerBackground.jsx';
import ExperienceSection from './sections/ExperienceSection.jsx';
import './App.css';

function App() {
  const [theme, setTheme] = useState(() => 
  document.documentElement.classList.contains('dark-mode') ? 'dark' : 'light'
);

useEffect(() => {
  if (theme === 'dark') {
    document.documentElement.classList.add('dark-mode');
    localStorage.setItem('theme', 'dark');
  } else {
    document.documentElement.classList.remove('dark-mode');
    localStorage.setItem('theme', 'light');
  }
}, [theme]);


  return (
    <>
      {/* Show background only in dark mode */}
      {theme === 'dark' && <NakerBackground />}

      <main className="relative z-10">
        <ThemeToggle theme={theme} setTheme={setTheme} />
        <Navbar />
        <Hero />
        <ExperienceSection />
        <Projects />
        <TechStack />
        <Contact />
        <Footer />
      </main>
    </>
  );
}

export default App;