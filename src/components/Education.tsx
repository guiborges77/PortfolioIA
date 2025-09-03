import React, { useState, useRef } from "react";
import {
  GraduationCap,
  Calendar,
  Award,
  ExternalLink,
  BookOpen,
  Trophy,
  ChevronRight,
} from "lucide-react";
import { education, courses } from "../data/education";
import { useLanguage } from "../contexts/LanguageContext";

const Education = () => {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      id: "education",
      label: t("education.tabs.education"),
      icon: <BookOpen className="w-5 h-5" />,
      color: "from-green-400 to-blue-500",
    },
    {
      id: "courses",
      label: t("education.tabs.courses"),
      icon: <Trophy className="w-5 h-5" />,
      color: "from-yellow-400 to-orange-500",
    },
  ];

  // Ref para o scroll de cursos
  const scrollRef = useRef<HTMLDivElement>(null);
  let isDown = false;
  let startX = 0;
  let scrollLeft = 0;

  const onMouseDown = (e: React.MouseEvent) => {
    isDown = true;
    startX = e.pageX - (scrollRef.current?.offsetLeft || 0);
    scrollLeft = scrollRef.current?.scrollLeft || 0;
  };
  const onMouseLeave = () => (isDown = false);
  const onMouseUp = () => (isDown = false);
  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - (scrollRef.current?.offsetLeft || 0);
    const walk = (x - startX) * 2; // Ajuste a velocidade do scroll
    if (scrollRef.current) scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <section id="education" className="py-20 relative">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/30 to-black"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(34,197,94,0.1),transparent_70%)]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
            {t("education.title")}
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-green-400 to-blue-500 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {t("education.subtitle")}
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Tabs Navigation */}
          <div className="lg:col-span-1">
            <div className="space-y-4">
              {tabs.map((tab, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTab(index)}
                  className={`w-full text-left p-6 rounded-xl border transition-all duration-300 group ${
                    activeTab === index
                      ? `bg-gradient-to-r ${tab.color} border-transparent text-white shadow-2xl`
                      : "bg-gray-900/50 border-gray-700/50 text-gray-300 hover:border-cyan-500/50 hover:bg-gray-800/50"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div
                        className={`p-2 rounded-lg mr-3 ${
                          activeTab === index
                            ? "bg-white/20"
                            : "bg-gray-800/50 group-hover:bg-cyan-500/20"
                        }`}
                      >
                        {tab.icon}
                      </div>
                      <div>
                        <h3 className="font-bold text-sm">{tab.label}</h3>
                        <p className="text-xs opacity-70 mt-1">
                          {index === 0 ? "2 Graduações" : "16+ Certificações"}
                        </p>
                      </div>
                    </div>
                    <ChevronRight
                      className={`w-4 h-4 transition-transform ${
                        activeTab === index
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
                className={`h-1 bg-gradient-to-r ${tabs[activeTab].color}`}
              ></div>

              <div className="p-8">
                {activeTab === 0 ? (
                  /* Formação Acadêmica */
                  <div>
                    <div className="flex items-center mb-8">
                      <BookOpen className="w-8 h-8 text-green-400 mr-3" />
                      <h3 className="text-3xl font-bold text-white">
                        {t("education.tabs.education")}
                      </h3>
                    </div>

                    <div className="space-y-8">
                      {education.map((edu, index) => (
                        <div
                          key={index}
                          className="group relative bg-gray-800/30 backdrop-blur-sm rounded-2xl border border-gray-700/50 hover:border-green-500/50 transition-all duration-500 overflow-hidden"
                        >
                          {/* Progress Bar */}
                          <div className="absolute top-0 left-0 h-1 bg-gray-700">
                            <div
                              className={`h-full bg-gradient-to-r ${edu.color} transition-all duration-1000`}
                              style={{ width: `${edu.progress}%` }}
                            ></div>
                          </div>

                          {/* Gradient Overlay */}
                          <div
                            className={`absolute inset-0 bg-gradient-to-r ${edu.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                          ></div>

                          <div className="p-6 relative z-10">
                            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                              <div className="flex-1">
                                <h4 className="text-2xl font-bold text-white mb-2">
                                  {edu.degree}
                                </h4>
                                <p
                                  className={`text-lg font-semibold mb-2 bg-gradient-to-r ${edu.color} bg-clip-text text-transparent`}
                                >
                                  {edu.institution}
                                </p>
                                <p className="text-gray-300 mb-4">
                                  {edu.description}
                                </p>
                              </div>

                              <div className="lg:ml-8 mt-4 lg:mt-0 space-y-3">
                                <div className="flex items-center text-gray-400">
                                  <Calendar className="w-4 h-4 mr-2" />
                                  <span>{edu.period}</span>
                                </div>
                                <div className="flex items-center">
                                  <GraduationCap className="w-4 h-4 mr-2" />
                                  <span
                                    className={`font-semibold ${
                                      edu.status === "Concluído" ||
                                      edu.status === "Completed"
                                        ? "text-green-400"
                                        : "text-blue-400"
                                    }`}
                                  >
                                    {edu.status}
                                  </span>
                                </div>
                                <div className="text-sm text-gray-400">
                                  {t("education.progress")}: {edu.progress}%
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : (
                  /* Cursos e Certificações */
                  <div>
                    <div className="flex items-center mb-8">
                      <Trophy className="w-8 h-8 text-yellow-400 mr-3" />
                      <h3 className="text-3xl font-bold text-white">
                        {t("education.tabs.courses")}
                      </h3>
                    </div>

                    {/* Scroll horizontal com drag no desktop */}
                    <div
                      ref={scrollRef}
                      className="overflow-x-auto scrollbar-thin scrollbar-thumb-cyan-500 scrollbar-track-gray-700/50 scroll-snap-x mandatory cursor-grab"
                      onMouseDown={onMouseDown}
                      onMouseLeave={onMouseLeave}
                      onMouseUp={onMouseUp}
                      onMouseMove={onMouseMove}
                    >
                      <div className="flex gap-6 pb-4 min-w-max">
                        {courses.map((course, index) => (
                          <div
                            key={index}
                            className="scroll-snap-start group relative bg-gray-800/30 backdrop-blur-sm rounded-2xl border border-gray-700/50 hover:border-cyan-500/50 hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-300 overflow-hidden flex-shrink-0 w-80"
                          >
                            {/* Gradient Overlay */}
                            <div
                              className={`absolute inset-0 bg-gradient-to-br ${course.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                            ></div>

                            <div className="p-6 relative z-10">
                              <div className="flex items-start justify-between mb-4">
                                <div className="flex-1">
                                  <h4 className="font-bold text-white mb-2 text-lg">
                                    {course.title}
                                  </h4>
                                  <p
                                    className={`font-medium mb-2 bg-gradient-to-r ${course.color} bg-clip-text text-transparent`}
                                  >
                                    {course.institution}
                                  </p>
                                  <span className="inline-flex items-center px-3 py-1 bg-gray-800/50 text-gray-300 text-xs rounded-full border border-gray-700/50">
                                    <Award className="w-3 h-3 mr-1" />
                                    {course.type}
                                  </span>
                                </div>
                                <button className="text-cyan-400 hover:text-cyan-300 transition-colors group-hover:scale-110 transform duration-300">
                                  <ExternalLink className="w-5 h-5" />
                                </button>
                              </div>

                              <div className="flex flex-wrap gap-2">
                                {course.skills.map((skill, idx) => (
                                  <span
                                    key={idx}
                                    className="px-3 py-1 bg-gray-800/50 text-gray-300 text-xs rounded-full font-medium border border-gray-700/50 hover:border-cyan-500/50 hover:text-cyan-400 transition-all"
                                  >
                                    {skill}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
