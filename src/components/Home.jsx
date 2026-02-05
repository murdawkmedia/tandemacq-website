import React, { useState } from 'react';
import { ArrowRight, CheckCircle, TrendingUp, Search, FileText, Settings, Play, Target, Shield, Rocket, DollarSign } from 'lucide-react';
import WaitlistModal from './WaitlistModal';

const Home = () => {
    const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);

    return (
        <div className="animate-in fade-in duration-700 bg-brand-slate text-brand-white">
            {/* Hero Section - Centered & Atmospheric */}
            <section className="relative min-h-screen flex items-start justify-start overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src={`${import.meta.env.BASE_URL}assets/hero-presentation.png`}
                        alt="Thomas McElwrath - Strategic Business Advisor"
                        className="w-full h-full object-cover object-[80%_20%] opacity-60 scale-110"
                    />
                    {/* Adjusted Gradient: Lighter at the top to show the head, darker at bottom for text contrast */}
                    <div className="absolute inset-0 bg-gradient-to-r from-brand-slate/90 via-brand-slate/40 to-transparent"></div>
                </div>

                <div className="container px-6 relative z-10 text-left max-w-2xl pt-32 ml-[5%] md:ml-[10%]">
                    <span className="inline-block px-4 py-2 mb-8 text-[10px] font-bold tracking-[0.3em] text-brand-gold uppercase border border-brand-gold/30 rounded-full bg-brand-gold/5 backdrop-blur-sm animate-fade-in">
                        ADVISORY SERVICES
                    </span>
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-normal text-white mb-8 leading-[1.1] tracking-tight animate-fade-in delay-100 drop-shadow-lg">
                        Transforming <br /> <span className="text-white/80">Successful Businesses</span> <br /> Into <span className="text-brand-gold italic font-light">Significant</span> Businesses.
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-200 mb-12 max-w-2xl mr-auto font-light leading-relaxed animate-fade-in delay-200 drop-shadow-md">
                        The <span className="text-brand-gold font-bold">TANDEM</span> consulting and training approach.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-6 justify-start items-center animate-fade-in delay-300">
                        <button
                            onClick={() => setIsWaitlistOpen(true)}
                            className="bg-brand-gold text-brand-dark font-bold py-4 px-10 rounded-full hover:bg-white hover:text-brand-dark transition-all duration-300 shadow-[0_0_20px_rgba(212,175,55,0.4)] hover:shadow-[0_0_30px_rgba(255,255,255,0.6)]"
                        >
                            JOIN THE WAITLIST
                        </button>
                    </div>
                </div>
            </section>

            {/* Growth, Value, Exit Advisory Services */}
            <section className="py-20 bg-brand-dark/50">
                <div className="container mx-auto px-6 text-center max-w-4xl">
                    <h2 className="text-3xl md:text-4xl font-heading font-light text-white mb-8">
                        Growth, Value, Exit Advisory Services
                    </h2>
                    <p className="text-xl text-gray-300 leading-relaxed mb-8">
                        The <span className="text-brand-gold font-bold">TANDEM</span> approach identifies and closes the gaps that limit scale, capital access, and exit outcomes. We work alongside owners and investors to strengthen operating fundamentals, improve finance ability, and translate performance into sustainable enterprise value.
                    </p>
                    <button
                        onClick={() => setIsWaitlistOpen(true)}
                        className="text-brand-gold font-bold uppercase tracking-widest text-sm hover:text-white transition-colors"
                    >
                        Join the wait list →
                    </button>
                </div>
            </section>

            {/* About Tandem Section - 2 Column Layout */}
            <section className="pt-32 pb-12 bg-brand-dark/30">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-heading font-light tracking-wide">ABOUT TANDEM</h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-16 items-start">
                        {/* Left Column: Image with stylized T */}
                        <div className="relative">
                            <div className="absolute inset-0 bg-brand-gold/10 transform translate-x-4 translate-y-4 rounded-lg"></div>
                            <img
                                src={`${import.meta.env.BASE_URL}assets/about-image.jpg`}
                                alt="Thomas McElwrath"
                                className="relative z-10 rounded-lg shadow-2xl w-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                            />
                            {/* Stylized T overlay */}
                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[20rem] font-bold text-white/5 pointer-events-none select-none font-heading leading-none">
                                T
                            </div>
                        </div>

                        {/* Right Column: Text */}
                        <div className="text-left">
                            <span className="text-brand-gold font-bold uppercase tracking-widest text-sm mb-4 block">Our Mission</span>
                            <h3 className="text-3xl md:text-4xl leading-tight font-light text-white mb-8 border-b border-white/10 pb-8">
                                To elevate successful companies into significant businesses.
                            </h3>

                            <div className="space-y-6 text-gray-300 font-light leading-relaxed">
                                <p>
                                    For most business owners, <span className="text-white font-bold">70–80% of personal net worth is concentrated in their company</span>, yet only <span className="text-white font-bold">about 20% of businesses taken to market actually sell</span>. Of those transactions that do close, <span className="text-white font-bold">nearly half require material concessions</span>, often resulting in proceeds below the owner's target or financial need.
                                </p>
                                <p>
                                    Even more concerning, among owners who do achieve a sale, <span className="text-white font-bold">76% report profound regret within one year</span>—most commonly because the transaction failed to deliver the financial security they expected and/or they lacked a clear plan for what comes next.
                                </p>
                                <p>
                                    Your business is likely your largest asset. Protecting it requires more than operational success—it requires <span className="text-white font-bold">intentional preparation for value, transferability, and transition</span>.
                                </p>
                                <p>
                                    At TANDEM, we help owners transform a <em className="text-white">successful company</em> into a <em className="text-brand-gold">significant business</em>—one that is:
                                </p>
                            </div>

                            {/* 4 Pillars - Moved to Right Column */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-12">
                                <div className="glass-panel p-6 rounded-xl text-center hover-lift">
                                    <div className="w-12 h-12 bg-brand-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <DollarSign className="text-brand-gold" size={24} />
                                    </div>
                                    <h4 className="text-lg font-bold text-white mb-2">1. Valuable</h4>
                                    <p className="text-gray-400 text-xs leading-relaxed">
                                        Possessing an enterprise value that meets or exceeds your future financial requirements.
                                    </p>
                                </div>
                                <div className="glass-panel p-6 rounded-xl text-center hover-lift">
                                    <div className="w-12 h-12 bg-brand-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <Settings className="text-brand-gold" size={24} />
                                    </div>
                                    <h4 className="text-lg font-bold text-white mb-2">2. Transferable</h4>
                                    <p className="text-gray-400 text-xs leading-relaxed">
                                        Designed to operate efficiently without your constant, direct involvement.
                                    </p>
                                </div>
                                <div className="glass-panel p-6 rounded-xl text-center hover-lift">
                                    <div className="w-12 h-12 bg-brand-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <Target className="text-brand-gold" size={24} />
                                    </div>
                                    <h4 className="text-lg font-bold text-white mb-2">3. Ready</h4>
                                    <p className="text-gray-400 text-xs leading-relaxed">
                                        Positioned to transfer at any time, not only when circumstances force a decision.
                                    </p>
                                </div>
                                <div className="glass-panel p-6 rounded-xl text-center hover-lift">
                                    <div className="w-12 h-12 bg-brand-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <TrendingUp className="text-brand-gold" size={24} />
                                    </div>
                                    <h4 className="text-lg font-bold text-white mb-2">4. Attractive</h4>
                                    <p className="text-gray-400 text-xs leading-relaxed">
                                        Compelling to buyers due to strong human, structural, customer, and cultural capital.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>



                    {/* Callout */}
                    <div className="mt-16 text-center">
                        <p className="text-xl md:text-2xl text-white font-light italic border-l-4 border-brand-gold pl-6 py-4 text-left max-w-3xl mx-auto">
                            Start preparing proactively—before timing, markets, or circumstances decide for you.
                        </p>
                        <p className="mt-8 text-gray-400 max-w-3xl mx-auto">
                            Our work spans founder-led and investor-backed businesses across several industries, giving us a broad market perspective and practical insight into what drives durable value and successful outcomes.
                        </p>
                    </div>
                </div>
            </section>

            {/* Our Team Section */}
            <section className="pt-12 pb-32 bg-brand-slate">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-heading font-light tracking-wide">OUR TEAM</h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-16 items-center max-w-5xl mx-auto">
                        <div className="text-left">
                            <p className="text-xl text-white font-light leading-relaxed mb-8">
                                <span className="text-brand-gold font-bold">With more than two decades of experience</span>, we have advised owners and investors across the full transaction lifecycle, including business sales, mergers, and acquisitions.
                            </p>
                            <p className="text-lg text-gray-300 leading-relaxed">
                                Our work spans companies of all sizes and industries, giving us a broad market perspective and practical insight into what drives successful outcomes.
                            </p>
                        </div>
                        <div className="relative">
                            <div className="absolute inset-0 bg-brand-gold/10 transform -translate-x-4 translate-y-4 rounded-lg"></div>
                            <img
                                src={`${import.meta.env.BASE_URL}assets/team-medium.png`}
                                alt="Thomas McElwrath"
                                className="relative z-10 rounded-lg shadow-2xl w-full max-w-md mx-auto object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* The 4-Step Process - TANDEM SERVICES */}
            <section id="tandem-method" className="pt-32 pb-0 relative bg-brand-dark/30">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-24">
                        <span className="text-brand-gold text-xs font-bold tracking-[0.3em] uppercase block mb-4">The Roadmap</span>
                        <h2 className="text-4xl md:text-5xl font-heading font-light text-white">TANDEM SERVICES</h2>
                    </div>

                    <div className="max-w-4xl mx-auto relative">
                        {/* Vertical Line */}
                        <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-white/10 transform -translate-x-1/2 hidden md:block"></div>

                        {/* Step 1: Identify */}
                        <div className="grid md:grid-cols-2 gap-16 mb-24 relative">
                            <div className="text-right md:pr-12 hidden md:block">
                                <div className="flex items-center justify-end gap-4 mb-4 relative">
                                    <div className="text-9xl font-heading font-bold text-white/10 leading-none selection:bg-none pointer-events-none -mb-4">01</div>
                                    <h3 className="text-5xl font-heading font-normal text-white relative z-10">Identify</h3>
                                </div>
                                <p className="text-gray-300 leading-relaxed text-xl mb-4">
                                    Establish clarity on value, risk, and upside.
                                </p>
                                <p className="text-gray-400 text-base">
                                    We begin by benchmarking your business against similarly sized best-in-class peers. Using this comparison, we identify structural risks and unrealized opportunities, then build a clear roadmap to elevate your company from <em>successful</em> to <em className="text-brand-gold">significant</em>.
                                </p>
                            </div>
                            <div className="md:pl-12 flex flex-col justify-center border-l border-white/10 md:border-none pl-8 md:pl-0">
                                <h3 className="md:hidden text-5xl font-heading font-normal mb-4 text-white"><span className="text-brand-gold">01.</span> Identify</h3>
                                <div className="grid gap-6">
                                    <div className="glass-panel p-6 rounded-lg">
                                        <h4 className="text-brand-gold font-bold uppercase tracking-wider text-sm mb-3">Business Value Calculation</h4>
                                        <p className="text-gray-200 text-base leading-relaxed">
                                            Best practice requires owners to calculate enterprise value at least annually. This valuation serves as the foundation for strategic decision-making—capital allocation, growth initiatives, succession planning, and exit timing—making accuracy critical.
                                        </p>
                                    </div>
                                    <div className="glass-panel p-6 rounded-lg">
                                        <h4 className="text-brand-gold font-bold uppercase tracking-wider text-sm mb-3">Risk & Opportunity Audit</h4>
                                        <p className="text-gray-200 text-base leading-relaxed">
                                            Before investing additional time or capital into growth, owners must first understand what could impair value. This audit identifies and prioritizes foundational weaknesses, latent risks ("skeletons"), and red flags that could render the business unsellable or materially depress valuation.
                                        </p>
                                    </div>
                                    <div className="glass-panel p-6 rounded-lg">
                                        <h4 className="text-brand-gold font-bold uppercase tracking-wider text-sm mb-3">Wealth Gap Assessment</h4>
                                        <p className="text-gray-200 text-base leading-relaxed">
                                            With 70–80% of an owner's net worth typically tied to the business—and only a small percentage satisfied with net exit proceeds—this assessment determines the minimum enterprise value required to sustain your desired post-exit lifestyle.
                                        </p>
                                    </div>
                                    <div className="glass-panel p-6 rounded-lg">
                                        <h4 className="text-brand-gold font-bold uppercase tracking-wider text-sm mb-3">Value Gap Assessment</h4>
                                        <p className="text-gray-200 text-base leading-relaxed">
                                            We calculate the difference between your current enterprise value and the value your business could command if operating at best-in-class EBITDA performance.
                                        </p>
                                    </div>
                                    <div className="glass-panel p-6 rounded-lg">
                                        <h4 className="text-brand-gold font-bold uppercase tracking-wider text-sm mb-3">Profit Gap Assessment</h4>
                                        <p className="text-gray-200 text-base leading-relaxed">
                                            This analysis measures the delta between current profitability and achievable profitability under best-in-class operational and financial discipline.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Step 2: Protect */}
                        <div className="grid md:grid-cols-2 gap-16 mb-24 relative">
                            <div className="order-2 md:order-1 md:text-right md:pr-12 flex flex-col justify-center border-l border-white/10 md:border-none pl-8 md:pl-0">
                                <h3 className="md:hidden text-5xl font-heading font-normal mb-4 text-white"><span className="text-brand-gold">02.</span> Protect</h3>
                                <p className="text-gray-400 mb-8 italic">De-risk the business and fortify the foundation. We work with you to systematically reduce or eliminate the risks identified in Step 1, ensuring the business is structurally sound before accelerating growth.</p>
                                <div className="grid gap-6">
                                    <div className="glass-panel p-6 rounded-lg">
                                        <h4 className="text-brand-gold font-bold uppercase tracking-wider text-sm mb-3">Focused Risk Abatement</h4>
                                        <p className="text-gray-200 text-base leading-relaxed mb-4">
                                            Using your customized roadmap from the TANDEM In-Depth Risk & Opportunity Assessment, the first 12 months are executed in disciplined 90-day sprints. This phase is dedicated exclusively to completing Level 1: PROTECT initiatives.
                                        </p>
                                    </div>
                                    <div className="glass-panel p-6 rounded-lg">
                                        <h4 className="text-brand-gold font-bold uppercase tracking-wider text-sm mb-3">Strategic Planning Across Core Functions</h4>
                                        <p className="text-gray-200 text-base leading-relaxed mb-4">
                                            Risk mitigation and readiness improvements span:
                                        </p>
                                        <ul className="text-sm text-gray-400 grid grid-cols-2 gap-2 text-left">
                                            <li>• Leadership</li>
                                            <li>• Sales</li>
                                            <li>• Marketing</li>
                                            <li>• People & Culture</li>
                                            <li>• Operations</li>
                                            <li>• Finance</li>
                                            <li>• Legal</li>
                                        </ul>
                                    </div>
                                    <div className="glass-panel p-6 rounded-lg">
                                        <h4 className="text-brand-gold font-bold uppercase tracking-wider text-sm mb-3">Proactive Due Diligence</h4>
                                        <p className="text-gray-200 text-base leading-relaxed">
                                            With nearly half of buyers rescinding offers during diligence, we run a proactive diligence process well in advance of a transaction. This allows time to resolve deal-killing issues—or, at minimum, manage buyer perception and risk pricing.
                                        </p>
                                    </div>
                                    <div className="glass-panel p-6 rounded-lg">
                                        <h4 className="text-brand-gold font-bold uppercase tracking-wider text-sm mb-3">Cash Flow Management Improvement</h4>
                                        <p className="text-gray-200 text-base leading-relaxed mb-4">
                                            We implement proven cash-flow allocation disciplines using tiered Target Allocation Percentages (TAPs), including separate accounts for:
                                        </p>
                                        <ul className="text-sm text-gray-400 flex flex-wrap gap-x-6 gap-y-2">
                                            <li>• Profit</li>
                                            <li>• Owner Compensation</li>
                                            <li>• Taxes</li>
                                            <li>• Operating Expenses</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="order-1 md:order-2 md:pl-12 hidden md:block">
                                <div className="flex items-center justify-start gap-4 mb-4 relative">
                                    <h3 className="text-5xl font-heading font-normal text-white relative z-10">Protect</h3>
                                    <div className="text-9xl font-heading font-bold text-white/10 leading-none selection:bg-none pointer-events-none -mb-4">02</div>
                                </div>
                                <h3 className="sr-only">Protect</h3>
                                <p className="text-gray-200 leading-relaxed text-xl">
                                    De-risk the business and fortify the foundation.
                                </p>
                            </div>
                        </div>

                        {/* Step 3: Build */}
                        <div className="grid md:grid-cols-2 gap-16 mb-24 relative">
                            <div className="text-right md:pr-12 hidden md:block">
                                <div className="flex items-center justify-end gap-4 mb-4 relative">
                                    <div className="text-9xl font-heading font-bold text-white/10 leading-none selection:bg-none pointer-events-none -mb-4">03</div>
                                    <h3 className="text-5xl font-heading font-normal text-white relative z-10">Build</h3>
                                </div>
                                <p className="text-gray-200 leading-relaxed text-xl">
                                    Deliberately grow enterprise value.
                                </p>
                            </div>
                            <div className="md:pl-12 flex flex-col justify-center border-l border-white/10 md:border-none pl-8 md:pl-0">
                                <h3 className="md:hidden text-5xl font-heading font-normal mb-4 text-white"><span className="text-brand-gold">03.</span> Build</h3>
                                <p className="text-gray-400 mb-8 italic">With a strong foundation in place, we shift focus to intentional value creation.</p>
                                <div className="glass-panel p-6 rounded-lg">
                                    <h4 className="text-brand-gold font-bold uppercase tracking-wider text-sm mb-3">Value Growth Acceleration</h4>
                                    <p className="text-gray-200 text-base leading-relaxed">
                                        We guide you in prioritizing and executing high-impact value-growth initiatives—projects designed to materially improve enterprise value, scalability, and buyer attractiveness.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Step 4: Sell or remain Best-in-Class */}
                        <div className="grid md:grid-cols-2 gap-16 relative">
                            <div className="order-2 md:order-1 md:text-right md:pr-12 flex flex-col justify-center border-l border-white/10 md:border-none pl-8 md:pl-0">
                                <h3 className="md:hidden text-5xl font-heading font-normal mb-4 text-white"><span className="text-brand-gold">04.</span> Sell or remain Best-in-Class</h3>
                                <p className="text-gray-400 mb-8 italic">Prepare for and manage outcomes. Once the business has reached "significant" status, we help you navigate inbound or outbound transaction opportunities with discipline and clarity.</p>
                                <div className="glass-panel p-6 rounded-lg">
                                    <h4 className="text-brand-gold font-bold uppercase tracking-wider text-sm mb-3">Seller Advisory Services</h4>
                                    <p className="text-gray-200 text-base leading-relaxed">
                                        Customized advisory support to evaluate offers, manage process, and achieve outcomes aligned with your financial, personal, and strategic objectives.
                                    </p>
                                </div>
                            </div>
                            <div className="order-1 md:order-2 md:pl-12 hidden md:block">
                                <div className="text-9xl font-heading font-bold text-white/10 absolute left-full ml-[-4rem] top-0 selection:bg-none pointer-events-none">04</div>
                                <h3 className="text-5xl font-heading font-normal mb-4 text-white">Sell or remain Best-in-Class</h3>
                                <p className="text-gray-200 leading-relaxed text-xl">
                                    Prepare for and manage outcomes.
                                </p>
                            </div>
                        </div>

                    </div>

                    {/* System Note */}
                    <div className="mt-12 mb-12 text-center max-w-3xl mx-auto">
                        <p className="text-xl text-white italic font-light">
                            This is not advice in isolation—it is a structured system for building, protecting, and realizing enterprise value.
                        </p>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="pt-0 pb-20 relative overflow-hidden text-center bg-brand-slate">
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/50 to-transparent"></div>
                <div className="container mx-auto px-6 relative z-10">
                    <div className="max-w-2xl mx-auto bg-white/5 backdrop-blur-md border border-white/10 p-12 rounded-2xl">
                        <h2 className="text-3xl md:text-4xl font-heading font-light mb-8 text-white tracking-wide">
                            Build with <span className="text-brand-gold font-bold">INTENTION</span>. <br />
                            Build with <span className="text-brand-gold font-bold">TANDEM</span>.
                        </h2>
                        <button
                            onClick={() => setIsWaitlistOpen(true)}
                            className="bg-transparent border border-brand-gold text-brand-gold font-bold py-4 px-10 rounded-full hover:bg-brand-gold hover:text-brand-dark transition-all duration-300 tracking-wider text-sm"
                        >
                            JOIN THE WAITLIST TO WORK WITH TANDEM
                        </button>
                    </div>

                </div>
            </section>

            <WaitlistModal isOpen={isWaitlistOpen} onClose={() => setIsWaitlistOpen(false)} />
        </div>
    );
};

export default Home;
