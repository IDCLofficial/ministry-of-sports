export interface HeroConfig {
  title: string;
  subtitle?: string;
  description?: string;
  backgroundImage?: string;
  backgroundGradient?: string;
  height?: 'small' | 'medium' | 'large' | 'extra-large';
  alignment?: 'left' | 'center';
  overlay?: boolean;
  className?: string;
}
 
export const HERO_CONFIGS = {
  HOME: {
    title: "Promoting Peace and Development in the Niger Delta",
    subtitle: "Intelligence. Development. Sustainability.",
    description: "The Ministry of Niger Delta Affairs and Intelligence coordinates development initiatives, ensures security, and promotes sustainable growth in Imo State's oil-producing communities.",
    height: 'extra-large' as const,
    alignment: 'left' as const
  },
  
  PROJECTS: {
    title: "Our Development Initiatives",
    description: "Explore our ongoing and completed projects focused on infrastructure, community development, and environmental protection in the Niger Delta region of Imo State.",
    height: 'medium' as const,
    alignment: 'left' as const
  },
  
  TEAM: {
    title: "Our Leadership Team",
    description: "Meet Prince Dr. Henry Uzor Okafor, Honourable Commissioner for Niger Delta Affairs and Intelligence, and the dedicated team working towards sustainable development in the region.",
    height: 'medium' as const,
    alignment: 'left' as const,
    className: "py-16 md:py-24"
  },
  
  SERVICES: {
    title: "Our Services",
    description: "The Ministry of Niger Delta Affairs and Intelligence provides comprehensive services including community development, environmental protection, security coordination, and stakeholder engagement in oil-producing communities.",
    height: 'medium' as const,
    alignment: 'left' as const,
    overlay: false
  },
  
  NEWS: {
    title: "News & Updates",
    description: "Stay informed with the latest news, press releases, and announcements from the Ministry of Niger Delta Affairs and Intelligence.",
    height: 'medium' as const,
    alignment: 'left' as const
  },
  
  MEDIA: {
    title: "Media Gallery & Success Stories",
    description: "Explore our visual documentation of development projects, community engagements, and success stories from across the Niger Delta region of Imo State",
    height: 'medium' as const,
    alignment: 'left' as const
  },
  
  EVENTS: {
    title: "Community Engagement & Programs",
    description: "Join us for community development programs, stakeholder meetings, and empowerment initiatives across oil-producing communities in Imo State",
    height: 'medium' as const,
    alignment: 'left' as const
  },
  
  ABOUT: {
    title: "About the Ministry of Niger Delta Affairs and Intelligence",
    description: "Dedicated to promoting peace, sustainable development, and security in Imo State's oil-producing communities through strategic coordination and community engagement.",
    height: 'medium' as const,
    alignment: 'left' as const
  }
} as const;
