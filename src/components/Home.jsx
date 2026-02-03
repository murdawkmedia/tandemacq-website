import React, { useState } from 'react';
import { ArrowRight, CheckCircle, TrendingUp, Search, FileText, Settings, Play } from 'lucide-react';
import WaitlistModal from './WaitlistModal';

const Home = () => {
    const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);

    return (
        <div className="animate-in fade-in duration-700 bg-brand-slate text-brand-white">
            {/* Hero Section - Centered & Atmospheric */}
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src={`${import.meta.env.BASE_URL}assets/tandem-acquisitions-hero.png`}
                        alt="Thomas McElwrath - Strategic Business Advisor"
                        className="w-full h-full object-cover object-[50%_20%] opacity-60 scale-125 translate-x-[15%]"
                    />
                    {/* Adjusted Gradient: Lighter at the top to show the head, darker at bottom for text contrast */}
                    <div className="absolute inset-0 bg-gradient-to-b from-brand-slate/10 via-brand-slate/60 to-brand-slate"></div>
                </div>

                <div className="container mx-auto px-6 relative z-10 text-center max-w-5xl pt-44">
                    <span className="inline-block px-4 py-2 mb-8 text-[10px] font-bold tracking-[0.3em] text-brand-gold uppercase border border-brand-gold/30 rounded-full bg-brand-gold/5 backdrop-blur-sm animate-fade-in">
                        Strategic Business Advisory
                    </span>
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-normal text-white mb-8 leading-[1.1] tracking-tight animate-fade-in delay-100 drop-shadow-lg">
                        Transforming <br /> <span className="text-white/80">Successful Businesses</span> <br /> Into <span className="text-brand-gold italic font-light">Significant</span> Ones.
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-200 mb-12 max-w-2xl mx-auto font-light leading-relaxed animate-fade-in delay-200 drop-shadow-md">
                        Don't leave your legacy to chance. We guide you to build a company that is Valuable, Transferable, Ready, and Attractive.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in delay-300">
                        <button
                            onClick={() => setIsWaitlistOpen(true)}
                            className="bg-brand-gold text-brand-dark font-bold py-4 px-10 rounded-full hover:bg-white hover:text-brand-dark transition-all duration-300 shadow-[0_0_20px_rgba(212,175,55,0.4)] hover:shadow-[0_0_30px_rgba(255,255,255,0.6)]"
                        >
                            Join The Waitlist
                        </button>
                    </div>
                </div>
            </section>

            {/* Mission Section - Minimalist */}
            <section className="py-32 bg-brand-dark/30">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-3xl font-heading font-light tracking-wide mb-8">OUR MISSION</h2>
                        <div className="w-px h-16 bg-brand-gold mx-auto mb-8"></div>
                        <p className="text-3xl md:text-4xl leading-relaxed font-light text-gray-200 mb-12">
                            To ensure that the <span className="text-brand-gold font-normal">70-80% of your net worth</span> tied up in your business is protected, maximized, and successfully transferred.
                        </p>
                        <p className="text-lg text-gray-400 font-light leading-loose">
                            Only 20% of businesses listed for sale actually sell. We exist to put you in that top 20%, ensuring you don't just exit, but exit with significance.
                        </p>
                    </div>
                </div>
            </section>

            {/* The 4-Step Process - Vertical Timeline */}
            <section id="tandem-method" className="py-32 relative">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-24">
                        <span className="text-brand-gold text-xs font-bold tracking-[0.3em] uppercase block mb-4">The Roadmap</span>
                        <h2 className="text-4xl md:text-5xl font-heading font-light text-white">The Tandem Method</h2>
                    </div>

                    <div className="max-w-4xl mx-auto relative">
                        {/* Vertical Line */}
                        <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-white/10 transform -translate-x-1/2 hidden md:block"></div>

                        {/* Step 1 */}
                        <div className="grid md:grid-cols-2 gap-16 mb-24 relative">
                            <div className="text-right md:pr-12 hidden md:block">
                                <div className="text-9xl font-heading font-bold text-white/5 absolute right-full mr-[-4rem] top-0 selection:bg-none pointer-events-none">01</div>
                                <h3 className="text-5xl font-heading font-normal mb-4 text-white">Identify</h3>
                                <p className="text-gray-300 leading-relaxed text-xl">
                                    We start by identifying exactly where you stand compared to best-in-class peers. This baseline drives every future decision.
                                </p>
                            </div>
                            <div className="md:pl-12 flex flex-col justify-center border-l border-white/10 md:border-none pl-8 md:pl-0">
                                <h3 className="md:hidden text-5xl font-heading font-normal mb-4 text-white"><span className="text-brand-gold">01.</span> Identify</h3>
                                <div className="grid gap-8">
                                    <div className="glass-panel p-6 rounded-lg">
                                        <h4 className="text-brand-gold font-bold uppercase tracking-wider text-sm mb-3">Calculate Business Value</h4>
                                        <p className="text-gray-300 text-base leading-relaxed">
                                            Industry best practices require owners to calculate their business's enterprise value at least <span className="font-bold text-white">annually</span>. The result from this foundational step should drive every future decision, so it's paramount that it is always accurate to ensure the strategic plans dependent on it are correctly aligned.
                                        </p>
                                    </div>
                                    <div className="glass-panel p-6 rounded-lg">
                                        <h4 className="text-brand-gold font-bold uppercase tracking-wider text-sm mb-3">Risk & Opportunity Audit</h4>
                                        <p className="text-gray-300 text-base leading-relaxed">
                                            Before a business owner should consider investing resources into growing their business, best practices require them first to conduct a full risk/opportunity audit to identify and prioritize: (a) cracks in the foundation; (b) skeletons in the closet; and (c) potential red flags which would either make their business unsellable or result in an insultingly low offer.
                                        </p>
                                    </div>
                                    <div className="glass-panel p-6 rounded-lg">
                                        <h4 className="text-brand-gold font-bold uppercase tracking-wider text-sm mb-3">Wealth Gap Assessment</h4>
                                        <p className="text-gray-300 text-base leading-relaxed">
                                            With 70-80% of most business owners' net worth tethered their company, and only 5% of business owners happy with the net results of the sale of their business, owners use this assessment to calculate the minimum value they need to sell their company for to sustain their desired lifestyle after exiting.
                                        </p>
                                    </div>
                                    <div className="glass-panel p-6 rounded-lg">
                                        <h4 className="text-brand-gold font-bold uppercase tracking-wider text-sm mb-3">Value Gap Assessment</h4>
                                        <p className="text-gray-300 text-base leading-relaxed">
                                            For those business owners who want to calculate the difference between their company's current business value (e.g., Enterprise Value) and the business's potential valuation if they were to perform at best-in-class levels in relation to EBITDA.
                                        </p>
                                    </div>
                                    <div className="glass-panel p-6 rounded-lg">
                                        <h4 className="text-brand-gold font-bold uppercase tracking-wider text-sm mb-3">Profit Gap Assessment</h4>
                                        <p className="text-gray-300 text-base leading-relaxed">
                                            Calculate the difference between a business's current profitability and the potential profitability it could achieve by optimizing benchmarks.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Step 2 */}
                        <div className="grid md:grid-cols-2 gap-16 mb-24 relative">
                            <div className="order-2 md:order-1 md:text-right md:pr-12 flex flex-col justify-center border-l border-white/10 md:border-none pl-8 md:pl-0">
                                <h3 className="md:hidden text-5xl font-heading font-normal mb-4 text-white"><span className="text-brand-gold">02.</span> Protect</h3>
                                <ul className="space-y-6">
                                    <li className="glass-panel p-6 rounded-lg">
                                        <h4 className="text-brand-gold font-bold uppercase tracking-wider text-sm mb-2">De-Risking</h4>
                                        <p className="text-gray-300 text-lg">90-day sprints to fix critical issues in Ops, Finance, and Legal.</p>
                                    </li>
                                    <li className="glass-panel p-6 rounded-lg">
                                        <h4 className="text-brand-gold font-bold uppercase tracking-wider text-sm mb-2">Mock Due Diligence</h4>
                                        <p className="text-gray-300 text-lg">Proactively find and fix deal-killers before buyers do.</p>
                                    </li>
                                </ul>
                            </div>
                            <div className="order-1 md:order-2 md:pl-12 hidden md:block">
                                <div className="text-9xl font-heading font-bold text-white/5 absolute left-full ml-[-4rem] top-0 selection:bg-none pointer-events-none">02</div>
                                <h3 className="text-5xl font-heading font-normal mb-4 text-white">Protect</h3>
                                <p className="text-gray-300 leading-relaxed text-xl">
                                    Before building, we must secure the foundation. We eliminate risks that could scare off buyers and optimize cash flow.
                                </p>
                            </div>
                        </div>

                        {/* Step 3 */}
                        <div className="grid md:grid-cols-2 gap-16 mb-24 relative">
                            <div className="text-right md:pr-12 hidden md:block">
                                <div className="text-9xl font-heading font-bold text-white/5 absolute right-full mr-[-4rem] top-0 selection:bg-none pointer-events-none">03</div>
                                <h3 className="text-5xl font-heading font-normal mb-4 text-white">Build</h3>
                                <p className="text-gray-300 leading-relaxed text-xl">
                                    With a solid foundation, we accelerate value growth to maximize your multiple (3x → 8x+).
                                </p>
                            </div>
                            <div className="md:pl-12 flex flex-col justify-center border-l border-white/10 md:border-none pl-8 md:pl-0">
                                <h3 className="md:hidden text-5xl font-heading font-normal mb-4 text-white"><span className="text-brand-gold">03.</span> Build</h3>
                                <ul className="space-y-6">
                                    <li className="glass-panel p-6 rounded-lg">
                                        <h4 className="text-brand-gold font-bold uppercase tracking-wider text-sm mb-2">Growth Acceleration</h4>
                                        <p className="text-gray-300 text-lg">Strategically prioritizing projects that directly increase EBITDA.</p>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Step 4 */}
                        <div className="grid md:grid-cols-2 gap-16 relative">
                            <div className="order-2 md:order-1 md:text-right md:pr-12 flex flex-col justify-center border-l border-white/10 md:border-none pl-8 md:pl-0">
                                <h3 className="md:hidden text-5xl font-heading font-normal mb-4 text-white"><span className="text-brand-gold">04.</span> Sell</h3>
                                <ul className="space-y-6">
                                    <li className="glass-panel p-6 rounded-lg">
                                        <h4 className="text-brand-gold font-bold uppercase tracking-wider text-sm mb-2">Advisory</h4>
                                        <p className="text-gray-300 text-lg">Evaluating offers and managing the exit process.</p>
                                    </li>
                                </ul>
                            </div>
                            <div className="order-1 md:order-2 md:pl-12 hidden md:block">
                                <div className="text-9xl font-heading font-bold text-white/5 absolute left-full ml-[-4rem] top-0 selection:bg-none pointer-events-none">04</div>
                                <h3 className="text-5xl font-heading font-normal mb-4 text-white">Sell</h3>
                                <p className="text-gray-300 leading-relaxed text-xl">
                                    Maximize your exit with a company that is ready for the market. We provide the strategy to ensure you win.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-32 relative overflow-hidden text-center">
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/50 to-transparent"></div>
                <div className="container mx-auto px-6 relative z-10">
                    <h2 className="text-5xl md:text-6xl font-heading font-light mb-8 text-white">Ready for <span className="text-brand-gold italic">Significance</span>?</h2>
                    <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto font-light">
                        Join our exclusive waitlist for private advisory services.
                    </p>
                    <button
                        onClick={() => setIsWaitlistOpen(true)}
                        className="glass-button text-brand-gold border-brand-gold hover:bg-brand-gold hover:text-white"
                    >
                        Join The Waitlist
                    </button>

                </div>
            </section>

            <WaitlistModal isOpen={isWaitlistOpen} onClose={() => setIsWaitlistOpen(false)} />
        </div>
    );
};

export default Home;
