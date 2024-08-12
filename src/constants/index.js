import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  benefitImage2,
  chromecast,
  disc02,
  discord,
  discordBlack,
  facebook,
  figma,
  file02,
  framer,
  homeSmile,
  instagram,
  notification2,
  notification3,
  notification4,
  notion,
  photoshop,
  plusSquare,
  protopie,
  raindrop,
  recording01,
  recording03,
  roadmap1,
  roadmap2,
  roadmap3,
  roadmap4,
  searchMd,
  slack,
  sliders04,
  telegram,
  twitter,
  yourlogo,
} from "../assets";

export const navigation = [
  {
    id: "0",
    title: "Services",
    url: "#features",
  },
  {
    id: "1",
    title: "About Us",
    url: "#pricing",
  },
  {
    id: "2",
    title: "Features",
    url: "#how-to-use",
  },
  {
    id: "3",
    title: "Working On",
    url: "#roadmap",
  },
  {
    id: "4",
    title: "New account",
    url: "#signup",
    onlyMobile: true,
  },
  {
    id: "5",
    title: "Sign in",
    url: "#login",
    onlyMobile: true,
  },
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [yourlogo, yourlogo, yourlogo, yourlogo, yourlogo];

export const brainwaveServices = [
  "User-Centric Design",
  "Expert Consultation and Support",
  "Innovative Approach",
];

export const brainwaveServicesIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
];

export const roadmap = [
  {
    id: "0",
    title: "Next-Gen Web & App Development",
    text: "We are developing state-of-the-art websites and mobile applications tailored to meet the unique needs of our clients.",
    date: "GOFTUS",
    status: "",
    imageUrl: roadmap1,
    colorful: true,
  },
  {
    id: "1",
    title: "Enhanced SEO Techniques",
    text: "Our experts are working on advanced SEO techniques to improve our clients’ search engine rankings.",
    date: "GOFTUS",
    status: "progress",
    imageUrl: roadmap2,
  },
  {
    id: "2",
    title: "Dynamic Social Media Campaigns",
    text: "We are designing dynamic and engaging social media campaigns that build brand awareness and foster strong connections with audiences.",
    date: "GOFTUS",
    status: "",
    imageUrl: roadmap3,
  },
  {
    id: "3",
    title: "Advanced AI Integration",
    text: "Our team is harnessing the power of artificial intelligence to build intelligent systems that enhance functionality and automate processes.",
    date: "GOFTUS",
    status: "progress",
    imageUrl: roadmap4,
  },
];

export const collabText =
  "";

export const collabContent = [
  {
    id: "0",
    title: "Innovative and Custom Solutions ",
    text: collabText,
  },
  {
    id: "1",
    title: "Comprehensive Service Offering",
  },
  {
    id: "2",
    title: "Expertise and Experience",
  },
];

export const collabApps = [
  {
    id: "0",
    title: "Figma",
    icon: figma,
    width: 26,
    height: 36,
  },
  {
    id: "1",
    title: "Notion",
    icon: notion,
    width: 34,
    height: 36,
  },
  {
    id: "2",
    title: "Discord",
    icon: discord,
    width: 36,
    height: 28,
  },
  {
    id: "3",
    title: "Slack",
    icon: slack,
    width: 34,
    height: 35,
  },
  {
    id: "4",
    title: "Photoshop",
    icon: photoshop,
    width: 34,
    height: 34,
  },
  {
    id: "5",
    title: "Protopie",
    icon: protopie,
    width: 34,
    height: 34,
  },
  {
    id: "6",
    title: "Framer",
    icon: framer,
    width: 26,
    height: 34,
  },
  {
    id: "7",
    title: "Raindrop",
    icon: raindrop,
    width: 38,
    height: 32,
  },
];

export const pricing = [
  {
    id: "0",
    title: "Clients",
    price: "40+",
    features: [
      "We’ve had the privilege of partnering with over 40+ satisfied clients, helping them achieve their digital transformation goals.",
    ],
  },
  {
    id: "1",
    title: "Projects",
    price: "60+",
    features: [
      "With a portfolio of 150+ completed projects, our team consistently delivers high-quality web and app development and digital marketing solutions."
    ],
  },
  {
    id: "2",
    title: "Hours Of Support",
    price: "300+",
    features: [
      "Our commitment to client satisfaction is demonstrated by providing over 500+ hours of dedicated support.",
    ],
  },
];

export const benefits = [
  {
    id: "0",
    title: "Web & App Development",
    text: "Crafting visually stunning and highly functional websites and applications, enhanced with advanced AI technology  and drive business growth. ",
    backgroundUrl: "./src/assets/benefits/card-1.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "1",
    title: "Digital Marketing",
    text: "Boosting your online presence with strategic and effective digital marketing campaigns",
    backgroundUrl: "./src/assets/benefits/card-2.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "2",
    title: "SEO Optimization",
    text: "Enhancing your online visibility with strategic SEO optimization, leveraging advanced techniques to improve search engine rankings, and ensure your content reaches the right audience.",
    backgroundUrl: "./src/assets/benefits/card-3.svg",
    iconUrl: benefitIcon3,
    imageUrl: benefitImage2,
  },
  {
    id: "3",
    title: "Personal Branding",
    text: "Building a powerful and distinctive personal brand that resonates with your audience,digital tools to enhance your online presence and establish your unique identity in the market.",
    backgroundUrl: "./src/assets/benefits/card-4.svg",
    iconUrl: benefitIcon4,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "4",
    title: "Graphic Designing",
    text: "Designing captivating and innovative graphics that not only catch the eye but also convey your brand’s message effectively, leveraging creativity and cutting-edge design techniques",
    backgroundUrl: "./src/assets/benefits/card-5.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "5",
    title: "Content Creation ",
    text: "Producing captivating and impactful content that engages your audience and ensure your message resonates across all digital platforms.",
    backgroundUrl: "./src/assets/benefits/card-6.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
  },
];

export const socials = [
  {
    id: "0",
    title: "Discord",
    iconUrl: discordBlack,
    url: "#",
  },
  {
    id: "1",
    title: "Twitter",
    iconUrl: twitter,
    url: "#",
  },
  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: "#",
  },
  {
    id: "3",
    title: "Telegram",
    iconUrl: telegram,
    url: "#",
  },
  {
    id: "4",
    title: "Facebook",
    iconUrl: facebook,
    url: "#",
  },
];
