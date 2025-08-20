import { useState } from 'react';
import { Button } from './ui/button';
import { content } from '@/lib/content';

export default function HeroSplit() {
  const [hoveredSide, setHoveredSide] = useState<'business' | 'dev' | null>(null);

  return (
    <section className="min-h-screen flex relative overflow-hidden">
      {/* Business Side */}
      <div 
        className={`split-business relative flex-1 flex items-center justify-center transition-all duration-700 ease-out ${
          hoveredSide === 'business' ? 'flex-[1.2]' : hoveredSide === 'dev' ? 'flex-[0.8]' : 'flex-1'
        }`}
        onMouseEnter={() => setHoveredSide('business')}
        onMouseLeave={() => setHoveredSide(null)}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-business-primary via-business-primary/95 to-business-secondary"></div>
        <div className="relative z-10 text-center px-8 max-w-lg">
          <div className="space-y-6">
            <div className="mb-6">
              <img 
                src="/lovable-uploads/c66a1938-3fc8-4d7d-96de-c7ddbc167934.png" 
                alt="Brad Stewart - Professional headshot" 
                className="w-32 h-32 md:w-40 md:h-40 rounded-full mx-auto object-cover border-4 border-white/30 shadow-lg"
              />
            </div>
            <div className="space-y-2">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Business Solutions
              </h1>
              <h2 className="text-2xl md:text-3xl font-medium text-business-primary-foreground/90">
                Manager
              </h2>
            </div>
            <p className="text-lg text-business-primary-foreground/80 leading-relaxed">
              Designing efficient operating systems for teams. Strategic alignment, process optimization, and measurable outcomes.
            </p>
            <div className="pt-4">
              <Button 
                variant="outline" 
                size="lg"
                className="btn-outline-business text-lg px-8 py-4 bg-white/10 backdrop-blur-sm hover:bg-white hover:text-business-primary border-white/30 hover:border-white"
              >
                View Business Impact
              </Button>
            </div>
          </div>
        </div>
        {/* Decorative elements */}
        <div className="absolute top-20 right-20 w-32 h-32 border border-white/20 rounded-full opacity-30"></div>
        <div className="absolute bottom-32 left-16 w-24 h-24 border border-white/10 rounded-full opacity-40"></div>
      </div>

      {/* Divider */}
      <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
        <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center">
          <div className="text-2xl font-bold text-white">↔</div>
        </div>
      </div>

      {/* Developer Side */}
      <div 
        className={`split-dev relative flex-1 flex items-center justify-center transition-all duration-700 ease-out ${
          hoveredSide === 'dev' ? 'flex-[1.2]' : hoveredSide === 'business' ? 'flex-[0.8]' : 'flex-1'
        }`}
        onMouseEnter={() => setHoveredSide('dev')}
        onMouseLeave={() => setHoveredSide(null)}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-dev-primary via-dev-primary/95 to-dev-secondary"></div>
        <div className="relative z-10 text-center px-8 max-w-lg">
          <div className="space-y-6">
            <div className="mb-6">
              <img 
                src="/lovable-uploads/95084d1d-6e6d-4d1a-ace1-e24e5bd97af9.png" 
                alt="Brad Stewart - Casual headshot" 
                className="w-32 h-32 md:w-40 md:h-40 rounded-full mx-auto object-cover border-4 border-dev-accent/50 shadow-lg"
              />
            </div>
            <div className="space-y-2">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Programmer
              </h1>
              <h2 className="text-2xl md:text-3xl font-medium text-dev-accent">
                & Developer
              </h2>
            </div>
            <p className="text-lg text-dev-primary-foreground/80 leading-relaxed">
              Building reliable, maintainable software. Dashboards, automations, and integrations that turn data into decisions.
            </p>
            <div className="pt-4">
              <Button 
                variant="outline" 
                size="lg"
                className="btn-outline-dev text-lg px-8 py-4 bg-dev-accent/10 backdrop-blur-sm hover:bg-dev-accent hover:text-white border-dev-accent/50 hover:border-dev-accent"
              >
                View Technical Work
              </Button>
            </div>
          </div>
        </div>
        {/* Decorative elements */}
        <div className="absolute top-32 left-20 w-28 h-28 border border-dev-accent/30 rounded-lg opacity-40 rotate-12"></div>
        <div className="absolute bottom-24 right-16 w-20 h-20 border border-dev-accent/20 rounded-lg opacity-50 -rotate-6"></div>
      </div>

      {/* Central Content - Mobile */}
      <div className="absolute inset-0 md:hidden bg-gradient-hero flex items-center justify-center">
        <div className="text-center px-8 text-white">
          <h1 className="text-4xl font-bold mb-2">{content.hero.name}</h1>
          <h2 className="text-xl mb-4 text-white/90">{content.hero.tagline}</h2>
          <p className="text-lg mb-8 text-white/80 leading-relaxed max-w-md">{content.hero.subtext}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {content.hero.ctas.map((cta, index) => (
              <Button 
                key={index}
                variant="outline" 
                size="lg"
                className="bg-white/10 border-white/30 text-white hover:bg-white hover:text-gray-900"
                asChild
              >
                <a href={cta.href}>{cta.label}</a>
              </Button>
            ))}
          </div>
        </div>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:block absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex gap-4">
          {content.hero.ctas.map((cta, index) => (
            <Button 
              key={index}
              variant="outline" 
              className="bg-white/10 backdrop-blur-md border-white/30 text-white hover:bg-white hover:text-gray-900"
              asChild
            >
              <a href={cta.href}>{cta.label}</a>
            </Button>
          ))}
        </div>
      </div>
    </section>
  );
}