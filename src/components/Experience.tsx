import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Building, Calendar, MapPin } from 'lucide-react';

export function Experience() {
  const experiences = [
    {
      role: 'R&D project Intern',
      company: 'Samsung',
      location: 'Bengaluru, India',
      period: 'Feb 2025 - Sep 2025',
      type: 'Internship',
      description: 'Working on research and development projects in artificial intelligence and agent communication systems.',
      achievements: [
        'Designed and implemented a communication framework enabling seamless, real-time interaction between multiple networked AI agents',
        'Focused on message protocols, agent coordination, and dialogue management to support collaborative and scalable multi-agent conversations',
        
        'Used Protocols such as model context protocol(MCP),A2A protocol, along with SPADE (Smart Python Agent Development Environment) for agent communication'
      ],
      technologies: ['AI/ML', 'Multi-Agent Systems', 'Communication Protocols', 'Python', 'Research']
    }
  ];

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Building expertise through hands-on industry experience
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <Card 
              key={index} 
              className="glass hover-lift animate-scale-in mb-8"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardContent className="p-8">
                <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                  <div className="flex-grow">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-foreground mb-2">{exp.role}</h3>
                        <div className="flex items-center gap-4 text-muted-foreground mb-2">
                          <div className="flex items-center gap-2">
                            <Building className="h-4 w-4" />
                            <span className="font-medium text-primary">{exp.company}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPin className="h-4 w-4" />
                            <span>{exp.location}</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 mb-4">
                          <Calendar className="h-4 w-4 text-muted-foreground" />
                          <span className="text-muted-foreground">{exp.period}</span>
                          <Badge className="bg-gradient-to-r from-primary to-accent border-0 text-primary-foreground ml-2">
                            {exp.type}
                          </Badge>
                        </div>
                      </div>
                    </div>

                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {exp.description}
                    </p>

                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-foreground mb-3">Key Achievements:</h4>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, achievementIndex) => (
                          <li key={achievementIndex} className="flex items-start gap-3">
                            <div className="w-2 h-2 rounded-full bg-gradient-to-r from-primary to-accent mt-2 flex-shrink-0"></div>
                            <span className="text-muted-foreground leading-relaxed">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-foreground mb-3">Technologies Used:</h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, techIndex) => (
                          <Badge 
                            key={techIndex}
                            variant="outline"
                            className="border-primary/20 text-primary hover:border-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Future Goals */}
        <div className="mt-16 text-center animate-slide-up">
          <div className="glass p-8 rounded-2xl max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold gradient-text mb-4">Looking Forward</h3>
            <p className="text-muted-foreground leading-relaxed">
              Seeking opportunities to contribute to innovative projects in AI, machine learning, 
              and software development. Passionate about creating solutions that make a real-world impact 
              while continuing to grow as a technology professional.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}