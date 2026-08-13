"use client";

import React, { useState, useEffect } from "react";
import { MessageSquare, Phone, MapPin, Mail, ShieldAlert, X, FileText } from "lucide-react";

type PolicyType = "shipping" | "refund" | "privacy" | "terms" | "track";

export default function Footer() {
  const [activePolicy, setActivePolicy] = useState<PolicyType | null>(null);

  useEffect(() => {
    const handleOpenTrack = () => {
      setActivePolicy("track");
    };
    window.addEventListener("open-policy-track", handleOpenTrack);
    return () => window.removeEventListener("open-policy-track", handleOpenTrack);
  }, []);

  const policyContent: Record<PolicyType, { title: string; content: React.ReactNode }> = {
    shipping: {
      title: "Shipping & Delivery Policy",
      content: (
        <div className="space-y-4 text-sm text-gray-700 leading-relaxed font-light">
          <p>All sacred kits are hand-compiled and ritually purified under priest supervision at our ashram near Dashashwamedh Ghat in Varanasi.</p>
          <div className="bg-[#FFF9F0] border border-[#D4AF37]/20 p-3 rounded-lg">
            <span className="font-semibold text-[#7B241C]">Free PAN-India Shipping:</span> We offer 100% free home delivery across India. There are no hidden packaging or shipping charges.
          </div>
          <p><strong>Dispatch Timeline:</strong> Consignments are packed and handed over to our shipping partners (BlueDart, Delhivery, Expressbees) within 24 hours of order validation.</p>
          <p><strong>Transit Duration:</strong> Metro cities receive kits in 2–4 business days. Rest of India receives delivery in 4–6 business days.</p>
          <p><strong>Tracking Information:</strong> Once your consignment is dispatched, a real-time tracking link from the courier is sent to your registered mobile number via SMS and WhatsApp.</p>
        </div>
      )
    },
    refund: {
      title: "Refund & Exchange Policy",
      content: (
        <div className="space-y-4 text-sm text-gray-700 leading-relaxed font-light">
          <p>At Kashi Prasad, we uphold the highest standards of ritual purity and quality. If your sacred order does not meet your spiritual expectations, we are committed to making it right.</p>
          <div className="bg-[#FFF9F0] border border-[#D4AF37]/20 p-3 rounded-lg">
            <span className="font-semibold text-[#7B241C]">7-Day Purity Guarantee:</span> If any ritual item is damaged in transit, or if you feel the materials lack the promised authenticity, contact us within 7 days of delivery for a 100% full refund or free replacement.
          </div>
          <p><strong>Perishable Item Policy:</strong> To prevent shipping spoilage, we strictly exclude betrayal leaves, mango leaves, fresh coconuts, flowers, curds, or milk. Since our kits are compiled of 100% non-perishable samagri, returns are simple and hygienic.</p>
          <p><strong>How to Initiate:</strong> Send your Order ID and photos of any damaged contents to our email <strong>devotion@kashipujakit.com</strong> or message our support team on WhatsApp at <strong>+91 99999 99999</strong>.</p>
          <p><strong>Refund Timeframe:</strong> Approved refunds are credited directly to your bank account or original payment method within 3–5 working days.</p>
        </div>
      )
    },
    privacy: {
      title: "Privacy Policy",
      content: (
        <div className="space-y-4 text-sm text-gray-700 leading-relaxed font-light">
          <p>Your privacy is sacred to us. We are committed to protecting your personal coordinates and ensuring your transactional data is secure.</p>
          <p><strong>Information Collection:</strong> We collect only the essential details required to deliver your kits (Name, Phone Number, Shipping Address, Pincode).</p>
          <p><strong>Usage:</strong> Your contact information is shared exclusively with our logistics handlers to execute delivery and send real-time tracking updates. We strictly do not sell, rent, or trade your data to third-party databases.</p>
          <p><strong>Security:</strong> All online payments are handled via secure, industry-leading encrypted payment gateways. Cash on Delivery (COD) information is stored securely in our private database and removed after delivery fulfillment.</p>
        </div>
      )
    },
    terms: {
      title: "Terms of Service",
      content: (
        <div className="space-y-4 text-sm text-gray-700 leading-relaxed font-light">
          <p>Welcome to Kashi Prasad. By purchasing our altar kits, you agree to comply with our operating guidelines:</p>
          <p><strong>Devotional Authenticity:</strong> Our items (including Nepal Rudrakshas, Chandan, Gangajal, and Prasad offerings) are sourced directly from authorized temple pujaris and holy locations. They are prepared for ritual, meditation, and spiritual use only.</p>
          <p><strong>Pricing:</strong> All catalog prices are inclusive of GST. The amount displayed during checkout represents the final price to pay on delivery.</p>
          <p><strong>Fulfillment Limits:</strong> To preserve the sanctity and quality of assembly, kits are compiled in daily batches. If batched capacity is reached, orders may be queued for dispatch the following morning.</p>
        </div>
      )
    },
    track: {
      title: "Track Your Order",
      content: (
        <div className="space-y-4 text-sm text-gray-700 leading-relaxed font-light">
          <p>All packages are prepared in Varanasi and tracked in real-time. To track your sacred consignment:</p>
          <div className="bg-[#FFF9F0] border border-[#D4AF37]/20 p-4 rounded-xl space-y-2">
            <span className="font-semibold text-[#7B241C] block text-xs uppercase tracking-wider">Fastest Way to Track</span>
            <p className="text-xs">Simply drop a text on WhatsApp with your name or Order ID (e.g., KDPK-123456) and our representative will instantly send your live courier tracking link.</p>
            <a
              href="https://wa.me/919999999999?text=Hi!%20I%20want%20to%20track%20my%20puja%20kit%20order."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 bg-[#E67E22] text-white px-3 py-1.5 rounded-lg text-xs font-bold shadow-xs hover:bg-[#7B241C] transition-colors mt-2"
            >
              Track on WhatsApp
            </a>
          </div>
          <p className="text-xs text-gray-500">Alternatively, you can click the tracking link received in the dispatch SMS/Email sent to your coordinates.</p>
        </div>
      )
    }
  };

  return (
    <>
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
            <ul className="space-y-2.5 text-xs text-[#FFF9F0]/75">
              <li>
                <a href="#product-catalog" className="hover:text-white transition-colors">
                  Explore Collections
                </a>
              </li>
              <li>
                <button
                  onClick={() => setActivePolicy("track")}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Track Sacred Order
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActivePolicy("shipping")}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Shipping & Delivery Policy
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActivePolicy("refund")}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Refund & Return Policy
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActivePolicy("privacy")}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActivePolicy("terms")}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Terms of Service
                </button>
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

      {/* Policy Modal Overlay */}
      {activePolicy && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-hidden">
          <div
            onClick={() => setActivePolicy(null)}
            className="absolute inset-0 bg-black/60 backdrop-blur-xs"
          />
          <div className="relative z-10 w-full max-w-lg bg-[#FFF9F0] border-2 border-[#D4AF37]/50 rounded-2xl p-6 shadow-2xl flex flex-col max-h-[85vh] overflow-y-auto">
            <div className="flex items-center justify-between border-b border-[#7B241C]/15 pb-4 mb-4">
              <h3 className="font-serif text-lg md:text-xl font-bold text-[#7B241C] flex items-center gap-2">
                <FileText className="h-5 w-5 text-[#E67E22]" />
                {policyContent[activePolicy].title}
              </h3>
              <button
                onClick={() => setActivePolicy(null)}
                className="p-1 rounded-full hover:bg-gray-100 text-[#7B241C] transition-colors"
                aria-label="Close policy"
              >
                <X className="h-5.5 w-5.5" />
              </button>
            </div>
            
            <div className="flex-1 overflow-y-auto">
              {policyContent[activePolicy].content}
            </div>

            <div className="border-t border-[#7B241C]/10 pt-4 mt-4 flex justify-end">
              <button
                onClick={() => setActivePolicy(null)}
                className="px-5 py-2 bg-[#7B241C] hover:bg-[#E67E22] text-[#FFF9F0] font-serif text-xs font-bold tracking-wider rounded-lg transition-colors cursor-pointer"
              >
                CLOSE DOCUMENT
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
