import React, { useEffect, useState } from 'react';
import { ArrowDown, Download, Sparkles, Code, Database, Zap } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Hero = () => {
  const { t } = useLanguage();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const floatingIcons = [
    { Icon: Code, delay: 0, position: 'top-1/4 left-1/4' },
    { Icon: Database, delay: 1000, position: 'top-1/3 right-1/4' },
    { Icon: Zap, delay: 2000, position: 'bottom-1/3 left-1/3' },
    { Icon: Sparkles, delay: 3000, position: 'bottom-1/4 right-1/3' },
  ];

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.1)_1px,transparent_1px)] bg-[size:50px_50px] animate-pulse"></div>
        
        {/* Floating Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full mix-blend-multiply filter blur-3xl animate-float"></div>
        <div className="absolute top-1/2 right-1/4 w-80 h-80 bg-purple-500/20 rounded-full mix-blend-multiply filter blur-3xl animate-float-delayed"></div>
        <div className="absolute bottom-1/4 left-1/2 w-72 h-72 bg-pink-500/20 rounded-full mix-blend-multiply filter blur-3xl animate-float-slow"></div>
        
        {/* Mouse Follower */}
        <div 
          className="absolute w-96 h-96 bg-gradient-radial from-cyan-500/10 to-transparent rounded-full pointer-events-none transition-all duration-300 ease-out"
          style={{
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
          }}
        ></div>
      </div>

      {/* Floating Tech Icons */}
      {floatingIcons.map(({ Icon, delay, position }, index) => (
        <div
          key={index}
          className={`absolute ${position} text-cyan-400/30 animate-float-icon`}
          style={{ animationDelay: `${delay}ms` }}
        >
          <Icon size={32} />
        </div>
      ))}

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="space-y-8 animate-fade-in-up">
          {/* Main Title */}
          <div className="space-y-4">
            <h1 className="text-6xl md:text-8xl font-black mb-6 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient-x">
              {t('hero.title')}
            </h1>
            <div className="flex items-center justify-center space-x-4 text-xl md:text-2xl text-gray-300">
              <span className="px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full border border-cyan-500/30 backdrop-blur-sm">
                {t('hero.subtitle1')}
              </span>
              <span className="text-cyan-400">•</span>
              <span className="px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full border border-purple-500/30 backdrop-blur-sm">
                {t('hero.subtitle2')}
              </span>
            </div>
          </div>

          {/* Description */}
          <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            {t('hero.description')}
          </p>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-400">3+</div>
              <div className="text-sm text-gray-400">{t('hero.stats.experience')}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400">15+</div>
              <div className="text-sm text-gray-400">{t('hero.stats.projects')}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-pink-400">10+</div>
              <div className="text-sm text-gray-400">{t('hero.stats.technologies')}</div>
            </div>
          </div>

          {/* CTA Buttons */}

<div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
  <button 
    onClick={() => scrollToSection('projects')}
    className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full font-semibold text-white overflow-hidden transition-all hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25"
  >
    <span className="relative z-10">{t('hero.cta.projects')}</span>
    <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
  </button>
  
  <a 
    href="https://drive.google.com/drive/folders/1748GJ6cQZpNVVZnSB7HZ6LPhDmklJyM7?usp=sharing" 
    target="_blank" 
    rel="noopener noreferrer"
    className="group px-8 py-4 border-2 border-cyan-500/50 rounded-full font-semibold text-cyan-400 hover:bg-cyan-500/10 hover:border-cyan-400 transition-all flex items-center gap-2"
  >
    <Download size={20} />
    {t('hero.cta.cv')}
    <div className="absolute inset-0 bg-cyan-500/5 rounded-full scale-0 group-hover:scale-100 transition-transform"></div>
  </a>
</div>

        </div>

        {/* Scroll Indicator */}
        <button
          onClick={() => scrollToSection('about')}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-cyan-400/70 hover:text-cyan-400 transition-colors animate-bounce-slow"
        >
          <ArrowDown size={32} />
        </button>
      </div>
    </section>
  );
};

export default Hero;