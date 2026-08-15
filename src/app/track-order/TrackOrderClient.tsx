"use client";

import React, { useState } from "react";
import { Search, PhoneCall, Truck, ShieldCheck, MapPin, CheckCircle, Package } from "lucide-react";

export default function TrackOrderClient() {
  const [orderId, setOrderId] = useState("");
  const [phone, setPhone] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [trackingInfo, setTrackingInfo] = useState<{
    status: string;
    carrier: string;
    trackingNumber: string;
    timeline: { title: string; desc: string; date: string; completed: boolean }[];
  } | null>(null);

  const handleTrackSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};

    if (!orderId.trim()) {
      newErrors.orderId = "Order ID is mandatory";
    } else if (!orderId.toUpperCase().startsWith("KDPK-")) {
      newErrors.orderId = "Order ID must start with KDPK- (e.g., KDPK-271828)";
    }

    if (!phone.trim()) {
      newErrors.phone = "Mobile Number is mandatory";
    } else if (!/^[6-9]\d{9}$/.test(phone)) {
      newErrors.phone = "Enter a valid 10-digit Mobile Number";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      // Simulate database match
      setTrackingInfo({
        status: "In Transit",
        carrier: "BlueDart Express",
        trackingNumber: "BD928371928IN",
        timeline: [
          {
            title: "Order Placed & Confirmed",
            desc: "Puja Kit details validated and queued at Varanasi Ashram.",
            date: "Varanasi Altar",
            completed: true,
          },
          {
            title: "Purified & Compiled",
            desc: "Sacred materials handpicked and energized by Vedic Priests.",
            date: "Dashashwamedh Ghat",
            completed: true,
          },
          {
            title: "Dispatched",
            desc: "Handed over to BlueDart Express at Varanasi Hub.",
            date: "Varanasi Hub",
            completed: true,
          },
          {
            title: "In Transit",
            desc: "Package is on its way to your destination city.",
            date: "Transit Hub",
            completed: true,
          },
          {
            title: "Out for Delivery",
            desc: "BlueDart delivery executive is out for delivery.",
            date: "Local Delivery Center",
            completed: false,
          },
        ],
      });
    }
  };

  return (
    <div className="max-w-xl w-full mx-auto px-4">
      <div className="bg-white rounded-3xl border border-[#D4AF37]/25 shadow-xl p-6 md:p-8 space-y-6">
        
        {/* Header */}
        <div className="text-center space-y-2">
          <div className="inline-flex items-center justify-center w-12 h-12 bg-[#FFF9F0] border border-[#D4AF37]/35 rounded-full text-[#7B241C] mb-2">
            <Truck className="h-6 w-6" />
          </div>
          <h1 className="font-serif text-2xl font-bold text-[#7B241C] tracking-wide">
            Track Your Sacred Consignment
          </h1>
          <p className="text-xs text-gray-500 font-light max-w-sm mx-auto">
            Varanasi dispatch packages are tracked in real-time. Enter your details below to query dispatch status.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleTrackSubmit} className="space-y-4">
          <div className="space-y-1.5">
            <label className="text-[10px] uppercase font-bold tracking-wider text-gray-500 block">
              Order ID
            </label>
            <input
              type="text"
              placeholder="e.g. KDPK-123456"
              value={orderId}
              onChange={(e) => setOrderId(e.target.value)}
              className={`w-full px-3.5 py-2.5 bg-gray-50 border rounded-xl outline-none text-xs focus:bg-white transition-colors ${
                errors.orderId ? "border-red-500 focus:border-red-500" : "border-gray-200 focus:border-gray-400"
              }`}
            />
            {errors.orderId && (
              <span className="text-[10px] text-red-500 font-medium block pl-1">{errors.orderId}</span>
            )}
          </div>

          <div className="space-y-1.5">
            <label className="text-[10px] uppercase font-bold tracking-wider text-gray-500 block">
              Mobile Number
            </label>
            <input
              type="tel"
              placeholder="10-digit registered number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className={`w-full px-3.5 py-2.5 bg-gray-50 border rounded-xl outline-none text-xs focus:bg-white transition-colors ${
                errors.phone ? "border-red-500 focus:border-red-500" : "border-gray-200 focus:border-gray-400"
              }`}
            />
            {errors.phone && (
              <span className="text-[10px] text-red-500 font-medium block pl-1">{errors.phone}</span>
            )}
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-[#7B241C] hover:bg-[#E67E22] text-white font-serif font-bold text-xs tracking-wider rounded-xl shadow-md transition-colors cursor-pointer flex items-center justify-center gap-2"
          >
            <Search className="h-4 w-4" />
            <span>TRACK MY ORDER</span>
          </button>
        </form>

        {/* Tracking Timeline Output */}
        {trackingInfo && (
          <div className="border border-[#7B241C]/10 rounded-2xl p-5 bg-[#FFF9F0]/20 space-y-4 animate-fade-in">
            <div className="border-b border-[#7B241C]/10 pb-3 flex justify-between items-center text-xs">
              <div>
                <span className="text-gray-400 block text-[9px] uppercase tracking-wider">Logistics Partner</span>
                <span className="font-bold text-[#7B241C]">{trackingInfo.carrier}</span>
              </div>
              <div className="text-right">
                <span className="text-gray-400 block text-[9px] uppercase tracking-wider">Tracking ID</span>
                <span className="font-mono font-bold text-[#E67E22]">{trackingInfo.trackingNumber}</span>
              </div>
            </div>

            {/* Timeline Vertical */}
            <div className="relative border-l border-gray-200 ml-3.5 pl-5 space-y-6">
              {trackingInfo.timeline.map((step, index) => (
                <div key={index} className="relative">
                  {/* Timeline circle icon */}
                  <span
                    className={`absolute -left-[29px] top-0.5 w-4.5 h-4.5 rounded-full border-2 border-white flex items-center justify-center ${
                      step.completed ? "bg-[#7B241C] text-white" : "bg-gray-200 text-gray-400"
                    }`}
                  >
                    <CheckCircle className="h-3 w-3" />
                  </span>
                  <div className="space-y-0.5">
                    <h4 className={`text-xs font-bold ${step.completed ? "text-[#7B241C]" : "text-gray-400"}`}>
                      {step.title}
                    </h4>
                    <p className="text-[10px] text-gray-500 leading-normal font-light">{step.desc}</p>
                    <span className="text-[8px] font-mono text-[#E67E22] tracking-wider font-semibold block pt-0.5">
                      {step.date}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* WhatsApp Banner */}
        <div className="bg-[#E67E22]/5 border border-[#E67E22]/20 rounded-2xl p-4 space-y-3 text-center">
          <div className="space-y-1">
            <h4 className="font-serif text-xs font-bold text-[#7B241C] flex items-center justify-center gap-1.5">
              <PhoneCall className="h-4 w-4 text-[#E67E22]" />
              <span>Fastest Track Sourcing via WhatsApp</span>
            </h4>
            <p className="text-[10px] text-gray-600 leading-normal max-w-sm mx-auto">
              Alternatively, send your order details directly to our ashram support representative to fetch live carrier links instantly.
            </p>
          </div>
          <a
            href="https://wa.me/919999999999?text=Hi!%20I%20want%20to%20track%20my%20puja%20kit%20order."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-white font-semibold text-xs py-2.5 px-6 rounded-xl shadow-sm transition-all cursor-pointer w-full sm:w-auto"
          >
            <CheckCircle className="h-4 w-4 fill-white text-[#25D366]" />
            <span>TRACK ON WHATSAPP</span>
          </a>
        </div>

      </div>
    </div>
  );
}
