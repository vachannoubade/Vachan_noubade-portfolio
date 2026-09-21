import type { PortfolioData } from "@/types";
import mpImg from "@/assets/mp.png";
import fsvVideo from "@/assets/fsv.mp4";
import quicksortImg from "@/assets/quick photo.png";
import g3 from "@/assets/instapage.png";
import g4 from "@/assets/yt page.png";
import spagreeImg from "@/assets/spagree.jpeg";
import mananImg from "@/assets/manan.jpeg";
import adiImg from "@/assets/adi.jpeg";

export const portfolioData: PortfolioData = {
  meta: {
    title: "Vachan Noubade — Sea Fronk · Designer & Developer",
    description:
      "Sea Fronk — modern, high-performance web experiences that feel intuitive, look premium and convert like products.",
    ogTitle: "Vachan Noubade — Sea Fronk",
    ogDescription: "Modern websites, UI/UX & content.",
  },

  hero: {
    eyebrow: "Portfolio · 2026",
    name: "Vachan",
    nameItalic: "Noubade",
    subtitle:
      'I am a passionate designer, developer, and the founder of <em className="font-display">Sea Fronk</em>, where we build premium digital experiences that elevate brands.',
    pills: ["Content Creator", "UI / UX Designer", "Full-Stack Developer"],
    location: "India · Remote",
  },

  about: {
    word1: "Sea Fronk",
    word2: "Here.",
    description:
      "I craft modern, high-performance web experiences that feel intuitive, look premium and convert like products.",
  },

  team: {
    heading: "The core team.",
    members: [
      {
        id: "vachan",
        name: "Vachan Noubade",
        role: "Founder & Full-Stack Developer",
        description: "Visionary designer and developer building premium web experiences.",
        photoSrc: mpImg,
      },
      {
        id: "manan",
        name: "Manan Patel",
        role: "Core Member",
        description: "Strategic mind driving operations and growth for our partners.",
        photoSrc: mananImg,
      },
      {
        id: "adi",
        name: "Aditya Sigh Tomar",
        role: "Creative Lead",
        description: "A brilliant mind currently brewing fresh ideas in the background.",
        photoSrc: adiImg,
      },
    ],
  },

  projects: {
    sectionLabel: "Selected Work",
    heading: "Recent projects.",
    items: [
      {
        id: "ssv",
        title: "SSV Homeopathy Hospital Website",
        category: "Healthcare · Website",
        year: "2026",
        type: "link",
        url: "https://ssv-homeopathy.vercel.app/",
      },
      {
        id: "sudama",
        title: "Sudama pohe bidar",
        category: "Website",
        year: "2026",
        type: "link",
        url: "https://sudamapohebidar.vercel.app/",
        hoverImage: spagreeImg,
      },
    ],
  },

  gallery: {
    sectionLabel: "Studio Feed",
    heading: "From the desk.",
    instagramUrl:
      "https://www.instagram.com/vachan_noubade?igsh=czRweXY3aGFyMWJ4",
    youtubeUrl: "https://www.youtube.com/@vachan_noubade",
    testimonials: [
      {
        quote:
          "Bringing stories to life through creative edits and engaging visuals. Turning simple moments into content worth sharing.",
        name: "",
        designation: "Instagram",
        src: g3,
      },
      {
        quote:
          "Capturing stories, moments, and experiences that deserve to be remembered. Every video is crafted to inspire, entertain, and connect.",
        name: "",
        designation: "YouTube",
        src: g4,
      },
    ],
  },

  contact: {
    email: "vachaaannn@gmail.com",
    heading: "Let's make something ",
    headingItalic: "good",
    socials: [
      {
        label: "Instagram",
        href: "https://www.instagram.com/vachan_noubade?igsh=czRweXY3aGFyMWJ4",
      },
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/yugank-noubade-6740893ba?utm_source=share_via&utm_content=profile&utm_medium=member_android",
      },
    ],
  },

  cta: {
    words: [
      { text: "Let's" },
      { text: "build" },
      { text: "what" },
      { text: "actually", italic: true },
      { text: "matters" },
      { text: "to" },
      { text: "your" },
      { text: "business." },
    ],
  },

  footer: {
    copyright: "© 2026 Sea Fronk",
    craftedBy: "Crafted by Vachan Noubade",
  },

  nav: [
    { id: "top", label: "SeaMen" },
    { id: "team", label: "Team" },
    { id: "work", label: "Work" },
    { id: "about", label: "About" },
    { id: "gallery", label: "Gallery" },
    { id: "contact", label: "Contact" },
  ],
} as const;

export const heroImageSrc = mpImg;
