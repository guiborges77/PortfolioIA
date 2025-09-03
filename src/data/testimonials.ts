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
    id: 'marina-costa',
    name: "Marina Costa",
    role: "Analista Senior",
    company: "VIVO Telefonica",
    content: "Como estagiário, Guilherme superou todas as expectativas. Sua dedicação ao aprender análise de dados e sua atenção aos detalhes em relatórios gerenciais foram excepcionais. Um talento promissor na área de tecnologia.",
    rating: 5,
    image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150",
    color: "from-green-500 to-emerald-500"
  },
  {
    id: 'gabriel-borlinck',
    name: "Gabriel Borlinck",
    role: "Estagiou junto com Guilherme",
    company: "DSOP Educação Financeira",
    content: "Trabalhar com o Guilherme foi uma experiência muito enriquecedora. Ele sempre mostrou um grande interesse em aprender coisas novas, seja por meio de cursos ou trocando ideias com a equipe. Sua dedicação e atenção aos detalhes fizeram toda a diferença no dia a dia. Foi um prazer ter trabalhado com ele, e espero que possamos ter a oportunidade de trabalhar juntos novamente no futuro!",
    rating: 5,
    image: "https://media.licdn.com/dms/image/v2/D4D03AQG3iF-6giHVxQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1712941559415?e=1759968000&v=beta&t=LUQFod9mkMz26-DaMtlpS5UUjleYJxh0J4o5eqWu0Qk",
    color: "from-purple-500 to-pink-500"
  },
  {
    id: 'juan-alves',
    name: "Juan Alves",
    role: "UX/UI Designer",
    company: "DSOP Educação Financeira",
    content: "Tive o privilégio de trabalhar com o Guilherme, infelizmente por um curto período de apenas 10 meses. Nesse tempo, foi possível observar sua proatividade, além de seu foco, curiosidade e apoio. Mesmo não sendo do mesmo setor, Guilherme estava sempre pronto para me ajudar em diversos tópicos, assim como ajudou vários outros profissionais da empresa. Ele é um cara que você vai querer na sua empresa.",
    rating: 5,
    image: "https://media.licdn.com/dms/image/v2/D4D03AQHKjrxsbrfiXQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1689900639950?e=1759968000&v=beta&t=OOW8GkUDmGgtBAK8AFhKcY35wa5K3cKrG_Ih4YY-6Ac",
    color: "from-blue-500 to-cyan-500"
  },

  // {
  //   id: 'roberto-lima',
  //   name: "Roberto Lima",
  //   role: "Coordenador de TI",
  //   company: "Ex-colega de equipe",
  //   content: "Guilherme possui uma combinação rara de habilidades técnicas sólidas e excelente comunicação. Sempre disposto a ajudar colegas e compartilhar conhecimento, é o tipo de profissional que eleva o nível de toda a equipe.",
  //   rating: 5,
  //   image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150",
  //   color: "from-yellow-500 to-orange-500"
  // }
];