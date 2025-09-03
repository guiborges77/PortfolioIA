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

  const scrollRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  // Drag desktop
  const handleMouseDown = (e: React.MouseEvent) => {
    isDragging.current = true;
    startX.current = e.pageX - (scrollRef.current?.offsetLeft || 0);
    scrollLeft.current = scrollRef.current?.scrollLeft || 0;
  };
  const handleMouseLeave = () => (isDragging.current = false);
  const handleMouseUp = () => (isDragging.current = false);
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current) return;
    e.preventDefault();
    const x = e.pageX - (scrollRef.current?.offsetLeft || 0);
    const walk = (x - startX.current) * 2;
    if (scrollRef.current)
      scrollRef.current.scrollLeft = scrollLeft.current - walk;
  };

  // Drag mobile (touch)
  const handleTouchStart = (e: React.TouchEvent) => {
    isDragging.current = true;
    startX.current = e.touches[0].pageX - (scrollRef.current?.offsetLeft || 0);
    scrollLeft.current = scrollRef.current?.scrollLeft || 0;
  };
  const handleTouchEnd = () => (isDragging.current = false);
  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging.current) return;
    const x = e.touches[0].pageX - (scrollRef.current?.offsetLeft || 0);
    const walk = (x - startX.current) * 2;
    if (scrollRef.current)
      scrollRef.current.scrollLeft = scrollLeft.current - walk;
  };

  const scrollMobile = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 200; // ajuste conforme a largura do card
      scrollRef.current.scrollLeft +=
        direction === "right" ? scrollAmount : -scrollAmount;
    }
  };

  return (
    <section id="education" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/30 to-black"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(34,197,94,0.1),transparent_70%)]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
          {/* Tabs */}
          <div className="lg:col-span-1 space-y-4">
            <button
              onClick={() => setActiveTab(0)}
              className={`w-full text-left p-6 rounded-xl border transition-all duration-300 group ${
                activeTab === 0
                  ? `bg-gradient-to-r from-green-400 to-blue-500 border-transparent text-white shadow-2xl`
                  : "bg-gray-900/50 border-gray-700/50 text-gray-300 hover:border-cyan-500/50 hover:bg-gray-800/50"
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div
                    className={`p-2 rounded-lg mr-3 ${
                      activeTab === 0
                        ? "bg-white/20"
                        : "bg-gray-800/50 group-hover:bg-cyan-500/20"
                    }`}
                  >
                    <BookOpen className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm">
                      {t("education.tabs.education")}
                    </h3>
                    <p className="text-xs opacity-70 mt-1">
                      2 Graduações
                    </p>
                  </div>
                </div>
                <ChevronRight
                  className={`w-4 h-4 transition-transform ${
                    activeTab === 0
                      ? "rotate-90"
                      : "group-hover:translate-x-1"
                  }`}
                />
              </div>
            </button>
            <button
              onClick={() => setActiveTab(1)}
              className={`w-full text-left p-6 rounded-xl border transition-all duration-300 group ${
                activeTab === 1
                  ? `bg-gradient-to-r from-yellow-400 to-orange-500 border-transparent text-white shadow-2xl`
                  : "bg-gray-900/50 border-gray-700/50 text-gray-300 hover:border-cyan-500/50 hover:bg-gray-800/50"
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div
                    className={`p-2 rounded-lg mr-3 ${
                      activeTab === 1
                        ? "bg-white/20"
                        : "bg-gray-800/50 group-hover:bg-cyan-500/20"
                    }`}
                  >
                    <Trophy className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-sm sm:text-2xl">
                      {t("education.tabs.courses")}
                    </h3>
                    <p className="text-xs opacity-70 mt-1">
                      16+ Certificações
                    </p>
                  </div>
                </div>
                <ChevronRight
                  className={`w-4 h-4 transition-transform ${
                    activeTab === 1
                      ? "rotate-90"
                      : "group-hover:translate-x-1"
                  }`}
                />
              </div>
            </button>
          </div>

          {/* Conteúdo */}
          <div className="lg:col-span-3">
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-700/50 overflow-hidden">
              <div
                className={`h-1 bg-gradient-to-r ${
                  activeTab === 0 ? "from-green-400 to-blue-500" : "from-yellow-400 to-orange-500"
                }`}
              ></div>
              <div className="p-8">
                {activeTab === 0 ? (
                  /* Educação */
                  <div>
                    <div className="flex items-center mb-8">
                      <BookOpen className="w-8 h-8 text-green-400 mr-3" />
                      <h3 className="text-3xl font-bold text-white">
                        {t("education.tabs.education")}
                      </h3>
                    </div>
                    <div className="space-y-8">
                      {education.map((edu, idx) => (
                        <div
                          key={idx}
                          className="group relative bg-gray-800/30 backdrop-blur-sm rounded-2xl border border-gray-700/50 hover:border-green-500/50 transition-all duration-500 overflow-hidden"
                        >
                          <div className="absolute top-0 left-0 h-1 bg-gray-700">
                            <div
                              className={`h-full bg-gradient-to-r ${edu.color} transition-all duration-1000`}
                              style={{ width: `${edu.progress}%` }}
                            ></div>
                          </div>
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
                  /* Cursos */
                  <div>
                    <div className="flex items-center mb-4">
                      <Trophy className="w-8 h-8 text-yellow-400 mr-3" />
                      <h3 className="text-white text-xl lg:text-3xl font-bold sm:text-2xl">
                        {t("education.tabs.courses")}
                      </h3>
                    </div>

                    {/* Scroll + setas mobile */}
                    <div className="relative">
                      {/* Botão anterior - mobile */}
                      <button
                        className="absolute left-0 top-1/2 -translate-y-1/2 z-20 p-2 bg-gray-800/50 text-white rounded-full sm:hidden"
                        onClick={() => scrollMobile("left")}
                      >
                        ‹
                      </button>

                      {/* Container de cursos */}
                      <div
                        ref={scrollRef}
                        className="overflow-x-auto flex gap-4 pb-4 scrollbar-thin scrollbar-thumb-cyan-500 scrollbar-track-gray-700/50"
                        style={{ WebkitOverflowScrolling: "touch" }}
                        onMouseDown={handleMouseDown}
                        onMouseLeave={handleMouseLeave}
                        onMouseUp={handleMouseUp}
                        onMouseMove={handleMouseMove}
                        onTouchStart={handleTouchStart}
                        onTouchEnd={handleTouchEnd}
                        onTouchMove={handleTouchMove}
                      >
                        {courses.map((course, idx) => (
                          <div
                            key={idx}
                            className="flex-shrink-0 w-48 lg:w-48 sm:w-40 scroll-snap-start group relative bg-gray-800/30 backdrop-blur-sm rounded-2xl border border-gray-700/50 hover:border-cyan-500/50 hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-300 overflow-hidden"
                          >
                            <div
                              className={`absolute inset-0 bg-gradient-to-br ${course.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                            ></div>
                            <div className="p-4 relative z-10">
                              <div className="flex items-start justify-between mb-2">
                                <div className="flex-1">
                                  <h4 className="font-bold text-white mb-1 text-sm lg:text-lg sm:text-xs">
                                    {course.title}
                                  </h4>
                                  <p
                                    className={`font-medium mb-1 text-xs sm:text-[10px] bg-gradient-to-r ${course.color} bg-clip-text text-transparent`}
                                  >
                                    {course.institution}
                                  </p>
                                  <span className="inline-flex items-center px-2 py-0.5 bg-gray-800/50 text-gray-300 text-[10px] rounded-full border border-gray-700/50">
                                    <Award className="w-3 h-3 mr-1" />
                                    {course.type}
                                  </span>
                                </div>
                                <a
                                  href={
                                    course.link !== "#"
                                      ? course.link
                                      : undefined
                                  }
                                  target={
                                    course.link !== "#" ? "_blank" : undefined
                                  }
                                  rel="noopener noreferrer"
                                  className={`text-cyan-400 hover:text-cyan-300 transition-colors group-hover:scale-110 transform duration-300 ${
                                    course.link === "#"
                                      ? "cursor-not-allowed opacity-50"
                                      : ""
                                  }`}
                                >
                                  <ExternalLink className="w-5 h-5" />
                                </a>
                              </div>
                              <div className="flex flex-wrap gap-1">
                                {course.skills.map((skill, id) => (
                                  <span
                                    key={id}
                                    className="px-2 py-0.5 bg-gray-800/50 text-gray-300 text-[10px] rounded-full font-medium border border-gray-700/50 hover:border-cyan-500/50 hover:text-cyan-400 transition-all"
                                  >
                                    {skill}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Botão próximo - mobile */}
                      <button
                        className="absolute right-0 top-1/2 -translate-y-1/2 z-20 p-2 bg-gray-800/50 text-white rounded-full sm:hidden"
                        onClick={() => scrollMobile("right")}
                      >
                        ›
                      </button>
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
