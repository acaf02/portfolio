import project1 from "../assets/projects/project1.jpg";
import project2 from "../assets/projects/project2.jpg";
import project3 from "../assets/projects/project3.jpg";

export const HERO_CONTENT = `Sou uma desenvolvedora apaixonada por criar aplicações web robustas e escaláveis. Com experiência prática acumulada durante minha formação, tenho aprimorado minhas habilidades em tecnologias de front-end, como React, HTML, CSS, JS, Bootstrap e back-end, incluindo Node.js, PHP, Java, PostgreSQL e MySQL. Meu objetivo é utilizar minha expertise para criar soluções inovadoras que impulsionem o crescimento dos negócios e ofereçam experiências excepcionais aos usuários.`;

export const ABOUT_TEXT = `Sou estudante do curso de Análise e Desenvolvimento de Sistemas no Instituto Federal Farroupilha - Campus Alegrete, atualmente no 6º semestre. Com experiência em diversas tecnologias, como Java, Node.js, JavaScript, HTML, CSS, PHP e Bootstrap, desenvolvi uma base sólida tanto no front-end quanto no back-end. Também tenho conhecimento em bancos de dados PostgreSQL e MySQL, além de metodologias ágeis. Recentemente, tenho me aprofundado em React e Spring Boot, com o objetivo de explorar novas possibilidades no desenvolvimento de software e aprimorar minhas habilidades técnicas. Fora dos estudos, gosto de ler, assistir séries e filmes, e explorar novas tecnologias.`;

export const EXPERIENCES = [
  {
    year: "Junho/2024 - Novembro/2024",
    role: "Programadora Trainee",
    company: "Compass UOL",
    description: `Minhas responsabilidades incluíram:
- Documentação: Criação completa da documentação técnica do projeto, garantindo clareza e organização para a equipe.
- Desenvolvimento: Participação ativa na programação inicial, utilizando boas práticas e colaborando na estruturação do sistema.`,
    technologies: [
      "Node.js",
      "Draw.io",
      "Arquitetura de Sistema",
      "Trabalho em Equipe",
      "Documentação de Software",
      "AWS",
    ],
  },
  {
    year: "Janeiro/2023 - Junho/2023",
    role: "Estagio de Desenvolvedora Blockchain",
    company: "Compass UOL",
    description: `- Aprofundamento em tecnologias de Blockchain e AWS.
- Participação em workshops e aulas práticas, com foco na criação de contratos inteligentes e aplicações escaláveis.
- Desenvolvimento de projetos, aplicando conhecimentos em programação e inovação.
- Colaboração em equipe, aprimorando habilidades de resolução de problemas e trabalho em grupo.`,
    technologies: [
      "Node.js",
      "Metodologias Agile",
      "Postman API",
      "HMTL5",
      "Blockchain",
      "JavaScript",
      "Solidity",
    ],
  },
];

export const PROJECTS = [
  {
    title: "Stock Manager",
    image: project1,
    description:
      "Stock Manager é uma aplicação web desenvolvida como Projeto de Conclusão de Curso (TCC) para gerenciar o controle de estoque de suprimentos no Instituto Federal Farroupilha - Campus Alegrete. O sistema visa facilitar a gestão do inventário, permitindo que os usuários registrem, editem, visualizem suprimentos e gerem relatórios de forma eficiente.",
    technologies: [
      "HTML",
      "CSS",
      "Bootstrap",
      "JavaScript",
      "JQuery",
      "Ajax",
      "PHP",
      "MySQL",
    ],
  },
  {
    title: "Portfolio Website",
    image: project2,
    description:
      "Um site de portfólio pessoal para apresentar projetos, habilidades, publicações, organizações e informações de contato.",
    technologies: ["HTML", "CSS", "React", "JavaScript", "Tailwind", "Node.js"],
  },
  {
    title: "Projeto Final do Time A1",
    image: project3,
    description:
      "A ideia desenvolvida aborda a criação de NFTs por fidelidade, com a temática de um petshop onde a cada 10 banhos a pessoa recebe um NFT personalizado do seu próprio pet gerado por esta aplicação, a obtenção do NFT pode trazer diversos benefícios como descontos nos próximos banhos e a participação em promoções especiais!",
    technologies: ["Node.js", "Docker"],
  },
];

export const PUBLICATION = [
    {
      title:
        "Vivenciando experiências integradas de análise e desenvolvimento de sistemas: aprendizagem e desenvolvimento em contexto de prática.",
      publication: "XIV Mostra da Educação Profissional e Tecnológica",
      url: "https://arandu.iffarroupilha.edu.br/handle/itemid/452",
      description:
        "Projeto interdisciplinar no curso de Análise e Desenvolvimento de Sistemas (ADS), focado no desenvolvimento de um aplicativo para registro e acompanhamento dos Boletins de Atendimento da Guarda Municipal de Alegrete. O projeto integrou disciplinas como Engenharia de Software, Banco de Dados, Programação e Interface Humano-Computador (IHC), abordando todas as fases do ciclo de vida do desenvolvimento de software. " +
        "Minha atuação incluiu a coleta de requisitos, modelagem UML, desenvolvimento de banco de dados em PostgreSQL e criação de histórias e épicos para o gerenciamento de funcionalidades. Trabalhei em colaboração com representantes da Guarda Municipal e colegas de turma para refinar e aprimorar o aplicativo, garantindo que atendesse às necessidades específicas da corporação.",
    },
  ];
  

export const ORGANIZATION = [
  {
  title: "Diretório Acadêmico Ada Augusta Byron King",
  role: "Tesoureira e Diretora de Comunicações",
  period: "Junho de 2024 - até o momento",
  description: `
        Atualmente, sou Tesoureira e Diretora de Comunicação, além de membro ativo do Diretório Acadêmico do curso de Análise e Desenvolvimento de Sistemas do Instituto Federal Farroupilha (IFFAR). Minhas responsabilidades incluem:

        - Gestão financeira: Como tesoureira, sou responsável pelo controle financeiro das atividades do Diretório Acadêmico, gerenciando os recursos de maneira eficiente para garantir a realização de eventos e iniciativas que beneficiem os alunos.

        - Comunicação e promoção do curso: No papel de Diretora de Comunicação, lidero a criação e execução de estratégias de comunicação para divulgar as atividades do Diretório Acadêmico, promover o curso e fortalecer a identidade do grupo. Isso inclui a gestão de redes sociais, elaboração de materiais de divulgação e organização de campanhas que ampliem o alcance das nossas iniciativas.

        - Planejamento e organização de eventos acadêmicos: Contribuo ativamente para o planejamento e a realização de eventos como a Semana Acadêmica, workshops e palestras. Meu trabalho envolve tanto o suporte logístico quanto a comunicação com palestrantes, parceiros e participantes, visando o sucesso dos eventos e o engajamento da comunidade acadêmica.

        - Apoio aos estudantes: Facilito a comunicação entre os alunos e a coordenação do curso, atuando como um canal de diálogo para identificar e atender às necessidades dos estudantes. Também colaboro na criação de iniciativas que melhorem a experiência acadêmica e promovam o desenvolvimento pessoal e profissional dos alunos.
`,
}
]

export const CONTACT = {
  email: "anacarol.alves1@outlook.com",
};
