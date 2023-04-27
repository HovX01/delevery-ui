import AboutImg from "./assets/about.png";
import Features1Img from "./assets/features/feature1.png";
import Features2Img from "./assets/features/feature2.png";
import Features3Img from "./assets/features/feature3.png";
import Features4Img from "./assets/features/feature3.png";
import Avatar1Img from "./assets/testimonials/avatar1.png";
import Avatar2Img from "./assets/testimonials/avatar2.png";
import Avatar3Img from "./assets/testimonials/avatar3.png";
import LogoV2 from "./assets/logo-v2.png";
import HeroImage from "./assets/hero-img.png";
import Features1BgImg from "./assets/features/feature1_bg.png";
import Features2BgImg from "./assets/features/feature2_bg.png";
import Features3BgImg from "./assets/features/feature3_bg.png";
import Features4BgImg from "./assets/features/feature4_bg.png";
import {
  FaGithub,
  FaFacebook
} from "react-icons/fa";

export const navigationData = [
  {
    name: "Deliver",
    href: "#",
  },
  {
    name: "About",
    href: "#",
  },
  {
    name: "Features",
    href: "#",
  },
  {
    name: "Signup",
    href: "#",
  },
];

export const heroData = {
  title: ` Order Products Faster Easier`,
  subtitle:
    "Order your favorite foods at any time and we will deliver them right to where you are.",
  btnText: "Get Started",
  image: HeroImage,
};

export const aboutData = {
  image: AboutImg,
  title: "Find Out A Little More About Us",
  subtitle:
    "We are a company dedicated to the distribution of products by delivery to your home or to the place where you are, with the best quality of delivery.",
};

export const featuresData = {
  title: "Some Services We Offer",
  subtitle:
    "With our app you can view the route of your order, from our local headquarters to the place where you are. Look for the app now!",
  list: [
    {
      image: Features1Img,
      bgImage: Features1BgImg,
      title: "Payment Done",
      description: "Pay with a Visa or PayPal card and without much ado",
      linkText: "Learn more",
      delay: "400",
    },
    {
      image: Features2Img,
      bgImage: Features2BgImg,
      title: "Find Your Product",
      description: "We offer sale of products through the Internet..",
      linkText: "Learn more",
      delay: "700",
    },
    {
      image: Features3Img,
      bgImage: Features3BgImg,
      title: "Print Out",
      description:
        "Print out service gives you convenience if someday you need print data, just edit it all and just print it.",
      linkText: "Learn more",
      delay: "1000",
    },
    {
      image: Features4Img,
      bgImage: Features4BgImg,
      title: "Product Received",
      description: "In our app you can see the delay time of your order...",
      linkText: "Learn more",
      delay: "1300",
    },
  ],
};

export const testimonialsData = [
  {
    image: Avatar1Img,
    name: "Serena",
    web: "rena.com",
    message:
      "Suspendisse ultrices at diam lectus nullam. Nisl, sagittis viverra enim erat tortor ultricies massa turpis. Arcu pulvinar aenean nam laoreet nulla.",
    delay: "300",
  },
  {
    image: Avatar2Img,
    name: "Natalia",
    web: "nataliya.com",
    message:
      "Suspendisse ultrices at diam lectus nullam. Nisl, sagittis viverra enim erat tortor ultricies massa turpis. Arcu pulvinar aenean nam laoreet nulla.",
    delay: "600",
  },
  {
    image: Avatar3Img,
    name: "Vebin",
    web: "vebin.com",
    message:
      "Suspendisse ultrices at diam lectus nullam. Nisl, sagittis viverra enim erat tortor ultricies massa turpis. Arcu pulvinar aenean nam laoreet nulla.",
    delay: "900",
  },
];

export const footerData = {
  logo: LogoV2,
  address: "Product Texas, 216 Bengkok II ToulKok Phnom Penh",
  email: "mrrhov32@gmail.com",
  phone: "+855 99 647 265 (Main)",
  list1: [
    {
      name: "Profile",
      href: "#",
    },
    {
      name: "Features",
      href: "#",
    },
    {
      name: "Careers",
      href: "#",
    },
    {
      name: "DW News",
      href: "#",
    },
  ],
  list2: [
    {
      name: "Support",
      href: "#",
    },
    {
      name: "Sign Up",
      href: "#",
    },
    {
      name: "Guide",
      href: "#",
    },
    {
      name: "Reports",
      href: "#",
    },
    {
      name: "Q & A",
      href: "#",
    },
  ],
  socialList: [
    {
      icon: <FaFacebook />,
      href: "#",
      link: "https://web.facebook.com/gffgfcddfggcchfvhhjgffftfgvhjh"
    },
    {
      icon: <FaGithub />,
      href: "#",
      link: "https://github.com/HovX01"
    },
  ],
};
