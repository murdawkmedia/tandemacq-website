import React, { useState, useEffect } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { Menu, X, Mail, Phone, ExternalLink } from 'lucide-react';

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
                        <Link to="/#criteria" className="text-brand-grey hover:text-brand-gold transition-colors font-medium">Our Expertise</Link>
                        <Link to="/contact" className="px-5 py-2.5 bg-brand-black text-white font-medium rounded-lg hover:bg-brand-gold transition-all duration-300 shadow-lg hover:shadow-brand-gold/20">
                            Get in Touch
                        </Link>
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="md:hidden p-2 text-brand-black hover:text-brand-gold transition-colors"
                    >
                        {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>

                {/* Mobile Nav */}
                {isMenuOpen && (
                    <div className="md:hidden bg-white border-b border-gray-100 animate-in slide-in-from-top-4 duration-300">
                        <nav className="flex flex-col p-6 space-y-4">
                            <Link to="/" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium text-brand-black hover:text-brand-gold">Home</Link>
                            <Link to="/#criteria" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium text-brand-black hover:text-brand-gold">Our Expertise</Link>
                            <Link to="/contact" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium text-brand-gold">Contact Us</Link>
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
                                Preserving legacies. Operating with integrity. We buy and build boring but profitable businesses.
                            </p>
                        </div>

                        <div className="flex flex-col space-y-3">
                            <h4 className="font-semibold text-lg text-brand-gold mb-1">Contact</h4>
                            <p className="flex items-center text-gray-300">
                                <ExternalLink size={18} className="mr-2" /> Midlothian, Texas
                            </p>
                            <a href="mailto:info@tandemacq.com" className="flex items-center text-gray-300 hover:text-white transition-colors">
                                <Mail size={18} className="mr-2" /> info@tandemacq.com
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
