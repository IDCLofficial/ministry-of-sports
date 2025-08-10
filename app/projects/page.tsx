import StatisticsSection from "../../components/StatisticsSection";
import HeroSection from "../../components/HeroSection";
import AnimatedEntrance from "../../components/AnimatedEntrance";
import { FaFacebookF, FaXTwitter, FaInstagram } from 'react-icons/fa6';
import { PROJECTS_STATISTICS } from "../../utils/constants/statistics";
import { HERO_CONFIGS } from "../../utils/constants/heroSections";
import { ANIMATION_PRESETS, STAGGER_DELAYS } from "../../utils/constants/animations";
import Image from "next/image";

// Special Projects
const SPECIAL_PROJECTS = [
    {
        number: 1,
        title: "Completion of Ultra-Modern Indoor Sports Hall/Gym Complex",
        description: "Development of a state-of-the-art indoor sports facility to enhance training capabilities and host major sporting events in Imo State.",
        location: "Owerri",
        category: "Sports Infrastructure",
        status: "In Progress",
        partners: "Ministry of Sports, Construction Partners",
        budget: "₦200M"
    },
    {
        number: 2,
        title: "Construction of New Modern Hostel Complex",
        description: "Building modern accommodation facilities for athletes and sports personnel to support training programs and competitions.",
        location: "Owerri",
        category: "Sports Infrastructure",
        status: "In Progress",
        partners: "Ministry of Sports, Construction Partners",
        budget: "₦200M"
    },
    {
        number: 3,
        title: "Establishment of Imo State Sports Academy",
        description: "Creating a comprehensive sports academy for systematic talent identification, training, and development of young athletes.",
        location: "Owerri",
        category: "Talent Development",
        status: "Planning",
        partners: "Ministry of Sports, Educational Partners",
        budget: "₦120M"
    }
];

