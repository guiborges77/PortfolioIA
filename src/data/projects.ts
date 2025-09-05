export interface Project {
  id: string;
  title: string;
  description: string;
  features: string[];
  technologies: string[];
  highlights: string[];
  icon: string;
  color: string;
  github: string;
  demo: string;
  image: string;
  category: string;
  type: string;
}

export const projects: Project[] = [
{
  "id": "dashboard_liquidez_risco_b3",
  "title": "Dashboard de Liquidez e Risco – B3",
  "description": "O Dashboard de Liquidez e Risco – B3 é uma aplicação interativa que permite analisar a liquidez e o risco de ativos negociados na Bolsa de Valores do Brasil (B3). Ele processa grandes volumes de dados de negociação e apresenta métricas, tabelas e gráficos de forma rápida e visualmente clara.",
  "features": [
    "Carregamento e tratamento de dados: lê arquivos CSV, converte colunas numéricas e filtra dados inválidos",
    "Filtragem de ativos: selecione quais ativos visualizar, com foco nos 10 ativos mais negociados",
    "Métricas resumidas: quantidade total, volume total, preço mínimo, preço máximo e preço médio em BRL (R$)",
    "Tabelas detalhadas: resumo por ativo com valores formatados de forma legível",
    "Gráficos interativos: volume total e preço médio por ativo",
    "Cache inteligente para acelerar carregamento e evitar processamento repetitivo"
  ],
  "technologies": ["Python", "Streamlit", "Pandas", "Matplotlib", "Seaborn"],
  "highlights": ["Análise de Liquidez", "Risco de Ativos", "Gráficos Interativos", "Performance Otimizada"],
  "icon": "PiggyBank",
  "color": "from-red-400 to-yellow-600",
  "github": "https://github.com/guiborges77/dashboard-b3",
  "demo": "https://youtu.be/GEyIBaxeLBQ",
  "image": "https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=800",
  "category": "Fintech",
  "type": "Full Stack Dashboard"
},
{
  "id": "retirement",
  "title": "Plano de Aposentadoria Inteligente",
  "description": "Calculadora de juros compostos para planejamento de aposentadoria. Usuário insere aporte mensal, duração do investimento e taxa de juros, e vê gráficos e tabelas detalhando crescimento do investimento.",
  "features": [
      'Entrada de dados: aporte mensal, duração (anos), taxa de juros anual',
      'Saída de dados: gráfico do crescimento do investimento',
      'Tabela detalhando aportes e juros acumulados',
      'Cálculos precisos de juros compostos',
      'Interface intuitiva e responsiva'
    ],
    technologies: ["HTML", "CSS", "JavaScript"],
    highlights: ['Juros Compostos', 'Gráficos Interativos', 'Planejamento Financeiro'],
    icon: 'PiggyBank',
    color: "from-blue-400 to-purple-600",
    github: "https://github.com/guiborges77/planejador-financeiro-ia",
    demo: "https://planejamento-financeiro-ia.vercel.app",
    image: "https://images.pexels.com/photos/259200/pexels-photo-259200.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "Fintech",
    type: "Full Stack App"
  },
  {
    id: 'finlist',
    title: 'FinList',
    description: 'Aplicativo completo de gerenciamento de finanças pessoais. Permite inserir entradas e saídas financeiras, filtrar transações por data, categoria e tipo de gasto, e visualizar todas as transações em um só lugar.',
    features: [
      'Gerenciamento completo de transações financeiras',
      'Filtros avançados por data, categoria e tipo',
      'Dashboard com gráficos interativos',
      'Sistema de autenticação seguro',
      'Interface responsiva e intuitiva'
    ],
    technologies: ["TypeScript", "Next.js", "Clerk", "Tailwind CSS", "Shadcn UI", "Prisma", "SQLite", "Vercel PostgreSQL", "React-Query", "Recharts"],
    highlights: ['Autenticação Clerk', 'Dashboard Interativo', 'Filtros Avançados'],
    icon: 'TrendingUp',
    color: "from-green-400 to-emerald-600",
    github: "https://github.com/guiborges77/FinList",
    demo: "https://fin-list.vercel.app",
    image: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "Fintech",
    type: "Web Application"
  },
  {
    id: 'portfolio',
    title: 'Portfólio Pessoal',
    description: 'Site pessoal desenvolvido com React e TypeScript, apresentando projetos, experiências e habilidades de forma interativa e moderna.',
    features: [
      'Design responsivo e moderno',
      'Sistema de tradução PT/EN',
      'Animações suaves e micro-interações',
      'Seções organizadas em tabs',
      'Otimizado para performance'
    ],
    technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "Vite", "Vercel"],
    highlights: ['React + TypeScript', 'Design Responsivo', 'Multilíngue'],
    icon: 'User',
    color: "from-purple-400 to-pink-600",
    github: "#",
    demo: "#",
    image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "Web",
    type: "Portfolio Site"
  }
];