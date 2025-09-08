import React from 'react';
import { Quote, Star, MessageCircle } from 'lucide-react';
import { testimonials } from '../data/testimonials';
import { useLanguage } from '../contexts/LanguageContext';

const Testimonials = () => {
  const { t, language } = useLanguage();

  return (
    <section id="testimonials" className="py-20 relative">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/30 to-black"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.1),transparent_70%)]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent">
            {t('testimonials.title')}
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-400 to-cyan-500 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto flex items-center justify-center">
            <MessageCircle className="w-6 h-6 mr-2 text-cyan-400" />
            {t('testimonials.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => {
            const CardContent = (
              <div className="group relative bg-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-500 overflow-hidden cursor-pointer flex flex-col h-full">
                
                {/* Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${testimonial.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                
                {/* Quote Icon */}
                <div className="absolute top-6 right-6 text-cyan-400/20 group-hover:text-cyan-400/40 transition-colors">
                  <Quote className="w-16 h-16" />
                </div>

                <div className="p-8 relative flex flex-col h-full z-10">
                  {/* Rating */}
                  <div className="flex items-center mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 text-yellow-400 fill-current mr-1"
                      />
                    ))}
                    <span className="ml-2 text-gray-400 text-sm">({testimonial.rating}/5)</span>
                  </div>

                  {/* Content */}
                  <blockquote className="text-gray-300 mb-8 leading-relaxed italic text-lg group-hover:text-white transition-colors">
                    "{testimonial.content}"
                  </blockquote>

                  {/* Author */}
                  <div className="flex items-center">
                    <div className="relative">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-16 h-16 rounded-full object-cover border-2 border-gray-700 group-hover:border-cyan-500 transition-colors"
                      />
                      <div className={`absolute inset-0 rounded-full bg-gradient-to-r ${testimonial.color} opacity-0 group-hover:opacity-20 transition-opacity`}></div>
                    </div>
                    <div className="ml-4">
                      <h4 className="font-bold text-white text-lg">{testimonial.name}</h4>
                      <p className={`font-medium bg-gradient-to-r ${testimonial.color} bg-clip-text text-transparent`}>
                        {testimonial.role}
                      </p>
                      <p className="text-gray-400 text-sm">{testimonial.company}</p>
                    </div>
                  </div>
                </div>

                {/* Animated Border */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${testimonial.color} opacity-20 animate-pulse`}></div>
                </div>
              </div>
            );

            return testimonial.link ? (
              <a
                key={index}
                href={testimonial.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                {CardContent}
              </a>
            ) : (
              <div key={index}>{CardContent}</div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-2xl border border-cyan-500/20 backdrop-blur-sm">
            <MessageCircle className="w-6 h-6 text-cyan-400 mr-3" />
            <span className="text-gray-300">
              {language === 'pt' ? 'Interessado em trabalhar comigo?' : 'Interested in working with me?'}
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-cyan-400 hover:text-cyan-300 font-semibold ml-2 transition-colors"
              >
                {language === 'pt' ? 'Entre em contato →' : 'Get in touch →'}
              </button>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
