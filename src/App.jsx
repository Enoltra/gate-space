import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Overview from './components/Overview';
import Packages from './components/Packages';
import Concept from './components/Concept';
import Timeline from './components/Timeline';
import WhyWeichmann from './components/WhyWeichmann';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar scrollToSection={scrollToSection} />
      <main>
        <Hero scrollToSection={scrollToSection} />
        <Overview />
        <Packages scrollToSection={scrollToSection} />
        <Concept />
        <Timeline />
        <WhyWeichmann />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;