import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { GraduationCap, Briefcase, Award, Target } from 'lucide-react';

export function About() {
  const stats = [
    { label: 'CGPA', value: '8.63/10', icon: GraduationCap },
    { label: 'Experience', value: '0-1 Years', icon: Briefcase },
    { label: 'Projects', value: '10+', icon: Target },
    { label: 'Achievements', value: '2+', icon: Award }
    
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            I am a passionate and driven individual with a keen interest in technology and innovation. 
            My journey in the field of computer science has been marked by a commitment to learning, 
            growth, and making a positive impact through my work.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="animate-slide-up">
            <h3 className="text-2xl font-bold mb-6 gradient-text">My Journey</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              I'm currently pursuing my Bachelor's in Information Science & Engineering  I'm a passionate and driven Information Science student
              with hands-on experience in web development, software engineering, and agent-based systems.
              My passion for technology drives me to explore the realms of artificial intelligence, 
              machine learning, and full-stack development.
            </p>
           
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">AI & ML</Badge>
              <Badge variant="secondary" className="bg-accent/10 text-accent border-accent/20">Full Stack</Badge>
              <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">Research</Badge>
              <Badge variant="secondary" className="bg-accent/10 text-accent border-accent/20">Innovation</Badge>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4 animate-scale-in">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <Card 
                  key={index} 
                  className="bg-gradient-to-br from-card to-card/50 border-border/50 hover-lift group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6 text-center">
                    <IconComponent className="h-8 w-8 mx-auto mb-3 text-primary group-hover:text-accent transition-colors duration-300" />
                    <div className="text-2xl font-bold gradient-text mb-1">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Education Timeline */}
        <div className="animate-slide-up">
          <h3 className="text-2xl font-bold mb-8 text-center gradient-text">Education Timeline</h3>
          <div className="space-y-6">
            {[
              {
                year: '2022 - 2026',
                degree: 'Bachelor of Engineering',
                field: 'Information Science And Engineering',
                institution: 'B.M.S COLLEGE OF ENGINEERING',
                location: 'Bengaluru, India',
                grade: 'CGPA: 8.63/10'
              },
              {
                year: '2020 - 2022',
                degree: '12th Grade (PCMB)',
                field: 'Karnataka State Board',
                institution: 'S.B.R COMPOSITE PU COLLEGE',
                location: 'Kalaburagi, India',
                grade: 'Percentage: 95.66%'
              },
              {
                year: '2019 - 2020',
                degree: '10th Grade',
                field: 'Karnataka State Board',
                institution: 'S.B.R ENGLISH SCHOOL',
                location: 'Kalaburagi, India',
                grade: 'Percentage: 97.44%'
              }
            ].map((edu, index) => (
              <Card key={index} className="glass hover-lift">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center gap-4">
                    <div className="flex-shrink-0">
                      <Badge className="bg-gradient-to-r from-primary to-accent border-0 text-primary-foreground">
                        {edu.year}
                      </Badge>
                    </div>
                    <div className="flex-grow">
                      <h4 className="text-lg font-semibold text-foreground mb-1">{edu.degree}</h4>
                      <p className="text-primary font-medium">{edu.field}</p>
                      <p className="text-muted-foreground">{edu.institution}, {edu.location}</p>
                    </div>
                    <div className="flex-shrink-0">
                      <Badge variant="outline" className="border-accent text-accent">
                        {edu.grade}
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}