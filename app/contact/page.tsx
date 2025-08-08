import { FaSquareFacebook, FaTwitter, FaInstagram, FaPhone, FaLocationDot, FaShare, FaEnvelope } from 'react-icons/fa6';
import AnimatedEntrance from "../../components/AnimatedEntrance";
import { ANIMATION_PRESETS, STAGGER_DELAYS } from "../../utils/constants/animations";

export default function Contact() {
    return (
        <div className="min-h-screen bg-white">
            {/* Green Header Bar */}
            <div className="bg-green-600 h-20"></div>

            {/* Main Contact Section */}
            <section className="py-16 bg-gray-50">
                <div className="px-4 sm:px-6 lg:px-20">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
                        {/* Left Column - Contact Information */}
                        <div>
                            <AnimatedEntrance {...ANIMATION_PRESETS.TITLE_FADE_DOWN}>
                                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
                                    CONTACT US
                                </h1>
                            </AnimatedEntrance>
                            <AnimatedEntrance {...ANIMATION_PRESETS.TEXT_FADE_LEFT} delay={200}>
                                <p className="text-gray-600 mb-12 leading-relaxed">
                                    Reach out to the Ministry of Niger Delta Affairs and Intelligence for enquiries, feedback, or partnership opportunities. We are here to assist you.
                                </p>
                            </AnimatedEntrance>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                                {/* Phone */}
                                <AnimatedEntrance {...ANIMATION_PRESETS.CARD_FADE_UP} delay={STAGGER_DELAYS.MEDIUM[1]}>
                                    <div className="hover:transform hover:scale-105 transition-transform duration-300">
                                        <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mb-4">
                                            <FaPhone className="w-6 h-6 text-white" />
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-2">Phone</h3>
                                        <div className="space-y-1">
                                            <a href="tel:+2348031234567" className="block text-blue-600 hover:text-blue-800 transition-colors duration-300">+234 803 123 4567</a>
                                        </div>
                                    </div>
                                </AnimatedEntrance>

                                {/* Office */}
                                <AnimatedEntrance {...ANIMATION_PRESETS.CARD_FADE_UP} delay={STAGGER_DELAYS.MEDIUM[2]}>
                                    <div className="hover:transform hover:scale-105 transition-transform duration-300">
                                        <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mb-4">
                                            <FaLocationDot className="w-6 h-6 text-white" />
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-2">Office Address</h3>
                                        <p className="text-gray-600">
                                            Ministry of Niger Delta Affairs and Intelligence, Imo State Government Secretariat, New Owerri, Imo State, Nigeria.
                                        </p>
                                    </div>
                                </AnimatedEntrance>

                                {/* Socials */}
                                <AnimatedEntrance {...ANIMATION_PRESETS.CARD_FADE_UP} delay={STAGGER_DELAYS.MEDIUM[3]}>
                                    <div className="hover:transform hover:scale-105 transition-transform duration-300">
                                        <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mb-4">
                                            <FaShare className="w-6 h-6 text-white" />
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-2">Socials</h3>
                                        <div className="flex space-x-3 text-white">
                                            <a href="https://facebook.com/imofinance" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-green-500 rounded flex items-center justify-center hover:bg-green-600 transition-colors">
                                                <FaSquareFacebook />
                                            </a>
                                            <a href="https://twitter.com/imofinance" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-green-500 rounded flex items-center justify-center hover:bg-green-600 transition-colors">
                                                <FaTwitter />
                                            </a>
                                            <a href="https://instagram.com/imofinance" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-green-500 rounded flex items-center justify-center hover:bg-green-600 transition-colors">
                                                <FaInstagram />
                                            </a>
                                        </div>
                                    </div>
                                </AnimatedEntrance>

                                {/* Email */}
                                <AnimatedEntrance {...ANIMATION_PRESETS.CARD_FADE_UP} delay={STAGGER_DELAYS.MEDIUM[0]}>
                                    <div className="hover:transform hover:scale-105 transition-transform duration-300">
                                        <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mb-4">
                                            <FaEnvelope className="w-6 h-6 text-white" />
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-2">Email</h3>
                                        <div className="space-y-1">
                                            <a href="mailto:commissioner.ind.solid.min@gmail.com" className="block text-blue-600 hover:text-blue-800 transition-colors duration-300">
                                                commissioner.ind.solid.min@gmail.com
                                            </a>
                                        </div>
                                    </div>
                                </AnimatedEntrance>
                            </div>
                        </div>

                        {/* Right Column - Contact Form */}
                        <AnimatedEntrance {...ANIMATION_PRESETS.CARD_FADE_UP} delay={400}>
                            <div className="bg-white rounded-lg p-8 shadow-sm hover:shadow-lg transition-shadow duration-300">
                                <form className="space-y-6">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-2">SEND US A MESSAGE</h3>
                                <p className="text-gray-600 mb-6 text-sm">Please fill out the form below to reach us directly. We value your inquiries, feedback, and concerns.</p>
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                                            Name
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                                            placeholder="Your full name"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                                            Company
                                        </label>
                                        <input
                                            type="text"
                                            id="company"
                                            name="company"
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                                            placeholder="Your organization's name"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                                            Phone Number
                                        </label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                                            placeholder="Your contact number"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                            Email Address
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                                            placeholder="Your email address"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                                            Subject
                                        </label>
                                        <input
                                            type="text"
                                            id="subject"
                                            name="subject"
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                                            placeholder="Subject of your message"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                                            Message or Complaint
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            rows={6}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent resize-none"
                                            placeholder="Type your message here..."
                                            required
                                        ></textarea>
                                    </div>
                                    <div className="flex items-center">
                                        <input type="checkbox" id="not-robot" name="not-robot" className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded" required />
                                        <label htmlFor="not-robot" className="ml-2 block text-sm text-gray-700">
                                            I&apos;m not a robot
                                        </label>
                                    </div>
                                    <div className="pt-2">
                                        <button
                                            type="submit"
                                            className="w-full bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors hover:transform hover:scale-105 duration-300"
                                        >
                                            SEND MESSAGE
                                        </button>
                                    </div>
                                </form>
                            </div>

                        </AnimatedEntrance>
                    </div>
                    {/* Map Integration */}
                    <div className="mt-16">
                        <h3 className="text-2xl font-bold text-gray-900 mb-6">🗺️ Find Us on the Map</h3>
                        <div className="aspect-w-16 aspect-h-9 w-full h-96 bg-gray-100 rounded-lg overflow-hidden">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1985.81189487678!2d7.010186338670749!3d5.473897698626462!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1042599584de1111%3A0xb4d850b7108614d4!2sIMO%20STATE%20SECRETARIAT%20OWERRI!5e0!3m2!1sen!2sng!4v1754572411582!5m2!1sen!2sng"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                aria-hidden="false"
                                tabIndex={0}
                                title="Ministry of Niger Delta Affairs and Intelligence Location"
                            ></iframe>
                        </div>
                        <p className="text-sm text-gray-500 mt-2">
                            <span className="font-medium">Office Hours:</span> Monday to Friday, 8:00 AM – 4:00 PM
                        </p>
                        <a
                            href="https://maps.app.goo.gl/vE7UExUo7psmDxHJ8"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors mt-2"
                        >
                            👉 Locate the Ministry on Google Maps
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}
