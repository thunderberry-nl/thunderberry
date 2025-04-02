
import { ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { useIsMobile } from '@/hooks/use-mobile';

export default function HeroSection() {
  const isMobile = useIsMobile();

  const handleScroll = (elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center relative bg-gradient-to-br from-developer-lightBlue/10 to-developer-lightGray pt-16">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="container mx-auto px-4 py-8 flex flex-col items-center justify-between">
        {/* Show avatar at the top on mobile devices */}
        {isMobile && (
          <div className="mb-4 flex justify-center animate-fade-in">
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-developer-blue to-developer-darkBlue rounded-full blur opacity-50"></div>
              <Avatar className="relative w-56 h-56 rounded-full border-4 border-developer-lightBlue shadow-xl bg-white">
                <AvatarImage 
                  src="/lovable-uploads/3ac860ac-2a49-4004-a7fa-4a146f115766.png" 
                  alt="Hakan Altindag" 
                  className="object-cover"
                />
                <AvatarFallback className="text-4xl">HA</AvatarFallback>
              </Avatar>
            </div>
          </div>
        )}

        <div className="flex flex-col lg:flex-row items-center justify-between w-full">
          <div className="lg:w-1/2 animate-fade-up">
            <span className="inline-block bg-developer-lightBlue text-developer-darkBlue px-4 py-1 rounded-full text-sm font-semibold mb-4">
              Software Developer
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-developer-gray mb-4 leading-tight">
              Hi, I'm <span className="text-developer-blue">Hakan Altindag</span>
            </h1>
            <p className="text-lg md:text-xl text-developer-gray/80 mb-8 max-w-xl">
              A passionate Java developer specialized in building high-quality, secure, and efficient applications. 
              Creating open-source solutions that help developers worldwide.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button 
                size="lg" 
                className="bg-developer-blue hover:bg-developer-darkBlue text-white cursor-pointer"
                onClick={() => handleScroll('projects')}
              >
                View My Projects
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-developer-blue text-developer-blue hover:bg-developer-blue/10 cursor-pointer"
                onClick={() => handleScroll('contact')}
              >
                Contact Me
              </Button>
            </div>
          </div>
          
          {/* Only show avatar on desktop */}
          {!isMobile && (
            <div className="lg:w-1/2 mt-12 lg:mt-0 flex justify-center animate-fade-in">
              <div className="relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-developer-blue to-developer-darkBlue rounded-full blur opacity-50"></div>
                <Avatar className="relative w-64 h-64 rounded-full border-4 border-developer-lightBlue shadow-xl bg-white">
                  <AvatarImage 
                    src="/lovable-uploads/3ac860ac-2a49-4004-a7fa-4a146f115766.png" 
                    alt="Hakan Altindag" 
                    className="object-cover"
                  />
                  <AvatarFallback className="text-4xl">HA</AvatarFallback>
                </Avatar>
              </div>
            </div>
          )}
        </div>
      </div>
      <a
        href="#about"
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-developer-blue animate-bounce"
        aria-label="Scroll down"
      >
        <ArrowDown size={32}/>
      </a>
    </section>
  );
}
