import { Heart, Code } from 'lucide-react';
const Footer = () => {
  const currentYear = new Date().getFullYear();
  return <footer className="relative overflow-hidden py-12 border-t border-primary/20">
      {/* Animated Grid Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
        backgroundImage: `
            linear-gradient(90deg, hsl(195 100% 50% / 0.3) 1px, transparent 1px),
            linear-gradient(180deg, hsl(195 100% 50% / 0.3) 1px, transparent 1px)
          `,
        backgroundSize: '50px 50px',
        animation: 'float 6s ease-in-out infinite'
      }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center">
          
          {/* Logo */}
          <div className="mb-6">
            <h3 className="text-2xl font-orbitron font-bold bg-gradient-cyber bg-clip-text text-transparent">Goli Vignesh</h3>
            <p className="text-muted-foreground font-rajdhani mt-2">It does not matter how slowly you go so long as you do not stop</p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            {[{
            name: 'About',
            href: '#about'
          }, {
            name: 'Skills',
            href: '#skills'
          }, {
            name: 'Education',
            href: '#education'
          }, {
            name: 'Contact',
            href: '#contact'
          }].map(link => <button key={link.name} onClick={() => {
            const element = document.querySelector(link.href);
            if (element) element.scrollIntoView({
              behavior: 'smooth'
            });
          }} className="text-muted-foreground hover:text-primary transition-colors duration-300 font-rajdhani">
                {link.name}
              </button>)}
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-gradient-cyber mb-6"></div>

          {/* Copyright */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <span>© {currentYear} Goli Vignesh.</span>
              <span>Made with</span>
              <Heart size={16} className="text-red-400 animate-pulse" />
              <span>and</span>
              <Code size={16} className="text-primary animate-pulse" />
            </div>
          </div>

          {/* Fun tagline */}
          <div className="mt-4">
            <p className="text-xs text-muted-foreground/70 font-rajdhani italic">"It does not matter how slowly you go so long as you do not stop"</p>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;