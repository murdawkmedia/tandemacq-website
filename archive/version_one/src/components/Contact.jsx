import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        businessType: '',
        revenue: '',
        message: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        // Placeholder submit logic
        alert("Thanks for reaching out! We'll be in touch shortly.");
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <div className="animate-in fade-in duration-500 pt-12 pb-24">
            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-16">
                        <h1 className="text-4xl md:text-6xl font-bold text-brand-black mb-4">Get in Touch</h1>
                        <p className="text-xl text-brand-grey">Looking to sell? Let's talk numbers and legacy.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Contact Info */}
                        <div className="md:col-span-1 space-y-8">
                            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                                <div className="w-12 h-12 bg-brand-light rounded-full flex items-center justify-center mb-4">
                                    <Mail className="text-brand-gold" size={24} />
                                </div>
                                <h3 className="font-bold text-lg mb-1">Email Us</h3>
                                <a href="mailto:info@tandemacq.com" className="text-brand-grey hover:text-brand-gold">info@tandemacq.com</a>
                            </div>

                            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                                <div className="w-12 h-12 bg-brand-light rounded-full flex items-center justify-center mb-4">
                                    <Phone className="text-brand-gold" size={24} />
                                </div>
                                <h3 className="font-bold text-lg mb-1">Call Us</h3>
                                <a href="tel:2537408400" className="text-brand-grey hover:text-brand-gold">253-740-8400</a>
                            </div>

                            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                                <div className="w-12 h-12 bg-brand-light rounded-full flex items-center justify-center mb-4">
                                    <MapPin className="text-brand-gold" size={24} />
                                </div>
                                <h3 className="font-bold text-lg mb-1">Location</h3>
                                <p className="text-brand-grey">USA (National)</p>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="md:col-span-2 bg-white p-8 md:p-10 rounded-2xl shadow-lg border border-gray-100">
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-semibold text-brand-black mb-2">Full Name</label>
                                        <input type="text" name="name" onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-brand-gold focus:ring-1 focus:ring-brand-gold outline-none transition-all" placeholder="John Doe" required />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold text-brand-black mb-2">Email Address</label>
                                        <input type="email" name="email" onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-brand-gold focus:ring-1 focus:ring-brand-gold outline-none transition-all" placeholder="john@example.com" required />
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-semibold text-brand-black mb-2">Phone Number</label>
                                        <input type="tel" name="phone" onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-brand-gold focus:ring-1 focus:ring-brand-gold outline-none transition-all" placeholder="(555) 000-0000" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold text-brand-black mb-2">Business Type</label>
                                        <select name="businessType" onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-brand-gold focus:ring-1 focus:ring-brand-gold outline-none transition-all">
                                            <option value="">Select Sector...</option>
                                            <option value="HVAC">HVAC</option>
                                            <option value="Plumbing">Plumbing</option>
                                            <option value="Electrical">Electrical</option>
                                            <option value="Pest Control">Pest Control</option>
                                            <option value="Other">Other</option>
                                        </select>
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-brand-black mb-2">Annual Revenue Range</label>
                                    <select name="revenue" onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-brand-gold focus:ring-1 focus:ring-brand-gold outline-none transition-all">
                                        <option value="">Select Revenue...</option>
                                        <option value="<500k">Less than $500k</option>
                                        <option value="500k-1M">$500k - $1M</option>
                                        <option value="1M-2.5M">$1M - $2.5M</option>
                                        <option value="2.5M+">$2.5M+</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-brand-black mb-2">Message</label>
                                    <textarea name="message" onChange={handleChange} rows="4" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-brand-gold focus:ring-1 focus:ring-brand-gold outline-none transition-all" placeholder="Tell us a bit about your business..."></textarea>
                                </div>

                                <button type="submit" className="w-full py-4 bg-brand-black text-white font-bold rounded-lg hover:bg-brand-grey transition-all duration-300 flex items-center justify-center">
                                    Send Message <Send size={20} className="ml-2" />
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
