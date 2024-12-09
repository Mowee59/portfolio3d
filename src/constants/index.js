export const navLinks = [
  {
    id: 1,
    name: "Accueil",
    href: "#home",
  },
  {
    id: 2,
    name: "À propos",
    href: "#about",
  },
  {
    id: 3,
    name: "Projets",
    href: "#projects",
  },
  {
    id: 4,
    name: "Pourquoi moi ?",
    href: "#whyme",
  },
  {
    id: 5,
    name: "Contact",
    href: "#contact",
  },
  {
    id: 6,
    name: "Blog",
    href: "https://blog.aniss.dev",
  },
];

export const heroText = {
  prenom: "Aniss",
  nom: "Mahfoudi",
  description: "Concepteur Développeur",
};

export const myProjects = [
  {
    title: "Mon blog",
    desc: "Ce projet est un blog développé avec <strong>Next.js</strong> pour le front-end et <strong>Strapi</strong> pour le back-end, mettant en œuvre une architecture performante et flexible. Hébergé sur un VPS, l'ensemble des composants est entièrement conteneurisé avec <strong>Docker</strong>, ce qui garantit une isolation des services et une gestion simplifiée du déploiement. L'architecture inclut <strong>NGINX</strong> comme reverse proxy, une base de données <strong>PostgreSQL</strong>, ainsi qu'un monitoring avancé via <strong>Prometheus</strong> et <strong>Grafana</strong>.",
    subdesc:
      "Le blog intègre le rendu statique avec <strong>ISR</strong> (revalidation à la demande) pour garantir des performances optimales et un contenu toujours à jour. Grâce à un <strong>pipeline CI/CD</strong> automatisé, le déploiement est rapide et fiable. Bien plus que mon blog, il s'agit également de l'infrastructure de mon serveur de production. Un rapport de la conception au déploiement a été rédigé et est disponible.",
    lien1: "/api/download",
    desc1: "Télécharger le rapport",
    lien2: "https://github.com/Mowee59/blog-frontend",
    desc2: "Voir le code source",
    texture: "/textures/videos/bbb.mp4",
    logo: "/assets/icons/logo-aniss.png",
    logoStyle: {
      backgroundColor: "white",
      border: "0.2px solid #white",
      boxShadow: "0px 0px 60px 0px #AA3C304D",
    },
    spotlight: "/assets/spotlight1.png",
    tags: [
      {
        id: 1,
        name: "Next.js",
        path: "/assets/icons/nextjs-dark.svg",
      },
      {
        id: 2,
        name: "React",
        path: "/assets/icons/react.svg",
      },
      {
        id: 3,
        name: "TailwindCSS",
        path: "/assets/icons/tailwindcss.png",
      },
      {
        id: 4,
        name: "TypeScript",
        path: "/assets/icons/typescript.png",
      },
      {
        id: 5,
        name: "Strapi",
        path: "/assets/icons/strapi.svg",
      },
      {
        id: 6,
        name: "Docker",
        path: "/assets/icons/docker.svg",
      },
    ],
  },
  // {
  //   title: "LiveDoc - Real-Time Google Docs Clone",
  //   desc: "LiveDoc is a powerful collaborative app that elevates the capabilities of real-time document editing. As an enhanced version of Google Docs, It supports millions of collaborators simultaneously, ensuring that every change is captured instantly and accurately.",
  //   subdesc:
  //     "With LiveDoc, users can experience the future of collaboration, where multiple contributors work together in real time without any lag, by using Next.js and Liveblocks newest features.",
  //   href: "https://www.youtube.com/watch?v=y5vE8y_f_OM",
  //   texture: "/textures/videos/project2.mp4",
  //   logo: "/assets/project-logo2.png",
  //   logoStyle: {
  //     backgroundColor: "#13202F",
  //     border: "0.2px solid #17293E",
  //     boxShadow: "0px 0px 60px 0px #2F6DB54D",
  //   },
  //   spotlight: "/assets/spotlight2.png",
  //   tags: [
  //     {
  //       id: 1,
  //       name: "React.js",
  //       path: "/assets/react.svg",
  //     },
  //     {
  //       id: 2,
  //       name: "TailwindCSS",
  //       path: "assets/tailwindcss.png",
  //     },
  //     {
  //       id: 3,
  //       name: "TypeScript",
  //       path: "/assets/typescript.png",
  //     },
  //   ],
  // },
  // {
  //   title: "CarePulse - Health Management System",
  //   desc: "An innovative healthcare platform designed to streamline essential medical processes. It simplifies patient registration, appointment scheduling, and medical record management, providing a seamless experience for both healthcare providers and patients.",
  //   subdesc:
  //     "With a focus on efficiency, CarePulse integrantes complex forms and SMS notifications, by using Next.js, Appwrite, Twillio and Sentry that enhance operational workflows.",
  //   href: "https://www.youtube.com/watch?v=lEflo_sc82g",
  //   texture: "/textures/videos/project3.mp4",
  //   logo: "/assets/project-logo3.png",
  //   logoStyle: {
  //     backgroundColor: "#60f5a1",
  //     background:
  //       "linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)",
  //     border: "0.2px solid rgba(208, 213, 221, 1)",
  //     boxShadow: "0px 0px 60px 0px rgba(35, 131, 96, 0.3)",
  //   },
  //   spotlight: "/assets/spotlight3.png",
  //   tags: [
  //     {
  //       id: 1,
  //       name: "React.js",
  //       path: "/assets/react.svg",
  //     },
  //     {
  //       id: 2,
  //       name: "TailwindCSS",
  //       path: "assets/tailwindcss.png",
  //     },
  //     {
  //       id: 3,
  //       name: "TypeScript",
  //       path: "/assets/typescript.png",
  //     },
  //     {
  //       id: 4,
  //       name: "Framer Motion",
  //       path: "/assets/framer.png",
  //     },
  //   ],
  // },
  // {
  //   title: "Horizon - Online Banking Platform",
  //   desc: "Horizon is a comprehensive online banking platform that offers users a centralized finance management dashboard. It allows users to connect multiple bank accounts, monitor real-time transactions, and seamlessly transfer money to other users.",
  //   subdesc:
  //     "Built with Next.js 14 Appwrite, Dwolla and Plaid, Horizon ensures a smooth and secure banking experience, tailored to meet the needs of modern consumers.",
  //   href: "https://www.youtube.com/watch?v=PuOVqP_cjkE",
  //   texture: "/textures/videos/project4.mp4",
  //   logo: "/assets/project-logo4.png",
  //   logoStyle: {
  //     backgroundColor: "#0E1F38",
  //     border: "0.2px solid #0E2D58",
  //     boxShadow: "0px 0px 60px 0px #2F67B64D",
  //   },
  //   spotlight: "/assets/spotlight4.png",
  //   tags: [
  //     {
  //       id: 1,
  //       name: "React.js",
  //       path: "/assets/react.svg",
  //     },
  //     {
  //       id: 2,
  //       name: "TailwindCSS",
  //       path: "assets/tailwindcss.png",
  //     },
  //     {
  //       id: 3,
  //       name: "TypeScript",
  //       path: "/assets/typescript.png",
  //     },
  //     {
  //       id: 4,
  //       name: "Framer Motion",
  //       path: "/assets/framer.png",
  //     },
  //   ],
  // },
  // {
  //   title: "Imaginify - AI Photo Manipulation App",
  //   desc: "Imaginify is a groundbreaking Software-as-a-Service application that empowers users to create stunning photo manipulations using AI technology. With features like AI-driven image editing, a payments system, and a credits-based model.",
  //   subdesc:
  //     "Built with Next.js 14, Cloudinary AI, Clerk, and Stripe, Imaginify combines cutting-edge technology with a user-centric approach. It can be turned into a side income or even a full-fledged business.",
  //   href: "https://www.youtube.com/watch?v=Ahwoks_dawU",
  //   texture: "/textures/videos/project5.mp4",
  //   logo: "/assets/project-logo5.png",
  //   logoStyle: {
  //     backgroundColor: "#1C1A43",
  //     border: "0.2px solid #252262",
  //     boxShadow: "0px 0px 60px 0px #635BFF4D",
  //   },
  //   spotlight: "/assets/spotlight5.png",
  //   tags: [
  //     {
  //       id: 1,
  //       name: "React.js",
  //       path: "/assets/react.svg",
  //     },
  //     {
  //       id: 2,
  //       name: "TailwindCSS",
  //       path: "assets/tailwindcss.png",
  //     },
  //     {
  //       id: 3,
  //       name: "TypeScript",
  //       path: "/assets/typescript.png",
  //     },
  //     {
  //       id: 4,
  //       name: "Framer Motion",
  //       path: "/assets/framer.png",
  //     },
  //   ],
  // },
];

