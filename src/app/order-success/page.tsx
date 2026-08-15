import React from "react";
import OrderSuccessClient from "./OrderSuccessClient";

interface OrderSuccessPageProps {
  searchParams: Promise<{
    orderId?: string;
    name?: string;
    phone?: string;
    address?: string;
    city?: string;
    pincode?: string;
    amount?: string;
    paymentMethod?: string;
    items?: string;
  }>;
}

export default async function OrderSuccessPage({ searchParams }: OrderSuccessPageProps) {
  const resolvedParams = await searchParams;
  return <OrderSuccessClient searchParams={resolvedParams} />;
}
