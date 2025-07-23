import { useState } from 'react';
import { User, Code, Heart } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const AboutSection = () => {
  const [activeTab, setActiveTab] = useState('origin');

  const tabs = [
    {
      id: 'origin',
      label: 'My Origin Story',
      icon: User,
      content: {
        title: 'The Making of Spidey 🕷️',
        description: 'Every superhero has an origin story, and mine began in the vibrant city of Hyderabad. Growing up surrounded by technology and innovation, I discovered my superpower wasn\'t web-slinging, but web-building! From a curious kid dismantling gadgets to a Computer Science student crafting digital solutions, my journey has been about turning imagination into code.',
        highlights: [
          'Born and raised in Hyderabad, the "Cyberabad" of India',
          'First computer encounter at age 8 - instant fascination',
          'Nickname "Spidey" earned for my ability to navigate complex code webs',
          'Believes in the motto: "With great code comes great responsibility"'
        ]
      }
    },
    {
      id: 'journey',
      label: 'Tech Journey',
      icon: Code,
      content: {
        title: 'From Hello World to Hello Universe 🌌',
        description: 'My coding journey started with a simple "Hello World" in Python during my first year. What began as curiosity evolved into passion, and passion into expertise. I\'ve since explored multiple programming languages, frameworks, and technologies, always eager to learn and create something amazing.',
        highlights: [
          'Started with Python - fell in love with clean, readable code',
          'Explored web development with React, Node.js, and modern frameworks',
          'Dived into AI/ML, blockchain, and cloud technologies',
          'Built 20+ projects ranging from web apps to mobile solutions',
          'Active contributor to open-source projects'
        ]
      }
    },
    {
      id: 'beyond',
      label: 'Beyond Code',
      icon: Heart,
      content: {
        title: 'The Human Behind the Code 🎭',
        description: 'When I\'m not coding, you\'ll find me exploring the world beyond screens. I believe that great developers are well-rounded individuals who draw inspiration from diverse experiences and hobbies.',
        highlights: [
          'Marvel enthusiast (hence the Spidey nickname!)',
          'Photography - capturing moments and perspectives',
          'Chess player - strategic thinking translates to better coding',
          'Music lover - coding with good beats in the background',
          'Fitness enthusiast - healthy body, healthy mind, healthy code'
        ]
      }
    }
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-4">
            <span className="bg-gradient-cyber bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Dive deep into my story, journey, and the person behind the code
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8 glass cyber-border">
              {tabs.map((tab) => (
                <TabsTrigger 
                  key={tab.id} 
                  value={tab.id}
                  className="flex items-center gap-2 font-rajdhani font-medium data-[state=active]:bg-gradient-cyber data-[state=active]:text-primary-foreground"
                >
                  <tab.icon size={20} />
                  <span className="hidden sm:inline">{tab.label}</span>
                </TabsTrigger>
              ))}
            </TabsList>

            {tabs.map((tab) => (
              <TabsContent key={tab.id} value={tab.id} className="mt-8">
                <Card className="glass cyber-border hover:scale-[1.02] transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-2xl md:text-3xl font-orbitron bg-gradient-cyber bg-clip-text text-transparent">
                      {tab.content.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      {tab.content.description}
                    </p>
                    
                    <div className="grid gap-4">
                      <h4 className="text-xl font-rajdhani font-semibold text-primary">
                        Highlights:
                      </h4>
                      <ul className="space-y-3">
                        {tab.content.highlights.map((highlight, index) => (
                          <li 
                            key={index}
                            className="flex items-start gap-3 text-muted-foreground"
                          >
                            <div className="w-2 h-2 bg-gradient-cyber rounded-full mt-2 flex-shrink-0"></div>
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;