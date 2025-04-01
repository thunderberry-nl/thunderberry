
import { Mail, Github, Linkedin, ArrowRight } from 'lucide-react';

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-developer-lightGray/50">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Get In Touch</h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-up">
            <p className="text-lg text-developer-gray/90">
              Interested in hiring me for your project or want to discuss potential collaborations? 
              Feel free to reach out through any of the methods below.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-developer-blue text-white rounded-full flex items-center justify-center">
                  <Mail size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-developer-darkBlue">Email</h3>
                  <a href="mailto:hakan.altindag@thunderberry.nl" className="text-developer-gray/80 hover:text-developer-blue transition-colors">
                    hakan.altindag@thunderberry.nl
                  </a>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-developer-blue text-white rounded-full flex items-center justify-center">
                  <Github size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-developer-darkBlue">GitHub</h3>
                  <a 
                    href="https://github.com/Hakky54" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-developer-gray/80 hover:text-developer-blue transition-colors flex items-center"
                  >
                    github.com/Hakky54
                    <ArrowRight size={14} className="ml-1" />
                  </a>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-developer-blue text-white rounded-full flex items-center justify-center">
                  <Linkedin size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-developer-darkBlue">LinkedIn</h3>
                  <a 
                    href="https://www.linkedin.com/in/altindag-hakan/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-developer-gray/80 hover:text-developer-blue transition-colors flex items-center"
                  >
                    LinkedIn Profile
                    <ArrowRight size={14} className="ml-1" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

