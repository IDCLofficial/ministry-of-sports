"use client";

import Link from 'next/link';
import React, { useState } from 'react';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { NAV_LINKS, CONTACT_INFO } from '../../utils/constants/navigation';
import Image from 'next/image';
import { FaLocationDot, FaEnvelope, FaXmark, FaBars } from 'react-icons/fa6';

export default function Navigation() {
    const pathname = usePathname();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    
    const getLinkClassName = (href: string) => {
        if (href === "/" && pathname === "/") {
            return "text-[#FF7700] hover:text-[#FF7700]/60 font-medium transition-colors";
        }
        return pathname.includes(href) && href !== "/" 
            ? "text-[#FF7700] hover:text-[#FF7700]/60 font-medium transition-colors"
            : "text-[#0A2647] hover:text-[#FF7700]/60 font-medium transition-colors";
    };

    const getMobileLinkClassName = (href: string) => {
        if (href === "/" && pathname === "/") {
            return "block px-3 py-2 text-[#FF7700] font-medium transition-colors";
        }
        return pathname.includes(href) && href !== "/" 
            ? "block px-3 py-2 text-[#FF7700] font-medium transition-colors"
            : "block px-3 py-2 text-[#0A2647] hover:text-[#FF7700] font-medium transition-colors";
    };

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    return (
        <>
            {/* Top Contact Bar - Scrolls with page */}
            <div className="bg-[#4A5568] text-white py-2 px-4 sm:px-6 lg:px-20 max-sm:hidden">
                <div className="flex flex-col sm:flex-row justify-between items-center text-sm">
                    <div className="flex items-center space-x-2 mb-1 sm:mb-0">
                        <FaLocationDot className="w-4 h-4" />
                        <span>{CONTACT_INFO.address}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <FaEnvelope className="w-4 h-4" />
                        <Link href={`mailto:${CONTACT_INFO.email}`} className='cursor-pointer hover:text-green-500 transition-colors'><span>{CONTACT_INFO.email}</span></Link>
                    </div>
                </div>
            </div>

            {/* Main Navigation */}
            <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 shadow-2xl shadow-black/10">
                <div className="px-4 sm:px-6 lg:px-20">
                    <div className="flex justify-between items-center h-20">
                        <div className="flex items-center">
                            <Link href="/" className="group cursor-pointer">
                                <div className="w-10 h-10 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-green-500 rounded-full flex items-center justify-center mb-3 sm:mb-0 sm:mr-4 transition-all duration-300 group-hover:scale-[1.005] group-hover:rotate-2 group-hover:shadow-lg cursor-pointer">
                                    <Image
                                        src="/assets/ng-logo.png"
                                        alt="Logo"
                                        width={64}
                                        height={64}
                                        className="h-8 w-8 sm:h-10 sm:w-10 md:h-[64px] md:w-auto object-contain transition-transform duration-300 group-hover:scale-110"
                                    />
                                </div>
                            </Link>
                        </div>
                        <div className="hidden md:flex items-center space-x-8">
                            {NAV_LINKS.map((link) => (
                                <Link 
                                    key={link.href}
                                    href={link.href} 
                                    className={"cursor-pointer " + getLinkClassName(link.href)}
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                        {/* Mobile menu button */}
                        <div className="md:hidden">
                            <button 
                                onClick={toggleMobileMenu}
                                className="text-gray-700 hover:text-[#FF7700] transition-colors p-2"
                                aria-label="Toggle mobile menu"
                            >
                                {isMobileMenuOpen ? (
                                    <FaXmark className="h-6 w-6" />
                                ) : (
                                    <FaBars className="h-6 w-6" />
                                )}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Navigation Menu */}
                <AnimatePresence>
                    {isMobileMenuOpen && (
                        <motion.div 
                            className="md:hidden bg-white border-t border-gray-200 shadow-lg overflow-hidden absolute top-20 left-0 right-0 z-50"
                            initial={{ scaleY: 0, opacity: 0 }}
                            animate={{ scaleY: 1, opacity: 1 }}
                            exit={{ scaleY: 0, opacity: 0 }}
                            style={{ transformOrigin: 'top' }}
                            transition={{ 
                                duration: 0.25, 
                                ease: "easeOut",
                                opacity: { duration: 0.15 }
                            }}
                        >
                            <motion.div 
                                className="px-4 py-2 space-y-1"
                                initial={{ y: -10 }}
                                animate={{ y: 0 }}
                                exit={{ y: -10 }}
                                transition={{ duration: 0.2, ease: "easeOut" }}
                            >
                                {NAV_LINKS.map((link, index) => (
                                    <motion.div
                                        key={link.href}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -10 }}
                                        transition={{ 
                                            duration: 0.2,
                                            delay: isMobileMenuOpen ? index * 0.05 : 0,
                                            ease: "easeOut"
                                        }}
                                    >
                                        <Link 
                                            href={link.href} 
                                            className={getMobileLinkClassName(link.href)}
                                            onClick={closeMobileMenu}
                                        >
                                            {link.label}
                                        </Link>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>
        </>
    )
}
