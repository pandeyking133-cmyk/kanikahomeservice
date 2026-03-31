import React, { useEffect } from 'react';
import { ShieldCheck, Heart, Plane, Star, CheckCircle, MapPin } from 'lucide-react';

const About = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const services = [
        { icon: <Heart size={32} className="text-brand-gold mb-4" />, title: "Private Companionship", desc: "Discreet and intimate interactions tailored to your personal preferences and needs." },
        { icon: <Star size={32} className="text-brand-gold mb-4" />, title: "Social & Event", desc: "Professional and elegant partners for high-profile events, dinners, or gatherings." },
        { icon: <Plane size={32} className="text-brand-gold mb-4" />, title: "Travel Companionship", desc: "Sophisticated travel partners ensuring your journeys are as enjoyable as the destinations." },
        { icon: <ShieldCheck size={32} className="text-brand-gold mb-4" />, title: "Personalized Experiences", desc: "Curated experiences designed specifically around your unique tastes and desires." }
    ];

    const reasons = [
        { title: "Premium Selection", desc: "A carefully curated selection of elegant companions." },
        { title: "24/7 Availability", desc: "Round-the-clock service to cater to your schedule." },
        { title: "Verified Profiles", desc: "Complete authenticity with thoroughly vetted individuals." },
        { title: "Seamless Booking", desc: "A smooth, hassle-free process from inquiry to completion." }
    ];

    const locations = ["Ghaziabad", "Noida", "Vaishali", "Vasundhara", "Kaushambi", "Raj Nagar"];

    return (
        <div className="bg-brand-black min-h-screen text-gray-300 font-sans selection:bg-brand-gold selection:text-black">
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 px-4 border-b border-gray-900">
                <div className="absolute inset-0 bg-gradient-to-b from-brand-black/90 via-black to-brand-black z-0 pointer-events-none"></div>
                <div className="relative z-10 container mx-auto text-center max-w-4xl">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-brand-gold font-bold mb-6 tracking-wide drop-shadow-lg">
                        About Kanika Home Service
                    </h1>
                    <p className="text-lg md:text-xl text-gray-300 mb-10 font-light leading-relaxed max-w-3xl mx-auto">
                        Delivering premium, private and personalized experiences with elegance and discretion.
                    </p>
                    <a href="tel:7303405072" className="inline-block bg-brand-gold hover:bg-yellow-600 border border-brand-gold text-black px-8 py-3 rounded-full font-semibold transition duration-300 shadow-[0_0_15px_rgba(212,175,55,0.4)] hover:shadow-[0_0_25px_rgba(212,175,55,0.6)]">
                        Contact Now
                    </a>
                </div>
            </section>

            {/* About Introduction Section */}
            <section className="py-20 px-4 container mx-auto">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-serif text-brand-gold font-bold mb-8 flex items-center justify-center gap-3">
                        <span className="w-12 h-[1px] bg-brand-gold/50 hidden md:block"></span>
                        Who We Are
                        <span className="w-12 h-[1px] bg-brand-gold/50 hidden md:block"></span>
                    </h2>
                    <p className="text-gray-300 leading-relaxed text-lg md:text-xl font-light">
                        <span className="text-brand-gold font-medium">Kanika Home Service</span> is a privately managed premium service platform offering refined companionship experiences across Ghaziabad, Noida, Vaishali, Vasundhara, and nearby areas. We focus on quality, discretion, and personalized service to ensure every interaction meets the highest standards of luxury.
                    </p>
                </div>
            </section>

            {/* What We Offer Section */}
            <section className="py-20 px-4 bg-[#050505] border-y border-gray-900">
                <div className="container mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-serif text-brand-gold font-bold mb-4">What We Offer</h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">Tailored services designed to provide exceptional experiences.</p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {services.map((service, index) => (
                            <div key={index} className="bg-brand-black border border-gray-800 p-8 rounded-2xl hover:border-brand-gold/50 transition duration-500 group flex flex-col items-center text-center hover:-translate-y-2 shadow-lg hover:shadow-brand-gold/10">
                                <div className="p-4 bg-gray-900 rounded-full mb-6 group-hover:scale-110 group-hover:bg-brand-gold/10 transition duration-500">
                                    {service.icon}
                                </div>
                                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-brand-gold transition duration-300">{service.title}</h3>
                                <p className="text-gray-400 font-light text-sm">{service.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Privacy Section */}
            <section className="py-20 px-4 container mx-auto">
                <div className="max-w-5xl mx-auto text-center bg-gradient-to-br from-gray-900/50 to-black p-10 md:p-16 rounded-3xl border border-gray-800 shadow-2xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-brand-gold/5 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-gold/5 rounded-full blur-3xl"></div>
                    
                    <ShieldCheck size={48} className="text-brand-gold mx-auto mb-6 opacity-90" />
                    <h2 className="text-3xl md:text-4xl font-serif text-brand-gold font-bold mb-6 relative z-10">Absolute Discretion</h2>
                    <p className="text-gray-300 leading-relaxed text-lg font-light relative z-10 max-w-3xl mx-auto">
                        We prioritize your privacy and confidentiality at every step. All interactions are handled with absolute professionalism and complete discretion, providing you with a safe and secure environment to enjoy our premium services.
                    </p>
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="py-20 px-4 bg-black border-y border-gray-900">
                <div className="container mx-auto">
                    <h2 className="text-3xl md:text-4xl font-serif text-brand-gold font-bold text-center mb-16">Why Choose Us</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                        {reasons.map((reason, index) => (
                            <div key={index} className="flex items-start p-6 bg-brand-black/60 rounded-xl border border-gray-800/50 hover:bg-gray-900/80 hover:border-brand-gold/30 transition duration-300">
                                <CheckCircle className="text-brand-gold mt-1 mr-4 shrink-0" size={24} />
                                <div>
                                    <h3 className="text-xl font-semibold text-white mb-2">{reason.title}</h3>
                                    <p className="text-gray-400 font-light">{reason.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Locations Section */}
            <section className="py-20 px-4 container mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-serif text-brand-gold font-bold mb-12">Our Service Areas</h2>
                <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
                    {locations.map((loc, index) => (
                        <div key={index} className="flex items-center gap-2 bg-gray-900/40 border border-gray-800 text-gray-300 px-6 py-3 rounded-full hover:border-brand-gold/60 hover:text-brand-gold transition duration-300 hover:bg-gray-900/80">
                            <MapPin size={18} className="text-brand-gold/70" />
                            <span>{loc}</span>
                        </div>
                    ))}
                </div>
            </section>

            {/* Vision Section */}
            <section className="py-20 px-4 bg-gradient-to-b from-black to-brand-black border-t border-gray-900 relative overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl h-96 bg-brand-gold/5 blur-[120px] rounded-full z-0 pointer-events-none"></div>
                <div className="container mx-auto text-center max-w-4xl relative z-10">
                    <h2 className="text-3xl md:text-4xl font-serif text-brand-gold font-bold mb-8">Our Vision</h2>
                    <p className="text-gray-300 text-xl md:text-2xl font-light italic leading-relaxed text-balance">
                        "Our goal is to redefine premium service experiences by combining trust, luxury, and professionalism into one seamless platform."
                    </p>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 px-4 container mx-auto text-center relative border-t border-gray-900/50">
                <div className="relative z-10 bg-gray-900/30 border border-gray-800 rounded-3xl p-10 max-w-4xl mx-auto shadow-2xl backdrop-blur-sm">
                    <h2 className="text-3xl md:text-4xl font-serif text-white font-bold mb-8">Experience Premium Service Today</h2>
                    <a href="tel:7303405072" className="inline-block bg-brand-gold hover:bg-yellow-600 text-black px-10 py-4 rounded-full font-bold text-lg transition duration-300 shadow-[0_0_20px_rgba(212,175,55,0.4)] hover:shadow-[0_0_30px_rgba(212,175,55,0.6)] hover:-translate-y-1">
                        Contact Us
                    </a>
                </div>
            </section>
        </div>
    );
};

export default About;
