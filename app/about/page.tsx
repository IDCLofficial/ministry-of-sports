import Image from "next/image";
import { 
  FaRegEye, FaBullseye, FaEye, FaClipboardCheck, FaShieldHalved, FaUserTie, FaLightbulb, FaUsers,
  FaBuilding, FaHandshake, FaRoad, FaTree, FaUserShield, FaFileContract, FaGraduationCap,
  FaChartLine, FaBullhorn
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
                                src="/assets/no-image.png"
                                alt="Ministry of Niger Delta Affairs and Intelligence – Overview"
                                width={600}
                                height={400}
                                className="rounded-lg shadow-lg w-full h-auto hover:shadow-xl transition-shadow duration-300"
                            />
                        </AnimatedEntrance>
                        <div className="order-1 lg:order-2">
                            <AnimatedEntrance {...ANIMATION_PRESETS.TEXT_FADE_RIGHT} delay={200}>
                                <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed mb-6 sm:mb-8">
                                    The Ministry of Niger Delta Affairs and Intelligence, under the Government of Imo State, serves as a strategic institution dedicated to promoting peace, sustainable development, and security within the state&apos;s oil-producing communities. It functions as a vital link between the state government, host communities, oil and gas operators, and national security agencies.
                                </p>
                            </AnimatedEntrance>
                            <AnimatedEntrance {...ANIMATION_PRESETS.TEXT_FADE_RIGHT} delay={400}>
                                <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed mb-6 sm:mb-8">
                                    Established to address the unique challenges of the Niger Delta region in Imo State, the Ministry has evolved to integrate community-based intelligence and security coordination. It now plays a vital role in supervising Niger Delta-focused interventions, promoting peace in oil-rich LGAs, and ensuring that community needs are addressed through data-driven policies and effective project implementation.
                                </p>
                            </AnimatedEntrance>
                            <AnimatedEntrance {...ANIMATION_PRESETS.TEXT_FADE_RIGHT} delay={600}>
                                <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
                                    Our work is guided by the principles of transparency, accountability, and innovation in public financial management. We are committed to implementing sound fiscal policies that promote economic stability, attract investments, and create an enabling environment for businesses to thrive. Through strategic partnerships with development agencies and the private sector, we are working to build a more prosperous and economically vibrant Imo State for present and future generations.
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
                                    To serve as the primary vehicle for the execution of government plans and programmes aimed at the rapid socio‑economic development of the Niger Delta Region
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
                                    To formulate and implement strategic plans, programmes, and initiatives, as well as coordinate the activities of government agencies, host communities, development partners, donor agencies, and other stakeholders to fast‑track the development of the Niger Delta Region
                                </p>
                                <ul className="space-y-3">
                                    {[
                                        "Ensure effective coordination of interventions in oil‑producing communities",
                                        "Integrate community‑based intelligence into planning and security",
                                        "Promote peacebuilding and conflict prevention in host communities",
                                        "Facilitate youth empowerment and tailored skills programmes",
                                        "Oversee environmental restoration and sustainable infrastructure",
                                        "Enhance transparency, accountability, and performance monitoring"
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
                                    { title: "Transparency", icon: <FaEye className="w-6 h-6 text-green-600" /> },
                                    { title: "Accountability", icon: <FaClipboardCheck className="w-6 h-6 text-green-600" /> },
                                    { title: "Integrity", icon: <FaShieldHalved className="w-6 h-6 text-green-600" /> },
                                    { title: "Professionalism", icon: <FaUserTie className="w-6 h-6 text-green-600" /> },
                                    { title: "Innovation", icon: <FaLightbulb className="w-6 h-6 text-green-600" /> },
                                    { title: "People-Centeredness", icon: <FaUsers className="w-6 h-6 text-green-600" /> }
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

            {/* Core Responsibilities Section */}
            <section className="py-12 sm:py-16 md:py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20">
                    <div className="text-center mb-8 sm:mb-12 md:mb-16">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
                            Our Key Focus Areas
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                        {/* Financial Policy Development */}
                        <div className="bg-gray-50 p-6 sm:p-8 rounded-lg text-center">
                            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                                <FaBuilding className="w-8 h-8 sm:w-10 sm:h-10 text-green-600" />
                            </div>
                            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">
                                Inclusive Development in Oil‑Producing Areas
                            </h3>
                            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                                Delivering people‑centred projects and services across host communities, ensuring equitable benefits and sustainable local impact.
                            </p>
                        </div>

                        {/* Revenue Mobilization and Allocation */}
                        <div className="bg-gray-50 p-6 sm:p-8 rounded-lg text-center">
                            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                                <FaUserShield className="w-8 h-8 sm:w-10 sm:h-10 text-green-600" />
                            </div>
                            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">
                                Intelligence‑Led Security Collaboration
                            </h3>
                            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                                Integrating community‑based intelligence with security agency efforts to deter illegal bunkering, vandalism, and related threats.
                            </p>
                        </div>

                        {/* Budgeting and Fiscal Planning */}
                        <div className="bg-gray-50 p-6 sm:p-8 rounded-lg text-center">
                            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                                <FaHandshake className="w-8 h-8 sm:w-10 sm:h-10 text-green-600" />
                            </div>
                            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">
                                Strengthen Community–Oil Company Relations
                            </h3>
                            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                                Building effective interfaces among communities, operators, and regulators to uphold obligations and expand local content benefits.
                            </p>
                        </div>

                        {/* Debt and Asset Management */}
                        <div className="bg-gray-50 p-6 sm:p-8 rounded-lg text-center">
                            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                                <FaGraduationCap className="w-8 h-8 sm:w-10 sm:h-10 text-green-600" />
                            </div>
                            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">
                                Youth and Women Empowerment
                            </h3>
                            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                                Advancing skills, livelihoods, and inclusion for youths and women through targeted programmes across oil‑producing LGAs.
                            </p>
                        </div>

                        {/* Expenditure Monitoring and Reporting */}
                        <div className="bg-gray-50 p-6 sm:p-8 rounded-lg text-center">
                            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                                <FaTree className="w-8 h-8 sm:w-10 sm:h-10 text-green-600" />
                            </div>
                            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">
                                Environmental Protection and Restoration
                            </h3>
                            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                                Preventing and remediating pollution, restoring ecosystems, and promoting resilience in riverine and oil‑producing areas.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Commissioner Profile Section */}
            <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
                        <div className="order-2 lg:order-1">
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
                                Prince Dr. Henry Uzor Okafor
                            </h2>
                            <p className="text-lg sm:text-xl text-green-600 font-semibold mb-4 sm:mb-6">
                                Honourable Commissioner for Niger Delta Affairs and Intelligence
                            </p>
                            <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed mb-4 sm:mb-6">
                                Appointed in 2024, Prince Dr. Henry Uzor Okafor brings rich experience from public administration and grassroots development. He has aligned the Ministry&apos;s operations with initiatives focused on environmental sustainability, youth empowerment, and regional security.
                            </p>
                            <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed mb-6 sm:mb-8">
                                Hailing from Oguta LGA, he is respected for diplomatic leadership and conflict resolution, especially in addressing oil spill remediation, community agitation, and resource management. His vision is to strengthen partnerships with communities, security agencies, and development partners for inclusive governance and peace in oil‑producing regions.
                            </p>
                        </div>
                        <div className="order-1 lg:order-2">
                            <Image
                                src="/assets/no-image.png"
                                alt="Prince Dr. Henry Uzor Okafor – Honourable Commissioner for Niger Delta Affairs and Intelligence"
                                width={500}
                                height={600}
                                className="rounded-lg shadow-lg w-full h-auto"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="py-12 sm:py-16 md:py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Our Leadership Team</h2>
                        <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                            Meet Hon. Chuk Chukwuemeka and the dedicated team driving the Ministry of Finance and Economic Development&apos;s mission to ensure sound financial management and economic growth in Imo State.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
                        {/* Commissioner */}
                        <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
                            <div className="h-64 bg-gray-100 overflow-hidden">
                                <Image
                                    src="/assets/no-image.png"
                                    alt="Prince Dr. Henry Uzor Okafor – Honourable Commissioner for Niger Delta Affairs and Intelligence"
                                    width={400}
                                    height={400}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-900">Prince Dr. Henry Uzor Okafor</h3>
                                <p className="text-green-700 font-medium mt-1">Honourable Commissioner for Niger Delta Affairs and Intelligence</p>
                                <p className="mt-4 text-gray-600">
                                    Appointed in 2024, he leads security‑aware development in oil‑producing LGAs, strengthening partnerships with communities, security agencies, and development partners.
                                </p>
                            </div>
                        </div>

                        {/* Permanent Secretary */}
                        <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
                            <div className="h-64 bg-gray-100 overflow-hidden">
                                <Image
                                    src="/assets/no-image.png"
                                    alt="Barr. Ibe Elieazah – Permanent Secretary"
                                    width={400}
                                    height={400}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-900">Barr. Ibe Elieazah</h3>
                                <p className="text-green-700 font-medium mt-1">Permanent Secretary</p>
                                <p className="mt-4 text-gray-600">
                                    Chief administrative officer responsible for daily operations, civil service management, and coordination across departments to deliver the ministry’s Niger Delta mandate.
                                </p>
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
                                The Ministry of Niger Delta Affairs and Intelligence operates through a clear structure led by the Commissioner and supported by the Permanent Secretary. Our framework includes an Intelligence arm for security coordination, Liaison/Development Units that bridge host communities and oil firms, and a Media/PR Unit for public engagement—ensuring coordinated delivery across all departments.
                            </p>
                        </div>
                        <div>
                            <Image
                                src="/assets/no-image.png"
                                alt="Ministry of Niger Delta Affairs and Intelligence - Organizational Structure"
                                width={600}
                                height={400}
                                className="rounded-lg shadow-lg w-full h-auto"
                            />
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                        {/* Department of Expenditure */}
                        <div className="bg-gray-800 p-5 sm:p-6 rounded-lg hover:bg-gray-700 transition-colors">
                            <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center mb-4">
                                <FaClipboardCheck className="w-5 h-5 text-white" />
                            </div>
                            <h3 className="text-lg font-semibold mb-2">Administration & Human Resources</h3>
                            <p className="text-sm text-gray-400">Ensures smooth operations and staffing through recruitment, training, welfare, and performance management across all departments.</p>
                        </div>

                        {/* Department of Financial Services */}
                        <div className="bg-gray-800 p-5 sm:p-6 rounded-lg hover:bg-gray-700 transition-colors">
                            <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center mb-4">
                                <FaUserShield className="w-5 h-5 text-white" />
                            </div>
                            <h3 className="text-lg font-semibold mb-2">Finance & Accounts</h3>
                            <p className="text-sm text-gray-400">Manages funds with transparency, maintaining records, processing disbursements, and enforcing financial controls for projects and programmes.</p>
                        </div>

                        {/* Department of Budget */}
                        <div className="bg-gray-800 p-5 sm:p-6 rounded-lg hover:bg-gray-700 transition-colors">
                            <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center mb-4">
                                <FaChartLine className="w-5 h-5 text-white" />
                            </div>
                            <h3 className="text-lg font-semibold mb-2">Planning, Research & Statistics</h3>
                            <p className="text-sm text-gray-400">Guides evidence‑based development through studies, KPIs, monitoring, and alignment of interventions with Niger Delta priorities.</p>
                        </div>

                        {/* Department of Accounts */}
                        <div className="bg-gray-800 p-5 sm:p-6 rounded-lg hover:bg-gray-700 transition-colors">
                            <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center mb-4">
                                <FaUsers className="w-5 h-5 text-white" />
                            </div>
                            <h3 className="text-lg font-semibold mb-2">Community Development & Advocacy</h3>
                            <p className="text-sm text-gray-400">Empowers youths and women, strengthens local leadership, and advances inclusive participation and grievance resolution in host communities.</p>
                        </div>

                        {/* Department of Economic Research */}
                        <div className="bg-gray-800 p-5 sm:p-6 rounded-lg hover:bg-gray-700 transition-colors">
                            <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center mb-4">
                                <FaHandshake className="w-5 h-5 text-white" />
                            </div>
                            <h3 className="text-lg font-semibold mb-2">Oil Companies & Stakeholder Relations</h3>
                            <p className="text-sm text-gray-400">Interfaces with operators and regulators, monitors MoUs and CSR obligations, and safeguards host community interests.</p>
                        </div>

                        {/* Department of Internal Audit */}
                        <div className="bg-gray-800 p-5 sm:p-6 rounded-lg hover:bg-gray-700 transition-colors">
                            <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center mb-4">
                                <FaRoad className="w-5 h-5 text-white" />
                            </div>
                            <h3 className="text-lg font-semibold mb-2">Infrastructure & Project Implementation</h3>
                            <p className="text-sm text-gray-400">Delivers roads and community assets, supervises contractors, enforces standards, and documents progress for transparency.</p>
                        </div>

                        {/* Department of Procurement */}
                        <div className="bg-gray-800 p-5 sm:p-6 rounded-lg hover:bg-gray-700 transition-colors">
                            <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center mb-4">
                                <FaUserTie className="w-5 h-5 text-white" />
                            </div>
                            <h3 className="text-lg font-semibold mb-2">Environmental Protection & Restoration</h3>
                            <p className="text-sm text-gray-400">Prevents and remediates pollution, coordinates spill response with NOSDRA, and promotes ecosystem restoration.</p>
                        </div>

                        {/* Department of HR */}
                        <div className="bg-gray-800 p-5 sm:p-6 rounded-lg hover:bg-gray-700 transition-colors">
                            <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center mb-4">
                                <FaUserShield className="w-5 h-5 text-white" />
                            </div>
                            <h3 className="text-lg font-semibold mb-2">Intelligence & Security Coordination</h3>
                            <p className="text-sm text-gray-400">Integrates community‑based intelligence with security agencies to deter illegal bunkering, vandalism, and threats.</p>
                        </div>

                        {/* Department of ICT */}
                        <div className="bg-gray-800 p-5 sm:p-6 rounded-lg hover:bg-gray-700 transition-colors">
                            <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center mb-4">
                                <FaFileContract className="w-5 h-5 text-white" />
                            </div>
                            <h3 className="text-lg font-semibold mb-2">Legal & Compliance Unit</h3>
                            <p className="text-sm text-gray-400">Provides legal guidance, drafts and vets documents, and ensures statutory and procurement compliance across programmes.</p>
                        </div>

                        {/* Legal Unit */}
                        <div className="bg-gray-800 p-5 sm:p-6 rounded-lg hover:bg-gray-700 transition-colors">
                            <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center mb-4">
                                <FaBullhorn className="w-5 h-5 text-white" />
                            </div>
                            <h3 className="text-lg font-semibold mb-2">Public Relations & Media Unit</h3>
                            <p className="text-sm text-gray-400">Publishes project updates and impact stories, manages enquiries and feedback, and coordinates media engagements.</p>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}
