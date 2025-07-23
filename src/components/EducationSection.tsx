import { GraduationCap, MapPin, Calendar, Trophy } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const EducationSection = () => {
  const education = [
    {
      degree: 'Bachelor of Technology - Computer Science',
      institution: 'Vasavi College of Engineering',
      location: 'Hyderabad, Telangana',
      duration: '2021 - 2025',
      result: 'CGPA: 8.7/10',
      description: 'Specializing in Software Engineering and Data Science. Active member of coding clubs and tech societies.',
      icon: '🎓',
      status: 'current'
    },
    {
      degree: 'Intermediate (XII) - MPC',
      institution: 'Narayana Junior College',
      location: 'Hyderabad, Telangana',
      duration: '2019 - 2021',
      result: '96.2%',
      description: 'Mathematics, Physics, and Chemistry with a focus on analytical thinking and problem-solving.',
      icon: '📚',
      status: 'completed'
    },
    {
      degree: 'Secondary School (X)',
      institution: 'Narayana High School',
      location: 'Hyderabad, Telangana',
      duration: '2018 - 2019',
      result: '95.8%',
      description: 'Strong foundation in sciences and mathematics. First exposure to computer programming.',
      icon: '🏫',
      status: 'completed'
    }
  ];

  return (
    <section id="education" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-4">
            <span className="bg-gradient-cyber bg-clip-text text-transparent">
              Education Journey
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            The academic foundation that shaped my technical expertise and problem-solving abilities
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-cyber"></div>
            
            <div className="space-y-12">
              {education.map((edu, index) => (
                <div 
                  key={edu.degree}
                  className={`relative flex items-start gap-8 ${
                    index % 2 === 0 ? 'slide-in-left' : 'slide-in-right'
                  }`}
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  {/* Timeline dot */}
                  <div className="relative z-10">
                    <div className={`w-16 h-16 rounded-full flex items-center justify-center text-2xl ${
                      edu.status === 'current' 
                        ? 'bg-gradient-cyber pulse-glow animate-pulse' 
                        : 'glass cyber-border'
                    }`}>
                      {edu.icon}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <Card className="glass cyber-border hover:scale-105 transition-all duration-300 transform-3d">
                      <CardContent className="p-6">
                        <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                          <div>
                            <h3 className="text-xl md:text-2xl font-orbitron font-bold text-foreground mb-2">
                              {edu.degree}
                            </h3>
                            <div className="flex items-center gap-2 text-primary font-rajdhani font-semibold mb-1">
                              <GraduationCap size={18} />
                              {edu.institution}
                            </div>
                            <div className="flex items-center gap-4 text-muted-foreground text-sm">
                              <div className="flex items-center gap-1">
                                <MapPin size={14} />
                                {edu.location}
                              </div>
                              <div className="flex items-center gap-1">
                                <Calendar size={14} />
                                {edu.duration}
                              </div>
                            </div>
                          </div>
                          
                          <div className="flex items-center gap-2 bg-gradient-cyber/20 px-3 py-1 rounded-full">
                            <Trophy size={16} className="text-secondary" />
                            <span className="font-rajdhani font-semibold text-foreground">
                              {edu.result}
                            </span>
                          </div>
                        </div>
                        
                        <p className="text-muted-foreground leading-relaxed">
                          {edu.description}
                        </p>
                        
                        {edu.status === 'current' && (
                          <div className="mt-4 inline-flex items-center gap-2 text-primary text-sm font-rajdhani font-semibold">
                            <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                            Currently Pursuing
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;