import React, { useState } from 'react';
import { X, Check, AlertCircle } from 'lucide-react';
import { WEB3FORMS_ENDPOINT, WEB3FORMS_ACCESS_KEY } from '../config/forms';

const WaitlistModal = ({ isOpen, onClose }) => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [hasError, setHasError] = useState(false);

    if (!isOpen) return null;

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setHasError(false);

        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData.entries());

        // Handle checkbox array
        const interests = formData.getAll('interests');
        data.interests = interests.join(', ');

        try {
            const response = await fetch(WEB3FORMS_ENDPOINT, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    access_key: WEB3FORMS_ACCESS_KEY,
                    subject: `New Waitlist Signup: ${data.businessName}`,
                    from_name: 'Tandem Website',
                    formType: 'waitlist',
                    ...data,
                }),
            });

            const result = await response.json();
            if (result.success) {
                setIsSubmitted(true);
            } else {
                setHasError(true);
            }
        } catch (error) {
            console.error('Form submission error:', error);
            setHasError(true);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-brand-black/80 backdrop-blur-sm animate-in fade-in duration-300">
            <div className="bg-white w-full max-w-2xl rounded-2xl shadow-2xl overflow-hidden relative animate-in zoom-in-95 duration-300">
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 p-2 text-gray-500 hover:text-gray-900 transition-colors z-50"
                >
                    <X size={24} />
                </button>

                {isSubmitted ? (
                    <div className="p-12 text-center py-20">
                        <div className="bg-brand-gold/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                            <Check className="text-brand-gold" size={40} />
                        </div>
                        <h2 className="text-3xl font-bold text-brand-black mb-4">You're on the list!</h2>
                        <p className="text-brand-grey text-lg mb-8">
                            Thank you for your interest. We'll be in touch shortly to discuss your business strategy.
                        </p>
                        <button
                            onClick={onClose}
                            className="px-8 py-3 bg-brand-black text-white font-bold rounded-lg hover:bg-brand-gold transition-colors"
                        >
                            Close
                        </button>
                    </div>
                ) : (
                    <div className="p-8 md:p-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-2">Join the Waitlist</h2>
                        <p className="text-gray-600 mb-8">
                            Secure your spot for a strategic valuation and exit planning consultation.
                        </p>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-semibold text-black mb-2">Business Name</label>
                                    <input
                                        required
                                        name="businessName"
                                        type="text"
                                        className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-brand-gold/50 focus:border-brand-gold transition-all"
                                        placeholder="Enter your business name"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-black mb-2">Contact Name</label>
                                    <input
                                        required
                                        name="contactName"
                                        type="text"
                                        className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-brand-gold/50 focus:border-brand-gold transition-all"
                                        placeholder="Enter your name"
                                    />
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-semibold text-black mb-2">Email</label>
                                    <input
                                        required
                                        name="email"
                                        type="email"
                                        className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-brand-gold/50 focus:border-brand-gold transition-all"
                                        placeholder="email@example.com"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-black mb-2">Phone</label>
                                    <input
                                        required
                                        name="phone"
                                        type="tel"
                                        className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-brand-gold/50 focus:border-brand-gold transition-all"
                                        placeholder="(555) 000-0000"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-black mb-2">Annual Revenue Range</label>
                                <select
                                    name="revenue"
                                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-brand-gold/50 focus:border-brand-gold transition-all"
                                >
                                    <option value="<$1M">$1 Million or less</option>
                                    <option value="$1M-$5M">$1 Million - $5 Million</option>
                                    <option value="$5M-$10M">$5 Million - $10 Million</option>
                                    <option value="$10M-$15M">$10 Million - $15 Million</option>
                                    <option value="$15M-$20M">$15 Million - $20 Million</option>
                                    <option value="$20M-$25M">$20 Million - $25 Million</option>
                                    <option value="$25M+">$25 Million+</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-black mb-3">Areas of Interest</label>
                                <div className="grid grid-cols-2 gap-3">
                                    {[
                                        'Intrinsic Value',
                                        'Risks & Opportunities',
                                        'Wealth Gap',
                                        'Value Gap',
                                        'Profit Gap',
                                        'Assessment'
                                    ].map(item => (
                                        <label key={item} className="flex items-center space-x-3 cursor-pointer group">
                                            <input type="checkbox" name="interests" value={item} className="w-5 h-5 rounded border-gray-300 text-brand-gold focus:ring-brand-gold" />
                                            <span className="text-black group-hover:text-gray-700 transition-colors">{item}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>

                            <button
                                disabled={isSubmitting}
                                type="submit"
                                className="w-full py-4 bg-gray-900 text-white text-lg font-bold rounded-xl hover:bg-brand-gold transition-all duration-300 shadow-xl hover:shadow-brand-gold/30 flex items-center justify-center disabled:opacity-70"
                            >
                                {isSubmitting ? (
                                    <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                                ) : (
                                    'Submit Your Interest'
                                )}
                            </button>
                        </form>
                    </div>
                )}
            </div>
        </div>
    );
};

export default WaitlistModal;
