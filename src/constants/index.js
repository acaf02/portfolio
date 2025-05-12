import project1 from "../assets/projects/project1.jpg";
import project2 from "../assets/projects/project2.jpg";
import project3 from "../assets/projects/project3.jpg";

export const HERO_CONTENT = `Sou uma desenvolvedora apaixonada por criar aplicações web robustas e escaláveis. Com experiência prática acumulada durante minha formação, tenho aprimorado minhas habilidades em tecnologias de front-end, como React, HTML, CSS, JS, Bootstrap e back-end, incluindo Node.js, PHP, Java, PostgreSQL e MySQL. Meu objetivo é utilizar minha expertise para criar soluções inovadoras que impulsionem o crescimento dos negócios e ofereçam experiências excepcionais aos usuários.`;

export const ABOUT_TEXT = `Formada em Análise e Desenvolvimento de Sistemas pelo Instituto Federal Farroupilha - Campus Alegrete, atualmente fazendo pós graduação de Tecnologias e Inovações Web na instituição FAVENI. Com experiência em diversas tecnologias, como Java, Node.js, JavaScript, HTML, CSS, PHP e Bootstrap, desenvolvi uma base sólida tanto no front-end quanto no back-end. Também tenho conhecimento em bancos de dados PostgreSQL e MySQL, além de metodologias ágeis. Recentemente, tenho me aprofundado em React e Spring Boot, com o objetivo de explorar novas possibilidades no desenvolvimento de software e aprimorar minhas habilidades técnicas. Fora dos estudos, gosto de ler, assistir séries e filmes, e explorar novas tecnologias.`;

