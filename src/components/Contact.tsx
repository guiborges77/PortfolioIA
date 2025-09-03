import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Download } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { config } from '../data/config';

const Contact = () => {
  const { t, language } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [lastSubmission, setLastSubmission] = useState<number>(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Verificação de rate limiting
    const now = Date.now();
    const hourInMs = 60 * 60 * 1000;
    
    if (config.contact.security.enableRateLimit && now - lastSubmission < hourInMs / config.contact.security.maxSubmissionsPerHour) {
      alert(language === 'pt' ? 'Aguarde antes de enviar outra mensagem.' : 'Please wait before sending another message.');
      return;
    }
    
    setIsSubmitting(true);
    
    // Simular envio do formulário
    setTimeout(() => {
      // Criar link mailto com formatação
      const subject = encodeURIComponent(formData.subject);
      const body = encodeURIComponent(
        `Nome Completo: ${formData.name}\n` +
        `Email: ${formData.email}\n` +
        `Assunto: ${formData.subject}\n\n` +
        `Mensagem:\n${formData.message}`
      );
      
      const mailtoLink = `mailto:${config.contact.email}?subject=${subject}&body=${body}`;
      window.open(mailtoLink);
      
      setLastSubmission(now);
      setIsSubmitting(false);
      alert(language === 'pt' ? 'Mensagem preparada! Seu cliente de email será aberto.' : 'Message prepared! Your email client will open.');
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1000);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: t('contact.email'),
      content: config.personal.email,
      action: `mailto:${config.personal.email}`
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: t('contact.phone'),
      content: config.personal.phone,
      action: `tel:${config.personal.fullPhone.replace(/\D/g, '')}`
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: t('contact.location'),
      content: config.personal.location,
      action: "#"
    }
  ];

  const socialLinks = [
    {
      icon: <Github className="w-6 h-6" />,
      name: "GitHub",
      url: config.social.github,
      color: "hover:text-gray-900"
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      name: "LinkedIn",
      url: config.social.linkedin,
      color: "hover:text-blue-600"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      name: "Email",
      url: config.social.email,
      color: "hover:text-red-500"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">{t('contact.title')}</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
          <p className="mt-4 text-xl text-gray-600">
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Informações de Contato */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">{t('contact.info')}</h3>
            
            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.action}
                  className="flex items-center p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-all"
                >
                  <div className="text-blue-600 mr-4">
                    {info.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{info.title}</h4>
                    <p className="text-gray-600">{info.content}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Redes Sociais */}
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">{t('contact.social')}</h4>
              <div className="flex space-x-4 mb-8">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 bg-gray-100 rounded-lg text-gray-600 transition-all transform hover:scale-105 ${social.color}`}
                    title={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>

              {/* Botão Download CV */}
              <a 
                href={config.cvLinks[language]}
                download
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transform hover:scale-105 transition-all"
              >
                <Download className="w-5 h-5 mr-2" />
                {t('common.downloadCV')}
              </a>
            </div>
          </div>

          {/* Formulário de Contato */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">{t('contact.form.title')}</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    {t('contact.form.name')}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:outline-none transition-all"
                    placeholder={t('contact.form.placeholders.name')}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    {t('contact.form.email')}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:outline-none transition-all"
                    placeholder={t('contact.form.placeholders.email')}
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  {t('contact.form.subject')}
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:outline-none transition-all"
                  placeholder={t('contact.form.placeholders.subject')}
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  {t('contact.form.message')}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:outline-none transition-all resize-none"
                  placeholder={t('contact.form.placeholders.message')}
                />
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full inline-flex items-center justify-center px-6 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold transition-all ${
                  isSubmitting 
                    ? 'opacity-50 cursor-not-allowed' 
                    : 'hover:from-blue-600 hover:to-purple-700 transform hover:scale-105'
                }`}
              >
                <Send className="w-5 h-5 mr-2" />
                {isSubmitting ? (language === 'pt' ? 'Enviando...' : 'Sending...') : t('contact.form.send')}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;