import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Instagram, Twitter } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-zinc-950 text-zinc-400 border-t border-zinc-900 pt-16 pb-8">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-6">
            <Link href="/" className="inline-block">
              <div className="relative w-48 h-20">
                <Image 
                  src="/logo.png" 
                  alt="Lakewood Garage Door Repair Experts" 
                  fill
                  className="object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
            </Link>
            <p className="text-sm leading-relaxed">
              Your trusted local experts for all garage door repair, installation, and maintenance needs in Lakewood and surrounding areas. Fast, reliable, and affordable service.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center hover:bg-orange-500 hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center hover:bg-orange-500 hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center hover:bg-orange-500 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Quick Links</h4>
            <ul className="space-y-4">
              <li><Link href="/" className="hover:text-orange-500 transition-colors">Home</Link></li>
              <li><Link href="#about" className="hover:text-orange-500 transition-colors">About Us</Link></li>
              <li><Link href="#services" className="hover:text-orange-500 transition-colors">Our Services</Link></li>
              <li><Link href="#testimonials" className="hover:text-orange-500 transition-colors">Customer Reviews</Link></li>
              <li><Link href="#contact" className="hover:text-orange-500 transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Our Services</h4>
            <ul className="space-y-4">
              <li><Link href="#spring-repair" className="hover:text-orange-500 transition-colors">Broken Spring Repair</Link></li>
              <li><Link href="#opener-repair" className="hover:text-orange-500 transition-colors">Opener Repair & Installation</Link></li>
              <li><Link href="#new-doors" className="hover:text-orange-500 transition-colors">New Garage Doors</Link></li>
              <li><Link href="#cable-repair" className="hover:text-orange-500 transition-colors">Cable Replacement</Link></li>
              <li><Link href="#emergency" className="hover:text-orange-500 transition-colors">24/7 Emergency Service</Link></li>
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Service Areas</h4>
            <ul className="space-y-4">
              <li>Lakewood, CO</li>
              <li>Denver, CO</li>
              <li>Golden, CO</li>
              <li>Wheat Ridge, CO</li>
              <li>Arvada, CO</li>
              <li>Edgewater, CO</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-zinc-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <p>&copy; {currentYear} Lakewood Garage Door Repair Experts. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
