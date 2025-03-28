
import { useState } from 'react';
import { Mail, Github, Linkedin, Send, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';

export default function ContactSection() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message sent successfully!",
        description: "Thank you for reaching out. I'll get back to you soon.",
        duration: 5000,
      });
      setFormData({ name: '', email: '', message: '' });
    }, 1500);
  };

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
                  <a href="mailto:contact@example.com" className="text-developer-gray/80 hover:text-developer-blue transition-colors">
                    contact@example.com
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
                    href="https://linkedin.com/in/" 
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
          
          <div className="bg-white p-8 rounded-lg shadow-md animate-fade-up" style={{ animationDelay: '200ms' }}>
            <h3 className="text-2xl font-bold text-developer-darkBlue mb-6">Send a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-developer-gray font-medium">
                  Your Name
                </label>
                <Input
                  id="name"
                  name="name"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="border-developer-gray/20 focus:border-developer-blue/50 focus:ring-developer-blue/30"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="email" className="text-developer-gray font-medium">
                  Email Address
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="border-developer-gray/20 focus:border-developer-blue/50 focus:ring-developer-blue/30"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-developer-gray font-medium">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Your message here..."
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="border-developer-gray/20 focus:border-developer-blue/50 focus:ring-developer-blue/30"
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-developer-blue hover:bg-developer-darkBlue text-white"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <span className="flex items-center">
                    <span className="animate-spin mr-2 h-4 w-4 border-t-2 border-white rounded-full"></span>
                    Sending...
                  </span>
                ) : (
                  <span className="flex items-center">
                    <Send size={16} className="mr-2" />
                    Send Message
                  </span>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
