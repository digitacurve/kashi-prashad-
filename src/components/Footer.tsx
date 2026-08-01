"use client";

import React from "react";
import { MessageSquare, Phone, MapPin, Mail, ShieldAlert } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#7B241C] text-[#FFF9F0] pt-16 pb-8 border-t border-[#D4AF37]/35 relative overflow-hidden">
      {/* Background radial gold glow */}
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#D4AF37]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 relative z-10 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 pb-12 border-b border-white/10">
        
        {/* Brand Column */}
        <div className="md:col-span-5 space-y-4">
          <h4 className="font-serif text-2xl font-bold tracking-wider text-[#D4AF37]">
            Kashi Divine Puja Kit
          </h4>
          <p className="text-xs text-[#FFF9F0]/80 leading-relaxed max-w-sm">
            Bringing the authentic, spiritual energies and sacred blessings of Varanasi and Lord Shiva directly to the altars of families across India. Handcrafted and energized with Vedic devotion.
          </p>
          <div className="flex gap-4 pt-2">
            <a
              href="https://wa.me/919999999999?text=I%20have%20a%20question%20about%20the%20Kashi%20Puja%20Kit"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs font-semibold text-[#D4AF37] hover:text-[#FFF9F0] transition-colors"
            >
              <MessageSquare className="h-4 w-4" />
              WhatsApp Support
            </a>
            <a
              href="tel:+919999999999"
              className="flex items-center gap-1.5 text-xs font-semibold text-[#D4AF37] hover:text-[#FFF9F0] transition-colors"
            >
              <Phone className="h-4 w-4" />
              Call Support
            </a>
          </div>
        </div>

        {/* Links Column */}
        <div className="md:col-span-3 space-y-4">
          <h5 className="font-serif text-sm font-bold tracking-wider text-[#D4AF37] uppercase">
            Legal & Support
          </h5>
          <ul className="space-y-2 text-xs text-[#FFF9F0]/75">
            <li>
              <a href="#whats-inside" className="hover:text-white transition-colors">
                What's Inside
              </a>
            </li>
            <li>
              <a href="#faq" className="hover:text-white transition-colors">
                Frequently Asked Questions
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Shipping & Delivery Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Refund & Return Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Terms of Service
              </a>
            </li>
          </ul>
        </div>

        {/* Contact info Column */}
        <div className="md:col-span-4 space-y-4">
          <h5 className="font-serif text-sm font-bold tracking-wider text-[#D4AF37] uppercase">
            Ashram Office
          </h5>
          <ul className="space-y-3 text-xs text-[#FFF9F0]/80">
            <li className="flex items-start gap-2.5">
              <MapPin className="h-4.5 w-4.5 text-[#D4AF37] shrink-0 mt-0.5" />
              <span>
                Kashi Divine Puja Inc., Ghat Road, Near Dashashwamedh Altar, Varanasi, Uttar Pradesh, 221001, India
              </span>
            </li>
            <li className="flex items-center gap-2.5">
              <Mail className="h-4.5 w-4.5 text-[#D4AF37]" />
              <span>blessings@kashipujakit.com</span>
            </li>
            <li className="flex items-center gap-2.5">
              <Phone className="h-4.5 w-4.5 text-[#D4AF37]" />
              <span>+91 99999 99999 (9:00 AM - 6:00 PM IST)</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Trust seal & Copyright */}
      <div className="max-w-6xl mx-auto px-4 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center">
        <p className="text-[10px] text-[#FFF9F0]/60">
          © {new Date().getFullYear()} Kashi Divine Puja Kit. All spiritual rights reserved. Sourced and packaged in Varanasi, India.
        </p>
        <div className="flex items-center gap-2 text-[10px] text-[#D4AF37] bg-white/5 border border-white/10 px-3 py-1 rounded-full">
          <ShieldAlert className="h-3.5 w-3.5" />
          <span>100% Sanctified & Sourced from Authorized Temple Pujaris</span>
        </div>
      </div>
    </footer>
  );
}
