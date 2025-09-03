export interface Experience {
  id: string;
  company: string;
  logo: string;
  position: string;
  period: string;
  location: string;
  status: 'current' | 'completed';
  description: string;
  activities: string[];
  technologies: string[];
  color: string;
}

export const experiences: Experience[] = [
  {
    id: 'vivo',
    company: "VIVO Telefônica",
    logo: "https://i.pinimg.com/736x/fd/bd/9f/fdbd9f61b5c3d7735faabcb3cd84c9f7.jpg",
    position: "Desenvolvedor Full Stack",
    period: "Agosto 2024 – Presente",
    location: "São Paulo, SP",
    status: "current",
    description: "Desenvolvimento e manutenção de funcionalidades back-end (PHP, MySQL, Angular), integração de sistemas legados e implantação em produção na Azure, além de criação de automações e robôs com SQL, Python e Power Automate para aumentar eficiência.",
    activities: [
      "Desenvolvimento e manutenção de funcionalidades no back-end da plataforma SGA, utilizando PHP, MySQL e Angular.",
      "Criação de automações e robôs com SQL, Python e Power Automate, reduzindo tarefas manuais e aumentando a eficiência dos fluxos internos.",
      "Análise e tratamento de dados com Excel, Power Query e SQL, estruturando bases para relatórios e insights estratégicos.",
      "Construção de dashboards interativos no Power BI, acompanhando indicadores de performance e apoiando a tomada de decisão.",
      "Participação em projetos de otimização de processos, com foco em eficiência operacional e redução de retrabalho."
    ],
    technologies: ["PHP", "Angular", "MySQL", "Excel", "Python", "Docker", "Azure"],
    color: "from-purple-500 to-blue-600"
  },
  {
    id: 'dsop',
    company: "DSOP Educação Financeira",
    logo: "https://dsop.com.br/wp-content/uploads/2025/02/thumb-dsop.png",
    position: "Desenvolvedor Web",
    period: "Outubro 2023 – Julho 2024",
    location: "São Paulo, SP",
    status: "completed",
    description: "Desenvolvimento de soluções web para educação financeira, criando interfaces intuitivas e funcionais.",
    activities: [
      "Participei de uma construção de um sistema CRM do zero.",
      "Desenvolvimento de landing pages responsivas",
      "Implementação de formulários dinâmicos",
      "Integração com sistemas de gestão de conteúdo",
      "Otimização SEO e performance",
      "Manutenção e atualizações de sistemas existentes"
    ],
    technologies: ["HTML5", "CSS3", "JavaScript", "PHP", "MySQL", "Bootstrap", "jQuery"],
    color: "from-orange-500 to-red-500"
  },
  {
    id: 'sepaco',
    company: "Hospital Sepaco",
    logo: "https://pbs.twimg.com/profile_images/1022496448049545219/vK7N4IwR_400x400.jpg",
    position: "Estagiário em Análise de Dados",
    period: "Dezembro 2021 – Julho 2023",
    location: "Presencial",
    status: "completed",
    description: "Análise de dados hospitalares, criação de dashboards e relatórios gerenciais para tomada de decisões estratégicas na área da saúde.",
    activities: [
      "Criação de dashboards interativos no Power BI",
      "Análise de métricas hospitalares e indicadores de saúde",
      "Desenvolvimento de relatórios automatizados",
      "Limpeza e tratamento de dados com Python",
      "Apresentação de insights para stakeholders"
    ],
    technologies: ["Power BI", "Excel", "Python", "SQL", "Pandas", "Matplotlib"],
    color: "from-gray-500 to-blue-500"
  }
];