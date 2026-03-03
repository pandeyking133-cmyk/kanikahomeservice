import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';

const FloatingButtons = () => {
    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
            {/* WhatsApp Button */}
            <a
                href="https://wa.me/917303405072?text=Hello%20Kanika%20Home%20Service,%20I%20am%20interested%20in%20your%20services."
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 bg-green-500 text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 hover:shadow-green-500/50 transition-all duration-300"
                aria-label="Chat on WhatsApp"
            >
                <MessageCircle size={28} />

                {/* Pulse effect */}
                <span className="absolute w-full h-full rounded-full bg-green-500 opacity-50 animate-ping -z-10"></span>
            </a>

            {/* Call Button */}
            <a
                href="tel:7303405072"
                className="w-14 h-14 bg-brand-burgundy text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 hover:shadow-brand-burgundy/50 transition-all duration-300 md:hidden"
                aria-label="Call Now"
            >
                <Phone size={24} />
            </a>
        </div>
    );
};

export default FloatingButtons;
