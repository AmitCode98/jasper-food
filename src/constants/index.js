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


// Define the menu items with their names, hrefs, and dropdown flags
export const menuItems = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about", hasDropdown: true },
  { name: "Food Safety & Quality", href: "/food-safety", hasDropdown: true },
  { name: "Product", href: "/product", hasDropdown: true },
  { name: "Contact Us", href: "/contact" },
];

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