export interface NavItem {
  readonly id: string;
  readonly label: string;
}

export interface Project {
  readonly id: string;
  readonly title: string;
  readonly subtitle?: string;
  readonly category: string;
  readonly year: string;
  readonly type: "video" | "image" | "link";
  readonly url?: string;
  readonly hoverImage?: string;
  readonly mediaSrc?: string;
  readonly alt?: string;
  readonly className?: string;
}

export interface Testimonial {
  readonly quote: string;
  readonly name: string;
  readonly designation: string;
  readonly src: string;
}

export interface TeamMember {
  readonly id: string;
  readonly name: string;
  readonly role: string;
  readonly description: string;
  readonly photoSrc?: string;
}

export interface SocialLink {
  readonly label: string;
  readonly href: string;
}

export interface ContactData {
  readonly email: string;
  readonly heading: string;
  readonly headingItalic: string;
  readonly socials: readonly SocialLink[];
}

export interface FooterData {
  readonly copyright: string;
  readonly craftedBy: string;
}

export interface PortfolioData {
  readonly meta: {
    readonly title: string;
    readonly description: string;
    readonly ogTitle: string;
    readonly ogDescription: string;
  };
  readonly hero: {
    readonly eyebrow: string;
    readonly name: string;
    readonly nameItalic: string;
    readonly subtitle: string;
    readonly pills: readonly string[];
    readonly location: string;
  };
  readonly about: {
    readonly word1: string;
    readonly word2: string;
    readonly description: string;
  };
  readonly team: {
    readonly heading: string;
    readonly members: readonly TeamMember[];
  };
  readonly projects: {
    readonly sectionLabel: string;
    readonly heading: string;
    readonly items: readonly Project[];
  };
  readonly gallery: {
    readonly sectionLabel: string;
    readonly heading: string;
    readonly instagramUrl: string;
    readonly youtubeUrl: string;
    readonly testimonials: readonly Testimonial[];
  };
  readonly contact: ContactData;
  readonly cta: {
    readonly words: readonly { text: string; italic?: boolean }[];
    readonly hoverImage?: string;
    readonly hoverCaption?: string;
  };
  readonly footer: FooterData;
  readonly nav: readonly NavItem[];
}
