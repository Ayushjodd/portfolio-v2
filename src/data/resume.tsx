import { Icons } from "@/components/icons";
import { image } from "framer-motion/client";
import { HomeIcon, NotebookIcon } from "lucide-react";
// import {githubissuetracker} from "../../public/githubissuetracker.mp4"

export const DATA = {
  name: "Anurag negi",
  initials: "./pfp.jpg",
  url: "https://avatars.githubusercontent.com/u/115611556?v=4",
  location: "Dehradun, UK",
  locationLink: "",
  description:
    "Software Engineer. I love building things and helping people. Very active on Social Medias.",
  summary:
    "I’m Anurag Negi, a passionate web developer with 2 years of experience in the field. Throughout my journey, I’ve built a range of exciting projects that showcase my skills and creativity, some of which are displayed below. My dedication to web development drives me to continually learn and innovate, bringing ideas to life through code.",
  avatarUrl: "/pfp.jpg",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
    "Rust",
    "Postgres",
    "MongoDB",
    "Docker",
    "Java",
    "C",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "anurag.negi862@gmail.com",
    tel: "+91 70851119169",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/anuragnegi000",
        icon: Icons.github,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/anuragnegi000",
        icon: Icons.x,

        navbar: true,
      },
    },
  },

  work: [
    {
      company: "Verve gen PvT LTD",
      href: "",
      badges: [],
      location: "Remote",
      title: "Full stack developer",
      logoUrl:
        "data:image/jpeg;base64,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",
      start: "June 2023",
      end: "Oct 2023",
      description:
        "Implemented Backend API's in Live projects and created a website using Next.js and TailwindCSS.",
    },
  ],

  contributions:[
    {
      title:"The palisadoes foundation",
      github:"https://github.com/palisadoesfoundation",
      image:"",
    },
    {
      title:"Async API Initiative",
      github:"https://github.com/asyncapi",
      image:""
    }
  ],

  projects: [
    {
      title: "Borrow (chat-app)",
      href: "https://chatcollect.com",
      dates: "Jan 2024 - Feb 2024",
      active: true,
      description:
        "borrow is a unique chat app where users can connect and communicate freely, all while maintaining complete anonymity. By joining with a simple anonymous ID, users can engage in conversations without revealing their identity, creating a space for open and uninhibited communication.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://borrow.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/borrow.png",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
    },
    {
      title: "Mahakaal Yogpeeth",
      href: "https://mahakaalyogpeeth.com",
      dates: "June 2023 - Present",
      active: true,
      description:
        "Mahakaal Yogpeeth, located in Rishikesh, offers authentic yoga teachings in a serene setting. Whether you're a beginner or experienced, our school provides a space for spiritual growth and well-being.",
      technologies: ["React.js", "Javascript", "TailwindCSS", "Aceternity UI"],
      links: [
        {
          type: "Website",
          href: "https://www.mahakaalyogpeeth.com/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/mahakaal.png",
    },
    {
      title: "iGraphixs",
      href: "https://igraphixs.com",
      dates: "April 2023 - September 2023",
      active: true,
      description:
        "iGraphixs is a platform for high-quality GFX and VFX. Whether you're a designer or a content creator, our website offers a wide range of visual assets to enhance your projects",
      technologies: [
        "React.js",
        "Javascript",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://igraphixs.com",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/anuragnegi000/iGraphixs-federation",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/igraphixs.png",
      video: "https://cdn.llm.report/openai-demo.mp4",
    },
    {
      title: "Github Issue Tracker",
      href: "https://githubissuetracker.com",
      dates: "April 2023 - March 2024",
      active: true,
      description:
        "I've created a GitHub issue tracker that allows users to follow specific repositories and individuals within those repositories. When a tracked person creates an issue, users receive an email notification, keeping them informed about the latest developments",
      technologies: [
        "React.js",
        "Javascript",
        "MongoDB",
        "TailwindCSS",
        "Shadcn UI",
        "Aceternity UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://githubissuetracker.com",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/developingright/github-issue-tracker",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/githubissue.png",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4",
    },
  ],
  hackathons: [
    {
      title: "Hack Western 5",
      dates: "November 23rd - 25th, 2018",
      location: "London, Ontario",
      description:
        "Developed a mobile application which delivered bedtime stories to children using augmented reality.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-western.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "Hack The North",
      dates: "September 14th - 16th, 2018",
      location: "Waterloo, Ontario",
      description:
        "Developed a mobile application which delivers university campus wide events in real time to all students.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "FirstNet Public Safety Hackathon",
      dates: "March 23rd - 24th, 2018",
      location: "San Francisco, California",
      description:
        "Developed a mobile application which communcicates a victims medical data from inside an ambulance to doctors at hospital.",
      icon: "public",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/firstnet.png",
      links: [],
    },
    {
      title: "DeveloperWeek Hackathon",
      dates: "February 3rd - 4th, 2018",
      location: "San Francisco, California",
      description:
        "Developed a web application which aggregates social media data regarding cryptocurrencies and predicts future prices.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/developer-week.jpg",
      links: [
        {
          title: "Github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/cryptotrends/cryptotrends",
        },
      ],
    },
    {
      title: "HackDavis",
      dates: "January 20th - 21st, 2018",
      location: "Davis, California",
      description:
        "Developed a mobile application which allocates a daily carbon emission allowance to users to move towards a sustainable environment.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-davis.png",
      win: "Best Data Hack",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2018/white.svg",
      links: [
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/my6footprint",
        },
        {
          title: "ML",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Wallet6/my6footprint-machine-learning",
        },
        {
          title: "iOS",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Wallet6/CarbonWallet",
        },
        {
          title: "Server",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Wallet6/wallet6-server",
        },
      ],
    },
    {
      title: "ETH Waterloo",
      dates: "October 13th - 15th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed a blockchain application for doctors and pharmacists to perform trustless transactions and prevent overdosage in patients.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/eth-waterloo.png",
      links: [
        {
          title: "Organization",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/ethdocnet",
        },
      ],
    },
    {
      title: "Hack The North",
      dates: "September 15th - 17th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed a virtual reality application allowing users to see themselves in third person.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Streamer Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/justinmichaud/htn2017",
        },
        {
          title: "Client Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/RTSPClient",
        },
      ],
    },
    {
      title: "Hack The 6ix",
      dates: "August 26th - 27th, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed an open platform for people shipping items to same place to combine shipping costs and save money.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-6ix.jpg",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/ShareShip/ShareShip",
        },
        {
          title: "Site",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://share-ship.herokuapp.com/",
        },
      ],
    },
    {
      title: "Stupid Hack Toronto",
      dates: "July 23rd, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed a chrome extension which tracks which facebook profiles you have visited and immediately texts your girlfriend if you visited another girls page.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/stupid-hackathon.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/nsagirlfriend/nsagirlfriend",
        },
      ],
    },
    {
      title: "Global AI Hackathon - Toronto",
      dates: "June 23rd - 25th, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed a python library which can be imported to any python game and change difficulty of the game based on real time emotion of player. Uses OpenCV and webcam for facial recognition, and a custom Machine Learning Model trained on a [Kaggle Emotion Dataset](https://www.kaggle.com/c/challenges-in-representation-learning-facial-expression-recognition-challenge/leaderboard) using [Tensorflow](https://www.tensorflow.org/Tensorflow) and [Keras](https://keras.io/). This project recieved 1st place prize at the Global AI Hackathon - Toronto and was also invited to demo at [NextAI Canada](https://www.nextcanada.com/next-ai).",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/global-ai-hackathon.jpg",
      win: "1st Place Winner",
      links: [
        {
          title: "Article",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://syncedreview.com/2017/06/26/global-ai-hackathon-in-toronto/",
        },
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/TinySamosas/",
        },
      ],
    },
    {
      title: "McGill AI for Social Innovation Hackathon",
      dates: "June 17th - 18th, 2017",
      location: "Montreal, Quebec",
      description:
        "Developed realtime facial microexpression analyzer using AI",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/ai-for-social-good.jpg",
      links: [],
    },
    {
      title: "Open Source Circular Economy Days Hackathon",
      dates: "June 10th, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed a custom admin interface for food waste startup <a href='http://genecis.co/'>Genecis</a> to manage their data and provide analytics.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/open-source-circular-economy-days.jpg",
      win: "1st Place Winner",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/genecis",
        },
      ],
    },
    {
      title: "Make School's Student App Competition 2017",
      dates: "May 19th - 21st, 2017",
      location: "International",
      description: "Improved PocketDoc and submitted to online competition",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/make-school-hackathon.png",
      win: "Top 10 Finalist | Honourable Mention",
      links: [
        {
          title: "Medium Article",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://medium.com/make-school/the-winners-of-make-schools-student-app-competition-2017-a6b0e72f190a",
        },
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/pocketdoc-react-native",
        },
        {
          title: "YouTube",
          icon: <Icons.youtube className="h-4 w-4" />,
          href: "https://www.youtube.com/watch?v=XwFdn5Rmx68",
        },
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/pocketdoc-react-native",
        },
      ],
    },
    {
      title: "HackMining",
      dates: "May 12th - 14th, 2017",
      location: "Toronto, Ontario",
      description: "Developed neural network to optimize a mining process",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-mining.png",
      links: [],
    },
    {
      title: "Waterloo Equithon",
      dates: "May 5th - 7th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed Pocketdoc, an app in which you take a picture of a physical wound, and the app returns common solutions or cures to the injuries or diseases.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/waterloo-equithon.png",
      links: [
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/pocketdoc-react-native",
        },
        {
          title: "YouTube",
          icon: <Icons.youtube className="h-4 w-4" />,
          href: "https://www.youtube.com/watch?v=XwFdn5Rmx68",
        },
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/pocketdoc-react-native",
        },
      ],
    },
    {
      title: "SpaceApps Waterloo",
      dates: "April 28th - 30th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed Earthwatch, a web application which allows users in a plane to virtually see important points of interest about the world below them. They can even choose to fly away from their route and then fly back if they choose. Special thanks to CesiumJS for providing open source world and plane models.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/space-apps.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/earthwatch",
        },
      ],
    },
    {
      title: "MHacks 9",
      dates: "March 24th - 26th, 2017",
      location: "Ann Arbor, Michigan",
      description:
        "Developed Super Graphic Air Traffic, a VR website made to introduce people to the world of air traffic controlling. This project was built completely using THREE.js as well as a node backend server.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/mhacks-9.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/threejs-planes",
        },
      ],
    },
    {
      title: "StartHacks I",
      dates: "March 4th - 5th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed at StartHacks 2017, Recipic is a mobile app which allows you to take pictures of ingredients around your house, and it will recognize those ingredients using ClarifAI image recognition API and return possible recipes to make. Recipic recieved 1st place at the hackathon for best pitch and hack.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/starthacks.png",
      win: "1st Place Winner",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source (Mobile)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/mattBlackDesign/recipic-ionic",
        },
        {
          title: "Source (Server)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/mattBlackDesign/recipic-rails",
        },
      ],
    },
    {
      title: "QHacks II",
      dates: "February 3rd - 5th, 2017",
      location: "Kingston, Ontario",
      description:
        "Developed a mobile game which enables city-wide manhunt with random lobbies",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/qhacks.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source (Mobile)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/human-huntr-react-native",
        },
        {
          title: "Source (API)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/mattBlackDesign/human-huntr-rails",
        },
      ],
    },
    {
      title: "Terrible Hacks V",
      dates: "November 26th, 2016",
      location: "Waterloo, Ontario",
      description:
        "Developed a mock of Windows 11 with interesting notifications and functionality",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/terrible-hacks-v.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/justinmichaud/TerribleHacks2016-Windows11",
        },
      ],
    },
    {
      title: "Portal Hackathon",
      dates: "October 29, 2016",
      location: "Kingston, Ontario",
      description:
        "Developed an internal widget for uploading assignments using Waterloo's portal app",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/portal-hackathon.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/UWPortalSDK/crowmark",
        },
      ],
    },
  ],
} as const;
