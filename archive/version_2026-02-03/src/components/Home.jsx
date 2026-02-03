import React, { useState } from 'react';
import { ArrowRight, CheckCircle, TrendingUp, Search, FileText, Settings } from 'lucide-react';
import WaitlistModal from './WaitlistModal';

const Home = () => {
    const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);

    const steps = [
        {
            id: '01',
            title: "Identify Value",
            subtitle: "Valuation & Assessment",
            description: "We identify how your business compares to best-in-class peers and develop a roadmap to transform your success into significance.",
            icon: Search
        },
        {
            id: '02',
            title: "Spot Opportunities",
            subtitle: "Risks & Wealth Gaps",
            description: "Conducting a full risk/opportunity audit to identify cracks in the foundation and red flags that could hinder a successful exit.",
            icon: TrendingUp
        },
        {
            id: '03',
            title: "The Plan",
            subtitle: "De-risking & Growth",
            description: "Preparing your business for a solid foundation by eliminating identified risks and accelerating enterprise value growth.",
            icon: FileText
        },
        {
            id: '04',
            title: "Execution",
            subtitle: "Marshal the Board",
            description: "Strategically prioritizing and completing value growth projects to prepare for unsolicited or solicited offers.",
            icon: Settings
        }
    ];

    return (
        <div className="animate-in fade-in duration-700">
            {/* Hero Section */}
            <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-brand-black">
                <div className="absolute inset-0 z-0">
                    <img
                        src="/assets/hero_tom.png"
                        alt="Business Strategy"
                        className="w-full h-full object-cover object-[50%_20%] opacity-60"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-brand-black via-brand-black/60 to-transparent"></div>
                </div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="max-w-3xl">
                        <span className="inline-block px-4 py-1 mb-6 text-sm font-semibold tracking-wider text-brand-gold uppercase border border-brand-gold/30 rounded-full bg-brand-gold/10 backdrop-blur-sm">
                            Strategic Advisory & Exit Planning
                        </span>
                        <h1 className="text-5xl md:text-8xl font-bold text-white mb-6 leading-[1.1] tracking-tight">
                            Maximize Your Multiple. <br />
                            <span className="text-brand-gold">De-Risk Your Future.</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-2xl leading-relaxed">
                            Strategic Business Valuation & Exit Planning. We transform successful businesses into significant, private equity-ready assets.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-5">
                            <button
                                onClick={() => setIsWaitlistOpen(true)}
                                className="px-10 py-5 bg-brand-gold text-white text-lg font-bold rounded-xl hover:bg-white hover:text-brand-black transition-all duration-300 shadow-[0_10px_30px_rgba(174,135,60,0.4)]"
                            >
                                Join the Waitlist
                            </button>
                            <a href="#method" className="px-10 py-5 bg-transparent border border-white/20 text-white text-lg font-medium rounded-xl hover:border-white hover:bg-white/5 transition-all duration-300 flex items-center justify-center">
                                See Our Method <ArrowRight className="ml-2" size={20} />
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* The Method Section */}
            <section id="method" className="py-32 bg-white">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl md:text-6xl font-bold text-brand-black mb-6">The Tandem Method</h2>
                        <p className="text-xl text-brand-neutral max-w-2xl mx-auto">
                            A proven, 4-step strategic process to increase your EBITDA multipliers and ensure readiness for the next chapter.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-4 gap-8">
                        {steps.map((step, idx) => (
                            <div key={idx} className="relative group">
                                <div className="mb-8 relative">
                                    <div className="text-8xl font-black text-brand-light group-hover:text-brand-gold/10 transition-colors absolute -top-12 -left-4 z-0">
                                        {step.id}
                                    </div>
                                    <div className="relative z-10 bg-brand-light w-20 h-20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-brand-gold group-hover:scale-110 transition-all duration-500 shadow-sm group-hover:shadow-brand-gold/20">
                                        <step.icon className="text-brand-gold group-hover:text-white transition-colors" size={36} />
                                    </div>
                                </div>
                                <h3 className="text-2xl font-bold text-brand-black mb-1">{step.title}</h3>
                                <p className="text-brand-gold font-semibold text-sm uppercase tracking-wider mb-4">{step.subtitle}</p>
                                <p className="text-brand-grey leading-relaxed">
                                    {step.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Content Spotlight Section */}
            <section className="py-32 bg-brand-light">
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-20 items-center">
                        <div>
                            <span className="text-brand-gold font-bold tracking-widest uppercase text-sm">Private Equity Readiness</span>
                            <h2 className="text-4xl md:text-5xl font-bold text-brand-black mt-4 mb-8 leading-tight">
                                We Build Significant Companies, Not Just Profitable Ones.
                            </h2>
                            <p className="text-lg text-brand-grey mb-8 leading-relaxed">
                                Most owners focus on today's profit. We focus on tomorrow's value. By addressing structural risks and optimizing EBITDA, we ensure your business is perceived as a low-risk, high-reward acquisition by the most sophisticated buyers.
                            </p>
                            <div className="space-y-4 mb-10">
                                {[
                                    "Increase EBITDA Multipliers through structural optimization.",
                                    "De-risk the business to ensure a 100% close rate.",
                                    "Identify wealth gaps to secure your financial future.",
                                    "Build a legacy that thrives long after your exit."
                                ].map((item, i) => (
                                    <div key={i} className="flex items-start">
                                        <div className="bg-brand-gold/10 p-1 rounded-full mr-4 mt-1">
                                            <CheckCircle className="text-brand-gold" size={18} />
                                        </div>
                                        <span className="text-brand-grey font-medium">{item}</span>
                                    </div>
                                ))}
                            </div>
                            <button
                                onClick={() => setIsWaitlistOpen(true)}
                                className="inline-flex items-center px-8 py-4 bg-brand-black text-white text-lg font-bold rounded-xl hover:bg-brand-gold transition-all shadow-lg"
                            >
                                Secure Your Assessment <ArrowRight className="ml-2" />
                            </button>
                        </div>
                        <div className="relative">
                            <div className="aspect-square bg-white p-4 rounded-[2rem] shadow-2xl relative z-10 overflow-hidden group">
                                <img
                                    src="/assets/headshot.jpg"
                                    alt="Tom"
                                    className="w-full h-full object-cover object-top rounded-[1.5rem] grayscale group-hover:grayscale-0 transition-all duration-700"
                                />
                                <div className="absolute inset-0 bg-brand-gold/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                            </div>
                            <div className="absolute -bottom-10 -right-10 bg-brand-gold text-white p-10 rounded-3xl shadow-2xl z-20 hidden md:block animate-bounce-subtle">
                                <p className="text-3xl font-black italic">15+</p>
                                <p className="text-sm font-bold uppercase tracking-widest opacity-80">Years Expertise</p>
                            </div>
                            <div className="absolute -top-10 -left-10 w-40 h-40 border-[20px] border-brand-gold/10 rounded-full z-0"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-32 bg-brand-black text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-gold/5 blur-[120px] rounded-full"></div>
                <div className="container mx-auto px-6 text-center relative z-10">
                    <h2 className="text-4xl md:text-6xl font-bold mb-8">Ready to Scale Your Multiple?</h2>
                    <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
                        Don't leave your legacy to chance. Join our exclusive waitlist for private advisory services.
                    </p>
                    <button
                        onClick={() => setIsWaitlistOpen(true)}
                        className="px-12 py-6 bg-brand-gold text-white text-xl font-bold rounded-2xl hover:bg-white hover:text-brand-black transition-all duration-300 shadow-2xl hover:shadow-brand-gold/40"
                    >
                        Apply for the Waitlist
                    </button>
                </div>
            </section>

            <WaitlistModal isOpen={isWaitlistOpen} onClose={() => setIsWaitlistOpen(false)} />
        </div>
    );
};

export default Home;
