
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Github, Heart, Coffee, Gift, Rocket, Star } from 'lucide-react';
import { Button } from "@/components/ui/button";

export default function SponsorSection() {
  return (
    <section id="sponsor" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Sponsor My Work</h2>
        
        <div className="max-w-4xl mx-auto">
          <Card className="animate-fade-up shadow-md border-developer-lightBlue/20">
            <CardContent className="pt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-developer-darkBlue flex items-center gap-2">
                    <Heart className="h-6 w-6 text-red-500" />
                    Why Sponsor My Open Source Work?
                  </h3>
                  
                  <p className="text-developer-gray/90">
                    Your sponsorship directly supports the continued maintenance and development of 
                    the open source projects I maintain. These tools are used by thousands of developers 
                    worldwide, including enterprise companies and individual contributors.
                  </p>
                  
                  <ul className="space-y-3">
                    {[
                      { icon: <Coffee className="h-5 w-5 text-amber-700" />, text: "Ensure continued maintenance and bug fixes" },
                      { icon: <Rocket className="h-5 w-5 text-developer-blue" />, text: "Support new feature development" },
                      { icon: <Gift className="h-5 w-5 text-purple-500" />, text: "Promote innovation in developer tools" },
                      { icon: <Star className="h-5 w-5 text-yellow-500" />, text: "Recognize the value these tools provide to your workflow" }
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        {item.icon}
                        <span>{item.text}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    className="mt-4 bg-developer-blue hover:bg-developer-darkBlue"
                    onClick={() => window.open('https://github.com/sponsors/Hakky54', '_blank')}
                  >
                    <Heart className="mr-2 h-4 w-4" /> Become a Sponsor
                  </Button>
                </div>
                
                <div className="flex flex-col items-center justify-center p-4">
                  <div className="rounded-lg overflow-hidden shadow-lg border border-gray-100">
                    <div className="bg-[#24292e] p-4 text-white flex items-center">
                      <Github className="h-6 w-6 mr-2" />
                      <span className="font-medium">GitHub Sponsors</span>
                    </div>
                    <div className="bg-white p-6 text-center">
                      <img 
                        src="/lovable-uploads/3ac860ac-2a49-4004-a7fa-4a146f115766.png" 
                        alt="GitHub Sponsors Logo" 
                        className="mx-auto h-32 object-contain mb-4"
                      />
                      <p className="text-sm text-gray-600 mb-4">
                        Invest in the open source software that powers your applications and support 
                        the people who build and maintain it.
                      </p>
                      <a 
                        href="https://github.com/sponsors/Hakky54"
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-developer-blue hover:text-developer-darkBlue font-medium flex items-center justify-center gap-2"
                      >
                        <Github className="h-5 w-5" />
                        <span>github.com/sponsors/Hakky54</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
