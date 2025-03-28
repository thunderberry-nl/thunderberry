
import { Progress } from "@/components/ui/progress";

const skills = [
  { name: "Java", proficiency: 95, category: "Languages" },
  { name: "Spring Boot", proficiency: 90, category: "Frameworks" },
  { name: "Security/TLS", proficiency: 90, category: "Domain Expertise" },
  { name: "Maven/Gradle", proficiency: 85, category: "Build Tools" },
  { name: "JUnit/Mockito", proficiency: 85, category: "Testing" },
  { name: "Git", proficiency: 80, category: "Version Control" },
  { name: "Microservices", proficiency: 75, category: "Architecture" },
  { name: "Docker", proficiency: 70, category: "DevOps" },
];

const experienceItems = [
  {
    title: "Senior Java Developer",
    company: "Enterprise Solutions Inc.",
    period: "2019 - Present",
    description: "Lead development of secure microservices architecture. Created and maintained security libraries for internal use. Mentored junior developers."
  },
  {
    title: "Java Developer",
    company: "Security Systems Ltd.",
    period: "2016 - 2019",
    description: "Developed secure authentication and authorization systems. Created libraries for SSL/TLS implementation. Contributed to open-source projects."
  },
  {
    title: "Junior Software Engineer",
    company: "Tech Innovations",
    period: "2014 - 2016",
    description: "Worked on backend development for web applications. Implemented security features and testing frameworks."
  }
];

export default function SkillsSection() {
  // Group skills by category
  const categories: Record<string, typeof skills> = {};
  skills.forEach(skill => {
    if (!categories[skill.category]) {
      categories[skill.category] = [];
    }
    categories[skill.category].push(skill);
  });

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Skills & Experience</h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Skills */}
          <div className="space-y-8 animate-fade-up">
            <h3 className="text-2xl font-bold text-developer-darkBlue mb-6">Technical Skills</h3>
            
            {Object.entries(categories).map(([category, categorySkills]) => (
              <div key={category} className="mb-8">
                <h4 className="text-lg font-semibold text-developer-gray mb-4">{category}</h4>
                <div className="space-y-4">
                  {categorySkills.map(skill => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between">
                        <span className="font-medium text-developer-gray/90">{skill.name}</span>
                        <span className="text-sm text-developer-gray/70">{skill.proficiency}%</span>
                      </div>
                      <Progress value={skill.proficiency} className="h-2 bg-developer-lightGray">
                        <div 
                          className="h-full bg-gradient-to-r from-developer-blue to-developer-darkBlue rounded-full" 
                          style={{ width: `${skill.proficiency}%` }}
                        />
                      </Progress>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          {/* Experience */}
          <div className="animate-fade-up" style={{ animationDelay: '200ms' }}>
            <h3 className="text-2xl font-bold text-developer-darkBlue mb-6">Professional Experience</h3>
            
            <div className="space-y-8 relative before:absolute before:inset-0 before:h-full before:w-[2px] before:bg-developer-lightBlue/30 before:left-[17px] ml-1">
              {experienceItems.map((item, index) => (
                <div key={index} className="relative pl-10">
                  <div className="absolute left-0 top-1 w-9 h-9 bg-white rounded-full border-2 border-developer-blue flex items-center justify-center">
                    <div className="w-3 h-3 bg-developer-blue rounded-full"></div>
                  </div>
                  <div className="mb-1">
                    <h4 className="text-xl font-bold text-developer-darkBlue">{item.title}</h4>
                    <p className="text-developer-blue font-medium">{item.company}</p>
                    <p className="text-sm text-developer-gray/70 mb-2">{item.period}</p>
                  </div>
                  <p className="text-developer-gray/80">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
