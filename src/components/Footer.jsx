import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Instagram, Facebook ,Route } from "lucide-react";


const Footer = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");

  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (!email) return;
    setStatus("Submitting...");
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "YOUR_ACCESS_KEY_HERE", // TODO: Replace with your Web3Forms access key
          email: email,
          subject: "New Newsletter Subscription",
        }),
      });
      const result = await response.json();
      if (result.success) {
        setStatus("Subscribed successfully!");
        setEmail("");
      } else {
        setStatus("Failed to subscribe.");
      }
    } catch (error) {
      setStatus("Error occurred.");
    }
    setTimeout(() => setStatus(""), 5000);
  };

  const locations = [
    { name: "Vasundhara", path: "/Escorts-in-vasundhara" },
    { name: "Vaishali", path: "/Escorts-in-vaishali" },
    { name: "Noida", path: "/Escorts-in-noida" },
    { name: "Raj Nagar", path: "/Escorts-in-raj-nagar" },
    { name: "Mohan Nagar", path: "/Escorts-in-mohan-nagar" },
    { name: "Kaushambi", path: "/Escorts-in-kaushambi" },
    { name: "Ghaziabad", path: "/Escorts-in-ghaziabad" },
  ];

  return (
    <footer className="bg-gradient-to-b from-[#0a0a0a] to-[#050505] text-gray-300 pt-16 pb-8 border-t border-brand-burgundy/20">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link
              to="/"
              className="text-3xl font-serif text-brand-gold font-bold tracking-wider inline-block"
            >
              Kanika
              <span className="block text-white text-lg font-sans tracking-[0.2em] font-light mt-1">
                Home Service
              </span>
            </Link>
            <p className="text-sm text-gray-400 mt-4 leading-relaxed">
              Where elegance meets desire. Experience luxury and premium
              professional model services in the heart of Delhi NCR. High-end,
              discreet, and unforgettable.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-serif text-xl mb-4 relative inline-block after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-12 after:h-0.5 after:bg-brand-burgundy">
              Locations
            </h3>
            <ul className="space-y-2">
              {locations.map((loc) => (
                <li key={loc.name}>
                  <Link
                    to={loc.path}
                    className="text-sm hover:text-brand-gold transition duration-300 flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-gold/50"></span>
                    Escorts in {loc.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-serif text-xl mb-4 relative inline-block after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-12 after:h-0.5 after:bg-brand-burgundy">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:7303405072"
                  className="flex items-center gap-3 hover:text-brand-gold transition duration-300"
                >
                  <div className="p-2 bg-brand-black border border-brand-burgundy/50 rounded-full text-brand-gold">
                    <Phone size={16} />
                  </div>
                  <span>+91 7303405072</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:pandeyking133@gmail.com"
                  className="flex items-center gap-3 hover:text-brand-gold transition duration-300"
                >
                  <div className="p-2 bg-brand-black border border-brand-burgundy/50 rounded-full text-brand-gold">
                    <Mail size={16} />
                  </div>
                  <span>Click to mail</span>
                </a>
              </li>
              <li className="flex items-center gap-3">
                <div className="p-2 bg-brand-black border border-brand-burgundy/50 rounded-full text-brand-gold">
                  <MapPin size={16} />
                </div>
                <span>Delhi NCR (Vasundhara, Noida, Ghaziabad)</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="p-2 bg-brand-black border border-brand-burgundy/50 rounded-full text-brand-gold">
                  <Route size={16} />
                </div>
                <Link to={'/sitemap'}>Sitemap</Link>
              </li>
            </ul>
          </div>

          {/* Newsletter / Social */}
          <div>
            <h3 className="text-white font-serif text-xl mb-4 relative inline-block after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-12 after:h-0.5 after:bg-brand-burgundy">
              Stay Connected
            </h3>
            <p className="text-sm mb-4">Subscribe for exclusive updates.</p>
            <form
              onSubmit={handleSubscribe}
              className="flex border border-gray-800 rounded-md overflow-hidden relative"
            >
              <input
                type="email"
                placeholder="Email Address"
                className="bg-transparent px-4 py-2 w-full focus:outline-none text-sm"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button
                type="submit"
                className="bg-brand-burgundy text-white px-4 py-2 text-sm hover:bg-red-900 transition"
              >
                Join
              </button>
            </form>
            {status && <p className="text-brand-gold text-xs mt-2">{status}</p>}
            <div className="flex gap-4 mt-6">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-900 border border-gray-800 flex items-center justify-center hover:bg-brand-burgundy hover:text-white hover:border-brand-burgundy transition-all duration-300"
              >
                <Instagram size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-900 border border-gray-800 flex items-center justify-center hover:bg-brand-burgundy hover:text-white hover:border-brand-burgundy transition-all duration-300"
              >
                <Facebook size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 mt-6 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>
            &copy; {new Date().getFullYear()} Kanika Home Service. All Rights
            Reserved.
          </p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link to="/privacy-policy" className="hover:text-brand-gold">
              Privacy Policy
            </Link>
            <Link to="/terms-conditions" className="hover:text-brand-gold">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