export default function Projects() {
    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <HeroSection {...HERO_CONFIGS.PROJECTS} />

            {/* Statistics Section */}
            <StatisticsSection statistics={PROJECTS_STATISTICS} className="bg-white" />
            
            {/* Projects Description */}
            <section className="py-12 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20">
                    <div className="text-center mb-8">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Sports Development Projects</h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            Discover our transformative sports infrastructure and development projects designed to elevate sporting excellence in Imo State. 
                            Each initiative reflects our commitment to building world-class facilities, nurturing talent, and creating opportunities 
                            for youth empowerment through sports and recreation.
                        </p>
                    </div>
                </div>
            </section>

            {/* Projects Grid */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20">
                    <div className="mb-8">
                        <h3 className="text-xl font-semibold text-gray-800 mb-4">Project Updates</h3>
                        <p className="text-gray-600 mb-6">
                            Stay informed about our ongoing and upcoming sports infrastructure and development initiatives 
                            across Imo State. Each project is designed to enhance sporting excellence, youth empowerment, and community engagement through sports.
                        </p>
                        <ul className="list-disc list-inside text-gray-600 space-y-2 mb-8">
                            <li>Sports infrastructure development and facility upgrades</li>
                            <li>Talent identification and development programs</li>
                            <li>Youth empowerment and capacity building initiatives</li>
                            <li>Stadium construction and renovation projects</li>
                            <li>Sports academy establishment and training programs</li>
                        </ul>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {SPECIAL_PROJECTS.map((project, index) => (
                            <AnimatedEntrance 
                                key={project.number} 
                                {...ANIMATION_PRESETS.CARD_FADE_UP} 
                                delay={STAGGER_DELAYS.MEDIUM[index % STAGGER_DELAYS.MEDIUM.length]}
                            >
                                <div className="bg-white border border-gray-200 h-full rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300">
                                    <div className="h-48 bg-green-50 flex items-center justify-center overflow-hidden">
                                        <Image
                                            src={'/assets/no-image-lg.jpg'}
                                            alt={project.title}
                                            width={400}
                                            height={200}
                                            className="object-cover w-full h-full"
                                        />
                                    </div>
                                    <div className="p-6">
                                        <div className="flex justify-between items-start mb-4">
                                            <h3 className="text-lg font-bold text-gray-900">
                                                {project.title}
                                            </h3>
                                            <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                                                project.status === "Active" ? "bg-blue-100 text-blue-800" :
                                                project.status === "In Progress" ? "bg-yellow-100 text-yellow-800" :
                                                project.status === "Completed" ? "bg-green-100 text-green-800" :
                                                project.status === "Ongoing" ? "bg-orange-100 text-orange-800" :
                                                "bg-gray-100 text-gray-800"
                                            }`}>
                                                {project.status}
                                            </span>
                                        </div>
                                        
                                        <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                                            {project.description}
                                        </p>
                                        
                                        <div className="space-y-3 text-sm border-t border-gray-100 pt-4 mt-4">
                                            <div className="flex items-start">
                                                <span className="text-gray-600 w-24 flex-shrink-0">Location:</span>
                                                <span className="text-gray-900">{project.location}</span>
                                            </div>
                                            <div className="flex items-start">
                                                <span className="text-gray-600 w-24 flex-shrink-0">Category:</span>
                                                <span className="text-gray-900">{project.category}</span>
                                            </div>
                                            {project.budget && (
                                                <div className="flex items-start">
                                                    <span className="text-gray-600 w-24 flex-shrink-0">Budget:</span>
                                                    <span className="text-gray-900 font-semibold">{project.budget}</span>
                                                </div>
                                            )}
                                            <div className="flex items-start">
                                                <span className="text-gray-600 w-24 flex-shrink-0">Partners:</span>
                                                <span className="text-gray-900">{project.partners}</span>
                                            </div>
                                        </div>
                                        
                                        <div className="mt-4 pt-4 border-t border-gray-100">
                                            <div className="flex items-center text-sm text-green-600">
                                                <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                                                Last updated: {new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </AnimatedEntrance>
                        ))}
                    </div>
                    
                    <div className="mt-12 text-center">
                        <p className="text-gray-600 mb-4">
                            For the latest updates, follow us on our social media platforms or check back regularly.
                        </p>
                        <div className="flex justify-center space-x-4">
                            <a href="#" className="text-gray-500 hover:text-green-600 transition-colors">
                                <span className="sr-only">Facebook</span>
                                <FaFacebookF className="h-6 w-6" />
                            </a>
                            <a href="#" className="text-gray-500 hover:text-green-600 transition-colors">
                                <span className="sr-only">X (Twitter)</span>
                                <FaXTwitter className="h-6 w-6" />
                            </a>
                            <a href="#" className="text-gray-500 hover:text-green-600 transition-colors">
                                <span className="sr-only">Instagram</span>
                                <FaInstagram className="h-6 w-6" />
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Strategic Goals Section */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20">
                    <div className="text-center mb-10">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Strategic Goals</h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            The Ministry of Sports and Youth Development is committed to transforming sports development and youth empowerment in Imo State through world-class infrastructure, talent nurturing, and comprehensive sports programs.
                        </p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {[
                            "Complete construction of ultra-modern indoor sports hall/gym complex worth ₦200M in Owerri.",
                            "Establish Imo State Sports Academy for systematic talent identification and development.",
                            "Construct Olympic-standard swimming pool and upgrade Dan Anyiam Stadium facilities.",
                            "Build 30,000-capacity modern stadium in Owerri and 10,000-capacity zonal stadium in Orlu.",
                            "Identify and develop over 1,000 young talents across 17 sports disciplines annually.",
                            "Renovate and equip existing sports facilities including Grasshoppers International Handball Stadium.",
                            "Implement comprehensive youth empowerment programs reaching 5,000 beneficiaries yearly.",
                            "Establish partnerships with international sports organizations for coaching upgrades.",
                            "Create modern hostel complex worth ₦200M for athletes and sports personnel.",
                            "Develop grassroots sports programs in all 27 Local Government Areas of Imo State."
                        ].map((goal, index) => (
                            <AnimatedEntrance 
                                key={index} 
                                {...ANIMATION_PRESETS.CARD_FADE_UP} 
                                delay={0.1 * index}
                            >
                                <div className="flex items-start p-4 bg-white rounded-lg shadow-sm">
                                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-100 flex items-center justify-center mr-4">
                                        <span className="text-green-600 font-semibold">{index + 1}</span>
                                    </div>
                                    <p className="text-gray-700">{goal}</p>
                                </div>
                            </AnimatedEntrance>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
