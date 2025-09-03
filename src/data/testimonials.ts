export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  image: string;
  color: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 'ana-silva',
    name: "Ana Silva",
    role: "Tech Lead",
    company: "VIVO Telefônica",
    content: "Guilherme demonstra excepcional dedicação e capacidade de aprendizado. Sua proatividade em resolver problemas complexos e colaborar com a equipe é impressionante. Um profissional que sempre busca a excelência técnica.",
    rating: 5,
    image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150",
    color: "from-purple-500 to-pink-500"
  },
  {
    id: 'carlos-mendes',
    name: "Carlos Mendes",
    role: "Gerente de Desenvolvimento",
    company: "DSOP Educação",
    content: "Durante o período que trabalhamos juntos, Guilherme mostrou grande habilidade em desenvolvimento web e integração de sistemas. Sua capacidade de entregar soluções de qualidade dentro do prazo é notável.",
    rating: 5,
    image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=150",
    color: "from-blue-500 to-cyan-500"
  },
  {
    id: 'marina-costa',
    name: "Marina Costa",
    role: "Analista Senior",
    company: "Hospital Sepaco",
    content: "Como estagiário, Guilherme superou todas as expectativas. Sua dedicação ao aprender análise de dados e sua atenção aos detalhes em relatórios gerenciais foram excepcionais. Um talento promissor na área de tecnologia.",
    rating: 5,
    image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150",
    color: "from-green-500 to-emerald-500"
  },
  {
    id: 'roberto-lima',
    name: "Roberto Lima",
    role: "Coordenador de TI",
    company: "Ex-colega de equipe",
    content: "Guilherme possui uma combinação rara de habilidades técnicas sólidas e excelente comunicação. Sempre disposto a ajudar colegas e compartilhar conhecimento, é o tipo de profissional que eleva o nível de toda a equipe.",
    rating: 5,
    image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150",
    color: "from-yellow-500 to-orange-500"
  }
];