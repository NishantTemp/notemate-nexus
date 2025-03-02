
import { useEffect } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Features from "@/components/sections/Features";
import HowItWorks from "@/components/sections/HowItWorks";
import CallToAction from "@/components/sections/CallToAction";
import FAQ from "@/components/sections/FAQ";

const Index = () => {
  // Add scroll reveal effect
  useEffect(() => {
    const handleScroll = () => {
      const revealElements = document.querySelectorAll('.opacity-0');
      
      revealElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
          element.classList.add('animate-fade-in');
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    
    // Initial check on load
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen bg-subtle-gradient">
      <Header />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <CallToAction />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
