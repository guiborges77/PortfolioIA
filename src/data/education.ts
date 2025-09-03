export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  period: string;
  status: string;
  description: string;
  color: string;
  progress: number;
}

export interface Course {
  id: string;
  title: string;
  institution: string;
  type: string;
  skills: string[];
  color: string;
  link: string;
}

export const education: EducationItem[] = [
  {
    id: "ciencia-computacao",
    degree: "Bacharelado em Ciência da Computação",
    institution: "Centro Universitário das Américas",
    period: "2023 – Dezembro 2026",
    status: "Em Andamento",
    description:
      "Aprofundamento em algoritmos, estruturas de dados, engenharia de software e inteligência artificial.",
    color: "from-blue-600 to-purple-600",
    progress: 60,
  },
  {
    id: "ads",
    degree: "Análise e Desenvolvimento de Sistemas",
    institution: "Centro Universitário das Américas",
    period: "2022 – 2024",
    status: "Concluído",
    description:
      "Formação técnica focada em desenvolvimento de software, banco de dados e análise de sistemas.",
    color: "from-green-600 to-blue-600",
    progress: 100,
  },
];

export const courses: Course[] = [
  {
    id: "python-senai",
    title: "Fundamentos do Python",
    institution: "SENAI São Paulo",
    type: "Certificação",
    skills: ["Python", "Lógica de Programação"],
    color: "from-yellow-500 to-orange-500",
    link: "#",
  },
  {
    id: "python-gpt",
    title: "Python e GPT: Criando um Chatbot com IA",
    institution: "Alura",
    type: "Curso Online",
    skills: ["Python"],
    color: "from-green-500 to-teal-500",
    link: "https://cursos.alura.com.br/certificate/aabb1cf3-118f-4f5e-bfb6-11106ca49a69?lang",
  },
    {
    id: 'ia-gpt-gemini',
    title: "Inteligência Artificial com GPT, Gemini, Python e Node.js",
    institution: "Alura",
    type: "Curso Online",
    skills: ["IA", "Python", "Node.js", "API", "OpenAI GPT", "Google Gemini"],
    color: "from-purple-500 to-pink-500",
    link: "https://cursos.alura.com.br/certificate/2d2712f2-96df-4892-9a17-3f283cdbb68d?lang"
  },
  {
    id: "web-completo",
    title: "Curso Desenvolvedor Web Completo",
    institution: "Udemy",
    type: "Certificação",
    skills: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    color: "from-blue-500 to-cyan-500",
    link: "https://www.udemy.com/certificate/UC-36d893b1-cce3-4fac-902f-c00a8179559c",
  },
  {
    id: "infraestrutura-ti",
    title: "Gestão de Infraestrutura de TI",
    institution: "FIAP",
    type: "Certificação",
    skills: ["Gestão de TI", "Infraestrutura de TI"],
    color: "from-purple-500 to-pink-500",
    link: "https://on.fiap.com.br/pluginfile.php/1/local_nanocourses/certificado_nanocourse/94527/62964a484e0a665f8d5813aeb5fe8c63/certificado.png",
  },
  {
    id: "web-rocketseat",
    title: "Fundamentos da Programação Web",
    institution: "Rocketseat",
    type: "Curso Online",
    skills: ["HTML", "CSS", "JavaScript", "Git", "GitHub"],
    color: "from-cyan-500 to-blue-500",
    link: "https://app.rocketseat.com.br/certificates/de5d226d-f110-4948-81ec-c873c6d2b591",
  },
  {
    id: "ruby-rails",
    title: "Formação Ruby On Rails",
    institution: "Alura",
    type: "Curso Online",
    skills: [
      "Ruby",
      "Ruby on Rails",
      "Lógica de Programação",
      "Orientação a Objetos",
    ],
    color: "from-red-500 to-pink-500",
    link: "https://cursos.alura.com.br/degree/certificate/68766975-0b83-4495-b337-7c2b80b9d233?lang",
  },
  {
    id: "iniciante-programacao",
    title: "Formação A partir do zero: iniciante em programação",
    institution: "Alura",
    type: "Curso Online",
    skills: [
      "Lógica de Programação",
      "JavaScript",
      "HTML",
      "CSS",
      "Flexbox",
      "Linux",
      "Git",
      "GitHub",
    ],
    color: "from-green-500 to-blue-500",
    link: "https://cursos.alura.com.br/degree/certificate/8eb74290-0854-4eff-b0c5-dca04648cf48",
  },
  {
    id: "bootstrap",
    title: "Formação Bootstrap 5",
    institution: "Alura",
    type: "Curso Online",
    skills: ["Bootstrap 5", "HTML", "CSS", "JavaScript", "Design Responsivo"],
    color: "from-purple-500 to-indigo-500",
    link: "https://cursos.alura.com.br/degree/certificate/309500dd-f605-48ac-b285-d038f7829e16",
  },
  {
    id: "wordpress",
    title: "Formação WordPress",
    institution: "Alura",
    type: "Curso Online",
    skills: ["WordPress", "Elementor", "Figma"],
    color: "from-blue-500 to-purple-500",
    link: "https://cursos.alura.com.br/certificate/e231e6d1-3fae-42c3-8c22-7145c257ce6d",
  },
  {
    id: "php-alura",
    title: "PHP (Cursos de Programação)",
    institution: "Alura",
    type: "Curso Online",
    skills: ["PHP"],
    color: "from-indigo-500 to-purple-500",
    link: "https://cursos.alura.com.br/certificate/b272a068-38d8-4569-ae3e-9af4f58d62bc?lang",
  },
  {
    id: "js-logica",
    title: "Lógica de Programação com JavaScript",
    institution: "Alura",
    type: "Curso Online",
    skills: ["Lógica de Programação", "JavaScript"],
    color: "from-yellow-500 to-green-500",
    link: "#",
  },
  {
    id: "js-arrays",
    title: "JavaScript: conhecendo arrays",
    institution: "Alura",
    type: "Curso Online",
    skills: ["JavaScript", "Arrays"],
    color: "from-yellow-500 to-orange-500",
    link: "#",
  },
  {
    id: "frontend-js-css",
    title: "Front-end com JavaScript e CSS",
    institution: "Alura",
    type: "Curso Online",
    skills: ["JavaScript", "Tailwind CSS", "CSS", "Flexbox", "Grid"],
    color: "from-cyan-500 to-blue-500",
    link: "#",
  },
  {
    id: "docker",
    title: "Docker: criando e gerenciando containers",
    institution: "Alura",
    type: "Curso Online",
    skills: ["Docker", "Containers"],
    color: "from-blue-500 to-cyan-500",
    link: "#",
  },
  {
    id: "postgresql",
    title: "PostgreSQL",
    institution: "Alura",
    type: "Curso Online",
    skills: ["PostgreSQL", "SQL"],
    color: "from-blue-500 to-indigo-500",
    link: "#",
  },
];
