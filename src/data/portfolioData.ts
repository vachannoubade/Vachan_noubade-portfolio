import type { PortfolioData } from "@/types";
import mpImg from "@/assets/mp.png";
import ssvVideo from "@/assets/ssv video.mp4";
import quicksortImg from "@/assets/quick photo.png";
import g3 from "@/assets/instapage.png";
import g4 from "@/assets/yt page.png";

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
      'Independent designer & developer crafting modern, high-performance web experiences under the studio name <em className="font-display">Sea Fronk</em>.',
    pills: ["Content Creator", "UI / UX Designer", "Full-Stack Developer"],
    location: "India · Remote",
  },

  about: {
    word1: "Sea Fronk",
    word2: "Here.",
    description:
      "I craft modern, high-performance web experiences that feel intuitive, look premium and convert like products.",
  },

  projects: {
    sectionLabel: "Selected Work",
    heading: "Recent projects.",
    items: [
      {
        id: "ssv",
        title: "SSV Homeopathy Hospital Website",
        category: "Healthcare · Website",
        year: "2025",
        type: "video",
        mediaSrc: ssvVideo,
        alt: "SSV Homeopathy Hospital Website",
      },
      {
        id: "quicksort",
        title: "The Quick Sort",
        subtitle: "Mr's-Sarthi",
        category: "Editorial · Brand",
        year: "2025",
        type: "image",
        mediaSrc: quicksortImg,
        alt: "The Quick Sort — Mr's-Sarthi",
        className: "md:mt-16",
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
    { id: "about", label: "About" },
    { id: "work", label: "Work" },
    { id: "gallery", label: "Gallery" },
    { id: "contact", label: "Contact" },
  ],
} as const;

export const heroImageSrc = mpImg;
