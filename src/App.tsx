import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CallToAction from './components/CallToAction';
import Features from './components/Features';
import Process from './components/Process';
import About from './components/About';
import Projects from './components/Projects';
import Pricing from './components/Pricing';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import './firebase'; // Import firebase initialization

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navbar />
        <Hero />
        <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 2xl:px-16">
          <main>
            <CallToAction />
            <Features />
            <Process />
            <About />
            <Projects />
            <Pricing />
            <ContactForm />
          </main>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
