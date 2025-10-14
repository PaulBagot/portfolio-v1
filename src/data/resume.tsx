import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Paul BAGOT",
  initials: "PB",
  url: "",
  location: "Caen, FR",
  locationLink: "",
  description:
    "",
  summary:
    "Disponible dès maintenant, à la recherche dès septembre 2025 d'un contrat d'apprentissage de 3 ans pour le Cycle Ingénieur à l'ESIEA (Laval 53)",
  avatarUrl: "/me.jpg",
  skills: [
    "Java",
    "Javascript",
    "Typescript",
    "PHP",
    "Python",
    "C",
    "C#",
    "React",
    "Laravel",
    "MySQL",
    "Oracle",
    "Git",
    "Docker",
    "Kubernetes",
    "Jenkins",
    "SonarQube",
    "Gitlab CI",
  ],
  softSkills: [
    "Travail en équipe",
    "À l'écoute",
    "Capacité d’adaptation",
    "Autonome",
    "Prise d’initiatives",
    "Gestion de projet"
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    social: [
      {
        ariaLabel: "GitHub",
        tooltip: "GitHub",
        href: "https://github.com/PaulBagot",
        svgUrl: Icons.github,
        color: "#0078D7",
        navbar: true,
      },
      {
        ariaLabel: "LinkedIn",
        tooltip: "LinkedIn",
        href: "https://www.linkedin.com/in/paul-bagot/",
        svgUrl: Icons.linkedin,
        color: "#0078D7",
        navbar: true,
      },
      {
        ariaLabel: "Envoyer un email",
        tooltip: "Envoyer un email",
        href: "mailto:bgtpaul04@gmail.com",
        svgUrl: Icons.email,
        color: "#0078D7",
        navbar: true,
      },
    ],
  },

  work: [
    {
      company: "Laboratoire Gilbert",
      href: "",
      badges: [],
      location: "Hérouville-Saint-Clair",
      title: "Analyste Programmeur en alternance",
      logoUrl: "/lab.png",
      start: "Septembre 2024",
      end: "Juillet 2025",
      description:
        "Analyse des besoins utilisateurs. Optimisation et évolution d’une application existante (BDD, SQL, UI, UX, code, ...). Tests, maintenance, documentation. Méthode agile",
    },
    {
      company: "Laboratoire Gilbert",
      badges: [],
      href: "",
      location: "Hérouville-Saint-Clair",
      title: "Analyste Programmeur en stage",
      logoUrl: "/lab.png",
      start: "Avril 2024",
      end: "Mai 2024",
      description:
        "Analyse des besoins utilisateurs. Conception et développement d’une application. Tests, déploiement et rédaction de la documentation",
    }
  ],
  education: [
    {
      school: "ESIEA, Laval (53)",
      href: "#",
      degree: "Cycle ingénieur du Numérique",
      logoUrl: "",
      start: "2025",
      end: "2028",
    },
    {
      school: "Université de Caen, IUT d’Ifs (14)",
      href: "#",
      degree: "BUT Informatique, Parcours réalisation d'applications : conception, développement, validation",
      logoUrl: "",
      start: "2022",
      end: "2025",
    },
    {
      school: "Lycée Jules Verne, Mondeville (14)",
      href: "#",
      degree: "Baccalauréat STI2D, Option SIN (Systèmes d’Information et Numérique)",
      logoUrl: "/laurier.png",
      start: "2019",
      end: "2022",
    },
  ],
  projects: [
    {
      title: "Projet Gribouille",
      href: "https://github.com/PaulBagot/gribouille",
      dates: "2024",
      active: true,
      description:
        "Une application de dessin ressemblant à paint, créée pendant mes études avec la technologie JavaFX.",
      technologies: [
        "Java",
        "JavaFX",
        "Maven",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/PaulBagot/gribouille",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
    },
    {
      title: "Site de Plongées",
      href: "",
      dates: "2025",
      active: true,
      description:
        "Projet de fin d’études du BUT Informatique. " 
        + "Site web de réservation de plongées en mer avec différents rôles se connectant au site afin de réserver, créer, gérer des plongées.",
      technologies: [
        "ReactJS",
        "API REST",
        "Laravel",
        "TailwindCSS",
        "MySQL",
      ],
      links: [
        {
          type: "Source",
          href: "#",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.magicui.design/bento-grid.mp4",
    },
    {
      title: "Mini ORM",
      href: "#",
      dates: "2025",
      active: true,
      description:
        "Partie d'un projet. Un petit ORM en PHP basé sur le même principe qu'Eloquent (ORM de Laravel). le projet contient une pipeline CI / CD pour vérification de la qualité du code et de tests unitaires",
      technologies: [
        "PHP",
        "PHPUnit",
        "Docker",
        "Gitlab CI",
        "SonarQube",
        "Nginx",
        "Pipeline CI / CD",
      ],
      links: [
        {
          type: "Source",
          href: "https://gitlab.com/octania/site-octania/-/tree/6-mini-ORM?ref_type=heads",
          icon: <Icons.gitlab className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.llm.report/openai-demo.mp4",
    },
    {
      title: "Octania Discord Bot",
      href: "https://github.com/PaulBagot/OctaniaDiscordBot",
      dates: "2023",
      active: true,
      description:
        "Un bot discord pour le serveur Octania. Il permet, par exemple de jouer de la music dans un canal audio, ajouter des roles à des nouveaux utilisateurs ou encore une modération des échanges textuels.",
      technologies: [
        "Javascript",
        "MongoDB",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/PaulBagot/OctaniaDiscordBot",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4",
    },
  ],
} as const;
