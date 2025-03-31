import React, { useState, useEffect } from 'react';
import { Skeleton } from "@/components/ui/skeleton";

export default function PartnershipsSection() {
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [loadedCount, setLoadedCount] = useState(0);
  
  const partners = [
    { 
      name: 'ABN AMRO', 
      logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4f/ABN-AMRO_Logo_new_colors.svg',
      backgroundColor: '#fff',
      padding: '12px'
    },
    { 
      name: 'ING', 
      logo: 'https://d21buns5ku92am.cloudfront.net/69197/images/357649-ING_Logo_FC_A1_digitalprinting-57d57a-large-1593084012.jpg',
      backgroundColor: '#fff',
      padding: '12px'
    },
    { 
      name: 'Nederlandse Spoorwegen', 
      logo: 'https://customizedwear.nl/wp-content/uploads/2017/12/nederlandse-spoorwegen-ns-logo.png', 
      backgroundColor: '#fff',
      padding: '12px' 
    },
    { 
      name: 'KLM Royal Dutch Airlines', 
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/KLM_logo.svg/2560px-KLM_logo.svg.png', 
      backgroundColor: '#fff',
      padding: '12px'
    },
    { 
      name: 'Kamer van Koophandel', 
      logo: 'https://logovtor.com/wp-content/uploads/2020/01/kamer-van-koophandel-kvk-logo-vector.png', 
      backgroundColor: '#fff',
      padding: '12px'
    },
    { 
      name: 'IVO Rechtspraak', 
      logo: 'https://www.nvvk.nl/l/library/download/urn:uuid:73fa5016-f3e5-41f0-98ef-b614641cdef5/rechtspraak.png?scaleType=6&width=435&height=290', 
      backgroundColor: '#fff',
      padding: '12px'
    },
    { 
      name: 'Attraqt', 
      logo: 'https://rethink.industries/wp-content/uploads/2022/09/Attraqt_Logo_Black_RGB-400x170.png', 
      backgroundColor: '#fff',
      padding: '12px'
    },
    { 
      name: 'IKEA', 
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Ikea_logo.svg/2560px-Ikea_logo.svg.png', 
      backgroundColor: '#fff',
      padding: '12px'
    },
  ];

  useEffect(() => {
    if (loadedCount >= partners.length) {
      setImagesLoaded(true);
    }
  }, [loadedCount]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!imagesLoaded) {
        setImagesLoaded(true);
      }
    }, 3000);
    
    return () => clearTimeout(timeout);
  }, [imagesLoaded]);

  const handleImageLoad = () => {
    setLoadedCount(prev => prev + 1);
  };

  const handleImageError = (partnerName: string) => {
    console.error(`Failed to load image for ${partnerName}`);
    setLoadedCount(prev => prev + 1);
  };

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
              className="flex flex-col items-center justify-center p-4 rounded-lg transition-all hover:bg-developer-lightGray/20 animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div 
                className="h-24 w-40 rounded-lg flex items-center justify-center mb-3 bg-white shadow-sm border border-gray-100 overflow-hidden"
                style={{ 
                  backgroundColor: partner.backgroundColor,
                  padding: partner.padding
                }}
              >
                {!imagesLoaded ? (
                  <Skeleton className="h-16 w-32" />
                ) : (
                  <img 
                    src={partner.logo} 
                    alt={`${partner.name} logo`} 
                    className="max-h-full max-w-full object-contain"
                    loading="lazy"
                    onLoad={handleImageLoad}
                    onError={() => handleImageError(partner.name)}
                  />
                )}
              </div>
              <span className="text-developer-darkBlue font-medium text-center mt-2">{partner.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
