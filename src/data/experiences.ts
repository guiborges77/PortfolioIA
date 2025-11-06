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
    id: "b3",
    company: "B3",
    logo: "https://yt3.googleusercontent.com/3k4_BeTxXa84BidlTyXjtFq4iw4cjH6bL7CHQ4tFfQLlz825fx_fqouLk86VerBDMEjUhN12IA=s900-c-k-c0x00ffffff-no-rj",
    color: "from-blue-700 to-blue-900",
    positions: [
      {
        role: "Estagiário de Dados e Automação | Riscos de Crédito",
        period: "Dezembro 2025 – Presente",
        location: "Híbrido, São Paulo, SP",
        status: "current",
        description:
          "Atuação na área de Risco de Crédito da B3, desenvolvendo e mantendo rotinas automatizadas em Python e R voltadas ao monitoramento de risco de crédito de bancos, corretoras e demais participantes do mercado. As atividades envolvem o tratamento, integração e análise de dados financeiros e cadastrais provenientes de múltiplas fontes (bancos de dados internos, planilhas e APIs), garantindo a qualidade, consistência e rastreabilidade das informações utilizadas nas métricas de risco.",

        activities: [
          "Desenvolvimento e manutenção de rotinas em Python e R para automação de processos de monitoramento de risco de crédito.",
          "Criação e otimização de pipelines de ETL para extração, transformação e consolidação de dados financeiros e cadastrais.",
          "Migração e refatoração de rotinas legadas (em R e VBA) para Python, com foco em performance e padronização de outputs.",
          "Automação de relatórios e análises de exposição de risco, reduzindo tarefas manuais e aprimorando a eficiência operacional.",
          "Desenvolvimento de dashboards interativos com Streamlit para visualização de indicadores e análise dinâmica de dados de risco.",
          "Análise de indicadores de exposição, solvência e concentração por grupo econômico, apoiando estratégias de mitigação de risco.",
          "Manutenção e atualização de grupos econômicos de investidores, validando vínculos societários e estrutura de conglomerados.",
          "Apoio à área de Prevenção à Lavagem de Dinheiro (PLD) por meio de automação de consultas, cruzamentos e filtros para identificação de movimentações atípicas.",
          "Integração de dados de múltiplas fontes (bancos de dados internos, planilhas e APIs) para construção de bases consolidadas e confiáveis.",
          "Utilização de SQL para consultas e manipulação de grandes volumes de dados em ambientes corporativos.",
        ],

        technologies: [
          "Python", "R", "SQL", "Streamlit", "Excel", "Power BI", "VBA",
        ],
      },
    ],
  },
  {
    id: "safra",
    company: "Banco Safra",
    logo: "https://yt3.googleusercontent.com/W8_SDQithmLmmyYwyNbGGspDouytK3fT4pJczQWL9cGdGFySK-2-Jj07K_3jF4Ap2LuMLkEBT5E=s900-c-k-c0x00ffffff-no-rj",
    color: "from-blue-700 to-blue-900",
    positions: [
      {
        role: "Estagiário de Análise de Dados e Automação | Riscos Corporativos",
        period: "Outubro 2025 – Dezembro 2025",
        location: "Presencial, São Paulo, SP",
        status: "completed",
        description:
          "Atuação na área de Riscos Corporativos da Corretora do Banco Safra, aplicando conhecimentos técnicos para fortalecer o gerenciamento de riscos e otimizar processos operacionais por meio de automações e análise de dados. Foco em eficiência, governança e conformidade regulatória, utilizando Python, VBA, Power Automate e ferramentas de análise de dados.",

        activities: [
          "Criação de automações em Python, VBA e Power Automate, eliminando tarefas repetitivas e reduzindo significativamente o tempo de execução das rotinas operacionais.",
          "Desenvolvimento de dashboards interativos com Streamlit, incluindo um aplicativo interno que permite upload de planilhas e geração de visualizações dinâmicas de risco.",
          "Automatização de relatórios regulatórios e gerenciais, garantindo conformidade com Bacen e CVM e otimizando a geração de informações críticas.",
          "Coleta, tratamento e análise de dados relacionados a risco de mercado, crédito e operacional utilizando Python, Excel e Microsoft Access.",
          "Responsável pela liberação de operações da corretora, assegurando o cumprimento dos limites operacionais definidos pela área de risco.",
          "Criação de análises estatísticas simples para apoiar métricas de risco e embasar a tomada de decisão de gestores.",
          "Contribuição na governança de limites operacionais, aprimorando a mitigação de riscos e a eficiência das rotinas internas.",
          "Aprimoramento contínuo de processos e controles internos, promovendo maior confiabilidade e agilidade nas entregas da área.",
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
        role: "Estagiário de Desenvolvimento de Sistemas",
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
        role: "Estagiário de Desenvolvimento Full Stack",
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
        role: "Suporte Técnico",
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
        technologies: [
          "Windows",
          "Linux",
          "Redes",
          "HelpDesk",
          "Pacote Office",
        ],
      },
    ],
  },
];
