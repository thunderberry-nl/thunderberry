
import { useEffect, useState } from 'react';
import { ArrowUpRight, Star, GitFork, Eye } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

interface Repository {
  name: string;
  description: string;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string;
  topics: string[];
  type?: 'app' | 'repo';
  logo?: string;
  downloads?: string;
}

export default function ProjectsSection() {
  const [projects, setProjects] = useState<Repository[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const additionalProjects = [
    {
      name: "Lidwoord",
      description: "Android app that helps you find the correct Dutch article for nouns and more",
      html_url: "https://play.google.com/store/apps/details?id=nl.altindag.welklidwoord&hl=en",
      stargazers_count: null,
      forks_count: null,
      language: "Java",
      topics: ["android", "education", "Dutch"],
      type: 'app' as const,
      logo: "/logo/google-play.png",
      downloads: "10+"
    },
    {
      name: "OpenSSL CheatSheet",
      description: "OpenSSL commands and tips for managing SSL/TLS certificates and keys",
      html_url: "https://gist.github.com/Hakky54/b30418b25215ad7d18f978bc0b448d81",
      stargazers_count: 324,
      forks_count: 103,
      language: "openssl",
      topics: ["CLI", "education", "keystore", "truststore", "certificate"]
    },
    {
      name: "Keytool CheatSheet",
      description: "Keytool commands and tips for managing Java keystores and certificates",
      html_url: "https://gist.github.com/Hakky54/7a2f0fcbcf5fdf4674d48f1a0b31c862",
      stargazers_count: 95,
      forks_count: 33,
      language: "keytool",
      topics: ["CLI", "education", "keystore", "truststore", "certificate"]
    },
    {
      name: "Http Client SSL/TLS Configuration",
      description: "Cheat Sheet - Http Client SSL TLS Configuration for Java, Kotlin and Scala with example http requests",
      html_url: "https://gist.github.com/Hakky54/ee12534594a3e35f48e18a16e42c7f40",
      stargazers_count: 37,
      forks_count: 1,
      language: "java",
      topics: ["Kotlin", "Scala", "SSL", "TLS", "Security"]
    }
  ];

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch('https://api.github.com/users/Hakky54/repos?sort=stars&per_page=100');
        if (!response.ok) {
          throw new Error('Failed to fetch repositories');
        }
        const data = await response.json();
        
        // Sort by stars but ensure console-captor is included
        const starsSorted = data.sort((a, b) => b.stargazers_count - a.stargazers_count);
        
        const topProjects = starsSorted.slice(0, 6);

        // Some additional projects that are not on GitHub
        additionalProjects.forEach(value => topProjects.push(value))

        setProjects(topProjects);
        setLoading(false);
      } catch (err) {
        setError('Failed to load projects. Using fallback data.');
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  return (
    <section id="projects" className="py-20 bg-developer-lightGray/50">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Top Projects</h2>
        
        {loading && (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-developer-blue"></div>
          </div>
        )}
        
        {error && <p className="text-center text-developer-gray/80 mb-4">{error}</p>}
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={project.name} className="project-card h-full flex flex-col animate-fade-up" style={{ animationDelay: `${index * 100}ms` }}>
              <CardHeader className="pb-2">
                <CardTitle className="flex justify-between items-start">
                  <div className="flex items-center gap-2 flex-1 min-w-0">
                    {project.logo && (
                      <img src={project.logo} alt={`${project.name} logo`} className="h-6 w-6 object-contain flex-shrink-0" />
                    )}
                    <span className="text-xl font-bold text-developer-darkBlue truncate">{project.name}</span>
                  </div>
                  <a href={project.html_url} target="_blank" rel="noopener noreferrer" aria-label={`Visit ${project.name}`} className="flex-shrink-0">
                    <ArrowUpRight className="h-5 w-5 text-developer-blue hover:text-developer-darkBlue transition-colors" />
                  </a>
                </CardTitle>
                <CardDescription className="text-sm line-clamp-2 h-10">
                  {project.description || "No description available"}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="flex-grow">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.topics && project.topics.slice(0, 4).map(topic => (
                    <Badge key={topic} variant="secondary" className="text-xs bg-developer-lightBlue/20 text-developer-darkBlue hover:bg-developer-lightBlue/40">
                      {topic}
                    </Badge>
                  ))}
                  {project.language && (
                    <Badge variant="outline" className="text-xs border-developer-blue/20 text-developer-blue">
                      {project.language}
                    </Badge>
                  )}
                  {project.type === 'app' && (
                    <Badge variant="secondary" className="text-xs bg-green-100 text-green-800 hover:bg-green-200">
                      App
                    </Badge>
                  )}
                </div>
              </CardContent>
              
              <CardFooter className="border-t pt-4 flex justify-between">
                <div className="flex items-center space-x-4 text-developer-gray/70">
                  {
                    project.stargazers_count > 0 &&
                      <div className="flex items-center">
                        <Star className="h-4 w-4 mr-1 text-yellow-500"/>
                        <span className="text-sm">{project.stargazers_count}</span>
                      </div>
                  }
                  {
                    project.forks_count > 0 &&
                        <div className="flex items-center">
                          <GitFork className="h-4 w-4 mr-1"/>
                          <span className="text-sm">{project.forks_count}</span>
                        </div>
                  }
                  {
                    project.downloads != null &&
                      <div className="flex items-center">
                        <span className="text-sm">{project.downloads} Downloads</span>
                      </div>
                  }
                </div>
                <Button variant="ghost" size="sm" className="text-developer-blue hover:text-developer-darkBlue hover:bg-developer-lightBlue/20" asChild>
                  <a href={project.html_url} target="_blank" rel="noopener noreferrer">
                    View Project
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button 
            className="bg-developer-blue hover:bg-developer-darkBlue text-white"
            asChild
          >
            <a href="https://github.com/Hakky54" target="_blank" rel="noopener noreferrer">
              View All Projects on GitHub
            </a>
          </Button>
          </div>
      </div>
    </section>
  );
}
