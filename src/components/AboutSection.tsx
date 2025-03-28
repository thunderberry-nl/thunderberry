
import { Code, FileCode, Server, Shield, Database } from 'lucide-react';

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-title">About Me</h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-up">
            <p className="text-lg text-developer-gray/90 leading-relaxed">
              I'm a dedicated Java software developer with a passion for creating robust, 
              secure, and efficient applications. My expertise lies in developing libraries 
              and frameworks that help other developers build better software.
            </p>
            <p className="text-lg text-developer-gray/90 leading-relaxed">
              With a focus on security, performance, and clean code, I strive to create 
              solutions that not only solve problems but are also maintainable and scalable. 
              I believe in the power of open source and actively contribute to the community 
              through my projects.
            </p>
            <p className="text-lg text-developer-gray/90 leading-relaxed">
              My work has been recognized by thousands of developers worldwide who use my 
              libraries in their projects. I continuously aim to improve and expand my skill 
              set to create even better tools and applications.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-6 animate-fade-in">
            <div className="bg-developer-lightGray p-6 rounded-lg hover:shadow-md transition-shadow">
              <Code className="text-developer-blue mb-4" size={36} />
              <h3 className="font-bold text-xl mb-2">Clean Code</h3>
              <p className="text-developer-gray/80">Writing maintainable, readable, and efficient code that follows best practices.</p>
            </div>
            
            <div className="bg-developer-lightGray p-6 rounded-lg hover:shadow-md transition-shadow">
              <FileCode className="text-developer-blue mb-4" size={36} />
              <h3 className="font-bold text-xl mb-2">Libraries</h3>
              <p className="text-developer-gray/80">Creating reusable libraries that solve common problems in elegant ways.</p>
            </div>
            
            <div className="bg-developer-lightGray p-6 rounded-lg hover:shadow-md transition-shadow">
              <Shield className="text-developer-blue mb-4" size={36} />
              <h3 className="font-bold text-xl mb-2">Security</h3>
              <p className="text-developer-gray/80">Implementing robust security measures to protect applications and data.</p>
            </div>
            
            <div className="bg-developer-lightGray p-6 rounded-lg hover:shadow-md transition-shadow">
              <Server className="text-developer-blue mb-4" size={36} />
              <h3 className="font-bold text-xl mb-2">Performance</h3>
              <p className="text-developer-gray/80">Optimizing applications for speed, efficiency, and scalability.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
