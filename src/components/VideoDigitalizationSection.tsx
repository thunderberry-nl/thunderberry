
import { useEffect } from 'react';
import { Film, Check } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import videoTapesImage from '@/assets/video-digitalization.jpg';

const formats = [
  { name: 'VHS', description: 'Standard VHS cassettes' },
  { name: 'Hi8', description: 'Hi8 / Video8 tapes' },
  { name: 'miniDV', description: 'miniDV cassettes' },
];

const VideoDigitalizationSection = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'Video Bandjes Digitaliseren',
      description: 'Video bandjes digitaliseren in Hilversum. Wij digitaliseren uw VHS, Hi8 en miniDV cassettes naar hoogwaardige digitale bestanden.',
      provider: {
        '@type': 'Person',
        name: 'Hakan Altindag',
        address: { '@type': 'PostalAddress', addressLocality: 'Hilversum', addressCountry: 'NL' },
      },
      areaServed: { '@type': 'City', name: 'Hilversum' },
      offers: {
        '@type': 'Offer',
        price: '15',
        priceCurrency: 'EUR',
        description: 'Per tape – VHS, Hi8, miniDV',
      },
      keywords: 'video bandjes digitaliseren, video bandjes digitaliseren Hilversum, miniDV, Hi8, VHS',
    });
    document.head.appendChild(script);
    return () => { document.head.removeChild(script); };
  }, []);

  return (
    <section id="video-digitalization" className="bg-muted">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-title">Video Tape Digitalization</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Don't let your precious memories fade away. I convert your old video tapes into high-quality digital files you can enjoy forever.
        </p>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="rounded-xl overflow-hidden shadow-lg">
            <img
              src={videoTapesImage}
              alt="VHS, Hi8 and miniDV video tapes next to a laptop showing digitalized video"
              className="w-full h-auto object-cover"
            />
          </div>

          <div className="space-y-6">
            <Card className="border-primary/20">
              <CardContent className="p-8 text-center">
                <Film className="w-10 h-10 text-primary mx-auto mb-3" />
                <p className="text-muted-foreground text-sm uppercase tracking-wide mb-1">Per tape</p>
                <p className="text-5xl font-bold text-primary">€15</p>
                <p className="text-muted-foreground mt-1 text-sm">All formats, one price</p>
              </CardContent>
            </Card>

            <div className="space-y-3">
              <h3 className="text-xl font-semibold text-foreground">Supported formats</h3>
              {formats.map((f) => (
                <div key={f.name} className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground font-medium">{f.name}</span>
                  <span className="text-muted-foreground text-sm">— {f.description}</span>
                </div>
              ))}
            </div>

            <p className="text-muted-foreground text-sm">
              Interested? Reach out via the <a href="#contact" className="text-primary underline hover:text-primary/80">contact form</a> below.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoDigitalizationSection;
