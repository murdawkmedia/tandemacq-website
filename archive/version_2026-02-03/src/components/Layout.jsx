import React, { useState, useEffect } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { Menu, X, Mail, Phone, ExternalLink, Linkedin, ArrowRight } from 'lucide-react';

const Layout = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    // Handle hash scrolling for anchor links
    useEffect(() => {
        if (location.hash) {
            const element = document.getElementById(location.hash.slice(1));
            if (element) {
                setTimeout(() => {
                    element.scrollIntoView({ behavior: 'smooth' });
                }, 100);
            }
        } else {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }, [location]);

    return (
        <div className="flex flex-col min-h-screen font-sans text-brand-black bg-brand-light">
            {/* Header */}
            <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm">
                <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                    <Link to="/" className="flex items-center">
                        <img src="/assets/logo.jpg" alt="Tandem Acquisition Group" className="h-12 w-auto mr-3" />
                        <span className="text-2xl font-bold tracking-tight text-brand-black hidden sm:block">
                            TANDEM <span className="text-brand-gold">ACQ</span>
                        </span>
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex space-x-8 items-center">
                        <Link to="/" className="text-brand-grey hover:text-brand-gold transition-colors font-medium">Home</Link>
                        <a href="/#method" className="text-brand-grey hover:text-brand-gold transition-colors font-medium">The Method</a>
                        <Link to="/contact" className="px-5 py-2.5 bg-brand-black text-white font-medium rounded-lg hover:bg-brand-gold transition-all duration-300 shadow-lg hover:shadow-brand-gold/20">
                            Get in Touch
                        </Link>
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="md:hidden p-2 text-brand-black hover:text-brand-gold transition-colors z-50"
                        aria-label="Toggle menu"
                    >
                        {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>

                {/* Mobile Nav - Full Screen Overlay */}
                {isMenuOpen && (
                    <div className="md:hidden fixed inset-0 top-[73px] bg-white z-40 mobile-menu-enter">
                        <nav className="flex flex-col p-8 space-y-2">
                            <Link
                                to="/"
                                onClick={() => setIsMenuOpen(false)}
                                className="mobile-menu-item opacity-0 text-xl font-semibold text-brand-black hover:text-brand-gold py-4 border-b border-gray-100 flex items-center justify-between group"
                            >
                                Home
                                <ArrowRight size={20} className="text-gray-300 group-hover:text-brand-gold group-hover:translate-x-1 transition-all" />
                            </Link>
                            <a
                                href="/#method"
                                onClick={() => setIsMenuOpen(false)}
                                className="mobile-menu-item opacity-0 text-xl font-semibold text-brand-black hover:text-brand-gold py-4 border-b border-gray-100 flex items-center justify-between group"
                            >
                                The Method
                                <ArrowRight size={20} className="text-gray-300 group-hover:text-brand-gold group-hover:translate-x-1 transition-all" />
                            </a>
                            <Link
                                to="/contact"
                                onClick={() => setIsMenuOpen(false)}
                                className="mobile-menu-item opacity-0 text-xl font-semibold text-brand-gold py-4 border-b border-gray-100 flex items-center justify-between group"
                            >
                                Contact Us
                                <ArrowRight size={20} className="text-brand-gold group-hover:translate-x-1 transition-all" />
                            </Link>

                            {/* Mobile CTA Button */}
                            <div className="mobile-menu-item opacity-0 pt-6">
                                <Link
                                    to="/contact"
                                    onClick={() => setIsMenuOpen(false)}
                                    className="block w-full py-4 bg-brand-black text-white text-center font-bold rounded-xl hover:bg-brand-gold transition-all"
                                >
                                    Get in Touch
                                </Link>
                            </div>

                            {/* Mobile Contact Info */}
                            <div className="mobile-menu-item opacity-0 pt-8 space-y-3 text-sm text-brand-grey">
                                <a href="mailto:tom@tandemacq.com" className="flex items-center hover:text-brand-gold transition-colors">
                                    <Mail size={16} className="mr-3" /> tom@tandemacq.com
                                </a>
                                <a href="tel:2537408400" className="flex items-center hover:text-brand-gold transition-colors">
                                    <Phone size={16} className="mr-3" /> 253-740-8400
                                </a>
                            </div>
                        </nav>
                    </div>
                )}
            </header>

            {/* Main Content */}
            <main className="flex-grow">
                <Outlet />
            </main>

            {/* Footer */}
            <footer className="bg-brand-black text-white py-12 border-t border-brand-grey/20">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
                        <div>
                            <h3 className="text-2xl font-bold tracking-tight mb-2">TANDEM <span className="text-brand-gold">ACQUISITION</span> GROUP</h3>
                            <p className="text-brand-neutral max-w-md">
                                Strategic Business Valuation & Exit Planning. We transform successful businesses into significant, private equity-ready assets.
                            </p>
                            <div className="flex space-x-4 mt-6">
                                <a href="https://www.linkedin.com/in/thomas-mcelwrath-663758a9/" target="_blank" rel="noopener noreferrer" className="bg-brand-grey/40 p-3 rounded-full hover:bg-brand-gold transition-colors text-white hover:scale-110 transform duration-300">
                                    <Linkedin size={20} />
                                </a>
                            </div>
                        </div>

                        <div className="flex flex-col space-y-3">
                            <h4 className="font-semibold text-lg text-brand-gold mb-1">Contact</h4>
                            <p className="flex items-center text-gray-300">
                                <ExternalLink size={18} className="mr-2" /> Midlothian, Texas
                            </p>
                            <a href="mailto:tom@tandemacq.com" className="flex items-center text-gray-300 hover:text-white transition-colors">
                                <Mail size={18} className="mr-2" /> tom@tandemacq.com
                            </a>
                            <a href="tel:2537408400" className="flex items-center text-gray-300 hover:text-white transition-colors">
                                <Phone size={18} className="mr-2" /> 253-740-8400
                            </a>
                        </div>
                    </div>

                    <div className="mt-12 pt-8 border-t border-brand-grey/30 flex flex-col md:flex-row justify-between items-center text-sm text-brand-neutral">
                        <p>&copy; {new Date().getFullYear()} Tandem Acquisition Group LLC. All rights reserved.</p>
                        <p className="mt-2 md:mt-0 flex items-center">
                            Designed by <a href="https://www.murdawkmedia.com" target="_blank" rel="noopener noreferrer" className="text-brand-gold ml-1 font-semibold hover:underline">Murdawk Media</a>
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Layout;
