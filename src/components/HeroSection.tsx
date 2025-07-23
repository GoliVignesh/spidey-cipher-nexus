import { useState, useEffect } from 'react';
import { ChevronDown, Mail, Briefcase } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroPortrait from '@/assets/hero-portrait.jpg';
const HeroSection = () => {
  const [text, setText] = useState('');
  const fullText = "Hi, I'm Vignesh aka Spidey 👋";
  useEffect(() => {
    let currentIndex = 0;
    const typeWriter = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typeWriter);
      }
    }, 100);
    return () => clearInterval(typeWriter);
  }, []);
  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background Particles */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => <div key={i} className="absolute w-1 h-1 bg-primary rounded-full animate-pulse" style={{
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 3}s`,
        animationDuration: `${2 + Math.random() * 3}s`
      }} />)}
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          
          {/* Profile Image */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <div className="w-48 h-48 rounded-full overflow-hidden cyber-border pulse-glow">
                <img src={heroPortrait} alt="Goli Vignesh" className="w-full h-full object-cover" />
              </div>
              <div className="absolute inset-0 rounded-full bg-gradient-cyber opacity-20 animate-pulse"></div>
            </div>
          </div>

          {/* Main Title with Typewriter Effect */}
          <div className="mb-6">
            <h1 className="text-2xl md:text-4xl lg:text-6xl font-orbitron font-bold mb-4">
              <span className="bg-gradient-cyber bg-clip-text text-transparent">
                Meet Me!
              </span>
            </h1>
            
            <div className="h-16 flex items-center justify-center">
              <p className="text-xl md:text-2xl font-rajdhani font-medium text-muted-foreground">
                <span className="inline-block min-w-0">
                  {text}
                  <span className="animate-blink-cursor border-r-2 border-primary ml-1"></span>
                </span>
              </p>
            </div>
          </div>

          {/* Description */}
          <div className="mb-8">
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">A Computer Science student passionate about building innovative tech solutions and continuously learning in the evolving world of software development..</p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button onClick={() => scrollToSection('#contact')} className="group relative overflow-hidden bg-transparent border-2 border-primary text-primary hover:text-primary-foreground font-rajdhani font-semibold px-8 py-3 rounded-lg transition-all duration-300">
              <span className="absolute inset-0 bg-gradient-cyber transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
              <span className="relative flex items-center gap-2">
                <Mail size={20} />
                Contact Me
              </span>
            </Button>
            
            <Button onClick={() => scrollToSection('#accomplishments')} className="group relative overflow-hidden bg-gradient-cyber text-primary-foreground font-rajdhani font-semibold px-8 py-3 rounded-lg transition-all duration-300 hover:scale-105">
              <span className="relative flex items-center gap-2">
                <Briefcase size={20} />
                My Works
              </span>
            </Button>
          </div>

          {/* Scroll Indicator */}
          <div className="flex justify-center">
            <button onClick={() => scrollToSection('#about')} className="animate-bounce neon-glow p-2 rounded-full">
              <ChevronDown size={32} className="text-primary" />
            </button>
          </div>
        </div>
      </div>
    </section>;
};
export default HeroSection;