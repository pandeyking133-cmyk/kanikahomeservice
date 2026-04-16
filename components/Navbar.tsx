"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, Phone } from 'lucide-react';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About Us', path: '/about' },
        { name: 'Noida', path: '/dancers-in-noida' },
        { name: 'Ghaziabad', path: '/dancers-in-ghaziabad' },
        { name: 'Vasundhara', path: '/dancers-in-vasundhara' },
        { name: 'Blog', path: '/blog' }
    ];

    return (
        <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-brand-black/95 backdrop-blur-md shadow-lg py-2' : 'bg-transparent py-3'}`}>
            <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
                <Link href="/" className="text-2xl md:text-3xl font-serif text-brand-gold font-bold tracking-wider relative block z-50">
                    <div className="relative h-24 w-48">
                        <Image 
                            src='/logo.png' 
                            alt='Kanika Home Service' 
                            fill 
                            className='object-contain'
                            priority
                        />
                    </div>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center space-x-8">
                    {navLinks.map((link) => (
                        <Link key={link.name} href={link.path} className="text-gray-300 hover:text-brand-gold transition duration-300 text-sm tracking-wide uppercase font-medium">
                            {link.name}
                        </Link>
                    ))}
                    <a href="tel:7303405072" className="flex items-center gap-2 bg-brand-burgundy hover:bg-red-900 text-white px-5 py-2 rounded-full transition duration-300 shadow-md">
                        <Phone size={16} />
                        <span className="font-semibold text-sm tracking-wide">7303405072</span>
                    </a>
                </nav>

                {/* Mobile Toggle */}
                <button className="md:hidden text-brand-gold z-50 relative" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                    {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Nav */}
            {mobileMenuOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-brand-black bg-opacity-95 backdrop-blur-md py-5 px-4 shadow-xl border-t border-brand-burgundy/30">
                    <div className="flex flex-col space-y-4">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.path}
                                onClick={() => setMobileMenuOpen(false)}
                                className="text-gray-300 hover:text-brand-gold text-lg border-b border-gray-800 pb-2 transition duration-300"
                            >
                                {link.name}
                            </Link>
                        ))}
                        <a href="tel:7303405072" className="flex items-center justify-center gap-2 bg-brand-burgundy hover:bg-red-900 text-white px-5 py-3 rounded-md mt-4 transition duration-300">
                            <Phone size={18} />
                            <span className="font-semibold text-lg">Call: 7303405072</span>
                        </a>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Navbar;
