import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { Phone, Star, Shield, Clock } from 'lucide-react';
import LeadCapture from "@/components/LeadCapture";

export const metadata: Metadata = {
  title: "Kanika home service | Where Elegance Meets Desire",
  description: "Premium Professional Call girls Available Across Vasundhara, Vaishali, Noida & Ghaziabad Region. Book exclusive presence today.",
};

export default function Home() {
  const locations = [
    { name: 'Vasundhara', path: '/dancers-in-vasundhara', image: '/images/girl4.jpeg' },
    { name: 'Vaishali', path: '/dancers-in-vaishali', image: '/images/girl1.jpeg' },
    { name: 'Noida', path: '/dancers-in-noida', image: '/images/girl2.jpeg' },
    { name: 'Raj Nagar', path: '/dancers-in-raj-nagar', image: '/images/girl5.jpeg' },
    { name: 'Mohan Nagar', path: '/dancers-in-mohan-nagar', image: '/images/girl6.jpeg' },
    { name: 'Kaushambi', path: '/dancers-in-kaushambi', image: '/images/girl7.jpeg' },
    { name: 'Ghaziabad', path: '/dancers-in-ghaziabad', image: '/images/girl8.jpeg' },
  ];

  return (
    <div className="relative min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        {/* Cinematic Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-brand-black/40 z-10 mix-blend-multiply"></div>
          {/* Subtle light overlay for text contrast as requested in previous turns */}
          <div className="absolute inset-0 bg-black/10 z-20"></div>
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover object-center"
          >
            <source src="/videos/hero.mp4" type="video/mp4" />
          </video>
        </div>

        <div className="container mx-auto px-4 md:px-8 z-30 grid lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-2xl opacity-0 animate-fade-in-up">
            <div className="inline-block px-4 py-1 border border-brand-gold/40 rounded-full mb-6 backdrop-blur-sm">
              <span className="text-brand-gold text-sm tracking-widest uppercase flex items-center gap-2">
                <Star size={14} className="fill-brand-gold" /> Exclusive Top Tier Escorts
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 leading-tight drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
              Where Elegance <br />
              <span className="text-brand-gold italic font-light">Meets Desire.</span>
            </h1>

            <p className="text-xl text-white mb-10 max-w-lg leading-relaxed font-medium drop-shadow-[0_1px_5px_rgba(0,0,0,1)]">
              Premium Professional Call girls Available Across Vasundhara, Vaishali, Noida & Ghaziabad Region.
            </p>

            <div className="flex flex-col sm:flex-row gap-5">
              <a href="tel:7303405072" className="bg-brand-burgundy hover:bg-red-900 text-white px-8 py-4 rounded-md font-semibold tracking-wider uppercase transition-all duration-300 flex items-center justify-center gap-3 shadow-[0_0_20px_rgba(90,0,26,0.6)] hover:shadow-[0_0_30px_rgba(90,0,26,0.8)]">
                <Phone size={20} />
                Call Now – 7303405072
              </a>
              <a href="#booking" className="border border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-brand-black px-8 py-4 rounded-md font-semibold tracking-wider uppercase transition-all duration-300 flex items-center justify-center text-center">
                Book Exclusive Presence
              </a>
            </div>
          </div>

          <div className="hidden lg:flex justify-end opacity-0 animate-fade-in-up animation-delay-600" id="booking">
            <LeadCapture />
          </div>
        </div>
      </section>

      {/* Locations Section */}
      <section className="py-24 bg-gradient-to-b from-brand-black to-[#050505]">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-serif text-white mb-4 opacity-0 animate-fade-in-up">
              Our Exclusive <span className="text-brand-gold italic">Locations</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto opacity-0 animate-fade-in-up animation-delay-300">
              Serving the most prestigious clients across premium districts in Delhi NCR. Select your preferred area to view availability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {locations.map((loc, idx) => (
              <div
                key={loc.name}
                className={`relative group overflow-hidden rounded-xl aspect-[4/3] ${idx === 0 ? 'lg:col-span-2 lg:aspect-auto' : ''} opacity-0 animate-fade-in-up`}
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <Link href={loc.path} className="block w-full h-full">
                  <div className="absolute inset-0 bg-brand-black/40 group-hover:bg-brand-black/20 transition-all duration-500 z-10"></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/40 to-transparent z-20"></div>

                  <Image
                    src={loc.image}
                    alt={`Best call girls in ${loc.name}`}
                    fill
                    className="object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
                  />

                  <div className="absolute bottom-0 left-0 w-full p-8 z-30 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-2xl font-serif text-white mb-2 tracking-wide font-bold drop-shadow-lg">
                      Elite Call girls in <span className="text-brand-gold">{loc.name}</span>
                    </h3>
                    <div className="w-12 h-0.5 bg-brand-burgundy mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100"></div>
                    <span className="text-sm text-gray-300 uppercase tracking-widest flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200">
                      View Profiles <span className="text-brand-gold">→</span>
                    </span>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-brand-black relative">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-serif text-white mb-6">
              The Epitome of <span className="text-brand-gold italic">Luxury</span>
            </h2>
            <div className="w-24 h-1 bg-brand-burgundy mx-auto mb-8"></div>
            <p className="text-gray-400 text-lg md:text-xl leading-relaxed font-light">
              Kanika home service represents the pinnacle of high-end companionship and professional 
              <span className="block text-brand-gold font-medium mt-2 text-2xl md:text-3xl">escort services across the Delhi NCR</span>
              region. We curate an exclusive portfolio of stunning, intellectual, and captivating individuals designed to elevate your experiences, events, and private space. Uncompromising discretion and unparalleled elegance define our every interaction.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-20">
            {[
              { icon: <Star className="text-brand-gold w-10 h-10 mb-4" />, title: "Premium Selection", desc: "A curated roster of the most exquisite call girls." },
              { icon: <Shield className="text-brand-gold w-10 h-10 mb-4" />, title: "Absolute Discretion", desc: "100% confidential and private arrangements." },
              { icon: <Clock className="text-brand-gold w-10 h-10 mb-4" />, title: "24/7 Availability", desc: "Ready to fulfill your elite requirements anytime." }
            ].map((feature, idx) => (
              <div
                key={idx}
                className="bg-[#0f0f0f] border border-gray-800 p-8 rounded-lg text-center hover:border-brand-burgundy/50 transition duration-300"
              >
                <div className="flex justify-center">{feature.icon}</div>
                <h3 className="text-xl font-serif text-white mb-3">{feature.title}</h3>
                <p className="text-gray-500 font-light">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Raj Nagar Promotional Video */}
      <section className="py-24 bg-brand-black relative border-t border-gray-800">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <div className="mb-12">
            <h2 className="text-3xl md:text-5xl font-serif text-brand-gold mb-4 leading-tight">
              Call girls in Raj Nagar <br />
              <span className="text-white">₹5999 COD Payment Free Home Delivery</span>
            </h2>
            <div className="w-24 h-1 bg-brand-burgundy mx-auto mt-6"></div>
          </div>

          <div className="max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-[0_0_30px_rgba(90,0,26,0.3)] border border-brand-burgundy/40 relative">
            <video
              className="w-full aspect-video object-cover"
              autoPlay
              loop
              muted
              controls
              playsInline
            >
              <source src="/videos/video2.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>

      {/* Pricing Tables */}
      <section className="py-20 bg-[#050505] border-t border-gray-800">
        <div className="container mx-auto px-4 md:px-8 max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif text-brand-gold mb-4">Exclusive Rates & <span className="text-white italic">Categories</span></h2>
            <div className="w-16 h-1 bg-brand-burgundy mx-auto mt-4"></div>
            <p className="text-gray-400 mt-6 max-w-2xl mx-auto font-light">
              Transparent luxury pricing for our elite clientele. All bookings are strictly 100% confidential.
            </p>
          </div>

          <div className="space-y-16">
            {/* Premium Indian Call Girls */}
            <div className="opacity-0 animate-fade-in-up">
              <h3 className="text-2xl font-serif text-white mb-6 flex items-center gap-3">
                <Star className="text-brand-gold" size={20} /> Premium Indian Call Girls
              </h3>
              <div className="overflow-x-auto rounded-lg border border-gray-800 shadow-2xl">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-gray-900 border-b border-gray-800 text-brand-gold uppercase text-sm tracking-wider">
                      <th className="p-4 font-semibold">Category</th>
                      <th className="p-4 font-semibold">Price (1 Hr)</th>
                      <th className="p-4 font-semibold">Contact</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-800 whitespace-nowrap">
                    {[
                      { cat: "High-Profile Call Girl", price: "₹5,000", contact: "7303405072" },
                      { cat: "Premium Escort", price: "₹7,000", contact: "7303405072" },
                      { cat: "Elite VIP Companion", price: "₹10,000", contact: "7303405072" },
                    ].map((row, i) => (
                      <tr key={i} className="bg-brand-black hover:bg-[#0a0505] transition-colors">
                        <td className="p-4 text-gray-300">{row.cat}</td>
                        <td className="p-4 text-white font-medium">{row.price}</td>
                        <td className="p-4 text-brand-gold">{row.contact}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Russian Models */}
            <div className="opacity-0 animate-fade-in-up animation-delay-300">
              <h3 className="text-2xl font-serif text-white mb-6 flex items-center gap-3">
                <Star className="text-brand-gold" size={20} /> Exclusive Russian Call Girl
              </h3>
              <div className="overflow-x-auto rounded-lg border border-brand-burgundy/40 shadow-[0_0_20px_rgba(90,0,26,0.15)]">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-gradient-to-r from-gray-900 to-[#1a0008] border-b border-brand-burgundy/40 text-brand-gold uppercase text-sm tracking-wider">
                      <th className="p-4 font-semibold">Requirement</th>
                      <th className="p-4 font-semibold">Rate (Start)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-800 whitespace-nowrap">
                    {[
                      { req: "One Shot (2 Hrs)", rate: "₹5,000" },
                      { req: "Two Shot (3 Hrs)", rate: "₹8,000" },
                      { req: "Full Night", rate: "On Request" },
                    ].map((row, i) => (
                      <tr key={i} className="bg-brand-black hover:bg-[#0a0505] transition-colors">
                        <td className="p-4 text-gray-300">{row.req}</td>
                        <td className="p-4 text-white font-medium">{row.rate}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* College Models */}
            <div className="opacity-0 animate-fade-in-up animation-delay-600">
              <h3 className="text-2xl font-serif text-white mb-6 flex items-center gap-3">
                <Star className="text-brand-gold" size={20} /> Young College Call Girls
              </h3>
              <div className="overflow-x-auto rounded-lg border border-gray-800 shadow-2xl">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-gray-900 border-b border-gray-800 text-brand-gold uppercase text-sm tracking-wider">
                      <th className="p-4 font-semibold">Profile</th>
                      <th className="p-4 font-semibold">1-2 Hrs</th>
                      <th className="p-4 font-semibold">Overnight</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-800 whitespace-nowrap">
                    {[
                      { desc: "Fresh Faces", price: "₹5,000", night: "₹12,000" },
                      { desc: "Experienced Call girl", price: "₹7,000", night: "₹14,000" },
                    ].map((row, i) => (
                      <tr key={i} className="bg-brand-black hover:bg-[#0a0505] transition-colors">
                        <td className="p-4 text-gray-300">{row.desc}</td>
                        <td className="p-4 text-white font-medium">{row.price}</td>
                        <td className="p-4 text-white font-medium">{row.night}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 relative overflow-hidden border-t border-brand-burgundy/20">
        <div className="absolute inset-0 bg-brand-black z-0"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-burgundy/5 rounded-full blur-[100px] z-0 pointer-events-none"></div>

        <div className="container mx-auto px-4 md:px-8 relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-serif text-white mb-8">Ready to <span className="text-brand-gold italic">Experience</span> Kanika home service?</h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-10 text-lg">
            Contact us directly for arrangements and personalized recommendations. Our service is available to assist you 24/7.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-5">
            <a href="tel:7303405072" className="bg-brand-gold text-brand-black hover:bg-white px-8 py-4 rounded-md font-semibold tracking-wider uppercase transition-all duration-300">
              Call Direct
            </a>
            <a href="https://wa.me/917303405072" className="border border-brand-gold bg-brand-black text-brand-gold hover:bg-brand-gold hover:text-brand-black px-8 py-4 rounded-md font-semibold tracking-wider uppercase transition-all duration-300">
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
