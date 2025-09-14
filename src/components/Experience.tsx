import React, { useState } from "react";
import { experiences } from "../data/experiences";
import { useLanguage } from "../contexts/LanguageContext";
import {
  MapPin,
  Calendar,
  ExternalLink,
  Briefcase,
  ChevronRight,
  Star,
  Zap,
  Code,
} from "lucide-react";

export default function Experience() {
  const { t } = useLanguage();
  const [selectedExperience, setSelectedExperience] = useState(0);
  const currentExperience = experiences[selectedExperience];

  return (
    <section id="experience" className="py-20 relative">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/30 to-black"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(139,92,246,0.1),transparent_70%)]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
            {t("experience.title")}
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-purple-400 to-blue-500 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {t("experience.subtitle")}
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Tabs Navigation */}
          <div className="lg:col-span-1">
            <div className="space-y-4">
              {experiences.map((exp, index) => (
                <button
                  key={exp.id}
                  onClick={() => setSelectedExperience(index)}
                  className={`w-full text-left p-6 rounded-xl border transition-all duration-300 group ${
                    selectedExperience === index
                      ? `bg-gradient-to-r ${exp.color} border-transparent text-white shadow-2xl`
                      : "bg-gray-900/50 border-gray-700/50 text-gray-300 hover:border-cyan-500/50 hover:bg-gray-800/50"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="flex items-center mb-3">
                        <div
                          className={`p-3 rounded-lg mr-3 flex items-center justify-center ${
                            selectedExperience === index
                              ? "bg-white/20"
                              : "bg-gray-800/50 group-hover:bg-cyan-500/20"
                          }`}
                        >
                          <img
                            src={exp.logo}
                            alt={`${exp.company} logo`}
                            className="w-12 h-12 min-w-[48px] min-h-[48px] object-contain"
                          />
                        </div>

                        <div>
                          <h3 className="font-bold text-sm leading-tight">
                            {exp.company}
                          </h3>
                          <p className="text-xs opacity-70 mt-1">
                            {exp.position}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <span
                          className={`px-2 py-1 text-xs rounded-full ${
                            exp.status === "current"
                              ? "bg-green-500/20 text-green-400"
                              : "bg-gray-500/20 text-gray-400"
                          }`}
                        >
                          {exp.status === "current"
                            ? t("experience.current")
                            : t("experience.completed")}
                        </span>
                      </div>
                    </div>
                    <ChevronRight
                      className={`w-4 h-4 transition-transform ${
                        selectedExperience === index
                          ? "rotate-90"
                          : "group-hover:translate-x-1"
                      }`}
                    />
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Content Area */}
          <div className="lg:col-span-3">
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-700/50 overflow-hidden">
              {/* Gradient Border Effect */}
              <div
                className={`h-1 bg-gradient-to-r ${currentExperience.color}`}
              ></div>

              <div className="p-8">
                {/* Experience Header */}
                <div className="mb-8">
                  <div className="flex items-center mb-6">
                    <img
                      src={currentExperience.logo}
                      alt={`${currentExperience.company} logo`}
                      className="w-16 h-16 rounded-xl object-cover shadow-lg border-2 border-gray-700"
                    />
                    <div className="ml-4">
                      <h3 className="text-3xl font-bold text-white">
                        {currentExperience.position}
                      </h3>
                      <p
                        className={`text-xl font-semibold bg-gradient-to-r ${currentExperience.color} bg-clip-text text-transparent`}
                      >
                        {currentExperience.company}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-4 mb-6">
                    <div className="flex items-center text-gray-300">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>{currentExperience.period}</span>
                    </div>
                    <div className="flex items-center text-gray-300">
                      <MapPin className="w-4 h-4 mr-2" />
                      <span>{currentExperience.location}</span>
                    </div>
                    <div className="flex items-center">
                      <span
                        className={`px-3 py-1 rounded-full text-sm font-medium ${
                          currentExperience.status === "current"
                            ? "bg-green-500/20 text-green-400 border border-green-500/30"
                            : "bg-gray-500/20 text-gray-400 border border-gray-500/30"
                        }`}
                      >
                        {currentExperience.status === "current"
                          ? t("experience.current")
                          : t("experience.completed")}
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-300 leading-relaxed text-lg">
                    {currentExperience.description}
                  </p>
                </div>

                {/* Info Cards */}
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Activities */}
                  <div>
                    <h4 className="font-semibold text-white mb-4 flex items-center">
                      <Star className="w-5 h-5 mr-2 text-yellow-400" />
                      {t("experience.activities")}
                    </h4>
                    <div className="space-y-3">
                      {currentExperience.activities.map((activity, index) => (
                        <div key={index} className="flex items-start group">
                          <div
                            className={`w-2 h-2 bg-gradient-to-r ${currentExperience.color} rounded-full mt-2 mr-3 flex-shrink-0 group-hover:scale-125 transition-transform`}
                          ></div>
                          <span className="text-gray-300 text-sm group-hover:text-white transition-colors">
                            {activity}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="font-semibold text-white mb-4 flex items-center">
                      <Code className="w-5 h-5 mr-2 text-purple-400" />
                      {t("experience.technologies")}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {currentExperience.technologies.map((tech, index) => (
                        <span
                          key={index}
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
}
