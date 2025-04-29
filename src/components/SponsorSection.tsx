
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
                  
                  <div className="flex flex-wrap gap-3 mt-4">
                    <Button 
                      className="bg-developer-blue hover:bg-developer-darkBlue"
                      onClick={() => window.open('https://github.com/sponsors/Hakky54', '_blank')}
                    >
                      <Github className="mr-2 h-4 w-4" /> GitHub Sponsors
                    </Button>
                    
                    <Button 
                      className="bg-[#3385FF] hover:bg-[#1D70B8]"
                      onClick={() => window.open('https://opencollective.com/hakky54', '_blank')}
                    >
                      <svg className="mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 2.182c5.423 0 9.818 4.395 9.818 9.818 0 5.423-4.395 9.818-9.818 9.818-5.423 0-9.818-4.395-9.818-9.818 0-5.423 4.395-9.818 9.818-9.818zm-1.25 4.384v4.991L16 12l-5.25.443v4.991L6 12l4.75-5.434z"/>
                      </svg>
                      Open Collective
                    </Button>
                    
                    <Button 
                      className="bg-[#FF5E5B] hover:bg-[#E04C49]"
                      onClick={() => window.open('https://ko-fi.com/hakky54', '_blank')}
                    >
                      <Coffee className="mr-2 h-4 w-4" /> Ko-fi
                    </Button>
                  </div>
                </div>
                
                <div className="space-y-4">
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
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="rounded-lg overflow-hidden shadow-lg border border-gray-100">
                      <div className="bg-[#3385FF] p-4 text-white flex items-center">
                        <svg className="h-6 w-6 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 2.182c5.423 0 9.818 4.395 9.818 9.818 0 5.423-4.395 9.818-9.818 9.818-5.423 0-9.818-4.395-9.818-9.818 0-5.423 4.395-9.818 9.818-9.818zm-1.25 4.384v4.991L16 12l-5.25.443v4.991L6 12l4.75-5.434z"/>
                        </svg>
                        <span className="font-medium">Open Collective</span>
                      </div>
                      <div className="bg-white p-4 text-center">
                        <p className="text-sm text-gray-600 mb-3">
                          A transparent way to support open source with clear financial reporting.
                        </p>
                        <a 
                          href="https://opencollective.com/hakky54"
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-[#3385FF] hover:text-[#1D70B8] font-medium text-sm"
                        >
                          opencollective.com/hakky54
                        </a>
                      </div>
                    </div>
                    
                    <div className="rounded-lg overflow-hidden shadow-lg border border-gray-100">
                      <div className="bg-[#FF5E5B] p-4 text-white flex items-center">
                        <Coffee className="h-6 w-6 mr-2" />
                        <span className="font-medium">Ko-fi</span>
                      </div>
                      <div className="bg-white p-4 text-center">
                        <p className="text-sm text-gray-600 mb-3">
                          Buy me a coffee to help fuel more open source development.
                        </p>
                        <a 
                          href="https://ko-fi.com/hakky54"
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="text-[#FF5E5B] hover:text-[#E04C49] font-medium text-sm"
                        >
                          ko-fi.com/hakky54
                        </a>
                      </div>
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
