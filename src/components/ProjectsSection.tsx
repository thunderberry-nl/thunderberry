
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
}

export default function ProjectsSection() {
  const [projects, setProjects] = useState<Repository[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

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
        topProjects.push({
          name: "Lidwoord",
          description: "Android app that helps you find the correct Dutch article for nouns and more",
          html_url: "https://play.google.com/store/apps/details?id=nl.altindag.welklidwoord&hl=en",
          stargazers_count: 0,
          forks_count: 0,
          language: "Android",
          topics: ["android", "education", "dutch"],
          type: 'app' as const,
          logo: "/logo/google-play.png"
        })

        setProjects(topProjects);
        setLoading(false);
      } catch (err) {
        setError('Failed to load projects. Using fallback data.');
        setLoading(false);
        
        // Updated fallback data with correct watchers values
        setProjects([
          {
            name: "Lidwoord",
            description: "Android app that helps you find the correct Dutch article for nouns and more",
            html_url: "https://play.google.com/store/apps/details?id=nl.altindag.welklidwoord&hl=en",
            stargazers_count: 1000,
            forks_count: 0,
            language: "Android",
            topics: ["android", "education", "dutch"],
            type: 'app' as const,
            logo: "/logo/google-play.png"
          },
          {
            name: "sslcontext-kickstart",
            description: "SSL made easy! A library to setup a SSLContext and other TLS related settings within just a few lines of code!",
            html_url: "https://github.com/Hakky54/sslcontext-kickstart",
            stargazers_count: 580,
            forks_count: 58,
            language: "Java",
            topics: ["security", "tls", "ssl", "java", "certificate"]
          },
          {
            name: "mutual-tls-ssl",
            description: "Demonstrates different ways of implementing Mutual TLS/SSL authentication in various protocols and technologies",
            html_url: "https://github.com/Hakky54/mutual-tls-ssl",
            stargazers_count: 378,
            forks_count: 129,
            language: "Java",
            topics: ["security", "tls", "ssl", "mutual-authentication", "client-certificate"]
          },
          {
            name: "log-captor",
            description: "A library which will allow you to easily capture the logs for logging frameworks in the verification phase of your unit tests",
            html_url: "https://github.com/Hakky54/log-captor",
            stargazers_count: 45,
            forks_count: 7,
            language: "Java",
            topics: ["logging", "testing", "unit-tests", "slf4j"]
          },
          {
            name: "console-captor",
            description: "A Java library to capture console output for testing and logging purposes",
            html_url: "https://github.com/Hakky54/console-captor",
            stargazers_count: 35,
            forks_count: 10,
            language: "Java",
            topics: ["testing", "logging", "java", "console"]
          },
          {
            name: "java-tutorial",
            description: "A basic tutorial about Java, Spring, Hibernate, Maven, Microservices, Apache CXF, OpenShift",
            html_url: "https://github.com/Hakky54/java-tutorial",
            stargazers_count: 17,
            forks_count: 11,
            language: "Java",
            topics: ["java", "tutorial", "learning"]
          }
        ]);
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
                  <div className="flex items-center">
                    <Star className="h-4 w-4 mr-1 text-yellow-500" />
                    <span className="text-sm">{project.stargazers_count}</span>
                  </div>
                  <div className="flex items-center">
                    <GitFork className="h-4 w-4 mr-1" />
                    <span className="text-sm">{project.forks_count}</span>
                  </div>
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
