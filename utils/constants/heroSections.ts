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
    title: "Ministry of Sports and Youth Development",
    subtitle: "Empowering Youth. Building Champions. Fostering Excellence.",
    description: "Welcome to the Ministry of Youth and Sports Development, Imo State - the heartbeat of youth empowerment and sporting excellence in our dear state. Guided by the vision of building a vibrant, talented, and globally competitive generation, we are committed to creating opportunities that inspire our young people to reach their full potential.",
    height: 'extra-large' as const,
    alignment: 'left' as const
  },

  DEPARTMENT: {
    title: "Ministry of Sports and Youth Development Departments & Agencies",
    height: 'medium' as const,
    alignment: 'left' as const

  },
  
  PROJECTS: {
    title: "Our Sports Infrastructure Projects",
    description: "Explore our ongoing and completed sports infrastructure projects, including stadium construction, sports complexes, and facility upgrades that are transforming sports development across Imo State.",
    height: 'medium' as const,
    alignment: 'left' as const
  },
  
  TEAM: {
    title: "Our Leadership Team",
    description: "Meet Hon. Obinna Evaristus Onyeocha, Honourable Commissioner for Sports and Youth Development, and the dedicated team committed to transforming sports development and youth empowerment in Imo State.",
    height: 'medium' as const,
    alignment: 'left' as const,
    className: "py-16 md:py-24"
  },
  
  SERVICES: {
    title: "Our Programs & Services",
    description: "The Ministry of Sports and Youth Development offers comprehensive programs including talent identification, capacity-building training, sports infrastructure development, youth empowerment, and grassroots sports development to foster sporting excellence in Imo State.",
    height: 'medium' as const,
    alignment: 'left' as const,
  },
  
  NEWS: {
    title: "News & Announcements",
    description: "Stay updated with the latest news, press releases, and public notices from the Ministry of Sports and Youth Development, including sports events, athlete achievements, and youth empowerment initiatives.",
    height: 'medium' as const,
    alignment: 'left' as const
  },
  
  MEDIA: {
    title: "Media Gallery & Success Stories",
    description: "Explore our visual documentation of sports events, infrastructure projects, athlete achievements, and youth empowerment success stories from across Imo State.",
    height: 'medium' as const,
    alignment: 'left' as const
  },
  
  EVENTS: {
    title: "Sports Events & Youth Programs",
    description: "Stay informed about upcoming sports competitions, youth marathons, talent identification programs, and community engagement events related to sports development and youth empowerment in Imo State.",
    height: 'medium' as const,
    alignment: 'left' as const
  },
  
  ABOUT: {
    title: "About the Ministry of Sports and Youth Development",
    description: "The statutory organ of government responsible for sports development, youth empowerment, talent identification, and sports infrastructure development across Imo State, ensuring comprehensive sports programs and youth leadership training.",
    height: 'medium' as const,
    alignment: 'left' as const
  }
} as const;
