"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, ChevronDown, Send } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const NavLink = ({ href, children, isScrolled }: { href: string; children: React.ReactNode; isScrolled: boolean }) => (
    <Link
        href={href}
        className={cn(
            "relative text-sm font-bold uppercase tracking-wider transition-colors duration-300 py-6",
            isScrolled ? "text-slate-700 hover:text-primary" : "text-slate-700 hover:text-primary"
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

import { usePathname } from "next/navigation";

export default function Navbar() {
    const pathname = usePathname();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isHidden, setIsHidden] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    if (pathname?.startsWith("/admin")) {
        return null;
    }
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
    const [isInquiryOpen, setIsInquiryOpen] = useState(false);

    // Form states
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        company: "",
        subject: "Renewable Solutions",
        message: ""
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

    useEffect(() => {
        if (!isInquiryOpen) {
            setFormData({
                name: "",
                phone: "",
                email: "",
                company: "",
                subject: "Renewable Solutions",
                message: ""
            });
            setSubmitStatus("idle");
        }
    }, [isInquiryOpen]);

    const handleFormSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus("idle");

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData)
            });

            if (res.ok) {
                setSubmitStatus("success");
                setFormData({
                    name: "",
                    phone: "",
                    email: "",
                    company: "",
                    subject: "Renewable Solutions",
                    message: ""
                });
                setTimeout(() => {
                    setIsInquiryOpen(false);
                }, 1500);
            } else {
                setSubmitStatus("error");
            }
        } catch (err) {
            console.error(err);
            setSubmitStatus("error");
        } finally {
            setIsSubmitting(false);
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY > 100) {
                if (currentScrollY > lastScrollY) {
                    setIsHidden(true);
                } else {
                    setIsHidden(false);
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

    useEffect(() => {
        if (isInquiryOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => { document.body.style.overflow = ""; };
    }, [isInquiryOpen]);

    return (
        <>
            <nav
                className={cn(
                    "fixed top-0 left-0 w-full z-50 transition-all duration-500",
                    "bg-white/90 backdrop-blur-md",
                    isHidden ? "-translate-y-full" : "translate-y-0"
                )}
            >
                <div className="w-full px-5 flex items-center justify-between h-24 relative">
                    {/* Logo - pushed left */}
                    <Link href="/" className="z-20 mr-auto">
                        <Image
                            src="/imgs/logo.png"
                            alt="Adaptive Engineering"
                            width={240}
                            height={70}
                            className="h-20 w-auto object-contain opacity-95 hover:opacity-100 transition-all duration-300 drop-shadow-[0_2px_8px_rgba(0,0,0,0.15)]"
                            priority
                        />
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center gap-8 mr-6">
                        <NavLink href="/" isScrolled={isScrolled}>Home</NavLink>

                        {/* About */}
                        <div className="relative group flex items-center h-full" onMouseEnter={() => setActiveDropdown('about')} onMouseLeave={() => setActiveDropdown(null)}>
                            <Link href="/about" className={cn(
                                "flex items-center gap-1 py-6 text-sm font-bold uppercase tracking-wider transition-colors duration-300",
                                "text-slate-700 hover:text-primary"
                            )}>
                                About Us <ChevronDown className="w-3 h-3 opacity-50" />
                            </Link>
                            <div className="absolute top-full left-0 w-64 bg-white shadow-xl rounded-b-xl border-t-2 border-primary overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                                <DropdownLink href="/about/team">Our Team</DropdownLink>
                                <DropdownLink href="/history">Our Journey</DropdownLink>
                                <DropdownLink href="/careers">Careers</DropdownLink>
                                <DropdownLink href="/contact">Contact Us</DropdownLink>
                            </div>
                        </div>

                        {/* Solutions */}
                        <div className="relative group flex items-center h-full">
                            <Link href="/renewable" className={cn(
                                "flex items-center gap-1 py-6 text-sm font-bold uppercase tracking-wider transition-colors duration-300",
                                "text-slate-700 hover:text-primary"
                            )}>
                                Solutions <ChevronDown className="w-3 h-3 opacity-50" />
                            </Link>
                            <div className="absolute top-full left-0 w-72 bg-white shadow-xl rounded-b-xl border-t-2 border-primary overflow-visible opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                                <div className="relative group/sub">
                                    <Link href="/renewable/unified" className="flex items-center justify-between px-6 py-3 text-sm text-slate-600 hover:text-primary hover:bg-teal-50 hover:pl-7 transition-all duration-200">
                                        <span>Unified Renewable Solution</span>
                                        <ChevronDown className="w-4 h-4 opacity-50 -rotate-90 group-hover/sub:opacity-100 transition-opacity" />
                                    </Link>
                                    <div className="absolute top-0 left-full w-64 bg-white shadow-xl rounded-xl border-t-2 border-primary opacity-0 invisible group-hover/sub:opacity-100 group-hover/sub:visible transition-all duration-300 transform translate-x-2 group-hover/sub:translate-x-0 ml-1 overflow-hidden z-50">
                                        <DropdownLink href="/renewable/unified/scada">SCADA</DropdownLink>
                                        <DropdownLink href="/ppc">Power Plant Control (PPC)</DropdownLink>
                                        <DropdownLink href="/renewable/unified/cms">Central Monitoring (CMS)</DropdownLink>
                                        <DropdownLink href="/renewable/unified/analytics">Advanced Analytics</DropdownLink>
                                        <DropdownLink href="/renewable/unified/cmms">CMMS</DropdownLink>
                                        <DropdownLink href="/renewable/unified/ems-bess">EMS - BESS</DropdownLink>
                                    </div>
                                </div>
                                <div className="border-t border-slate-100">
                                    <DropdownLink href="/renewable/panels">Electrical Panels</DropdownLink>
                                    <DropdownLink href="/renewable/turnkey">Turnkey E&I</DropdownLink>
                                </div>
                                <div className="relative group/water border-t border-slate-100">
                                    <Link href="/infrastructure/water" className="flex items-center justify-between px-6 py-3 text-sm text-slate-600 hover:text-primary hover:bg-teal-50 hover:pl-7 transition-all duration-200">
                                        <span>Water Solutions</span>
                                        <ChevronDown className="w-4 h-4 opacity-50 -rotate-90 group-hover/water:opacity-100 transition-opacity" />
                                    </Link>
                                    <div className="absolute top-0 left-full w-72 bg-white shadow-xl rounded-xl border-t-2 border-primary opacity-0 invisible group-hover/water:opacity-100 group-hover/water:visible transition-all duration-300 transform translate-x-2 group-hover/water:translate-x-0 ml-1 overflow-hidden z-50">
                                        <DropdownLink href="/infrastructure/water/wtp">Water Supply & WTP</DropdownLink>
                                        <DropdownLink href="/infrastructure/water/stp">Sewage Treatment Plant</DropdownLink>
                                        <DropdownLink href="/infrastructure/water/etp">Effluent Treatment Plant</DropdownLink>
                                        <DropdownLink href="/infrastructure/water/lift-irrigation">Lift Irrigation</DropdownLink>
                                        <DropdownLink href="/infrastructure/water/micro-irrigation">Micro Irrigation</DropdownLink>
                                        <DropdownLink href="/infrastructure/water/centralized-scada">Centralized SCADA</DropdownLink>
                                    </div>
                                </div>
                                <div className="relative group/iot border-t border-slate-100">
                                    <Link href="/industrial-iot" className="flex items-center justify-between px-6 py-3 text-sm text-slate-600 hover:text-primary hover:bg-teal-50 hover:pl-7 transition-all duration-200">
                                        <span>Industrial IoT</span>
                                        <ChevronDown className="w-4 h-4 opacity-50 -rotate-90 group-hover/iot:opacity-100 transition-opacity" />
                                    </Link>
                                    <div className="absolute top-0 left-full w-72 bg-white shadow-xl rounded-xl border-t-2 border-primary opacity-0 invisible group-hover/iot:opacity-100 group-hover/iot:visible transition-all duration-300 transform translate-x-2 group-hover/iot:translate-x-0 ml-1 overflow-hidden z-50">
                                        <DropdownLink href="/industrial-iot/solarwiz">SolarWiz</DropdownLink>
                                        <DropdownLink href="/industrial-iot/waterwiz">WaterWiz</DropdownLink>
                                        <DropdownLink href="/industrial-iot/machinewiz">MachineWiz</DropdownLink>
                                        <DropdownLink href="/industrial-iot/asset-management">Mobile Asset Management</DropdownLink>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* PM-KUSUM */}
                        <div className="relative group flex items-center h-full">
                            <Link href="/pm-kusum" className={cn(
                                "flex items-center gap-1 py-6 text-sm font-bold uppercase tracking-wider transition-colors duration-300",
                                "text-slate-700 hover:text-primary"
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
                            </div>
                        </div>

                        {/* Infrastructure */}
                        <div className="relative group flex items-center h-full">
                            <button className="text-sm font-bold uppercase tracking-wider text-slate-700 hover:text-primary flex items-center gap-1 py-6">
                                Infrastructure <ChevronDown className="w-3 h-3 opacity-50" />
                            </button>
                            <div className="absolute top-full right-0 w-64 bg-white shadow-xl rounded-b-xl border-t-2 border-primary overflow-visible opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                                <DropdownLink href="/infrastructure/tunnel">Tunnel Solutions</DropdownLink>
                                <DropdownLink href="/infrastructure/data-center">Data Center</DropdownLink>
                                <DropdownLink href="/infrastructure/automation">Industrial Automation</DropdownLink>
                            </div>
                        </div>

                        {/* Resources */}
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
                    <div className="flex items-center gap-4 z-20">
                        {/* Let's Connect Button */}
                        <button
                            onClick={() => setIsInquiryOpen(true)}
                            className="hidden lg:flex items-center gap-2 px-6 py-2.5 bg-primary text-white text-sm font-bold uppercase tracking-wider rounded-full hover:bg-[#0da08a] shadow-lg shadow-primary/25 transition-all duration-300 hover:scale-105"
                        >
                            Let&apos;s Connect
                        </button>

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

            {/* Inquiry Modal */}
            <AnimatePresence>
                {isInquiryOpen && (
                    <motion.div
                        className="fixed inset-0 z-[100] flex items-center justify-center px-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                    >
                        {/* Backdrop */}
                        <motion.div
                            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                            onClick={() => setIsInquiryOpen(false)}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                        />

                        {/* Modal */}
                        <motion.div
                            className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden"
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            transition={{ duration: 0.3, type: "spring", damping: 25 }}
                        >
                            {/* Close Button */}
                            <button
                                onClick={() => setIsInquiryOpen(false)}
                                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-slate-500 hover:text-slate-800 transition-colors z-10"
                            >
                                <X className="w-5 h-5" />
                            </button>

                            {/* Header */}
                            <div className="px-8 pt-8 pb-4">
                                <h3 className="text-2xl font-bold text-slate-900 font-heading">Let&apos;s Connect</h3>
                                <p className="text-sm text-slate-500 mt-1">Tell us about your requirements and we&apos;ll get back to you shortly.</p>
                            </div>

                            {/* Status Banners */}
                            {submitStatus === "success" && (
                                <div className="mx-8 mb-4 p-4 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-xl text-sm font-medium">
                                    Thank you! Your message has been sent successfully. We&apos;ll get back to you shortly.
                                </div>
                            )}

                            {submitStatus === "error" && (
                                <div className="mx-8 mb-4 p-4 bg-rose-50 border border-rose-200 text-rose-800 rounded-xl text-sm font-medium">
                                    Something went wrong. Please check your inputs and try again.
                                </div>
                            )}

                            {/* Form */}
                            <form className="px-8 pb-8 space-y-5" onSubmit={handleFormSubmit}>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="space-y-1.5">
                                        <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Name *</label>
                                        <input 
                                            type="text" 
                                            required
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-primary focus:bg-white transition-all text-slate-900 text-sm" 
                                            placeholder="Enter your name" 
                                        />
                                    </div>
                                    <div className="space-y-1.5">
                                        <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Phone</label>
                                        <input 
                                            type="tel" 
                                            value={formData.phone}
                                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-primary focus:bg-white transition-all text-slate-900 text-sm" 
                                            placeholder="+91..." 
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="space-y-1.5">
                                        <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Email *</label>
                                        <input 
                                            type="email" 
                                            required
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-primary focus:bg-white transition-all text-slate-900 text-sm" 
                                            placeholder="name@company.com" 
                                        />
                                    </div>
                                    <div className="space-y-1.5">
                                        <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Company</label>
                                        <input 
                                            type="text" 
                                            value={formData.company}
                                            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                                            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-primary focus:bg-white transition-all text-slate-900 text-sm" 
                                            placeholder="Enter company name" 
                                        />
                                    </div>
                                </div>

                                <div className="space-y-1.5">
                                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Inquiry Type</label>
                                    <select 
                                        value={formData.subject}
                                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-primary focus:bg-white transition-all text-slate-700 text-sm"
                                    >
                                        <option value="Renewable Solutions">Renewable Solutions</option>
                                        <option value="PM-KUSUM">PM-KUSUM</option>
                                        <option value="Infrastructure">Infrastructure</option>
                                        <option value="Other">Other</option>
                                    </select>
                                </div>

                                <div className="space-y-1.5">
                                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Message *</label>
                                    <textarea 
                                        rows={3} 
                                        required
                                        value={formData.message}
                                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-primary focus:bg-white transition-all resize-none text-slate-900 text-sm" 
                                        placeholder="Tell us about your requirements..."
                                    ></textarea>
                                </div>

                                <button 
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full py-3.5 bg-primary hover:bg-[#0da08a] text-white font-bold rounded-xl transition-all flex items-center justify-center gap-2 group text-sm disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                                >
                                    {isSubmitting ? "Sending..." : "Send Message"}
                                    {!isSubmitting && <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />}
                                </button>
                            </form>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
