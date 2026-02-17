
import { Mail, Github, Linkedin, ArrowRight, Send } from 'lucide-react';
import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';

export default function ContactSection() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name.trim() || !email.trim() || !message.trim()) {
      toast({ title: 'Please fill in all required fields', variant: 'destructive' });
      return;
    }

    const subject = encodeURIComponent(`Contact from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nPhone: ${phone || 'Not provided'}\n\nMessage:\n${message}`
    );
    
    window.location.href = `mailto:hakan.altindag@thunderberry.nl?subject=${subject}&body=${body}`;
    
    toast({ title: 'Opening your email client...' });
  };

  return (
    <section id="contact" className="py-20 bg-developer-lightGray/50">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Get In Touch</h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-start">
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

          <form onSubmit={handleSubmit} className="space-y-4 animate-fade-up bg-white rounded-xl p-6 shadow-md border border-developer-lightGray">
            <h3 className="text-xl font-semibold text-developer-darkBlue mb-2">Send me a message</h3>
            
            <div className="space-y-2">
              <Label htmlFor="name" className="text-developer-darkBlue">Name *</Label>
              <Input
                id="name"
                placeholder="Your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                maxLength={100}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="text-developer-darkBlue">Email *</Label>
              <Input
                id="email"
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                maxLength={255}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone" className="text-developer-darkBlue">Phone number</Label>
              <Input
                id="phone"
                type="tel"
                placeholder="+31 6 12345678"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                maxLength={20}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="message" className="text-developer-darkBlue">Message *</Label>
              <Textarea
                id="message"
                placeholder="Tell me about your project or idea..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                maxLength={1000}
                rows={5}
                required
              />
            </div>

            <Button type="submit" className="w-full bg-developer-blue hover:bg-developer-blue/90 text-white">
              <Send size={16} />
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
