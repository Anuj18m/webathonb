import React, { useState, useEffect } from 'react';
import ThemeProvider from './providers/ThemeProvider';
import Loader from './components/Loader';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import InfiniteMarquee from './components/InfiniteMarquee';
import ImageGallery from './components/ImageGallery';
import Services from './components/Services';
import TeamSection from './components/TeamSection';
import Timeline from './components/Timeline';
import Contact from './components/Contact';
import Footer from './components/Footer';

function AppContent() {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  // Prevent scrolling during loading
  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isLoading]);

  return (
    <>
      {isLoading && <Loader onComplete={handleLoadingComplete} />}
      
      <div className={`transition-opacity duration-500 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
        <Navigation />
        <main>
          <Hero />
          <InfiniteMarquee />
          <ImageGallery />
          <Services />
          <TeamSection />
          <Timeline />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;