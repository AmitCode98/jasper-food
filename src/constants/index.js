
import HeroBgImg from "../assets/images/hero-bg.webp";
import ProfileImg from "../assets/images/profile-img.webp";
import TeamImg from "../assets/images/team-img.webp";
import WhyUsImg from "../assets/images/whyUs-img.webp";
import ManuFacturingImg from '../assets/images/manufacturing-img.webp'
import CuttingImg from '../assets/images/cutting-img.webp'
import MachineryImg from '../assets/images/machinery-img.webp'
import TwitterIcon from "../assets/icons/twitter.svg";
import FacebookIcon from "../assets/icons/facebook.svg";
import InstagramIcon from "../assets/icons/instagram.svg";
import LinkedinIcon from "../assets/icons/linkedin.svg";

import OurFocusIcon from '../assets/icons/our-focus.svg';
import OurFoodIcon from '../assets/icons/our-food.svg';
import OurApproachIcon from '../assets/icons/our-approach.svg';
import OurPeopleIcon from '../assets/icons/our-people.svg';
import OurInnovationIcon from '../assets/icons/our-innovation.svg'
import OurReachIcon from '../assets/icons/our-reach.svg'
import OurSourchingIcon from '../assets/icons/our-sourcing.svg'


// Define the menu items with their names, hrefs, and dropdown flags
export const menuItems = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about", hasDropdown: true },
  { name: "Food Safety & Quality", href: "/food-safety", hasDropdown: true },
  { name: "Product", href: "/product", hasDropdown: true },
  { name: "Contact Us", href: "/contact" },
];

export const heroItem =
  { title: 'JFMPL: Where Excellence Meets Flavour', description: "Welcome to Jasper Food Manufacturers Private Limited (JFMPL), your trusted destination for the finest frozen value added food products and delectable culinary creations. Your cravings deserve the best - and that's exactly what we offer.", bgImg: HeroBgImg }



export const aboutItem = [
  { image: ProfileImg, title: "profile", description: "We're passionate food artisans creating high-quality, delicious products' bring your culinary dreams to life. Explore our offerings and savor the art of flavor with us!" },
  { image: TeamImg, title: "team", description: "From skilled chefs to quality control pros, we unite to ensure top-tier taste and quality. Join us on our culinary mission. Discover the faces behind our flavors!" },
  { image: WhyUsImg, title: "why us", description: "The consumer is at the core of our business. We understand and meet their needs actively and responsibly!" }
]

export const processStep = [
  { processname: "Manufacturing Process", description: 'Nestled in our state-of-the-art manufacturing plant, we take pride in our meticulous approach to hygiene. Every step of our process is imbued with care, ensuring that you receive only the best quality frozen products.', image: ManuFacturingImg },
  {
    processname: "Cutting Edge Techlology", description: "Our cutting-edge technology automates tasks, improve production processes, and reduce waste. This  leads to significant cost savings and increased productivity.It improves food safety by detecting contaminants, tracking the food supply chain, and ensuring that food is cooked to the correct temperature.It helps to reduce the environmental impact of food production by improving energy efficiency and water conservation.", image: CuttingImg
  },
  { processname: "High-tech Machinery", description: 'Nestled in our state-of-the-art manufacturing plant, we take pride in our meticulous approach to hygiene. Every step of our process is imbued with care, ensuring that you receive only the best quality frozen products.', image: MachineryImg }
]

export const socialMedia = [
  { socialMediaIcon: TwitterIcon, socialMediaName: 'twitter', link: 'https://www.twitter.com' },
  { socialMediaIcon: FacebookIcon, socialMediaName: 'facebook', link: 'https://www.facebook.com' },
  { socialMediaIcon: InstagramIcon, socialMediaName: 'instagram', link: 'https://www.instagram.com' },
  { socialMediaIcon: LinkedinIcon, socialMediaName: 'linkedin', link: 'https://www.linkedin.com' }
]

