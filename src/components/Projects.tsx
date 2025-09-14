import React, { useState } from 'react';
import { ExternalLink, Github, Star, Zap, Code, ChevronRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { projects } from '../data/projects';
import { iconMap } from '../utils/iconMapper';

const Projects = () => {
  const { t, language } = useLanguage();
  const [activeTab, setActiveTab] = useState(0);

  const currentProject = projects[activeTab];
  const CurrentProjectIcon = iconMap[currentProject.icon as keyof typeof iconMap];

  return (
    <section id="projects" className="py-20 relative">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/30 to-black"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(236,72,153,0.1),transparent_70%)]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-pink-400 to-purple-500 bg-clip-text text-transparent">
            {t('projects.title')}
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-pink-400 to-purple-500 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">{t('projects.subtitle')}</p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Tabs Navigation */}
          <div className="lg:col-span-1">
            <div className="space-y-4">
              {projects.map((project, index) => {
                const ProjectIcon = iconMap[project.icon as keyof typeof iconMap];
                return (
                  <button
                    key={index}
                    onClick={() => setActiveTab(index)}
                    className={`w-full text-left p-4 rounded-xl border transition-all duration-300 group ${
                      activeTab === index
                        ? `bg-gradient-to-r ${project.color} border-transparent text-white shadow-2xl`
                        : 'bg-gray-900/50 border-gray-700/50 text-gray-300 hover:border-cyan-500/50 hover:bg-gray-800/50'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <div className="flex items-center mb-2">
                          <div
                            className={`p-1.5 rounded-lg mr-2 ${
                              activeTab === index
                                ? 'bg-white/20'
                                : 'bg-gray-800/50 group-hover:bg-cyan-500/20'
                            }`}
                          >
                            <ProjectIcon className="w-5 h-5" />
                          </div>
                          <div>
                            <h3 className="font-bold text-xs leading-tight">{project.title}</h3>
                            <p className="text-xs opacity-70">{project.type}</p>
                          </div>
                        </div>
                        <div className="flex items-center">
                          <span className="px-2 py-0.5 bg-black/20 text-xs rounded-full">{project.category}</span>
                        </div>
                      </div>
                      <ChevronRight
                        className={`w-3 h-3 transition-transform ${
                          activeTab === index ? 'rotate-90' : 'group-hover:translate-x-1'
                        }`}
                      />
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Content Area */}
          <div className="lg:col-span-3">
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-700/50 overflow-hidden">
              {/* Gradient Border Effect */}
              <div className={`h-1 bg-gradient-to-r ${currentProject.color}`}></div>

              <div className="p-8">
                {/* Project Header */}
                <div className="mb-8">
                  {/* Project Image */}
                  <div className="relative group mb-6">
                    <div className="relative overflow-hidden rounded-2xl">
                      <img
                        src={currentProject.image}
                        alt={currentProject.title}
                        className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      {/* Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                      {/* Project Icon */}
                      <div className={`absolute top-4 left-4 p-3 bg-gradient-to-r ${currentProject.color} rounded-xl shadow-2xl`}>
                        <CurrentProjectIcon className="w-8 h-8" />
                      </div>

                      {/* Category Badge */}
                      <div className="absolute top-4 right-4 px-3 py-1 bg-black/50 backdrop-blur-sm text-white text-sm font-semibold rounded-full border border-white/20">
                        {currentProject.category}
                      </div>

                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                        <div className="flex space-x-3">
                          <a
                            href={currentProject.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`px-4 py-2 bg-gradient-to-r ${currentProject.color} text-white rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all flex items-center text-sm`}
                          >
                            <ExternalLink className="w-4 h-4 mr-1" />
                            Demo
                          </a>
                          <a
                            href={currentProject.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-4 py-2 bg-white/10 backdrop-blur-sm text-white rounded-lg font-semibold hover:bg-white/20 transition-all flex items-center text-sm"
                          >
                            <Github className="w-4 h-4 mr-1" />
                            Código
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Project Info */}
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">{currentProject.title}</h3>
                      <p className="text-gray-300 mb-4">{currentProject.description}</p>
                    </div>

                    {/* Highlights */}
                    <div>
                      <h4 className="font-semibold text-white mb-2 flex items-center">
                        <Zap className="w-5 h-5 mr-2 text-cyan-400" />
                        {language === 'pt' ? 'Principais Destaques' : 'Key Highlights'}
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {currentProject.highlights.map((highlight, idx) => (
                          <span
                            key={idx}
                            className={`px-3 py-1 bg-gradient-to-r ${currentProject.color} text-white rounded-full text-sm font-medium hover:shadow-lg transform hover:scale-105 transition-all`}
                          >
                            {highlight}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-wrap gap-4">
                      <a
                        href={currentProject.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center px-6 py-3 bg-gradient-to-r ${currentProject.color} text-white rounded-xl font-semibold hover:shadow-2xl transform hover:scale-105 transition-all`}
                      >
                        <ExternalLink className="w-5 h-5 mr-2" />
                        {language === 'pt' ? 'Ver Demonstração' : 'View Demo'}
                      </a>
                      <a
                        href={currentProject.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-6 py-3 border-2 border-gray-600 text-gray-300 rounded-xl font-semibold hover:border-cyan-500 hover:text-cyan-400 hover:bg-cyan-500/10 transition-all"
                      >
                        <Github className="w-5 h-5 mr-2" />
                        {language === 'pt' ? 'Código Fonte' : 'Source Code'}
                      </a>
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mt-6">
                  {/* Key Features */}
                  <div>
                    <h4 className="font-semibold text-white mb-4 flex items-center">
                      <Star className="w-5 h-5 mr-2 text-yellow-400" />
                      {language === 'pt' ? 'Funcionalidades Principais' : 'Key Features'}
                    </h4>
                    <div className="space-y-3">
                      {currentProject.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start group">
                          <div
                            className={`w-2 h-2 bg-gradient-to-r ${currentProject.color} rounded-full mt-2 mr-3 flex-shrink-0 group-hover:scale-125 transition-transform`}
                          ></div>
                          <span className="text-gray-300 text-sm group-hover:text-white transition-colors">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="font-semibold text-white mb-4 flex items-center">
                      <Code className="w-5 h-5 mr-2 text-purple-400" />
                      {language === 'pt' ? 'Stack Tecnológico' : 'Tech Stack'}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {currentProject.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-gray-800/50 text-gray-300 rounded-full text-sm font-medium border border-gray-700/50 hover:border-cyan-500/50 hover:text-cyan-400 transition-all"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
