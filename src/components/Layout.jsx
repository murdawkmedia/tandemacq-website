import React, { useState, useEffect } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { Menu, X, Mail, Phone, ExternalLink, Linkedin, ArrowRight } from 'lucide-react';

const Layout = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();

    // Handle scroll state for header
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

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
        <div className="flex flex-col min-h-screen font-body text-brand-white bg-brand-slate">
            {/* Header */}
            <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-brand-slate/95 backdrop-blur-md shadow-lg py-3' : 'bg-transparent py-6'}`}>
                <div className="container mx-auto px-6 flex justify-between items-center relative">

                    {/* Mobile Menu Button - Left on mobile */}
                    <button
                        className="md:hidden text-white hover:text-brand-gold transition-colors z-50"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>

                    {/* Navigation Links - Left Side (Desktop) */}
                    <nav className="hidden md:flex items-center space-x-12 flex-1 justify-start">
                        <Link to="/" className="text-sm font-bold uppercase tracking-widest hover:text-brand-gold transition-colors font-heading text-white">Home</Link>
                        <a href="/#services" className="text-sm font-bold uppercase tracking-widest hover:text-brand-gold transition-colors font-heading text-white">Our Method</a>
                    </nav>

                    {/* Logo - Centered */}
                    <Link to="/" className="flex flex-col items-center justify-center absolute left-1/2 transform -translate-x-1/2 group">
                        <span className="text-2xl md:text-3xl font-bold tracking-[0.2em] font-heading group-hover:text-brand-gold transition-colors text-center text-white">
                            TANDEM
                        </span>
                        <span className="text-[10px] uppercase tracking-[0.4em] text-brand-gold/90 font-bold mt-1">Acquisitions</span>
                    </Link>

                    {/* Navigation Links / CTA - Right Side (Desktop) */}
                    <nav className="hidden md:flex items-center space-x-12 flex-1 justify-end">
                        <Link to="/contact" className="text-sm font-bold uppercase tracking-widest hover:text-brand-gold transition-colors font-heading text-white">Contact</Link>
                    </nav>

                    {/* Placeholder for spacing on mobile right */}
                    <div className="w-6 md:hidden"></div>
                </div>

                {/* Mobile Menu Overlay */}
                <div className={`fixed inset-0 bg-brand-slate z-40 flex flex-col items-center justify-center space-y-8 transition-transform duration-300 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden`}>
                    <Link to="/" onClick={() => setIsMenuOpen(false)} className="text-2xl font-bold uppercase tracking-widest font-heading text-white hover:text-brand-gold">Home</Link>
                    <a href="/#services" onClick={() => setIsMenuOpen(false)} className="text-2xl font-bold uppercase tracking-widest font-heading text-white hover:text-brand-gold">Our Method</a>
                    <Link to="/contact" onClick={() => setIsMenuOpen(false)} className="text-2xl font-bold uppercase tracking-widest font-heading text-white hover:text-brand-gold">Contact</Link>

                    <div className="pt-12 flex flex-col items-center space-y-4">
                        <p className="text-sm uppercase tracking-widest text-brand-gold">Get in Touch</p>
                        <a href="mailto:tom@tandemacq.com" className="text-xl text-white font-light">tom@tandemacq.com</a>
                    </div>
                </div>
            </header>

            <main className="flex-grow">
                <Outlet />
            </main>

            <footer className="bg-brand-dark py-16 border-t border-white/5">
                <div className="container mx-auto px-6 text-center">
                    <h3 className="text-2xl font-bold tracking-[0.2em] font-heading mb-10 text-white">TANDEM <span className="text-brand-gold">ACQUISITIONS</span></h3>
                    <div className="flex justify-center space-x-12 mb-12">
                        <Link to="/" className="text-xs uppercase tracking-[0.2em] text-gray-400 hover:text-white transition-colors">Home</Link>
                        <a href="/#services" className="text-xs uppercase tracking-[0.2em] text-gray-400 hover:text-white transition-colors">Method</a>
                        <Link to="/contact" className="text-xs uppercase tracking-[0.2em] text-gray-400 hover:text-white transition-colors">Contact</Link>
                    </div>
                    <div className="flex justify-center space-x-6 mb-12">
                        <a href="https://www.linkedin.com/in/thomas-mcelwrath-663758a9/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-brand-gold transition-colors">
                            <Linkedin size={20} />
                        </a>
                        <a href="mailto:tom@tandemacq.com" className="text-gray-500 hover:text-brand-gold transition-colors">
                            <Mail size={20} />
                        </a>
                    </div>
                    <p className="text-gray-600 text-[10px] uppercase tracking-widest">
                        &copy; {new Date().getFullYear()} Tandem Acquisition Group. All rights reserved. <br />
                        <span className="opacity-50 mt-2 block">Midlothian, Texas</span>
                    </p>
                </div>
            </footer>
        </div>
    );
};

export default Layout;
