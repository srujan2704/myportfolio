import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Code, Database, Wrench, Globe } from 'lucide-react';

export function Skills() {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: Code,
      skills: [
        { name: 'Java', level: 90 },
        { name: 'Python', level: 85 },
        { name: 'C/C++', level: 80 },
        { name: 'JavaScript', level: 85 },
        { name: 'Kotlin', level: 75 },
      ]
    },
    {
      title: 'Web Technologies',
      icon: Globe,
      skills: [
        { name: 'HTML/CSS', level: 90 },
        { name: 'React', level: 85 },
        { name: 'Node.js', level: 80 },
        { name: 'FastAPI', level: 75 },
        { name: 'RESTful APIs', level: 85 },
      ]
    },
    {
      title: 'Databases',
      icon: Database,
      skills: [
        { name: 'SQL', level: 90 },
        { name: 'MongoDB', level: 80 },
        { name: 'Database ', level: 80 },
        { name: 'Data Analysis', level: 75 },
      ]
    },
    {
      title: 'Developer Tools',
      icon: Wrench,
      skills: [
        { name: 'GitHub', level: 90 },
        { name: 'Google Cloud Platform', level: 80 },
        { name: 'Visual Studio', level: 85 },
        { name: 'PyCharm', level: 80 },
        { name: 'Eclipse', level: 75 },
      ]
    }
  ];

  const technicalSkills = [
    'Machine Learning', 'Artificial Intelligence', 'Data Structures', 'Algorithms',
    'Multi-Agent Systems', 'Communication Protocols', 'Full Stack Development',
    'Software Engineering', 'Problem Solving', 'Team Collaboration'
  ];

  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive toolkit for building innovative solutions
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card 
                key={index} 
                className="glass hover-lift animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-gradient-to-r from-primary to-accent">
                      <IconComponent className="h-5 w-5 text-primary-foreground" />
                    </div>
                    <CardTitle className="text-lg">{category.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">{skill.name}</span>
                        <span className="text-xs text-muted-foreground">{skill.level}%</span>
                      </div>
                      <Progress 
                        value={skill.level} 
                        className="h-2"
                      />
                    </div>
                  ))}
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Technical Skills Tags */}
        <div className="animate-slide-up">
          <h3 className="text-2xl font-bold mb-8 text-center gradient-text">Core Competencies</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {technicalSkills.map((skill, index) => (
              <Badge 
                key={index}
                variant="outline"
                className="px-4 py-2 text-sm font-medium border-primary/20 hover:border-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-105"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}