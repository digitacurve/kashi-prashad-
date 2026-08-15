import React from "react";
import CheckoutClient from "./CheckoutClient";

interface CheckoutPageProps {
  searchParams: Promise<{
    buyNow?: string;
    slug?: string;
    variant?: string;
  }>;
}

export default async function CheckoutPage({ searchParams }: CheckoutPageProps) {
  const resolvedParams = await searchParams;
  return <CheckoutClient searchParams={resolvedParams} />;
}
