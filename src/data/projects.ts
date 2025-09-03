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
    id: 'retirement',
    title: 'Plano de Aposentadoria Inteligente',
    description: 'Calculadora de juros compostos para planejamento de aposentadoria. Usuário insere aporte mensal, duração do investimento e taxa de juros, e vê gráficos e tabelas detalhando crescimento do investimento.',
    features: [
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