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
        title: 'My Origin 🌟',
        description: 'I\'m Goli Vignesh, born and raised in a conservative family in Hyderabad, Telangana. From a young age, I\'ve been instinctively curious, constantly exploring the "why" behind the "what." This innate inquisitiveness often led me to ask a stream of questions, sometimes more than people expected, but always driven by a genuine desire to understand things deeply.',
        highlights: [
          'The Inquisitive Mindset: Whether it\'s technology, human behavior, or daily patterns, I\'ve always approached the world with a sense of analytical wonder. I enjoy examining even the smallest of details, often spending time on things others might overlook—not because I have to, but because that\'s how I make sense of the world.',
          'A Balanced Personality: I identify as an extroverted introvert, someone who can express thoughts and emotions clearly when needed, yet still cherishes quiet moments of solitude to recharge and reflect. This balance allows me to work effectively in collaborative environments while also valuing independent focus time.',
          'Perfection in Process: I carry a strong sense of responsibility in whatever I take up. As a perfectionist, I believe in doing things right rather than rushing through tasks. While this sometimes means I spend extra time polishing the final 10%, it reflects my commitment to quality, precision, and thoughtfulness in everything I do.'
        ]
      }
    },
    {
      id: 'journey',
      label: 'Tech Journey',
      icon: Code,
      content: {
        title: 'From Hello World to Hello Universe 🌌',
        description: 'My journey into technology began with curiosity and that curiosity never stopped evolving. I\'ve always found the world of tech fascinating, not just for its innovation but for its potential to solve real-world problems. Whether it\'s a breakthrough framework or an emerging cloud service, I\'m drawn to explore and understand it—regardless of whether it aligns directly with my career path.',
        highlights: [
          'Learning as a Lifestyle: I consider myself a lifelong learner in the truest sense. I\'m constantly upskilling, diving into documentation, courses, videos, and most importantly, building things. For me, learning isn\'t complete until it\'s put into practice.',
          'Multi-Domain Experience: Over the years, I\'ve cultivated experience across multiple domains, including Web Development (responsive frontends and scalable backends), Android Development using Flutter, Cloud Technologies (AWS), and Core Programming in Java.',
          'From Curiosity to Craft: Technology, to me, isn\'t just a skill—it\'s an ever-evolving playground. My enthusiasm often leads me to experiment, prototype, and build—sometimes for fun, sometimes for impact, but always with passion.'
        ]
      }
    },
    {
      id: 'beyond',
      label: 'Beyond Code',
      icon: Heart,
      content: {
        title: 'The Human Behind the Code 🎭',
        description: 'While technology is a big part of who I am, there\'s much more to me beyond lines of code. At heart, I\'m a chill personality with a sharp eye for detail and observation. Whether it\'s understanding people or picking up subtle nuances in conversations, I find joy in slowing down and truly taking things in.',
        highlights: [
          'A Teacher at Heart: One of the roles I naturally slip into is that of a teacher. Explaining complex concepts in simple, creative ways is something I genuinely enjoy. If I hadn\'t chosen the tech path, I would\'ve probably been in a classroom, turning everyday lessons into experiences.',
          'A Natural Marketer: I also have a knack for marketing and persuasion. Communicating ideas with clarity and energy is one of my strengths. I believe I could sell a coffee maker to someone who doesn\'t even drink coffee, just by helping them see the value in it.',
          'The Connector: Beyond the pitch and the presentation, I take pride in my ability to connect with people. I\'m the kind of person who can earn someone\'s trust in just one conversation. Whether it\'s networking at events or mentoring juniors, I thrive on building genuine, lasting relationships.'
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
                  className="flex items-center gap-2 font-rajdhani font-medium data-[state=active]:bg-gradient-cyber data-[state=active]:text-primary-foreground pointer-events-auto cursor-pointer relative z-10"
                  onClick={() => setActiveTab(tab.id)}
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
                      <ul className="space-y-6">
                        {tab.content.highlights.map((highlight, index) => {
                          const colonIndex = highlight.indexOf(':');
                          const title = colonIndex !== -1 ? highlight.substring(0, colonIndex) : '';
                          const content = colonIndex !== -1 ? highlight.substring(colonIndex + 1).trim() : highlight;
                          
                          return (
                            <li 
                              key={index}
                              className="space-y-2"
                            >
                              {title && (
                                <h4 className="text-xl font-rajdhani font-semibold text-primary">
                                  {title}:
                                </h4>
                              )}
                              <div className="flex items-start gap-3 text-muted-foreground">
                                <div className="w-2 h-2 bg-gradient-cyber rounded-full mt-2 flex-shrink-0"></div>
                                <span>{content}</span>
                              </div>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </div>
        
        {/* Fun Fact */}
        <div className="text-center mt-12 animate-fade-in">
          <div className="inline-block p-4 rounded-lg glass cyber-border">
            <p className="text-lg font-rajdhani">
              <span className="text-primary font-semibold">Fun Fact:</span> You might spot me in open-source projects under the alias <em>Spidey</em>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;