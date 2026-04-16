import NavBar from './components/NavBar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ProjectList from './components/ProjectList';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import projects from './data/projects';

function App() {
  return (
    <div className="app-shell">
      <NavBar />
      <main className="page-shell">
        <HeroSection />
        <AboutSection />
        <ProjectList projects={projects} />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
