import React, { useState } from "react";
import {
  User,
  Code,
  Database,
  Brain,
  Lightbulb,
  Rocket,
  Monitor,
  Server,
  Cloud,
  BarChart3,
  GitBranch,
  Wrench,
  Globe,
  Layers,
  Zap,
  Settings,
} from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

const technologies = {
    cloud: {
    name: "Cloud & DevOps",
    icon: <Cloud className="w-6 h-6 text-white" />,
    color: "from-orange-500 to-red-500",
    items: ["AWS", "Docker", "Vercel", "Netlify", "GitHub Actions"],
  },
  analytics: {
    name: "Data & Analytics",
    icon: <BarChart3 className="w-6 h-6 text-white" />,
    color: "from-indigo-500 to-purple-500",
    items: ["Python", "Pandas", "NumPy", "Matplotlib", "Power BI", "Excel"],
  },
    database: {
    name: "Database",
    icon: <Database className="w-6 h-6 text-white" />,
    color: "from-purple-500 to-pink-500",
    items: ["MySQL", "PostgreSQL",  "MongoDB", "MS Access", "Supabase"],
  },
  tools: {
    name: "Ferramentas",
    icon: <Wrench className="w-6 h-6 text-white" />,
    color: "from-gray-500 to-slate-500",
    items: ["Git", "VS Code", "Figma", "Postman", "Jira", "Slack"],
  },
  frontend: {
    name: "Frontend",
    icon: <Monitor className="w-6 h-6 text-white" />,
    color: "from-blue-500 to-cyan-500",
    items: [
      "React",
      "TypeScript",
      "Next.js",
      "Tailwind CSS",
      "HTML5",
      "CSS3",
      "JavaScript",
    ],
  },
  backend: {
    name: "Backend",
    icon: <Server className="w-6 h-6 text-white" />,
    color: "from-green-500 to-emerald-500",
    items: ["Node.js", "Python", "Express", "FastAPI", "REST APIs", "GraphQL"],
  },


};

const About = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-20 relative">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/30 to-black"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(34,197,94,0.1),transparent_70%)]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Sobre Mim
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto flex items-center justify-center">
            Base sólida e aprendizado contínuo para excelência técnica
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Tabs Navigation */}
          <div className="lg:col-span-1">
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-700/50 p-6">
              <div className="flex items-center mb-6">
                <User className="w-8 h-8 text-cyan-400 mr-3" />
                <h3 className="text-2xl font-bold text-white">Perfil</h3>
              </div>
              <p className="text-gray-300 leading-relaxed mb-6">
                Com mais de 3 anos de experiência em tecnologia, desenvolvo
                soluções em dados e automação que apoiam a tomada de decisão e a
                mitigação de riscos. Atuo com Python, SQL, Power BI, Excel,
                Access e VBA.
              </p>
              <div className="space-y-3">
                <div className="flex items-center text-gray-300">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                  <span className="text-sm">Proatividade e empenho</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                  <span className="text-sm">Aprendizado contínuo</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <div className="w-2 h-2 bg-pink-400 rounded-full mr-3"></div>
                  <span className="text-sm">
                    Comunicação & Trabalho em equipe
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Content Area */}
          <div className="lg:col-span-3">
            {/* Tecnologias & Ferramentas */}
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-700/50 overflow-hidden">
              <div className="h-1 bg-gradient-to-r from-cyan-400 to-purple-500"></div>
              <div className="p-8">
                <div className="flex items-center mb-8">
                  <Code className="w-8 h-8 text-cyan-400 mr-3" />
                  <h3 className="text-3xl font-bold text-white">
                    Tecnologias & Ferramentas
                  </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                  {Object.entries(technologies).map(([key, category]) => (
                    <div
                      key={key}
                      className="group relative bg-gray-800/30 backdrop-blur-sm rounded-2xl border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 overflow-hidden"
                    >
                      {/* Gradient Overlay */}
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                      ></div>

                      <div className="p-6 relative z-10">
                        <div className="flex items-center mb-4">
                          <div
                            className={`p-3 rounded-xl bg-gradient-to-r ${category.color} mr-4`}
                          >
                            {category.icon}
                          </div>
                          <h4 className="font-bold text-white text-lg">
                            {category.name}
                          </h4>
                        </div>

                        <div className="flex flex-wrap gap-2">
                          {category.items.map((tech, idx) => (
                            <span
                              key={idx}
                              className="px-3 py-1 bg-gray-800/50 text-gray-300 text-sm rounded-full font-medium border border-gray-700/50 hover:border-cyan-500/50 hover:text-cyan-400 hover:scale-105 transition-all"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
