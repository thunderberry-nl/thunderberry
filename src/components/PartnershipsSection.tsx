
import React from 'react';

export default function PartnershipsSection() {
  const partners = [
    { 
      name: 'ABN AMRO', 
      logo: 'https://media.licdn.com/dms/image/C4D0BAQFh4-4Hzfb-zA/company-logo_100_100/0/1662541957683/abn_amro_logo?e=1719878400&v=beta&t=6QMHVBPl2X6BejQaOp9QsqS_JGTmS1-mqVLuDZZrpWc',
      backgroundColor: '#fff',
      padding: '8px'
    },
    { 
      name: 'ING', 
      logo: 'https://media.licdn.com/dms/image/C4D0BAQECph7raSVAdA/company-logo_100_100/0/1677226590342/ing_logo?e=1719878400&v=beta&t=pjq_OmOJTIEF-lIEXFMQGTZgHgAVrmK4A7jrzacFOQ4',
      backgroundColor: '#fff',
      padding: '8px'
    },
    { 
      name: 'Nederlandse Spoorwegen', 
      logo: 'https://media.licdn.com/dms/image/C4D0BAQGGIJdIKE7DPQ/company-logo_100_100/0/1639045493891/ns_logo?e=1719878400&v=beta&t=Zzfyp9wVvCbkQdSVp1UrCn5v3JGZm5uT2M5d3xMMVZA', 
      backgroundColor: '#fff',
      padding: '8px' 
    },
    { 
      name: 'KLM Royal Dutch Airlines', 
      logo: 'https://media.licdn.com/dms/image/C4D0BAQGcXDmGEAZrkg/company-logo_100_100/0/1678962121499/klm_royal_dutch_airlines_logo?e=1719878400&v=beta&t=5Wvk4LDVJFjtYOUx_1N6V-v-aIJjEKB4FS83lkEA1n8', 
      backgroundColor: '#fff',
      padding: '8px'
    },
    { 
      name: 'Kamer van Koophandel', 
      logo: 'https://media.licdn.com/dms/image/C4D0BAQHFXwVz4_7gOg/company-logo_100_100/0/1677573292387/kvk_logo?e=1719878400&v=beta&t=NQM-8hBdgTfdRu7iAr8Uy1Rj8_2-4_tGKDuxI-6Kc-g', 
      backgroundColor: '#fff',
      padding: '8px'
    },
    { 
      name: 'IVO Rechtspraak', 
      logo: 'https://media.licdn.com/dms/image/C4E0BAQFGp1tD7b-Txw/company-logo_100_100/0/1677183024207/de_rechtspraak_logo?e=1719878400&v=beta&t=oAxdlZdHbZcxhLFBDRmcdKq4Gq-Vq3qrR0o4U-xJj7Q', 
      backgroundColor: '#fff',
      padding: '8px'
    },
    { 
      name: 'Attraqt', 
      logo: 'https://media.licdn.com/dms/image/C4E0BAQGBnRB2yLEL-g/company-logo_100_100/0/1645179097583/attraqt_logo?e=1719878400&v=beta&t=uQYIMvUdRg0H5-CzlBbN9V1lnNnVXwTAL0rWl7L2Czk', 
      backgroundColor: '#fff',
      padding: '8px'
    },
    { 
      name: 'IKEA', 
      logo: 'https://media.licdn.com/dms/image/C4D0BAQHiNSL4Or29cg/company-logo_100_100/0/1519856215226/ikea_logo?e=1719878400&v=beta&t=rL-DCqnpvMBHllzwjZftB6xaLXi1p-i51XYXFSvFNmA', 
      backgroundColor: '#fff',
      padding: '8px'
    },
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
              className="flex flex-col items-center justify-center p-4 rounded-lg transition-all hover:bg-developer-lightGray/20 animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div 
                className="w-24 h-24 rounded-lg flex items-center justify-center mb-3 bg-white shadow-sm border border-gray-100"
                style={{ 
                  backgroundColor: partner.backgroundColor,
                  padding: partner.padding
                }}
              >
                <img 
                  src={partner.logo} 
                  alt={`${partner.name} logo`} 
                  className="max-w-full max-h-full object-contain"
                />
              </div>
              <span className="text-developer-darkBlue font-medium text-center">{partner.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
