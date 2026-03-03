import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Phone, CheckCircle, Star, MapPin, Shield } from 'lucide-react';
import LeadCapture from '../components/LeadCapture';
import SEOTags from '../components/SEOTags';

const LocationPage = ({ locationName, heroImage }) => {
    const metaTitle = `Best Call Girl Services in ${locationName} | Luxury & Elite Companionship`;
    const metaDesc = `Experience the finest and most premium professional call girl services in ${locationName}. Elite, discreet, and seductive companionship by Kanika home service. Call 7303405072.`;

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": `What makes Kanika home service the best in ${locationName}?`,
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": `We offer an exclusive, highly curated selection of premium models in ${locationName} with a focus on absolute discretion, elegance, and professionalism.`
                }
            },
            {
                "@type": "Question",
                "name": "How can I book a call girl?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "You can securely book our services by calling us directly at 7303405072 or using the secure booking form on our website."
                }
            },
            {
                "@type": "Question",
                "name": "Is my privacy guaranteed?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, 100% confidentiality is the cornerstone of our services. We maintain strict privacy protocols for all our elite clients."
                }
            }
        ]
    };

    const localBusinessSchema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": `Kanika home service ${locationName}`,
        "image": heroImage,
        "telephone": "+917303405072",
        "email": "pandeyking133@gmail.com",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": locationName,
            "addressRegion": "UP",
            "addressCountry": "IN"
        },
        "priceRange": "$$$$"
    };

    const allLocations = ['Vasundhara', 'Vaishali', 'Noida', 'Raj Nagar', 'Mohan Nagar', 'Kaushambi', 'Ghaziabad'];
    const otherLocations = allLocations.filter(loc => loc !== locationName);

    return (
        <>
            <Helmet>
                <title>{metaTitle}</title>
                <meta name="description" content={metaDesc} />
                <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
                <script type="application/ld+json">{JSON.stringify(localBusinessSchema)}</script>
            </Helmet>

            {/* Hero */}
            <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden border-b border-brand-burgundy/30">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-brand-black/60 z-10"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/50 to-transparent z-20"></div>
                    <img src={heroImage} alt={`Call girl in ${locationName}`} className="w-full h-full object-cover object-center" />
                </div>

                <div className="container mx-auto px-4 md:px-8 relative z-30">
                    <div className="max-w-3xl">
                        <span className="text-brand-gold text-sm tracking-widest uppercase mb-4 block flex items-center gap-2">
                            <MapPin size={16} /> Exclusive to {locationName}
                        </span>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-white mb-6 leading-tight drop-shadow-xl">
                            Best Call Girl Services in <br />
                            <span className="text-brand-gold italic">{locationName}</span>
                        </h1>
                        <p className="text-xl text-gray-300 mb-8 max-w-2xl font-light leading-relaxed">
                            Elevate your experiences with the most seductive, elegant, and professional companionship available in the {locationName} area. Uncompromising luxury awaits.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <a href="tel:7303405072" className="bg-brand-burgundy text-white px-8 py-4 rounded-md font-semibold tracking-wider uppercase hover:bg-red-900 transition flex justify-center items-center gap-2 shadow-lg hover:shadow-brand-burgundy/50">
                                <Phone size={20} /> Call 7303405072
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Content Section & Sidebar Form */}
            <section className="py-20 bg-brand-black">
                <div className="container mx-auto px-4 md:px-8">
                    <div className="flex flex-col lg:flex-row gap-16">

                        {/* Main Content (SEO ~1000 words simulated by rich sections) */}
                        <div className="lg:w-2/3 prose prose-invert prose-lg max-w-none prose-headings:font-serif prose-headings:text-brand-gold prose-a:text-brand-burgundy">

                            <h2 className="text-3xl font-serif text-white mb-6 border-b border-gray-800 pb-4">
                                The Pinnacle of Luxury Companionship in {locationName}
                            </h2>
                            <p className="text-gray-300 font-light leading-loose text-lg mb-6">
                                Welcome to <strong>Kanika home service</strong>, the foremost destination for high-end, exclusive call girl services in {locationName}. When discerning gentlemen and esteemed individuals seek unparalleled elegance, sophistication, and a touch of seductive charm, they turn to our curated selection of elite professionals. Our agency is built on the foundational pillars of uncompromising quality, absolute discretion, and a relentless commitment to providing you with an unforgettable experience tailored to your exact desires.
                            </p>
                            <p className="text-gray-300 font-light leading-loose text-lg mb-8">
                                The {locationName} lifestyle demands a level of class and refinement that only true professionals can provide. Whether you require a stunning escort for a high-profile corporate event, a charming companion for a romantic evening, or a sophisticated partner for private travels, our portfolio features individuals who embody flawless beauty and intellectual depth. They are not simply Escorts; they are captivating conversationalists, adaptable to any social elite environment, ensuring that your presence is always augmented and respected.
                            </p>

                            <div className="bg-[#0a0a0a] border border-brand-burgundy/30 p-8 rounded-xl my-10 shadow-xl relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-burgundy/10 rounded-full blur-3xl"></div>
                                <h3 className="text-2xl font-serif text-white mb-4">Why Choose Our {locationName} Services?</h3>
                                <ul className="space-y-4">
                                    {[
                                        "Flawless Aesthetics: A carefully vetted, stunning roster of high-fashion and elite call girls.",
                                        "Intellectual Charm: Companions who excel in conversation, etiquette, and social grace.",
                                        "Absolute Discretion: Your privacy is our highest priority, protected by strict confidentiality protocols.",
                                        "Punctuality & Professionalism: We respect your time and ensure seamless arrangements.",
                                        "Bespoke Experiences: Tailored encounters designed to match your specific preferences and fantasies."
                                    ].map((item, idx) => (
                                        <li key={idx} className="flex items-start gap-3 text-gray-300 font-light">
                                            <CheckCircle className="text-brand-gold shrink-0 mt-1" size={20} />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <h2 className="text-3xl font-serif text-white mb-6">Our Exclusive Services in {locationName}</h2>
                            <p className="text-gray-300 font-light leading-loose text-lg mb-6">
                                Understanding the dynamic and varied needs of our prestigious clientele in {locationName}, Kanika home service offers a comprehensive suite of premium services. We cater to every conceivable requirement, ensuring your encounters are nothing short of spectacular.
                            </p>

                            <div className="grid sm:grid-cols-2 gap-6 my-8">
                                <div className="bg-gray-900/50 p-6 rounded-lg border border-gray-800">
                                    <h4 className="text-xl font-serif text-brand-gold mb-2">Dinner Dates & Events</h4>
                                    <p className="text-gray-400 text-sm font-light">Commanding attention and elevating your status at social galas or intimate fine-dining experiences across {locationName}'s luxury venues.</p>
                                </div>
                                <div className="bg-gray-900/50 p-6 rounded-lg border border-gray-800">
                                    <h4 className="text-xl font-serif text-brand-gold mb-2">Private Intimate Bookings</h4>
                                    <p className="text-gray-400 text-sm font-light">Discreet and passionate encounters where elegance meets pure desire in the comfort of your private residence or luxury hotel.</p>
                                </div>
                                <div className="bg-gray-900/50 p-6 rounded-lg border border-gray-800">
                                    <h4 className="text-xl font-serif text-brand-gold mb-2">Travel Companionship</h4>
                                    <p className="text-gray-400 text-sm font-light">Exceptional partners for business travels or luxury vacations, ensuring you are never without incredible company.</p>
                                </div>
                                <div className="bg-gray-900/50 p-6 rounded-lg border border-gray-800">
                                    <h4 className="text-xl font-serif text-brand-gold mb-2">Corporate Escorts</h4>
                                    <p className="text-gray-400 text-sm font-light">Articulate and stunning professionals to accompany you to business conventions, ensuring a powerful and confident impression.</p>
                                </div>
                            </div>

                            <p className="text-gray-300 font-light leading-loose text-lg mb-8">
                                We believe that every interaction should be a masterpiece. The call girls we represent in {locationName} are not merely aesthetic wonders; they possess the magnetic charisma required to leave a lasting impression. From the moment you place your booking via our direct line <a href="tel:7303405072" className="text-brand-gold hover:underline">7303405072</a>, our concierge handles every detail meticulously, guaranteeing a flawless experience that transcends the ordinary.
                            </p>

                            <h2 className="text-3xl font-serif text-white mb-6 mt-12">Discretion and Trust: Our Promise</h2>
                            <p className="text-gray-300 font-light leading-loose text-lg mb-8">
                                Operating at the highest echelons of society in {locationName} requires an unwavering commitment to confidentiality. We understand the sensitivities associated with our elite call girl services. Kanika home service employs robust privacy measures, ensuring that your identity, preferences, and booking details remain completely shielded. We are the trusted secret of {locationName}'s most distinguished gentlemen, artists, and executives.
                            </p>

                            {/* FAQs */}
                            <div className="mt-16 pt-10 border-t border-gray-800">
                                <h2 className="text-3xl font-serif text-white mb-8">Frequently Asked Questions</h2>
                                <div className="space-y-6">
                                    <div className="bg-gray-900/40 p-6 rounded-lg">
                                        <h4 className="text-lg font-medium text-brand-gold mb-2">What makes Kanika home service the best in {locationName}?</h4>
                                        <p className="text-gray-400 font-light text-sm">We offer an exclusive, highly curated selection of premium Escorts in {locationName} with a focus on absolute discretion, elegance, and professionalism unparalleled in the region.</p>
                                    </div>
                                    <div className="bg-gray-900/40 p-6 rounded-lg">
                                        <h4 className="text-lg font-medium text-brand-gold mb-2">How can I book a model in {locationName}?</h4>
                                        <p className="text-gray-400 font-light text-sm">You can securely book our services by calling us directly at <a href="tel:7303405072" className="text-white">7303405072</a> or using the secure booking form provided on this page. Our concierge will guide you through the seamless process.</p>
                                    </div>
                                    <div className="bg-gray-900/40 p-6 rounded-lg">
                                        <h4 className="text-lg font-medium text-brand-gold mb-2">Is my privacy guaranteed?</h4>
                                        <p className="text-gray-400 font-light text-sm">Yes, 100% confidentiality is the cornerstone of our services. We maintain strict privacy protocols for all our elite clients, ensuring your peace of mind.</p>
                                    </div>
                                </div>
                            </div>

                        </div>

                        {/* Sidebar */}
                        <div className="lg:w-1/3">
                            <div className="sticky top-28 space-y-8">
                                <LeadCapture />

                                <div className="bg-gray-900/50 border border-gray-800 p-6 rounded-xl">
                                    <h4 className="text-xl font-serif text-white mb-4 border-b border-gray-700 pb-2">Explore Other Areas</h4>
                                    <ul className="space-y-3">
                                        {otherLocations.map(loc => (
                                            <li key={loc}>
                                                <Link to={`/Escorts-in-${loc.toLowerCase().replace(' ', '-')}`} className="text-gray-400 hover:text-brand-gold text-sm flex items-center justify-between group transition-colors">
                                                    <span>Call girl in {loc}</span>
                                                    <span className="text-brand-burgundy transform group-hover:translate-x-1 transition-transform">→</span>
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="bg-[#110505] border border-brand-burgundy/40 p-6 rounded-xl text-center">
                                    <Shield className="text-brand-gold mx-auto w-12 h-12 mb-4 opacity-80" />
                                    <h4 className="text-white font-serif text-xl mb-2">Secure & Verified</h4>
                                    <p className="text-gray-400 text-sm font-light mb-4">All call girl in our {locationName} portfolio are 100% genuine, personally verified, and health-checked.</p>
                                    <a href="mailto:pandeyking133@gmail.com" className="text-brand-gold hover:text-white transition text-sm underline block">
                                        pandeyking133@gmail.com
                                    </a>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <SEOTags locationKey={locationName.toLowerCase().replace(' ', '_')} />
        </>
    );
};

export default LocationPage;
