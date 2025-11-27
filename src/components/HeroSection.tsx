import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import nabinPhoto from "@/assets/nabin-photo.png";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/20" />
      
      {/* Floating Orbs */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float-delayed" />
      
      {/* Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 max-w-6xl mx-auto">
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border/50 mb-8 animate-fade-in">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span className="text-sm text-muted-foreground">Available for Freelance</span>
            </div>

            {/* Main Heading */}
            <h1 
              className="text-5xl md:text-7xl lg:text-8xl font-display font-bold leading-tight mb-6"
              style={{ animationDelay: '0.2s' }}
            >
              <span className="block animate-slide-up">Hi, I'm</span>
              <span className="block gradient-text animate-slide-up" style={{ animationDelay: '0.3s' }}>
                Nabin
              </span>
            </h1>

            {/* Subtitle */}
            <p 
              className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl animate-fade-in"
              style={{ animationDelay: '0.5s' }}
            >
              A passionate <span className="text-primary">Developer</span> & <span className="text-accent">Designer</span> crafting digital experiences that inspire and innovate.
            </p>

            {/* CTA Buttons */}
            <div 
              className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4 mb-12 animate-fade-in"
              style={{ animationDelay: '0.7s' }}
            >
              <a href="#projects" className="btn-primary">
                View My Work
              </a>
              <a href="#contact" className="btn-outline">
                Get In Touch
              </a>
            </div>

            {/* Social Links */}
            <div 
              className="flex items-center justify-center lg:justify-start gap-6 animate-fade-in"
              style={{ animationDelay: '0.9s' }}
            >
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-secondary/50 border border-border/50 text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300"
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-secondary/50 border border-border/50 text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:nabin@example.com"
                className="p-3 rounded-full bg-secondary/50 border border-border/50 text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Right - Photo */}
          <div className="flex-shrink-0 animate-scale-in" style={{ animationDelay: '0.4s' }}>
            <div className="relative">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-accent/30 rounded-full blur-2xl scale-110" />
              {/* Photo Container */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-primary/30 shadow-2xl">
                <img 
                  src={nabinPhoto} 
                  alt="Nabin - Developer & Designer" 
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative Ring */}
              <div className="absolute inset-0 rounded-full border-2 border-primary/20 scale-110 animate-pulse-glow" />
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <a href="#about" className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
            <span className="text-sm">Scroll Down</span>
            <ArrowDown size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
