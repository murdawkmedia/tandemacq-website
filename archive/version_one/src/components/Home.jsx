import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, TrendingUp, Users, Shield } from 'lucide-react';

const Home = () => {
    return (
        <div className="animate-in fade-in duration-700">
            {/* Hero Section */}
            <section className="relative h-[85vh] flex items-center justify-center overflow-hidden bg-brand-black">
                <div className="absolute inset-0 z-0">
                    {/* Placeholder for darker background image if available, using CSS gradient for now */}
                    <div className="absolute inset-0 bg-gradient-to-br from-brand-black via-[#1a1a1a] to-brand-grey opacity-90"></div>
                </div>

                <div className="container mx-auto px-6 relative z-10 text-center">
                    <span className="inline-block px-4 py-1 mb-6 text-sm font-semibold tracking-wider text-brand-gold uppercase border border-brand-gold/30 rounded-full bg-brand-gold/10 backdrop-blur-sm">
                        Expert Consulting & Acquisitions
                    </span>
                    <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight tracking-tight">
                        Maximizing Your <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-gold to-[#d4af37]">Business Potential</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
                        With over 15 years of experience, we identify your needs and plan your success. Whether you are looking to scale or exit, we preserve your legacy.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link to="/contact" className="px-8 py-4 bg-brand-gold text-white text-lg font-bold rounded-lg hover:bg-white hover:text-brand-black transition-all duration-300 shadow-[0_0_20px_rgba(174,135,60,0.3)]">
                            Free Consultation
                        </Link>
                        <a href="#criteria" className="px-8 py-4 bg-transparent border border-gray-600 text-white text-lg font-medium rounded-lg hover:border-white hover:bg-white/5 transition-all duration-300">
                            Our Expertise
                        </a>
                    </div>
                </div>
            </section>

            {/* Philosophy Section */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div className="order-2 md:order-1">
                            <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-6">Experience You Can Trust</h2>
                            <p className="text-lg text-brand-grey mb-6 leading-relaxed">
                                I have over 15 years of experience in providing business and management consulting services to companies of all sizes. I have a deep understanding of the industry and can help you achieve your business goals.
                            </p>
                            <ul className="space-y-4">
                                {[
                                    "Deep industry understanding.",
                                    "Tailored strategies for your specific needs.",
                                    "Focus on preserving your company culture.",
                                    "Commitment to your long-term success."
                                ].map((item, index) => (
                                    <li key={index} className="flex items-start">
                                        <CheckCircle className="text-brand-gold mr-3 mt-1 flex-shrink-0" size={20} />
                                        <span className="text-brand-grey">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="order-1 md:order-2 relative">
                            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
                                <img src="/assets/headshot.jpg" alt="Thomas McElwrath" className="w-full h-full object-cover object-top" />
                            </div>
                            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg border-l-4 border-brand-gold hidden md:block">
                                <p className="font-bold text-brand-black">Thomas McElwrath</p>
                                <p className="text-sm text-brand-grey">Midlothian, Texas</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Investment Criteria Section (Dark) */}
            <section id="criteria" className="py-24 bg-brand-black text-white">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold mb-4">Our Expertise</h2>
                        <p className="text-brand-neutral max-w-xl mx-auto">Helping businesses of all sizes achieve their goals through expert strategies.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-[#111] p-8 rounded-xl border border-gray-800 hover:border-brand-gold/50 transition-colors group">
                            <div className="bg-brand-gold/10 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <TrendingUp className="text-brand-gold" size={32} />
                            </div>
                            <h3 className="text-2xl font-bold mb-4">Strategic Planning</h3>
                            <p className="text-gray-400">
                                We help you identify your needs and start planning your success with a clear, actionable roadmap.
                            </p>
                        </div>

                        <div className="bg-[#111] p-8 rounded-xl border border-gray-800 hover:border-brand-gold/50 transition-colors group">
                            <div className="bg-brand-gold/10 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <Users className="text-brand-gold" size={32} />
                            </div>
                            <h3 className="text-2xl font-bold mb-4">Management Consulting</h3>
                            <p className="text-gray-400">
                                Over 15 years of experience consulting for companies of all sizes, from startups to established enterprises.
                            </p>
                        </div>

                        <div className="bg-[#111] p-8 rounded-xl border border-gray-800 hover:border-brand-gold/50 transition-colors group">
                            <div className="bg-brand-gold/10 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <Shield className="text-brand-gold" size={32} />
                            </div>
                            <h3 className="text-2xl font-bold mb-4">Acquisition & Exit</h3>
                            <p className="text-gray-400">
                                When it's time to transition, we ensure your legacy is preserved and your business lands in capable hands.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-brand-light">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-3xl md:text-5xl font-bold text-brand-black mb-8">Let's Meet in Person!</h2>
                    <p className="text-brand-grey text-lg mb-10 max-w-2xl mx-auto">
                        I appreciate my customers, so feel free to contact me for a free, one-hour consultation.
                    </p>
                    <Link to="/contact" className="inline-flex items-center px-8 py-4 bg-brand-gold text-white text-lg font-bold rounded-lg hover:bg-brand-black transition-colors shadow-lg">
                        Contact Me <ArrowRight className="ml-2" />
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default Home;
