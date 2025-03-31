
import React, { useState, useEffect } from 'react';
import { Skeleton } from "@/components/ui/skeleton";

export default function SkillsOverviewSection() {
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [loadedCount, setLoadedCount] = useState(0);
  
  const skills = [
    { name: "Spring Boot", logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Spring_Framework_Logo_2018.svg", backgroundColor: '#fff', padding: '12px' },
    { name: "Java", logo: "https://1000logos.net/wp-content/uploads/2020/09/Java-Logo.png", backgroundColor: '#fff', padding: '12px' },
    { name: "Kotlin", logo: "https://upload.wikimedia.org/wikipedia/commons/d/d4/Kotlin_logo.svg", backgroundColor: '#fff', padding: '12px' },
    { name: "Scala", logo: "https://upload.wikimedia.org/wikipedia/commons/3/39/Scala-full-color.svg", backgroundColor: '#fff', padding: '12px' },
    { name: "GraphQL", logo: "https://upload.wikimedia.org/wikipedia/commons/1/17/GraphQL_Logo.svg", backgroundColor: '#fff', padding: '12px' },
    { name: "gRPC", logo: "https://miro.medium.com/v2/resize:fit:1200/1*TnnhOApj9nim1OKnXFFjvA.png", backgroundColor: '#fff', padding: '12px' },
    { name: "CI/CD", logo: "https://miro.medium.com/v2/resize:fit:839/1*JDKxmDwriUdVxUSyMwaFyA.png", backgroundColor: '#fff', padding: '12px' },
    { name: "Docker", logo: "https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/97_Docker_logo_logos-512.png", backgroundColor: '#fff', padding: '12px' },
    { name: "Podman", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZDEiAjcwdA5LFr-kHh100VkIbT81SnmXtac8uT32KgH0sFTi18tUtHeKbxbw6wHwn30A&usqp=CAU", backgroundColor: '#fff', padding: '12px' },
    { name: "Pub/Sub", logo: "https://cdn.worldvectorlogo.com/logos/google-cloud-pub-sub-logo.svg", backgroundColor: '#fff', padding: '12px' },
    { name: "Jax-RS", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQs-1QqD2i26P8paM-52oKa-gOz_nBqqkVuCw&s", backgroundColor: '#fff', padding: '12px' },
    { name: "Jersey", logo: "https://pbs.twimg.com/profile_images/628552740399095808/E6ajYzZW_400x400.png", backgroundColor: '#fff', padding: '12px' },
    { name: "Rancher", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbsJqlU363OP5RRMTNRKPOUuqPhCU_fwX2_w&s", backgroundColor: '#fff', padding: '12px' },
    { name: "Spring JPA", logo: "https://miro.medium.com/v2/resize:fit:400/0*e3yFdW2ChuPGFery.png", backgroundColor: '#fff', padding: '12px' },
    { name: "Microsoft Azure", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Microsoft_Azure_Logo.svg/1280px-Microsoft_Azure_Logo.svg.png", backgroundColor: '#fff', padding: '12px' },
    { name: "Kafka", logo: "https://static-00.iconduck.com/assets.00/kafka-icon-2048x935-cvu4503l.png", backgroundColor: '#fff', padding: '12px' },
    { name: "Golang", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTN4W4k4zseh-AKurUNiz98TiScprGtQNykdQ&s", backgroundColor: '#fff', padding: '12px' },
    { name: "BigQuery", logo: "https://images.icon-icons.com/2699/PNG/512/google_bigquery_logo_icon_168150.png", backgroundColor: '#fff', padding: '12px' },
    { name: "GraalVM", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/GraalVM_Logo_RGB.svg/2560px-GraalVM_Logo_RGB.svg.png", backgroundColor: '#fff', padding: '12px' },
    { name: "Apache Beam", logo: "https://beam.apache.org/images/logos/full-color/name-right/beam-logo-full-color-name-right-1000.png", backgroundColor: '#fff', padding: '12px' },
    { name: "Google Dataflow", logo: "https://miro.medium.com/v2/resize:fit:786/1*GshyF7EMozZWqrn61SAGZw.png", backgroundColor: '#fff', padding: '12px' },
    { name: "Kubernetes", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Kubernetes_logo_without_workmark.svg/1200px-Kubernetes_logo_without_workmark.svg.png", backgroundColor: '#fff', padding: '12px' },
    { name: "Google Cloud Platform", logo: "https://static-00.iconduck.com/assets.00/google-cloud-platform-logo-icon-2048x1824-pg4wzspq.png", backgroundColor: '#fff', padding: '12px' },
    { name: "Amazon Web Services", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJEZ8qzIPaSZbld6HkjbcGXg9Eb51DT5HN7aRZVQzPn2Myo93Onq7PXtWMglYnTnMqy3c&usqp=CAU", backgroundColor: '#fff', padding: '12px' },
    { name: "Apache Maven", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Apache_Maven_logo.svg/1280px-Apache_Maven_logo.svg.png", backgroundColor: '#fff', padding: '12px' },
    { name: "Apache Tomcat", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Apache_Tomcat_logo.svg/2560px-Apache_Tomcat_logo.svg.png", backgroundColor: '#fff', padding: '12px' },
    { name: "Gradle", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRg4dA2AxQxu9eWJ8qvfPz756VnYdAmEtV1mmoEkKkGMbCQRy5TflwpPppdOFOrJ_AlUTk&usqp=CAU", backgroundColor: '#fff', padding: '12px' },
    { name: "Apache Airflow", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMLh0LACMHKxVuDHLpBPe58gx8Fl-LX1S0SfzyxOEd9Oyxa6qhcq3kYj44-yj5HabhX2Q&usqp=CAU", backgroundColor: '#fff', padding: '12px' },
    { name: "Jenkins", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Jenkins_logo.svg/1483px-Jenkins_logo.svg.png", backgroundColor: '#fff', padding: '12px' },
    { name: "Elastic Cloud", logo: "https://cdn.worldvectorlogo.com/logos/elastic-cloud.svg", backgroundColor: '#fff', padding: '12px' },
    { name: "Elasticsearch", logo: "https://cdn.freebiesupply.com/logos/large/2x/elastic-elasticsearch-logo-svg-vector.svg", backgroundColor: '#fff', padding: '12px' },
    { name: "Kibana", logo: "https://cdn.freebiesupply.com/logos/large/2x/elastic-kibana-logo-png-transparent.png", backgroundColor: '#fff', padding: '12px' },
    { name: "Gitlab", logo: "https://static-00.iconduck.com/assets.00/gitlab-icon-1024x942-f30d1qro.png", backgroundColor: '#fff', padding: '12px' },
    { name: "GitHub", logo: "https://cdn-icons-png.flaticon.com/512/25/25231.png", backgroundColor: '#fff', padding: '12px' },
    { name: "BitBucket", logo: "https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/44_Bitbucket_logo_logos-512.png", backgroundColor: '#fff', padding: '12px' },
    { name: "OpenShift", logo: "https://cdn.worldvectorlogo.com/logos/openshift.svg", backgroundColor: '#fff', padding: '12px' },
    { name: "Cucumber", logo: "https://cdn.iconscout.com/icon/free/png-256/free-cucumber-logo-icon-download-in-svg-png-gif-file-formats--programming-langugae-language-pack-logos-icons-1175236.png?f=webp&w=256", backgroundColor: '#fff', padding: '12px' },
    { name: "MongoDB", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQYbwZGaNWBwLHjEhVFhNEZEXA14nrUL_JMm6YJLDoMXcsd6r6glNjYOal0eco8T_eyg&usqp=CAU", backgroundColor: '#fff', padding: '12px' },
    { name: "Confluence", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Atlassian_Confluence_2017_logo.svg/2560px-Atlassian_Confluence_2017_logo.svg.png", backgroundColor: '#fff', padding: '12px' },
    { name: "Jira", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Jira_Logo.svg/1200px-Jira_Logo.svg.png", backgroundColor: '#fff', padding: '12px' },
    { name: "Slack", logo: "https://1000logos.net/wp-content/uploads/2021/06/Slack-logo.png", backgroundColor: '#fff', padding: '12px' },
    { name: "WireMock", logo: "https://avatars.githubusercontent.com/u/21368587?s=280&v=4", backgroundColor: '#fff', padding: '12px' },
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
                    src={skill.logo} 
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
