import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import HeroSplit from '@/components/HeroSplit';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    // Set up smooth scrolling for the entire page
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Update page title and meta description for SEO
    document.title = 'Brad Stewart - Business Solutions Manager & Programmer';
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 
        'Brad Stewart - Business Solutions Manager and Programmer specializing in operational excellence and lightweight software solutions. Turning strategy into shipped results.'
      );
    }

    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main id="main-content">
        <HeroSplit />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
