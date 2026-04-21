"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const NavLink = ({ href, children, isScrolled }: { href: string; children: React.ReactNode; isScrolled: boolean }) => (
    <Link
        href={href}
        className={cn(
            "relative text-sm font-bold uppercase tracking-wider transition-colors duration-300 py-6",
            isScrolled ? "text-slate-700 hover:text-primary" : "text-slate-700 hover:text-primary" // Fixed header always on white/glass in design
        )}
    >
        {children}
    </Link>
);

const DropdownLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
    <Link href={href} className="block px-6 py-3 text-sm text-slate-600 hover:text-primary hover:bg-teal-50 hover:pl-7 transition-all duration-200">
        {children}
    </Link>
);

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isHidden, setIsHidden] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            // Show/Hide logic
            if (currentScrollY > 100) {
                if (currentScrollY > lastScrollY) {
                    setIsHidden(true); // Scrolling down
                } else {
                    setIsHidden(false); // Scrolling up
                }
            } else {
                setIsHidden(false);
            }

            setIsScrolled(currentScrollY > 20);
            setLastScrollY(currentScrollY);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);

    return (
        <>
            <nav
                className={cn(
                    "fixed top-0 left-0 w-full z-50 transition-all duration-500 border-b border-black/5",
                    "bg-white/90 backdrop-blur-md", // Always glass white as per design
                    isHidden ? "-translate-y-full" : "translate-y-0"
                )}
            >
                <div className="max-w-[1800px] mx-auto px-6 md:px-12 flex items-center justify-between h-24 relative">
                    {/* Logo */}
                    <Link href="/" className="z-20">
                        <Image
                            src="/imgs/logo.png"
                            alt="Adaptive Engineering"
                            width={240}
                            height={70}
                            className="h-20 w-auto object-contain hover:opacity-80 transition-opacity duration-300"
                            priority
                        />
                    </Link>

                    {/* Desktop Navigation - Right Aligned */}
                    <div className="hidden lg:flex items-center gap-8 ml-auto mr-8">
                        <NavLink href="/" isScrolled={isScrolled}>Home</NavLink>

                        <div className="relative group flex items-center h-full" onMouseEnter={() => setActiveDropdown('about')} onMouseLeave={() => setActiveDropdown(null)}>
                            <Link href="/about" className={cn(
                                "flex items-center gap-1 py-6 text-sm font-bold uppercase tracking-wider transition-colors duration-300",
                                isScrolled ? "text-slate-700 hover:text-primary" : "text-slate-700 hover:text-primary"
                            )}>
                                About Us <ChevronDown className="w-3 h-3 opacity-50" />
                            </Link>
                            <div className="absolute top-full left-0 w-64 bg-white shadow-xl rounded-b-xl border-t-2 border-primary overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                                <DropdownLink href="/about/profile">Company Profile</DropdownLink>
                                <DropdownLink href="/about/team">Our Team</DropdownLink>
                                <DropdownLink href="/history">Our Journey</DropdownLink>
                                <DropdownLink href="/careers">Careers</DropdownLink>
                                <DropdownLink href="/contact">Contact Us</DropdownLink>
                            </div>
                        </div>

                        <div className="relative group flex items-center h-full">
                            <Link href="/renewable" className={cn(
                                "flex items-center gap-1 py-6 text-sm font-bold uppercase tracking-wider transition-colors duration-300",
                                isScrolled ? "text-slate-700 hover:text-primary" : "text-slate-700 hover:text-primary"
                            )}>
                                Renewable Solutions <ChevronDown className="w-3 h-3 opacity-50" />
                            </Link>
                            <div className="absolute top-full left-0 w-72 bg-white shadow-xl rounded-b-xl border-t-2 border-primary overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                                <div className="px-6 py-3 bg-slate-50 border-b border-slate-100">
                                    <Link href="/renewable/unified" className="text-xs font-black text-primary uppercase tracking-widest hover:text-slate-800 transition-colors">
                                        Unified Renewable Solutions
                                    </Link>
                                </div>
                                <div className="pl-2 border-l-2 border-slate-100 ml-6 mb-2 mt-2">
                                    <DropdownLink href="/renewable/unified/scada">SCADA</DropdownLink>
                                    <DropdownLink href="/ppc">Power Plant Control (PPC)</DropdownLink>
                                    <DropdownLink href="/renewable/unified/cms">Central Monitoring (CMS)</DropdownLink>
                                    <DropdownLink href="/renewable/unified/analytics">Advanced Analytics</DropdownLink>
                                    <DropdownLink href="/renewable/unified/cmms">CMMS</DropdownLink>
                                    <DropdownLink href="/renewable/unified/ems-bess">EMS - BESS</DropdownLink>
                                </div>
                                <div className="border-t border-slate-100">
                                    <DropdownLink href="/renewable/panels">Electrical Panels</DropdownLink>
                                    <DropdownLink href="/renewable/turnkey">Turnkey E&I</DropdownLink>
                                </div>
                            </div>
                        </div>

                        <div className="relative group flex items-center h-full">
                            <Link href="/pm-kusum" className={cn(
                                "flex items-center gap-1 py-6 text-sm font-bold uppercase tracking-wider transition-colors duration-300",
                                isScrolled ? "text-slate-700 hover:text-primary" : "text-slate-700 hover:text-primary"
                            )}>
                                PM-KUSUM <ChevronDown className="w-3 h-3 opacity-50" />
                            </Link>
                            <div className="absolute top-full left-0 w-64 bg-white shadow-xl rounded-b-xl border-t-2 border-primary overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                                <DropdownLink href="/pm-kusum/iot-scada">IoT SCADA</DropdownLink>
                                <DropdownLink href="/pm-kusum/reportwiz">ReportWiz</DropdownLink>
                                <DropdownLink href="/pm-kusum/cms">Central Monitoring System (CMS)</DropdownLink>
                                <DropdownLink href="/pm-kusum/ams">Asset Management System (AMS)</DropdownLink>
                                <DropdownLink href="/pm-kusum/ht-panel">HT Panel</DropdownLink>
                                <DropdownLink href="/pm-kusum/acdb-panels">ACDB Panels</DropdownLink>
                                <DropdownLink href="/pm-kusum/wms">Weather Monitoring System (WMS)</DropdownLink>
                                <DropdownLink href="/pm-kusum/telemetry">Telemetry System</DropdownLink>
                            </div>
                        </div>

                        <div className="relative group flex items-center h-full">
                            <button className="text-sm font-bold uppercase tracking-wider text-slate-700 hover:text-primary flex items-center gap-1 py-6">
                                Infrastructure <ChevronDown className="w-3 h-3 opacity-50" />
                            </button>
                            <div className="absolute top-full right-0 w-64 bg-white shadow-xl rounded-b-xl border-t-2 border-primary overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                                <DropdownLink href="/infrastructure/tunnel">Tunnel Solutions</DropdownLink>
                                <DropdownLink href="/infrastructure/data-center">Data Center</DropdownLink>
                                <DropdownLink href="/infrastructure/automation">Industrial Automation</DropdownLink>
                            </div>
                        </div>

                        <div className="relative group flex items-center h-full">
                            <button className="text-sm font-bold uppercase tracking-wider text-slate-700 hover:text-primary flex items-center gap-1 py-6">
                                Resources <ChevronDown className="w-3 h-3 opacity-50" />
                            </button>
                            <div className="absolute top-full right-0 w-64 bg-white shadow-xl rounded-b-xl border-t-2 border-primary overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                                <DropdownLink href="/resources/certifications">Certification</DropdownLink>
                                <DropdownLink href="/resources/brochures">Brochures</DropdownLink>
                                <DropdownLink href="/resources/case-studies">Case Studies</DropdownLink>
                                <DropdownLink href="/resources/blogs">Blogs</DropdownLink>
                            </div>
                        </div>
                    </div>

                    {/* Right Side: CTA & Mobile Toggle */}
                    <div className="flex items-center gap-6 z-20">


                        {/* Mobile Menu Toggle */}
                        <button
                            className="lg:hidden text-slate-800"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        >
                            {isMobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        className="fixed inset-0 z-[60] bg-slate-900 h-screen flex flex-col justify-center px-8 space-y-8 shadow-2xl lg:hidden"
                    >
                        <button
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="absolute top-6 right-6 text-slate-400 p-2"
                        >
                            <X className="w-8 h-8" />
                        </button>

                        <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="text-4xl font-heading font-bold text-white">Home</Link>
                        <Link href="/about" onClick={() => setIsMobileMenuOpen(false)} className="text-4xl font-heading font-bold text-white">About</Link>
                        <Link href="/renewable" onClick={() => setIsMobileMenuOpen(false)} className="text-4xl font-heading font-bold text-white">Solutions</Link>
                        <Link href="/pm-kusum" onClick={() => setIsMobileMenuOpen(false)} className="text-4xl font-heading font-bold text-white">PM-KUSUM</Link>
                        <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)} className="text-4xl font-heading font-bold text-primary">Contact</Link>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
