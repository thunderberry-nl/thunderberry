
import { Building, Briefcase, Globe, Plane, Landmark, Gavel, Store } from 'lucide-react';

export default function PartnershipsSection() {
  const partners = [
    { name: 'ABN AMRO', icon: Building, color: '#009286' },
    { name: 'ING', icon: Building, color: '#FF6200' },
    { name: 'Nederlandse Spoorwegen', icon: Briefcase, color: '#003082' },
    { name: 'KLM Royal Dutch Airlines', icon: Plane, color: '#00A1DE' },
    { name: 'Kamer van Koophandel', icon: Landmark, color: '#007BC7' },
    { name: 'IVO Rechtspraak', icon: Gavel, color: '#154273' },
    { name: 'Attraqt', icon: Globe, color: '#222222' },
    { name: 'IKEA', icon: Store, color: '#0051BA' },
  ];

  return (
    <section id="partnerships" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Partnerships</h2>
        
        <p className="text-center text-lg text-developer-gray/90 mb-12 max-w-3xl mx-auto">
          I've had the privilege of collaborating with these distinguished organizations, 
          delivering innovative Java solutions that drive business success.
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {partners.map((partner, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center justify-center p-4 rounded-lg transition-all hover:bg-developer-lightGray/50 animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div 
                className="w-16 h-16 rounded-full flex items-center justify-center mb-3 bg-white shadow-md"
                style={{ color: partner.color }}
              >
                <partner.icon size={32} />
              </div>
              <span className="text-developer-darkBlue font-medium text-center">{partner.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
