"use client";

import { Phone, Clock, Mail, Menu, X } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import * as motion from 'motion/react-client';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-zinc-900 text-white shadow-md">
      {/* Top Bar */}
      <div className="hidden md:flex justify-between items-center px-6 py-2 bg-zinc-950 text-sm text-zinc-300">
        <div className="flex items-center space-x-6">
          <span className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-orange-500" />
            24/7 Emergency Service Available
          </span>
          <span className="flex items-center gap-2">
            <Mail className="w-4 h-4 text-orange-500" />
            service@lakewoodgaragedoors.com
          </span>
        </div>
        <div className="flex items-center gap-2 font-semibold">
          <span className="text-orange-500">Serving Lakewood & Surrounding Areas</span>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="relative flex items-center justify-center w-12 h-12 bg-zinc-800 border-2 border-orange-500 rounded-lg transform group-hover:scale-105 transition-transform">
            <div className="absolute inset-0 bg-orange-500/20 rounded-lg"></div>
            <div className="w-6 h-1 bg-orange-500 absolute top-3"></div>
            <div className="w-6 h-1 bg-orange-500 absolute top-5"></div>
            <div className="w-6 h-1 bg-orange-500 absolute top-7"></div>
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-black tracking-tight leading-none uppercase">Lakewood</span>
            <span className="text-sm font-bold text-orange-500 tracking-wider uppercase">Garage Door Repair</span>
            <span className="text-[10px] font-semibold text-zinc-400 tracking-widest uppercase">Experts</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8 font-medium">
          <Link href="#services" className="hover:text-orange-500 transition-colors">Services</Link>
          <Link href="#about" className="hover:text-orange-500 transition-colors">About Us</Link>
          <Link href="#testimonials" className="hover:text-orange-500 transition-colors">Reviews</Link>
          <Link href="#contact" className="hover:text-orange-500 transition-colors">Contact</Link>
        </nav>

        {/* CTA Button */}
        <div className="hidden md:flex items-center gap-4">
          <a href="tel:5627844156" className="flex items-center gap-2 text-lg font-bold hover:text-orange-500 transition-colors">
            <Phone className="w-5 h-5 text-orange-500" />
            (562) 784-4156
          </a>
          <Link href="#contact" className="bg-orange-600 hover:bg-orange-500 text-white px-6 py-2.5 rounded-md font-bold transition-colors shadow-lg shadow-orange-600/20">
            Get a Quote
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden p-2 text-zinc-300 hover:text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-full left-0 w-full bg-zinc-900 border-t border-zinc-800 py-4 px-6 flex flex-col space-y-4 shadow-xl"
        >
          <Link href="#services" className="text-lg font-medium hover:text-orange-500" onClick={() => setIsMenuOpen(false)}>Services</Link>
          <Link href="#about" className="text-lg font-medium hover:text-orange-500" onClick={() => setIsMenuOpen(false)}>About Us</Link>
          <Link href="#testimonials" className="text-lg font-medium hover:text-orange-500" onClick={() => setIsMenuOpen(false)}>Reviews</Link>
          <Link href="#contact" className="text-lg font-medium hover:text-orange-500" onClick={() => setIsMenuOpen(false)}>Contact</Link>
          <div className="pt-4 border-t border-zinc-800 flex flex-col gap-4">
            <a href="tel:5627844156" className="flex items-center gap-2 text-xl font-bold text-orange-500">
              <Phone className="w-6 h-6" />
              (562) 784-4156
            </a>
            <Link href="#contact" className="bg-orange-600 text-center text-white px-6 py-3 rounded-md font-bold" onClick={() => setIsMenuOpen(false)}>
              Get a Free Quote
            </Link>
          </div>
        </motion.div>
      )}
    </header>
  );
}
