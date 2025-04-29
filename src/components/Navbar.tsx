import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';
import Image from '@/components/ui/image';

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Contributions', href: '#opensource' },
  { name: 'Sponsorship', href: '#sponsor'},
  { name: 'Partnerships', href: '#partnerships' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        scrolled ? "bg-white/95 shadow-md backdrop-blur-sm py-2" : "bg-transparent py-4"
      )}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <Image 
            src="/logo/thunderberry-big.png"
            alt="Thunderberry Logo" 
            width={40} 
            height={40} 
            className="mr-3"
          />
          <a href="#home" className="text-xl font-bold text-developer-darkBlue">
            thunderberry
          </a>
        </div>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <ul className="flex space-x-6">
            {navItems.map((item) => (
              <li key={item.name}>
                <a 
                  href={item.href}
                  className="text-developer-gray hover:text-developer-blue font-medium transition-colors"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
          
          <div className="flex items-center space-x-4">
            <a 
              href="https://github.com/Hakky54" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-developer-gray hover:text-developer-blue transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a 
              href="https://linkedin.com/in/altindag-hakan/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-developer-gray hover:text-developer-blue transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="mailto:hakan.altindag@thunderberry.nl" 
              className="text-developer-gray hover:text-developer-blue transition-colors"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
        </nav>

        {/* Mobile menu button */}
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="md:hidden text-developer-gray"
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile navigation */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-md">
          <nav className="container mx-auto py-4 px-6">
            <ul className="space-y-4 mb-4">
              {navItems.map((item) => (
                <li key={item.name}>
                  <a 
                    href={item.href}
                    className="block text-lg text-developer-gray hover:text-developer-blue transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
            
            <div className="flex items-center space-x-6 pt-4 border-t border-gray-100">
              <a 
                href="https://github.com/Hakky54" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-developer-gray hover:text-developer-blue transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a 
                href="https://linkedin.com/in/altindag-hakan/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-developer-gray hover:text-developer-blue transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="mailto:hakan.altindag@thunderberry.nl" 
                className="text-developer-gray hover:text-developer-blue transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
