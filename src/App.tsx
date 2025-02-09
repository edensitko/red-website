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
import Testimonials from './components/Testimonials';
import Blog from './components/Blog';
import QandA from './components/QandA';
import VideoSection from './components/VideoSection';
import './firebase'; // Import firebase initialization

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#0a0a0a] text-white overflow-hidden">
        {/* Background Effects */}
        <div className="fixed inset-0 -z-10">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f1414_1px,transparent_1px),linear-gradient(to_bottom,#4f1414_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
          <div className="absolute top-0 left-0 right-0 h-96 bg-gradient-to-b from-red-500/20 via-red-500/5 to-transparent blur-3xl"></div>
        </div>

        {/* Floating Elements */}
        <div className="fixed inset-0 -z-5">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-red-500/30 rounded-full blur-[128px] animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-red-600/30 rounded-full blur-[128px] animate-pulse delay-1000"></div>
        </div>

        {/* Main Content */}
        <main className="relative">
          {/* Navigation */}
          <div className="sticky top-0 z-50 bg-gradient-to-b from-black/80 to-black/0 backdrop-blur-xl border-b border-white/5">
            <Navbar />
          </div>

          {/* Hero Section */}
          <section className="relative min-h-screen flex items-center justify-center">
            <Hero />
          </section>

          {/* Call to Action - Moved up */}
          <section className="relative -mt-32 z-10 px-4">
            <CallToAction />
          </section>

          {/* Content Sections */}
          <div className="relative px-4 py-0 sm:px-6 lg:px-8">
            {/* About Section */}
            <section className="relative mb-2">
              <About />
            </section>

            {/* Features Section */}
            <section className="relative mb-2">
              <Features />
            </section>

            {/* Process Section */}
            <section className="relative mb-2">
              <Process />
            </section>

            {/* Video Section */}
            <section className="relative mb-2">
              <VideoSection videoSrc="/fire.mp4" />
            </section>

            {/* Projects Section */}
            <section className="relative mb-2">
              <Projects />
            </section>

            {/* Pricing Section */}
            <section className="relative mb-2">
              <Pricing />
            </section>

            {/* Testimonials Section */}
            <section className="relative mb-2">
              <Testimonials />
            </section>

            {/* Q&A Section */}
            <section className="relative mb-2">
              <QandA />
            </section>
          {/* Blog Section */}
          <section className="relative mb-2">
              <Blog />
            </section>

            {/* Contact Section */}
            <section className="relative mb-2">
              <ContactForm />
            </section>
          </div>

          {/* Footer */}
          <footer className="relative mt-24 border-t border-white/10 bg-black/40 backdrop-blur-lg">
            <Footer />
          </footer>
        </main>
      </div>
    </Router>
  );
};

export default App;
