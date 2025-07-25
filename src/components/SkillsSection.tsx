import { useState } from 'react';
import { Code, Palette, Users, Lightbulb } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const SkillsSection = () => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const technicalSkills = [
    { name: 'Java', level: 90, category: 'Backend' },
    { name: 'HTML/CSS', level: 85, category: 'Frontend' },
    { name: 'Git/GitHub', level: 88, category: 'Tools' },
    { name: 'SQL', level: 82, category: 'Database' },
    { name: 'AWS Cloud', level: 80, category: 'DevOps' },
    { name: 'JavaScript', level: 75, category: 'Frontend' },
    { name: 'Python', level: 90, category: 'Backend' },
    { name: 'Figma', level: 70, category: 'Design' },
  ];

  const softSkills = [
    { name: 'Leadership', icon: Users, description: 'Led multiple project teams and mentored junior developers' },
    { name: 'Problem Solving', icon: Lightbulb, description: 'Analytical thinking with creative solutions to complex challenges' },
    { name: 'Communication', icon: Palette, description: 'Clear technical communication and presentation skills' },
    { name: 'Creativity', icon: Code, description: 'Innovative approach to development and design thinking' },
  ];

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-4">
            <span className="bg-gradient-cyber bg-clip-text text-transparent">
              Skills & Expertise
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            The technical arsenal and soft skills that power my development journey
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
          
          {/* Technical Skills */}
          <Card className="glass cyber-border">
            <CardHeader>
              <CardTitle className="text-2xl font-orbitron text-primary flex items-center gap-3">
                <Code className="animate-pulse" />
                Technical Skills
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {technicalSkills.map((skill, index) => (
                <div 
                  key={skill.name}
                  className="group"
                  onMouseEnter={() => setHoveredSkill(skill.name)}
                  onMouseLeave={() => setHoveredSkill(null)}
                >
                  <div className="flex justify-between items-center mb-2">
                    <div className="flex items-center gap-3">
                      <span className="font-rajdhani font-semibold text-foreground">
                        {skill.name}
                      </span>
                      <span className="text-xs px-2 py-1 rounded-full bg-gradient-cyber text-primary-foreground">
                        {skill.category}
                      </span>
                    </div>
                    <span className="text-sm text-muted-foreground font-mono">
                      {skill.level}%
                    </span>
                  </div>
                  
                  <div className="relative h-3 bg-muted rounded-full overflow-hidden">
                    <div 
                      className={`absolute top-0 left-0 h-full bg-gradient-cyber rounded-full transition-all duration-1000 ease-out ${
                        hoveredSkill === skill.name ? 'animate-pulse-glow' : ''
                      }`}
                      style={{ 
                        width: `${skill.level}%`,
                        transitionDelay: `${index * 100}ms`
                      }}
                    />
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Soft Skills */}
          <Card className="glass cyber-border">
            <CardHeader>
              <CardTitle className="text-2xl font-orbitron text-secondary flex items-center gap-3">
                <Users className="animate-pulse" />
                Soft Skills
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {softSkills.map((skill, index) => (
                <div 
                  key={skill.name}
                  className="group p-4 rounded-lg bg-gradient-surface hover:bg-gradient-cyber/10 transition-all duration-300 transform hover:scale-105"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-gradient-cyber/20 group-hover:animate-pulse">
                      <skill.icon className="text-secondary" size={24} />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-rajdhani font-semibold text-lg text-foreground mb-2">
                        {skill.name}
                      </h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {skill.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;