export const EXPERIENCES = [
  {
    year: "Dezembro/2024 - até o momento",
    role: "Estágio",
    company: "Cartório Serviço de Registro Civil das Pessoas Naturais e Registros Especiais",
    description: `Desenvolvimento de um sistema web para a loja Lux Revestimentos e Acabamentos`,
    technologies: [
      "React.js",
      "React Router",
      "React Toastify",
      "JavaScript",
      "HTML",
      "Tailwind CSS",
      "Axios",
      "Design de Software",
    ],
  },
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
  {
    title: "Lumus Solem",
    image: project4,
    description:
      "Esse projeto contém o código-fonte do front-end do e-commerce Lumus Solem, uma marca dedicada à criação de velas aromáticas.",
    technologies: ["React", "Tailwind", "Vite", "Node.js", "Express.js", "MongoDB", "JWT", "Cloudinary", "Vercel"],
  },
  {
    title: "Site Instituicional de Petshop",
    image: project5,
    description:
      "Este projeto é uma aplicação moderna que resolve o problema da ausência de uma presença digital profissional para pequenas marcas artesanais de produtos aromáticos. Ele utiliza tecnologias web modernas e oferece uma solução escalável para exposição e venda de velas artesanais. O foco é proporcionar uma vitrine virtual elegante, funcional e responsiva para a marca Lumus Solem.",
    technologies: ["Node.js", "React", "Tailwind CSS", "Express", "Vercel", "Vite"],
  },
  {
    title: "Minha Livraria",
    image: project6,
    description:
      "Ele apresenta minha coleção pessoal de livros físicos junto com citações memoráveis de cada um.",
    technologies: ["HTML5", "CSS3", "Bootstrap", "Node.js", "jQuery", "Webpack"],
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
  {
      title: "StockManager: um software para controle de estoques alimentícios no refeitório do IFFAR - Campus Alegrete",
      publication: "XV Mostra da Educação Profissional e Tecnológica",
      url: "https://arandu.iffarroupilha.edu.br/handle/itemid/540",
      description:
        "Página: 788" +
        "Resumo do artigo: Os estoques desempenham um papel importante na gestão empresarial, com o gerenciamento eficaz dos estoques ajuda a evitar o excesso e a escassez de produtos, assim contribuindo com a otimização do investimento e maximizando a eficiência dos meios internos da empresa. A partir desse contexto, esse trabalho propõe o desenvolvimento de um software personalizado para o controle dos insumos alimentícios do refeitório Instituto Federal Farroupilha - Campus Alegrete, visando aprimorar e otimizar o controle e a administração de todos os produtos disponíveis. Para alcançar esses objetivos, utilizou-se a metodologia de desenvolvimento de software baseada no modelo em cascata, assegurando que cada etapa seja concluída antes do início da próxima.",
    },
  {
      title: "CHEMICALL: Sistema de gestão de produtos químicos para laboratórios de Institutos Federais, um estudo de caso IFFarroupilha",
      publication: "XV Mostra da Educação Profissional e Tecnológica",
      url: "https://arandu.iffarroupilha.edu.br/handle/itemid/540",
      description:
        "Página: 785" +
        "Resumo do artigo: A gestão eficiente de produtos químicos em laboratórios é essencial para garantir a segurança, o controle e a utilização adequada desses materiais. Nesse contexto, este trabalho tem como objetivo desenvolver um software de gestão de estoque de produtos químicos específico para os Laboratórios de Química do Instituto Federal Farroupilha. Este software será desenvolvido baseado no método em cascata de Sommerville e com a realização desse trabalho espera-se otimizar o registro e remoção de produtos químicos do estoque, exibir o status de utilização dos produtos químicos já existentes na instituição e expedir um relatório com o status e estoque de todos os produtos disponíveis atualmente.",
    },
  ];
  

export const ORGANIZATION = [
  {
  title: "Diretório Acadêmico Ada Augusta Byron King",
  role: "Tesoureira e Diretora de Comunicações",
  period: "Junho de 2024 - Fevereiro de 2025",
  description: `
Fui Tesoureira e Diretora de Comunicação do Diretório Acadêmico do curso de Análise e Desenvolvimento de Sistemas do Instituto Federal Farroupilha (IFFAR). Minhas responsabilidades incluíram:

- Gestão financeira: Como tesoureira, fui responsável pelo controle financeiro das atividades do Diretório Acadêmico, gerenciando os recursos de maneira eficiente para garantir a realização de eventos e iniciativas que beneficiem os alunos.

- Comunicação e promoção do curso: No papel de Diretora de Comunicação, liderei a criação e execução de estratégias de comunicação para divulgar as atividades do Diretório Acadêmico, promover o curso e fortalecer a identidade do grupo. Isso inclui a gestão de redes sociais, elaboração de materiais de divulgação e organização de campanhas que ampliem o alcance das nossas iniciativas.

- Planejamento e organização de eventos acadêmicos: Contribui ativamente para o planejamento e a realização de eventos como a Semana Acadêmica, workshops e palestras. Meu trabalho envolveu tanto o suporte logístico quanto a comunicação com palestrantes, parceiros e participantes, visando o sucesso dos eventos e o engajamento da comunidade acadêmica.

- Apoio aos estudantes: Facilitei a comunicação entre os alunos e a coordenação do curso, atuando como um canal de diálogo para identificar e atender às necessidades dos estudantes. Também colaborei na criação de iniciativas que melhorem a experiência acadêmica e promovam o desenvolvimento pessoal e profissional dos alunos.
`,
},
];

export const ACADEMY = [
  {
    title: 'Análise e Desenvolvimento de Sistemas',
    where: 'Instituto Federal Farroupilha - Campus Alegrete',
    period: 'Fevereiro de 2022 - Janeiro de 2025',
    description: 'Como estudante de Análise e Desenvolvimento de Sistemas, desenvolvo habilidades em programação, modelagem de banco de dados e engenharia de software. O curso proporciona uma visão prática e teórica das etapas de criação de sistemas, abrangendo desde a análise de requisitos até o desenvolvimento de software. Através de projetos e atividades práticas, estou me aperfeiçoando em tecnologias atuais e metodologias ágeis, ampliando meu conhecimento e habilidades no campo.' +
    'Durante minha trajetória acadêmica, participei em projetos de extensão, com destaque para o desenvolvimento de um aplicativo para a Guarda Municipal de Alegrete. Além disso, participei na MEPT, onde publiquei trabalhos e participei da competição BugCup. No diretório acadêmico, contribuo para a divulgação do curso, a organização de eventos, como a Semana Acadêmica de ADS, e ofereço suporte aos alunos, promovendo o engajamento estudantil e a troca de conhecimentos.'
  },
  {
    title: "Tecnologias e Inovações Web",
    where: "FAVENI",
    period: "Janeiro de 2025 - Agosto de 2026",
    description: "Pós graduação em tecnologias e inovações web."
  },
  {
    title: "Inglês Avançado",
    where: "Senac",
    period: "Agosto de 2016 - Junho de 2020",
    description: "Iniciei minha jornada no aprendizado de idiomas, com o objetivo de expandir meus horizontes profissionais e pessoais, melhorando a comunicação em inglês para atuar no mercado global."
  }
]

export const CONTACT = {
  email: "anacarol.alves1@outlook.com",
};
