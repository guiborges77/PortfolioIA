export interface Position {
  role: string;
  period: string;
  location: string;
  status: "current" | "completed";
  description: string;
  activities: string[];
  technologies: string[];
}

export interface Experience {
  id: string;
  company: string;
  logo: string;
  color: string;
  positions: Position[];
}

export const experiences: Experience[] = [
  {
    id: "safra",
    company: "Banco Safra",
    logo: "https://yt3.googleusercontent.com/W8_SDQithmLmmyYwyNbGGspDouytK3fT4pJczQWL9cGdGFySK-2-Jj07K_3jF4Ap2LuMLkEBT5E=s900-c-k-c0x00ffffff-no-rj",
    color: "from-blue-700 to-blue-900",
    positions: [
      {
        role: "Estagiário em Análise de Dados e Automação (Riscos Corporativos)",
        period: "Setembro 2025 – Presente",
        location: "Presencial, São Paulo, SP",
        status: "current",
        description:
          "Atuação na área de Riscos Corporativos da Corretora do Banco Safra, apoiando na análise e gerenciamento de riscos, elaboração de relatórios regulatórios e automação de processos por meio de Python, Excel/VBA e Access.",
        activities: [
          "Coleta, tratamento e análise de dados de risco de mercado, crédito e operacional da corretora.",
          "Elaboração de relatórios gerenciais e regulatórios, garantindo conformidade com órgãos como Bacen e CVM.",
          "Automação de processos e fluxos de dados utilizando Python e macros em VBA.",
          "Uso de Microsoft Access para consultas e organização de bases de dados relacionadas a risco.",
          "Criação de análises estatísticas simples para apoiar métricas de risco e tomada de decisão.",
          "Apoio à governança e acompanhamento de limites operacionais, contribuindo para a mitigação de riscos.",
        ],
        technologies: ["Excel", "VBA", "Python", "Access", "SQL", "Power BI"],
      },
    ],
  },
  {
    id: "vivo",
    company: "VIVO Telefônica",
    logo: "https://i.pinimg.com/736x/fd/bd/9f/fdbd9f61b5c3d7735faabcb3cd84c9f7.jpg",
    color: "from-purple-500 to-purple-900",
    positions: [
      {
        role: "Desenvolvedor Full Stack - Estágio",
        period: "Agosto 2024 – Junho 2025",
        location: "Híbrido, São Paulo, SP",
        status: "completed",
        description:
          "Desenvolvimento e manutenção de funcionalidades back-end (PHP, MySQL, Angular), integração de sistemas legados e implantação em produção na Azure, além de criação de automações e robôs com SQL, Python e Power Automate para aumentar eficiência.",
        activities: [
          "Desenvolvimento e manutenção de funcionalidades no back-end da plataforma SGA, utilizando PHP, MySQL e Angular.",
          "Criação de automações e robôs com SQL, Python e Power Automate, reduzindo tarefas manuais e aumentando a eficiência dos fluxos internos.",
          "Análise e tratamento de dados com Excel, Power Query e SQL, estruturando bases para relatórios e insights estratégicos.",
          "Construção de dashboards interativos no Power BI, acompanhando indicadores de performance e apoiando a tomada de decisão.",
          "Participação em projetos de otimização de processos, com foco em eficiência operacional e redução de retrabalho.",
        ],
        technologies: [
          "PHP",
          "Angular",
          "MySQL",
          "Excel",
          "Python",
          "Docker",
          "Azure",
          "Power Automate",
          "Power BI",
          "SQL",
        ],
      },
    ],
  },
  {
    id: "dsop",
    company: "DSOP Educação Financeira",
    logo: "https://dsop.com.br/wp-content/uploads/2025/02/thumb-dsop.png",
    color: "from-orange-500 to-red-500",
    positions: [
      {
        role: "Desenvolvedor Web - Estágio",
        period: "Janeiro 2024 – Julho 2024",
        location: "Presencial, São Paulo, SP",
        status: "completed",
        description:
          "Atuação no desenvolvimento e manutenção de páginas web, garantindo usabilidade, performance e experiência do usuário.",
        activities: [
          "Construção de um sistema CRM do zero.",
          "Desenvolvimento de landing pages responsivas.",
          "Implementação de formulários dinâmicos.",
          "Integração com sistemas de gestão de conteúdo.",
          "Otimização SEO e performance.",
          "Manutenção e atualizações de sistemas existentes.",
          "Levantamento de requisitos e criação de soluções para otimização de fluxos internos.",
          "Realização de testes, identificação e correção de bugs.",
          "Documentação técnica de sistemas, processos e fluxos operacionais.",
        ],
        technologies: [
          "HTML5",
          "CSS3",
          "JavaScript",
          "Ruby on Rails",
          "WordPress",
          "Python",
          "PHP",
          "MySQL",
          "Bootstrap",
          "TailwindCSS",
        ],
      },
      {
        role: "Analista de Suporte Técnico",
        period: "Setembro 2023 – Dezembro 2023",
        location: "Presencial, São Paulo, SP",
        status: "completed",
        description:
          "Suporte técnico via HelpDesk (hardware, software e sistemas internos), monitoramento e gestão de chamados técnicos, garantindo SLAs e satisfação dos usuários.",
        activities: [
          "Atendimento e resolução de chamados de TI (hardware, software e rede).",
          "Configuração e manutenção de computadores e impressoras.",
          "Suporte em sistemas internos e ferramentas corporativas.",
          "Gestão de chamados via HelpDesk, garantindo cumprimento de SLAs.",
        ],
        technologies: ["Windows", "Linux", "Redes", "HelpDesk", "Pacote Office"],
      },
    ],
  },
];
