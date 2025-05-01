
import { Heart, Code, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="py-8 bg-developer-darkBlue text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <div className="text-2xl font-bold mb-2">Hakan Altindag</div>
            <p className="text-gray-300">Java Software Developer</p>
          </div>
          
          <div className="text-center mb-4 md:mb-0">
            <p className="text-gray-400 text-sm mt-1">© {new Date().getFullYear()} Hakan Altindag. All rights reserved.</p>
          </div>
          
          <button 
            onClick={scrollToTop}
            className="p-3 bg-developer-blue/20 hover:bg-developer-blue/40 rounded-full transition-colors"
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} />
          </button>
        </div>
      </div>
    </footer>
  );
}