export const workExperiences = [
  {
    id: 1,
    name: "Une passion avant tout",
    title:
      "Le développement est bien plus qu’un métier pour moi : c’est un domaine dans lequel je m’investis pleinement. J’apprécie particulièrement la recherche de solutions innovantes et l’amélioration continue de mes compétences. <br/><strong>Ce que cela vous apportera :</strong>  Un collaborateur engagé et toujours à jour avec les évolutions technologiques.",
    icon: "/assets/passion.png",
    animation: "victory",
  },
  {
    id: 2,
    name: "Une motivation constante",
    title:
      "Je suis déterminé à atteindre les objectifs fixés et à surmonter les défis. Mon approche méthodique et persévérante me permet de m’adapter à des contextes variés et de livrer des résultats fiables. <br/><strong>Ce que cela vous apportera :</strong> Un partenaire de confiance, capable de contribuer efficacement à la réussite de vos projets.",
    icon: "/assets/motivation.png",
    animation: "clapping",
  },
  {
    id: 3,
    name: "Maîtrise des concepts de programmation",
    title:
      "J’ai une solide compréhension des fondamentaux de la programmation ainsi que de certains concepts avancés et je m’adapte rapidement aux nouveaux outils, langages et frameworks. La mise en place de bonnes pratiques d'architecture et de programmation, ainsi que de la veille technologique, sont des points importants pour moi. <br/><strong>Ce que cela apporte :</strong> Une capacité à s’intégrer rapidement dans vos processus techniques et à apporter des solutions adaptées.",
    icon: "/assets/programming.png",
    animation: "clapping",
  },
  {
    id: 4,
    name: "Polyvalence technique et fonctionnelle",
    title:
      "Mes compétences couvrent une large gamme de domaines, allant de la conception d’interfaces utilisateur à la création de backends, ainsi que des compétences en gestion de projet et en DevOps ( Tests, CI/CD, Monitoring ). Cette diversité me permet de contribuer à toutes les étapes d’un projet. <br/><strong>Ce que cela vous apportera :</strong> Une flexibilité qui répond à différents besoins, réduisant les dépendances externes.",
    icon: "/assets/swiss-army-knife.png",
    animation: "idle",
  },
  {
    id: 5,
    name: "Proactivité et implication",
    title:
      "Je prends l’initiative de résoudre les problèmes et d’anticiper les besoins. Je sais identifier les domaines où j'ai besoin de me mettre à jour et je le fais de manière autonome et proactive. <br/><strong>Ce que cela vous apportera :</strong> Une ressource autonome, impliquée et orientée vers des résultats concrets.",
    icon: "/assets/actionable.png",
    animation: "salute",
  },
];
