import React, { useState } from 'react';

const LeadCapture = () => {
    const [formData, setFormData] = useState({ name: '', phone: '', service: '' });
    const [status, setStatus] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('Submitting...');

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify({
                    access_key: "YOUR_ACCESS_KEY_HERE", // TODO: Replace with your Web3Forms access key
                    name: formData.name || "Alias Not Provided",
                    phone: formData.phone,
                    service: formData.service || "Not Selected",
                    subject: "New Lead Submission - Secure Booking",
                }),
            });
            const result = await response.json();
            if (result.success) {
                setStatus('Request submitted. We will contact you discreetly.');
                setFormData({ name: '', phone: '', service: '' });
            } else {
                setStatus('Submission failed. Please try again.');
            }
        } catch (error) {
            setStatus('An error occurred. Please try again later.');
        }
        setTimeout(() => setStatus(''), 5000);
    };

    return (
        <div className="bg-brand-black/80 p-8 rounded-xl border border-brand-burgundy/40 shadow-2xl max-w-md w-full backdrop-blur-sm relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-gold to-brand-burgundy"></div>
            <h3 className="text-2xl font-serif text-brand-gold mb-2 font-bold tracking-wide">Secure Booking</h3>
            <p className="text-gray-400 text-sm mb-6">Experience uncompromising luxury and absolute discretion.</p>

            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="sr-only" htmlFor="name">Name (Optional/Alias)</label>
                    <input
                        type="text"
                        id="name"
                        placeholder="Name or Alias"
                        className="w-full bg-gray-900 border border-gray-800 focus:border-brand-burgundy rounded-md px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-brand-burgundy transition-all"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                </div>
                <div>
                    <label className="sr-only" htmlFor="phone">Phone Number</label>
                    <input
                        type="tel"
                        id="phone"
                        required
                        placeholder="Contact Number *"
                        className="w-full bg-gray-900 border border-gray-800 focus:border-brand-burgundy rounded-md px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-brand-burgundy transition-all"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                </div>
                <div>
                    <label className="sr-only" htmlFor="service">Preferred Location</label>
                    <select
                        id="service"
                        className="w-full bg-gray-900 border border-gray-800 focus:border-brand-burgundy rounded-md px-4 py-3 text-gray-300 focus:outline-none focus:ring-1 focus:ring-brand-burgundy transition-all"
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    >
                        <option value="" disabled>Select Location</option>
                        <option value="vasundhara">Vasundhara</option>
                        <option value="vaishali">Vaishali</option>
                        <option value="noida">Noida</option>
                        <option value="ghaziabad">Ghaziabad (Other)</option>
                    </select>
                </div>

                <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-brand-burgundy to-[#3a0010] text-white font-semibold py-3 rounded-md hover:shadow-lg hover:shadow-brand-burgundy/40 transition-all duration-300 uppercase tracking-widest text-sm relative overflow-hidden group"
                >
                    <span className="relative z-10">Request Callback</span>
                    <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-[#4a0015] to-brand-burgundy scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ease-out z-0"></div>
                </button>

                {status && <p className="text-brand-gold text-sm text-center mt-4 animate-pulse">{status}</p>}
            </form>
            <p className="text-xs text-gray-600 text-center mt-4">100% Confidential & Secure</p>
        </div>
    );
};

export default LeadCapture;
