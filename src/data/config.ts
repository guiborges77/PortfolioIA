// Configurações gerais do portfólio
export const config = {
  // Links para download do CV
  cvLinks: {
    pt: '/cv-guilherme-borges-pt.pdf',
    en: '/cv-guilherme-borges-en.pdf'
  },
  
  // Configurações do formulário de contato
  contact: {
    email: 'guilherme.borgesjob@gmail.com',
    // Configurações de segurança do formulário
    security: {
      enableRateLimit: true,
      maxSubmissionsPerHour: 3,
      enableDuplicateCheck: true
    }
  },
  
  // Informações pessoais
  personal: {
    name: 'Guilherme Borges',
    phone: '+55 (11) 9****-****', // Número mascarado para privacidade
    fullPhone: '+55 (11) 95285-6495', // Número completo para links
    location: 'São Paulo, SP - Brasil',
    email: 'guilherme.borgesjob@gmail.com'
  },
  
  // Links das redes sociais
  social: {
    github: 'https://github.com/guiborges77',
    linkedin: 'https://www.linkedin.com/in/guiborges7/',
    email: 'mailto:guilherme.borgesjob@gmail.com'
  }
};