"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Product, ProductVariant } from "@/data/products";

export interface CartItem {
  slug: string;
  title: string;
  variantId: string;
  variantName: string;
  price: number;
  originalPrice: number;
  image: string;
  quantity: number;
}



interface CartContextType {
  cartItems: CartItem[];
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;

  addToCart: (product: Product, variant: ProductVariant, quantity?: number) => void;
  removeFromCart: (slug: string, variantId: string) => void;
  updateQuantity: (slug: string, variantId: string, quantity: number) => void;
  clearCart: () => void;
  cartCount: number;
  subtotal: number;
  originalSubtotal: number;
  triggerCheckout: (productSlug: string, variantId: string) => void;
  triggerCartCheckout: () => void;
  isHydrated: boolean;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    if (typeof window !== "undefined") {
      try {
        const stored = localStorage.getItem("kashi_prasad_cart");
        if (stored) return JSON.parse(stored);
      } catch (e) {
        console.error("Failed to load cart", e);
      }
    }
    return [];
  });
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsHydrated(true), 0);
  }, []);

  // Save cart to localStorage when it changes
  const saveCart = (items: CartItem[]) => {
    setCartItems(items);
    try {
      localStorage.setItem("kashi_prasad_cart", JSON.stringify(items));
    } catch (e) {
      console.error("Failed to save cart", e);
    }
  };

  const addToCart = (product: Product, variant: ProductVariant, quantity = 1) => {
    const existingIndex = cartItems.findIndex(
      (item) => item.slug === product.slug && item.variantId === variant.id
    );

    let updated: CartItem[];
    if (existingIndex > -1) {
      updated = [...cartItems];
      updated[existingIndex].quantity += quantity;
    } else {
      updated = [
        ...cartItems,
        {
          slug: product.slug,
          title: product.title,
          variantId: variant.id,
          variantName: variant.name,
          price: variant.price ?? 0,
          originalPrice: variant.originalPrice ?? 0,
          image: product.images[0]?.src || "/images/hero_puja_kit.png",
          quantity,
        },
      ];
    }
    saveCart(updated);
    setIsCartOpen(true); // Open the cart drawer automatically on add
  };

  const removeFromCart = (slug: string, variantId: string) => {
    const updated = cartItems.filter(
      (item) => !(item.slug === slug && item.variantId === variantId)
    );
    saveCart(updated);
  };

  const updateQuantity = (slug: string, variantId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(slug, variantId);
      return;
    }
    const updated = cartItems.map((item) =>
      item.slug === slug && item.variantId === variantId
        ? { ...item, quantity }
        : item
    );
    saveCart(updated);
  };

  const clearCart = () => {
    saveCart([]);
  };

  const triggerCheckout = (productSlug: string, variantId: string) => {
    setIsCartOpen(false);
    router.push(`/checkout?buyNow=true&slug=${productSlug}&variant=${variantId}`);
  };

  const triggerCartCheckout = () => {
    setIsCartOpen(false);
    router.push("/checkout?buyNow=false");
  };

  const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const originalSubtotal = cartItems.reduce((acc, item) => acc + item.originalPrice * item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        isCartOpen,
        setIsCartOpen,

        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        cartCount,
        subtotal,
        originalSubtotal,
        triggerCheckout,
        triggerCartCheckout,
        isHydrated,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
