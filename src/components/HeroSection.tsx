
import { ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex items-center relative bg-gradient-to-br from-developer-lightBlue/10 to-developer-lightGray pt-16">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="container mx-auto px-4 py-12 flex flex-col lg:flex-row items-center justify-between">
        <div className="lg:w-1/2 animate-fade-up">
          <span className="inline-block bg-developer-lightBlue text-developer-darkBlue px-4 py-1 rounded-full text-sm font-semibold mb-4">
            Java Software Developer
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
              className="bg-developer-blue hover:bg-developer-darkBlue text-white"
              asChild
            >
              <a href="#projects">View My Projects</a>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-developer-blue text-developer-blue hover:bg-developer-blue/10"
              asChild
            >
              <a href="#contact">Contact Me</a>
            </Button>
          </div>
        </div>
        <div className="lg:w-1/2 mt-12 lg:mt-0 flex justify-center animate-fade-in">
          <div className="relative">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-developer-blue to-developer-darkBlue rounded-full blur opacity-50"></div>
            <div className="relative bg-white p-8 rounded-full border-4 border-developer-lightBlue shadow-xl">
              <svg width="240" height="240" viewBox="0 0 512 512" className="text-java-dark">
                <path fill="#5382A1" d="M203.4,438.3c0,0-15.4,9,11,12c31.8,3.6,48.1,3.1,83.2-3.5c0,0,9.2,5.8,22.1,10.8   C198.9,509.8,80.2,450.6,203.4,438.3"/>
                <path fill="#5382A1" d="M196,402.8c0,0-17.3,12.8,9.1,15.5c34.2,3.5,61.2,3.8,108-5.2c0,0,6.4,6.5,16.5,10.1   C186.7,461.9,65.6,427.9,196,402.8"/>
                <path fill="#5382A1" d="M242.9,298.6c19.5,22.4-5.1,42.6-5.1,42.6s49.5-25.6,26.8-57.6c-21.2-30-37.5-44.8,50.6-96.2   C315.1,187.4,170.3,211.7,242.9,298.6"/>
                <path fill="#5382A1" d="M360.8,437.1c0,0,11.4,9.4-12.5,16.7c-45.5,13.9-189.5,18-229.5,0.6c-14.4-6.3,12.6-15,21-16.8   c8.8-1.9,13.8-1.5,13.8-1.5c-15.9-11.2-102.8,22-44.2,31.5C256.8,497.5,416.2,455.8,360.8,437.1"/>
                <path fill="#5382A1" d="M210.2,366.8c0,0-72.5,17.2-25.7,23.5c19.8,2.7,59.2,2.1,95.8-1.1c30-2.6,60.1-8.1,60.1-8.1s-10.6,4.5-18.2,9.8   c-73.5,19.3-215.4,10.3-174.6-9.4C182.2,368.4,210.2,366.8,210.2,366.8"/>
                <path fill="#5382A1" d="M307.1,469.6c74.6-38.8,40.1-76,16-71c-5.9,1.2-8.5,2.3-8.5,2.3s2.2-3.4,6.4-4.9c47.7-16.8,84.4,49.4-15.4,75.5   C306,471.5,306.7,470.6,307.1,469.6"/>
                <path fill="#F8981D" d="M264,319.2c0,0,41.3,41.3-39.2,104.9c-64.5,51-14.7,80.1-0.1,113.3c-37.7-34-65.5-63.8-46.8-91.6   C206.1,407,289.4,386.2,264,319.2"/>
                <path fill="#5382A1" d="M209.5,214.9c40.3-46.4,10.9-87.5,10.9-87.5s10.2,14.9,0.2,30.6c-10.5,16.2-24.2,28.2-31.2,52.2   c-4.7,16.1,14.1,34.1,31.9,74C212.5,261.3,183.5,242.9,209.5,214.9"/>
                <path fill="#F8981D" d="M282.4,469.5c0-3.8,0.3-19.4,9.3-27c-66.6,14.4-150.9,10-189.4,3c13.9,17.4,37.3,55.7,127,57.7   c8,0.2,20.1,0.6,30-0.7C263.3,488.4,282.4,485.1,282.4,469.5"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <a 
        href="#about" 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-developer-blue animate-bounce"
        aria-label="Scroll down"
      >
        <ArrowDown size={32} />
      </a>
    </section>
  );
}
