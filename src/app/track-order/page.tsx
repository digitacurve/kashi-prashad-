import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";
import TrackOrderClient from "./TrackOrderClient";

export const metadata = {
  title: "Track Your Sacred Consignment | Kashi Prasad",
  description: "Track your puja kit order from Varanasi. Real-time updates on courier shipment dispatched from Dashashwamedh Ghat.",
};

export default function TrackOrderPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Sticky Header */}
      <div className="sticky top-0 z-50 w-full">
        <Header />
      </div>

      <main className="flex-grow pt-12 pb-20 bg-[#FFF9F0]/30">
        <TrackOrderClient />
      </main>

      <Footer />
      <CartDrawer />
    </div>
  );
}