export const aboutUsLinks = [
  {
    text: "Profile",
    href: "/profile",
    label: "Learn more about our profile",
  },
  {
    text: "Teams",
    href: "/teams",
    label: "Explore our teams",
  },
  {
    text: "Why Us",
    href: "/why-us",
    label: "Discover why you should choose us",
  },
];

export const profileText = [
  {
    profileTextOne: "JFMPL stands tall as one of India's leading manufacturers of delectable processed frozen food products, representing the very essence of culinary excellence. Renowned for crafting both vegetarian and non-vegetarian offerings, JFMPL has positioned itself as the vibrant heartbeat of the culinary world. With its headquarters in Delhi NCR."
  },
  {
    profileTextTwo: "At the core of JFMPL's philosophy lies a deep-rooted commitment to sustainability, championing environmentally-conscious practices across all facets of its operations. This noble vision is pursued through a strategic emphasis on cutting-edge technologies, continual product innovation, and an unwavering dedication to fundamental principles such as hygiene, sanitation, quality assurance, excellence, innovation, trust, honesty, and community service. JFMPL is not merely a purveyor of culinary delights; it is a standard-bearer of responsible and ethical business practices, forging a path towards a more sustainable and innovative future in the food industry."
  },
]

export const teamText = [
  {
    teamTextOne: "Our company boasts a team of highly qualified, enthusiastic, and creative individuals, including food technologists, microbiologists, and chefs, who play an indispensable role in our operations. These professionals diligently track market trends, gather feedback, and conduct research through various food channels to gain insights into people's eating habits. Their goal is to enhance our clients' culinary experiences and exceed their expectations."
  },
  {
    teamTextOne: "We allocate significant investments toward refining and developing original product concepts, as our company places a strong emphasis on research and development (R&D). We also dedicate attention to standardizing procedures and scaling up these ideas to ensure consistency and reliability. Our unwavering commitment to quality, facilitated by the dedication of our staff and efficient processes, ensures that our products not only meet but surpass our clients' expectations."
  }
]
export const whyUsData = [
  {
    icon: OurFocusIcon, title: "our focus", description: "At JFMPL, our unwavering focus is on delivering unparalleled quality and excellence in everything we do. From the selection of premium ingredients to the meticulous preparation of our products, we prioritize quality at every step."
  },
  {
    icon: OurFoodIcon, title: "our food", description: "Our commitment to extraordinary food sets us apart. We take pride in the culinary artistry that goes into crafting each of our products. Our menu boasts a diverse range of delectable options that cater to a variety of tastes, ensuring a delightful experience for all."
  },
  {
    icon: OurApproachIcon, title: "our approach", description: "We approach every aspect of our business with a dedication to innovation and sustainability. Our environmentally responsible practices and forward-thinking approach to the industry are what make us a standout choice."
  },
  {
    icon: OurPeopleIcon, title: "our people", description: "Our team is the heart of our success. With a cadre of highly qualified food technologists, microbiologists, and creative chefs, we are uniquely equipped to understand and meet the evolving needs of our clients. Their dedication and expertise drive us forward."
  },
  {
    icon: OurInnovationIcon, title: "our innovation", description: "Innovation is at the core of what we do. We invest significantly in research and development, continuously striving to bring new and exciting products to your table. Our commitment to innovation ensures that you'll always find something extraordinary with us."
  },
  {
    icon: OurReachIcon, title: "our reach", description: "We are proud to serve clients not only in the domestic market but on a global scale. Our reach extends far and wide, allowing us to share our culinary creations with a diverse range of people and cultures."
  },
  {
    icon: OurSourchingIcon, title: "our sourcing", description: "We take great care in sourcing our ingredients. Our partnerships with approved suppliers and rigorous quality control measures ensure that only the finest, safest, and healthiest ingredients make it into our products. You can trust the quality of what we serve."
  }
]