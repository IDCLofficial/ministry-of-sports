import Image from "next/image";
import { 
  FaRegEye, FaBullseye, FaEye, FaClipboardCheck, FaShieldHalved, FaUsers,
  FaBuilding, FaFileContract,
  FaChartLine, FaHouse, FaMapPin, FaFileSignature, FaLandmark, FaCity,
  FaTree
} from "react-icons/fa6";
import HeroSection from "../../components/HeroSection";
import AnimatedEntrance from "../../components/AnimatedEntrance";
import { HERO_CONFIGS } from "../../utils/constants/heroSections";
import { ANIMATION_PRESETS, STAGGER_DELAYS } from "../../utils/constants/animations";

export default function About() {
    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <HeroSection {...HERO_CONFIGS.ABOUT} />

            {/* Ministry Overview Section */}
            <section className="py-12 sm:py-16 md:py-20 bg-white">
                <div className="px-4 sm:px-6 lg:px-20">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
                        <AnimatedEntrance {...ANIMATION_PRESETS.IMAGE_FADE_UP} className="order-2 lg:order-1">
                                <Image
                                    src="/photos/Photo - Ministry of Sports and Youth Development.jpg"
                                    alt="Imo State Ministry of Sports and Youth Development – Overview"
                                    width={600}
                                    height={400}
                                    className="rounded-lg shadow-lg w-full h-auto hover:shadow-xl transition-shadow duration-300"
                                />
                        </AnimatedEntrance>
                        <div className="order-1 lg:order-2">
                            <AnimatedEntrance {...ANIMATION_PRESETS.TEXT_FADE_RIGHT} delay={200}>
                                <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed mb-6 sm:mb-8">
                                    Welcome to the Ministry of Sports and Youth Development, Imo State – the heartbeat of youth empowerment and sporting excellence in our dear state. Guided by the vision of building a vibrant, talented, and globally competitive generation, we are committed to creating opportunities that inspire our young people to reach their full potential.
                                </p>
                                <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed mb-6 sm:mb-8">
                                    Through strategic programs, modern sports infrastructure, and collaborative partnerships, we strive to nurture talent, promote healthy lifestyles, and unite communities through the power of sports. Our comprehensive mandate encompasses talent identification, grassroots development, sports infrastructure management, and youth empowerment initiatives across Imo State.
                                </p>
                                <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
                                    Under the leadership of Hon. Obinna Evaristus Onyeocha, the ministry is committed to implementing Governor Hope Uzodinma&apos;s vision for sports development and youth empowerment that builds champions both on and off the field, fostering a generation celebrated for sporting prowess, leadership, and community vitality.
                                </p>
                            </AnimatedEntrance>
                        </div>
                    </div>
                </div>
            </section>

            {/* Vision, Mission & Core Values Section */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-extrabold text-gray-900">Our Guiding Principles</h2>
                        <div className="mt-4 h-1 w-24 bg-green-600 mx-auto"></div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* Vision Card */}
                        <AnimatedEntrance {...ANIMATION_PRESETS.CARD_FADE_UP} delay={STAGGER_DELAYS.MEDIUM[0]}>
                            <div className="bg-white rounded-xl shadow-lg p-8 h-full">
                                <div className="flex items-center mb-6">
                                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                                        <FaRegEye className="w-6 h-6 text-green-600" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900">Our Vision</h3>
                                </div>
                                <p className="text-gray-600 leading-relaxed">
                                    To build a dynamic, inclusive, and high-performing generation of youth, celebrated for sporting prowess, leadership, and community vitality.
                                </p>
                            </div>
                        </AnimatedEntrance>

                        {/* Mission Card */}
                        <AnimatedEntrance {...ANIMATION_PRESETS.CARD_FADE_UP} delay={STAGGER_DELAYS.MEDIUM[1]}>
                            <div className="bg-white rounded-xl shadow-lg p-8 h-full">
                                <div className="flex items-center mb-6">
                                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                                        <FaBullseye className="w-6 h-6 text-green-600" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
                                </div>
                                <p className="text-gray-600 mb-6 leading-relaxed">
                                    The Ministry of Sports and Youth Development is geared towards ensuring the development of sports and fostering sporting activities in the state, while empowering youth through strategic programs and modern infrastructure.
                                </p>
                                <h4 className="font-semibold text-gray-800 mt-4 mb-2">Our Core Mandates:</h4>
                                <ul className="space-y-3">
                                    {[
                                        "Talent identification & grassroots development: Engaging local government areas (LGAs) across the state to identify young sporting talents",
                                        "Supporting women and youth football: Oversight for Heartland Queens FC and support for their welfare and performance development",
                                        "Promotion of mini-football: Integration of mini-football into state sports programs",
                                        "Collaboration with SWAN: Working with Sports Writers Association of Nigeria to boost media coverage and youth talent projection",
                                        "Sports infrastructure development and facility management",
                                        "Youth empowerment programs, entrepreneurship, and leadership training"
                                    ].map((item, index) => (
                                        <li key={index} className="flex items-start">
                                            <div className="flex-shrink-0 mt-1">
                                                <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                                            </div>
                                            <span className="text-gray-600 text-sm">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </AnimatedEntrance>
                    </div>

                    {/* Core Values */}
                    <AnimatedEntrance {...ANIMATION_PRESETS.TEXT_FADE_RIGHT} delay={STAGGER_DELAYS.MEDIUM[2]}>
                        <div className="mt-16">
                            <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">Our Core Values</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {[
                                    { title: "Fair Play", icon: <FaEye className="w-6 h-6 text-green-600" /> },
                                    { title: "Social Justice", icon: <FaClipboardCheck className="w-6 h-6 text-green-600" /> },
                                    { title: "Equality", icon: <FaShieldHalved className="w-6 h-6 text-green-600" /> },
                                    { title: "Self-Reliance", icon: <FaUsers className="w-6 h-6 text-green-600" /> },
                                    { title: "Discipline", icon: <FaTree className="w-6 h-6 text-green-600" /> },
                                    { title: "Excellence", icon: <FaChartLine className="w-6 h-6 text-green-600" /> }
                                ].map((value, index) => (
                                    <div key={index} className="bg-white p-6 rounded-xl shadow-md text-center">
                                        <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                            {value.icon}
                                        </div>
                                        <h4 className="text-lg font-semibold text-gray-900 mb-2">{value.title}</h4>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </AnimatedEntrance>
                </div>
            </section>

            {/* Commissioner Profile Section */}
            <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
                        <div className="order-2 lg:order-1">
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
                                Hon. Obinna Evaristus Onyeocha
                            </h2>
                            <p className="text-lg sm:text-xl text-green-600 font-semibold mb-4 sm:mb-6">
                                Honourable Commissioner for Sports and Youth Development
                            </p>
                            <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed mb-4 sm:mb-6">
                                Hon. Obinna Evaristus Onyeocha serves as the Honourable Commissioner for Sports and Youth Development in Imo State under the administration of His Excellency, Senator Hope Uzodinma. A passionate advocate for youth empowerment and sports development, Hon. Onyeocha brings extensive experience in sports administration and youth development to his role.
                            </p>
                            <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed mb-6 sm:mb-8">
                                Under his leadership, the ministry has intensified efforts in talent identification, grassroots sports development, and youth empowerment programs. His vision aligns with building a dynamic generation of youth celebrated for sporting excellence and leadership, fostering community development through sports and creating pathways for young people to reach their full potential.
                            </p>
                        </div>
                        <div className="order-1 lg:order-2">
                            <Image
                                src="/photos/Hon. Obinna Evaristus Onyeocha – Honourable Commissioner for Sports and Youth Development.jpg"
                                alt="Hon. Obinna Evaristus Onyeocha – Honourable Commissioner for Sports and Youth Development"
                                width={500}
                                height={600}
                                className="rounded-lg shadow-lg w-full h-auto"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Responsibilities Section */}
            <section className="py-12 sm:py-16 md:py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20">
                    <div className="text-center mb-8 sm:mb-12 md:mb-16">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
                            Our Core Services
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                        {/* Sports Development */}
                        <div className="bg-gray-50 p-6 sm:p-8 rounded-lg text-center">
                            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                                <FaFileContract className="w-8 h-8 sm:w-10 sm:h-10 text-green-600" />
                            </div>
                            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">
                                Sports Development
                            </h3>
                            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                                Designs and implements sports policies, manages state teams and competitions (e.g., National Sports Festival), and promotes grassroots sports development across Imo State.
                            </p>
                        </div>

                        {/* Youth Development */}
                        <div className="bg-gray-50 p-6 sm:p-8 rounded-lg text-center">
                            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                                <FaChartLine className="w-8 h-8 sm:w-10 sm:h-10 text-green-600" />
                            </div>
                            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">
                                Youth Development
                            </h3>
                            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                                Engages youth in empowerment programs, entrepreneurship, and leadership training. Coordinates NYSC affairs and youth-focused initiatives across the state.
                            </p>
                        </div>

                        {/* Talent Hunt and Empowerment */}
                        <div className="bg-gray-50 p-6 sm:p-8 rounded-lg text-center">
                            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                                <FaBuilding className="w-8 h-8 sm:w-10 sm:h-10 text-green-600" />
                            </div>
                            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">
                                Talent Hunt & Empowerment
                            </h3>
                            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                                Identifies young talents in sports and supports them with training, exposure, and mentorship programs to develop their potential.
                            </p>
                        </div>

                        {/* Sports Infrastructure */}
                        <div className="bg-gray-50 p-6 sm:p-8 rounded-lg text-center">
                            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                                <FaHouse className="w-8 h-8 sm:w-10 sm:h-10 text-green-600" />
                            </div>
                            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">
                                Sports Infrastructure
                            </h3>
                            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                                Oversees the construction, renovation, and maintenance of stadiums and sports complexes across Imo State.
                            </p>
                        </div>

                        {/* Media & Outreach */}
                        <div className="bg-gray-50 p-6 sm:p-8 rounded-lg text-center">
                            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                                <FaShieldHalved className="w-8 h-8 sm:w-10 sm:h-10 text-green-600" />
                            </div>
                            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">
                                Media & Outreach
                            </h3>
                            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                                Manages the ministry&apos;s public communication, coordinates with SWAN, and promotes sporting events and youth empowerment initiatives.
                            </p>
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

            {/* Leadership Team Section */}
            <section className="py-12 sm:py-16 md:py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Our Leadership Team</h2>
                        <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                            Meet the dedicated leaders driving sports development, youth empowerment, and talent identification in Imo State.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 lg:gap-12">
                        {/* Honourable Commissioner */}
                        <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 transition-all hover:shadow-xl">
                            <div className="aspect-[3.8/4] bg-gray-100 overflow-hidden">
                                <Image
                                    src="/photos/Hon. Obinna Evaristus Onyeocha – Honourable Commissioner for Sports and Youth Development.jpg"
                                    alt="Hon. Obinna Evaristus Onyeocha – Honourable Commissioner for Sports and Youth Development"
                                    width={400}
                                    height={400}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="p-6">
                            <h3 className="text-xl font-bold text-gray-900">Hon. Obinna Evaristus Onyeocha</h3>
                            <p className="text-green-700 font-medium mt-1">Honourable Commissioner</p>
                            </div>
                        </div>

                        {/* Permanent Secretary */}
                        <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 transition-all hover:shadow-xl">
                            <div className="aspect-[3.8/4] bg-gray-100 overflow-hidden">
                                <Image
                                    src="/photos/UTAZI DOROTHY CHIMEZIE Ph.D PERMANENT SECRETARY  MINISTRY OF SPORTS.jpg"
                                    alt="UTAZI DOROTHY CHIMEZIE Ph.D PERMANENT SECRETARY  MINISTRY OF SPORTS"
                                    width={400}
                                    height={400}
                                    className="w-full h-full object-cover object-[50%_30%]"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-900 capitalize">Utazi Dorothy Chimezie Ph.D</h3>
                                <p className="text-green-700 font-medium mt-1">Permanent Secretary</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Structure Section */}
            <section className="py-12 sm:py-16 md:py-20 bg-gray-900 grid-bg text-white">
                <div className="max-w-7xl mx-auto px-4 space-y-10 sm:px-6 lg:px-20">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
                        <div>
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
                                Our Structure
                            </h2>
                            <p className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed mb-6">
                                The Ministry of Sports and Youth Development operates through a well-defined hierarchical structure designed to effectively manage sports development, youth empowerment, and talent identification across Imo State. Our organizational setup ensures efficient service delivery, policy implementation, and coordination with relevant stakeholders in the sports and youth development sector.
                            </p>
                        </div>
                        <div>
                            <Image
                                src="/photos/Structure - Ministry of Sports and Youth Development.jpg"
                                alt="Ministry of Sports and Youth Development - Organizational Structure"
                                width={600}
                                height={400}
                                className="rounded-lg shadow-lg w-full h-auto"
                            />
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                        {/* Sports Development Department */}
                        <div className="bg-gray-800 p-5 sm:p-6 rounded-lg hover:bg-gray-700 transition-colors">
                            <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center mb-4">
                                <FaLandmark className="w-5 h-5 text-white" />
                            </div>
                            <h3 className="text-lg font-semibold mb-2">Sports Development</h3>
                            <p className="text-sm text-gray-400">Designs and implements sports policies, manages state teams and competitions, and promotes grassroots sports development.</p>
                        </div>

                        {/* Youth Development Department */}
                        <div className="bg-gray-800 p-5 sm:p-6 rounded-lg hover:bg-gray-700 transition-colors">
                            <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center mb-4">
                                <FaMapPin className="w-5 h-5 text-white" />
                            </div>
                            <h3 className="text-lg font-semibold mb-2">Youth Development</h3>
                            <p className="text-sm text-gray-400">Engages youth in empowerment programs, entrepreneurship, and leadership training. Coordinates NYSC affairs.</p>
                        </div>

                        {/* Talent Hunt & Empowerment */}
                        <div className="bg-gray-800 p-5 sm:p-6 rounded-lg hover:bg-gray-700 transition-colors">
                            <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center mb-4">
                                <FaCity className="w-5 h-5 text-white" />
                            </div>
                            <h3 className="text-lg font-semibold mb-2">Talent Hunt & Empowerment</h3>
                            <p className="text-sm text-gray-400">Identifies young talents in sports and supports them with training, exposure, and mentorship.</p>
                        </div>

                        {/* Sports Infrastructure */}
                        <div className="bg-gray-800 p-5 sm:p-6 rounded-lg hover:bg-gray-700 transition-colors">
                            <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center mb-4">
                                <FaHouse className="w-5 h-5 text-white" />
                            </div>
                            <h3 className="text-lg font-semibold mb-2">Sports Infrastructure</h3>
                            <p className="text-sm text-gray-400">Oversees the construction, renovation, and maintenance of stadiums and sports complexes.</p>
                        </div>

                        {/* Planning, Research & Statistics */}
                        <div className="bg-gray-800 p-5 sm:p-6 rounded-lg hover:bg-gray-700 transition-colors">
                            <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center mb-4">
                                <FaClipboardCheck className="w-5 h-5 text-white" />
                            </div>
                            <h3 className="text-lg font-semibold mb-2">Planning, Research & Statistics</h3>
                            <p className="text-sm text-gray-400">Monitors and evaluates the ministry&apos;s programs, conducts research for policy development, and manages data/statistics.</p>
                        </div>

                        {/* Administration & General Services */}
                        <div className="bg-gray-800 p-5 sm:p-6 rounded-lg hover:bg-gray-700 transition-colors">
                            <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center mb-4">
                                <FaFileSignature className="w-5 h-5 text-white" />
                            </div>
                            <h3 className="text-lg font-semibold mb-2">Administration & General Services</h3>
                            <p className="text-sm text-gray-400">Handles the internal administration of the ministry, including logistics, records, staff matters, and supplies.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
