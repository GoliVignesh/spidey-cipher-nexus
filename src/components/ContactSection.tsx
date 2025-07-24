import { useState } from 'react';
import { Send, Mail, Github, Linkedin, Instagram, MapPin, Terminal } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
const ContactSection = () => {
  const [terminalInput, setTerminalInput] = useState('');
  const [terminalHistory, setTerminalHistory] = useState(['> System initialized...', '> Welcome to Vignesh\'s Contact Terminal', '> Type "help" for available commands']);
  const socialLinks = [{
    name: 'LinkedIn',
    icon: Linkedin,
    url: 'https://linkedin.com/in/goli-vignesh',
    color: 'text-blue-400',
    handle: '@goli-vignesh'
  }, {
    name: 'GitHub',
    icon: Github,
    url: 'https://github.com/vignesh-spidey',
    color: 'text-gray-400',
    handle: '@vignesh-spidey'
  }, {
    name: 'Instagram',
    icon: Instagram,
    url: 'https://instagram.com/vignesh_spidey',
    color: 'text-pink-400',
    handle: '@vignesh_spidey'
  }, {
    name: 'Email',
    icon: Mail,
    url: 'mailto:vignesh.goli@example.com',
    color: 'text-green-400',
    handle: 'vignesh.goli@example.com'
  }];
  const handleTerminalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!terminalInput.trim()) return;
    const newHistory = [...terminalHistory, `> ${terminalInput}`];

    // Simple command responses
    switch (terminalInput.toLowerCase().trim()) {
      case 'help':
        newHistory.push('Available commands: about, skills, contact, clear, social');
        break;
      case 'about':
        newHistory.push('Goli Vignesh - 4th year CS student passionate about coding and innovation');
        break;
      case 'skills':
        newHistory.push('JavaScript, React, Python, Node.js, AWS, Docker, and more...');
        break;
      case 'contact':
        newHistory.push('Email: vignesh.goli@example.com | Location: Hyderabad, India');
        break;
      case 'social':
        newHistory.push('LinkedIn, GitHub, Instagram - Find all links below!');
        break;
      case 'clear':
        setTerminalHistory(['> Terminal cleared', '> Welcome back to Vignesh\'s Contact Terminal']);
        setTerminalInput('');
        return;
      default:
        newHistory.push(`Command "${terminalInput}" not found. Type "help" for available commands.`);
    }
    setTerminalHistory(newHistory);
    setTerminalInput('');
  };
  return <section id="contact" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-4">
            <span className="bg-gradient-cyber bg-clip-text text-transparent">
              Let's Connect!
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">Ready to collaborate, innovate, or just have a tech chat? Drop me a message!</p>
        </div>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
          
          {/* Terminal-style Contact */}
          <Card className="glass cyber-border">
            <CardHeader>
              <CardTitle className="text-xl font-orbitron text-primary flex items-center gap-3">
                <Terminal className="animate-pulse" />
                Interactive Terminal
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-cyber-dark rounded-lg p-4 font-mono text-sm h-64 overflow-y-auto mb-4">
                {terminalHistory.map((line, index) => <div key={index} className="text-green-400 mb-1">
                    {line}
                  </div>)}
              </div>
              
              <form onSubmit={handleTerminalSubmit} className="flex gap-2">
                <div className="flex-1 flex items-center bg-cyber-dark rounded-lg px-3">
                  <span className="text-green-400 font-mono mr-2">$</span>
                  <Input value={terminalInput} onChange={e => setTerminalInput(e.target.value)} placeholder="Type a command..." className="bg-transparent border-none font-mono text-green-400 placeholder:text-green-400/50" />
                </div>
                <Button type="submit" className="bg-gradient-cyber hover:opacity-80">
                  <Send size={16} />
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Form */}
          <Card className="glass cyber-border">
            <CardHeader>
              <CardTitle className="text-xl font-orbitron text-secondary flex items-center gap-3">
                <Mail className="animate-pulse" />
                Send Message
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <Input placeholder="Your Name" className="glass border-primary/50 focus:border-primary" />
                <Input type="email" placeholder="Your Email" className="glass border-primary/50 focus:border-primary" />
                <Input placeholder="Subject" className="glass border-primary/50 focus:border-primary" />
                <Textarea placeholder="Your Message" rows={5} className="glass border-primary/50 focus:border-primary resize-none" />
              </div>
              
              <Button className="w-full bg-gradient-cyber hover:opacity-80 font-rajdhani font-semibold">
                <Send size={16} className="mr-2" />
                Launch Message 🚀
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Social Links */}
        <div className="mt-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-orbitron font-bold text-foreground mb-2">Find Me Across the Web</h3>
            <div className="flex items-center justify-center gap-2 text-muted-foreground">
              <MapPin size={16} />
              <span>Hyderabad, Telangana, India</span>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {socialLinks.map((social, index) => <Card key={social.name} className="group glass cyber-border hover:scale-105 transition-all duration-300 cursor-pointer" onClick={() => window.open(social.url, '_blank')} style={{
            animationDelay: `${index * 100}ms`
          }}>
                <CardContent className="p-6 text-center">
                  <div className={`mx-auto mb-4 p-4 rounded-full bg-gradient-cyber/20 w-16 h-16 flex items-center justify-center group-hover:animate-pulse`}>
                    <social.icon className={`${social.color} group-hover:scale-110 transition-transform`} size={24} />
                  </div>
                  <h4 className="font-rajdhani font-semibold text-foreground mb-1">
                    {social.name}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {social.handle}
                  </p>
                </CardContent>
              </Card>)}
          </div>
        </div>

        {/* Fun Easter Egg Section */}
        <div className="mt-16 text-center">
          <div className="inline-block glass cyber-border rounded-lg p-4 neon-glow">
             <p className="text-sm text-muted-foreground font-rajdhani">
              🌟 <span className="text-primary">Pro Tip:</span> Try the terminal commands above for a fun experience!
            </p>
          </div>
        </div>
      </div>
    </section>;
};
export default ContactSection;