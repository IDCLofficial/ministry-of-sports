import AnimatedEntrance from "../../components/AnimatedEntrance";
import { ANIMATION_PRESETS } from "../../utils/constants/animations";
import TabContentSystem from "../components/TabContentSystem";

export default function Department() {
    return (
        <div className="min-h-screen bg-white">

            {/* Hero Section */}
            <AnimatedEntrance {...ANIMATION_PRESETS.SECTION_FADE_IN}>
                <section className="relative bg-cover bg-center py-20 md:py-32" style={{ backgroundImage: 'url("/hero_section.png")' }}>
                    <div className="absolute inset-0 bg-black/20"></div>
                    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-20">
                        <AnimatedEntrance {...ANIMATION_PRESETS.TITLE_FADE_DOWN}>
                            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                                Ministry of Sports<br />
                                and Youth Development
                            </h1>
                            <p className="mt-4 text-xl text-white">
                                Departments & Agencies
                            </p>
                        </AnimatedEntrance>
                    </div>
                </section>
            </AnimatedEntrance>

            {/* Main Content Section with Tab System */}
            <TabContentSystem 
                sidebarTitle="Our Departments"
                tabs={[
                    {
                        id: "sports-development",
                        label: "Sports Development",
                        content: {
                            title: "Department of Sports Development",
                            imageSrc: "/assets/no-image-lg.jpg",
                            imageAlt: "Department of Sports Development",
                            description: "The Department of Sports Development designs and implements sports policies, manages state teams and competitions (e.g., National Sports Festival), and promotes grassroots sports development across Imo State.",
                            additionalInfo: [
                                "Development and implementation of comprehensive sports policies",
                                "Management of state teams for National Sports Festival and competitions",
                                "Promotion of grassroots sports development programs",
                                "Coordination of sports competitions and tournaments",
                                "Partnership with sports federations and associations"
                            ]
                        }
                    },
                    {
                        id: "youth-development",
                        label: "Youth Development",
                        content: {
                            title: "Department of Youth Development",
                            imageSrc: "/assets/no-image-lg.jpg",
                            imageAlt: "Department of Youth Development",
                            description: "The Department of Youth Development engages youth in empowerment programs, entrepreneurship, and leadership training. The department coordinates NYSC affairs and implements youth-focused initiatives across Imo State.",
                            additionalInfo: [
                                "Youth empowerment and entrepreneurship programs",
                                "Leadership training and capacity building initiatives",
                                "Coordination of NYSC affairs and youth corps activities",
                                "Implementation of youth development policies",
                                "Partnership with youth organizations and stakeholders"
                            ]
                        }
                    },
                    {
                        id: "talent-hunt-empowerment",
                        label: "Talent Hunt & Empowerment",
                        content: {
                            title: "Department of Talent Hunt and Empowerment",
                            imageSrc: "/assets/no-image-lg.jpg",
                            imageAlt: "Department of Talent Hunt and Empowerment",
                            description: "The Department of Talent Hunt and Empowerment identifies young talents in sports and supports them with training, exposure, and mentorship programs to develop their potential and achieve excellence.",
                            additionalInfo: [
                                "Identification and scouting of young sporting talents",
                                "Provision of specialized training and development programs",
                                "Mentorship and guidance for talented athletes",
                                "Exposure opportunities for local and international competitions",
                                "Partnership with sports academies and training centers"
                            ]
                        }
                    },
                    {
                        id: "sports-infrastructure",
                        label: "Sports Infrastructure",
                        content: {
                            title: "Department of Sports Infrastructure & Facility Management",
                            imageSrc: "/assets/no-image-lg.jpg",
                            imageAlt: "Department of Sports Infrastructure & Facility Management",
                            description: "The Department of Sports Infrastructure & Facility Management oversees the construction, renovation, and maintenance of stadiums and sports complexes across Imo State to support sporting activities and events.",
                            additionalInfo: [
                                "Construction and renovation of sports facilities and stadiums",
                                "Maintenance and upkeep of existing sports complexes",
                                "Planning and development of modern sports infrastructure",
                                "Management of sports facility usage and scheduling",
                                "Coordination of infrastructure projects and upgrades"
                            ]
                        }
                    },
                    {
                        id: "planning-research-statistics",
                        label: "Planning, Research & Statistics",
                        content: {
                            title: "Department of Planning, Research & Statistics",
                            imageSrc: "/assets/no-image-lg.jpg",
                            imageAlt: "Department of Planning, Research & Statistics",
                            description: "The Department of Planning, Research & Statistics monitors and evaluates the ministry's programs, conducts research for policy development, and manages data/statistics to support evidence-based decision making.",
                            additionalInfo: [
                                "Monitoring and evaluation of ministry programs and initiatives",
                                "Conducting research for sports and youth development policies",
                                "Collection and analysis of sports and youth development data",
                                "Statistical reporting and data management",
                                "Policy development support and strategic planning"
                            ]
                        }
                    },
                    {
                        id: "administration-general-services",
                        label: "Administration & General Services",
                        content: {
                            title: "Department of Administration & General Services",
                            imageSrc: "/assets/no-image-lg.jpg",
                            imageAlt: "Department of Administration & General Services",
                            description: "The Department of Administration & General Services handles the internal administration of the ministry, including logistics, records, staff matters, and supplies to ensure smooth operational efficiency.",
                            additionalInfo: [
                                "Internal administration and office management",
                                "Logistics coordination and supply management",
                                "Staff matters and human resource administration",
                                "Records management and documentation",
                                "General services and facility management"
                            ]
                        }
                    },
                    {
                        id: "finance-accounts",
                        label: "Finance & Accounts",
                        content: {
                            title: "Department of Finance & Accounts",
                            imageSrc: "/assets/no-image-lg.jpg",
                            imageAlt: "Department of Finance & Accounts",
                            description: "The Department of Finance & Accounts manages budgeting, fund disbursement, and financial reporting within the ministry to ensure proper financial management and accountability.",
                            additionalInfo: [
                                "Budget preparation and financial planning",
                                "Fund disbursement and expenditure management",
                                "Financial reporting and accounting services",
                                "Revenue management and collection",
                                "Financial compliance and audit coordination"
                            ]
                        }
                    },
                    {
                        id: "media-outreach",
                        label: "Media & Outreach",
                        content: {
                            title: "Department of Public Relations / Media & Outreach",
                            imageSrc: "/assets/no-image-lg.jpg",
                            imageAlt: "Department of Public Relations / Media & Outreach",
                            description: "The Department of Public Relations / Media & Outreach manages the ministry's public communication, coordinates with SWAN (Sports Writers Association of Nigeria), and promotes events and sporting activities.",
                            additionalInfo: [
                                "Public communication and media relations management",
                                "Coordination with SWAN and sports media organizations",
                                "Promotion of ministry events and sporting activities",
                                "Public awareness campaigns and outreach programs",
                                "Digital media management and content creation"
                            ]
                        }
                    }
                ]}
            />
        </div>
    );
}
