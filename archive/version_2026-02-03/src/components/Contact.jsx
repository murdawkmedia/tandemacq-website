import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Check, AlertCircle } from 'lucide-react';
import { WEB3FORMS_ENDPOINT, WEB3FORMS_ACCESS_KEY } from '../config/forms';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        businessType: '',
        revenue: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus(null);

        try {
            const response = await fetch(WEB3FORMS_ENDPOINT, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    access_key: WEB3FORMS_ACCESS_KEY,
                    subject: `New Contact Form: ${formData.name} - ${formData.businessType}`,
                    from_name: 'Tandem Website',
                    ...formData,
                }),
            });

            const result = await response.json();
            if (result.success) {
                setSubmitStatus('success');
                setFormData({ name: '', email: '', phone: '', businessType: '', revenue: '', message: '' });
            } else {
                setSubmitStatus('error');
            }
        } catch (error) {
            console.error('Form submission error:', error);
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
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
                                <a href="mailto:tom@tandemacq.com" className="text-brand-grey hover:text-brand-gold">tom@tandemacq.com</a>
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
                                        <option value="<$1M">Less than $1M</option>
                                        <option value="$1M-$5M">$1M - $5M</option>
                                        <option value="$5M-$10M">$5M - $10M</option>
                                        <option value="$10M-$25M">$10M - $25M</option>
                                        <option value="$25M+">$25M+</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-brand-black mb-2">Message</label>
                                    <textarea name="message" onChange={handleChange} rows="4" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-brand-gold focus:ring-1 focus:ring-brand-gold outline-none transition-all" placeholder="Tell us a bit about your business..."></textarea>
                                </div>

                                {submitStatus === 'success' ? (
                                    <div className="w-full py-4 bg-green-500 text-white font-bold rounded-lg flex items-center justify-center">
                                        <Check size={20} className="mr-2" /> Message Sent Successfully!
                                    </div>
                                ) : submitStatus === 'error' ? (
                                    <div className="space-y-3">
                                        <div className="w-full py-3 bg-red-100 text-red-700 font-medium rounded-lg flex items-center justify-center">
                                            <AlertCircle size={18} className="mr-2" /> Something went wrong. Please try again.
                                        </div>
                                        <button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className="w-full py-4 bg-brand-black text-white font-bold rounded-lg hover:bg-brand-gold transition-all duration-300 flex items-center justify-center disabled:opacity-70"
                                        >
                                            {isSubmitting ? (
                                                <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                                            ) : (
                                                <>Retry <Send size={20} className="ml-2" /></>
                                            )}
                                        </button>
                                    </div>
                                ) : (
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full py-4 bg-brand-black text-white font-bold rounded-lg hover:bg-brand-gold transition-all duration-300 flex items-center justify-center disabled:opacity-70"
                                    >
                                        {isSubmitting ? (
                                            <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                                        ) : (
                                            <>Send Message <Send size={20} className="ml-2" /></>
                                        )}
                                    </button>
                                )}
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
