import HeroSection from "../../components/HeroSection";
import { HERO_CONFIGS } from "../../utils/constants/heroSections";
import AnimatedEntrance from "../../components/AnimatedEntrance";
import { ANIMATION_PRESETS, STAGGER_DELAYS } from "../../utils/constants/animations";
import { FaUsers, FaShieldHalved, FaLeaf, FaHandshake } from 'react-icons/fa6';
import { FaHandsHelping } from 'react-icons/fa';

export default function Services() {
    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <HeroSection {...HERO_CONFIGS.SERVICES} />

            {/* Main Services Section */}
            <section className="py-12 sm:py-16 md:py-20 bg-white">
                <div className="px-4 sm:px-6 lg:px-20">
                    <AnimatedEntrance {...ANIMATION_PRESETS.TITLE_FADE_DOWN} className="text-center mb-8 sm:mb-12 md:mb-16">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
                            Our Services
                        </h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            The Ministry of Sports and Youth Development provides comprehensive sports development, youth empowerment, and talent nurturing programs to build a dynamic generation of champions in Imo State.
                        </p>
                    </AnimatedEntrance>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                        {/* Service 1 - Capacity-Building & Training Programs */}
                        <AnimatedEntrance {...ANIMATION_PRESETS.CARD_FADE_UP} delay={STAGGER_DELAYS.MEDIUM[0]}>
                            <div className="bg-white border border-gray-200 rounded-lg p-6 sm:p-8 hover:shadow-lg hover:transform hover:scale-105 transition-all duration-300">
                                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                                    <FaUsers className="w-8 h-8 text-green-600" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-4">
                                    Capacity-Building & Training Programs
                                </h3>
                                <p className="text-gray-600 mb-6 leading-relaxed">
                                    Hosted a "Teaching the Teachers for Students Development" seminar to empower School Games Masters across secondary schools in Imo State. This initiative strengthens grassroots sports delivery.
                                </p>
                                <ul className="text-sm text-gray-600 space-y-2 mb-6">
                                    <li className="flex items-center">
                                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3"></div>
                                        School Games Masters empowerment seminars
                                    </li>
                                    <li className="flex items-center">
                                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3"></div>
                                        Grassroots sports delivery training
                                    </li>
                                    <li className="flex items-center">
                                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3"></div>
                                        Secondary school sports development
                                    </li>
                                </ul>
                            </div>
                        </AnimatedEntrance>

                        {/* Service 2 - Talent Identification & Football Scouting */}
                        <AnimatedEntrance {...ANIMATION_PRESETS.CARD_FADE_UP} delay={STAGGER_DELAYS.MEDIUM[2]}>
                            <div className="bg-white border border-gray-200 rounded-lg p-6 sm:p-8 hover:shadow-lg hover:transform hover:scale-105 transition-all duration-300">
                                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                                    <FaShieldHalved className="w-8 h-8 text-green-600" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-4">
                                    Talent Identification & Football Scouting
                                </h3>
                                <p className="text-gray-600 mb-6 leading-relaxed">
                                    Organized a 3-day football scouting programme at Dan Anyiam Stadium with European club officials to discover promising young players for local and international careers.
                                </p>
                                <ul className="text-sm text-gray-600 space-y-2 mb-6">
                                    <li className="flex items-center">
                                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3"></div>
                                        Football scouting programmes with European clubs
                                    </li>
                                    <li className="flex items-center">
                                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3"></div>
                                        Young talent identification and development
                                    </li>
                                    <li className="flex items-center">
                                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3"></div>
                                        Local and international career pathways
                                    </li>
                                </ul>
                            </div>
                        </AnimatedEntrance>

                        {/* Service 3 - Sports Academy Planning */}
                        <AnimatedEntrance {...ANIMATION_PRESETS.CARD_FADE_UP} delay={STAGGER_DELAYS.MEDIUM[4]}>
                            <div className="bg-white border border-gray-200 rounded-lg p-6 sm:p-8 hover:shadow-lg hover:transform hover:scale-105 transition-all duration-300">
                                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                                    <FaLeaf className="w-8 h-8 text-green-600" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-4">
                                    Sports Academy Planning
                                </h3>
                                <p className="text-gray-600 mb-6 leading-relaxed">
                                    Plans are underway to establish a state sports academy for systematic talent identification and training to develop the next generation of sporting champions.
                                </p>
                                <ul className="text-sm text-gray-600 space-y-2 mb-6">
                                    <li className="flex items-center">
                                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3"></div>
                                        State sports academy establishment
                                    </li>
                                    <li className="flex items-center">
                                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3"></div>
                                        Systematic talent identification programs
                                    </li>
                                    <li className="flex items-center">
                                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3"></div>
                                        Professional training and development
                                    </li>
                                </ul>
                            </div>
                        </AnimatedEntrance>

                        {/* Service 4 - Grassroots Development & Partnerships */}
                        <AnimatedEntrance {...ANIMATION_PRESETS.CARD_FADE_UP} delay={STAGGER_DELAYS.MEDIUM[5]}>
                            <div className="bg-white border border-gray-200 rounded-lg p-6 sm:p-8 hover:shadow-lg hover:transform hover:scale-105 transition-all duration-300">
                                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                                    <FaHandsHelping className="w-8 h-8 text-green-600" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-4">
                                    Grassroots Development & Partnerships
                                </h3>
                                <p className="text-gray-600 mb-6 leading-relaxed">
                                    Partnered with Ex‑Iwuanyanwu National (Heartland FC alumni) for youth football development and entry pathways to create opportunities for young athletes.
                                </p>
                                <ul className="text-sm text-gray-600 space-y-2 mb-6">
                                    <li className="flex items-center">
                                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3"></div>
                                        Partnership with Heartland FC alumni
                                    </li>
                                    <li className="flex items-center">
                                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3"></div>
                                        Youth football development programs
                                    </li>
                                    <li className="flex items-center">
                                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3"></div>
                                        Career entry pathways for young athletes
                                    </li>
                                </ul>
                            </div>
                        </AnimatedEntrance>

                        {/* Service 5 - Mini-Football Promotion & Integration */}
                        <AnimatedEntrance {...ANIMATION_PRESETS.CARD_FADE_UP} delay={STAGGER_DELAYS.MEDIUM[0]}>
                            <div className="bg-white border border-gray-200 rounded-lg p-6 sm:p-8 hover:shadow-lg hover:transform hover:scale-105 transition-all duration-300">
                                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                                    <FaHandshake className="w-8 h-8 text-green-600" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-4">
                                    Mini-Football Promotion & Integration
                                </h3>
                                <p className="text-gray-600 mb-6 leading-relaxed">
                                    Endorsed mini-football and partnered with the Imo State Mini Football Association to promote and integrate the sport in local programs across the state.
                                </p>
                                <ul className="text-sm text-gray-600 space-y-2 mb-6">
                                    <li className="flex items-center">
                                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3"></div>
                                        Mini-football endorsement and promotion
                                    </li>
                                    <li className="flex items-center">
                                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3"></div>
                                        Partnership with Mini Football Association
                                    </li>
                                    <li className="flex items-center">
                                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3"></div>
                                        Integration into local youth programs
                                    </li>
                                </ul>
                            </div>
                        </AnimatedEntrance>
                    </div>
                </div>
            </section>

            {/* Service Process Section */}
            <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20">
                    <div className="text-center mb-8 sm:mb-12 md:mb-16">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
                            How to Access Our Services
                        </h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            Follow these simple steps to access our sports development and youth empowerment programs
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 sm:gap-8">
                        {/* Step 1 */}
                        <div className="text-center">
                            <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                                1
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                Visit Our Office
                            </h3>
                            <p className="text-gray-600 text-sm">
                                Come to Block 1, Imo State Secretariat, Port Harcourt Road, Owerri or contact us via phone/email
                            </p>
                        </div>

                        {/* Step 2 */}
                        <div className="text-center">
                            <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                                2
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                Register for Programs
                            </h3>
                            <p className="text-gray-600 text-sm">
                                Complete registration forms for sports programs, talent identification, or youth empowerment initiatives
                            </p>
                        </div>

                        {/* Step 3 */}
                        <div className="text-center">
                            <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                                3
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                Assessment & Selection
                            </h3>
                            <p className="text-gray-600 text-sm">
                                Our team will assess your skills, talents, and suitability for the selected programs
                            </p>
                        </div>

                        {/* Step 4 */}
                        <div className="text-center">
                            <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                                4
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                Program Participation & Development
                            </h3>
                            <p className="text-gray-600 text-sm">
                                Begin your journey in sports development, training programs, and youth empowerment initiatives
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
