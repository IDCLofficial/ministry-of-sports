export interface NavLink {
  href: string;
  label: string;
} 

export const NAV_LINKS: NavLink[] = [
  {
    href: "/",
    label: "Home"
  },
  {
    href: "/about",
    label: "About Us"
  },
  {
    href: "/departments",
    label: "Departments & Agencies"
  },
  {
    href: "/services",
    label: "Services"
  },
  {
    href: "/projects",
    label: "Projects"
  },
  {
    href: "/news",
    label: "News"
  },
  {
    href: "/events",
    label: "Events"
  },
  {
    href: "/media",
    label: "Media"
  },
  {
    href: "/contact",
    label: "Contact Us"
  }
];

export const CONTACT_INFO = {
  address: "Ministry of Niger Delta Affairs and Intelligence, Imo State Government Secretariat, New Owerri, Imo State, Nigeria.",
  email: "commissioner.ind.solid.min@gmail.com",
  phone: "+234 803 123 4567",
  hours: "Monday to Friday, 8:00 AM – 4:00 PM"
};
