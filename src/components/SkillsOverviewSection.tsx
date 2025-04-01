
import React, { useState, useEffect } from 'react';
import { Skeleton } from "@/components/ui/skeleton";

export default function SkillsOverviewSection() {
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [loadedCount, setLoadedCount] = useState(0);
  
  const skills = [
    { name: "Java", logo: "java.png", backgroundColor: '#fff', padding: '12px' },
    { name: "Kotlin", logo: "kotlin.png", backgroundColor: '#fff', padding: '12px' },
    { name: "Scala", logo: "scala.png", backgroundColor: '#fff', padding: '12px' },
    { name: "Golang", logo: "golang.png", backgroundColor: '#fff', padding: '12px' },
    { name: "Spring Boot", logo: "spring.svg", backgroundColor: '#fff', padding: '12px' },
    { name: "Spring JPA", logo: "spring-jpa.png", backgroundColor: '#fff', padding: '12px' },
    { name: "Elastic Cloud", logo: "elastic-cloud.svg", backgroundColor: '#fff', padding: '12px' },
    { name: "Elasticsearch", logo: "elasticsearch.svg", backgroundColor: '#fff', padding: '12px' },
    { name: "Kibana", logo: "kibana.png", backgroundColor: '#fff', padding: '12px' },
    { name: "Kubernetes", logo: "Kubernetes.png", backgroundColor: '#fff', padding: '12px' },
    { name: "Docker", logo: "docker.webp", backgroundColor: '#fff', padding: '12px' },
    { name: "Google Cloud Platform", logo: "gcp.png", backgroundColor: '#fff', padding: '12px' },
    { name: "Google Dataflow", logo: "dataflow.png", backgroundColor: '#fff', padding: '12px' },
    { name: "Google BigQuery", logo: "bigquery.webp", backgroundColor: '#fff', padding: '12px' },
    { name: "Google Pub/Sub", logo: "pubsub.svg", backgroundColor: '#fff', padding: '12px' },
    { name: "Microsoft Azure", logo: "azure.png", backgroundColor: '#fff', padding: '12px' },
    { name: "Amazon Web Services", logo: "aws.png", backgroundColor: '#fff', padding: '12px' },
    { name: "GraphQL", logo: "graphql.svg", backgroundColor: '#fff', padding: '12px' },
    { name: "gRPC", logo: "grpc.png", backgroundColor: '#fff', padding: '12px' },
    { name: "Jax-RS", logo: "jaxrs.png", backgroundColor: '#fff', padding: '12px' },
    { name: "Jersey", logo: "jersey.png", backgroundColor: '#fff', padding: '12px' },
    { name: "Kafka", logo: "kafka.png", backgroundColor: '#fff', padding: '12px' },
    { name: "GraalVM", logo: "graalvm.png", backgroundColor: '#fff', padding: '12px' },
    { name: "Apache Beam", logo: "beam.png", backgroundColor: '#fff', padding: '12px' },
    { name: "Apache Maven", logo: "maven.png", backgroundColor: '#fff', padding: '12px' },
    { name: "Apache Tomcat", logo: "tomcat.png", backgroundColor: '#fff', padding: '12px' },
    { name: "Gradle", logo: "gradle.png", backgroundColor: '#fff', padding: '12px' },
    { name: "Apache Airflow", logo: "airflow.png", backgroundColor: '#fff', padding: '12px' },
    { name: "Jenkins", logo: "jenkins.png", backgroundColor: '#fff', padding: '12px' },
    { name: "Gitlab", logo: "gitlab.png", backgroundColor: '#fff', padding: '12px' },
    { name: "GitHub", logo: "github.png", backgroundColor: '#fff', padding: '12px' },
    { name: "BitBucket", logo: "bitbucket.webp", backgroundColor: '#fff', padding: '12px' },
    { name: "OpenShift", logo: "openshift.svg", backgroundColor: '#fff', padding: '12px' },
    { name: "Cucumber", logo: "cucumber.webp", backgroundColor: '#fff', padding: '12px' },
    { name: "MongoDB", logo: "mongodb.svg", backgroundColor: '#fff', padding: '12px' },
    { name: "Confluence", logo: "confluence.svg", backgroundColor: '#fff', padding: '12px' },
    { name: "Jira", logo: "jira.png", backgroundColor: '#fff', padding: '12px' },
    { name: "Slack", logo: "slack.webp", backgroundColor: '#fff', padding: '12px' },
    { name: "WireMock", logo: "wiremock.png", backgroundColor: '#fff', padding: '12px' },
  ];

  useEffect(() => {
    if (loadedCount >= skills.length) {
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

  const handleImageError = (skillName: string) => {
    console.error(`Failed to load image for ${skillName}`);
    setLoadedCount(prev => prev + 1);
  };

  return (
    <section id="skills" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Skills</h2>
        
        <p className="text-center text-lg text-developer-gray/90 mb-12 max-w-3xl mx-auto">
          Here's a comprehensive list of technologies I'm proficient with, spanning from Java ecosystems to cloud platforms and DevOps tools.
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6 max-w-6xl mx-auto">
          {skills.map((skill, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center justify-center p-3 rounded-lg transition-all hover:bg-developer-lightGray/20 animate-fade-up"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div 
                className="h-16 w-16 md:h-20 md:w-20 rounded-lg flex items-center justify-center mb-2 bg-white shadow-sm border border-gray-100 overflow-hidden"
                style={{ 
                  backgroundColor: skill.backgroundColor,
                  padding: skill.padding
                }}
              >
                {!imagesLoaded ? (
                  <Skeleton className="h-12 w-12 md:h-16 md:w-16" />
                ) : (
                  <img 
                    src={"/logo/" + skill.logo}
                    alt={`${skill.name} logo`} 
                    className="max-h-full max-w-full object-contain"
                    loading="lazy"
                    onLoad={handleImageLoad}
                    onError={() => handleImageError(skill.name)}
                  />
                )}
              </div>
              <span className="text-developer-darkBlue font-medium text-center text-sm mt-1">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
